module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'alexatestskill' );


app.launch( function( request, response ) {
	response.say( 'Welcome to your test skill' ).reprompt( 'Way to go. You got it to run. Bad ass.' ).shouldEndSession( false );
} );


app.error = function( exception, request, response ) {
	console.log(exception)
	console.log(request);
	console.log(response);	
	response.say( 'Sorry an error occured ' + error.message);
};

app.intent('sayNumber',
  {
    "slots":{"number":"NUMBER"}
	,"utterances":[ 
		"say the number {1-100|number}",
		"give me the number {1-100|number}",
		"tell me the number {1-100|number}",
		"I want to hear you say the number {1-100|number}"]
  },
  function(request,response) {
    var number = request.slot('number');
    response.say("Somos um centro privado de inovação que cria produtos, serviços e negócios com Tecnologias da Informação e Comunicação (TICs). Desde 1996, desenvolvemos soluções em todo o processo de geração de inovação em e com TICs - desde o desenvolvimento da ideia, passando pela concepção e prototipação, até a execução de projetos para empresas dos mais diversos setores, como telecomunicações, eletroeletrônicos, defesa, automação comercial, financeiro, logística, energia, saúde e agronegócio. Em 2014, o CESAR superou a marca de R$ 90 milhões em vendas de projetos de inovação.");
  }
);

module.exports = app;