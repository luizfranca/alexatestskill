module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'alexatestskill' );


app.launch( function( request, response ) {
    response.say( 'Welcome to Cesar' ).reprompt( 'Way to go. \
        You got it to run. Bad ass.' ).shouldEndSession( false );
} );


app.error = function( exception, request, response ) {
    console.log(exception)
    console.log(request);
    console.log(response);  
    response.say( 'Sorry an error occured ' + error.message);
};

app.intent('cesarinfo',
  {
    "utterances":[ 
        "tell me about cesar",
        "tell me you",
        "who are you",
        "tell me about yourself"]
  },
  function(request,response) {
    message = "We are a private innovation centre that creates products, services and businesses involving Communication and Information Technologies (ICTs). Since 1996, we develop solutions that permeate the whole process of generating innovation in and with ICTs – from idea development, passing through conception and prototyping, up to the execution of projects for organizations from various sectors, such as telecom, electronics, defence, commercial automation, finances, logistics, energy, health and agribusiness. In 2016, CESAR’s innovation project sales surpassed R$ 78 million."

    card = {
      "type": "simple",
      "title": "CESAR Info",
      "content": message
    }


    response.card(card);
    response.say(message);
  }
);

app.intent('cesardirective',
  {
    "utterances":[ 
        "show info"]
  },
  function(request,response) {
    message = "This is the second message"

    card = {
      "type": "simple",
      "title": "CESAR Info",
      "content": message
    }

    dir = 
        {
  "type": "Display.RenderTemplate",
  "template": {
    "type": "BodyTemplate2",
    "token": "A2079",
    "backButton": "VISIBLE",
    "backgroundImage": {
      "contentDescription": "Textured grey background",
      "sources": [
        {
          "url": "https://www.example.com/background-image1.png"
        }
      ],
      "title": "My Favorite Car",
      "image": {
        "contentDescription": "My favorite car",
        "sources": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Logo_CESAR.png"
          }
        ]
      },
      "textContent": {
        "primaryText": {
          "text": "See my favorite car",
          "type": "PlainText"
        },
        "secondaryText": {
          "text": "Custom-painted",
          "type": "PlainText"
        },
        "tertiaryText": {
          "text": "By me!",
          "type": "PlainText"
        }
      }
    }
  }
}

    // response.directives = [dir];
    // response.card(card);
    response.directive(dir)
    response.say(message);
  }
);

module.exports = app;