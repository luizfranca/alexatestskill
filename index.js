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
		"who are you"]
  },
  function(request,response) {
  	// response.say()

  	message = "We are a private innovation centre that creates products,\n services and businesses involving Communication and Information Technologies (ICTs).\n Since 1996, we develop solutions that permeate the whole process of generating \ninnovation in and with ICTs – from idea development, passing\n through conception and prototyping, up to the execution of projects for organizations from various sectors, such as telecom, electronics, defence, commercial automation, finances, logistics, energy, health and agribusiness. In 2016, CESAR’s innovation project sales surpassed R$ 78 million."

  	card = {
      "type": "Simple",
      "title": "CESAR Info",
      "content": message
    }

  	response.card(card)
    response.say(message);
  }
);

module.exports = app;