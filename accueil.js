
let babyHedgehogNumber = Math.floor(Math.random() * 5) + 1;

let HedgehogNumber = document.querySelector('.HedgehogNumber');


// const button = document.querySelector('button');

// button.onclick = function() {
//   let name = prompt('Quel est votre nom ?');
//   alert('Salut ' + name + ', sympa de vous voir !');
// }



var hasSeenTuto = localStorage.getItem('hasSeenTuto');

if (hasSeenTuto != 'true'){
	hasSeenTuto = 'false';
	localStorage.setItem('hasSeenTuto', 'false');
}

var compteurNour = 0;

if (localStorage.getItem('compteurNour')) {
	compteurNour = localStorage.getItem('compteurNour');
}


// localStorage.getItem('compteurNour');

updateCompteurNour(compteurNour);



var compteurVies = localStorage.getItem('compteurVies');
console.log(compteurVies);

updateCompteur(compteurVies);


var attaqueRandom = ['attaqueRandom1', 'attaqueRandom2', 'attaqueRandom3'];

// var nouvelleRegle = ['infoProc1', 'infoProc2', 'infoProc3', 'infoProc4'];

var traverseeRoute = ['modalRouteSauve', 'modalRouteSauve', 'modalRouteSauve', 'modalRouteSauve', 'modalRouteMort'];

var nombrePetits = [3, 4, 5, 6, 7];

localStorage.setItem('attackShown1', 'false');
localStorage.setItem('attackShown2', 'false');
localStorage.setItem('attackShown3', 'false');

localStorage.setItem('infoProcShown1', 'false');
localStorage.setItem('infoProcShown2', 'false');
localStorage.setItem('infoProcShown3', 'false');
localStorage.setItem('infoProcShown4', 'false');
localStorage.setItem('infoProcShown5', 'false');


