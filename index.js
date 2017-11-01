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
  	card = {
      "type": "Simple",
      "title": "Horoscope",
      "content": "Today will provide you a new learning opportunity.  Stick with it and the possibilities will be endless."
    }

  	response.card(card)
    response.say("We are a private innovation centre that creates products, services and businesses involving Communication and Information Technologies (ICTs). Since 1996, we develop solutions that permeate the whole process of generating innovation in and with ICTs – from idea development, passing through conception and prototyping, up to the execution of projects for organizations from various sectors, such as telecom, electronics, defence, commercial automation, finances, logistics, energy, health and agribusiness. In 2016, CESAR’s innovation project sales surpassed R$ 78 million.");
  }
);

module.exports = app;