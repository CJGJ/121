$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

	//const url = "https://api.nytimes.com/svc/search/v2/candidatesearch.json?api-key=bebd5673446e40c0a0613cd3ea327a8d";
	const $candidates = $('#candidates');

	$('#refreshFeed').click(function(e) {
		e.preventDefault();
		console.log('button clicked');
		$.ajax({
			type: 'GET',
			url: 'https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyBrvfLVDyTJ1Ar8EdM1aZda_9141qQcCh4&address=1263%20Pacific%20Ave.%20Kansas%20City%20KS&electionId=2000',
			dataType: 'json',
			success: function(candidates) {
					console.log("google api loaded");
          $.each(candidates.contests, function(i, candidate){
            $candidates.append(`<li>Representatives: <b>${candidates.contests[i].candidates[0].name}</b></li>`);
            $candidates.append(`<p style="padding-left:20px">Party: <b>${candidates.contests[i].candidates[0].party}</b></p>`);
            console.log(candidates);
				  });
			}
		});

  	console.log('test');
  });
}