// TUTO DEBUT
if (hasSeenTuto == 'false'){

	$("#modalTuto1").toggle();
	$("#btnReproduction").toggleClass("highlight");

	$("#btnReproduction").toggleClass("move-image");


	// $("#modalTuto1 .close").click(function() {
	// $("#modalTuto1").toggle();
	// $("#btnReproduction").toggleClass("highlight");
	// });

	// $(window).click(function(event) {
	// if (event.target.id == "modalTuto1" ) {
	// 	$("#modalTuto1").toggle();
	// 	$("#btnReproduction").toggleClass("highlight");
	// }
	// });

	$('#btnTuto1').click(function() {
		$("#modalTuto1").toggle();
		$("#modalTuto2").toggle();
	}); 

	$('#skip-button').click(function() {
		$("#modalTuto1").toggle();
		localStorage.setItem('countDownDate', Date.now()+3600000);
	});


	$('#btnAccueilTuto').click(function() {
		$("#modalTuto1").toggle();
		$("#modalTuto2").toggle();
	}); 

	$('#btnTuto2').click(function() {
		$("#modalTuto2").toggle();
		$("#btnReproduction").toggleClass("highlight");
		$("#btnReproduction").toggleClass("move-image");
		$("#modalTuto3").toggle();
	});

	$('#btnAccueilTuto2').click(function() {
		$("#modalTuto2").toggle();
		$("#modalTuto3").toggle();
		$("#btnReproduction").toggleClass("highlight");
		$("#btnReproduction").toggleClass("move-image");
	}); 

	$('#btnTuto3').click(function() {
		$("#modalTuto3").toggle();
		$("#btnNourriture").toggleClass("highlight");
		$("#btnNourriture").toggleClass("move-image2");
		$("#modalTuto4").toggle();
	});

	$('#btnAccueilTuto3').click(function() {
		$("#modalTuto3").toggle();
		$("#modalTuto4").toggle();
		$("#btnNourriture").toggleClass("highlight");
		$("#btnNourriture").toggleClass("move-image2");
	}); 

	$('#btnTuto4').click(function() {
		$("#modalTuto4").toggle();
		$("#modalTuto5").toggle();
	});

	$('#btnAccueilTuto4').click(function() {
		$("#modalTuto4").toggle();
		$("#modalTuto5").toggle();
	});

	$('#btnTuto5').click(function() {
		$("#modalTuto5").toggle();
		$("#btnNourriture").toggleClass("highlight");
		$("#btnNourriture").toggleClass("move-image2");
		$("#modalTuto6").toggle();
	});

	$('#btnAccueilTuto5').click(function() {
		$("#modalTuto5").toggle();
		$("#modalTuto6").toggle();
		$("#btnNourriture").toggleClass("highlight");
		$("#btnNourriture").toggleClass("move-image2");
	}); 

	$('#btnTuto6').click(function() {
		$("#modalTuto7").toggle();
		$("#btnArbore").toggleClass("highlight");
		$("#btnHerbace").toggleClass("highlight");
		$("#btnArtif").toggleClass("highlight");
		$("#btnRoute").toggleClass("highlight");
		$("#modalTuto6").toggle();
	});

	$('#btnAccueilTuto6').click(function() {
		$("#modalTuto6").toggle();
		$("#modalTuto7").toggle();
		$("#btnArbore").toggleClass("highlight");
		$("#btnHerbace").toggleClass("highlight");
		$("#btnArtif").toggleClass("highlight");
		$("#btnRoute").toggleClass("highlight");
	}); 

	$('#btnTuto7').click(function() {
		$("#modalTuto8").toggle();
		$("#btnArbore").toggleClass("move-image3");
		$("#btnHerbace").toggleClass("highlight");
		$("#btnArtif").toggleClass("highlight");
		$("#btnRoute").toggleClass("highlight");
		$("#modalTuto7").toggle();
	});

	$('#btnAccueilTuto7').click(function() {
		$("#modalTuto8").toggle();
		$("#modalTuto7").toggle();
		$("#btnArbore").toggleClass("move-image3");
		$("#btnHerbace").toggleClass("highlight");
		$("#btnArtif").toggleClass("highlight");
		$("#btnRoute").toggleClass("highlight");
	});

	$('#btnTuto8').click(function() {
		$("#modalTuto9").toggle();
		$("#btnArbore").toggleClass("move-image3");
		$("#btnArbore").toggleClass("highlight");
		$("#btnHerbace").toggleClass("move-image4");
		$("#btnHerbace").toggleClass("highlight");
		$("#modalTuto8").toggle();
	});

	$('#btnAccueilTuto8').click(function() {
		$("#modalTuto9").toggle();
		$("#modalTuto8").toggle();
		$("#btnArbore").toggleClass("move-image3");
		$("#btnArbore").toggleClass("highlight");
		$("#btnHerbace").toggleClass("move-image4");
		$("#btnHerbace").toggleClass("highlight");
	});

	$('#btnTuto9').click(function() {
		$("#modalTuto10").toggle();
		$("#btnHerbace").toggleClass("move-image4");
		$("#btnHerbace").toggleClass("highlight");
		$("#btnArtif").toggleClass("move-image5");
		$("#btnArtif").toggleClass("highlight");
		$("#modalTuto9").toggle();
	});

	$('#btnAccueilTuto9').click(function() {
		$("#modalTuto10").toggle();
		$("#btnHerbace").toggleClass("move-image4");
		$("#btnHerbace").toggleClass("highlight");
		$("#btnArtif").toggleClass("move-image5");
		$("#btnArtif").toggleClass("highlight");
		$("#modalTuto9").toggle();
	});

	$('#btnTuto10').click(function() {
		$("#modalTuto11").toggle();
		$("#btnArtif").toggleClass("move-image5");
		$("#btnArtif").toggleClass("highlight");
		$("#btnRoute").toggleClass("move-image6");
		$("#btnRoute").toggleClass("highlight");
		$("#modalTuto10").toggle();
	});

	$('#btnAccueilTuto10').click(function() {
		$("#modalTuto11").toggle();
		$("#btnArtif").toggleClass("move-image5");
		$("#btnArtif").toggleClass("highlight");
		$("#btnRoute").toggleClass("move-image6");
		$("#btnRoute").toggleClass("highlight");
		$("#modalTuto10").toggle();
	});

	$('#btnTuto11').click(function() {
		$("#modalTuto11").toggle();
		$("#modalTuto12").toggle();
		$("#btnRoute").toggleClass("move-image6");
		$("#btnRoute").toggleClass("highlight");
		$("#btnVehicule").toggleClass("highlight");
		$("#btnHumain").toggleClass("highlight");
		$("#btnHerisson").toggleClass("highlight");
	});

	$('#btnAccueilTuto11').click(function() {
		$("#modalTuto11").toggle();
		$("#modalTuto12").toggle();
		$("#btnRoute").toggleClass("move-image6");
		$("#btnRoute").toggleClass("highlight");
		$("#btnVehicule").toggleClass("highlight");
		$("#btnHumain").toggleClass("highlight");
		$("#btnHerisson").toggleClass("highlight");
	}); 

	$('#btnTuto12').click(function() {
		$("#modalTuto12").toggle();
		$("#modalTuto13").toggle();
		$("#btnVehicule").toggleClass("move-image7");
		$("#btnHumain").toggleClass("highlight");
		$("#btnHerisson").toggleClass("highlight");
	});

	$('#btnAccueilTuto12').click(function() {
		$("#modalTuto13").toggle();
		$("#btnVehicule").toggleClass("move-image7");
		$("#btnHumain").toggleClass("highlight");
		$("#btnHerisson").toggleClass("highlight");
		$("#modalTuto12").toggle();
	});

	$('#btnTuto13').click(function() {
		$("#modalTuto13").toggle();
		$("#modalTuto14").toggle();
		$("#btnVehicule").toggleClass("move-image7");
		$("#btnVehicule").toggleClass("highlight");
		$("#btnHumain").toggleClass("move-image8");
		$("#btnHumain").toggleClass("highlight");
	});

	$('#btnAccueilTuto13').click(function() {
		$("#modalTuto14").toggle();
		$("#btnVehicule").toggleClass("move-image7");
		$("#btnVehicule").toggleClass("highlight");
		$("#btnHumain").toggleClass("move-image8");
		$("#btnHumain").toggleClass("highlight");
		$("#modalTuto13").toggle();
	});

	$('#btnTuto14').click(function() {
		$("#modalTuto15").toggle();
		$("#modalTuto14").toggle();
		$("#btnHumain").toggleClass("move-image8");
		$("#btnHumain").toggleClass("highlight");
		$("#btnHerisson").toggleClass("move-image9");
		$("#btnHerisson").toggleClass("highlight");
	});

	$('#btnAccueilTuto14').click(function() {
		$("#modalTuto15").toggle();
		$("#btnHumain").toggleClass("move-image8");
		$("#btnHumain").toggleClass("highlight");
		$("#btnHerisson").toggleClass("move-image9");
		$("#btnHerisson").toggleClass("highlight");
		$("#modalTuto14").toggle();
	});

	$('#btnTuto15').click(function() {
		$("#modalTuto15").toggle();
		$("#btnHerisson").toggleClass("move-image9");
		$("#btnHerisson").toggleClass("highlight");
		localStorage.setItem('countDownDate', Date.now()+3600000);
	});


	localStorage.setItem('hasSeenTuto', 'true');

}

