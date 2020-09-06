---
  title: Email Newsletter Setup Instructions
  date: Sunday July 8th, 2018
  thumbnail: /images/uploads/email.png
  category: Setup
---
 # Using the Netlify Lambda Function for Sendgrid Mailing List

A "ready to deploy" serverless mailing list subscription API endpoint using a Netlify function and the [Sendgrid](https://sendgrid.com) API. Collect emails and optionally, a welcome messages with a single `POST` HTTP request. Based on [code from ndethore](https://github.com/ndethore/lambda-sendgrid-mailinglist-api).

### Prerequisites

* Sendgrid Account + Sendgrid API Key
* Create a verified sender
* (Optional) Create a welcome email template and get the ID for it

The Deploy button will ask for your Sendgrid API keys and other settings upon installation or they can be entered in the Deploy Settings in your Netlify admin panel. Add the following environment variables for the function:

<img src="https://github.com/ndethore/lambda-sendgrid-mailinglist-api/raw/master/media/env_vars.png" width="1272">

### Usage

It is only mandatory to enter your Sendgrid API Key. If you would like to send a welcome email, then fill out the rest of the environment variables. Turn on the email newsletter signup box by going in the Netlify CMS backend and editing the Setup collection. Under Site Info, you will find a switch to turn it on.

![Turn on Sendgrid Email Signup](/images/uploads/turn-on-sendgrid.png)

The signup box will be activated and you are all set!

![signup form box](/images/uploads/signup.png)

Add the query parameter `?welcome_email=true` to email newly added recipients using the specified Sendgrid template ID.
