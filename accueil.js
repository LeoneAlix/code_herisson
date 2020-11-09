
let babyHedgehogNumber = Math.floor(Math.random() * 5) + 1;

let HedgehogNumber = document.querySelector('.HedgehogNumber');


// const button = document.querySelector('button');

// button.onclick = function() {
//   let name = prompt('Quel est votre nom ?');
//   alert('Salut ' + name + ', sympa de vous voir !');
// }

var compteurNour = 0;
var compteurVies = localStorage.getItem('compteurVies');
console.log(compteurVies);


var attaqueRandom = ['attaqueRandom1', 'attaqueRandom2', 'attaqueRandom3'];

var traverseeRoute = ['modalRouteSauve', 'modalRouteSauve', 'modalRouteSauve', 'modalRouteMort', 'modalRouteMort'];

localStorage.setItem('attackShown1', 'false');
localStorage.setItem('attackShown2', 'false');
localStorage.setItem('attackShown3', 'false');

// FONCTION ATTAQUES RANDOMS


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function triggerAttack(time) {

	console.log(timer);
	console.log(localStorage.getItem('attackShown1'));

	if (timer > 0 && timer < time && localStorage.getItem('attackShown1') == 'false') {
		var num = getRandomInt(attaqueRandom.length);
		var chosenAttaque = attaqueRandom[num];
		$("#" + chosenAttaque).css('display', 'block');
		localStorage.setItem('attackShown1', true);
	}
}


// TIMER GLOBAL

var timer = 0;

$('#reset-timer').click(function() {
	timer = 3600;
}); 

var x = setInterval(function() {

	timer = timer - 1;

  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((timer % (60 * 60)) / 60);
  var seconds = Math.floor((timer % 60));

  // Display the result in the element with id="demo"

  if (seconds < 10) {
    document.getElementById("timer").innerHTML = minutes + ":0" + seconds;
  }
  else {
  	document.getElementById("timer").innerHTML = minutes + ":" + seconds;
  }

  triggerAttack(3595);

  // If the count down is finished, write some text 
  if (timer < 0) {
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);



// TIMER PARADE NUPTIALE

var timer2;

$('#btnReprod3').click(function() {
	timer2 = 60000;
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
	timer3 = 600000;
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
    document.getElementById("timer2").innerHTML = "Votre portée est née !";
    $("#btexte-nid").css('display', 'none');
    $("#btnReprod6").css('display', 'block');
  }
}, 1000);



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