// FONCTION ATTAQUES RANDOMS

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function triggerAttack(time) {

	console.log(distance);
	console.log(localStorage.getItem('attackShown1'));

	if (distance > 0 && distance < time && localStorage.getItem('attackShown1') == 'false') {
		var num = getRandomInt(attaqueRandom.length);
		var chosenAttaque = attaqueRandom[num];
		$("#" + chosenAttaque).css('display', 'block');
		localStorage.setItem('attackShown1', true);
	}
}

// FONCTION CHANGEMENT REGLES

function chgtRegles1(time) {
	if (timer > 0 && timer < time && localStorage.getItem('infoProcShown1') == 'false') {
		$("#infoProc1").css('display', 'block');
		localStorage.setItem('infoProcShown1', true);
	}
}

function chgtRegles2(time) {
	if (timer > 0 && timer < time && localStorage.getItem('infoProcShown2') == 'false') {
		$("#infoProc2").css('display', 'block');
		localStorage.setItem('infoProcShown2', true);
	}
}

function chgtRegles3(time) {
	if (timer > 0 && timer < time && localStorage.getItem('infoProcShown3') == 'false') {
		$("#infoProc3").css('display', 'block');
		localStorage.setItem('infoProcShown3', true);
	}
}

function chgtRegles4(time) {
	if (timer > 0 && timer < time && localStorage.getItem('infoProcShown4') == 'false') {
		$("#infoProc4").css('display', 'block');
		localStorage.setItem('infoProcShown4', true);
	}
}

