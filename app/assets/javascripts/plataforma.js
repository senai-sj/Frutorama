//alert("!");
function pausa() {
	alert("Jogo Pausado\nClique OK para resumir");
}
$(document).ready(function() {
	
	$(".fim").hide();
	$(".pausa").hide();
	$("#player").hide();
	$("#maca").hide();
	$("#maca_v").hide();
	$("#melancia").hide();
	$("#melao").hide();
	$("#laranja").hide();
	$("#refri").hide();
	$("#donut").hide();
	$("#miojo").hide();


});

function start() {
	$(".fim").hide();
	$(".pausa").hide();
	$(".inicio").hide();
	$("#player").show();
	$("#maca").show();
	$("#maca_v").show();
	$("#melancia").show();
	$("#melao").show();
	$("#laranja").show();
	$("#refri").show();
	$("#donut").show();
	$("#miojo").show();


	// Posicionamento 
	posY = parseInt($("#maca").css("top"));
   	respawn = parseInt(Math.random()*515);
	$("#maca").css("left",respawn);
	$("#maca").css("top", 0);

	posY = parseInt($("#melao").css("top"));
   	respawn = parseInt(Math.random()*515);
	$("#melao").css("left",respawn);
	$("#melao").css("top", 0);

	posY = parseInt($("#donut").css("top"));
   	respawn = parseInt(Math.random()*515);
	$("#donut").css("left",respawn);
	$("#donut").css("top", 0);

	posY = parseInt($("#laranja").css("top"));
   	respawn = parseInt(Math.random()*515);
	$("#laranja").css("left",respawn);
	$("#laranja").css("top", 0);

	posY = parseInt($("#refri").css("top"));
   	respawn = parseInt(Math.random()*515);
	$("#refri").css("left",respawn);
	$("#refri").css("top", 0);

	posY = parseInt($("#maca_v").css("top"));
   	respawn = parseInt(Math.random()*515);
	$("#refri").css("left",respawn);
	$("#refri").css("top", 0);

	posY = parseInt($("#miojo").css("top"));
   	respawn = parseInt(Math.random()*515);
	$("#refri").css("left",respawn);
	$("#refri").css("top", 0);

	posY = parseInt($("#melancia").css("top"));
   	respawn = parseInt(Math.random()*515);
	$("#refri").css("left",respawn);
	$("#refri").css("top", 0);
	
	var musica = document.getElementById('musica');
	musica.addEventListener("ended",function(){musica.currentTime=0;musica.play();},false);
	musica.play();

var timer = 6000;
var pontos = 0;
var recorde = 0;
var positionY = parseInt(Math.random()*720);

var TECLA = {
	// WASD
	W:87,
	A:65,
	S:83,
	D:68,
	P:80,

	// Setas do Teclado
	UP:38,
	LEFT:37,
	DOWN:40,
	RIGHT:39,
}

var jogo = {};
jogo.press = [];

$(function() {

	jogo.timer = setInterval(loop,10);

	$(document).keydown(function(e){
	jogo.press[e.which] = true;
	});

	$(document).keyup(function(e){
	jogo.press[e.which] = false;
	});

	var endgame = document.getElementById('vitoria');

});
// Loop principal
function loop() {
	pontuacao();
	cronos();
	movimento();
	/* Objetos */
	frutaA();
	frutaB();
	frutaC();
	frutaD();
	frutaE();
	prodA();
	prodB();
	prodC();
	/* Colisão */
	colisao();
}
// movimentação dos objetos
function movimento() {
	if (jogo.press[TECLA.A] || jogo.press[TECLA.LEFT]){

		var esquerda = parseInt($("#player").css("left"));
 		$("#player").css("left",esquerda-3);

 		if (esquerda <= 0){
 			$("#player").css("left",esquerda+0);
 		}
	}
 	if (jogo.press[TECLA.D] || jogo.press[TECLA.RIGHT]){

		var direita = parseInt($("#player").css("left"));
 		$("#player").css("left",direita+3);

 		if (direita >= 720){
 			$("#player").css("left",direita-0);
 		}
	}
}

function frutaA() {
	posicaoY = parseFloat($("#maca").css("top"));
	$("#maca").css("top",posicaoY+1.8);

	if (posicaoY >= 520) {
		respawn = parseInt(Math.random()*720);
		$("#maca").css("left",respawn);
		$("#maca").css("top", 0);
	}
}
function frutaB() {
	posicaoY = parseFloat($("#melao").css("top"));
	$("#melao").css("top",posicaoY+2);

	if (posicaoY >= 520) {
		respawn = parseInt(Math.random()*720);
		$("#melao").css("left",respawn);
		$("#melao").css("top", 0);
	}
}
function frutaC() {
	posicaoY = parseFloat($("#laranja").css("top"));
	$("#laranja").css("top",posicaoY+1.9);

	if (posicaoY >= 520) {
		respawn = parseInt(Math.random()*720);
		$("#laranja").css("left",respawn);
		$("#laranja").css("top", 0);
	}
}
function frutaD() {
	posicaoY = parseFloat($("#melancia").css("top"));
	$("#melancia").css("top",posicaoY+2.4);

	if (posicaoY >= 520) {
		respawn = parseInt(Math.random()*720);
		$("#melancia").css("left",respawn);
		$("#melancia").css("top", 0);
	}
}
function frutaE() {
	posicaoY = parseFloat($("#maca_v").css("top"));
	$("#maca_v").css("top",posicaoY+1.3);

	if (posicaoY >= 520) {
		respawn = parseInt(Math.random()*720);
		$("#maca_v").css("left",respawn);
		$("#maca_v").css("top", 0);
	}
}
function prodA() {
	posicaoY = parseFloat($("#donut").css("top"));
	$("#donut").css("top",posicaoY+2);

	if (posicaoY >= 520) {
		respawn = parseInt(Math.random()*720);
		$("#donut").css("left",respawn);
		$("#donut").css("top", 0);
	}
}
function prodB() {
	posicaoY = parseFloat($("#refri").css("top"));
	$("#refri").css("top",posicaoY+2);

	if (posicaoY >= 520) {
		respawn = parseInt(Math.random()*720);
		$("#refri").css("left",respawn);
		$("#refri").css("top", 0);
	}
}
function prodC() {
	posicaoY = parseFloat($("#miojo").css("top"));
	$("#miojo").css("top",posicaoY+1.4);

	if (posicaoY >= 520) {
		respawn = parseInt(Math.random()*720);
		$("#miojo").css("left",respawn);
		$("#miojo").css("top", 0);
	}
}
// Colisão
function colisao() {
    var playerY = parseInt($("#player").css("top"));
    var playerL = parseInt($("#player").css("left"));
    var playerR = parseInt($("#player").css("left")) + $("#player").width();

    var fruta1Y = parseInt($("#maca").css("top")) + $("#maca").height();
    var fruta1L = parseInt($("#maca").css("left"));
    var fruta1R = parseInt($("#maca").css("left")) + $("#maca").width();

    var prod1Y = parseInt($("#donut").css("top")) + $("#donut").height();
    var prod1L = parseInt($("#donut").css("left"));
    var prod1R = parseInt($("#donut").css("left")) + $("#donut").width();

    var fruta2Y = parseInt($("#melao").css("top")) + $("#melao").height();
    var fruta2L = parseInt($("#melao").css("left"));
    var fruta2R = parseInt($("#melao").css("left")) + $("#melao").width();

    var fruta3Y = parseInt($("#laranja").css("top")) + $("#laranja").height();
    var fruta3L = parseInt($("#laranja").css("left"));
    var fruta3R = parseInt($("#laranja").css("left")) + $("#laranja").width();

    var fruta4Y = parseInt($("#melancia").css("top")) + $("#melancia").height();
    var fruta4L = parseInt($("#melancia").css("left"));
    var fruta4R = parseInt($("#melancia").css("left")) + $("#melancia").width();

    var fruta5Y = parseInt($("#maca_v").css("top")) + $("#maca_v").height();
    var fruta5L = parseInt($("#maca_v").css("left"));
    var fruta5R = parseInt($("#maca_v").css("left")) + $("#maca_v").width();

    var prod2Y = parseInt($("#refri").css("top")) + $("#refri").height();
    var prod2L = parseInt($("#refri").css("left"));
    var prod2R = parseInt($("#refri").css("left")) + $("#refri").width();

    var prod3Y = parseInt($("#miojo").css("top")) + $("#miojo").height();
    var prod3L = parseInt($("#miojo").css("left"));
    var prod3R = parseInt($("#miojo").css("left")) + $("#miojo").width();

       if(playerY <= fruta1Y){
             if(
            fruta1L >= playerL && fruta1L <= playerR ||
            fruta1R >= playerL && fruta1R <= playerR
        ){
        posY = parseInt($("#maca").css("top"));
	   	respawn = parseInt(Math.random()*720);
		$("#maca").css("left",respawn);
		$("#maca").css("top", 0);
            pontos+=100; 
            if (pontos<0) {
                 pontos=0;
            }
        }
    }
    	if(playerY <= fruta2Y){
             if(
            fruta2L >= playerL && fruta2L <= playerR ||
            fruta2R >= playerL && fruta2R <= playerR
        ){
        posY = parseInt($("#melao").css("top"));
	   	respawn = parseInt(Math.random()*720);
		$("#melao").css("left",respawn);
		$("#melao").css("top", 0);
            pontos+=300; 
            if (pontos<0) {
                 pontos=0;
            }
        }
    }
        if(playerY <= fruta3Y){
            if(
            fruta3L >= playerL && fruta3L <= playerR ||
            fruta3R >= playerL && fruta3R <= playerR
        ){
        posY = parseInt($("#laranja").css("top"));
	   	respawn = parseInt(Math.random()*720);
		$("#laranja").css("left",respawn);
		$("#laranja").css("top", 0);
            pontos+=100; 
            if (pontos<0) {
                 pontos=0;
            }
        }
    }
        if(playerY <= fruta4Y){
             if(
            fruta4L >= playerL && fruta4L <= playerR ||
            fruta4R >= playerL && fruta4R <= playerR
        ){
        posY = parseInt($("#melancia").css("top"));
	   	respawn = parseInt(Math.random()*720);
		$("#melancia").css("left",respawn);
		$("#melancia").css("top", 0);
            pontos+=300; 
            if (pontos<0) {
                 pontos=0;
            }
        }
    }
    	if(playerY <= fruta5Y){
             if(
            fruta5L >= playerL && fruta5L <= playerR ||
            fruta5R >= playerL && fruta5R <= playerR
        ){
        posY = parseInt($("#maca_v").css("top"));
	   	respawn = parseInt(Math.random()*720);
		$("#maca_v").css("left",respawn);
		$("#maca_v").css("top", 0);
            pontos+=300; 
            if (pontos<0) {
                 pontos=0;
            }
        }
    }
    	if(playerY <= prod1Y){
             if(
            prod1L >= playerL && prod1L <= playerR ||
            prod1R >= playerL && prod1R <= playerR
        ){
        posY = parseInt($("#donut").css("top"));
	   	respawn = parseInt(Math.random()*720);
		$("#donut").css("left",respawn);
		$("#donut").css("top", 0); 
            pontos+=100; 
            if (pontos<0) {
                 pontos=0;
            }
        }
    }
    	if(playerY <= prod2Y){
             if(
            prod2L >= playerL && prod2L <= playerR ||
            prod2R >= playerL && prod2R <= playerR
        ){
        posY = parseInt($("#refri").css("top"));
	   	respawn = parseInt(Math.random()*720);
		$("#refri").css("left",respawn);
		$("#refri").css("top", 0); 
              pontos+=150; 
            if (pontos<0) {
                 pontos=0;
            }
        }
    }
    	if(playerY <= prod3Y){
             if(
            prod3L >= playerL && prod3L <= playerR ||
            prod3R >= playerL && prod3R <= playerR
        ){
        posY = parseInt($("#miojo").css("top"));
	   	respawn = parseInt(Math.random()*720);
		$("#miojo").css("left",respawn);
		$("#miojo").css("top", 0); 
              pontos+=135; 
            if (pontos<0) {
                 pontos=0;
            }
        }
    }
}
        
// Códigos do HUD
function vidas() {

	$("#saude").html("<p>Vidas: "+ vida +"♥</p>");

}
function pontuacao(){

	$("#placar").html("<p>Pontos: "+ pontos +"</p>");

}

function cronos() {
	timer--;
	$("#tempo").html("<p>["+timer+"]</p>");
	if (timer == 0) {
		fim();
	}
}
function fim() {
	window.clearInterval(jogo.timer);
	jogo.timer=null;
	$("#player").hide();
	
	$(".fim").show();
	musica.pause();
	vitoria.play();

	$(".fim").html("<h1>Fim de Jogo</h1> <h1>Pontuação Final:"+pontos+"</h1><p>Clique aqui para jogar novamente</p>");
	}
}
