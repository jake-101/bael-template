module.exports = {
    // content/HelloWorld.md --> posts/hello-world
     content: {
       page: '/blog/_slug',
       permalink: ':year-:month-:day-:slug',
       isPost: true,
       generate: [
         'get',
         'getAll'
       ]
     }
    }