function chgtRegles5(time) {
	if (timer > 0 && timer < time && localStorage.getItem('infoProcShown5') == 'false') {
		$("#infoProc5").css('display', 'block');
		localStorage.setItem('infoProcShown5', true);
	}
}


// TIMER GLOBAL

// Set the date we're counting down to
var countDownDate = 0;

// Update the count down every 1 second
var x = setInterval(function() {

	countDownDate = localStorage.getItem('countDownDate');

  // Get today's date and time
  var now = Date.now();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);



  // If the count down is finished, write some text 
  if (seconds < 10) {
  	document.getElementById("timer").innerHTML = minutes + ":0" + seconds ;
  } else {
  	// Display the result in the element with id="demo"
  	document.getElementById("timer").innerHTML = minutes + ":" + seconds ;
  }


  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "";
  }

  triggerAttack(3599400);
  triggerAttack(3599990);
  triggerAttack(3599990);
  chgtRegles1(time);
  chgtRegles2(time);
  chgtRegles3(time);
  chgtRegles4(time);
  chgtRegles5(time);

}, 1000);





// TIMER PARADE NUPTIALE

var timer2;

$('#btnReprod3').click(function() {
	timer2 = 6000;
}); 

var x2 = setInterval(function() {

	timer2 = timer2 - 1000;

  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((timer2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timer2 % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"

  if (seconds < 10) {
    document.getElementById("timer2").innerHTML = minutes + ":0" + seconds;
  }
  else {
  	document.getElementById("timer2").innerHTML = minutes + ":" + seconds;
  }

  // If the count down is finished, write some text 
  if (timer2 < 0) {
    document.getElementById("timer2").innerHTML = "C'est fini !";
    $("#btnReprod4").css('display', 'block');
  }
}, 1000);



// TIMER Gestation + nid

var timer3;

$('#btnReprod5').click(function() {
	timer3 = 6000;
}); 

var x2 = setInterval(function() {

	timer3 = timer3 - 1000;

  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((timer3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timer3 % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"

  if (seconds < 10) {
    document.getElementById("timer3").innerHTML = minutes + ":0" + seconds;
  }
  else {
  	document.getElementById("timer3").innerHTML = minutes + ":" + seconds;
  }

  // If the count down is finished, write some text 
  if (timer3 < 0) {
    document.getElementById("timer3").innerHTML = "Votre portée est née !";
    $("#btexte-nid").css('display', 'none');
    $("#btnReprod6").css('display', 'block');
  }
}, 1000);


// TIMER PARADE NUPTIALE POUR HERISSON

var timer4;

$('#btnHerisson3').click(function() {
	timer4 = 60000;
}); 

var x2 = setInterval(function() {

	timer4 = timer4 - 1000;

  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((timer4 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timer4 % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"

  if (seconds < 10) {
    document.getElementById("timer4").innerHTML = minutes + ":0" + seconds;
  }
  else {
  	document.getElementById("timer4").innerHTML = minutes + ":" + seconds;
  }

  // If the count down is finished, write some text 
  if (timer4 < 0) {
    document.getElementById("timer4").innerHTML = "C'est fini !";
    $("#btnHerisson4").css('display', 'block');
  }
}, 1000);



// TIMER Gestation + nid POUR HERISSON

var timer5;

$('#btnHerisson5').click(function() {
	timer5 = 600000;
}); 

var x2 = setInterval(function() {

	timer5 = timer5 - 1000;

  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((timer5 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timer5 % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"

  if (seconds < 10) {
    document.getElementById("timer5").innerHTML = minutes + ":0" + seconds;
  }
  else {
  	document.getElementById("timer5").innerHTML = minutes + ":" + seconds;
  }

  // If the count down is finished, write some text 
  if (timer3 < 0) {
    document.getElementById("timer5").innerHTML = "Votre portée est née !";
    $("#btexte-nid").css('display', 'none');
    $("#btnHerisson6").css('display', 'block');
  }
}, 1000);


// TIMER ROULER EN BOULE

var timer6 = 0;

$('#btnVehicule2').click(function() {
	timer6 = 20;
}); 

var x = setInterval(function() {

	timer6 = timer6 - 1;

  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((timer6 % (60 * 60)) / 60);
  var seconds = Math.floor((timer6 % 60));

  // Display the result in the element with id="demo"

  if (seconds < 10) {
    document.getElementById("timer6").innerHTML = minutes + ":0" + seconds;
  }
  else {
  	document.getElementById("timer6").innerHTML = minutes + ":" + seconds;
  }

  // If the count down is finished, write some text 
  if (timer6 < 0) {
    document.getElementById("timer6").innerHTML = "Vous pouvez repartir";
    $("#btnVehicule3").css('display', 'block');
  }
}, 1000);



// COMPTEUR VIE

function updateCompteur(compteurVies) {
	for (i = 0; i <= 12; i++) {
		if (i <= compteurVies) {
			$("#vie"+i).css('display', 'block'); 
		}
		else{
			$("#vie"+i).css('display', 'none');
		}
	}
	console.log("test");
}



// COMPTEUR NOURRITURE

function updateCompteurNour(compteurNour) {
	for (i = 0; i <= 12; i++) {
		if (i <= compteurNour) {
			$("#nour"+i).css('display', 'block'); 
		}
		else{
			$("#nour"+i).css('display', 'none');
		}
	}
	console.log("test");
}



// ZONE ARBOREE

$('#btnArbore').click(function() {
	$('#modalArbore').css('display','block');
}); 


$("#modalArbore .close").click(function() {
	$("#modalArbore").css('display', 'none');
});

$(window).click(function(event) {
	if (event.target.id == "modalArbore" ) {
		$("#modalArbore").css('display', 'none');
	}
});

$('#btnAccueilArbore').click(function() {
	$("#modalArbore").css('display', 'none');
}); 



// ZONE HERBACEE 


$('#btnHerbace').click(function() {
	$('#modalHerbace').css('display','block');
}); 


$("#modalHerbace .close").click(function() {
	$("#modalHerbace").css('display', 'none');
});

$(window).click(function(event) {
	if (event.target.id == "modalHerbace" ) {
		$("#modalHerbace").css('display', 'none');
	}
});

$('#btnAccueilHerbace').click(function() {
	$("#modalHerbace").css('display', 'none');
}); 


// ZONE ARTIFICIALISEE

$('#btnArtif').click(function() {
	$('#modalArtif').css('display','block');
}); 


$("#modalArtif .close").click(function() {
	$("#modalArtif").css('display', 'none');
});

$(window).click(function(event) {
	if (event.target.id == "modalArtif" ) {
		$("#modalArtif").css('display', 'none');
	}
});

$('#btnAccueilArtif').click(function() {
	$("#modalArtif").css('display', 'none');
}); 


// ROUTE


$('#btnRoute').click(function() {
	$('#modalRoute').css('display','block');
}); 


$("#modalRoute .close").click(function() {
	$("#modalRoute").css('display', 'none');
});

$(window).click(function(event) {
	if (event.target.id == "modalRoute" ) {
		$("#modalRoute").css('display', 'none');
	}
});

$('#btnAccueilRoute').click(function() {
	$("#modalRoute").css('display', 'none');
}); 

$('#btnRoute2').click(function() {
	var num2 = getRandomInt(traverseeRoute.length);
	var chosenRoute = traverseeRoute[num2];
	$("#" + chosenRoute).css('display', 'block');
	$("#modalRoute").css('display', 'none');
	if (chosenRoute == "modalRouteMort") {
		compteurVies = compteurVies - 1;
		console.log(compteurVies);
		updateCompteur(compteurVies);
		localStorage.setItem('compteurVies', compteurVies);
	}
});

$("#modalRouteSauve .close").click(function() {
	$("#modalRouteSauve").css('display', 'none');
});

$(window).click(function(event) {
	if (event.target.id == "modalRoute" ) {
		$("#modalRouteSauve").css('display', 'none');
	}
});

$("#modalRouteMort .close").click(function() {
	$("#modalRouteMort").css('display', 'none');
});

$(window).click(function(event) {
	if (event.target.id == "modalRoute" ) {
		$("#modalRouteMort").css('display', 'none');
	}
});

$('#btnAccueilRoute2').click(function() {
	$("#modalRouteMort").css('display', 'none');
	$("#modalRouteSauve").css('display', 'none');
	$("#modalRoute").css('display', 'block');
}); 

$('#btnRoute3').click(function() {
	$("#modalRouteMort").css('display', 'none');
	$("#modalRouteSauve").css('display', 'none');
	$("#modalRoute").css('display', 'none');
}); 

$('#btnAccueilRoute3').click(function() {
	$("#modalRouteMort").css('display', 'none');
	$("#modalRouteSauve").css('display', 'none');
	$("#modalRoute").css('display', 'block');
}); 

$('#btnRoute4').click(function() {
	$("#modalRouteMort").css('display', 'none');
	$("#modalRouteSauve").css('display', 'none');
	$("#modalRoute").css('display', 'none');
}); 



// NOURRITURE

$('#btnNourriture').click(function() {
	$('#modalNourriture').css('display','block');
}); 



$("#modalNourriture .close").click(function() {
	$("#modalNourriture").css('display', 'none');
});

$(window).click(function(event) {
	if (event.target.id == "modalNourriture" ) {
		$("#modalNourriture").css('display', 'none');
	}
});

$('#btnAccueil').click(function() {
	$("#modalNourriture").css('display', 'none');
	
}); 





// fIN NOURRITURE


$('#btnFinNour').click(function() {
	$('#modalFinNour').css('display','block');
	$("#modalNourriture").css('display', 'none');
	compteurNour = compteurNour + 1;
	console.log(compteurNour);
	localStorage.setItem('compteurNour', compteurNour);
	updateCompteurNour(compteurNour);
}); 


$("#modalFinNour .close").click(function() {
	$("#modalFinNour").css('display', 'none');
});

$(window).click(function(event) {
	if (event.target.id == "modalFinNour" ) {
		$("#modalFinNour").css('display', 'none');
	}
});

$('#btnPhotoNour2').click(function() {
	$('#modalNourriture').css('display','block');
	$('#modalFinNour').css('display','none');
});

$('#btnAccueil2').click(function() {
	$("#modalFinNour").css('display','none');

}); 




// >REPRODUCTION


$('#btnReproduction').click(function() {
	$('#modalReproduction').css('display','block');
}); 


$("#modalReproduction .close").click(function() {
	$("#modalReproduction").css('display', 'none');
});

$(window).click(function(event) {
	if (event.target.id == "modalReproduction" ) {
		$("#modalReproduction").css('display', 'none');
	}
});

$('#btnAccueilReprod').click(function() {
	$("#modalReproduction").css('display', 'none');
}); 


//  REPRODUCTION 2

$('#btnReprod2').click(function() {
	$("#modalReproduction2").css('display','block');
	$("#modalReproduction").css('display', 'none');
}); 


$("#modalReproduction2 .close").click(function() {
	$("#modalReproduction2").css('display', 'none');
});

$(window).click(function(event) {
	if (event.target.id == "modalReproduction2" ) {
		$("#modalReproduction2").css('display', 'none');
	}
});

$('#btnAccueilReprod2').click(function() {
	$("#modalReproduction2").css('display', 'none');
	$('#modalReproduction').css('display','block');
}); 


//  REPRODUCTION 3

$('#btnReprod3').click(function() {
	$("#modalReproduction3").css('display','block');
	$("#modalReproduction2").css('display', 'none');
}); 


$("#modalReproduction3 .close").click(function() {
	$("#modalReproduction3").css('display', 'none');
});

$(window).click(function(event) {
	if (event.target.id == "modalReproduction3" ) {
		$("#modalReproduction3").css('display', 'none');
	}
});

$('#btnAccueilReprod3').click(function() {
	$("#modalReproduction3").css('display', 'none');
	$('#modalReproduction2').css('display','block');
}); 

//  REPRODUCTION 4

$('#btnReprod4').click(function() {
	$("#modalReproduction4").css('display','block');
	$("#modalReproduction3").css('display', 'none');
}); 


$("#modalReproduction4 .close").click(function() {
	$("#modalReproduction4").css('display', 'none');
});

$(window).click(function(event) {
	if (event.target.id == "modalReproduction4" ) {
		$("#modalReproduction4").css('display', 'none');
	}
});

$('#btnAccueilReprod4').click(function() {
	$("#modalReproduction4").css('display', 'none');
	$('#modalReproduction3').css('display','block');
}); 

//  REPRODUCTION 5

$('#btnReprod5').click(function() {
	$("#modalReproduction5").css('display','block');
	$("#modalReproduction4").css('display', 'none');
}); 


$("#modalReproduction5 .close").click(function() {
	$("#modalReproduction5").css('display', 'none');
});

$(window).click(function(event) {
	if (event.target.id == "modalReproduction5" ) {
		$("#modalReproduction5").css('display', 'none');
	}
});

$('#btnAccueilReprod5').click(function() {
	$("#modalReproduction5").css('display', 'none');
	$('#modalReproduction4').css('display','block');
}); 

//  REPRODUCTION 6

$('#btnReprod6').click(function() {
	$("#modalReproduction5").css('display', 'none');
	$("#modalReproduction6").css('display', 'block');
	var num3 = getRandomInt(nombrePetits.length);
	var nombreNes = nombrePetits[num3];
	$('#fin_texte2').append(nombreNes + ' petits hérissons !');
	compteurVies = Number(compteurVies) + Number(nombreNes);
	console.log('fin repro:' + compteurVies);
	localStorage.setItem('compteurVies', compteurVies);
	updateCompteur(compteurVies);
}); 


$("#modalReproduction6 .close").click(function() {
	$("#modalReproduction6").css('display', 'none');
});

$(window).click(function(event) {
	if (event.target.id == "modalReproduction6" ) {
		$("#modalReproduction6").css('display', 'none');
	}
});

$('#btnAccueilReprod6').click(function() {
	$("#modalReproduction6").css('display', 'none');
	$('#modalReproduction5').css('display','block');
}); 

$('#btnReprod7').click(function() {
	$("#modalReproduction6").css('display', 'none');
}); 


// VEHICULE


$('#btnVehicule').click(function() {
	$('#modalVehicule').css('display','block');
}); 


$("#modalVehicule .close").click(function() {
	$("#modalVehicule").css('display', 'none');
});

$(window).click(function(event) {
	if (event.target.id == "modalVehicule" ) {
		$("#modalVehicule").css('display', 'none');
	}
});

$('#btnAccueilVehicule').click(function() {
	$("#modalVehicule").css('display', 'none');
});

// VEHICULE 2

$('#btnVehicule2').click(function() {
	$("#modalVehicule").css('display', 'none');
	$('#modalVehicule2').css('display','block');
});

$("#modalVehicule2 .close").click(function() {
	$("#modalVehicule2").css('display', 'none');
});

$(window).click(function(event) {
	if (event.target.id == "modalVehicule2" ) {
		$("#modalVehicule2").css('display', 'none');
	}
});

$('#btnAccueilVehicule2').click(function() {
	$("#modalVehicule2").css('display', 'none');
	$("#modalVehicule").css('display', 'block');
});

$('#btnVehicule3').click(function() {
	$("#modalVehicule2").css('display', 'none');
});


// HUMAIN


$('#btnHumain').click(function() {
	$('#modalHumain').css('display','block');
}); 


$("#modalHumain .close").click(function() {
	$("#modalHumain").css('display', 'none');
});

$(window).click(function(event) {
	if (event.target.id == "modalHumain" ) {
		$("#modalHumain").css('display', 'none');
	}
});

$('#btnAccueilHumain').click(function() {
	$("#modalHumain").css('display', 'none');
});


// HERISSON


$('#btnHerisson').click(function() {
	$('#modalHerisson').css('display','block');
}); 


$("#modalHerisson .close").click(function() {
	$("#modalHerisson").css('display', 'none');
});

$(window).click(function(event) {
	if (event.target.id == "modalHerisson" ) {
		$("#modalHerisson").css('display', 'none');
	}
});

$('#btnAccueilHerisson').click(function() {
	$("#modalHerisson").css('display', 'none');
}); 

$('#btnHerisson2').click(function() {
	$("#modalHerisson2").css('display','block');
	$("#modalHerisson").css('display', 'none');
}); 

$("#modalHerisson2 .close").click(function() {
	$("#modalHerisson2").css('display', 'none');
});

$(window).click(function(event) {
	if (event.target.id == "modalHerisson2" ) {
		$("#modalHerisson2").css('display', 'none');
	}
});

$('#btnAccueilHerisson2').click(function() {
	$("#modalHerisson2").css('display', 'none');
	$("#modalHerisson").css('display', 'block');
}); 

$('#btnHerisson3').click(function() {
	$("#modalHerisson3").css('display','block');
	$("#modalHerisson2").css('display', 'none');
}); 

$("#modalHerisson3 .close").click(function() {
	$("#modalHerisson3").css('display', 'none');
});

$(window).click(function(event) {
	if (event.target.id == "modalHerisson3" ) {
		$("#modalHerisson3").css('display', 'none');
	}
});

$('#btnAccueilHerisson3').click(function() {
	$("#modalHerisson3").css('display', 'none');
	$("#modalHerisson2").css('display', 'block');
}); 

$('#btnHerisson4').click(function() {
	$("#modalHerisson4").css('display','block');
	$("#modalHerisson3").css('display', 'none');
});

$("#modalHerisson4 .close").click(function() {
	$("#modalHerisson4").css('display', 'none');
});

$(window).click(function(event) {
	if (event.target.id == "modalHerisson4" ) {
		$("#modalHerisson4").css('display', 'none');
	}
});

$('#btnAccueilHerisson4').click(function() {
	$("#modalHerisson4").css('display', 'none');
	$("#modalHerisson3").css('display', 'block');
});  

$('#btnHerisson5').click(function() {
	$("#modalHerisson5").css('display','block');
	$("#modalHerisson4").css('display', 'none');
});

$("#modalHerisson5 .close").click(function() {
	$("#modalHerisson5").css('display', 'none');
});

$(window).click(function(event) {
	if (event.target.id == "modalHerisson5" ) {
		$("#modalHerisson5").css('display', 'none');
	}
});

$('#btnAccueilHerisson5').click(function() {
	$("#modalHerisson5").css('display', 'none');
	$("#modalHerisson4").css('display', 'block');
});  

$('#btnHerisson6').click(function() {
	$("#modalHerisson5").css('display','block');
	$("#modalHerisson4").css('display', 'none');
});




// INFORMATIONS PROCEDURALES



$(window).click(function(event) {
	if (event.target.id == "infoProc1" ) {
		$("#infoProc1").css('display', 'none');
	}
});
$('#btninfoProc1').click(function() {
	$("#infoProc1").css('display', 'none');
});


$(window).click(function(event) {
	if (event.target.id == "infoProc2" ) {
		$("#infoProc2").css('display', 'none');
	}
});
$('#btninfoProc2').click(function() {
	$("#infoProc2").css('display', 'none');
});


$(window).click(function(event) {
	if (event.target.id == "infoProc3" ) {
		$("#infoProc3").css('display', 'none');
	}
});
$('#btninfoProc3').click(function() {
	$("#infoProc3").css('display', 'none');
});


$(window).click(function(event) {
	if (event.target.id == "infoProc4" ) {
		$("#infoProc4").css('display', 'none');
	}
});
$('#btninfoProc4').click(function() {
	$("#infoProc4").css('display', 'none');
});



// ATTAQUE RANDOM



$(window).click(function(event) {
	if (event.target.id == "attaqueRandom1" ) {
		$("#attaqueRandom1").css('display', 'none');
	}
});
$('#btnattaqueRandom1').click(function() {
	$("#attaqueRandom1").css('display', 'none');
});



$(window).click(function(event) {
	if (event.target.id == "attaqueRandom2" ) {
		$("#attaqueRandom2").css('display', 'none');
	}
});
$('#btnattaqueRandom2').click(function() {
	$("#attaqueRandom2").css('display', 'none');
});


$(window).click(function(event) {
	if (event.target.id == "attaqueRandom3" ) {
		$("#attaqueRandom3").css('display', 'none');
	}
});
$('#btnattaqueRandom3').click(function() {
	$("#attaqueRandom3").css('display', 'none');
});







