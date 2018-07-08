"use latest";
const client = require("@sendgrid/client");

function addSendgridRecipient(client, email, firstName) {
  return new Promise((fulfill, reject) => {
    const data = [
      {
        email: email,
        first_name: firstName
      }
    ];
    const request = {
      method: "POST",
      url: "/v3/contactdb/recipients",
      body: data
    };

    client
      .request(request)
      .then(([response, body]) => {
        console.log(response.statusCode);
        console.log(body);
        fulfill(response);
        // cb(null, response);
      })
      .catch(error => reject(error));
  });
}

function sendWelcomeEmail(client, email, firstName, senderEmail, senderName, templateID) {
  return new Promise((fulfill, reject) => {
    const data = {
      from: {
        email: senderEmail,
        name: senderName
      },
      reply_to: {
        email: senderEmail
      },
      personalizations: [
        {
          to: [
            {
              email: email,
              name: firstName
            }
          ],
          substitutions: {
            "<%name%>": firstName
          }
        }
      ],
      template_id: templateID
    };

    const request = {
      method: "POST",
      url: "/v3/mail/send",
      body: data
    };

    client
      .request(request)
      .then(([response, body]) => {
        console.log(response.statusCode);
        console.log(body);
        fulfill(response);
      })
      .catch(error => reject(error));
  });
}

exports.handler = function(event, context, callback) {
  const {
    SENDGRID_API_KEY,
    SENDGRID_WELCOME_SENDER_EMAIL,
    SENDGRID_WELCOME_SENDER_NAME,
    SENDGRID_WELCOME_TEMPLATE_ID
  } = process.env;
  const body = JSON.parse(event.body);
  const email = body.email;
  const firstName = body.first_name;
  const welcomeEmail = event.queryStringParameters.welcome_email === "true";

  client.setApiKey(SENDGRID_API_KEY);
  addSendgridRecipient(client, email, firstName)
    .then((response, body) => {
      if (welcomeEmail) {
        sendWelcomeEmail(
          client,
          email,
          firstName,
          SENDGRID_WELCOME_SENDER_EMAIL,
          SENDGRID_WELCOME_SENDER_NAME,
          SENDGRID_WELCOME_TEMPLATE_ID
        )
				.then(response => callback(null, { statusCode: response.statusCode, body: "" }) )
				.catch(err => callback(err, null));
      } else {
        callback(null, { statusCode: response.statusCode, body: "" });
      }
    })
    .catch(err => callback(err, null));
};