module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'alexatestskill' );


app.launch( function( request, response ) {
    response.say( 'Welcome to Cesar! How can I help you?' ).reprompt( "I'm \
      sorry, I didn't hear anything. Can you\
      repeat?" ).shouldEndSession( false );
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

    dir = {
      "type": "Display.RenderTemplate",
        "template": {
          "type":"BodyTemplate1",
          "token": "A2079",
          "backButton": "VISIBLE",
          "title": "This is a title",
          "textContent": {
              "primaryText": {
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ornare mauris. Nulla facilisi. Vestibulum pellentesque dolor in quam pellentesque, non semper dui iaculis. Aliquam ornare, leo in placerat pellentesque, purus libero accumsan urna, id auctor odio lorem ac purus. Nullam eget vestibulum ante. Phasellus porta, tellus nec lacinia rhoncus, erat libero tincidunt neque, non venenatis elit mauris convallis ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum, dolor imperdiet iaculis laoreet, nulla nisi sodales ex, at accumsan est neque quis nunc.\
\
Donec non commodo nisi. Mauris eu mi malesuada, porta nunc id, blandit enim. Quisque laoreet, tellus et sagittis hendrerit, lorem urna hendrerit ligula, vitae posuere leo neque ullamcorper nulla. Morbi in ex sagittis, tempor diam at, elementum massa. Duis interdum sapien at risus iaculis accumsan. Vestibulum dapibus, libero sed consequat mollis, lorem eros faucibus orci, a auctor magna orci in est. Mauris condimentum non nisl sit amet hendrerit. Cras maximus, dolor nec luctus congue, leo ipsum varius dui, eu ultrices lectus felis vel mi.\
\
Morbi elementum fringilla nunc vitae efficitur. Aliquam vitae sapien blandit, finibus neque sit amet, imperdiet dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam augue mi, interdum id lacus vitae, eleifend hendrerit dolor. Maecenas a rhoncus dui. Suspendisse sagittis augue non sem dictum sodales. Proin suscipit ullamcorper consectetur. In pulvinar sollicitudin vehicula. Duis et lectus posuere, lobortis purus in, mollis massa. Morbi ac ligula maximus, ornare nisl vel, gravida leo. Ut et commodo dui. Nulla consequat vitae augue eu accumsan.\
\
Maecenas vel mattis dui. Etiam odio ligula, venenatis sit amet magna vel, porta viverra turpis. Etiam odio diam, sollicitudin id sollicitudin a, finibus a libero. Morbi et enim blandit, dignissim ligula facilisis, consequat augue. Quisque sed lacus diam. Pellentesque cursus odio ut ligula pretium, eget pretium mi vestibulum. Aenean sagittis eget leo in porta. Vivamus bibendum ligula risus, sit amet scelerisque augue sagittis quis. Nullam nisl sem, tristique non elementum ac, tincidunt sit amet mauris. Donec condimentum tincidunt ligula, eu lobortis mi aliquam vitae. Phasellus nec faucibus mauris. Curabitur tincidunt elit eget posuere elementum. Nam varius tempus enim vitae tincidunt. Aenean ipsum mauris, varius ut risus eget, egestas placerat sapien.\
\
In sit amet elit in dolor rhoncus feugiat fringilla vel arcu. Morbi tempor blandit lectus sed tincidunt. Praesent at eros porta, lacinia ante ut, rhoncus leo. Aenean et vehicula metus. Praesent ut convallis urna. Curabitur sed varius ex. Donec blandit justo sapien, sed malesuada ipsum tincidunt varius.",
                "type": "PlainText"
              }
            }
        }
      }

    // response.card(card);
    response.directive(dir)
    response.say(message);
  }
);

module.exports = app;