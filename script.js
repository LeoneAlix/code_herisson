var compteurVies;


// SESSION ACCUEIL



// FORMULAIRE NOMBRE PARTICIPANTS
// function afficher(form1) { 
// 	var testin =document.form1.input.value; 
// 	console.log(testin);
// 	// document.form1.output.value=testin;
// } 

$('#boutonForm').click(function() {
	
	var testin =document.form1.input.value; 

	if (testin < 2) {
		$('#fin_texte').append(testin + ' hérisson embarqué ! Il faudra tout donner pour qu’aucun de vous ne reste sur le bas-côté. Votre objectif sera d’atteindre le centre de transformation procédural avec le plus d’individus possible.');
	} else {
		$('#fin_texte').append(testin + ' hérissons embarqués ! Il faudra tout donner pour qu’aucun de vous ne reste sur le bas-côté. Votre objectif sera d’atteindre le centre de transformation procédural avec le plus d’individus possible.');	
	}

	localStorage.setItem('compteurVies', testin);
	localStorage.setItem('nbrParticipants', testin);
	compteurVies = localStorage.getItem('compteurVies');
	console.log(compteurVies);

	$("#form1").css('display', 'none');
	$("#btnNext6").css('display', 'block');

	// $('#fin_texte').append(testin + 'hérissons embarqués ! Il faudra tout donner pour qu’aucun de vous ne reste sur le bas-côté. Votre objectif sera d’atteindre le centre de transformation procédural avec le plus d’individus possible.');
});






// INTRODUCTION 0 -> 1


$('#btnNext1').click(function() {
	$('#modalIntro-1').css('display','block');
}); 


$("#modalIntro-1 .close").click(function() {
	$("#modalIntro-1").css('display', 'none');
});

$(window).click(function(event) {
	if (event.target.id == "modalIntro-1" ) {
		$("#modalIntro-1").css('display', 'none');
	}
});

$('#btnPrev1').click(function() {
	$("#modalIntro-1").css('display', 'none');
}); 


// INTRODUCTION 1 -> 2


$('#btnNext2').click(function() {
	$('#modalIntro-2').css('display','block');
	$('#modalIntro-1').css('display','none');
}); 


$("#modalIntro-2 .close").click(function() {
	$("#modalIntro-2").css('display', 'none');
});

$(window).click(function(event) {
	if (event.target.id == "modalIntro-2" ) {
		$("#modalIntro-2").css('display', 'none');
	}
});

$('#btnPrev2').click(function() {
	$("#modalIntro-2").css('display', 'none');
	$('#modalIntro-1').css('display','block');
}); 




// INTRODUCTION 2 -> 3


$('#btnNext3').click(function() {
	$('#modalIntro-3').css('display','block');
	$('#modalIntro-2').css('display','none');
}); 


$("#modalIntro-3 .close").click(function() {
	$("#modalIntro-3").css('display', 'none');
});

$(window).click(function(event) {
	if (event.target.id == "modalIntro-3" ) {
		$("#modalIntro-3").css('display', 'none');
	}
});
$('#btnPrev3').click(function() {
	$("#modalIntro-3").css('display', 'none');
	$("#modalIntro-2").css('display', 'block');
}); 




// INTRODUCTION 3 -> 4


$('#btnNext4').click(function() {
	$('#modalIntro-4').css('display','block');
	$("#modalIntro-3").css('display', 'none');
}); 


$("#modalIntro-4 .close").click(function() {
	console.log('close 4');
	$("#modalIntro-4").css('display', 'none');

});

$(window).click(function(event) {
	if (event.target.id == "modalIntro-4" ) {
		$("#modalIntro-4").css('display', 'none');
	}

});
$('#btnPrev4').click(function() {
	$("#modalIntro-4").css('display', 'none');
	$("#modalIntro-3").css('display', 'block');
}); 

// INTRODUCTION 4 -> 5


$('#btnNext5').click(function() {
	$('#modalIntro-5').css('display','block');
	$("#modalIntro-4").css('display', 'none');
}); 


$("#modalIntro-5 .close").click(function() {
	console.log('close 5');
	$("#modalIntro-5").css('display', 'none');

});

$(window).click(function(event) {
	if (event.target.id == "modalIntro-5" ) {
		$("#modalIntro-5").css('display', 'none');
	}

});
$('#btnPrev5').click(function() {
	$("#modalIntro-5").css('display', 'none');
	$("#modalIntro-4").css('display', 'block');
}); 









