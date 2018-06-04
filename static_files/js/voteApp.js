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
	const $representatives_container = $('#representatives_container');

	//Search bar
	$('#search').keyup(function(e) {
		e.preventDefault();
		console.log('on search bar!');

		$('#result').html('');
		let searchField = $('#search').val();
		let expression = new RegExp(searchField, "i");

		$.ajax({
			type: 'GET',
			url: 'https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyBrvfLVDyTJ1Ar8EdM1aZda_9141qQcCh4&address=1263%20Pacific%20Ave.%20Kansas%20City%20KS&electionId=2000',
			dataType: 'json',
			success: function(candidates) {
			console.log(candidates);
          $.each(candidates.contests, function(i, candidate){

          	const office = candidates.contests[i].office;
          	const name = candidates.contests[i].candidates[0].name;
          	const party = candidates.contests[i].candidates[0].party;
          	const website = candidates.contests[i].candidates[0].candidateUrl;

						if(name.search(expression) != -1){
							$('#result').append('<li class="list-group-item"> '+name+' | <span class="text-muted"> '+party+' </span></li>');
						}
					});
				}
			});
			$('#result').on('click', 'li', function() {
			  var click_text = $(this).text().split('|');
			  $('#search').val($.trim(click_text[0]));
			  $("#result").html('');
			});
	});

	$('#refreshFeed').click(function(e) {
		e.preventDefault();
		console.log('button clicked');

		$.ajax({
			type: 'GET',
			url: 'https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyBrvfLVDyTJ1Ar8EdM1aZda_9141qQcCh4&address=1263%20Pacific%20Ave.%20Kansas%20City%20KS&electionId=2000',
			dataType: 'json',
			success: function(candidates) {
			console.log(candidates);
          $.each(candidates.contests, function(i, candidate){

          	const office = candidates.contests[i].office;
          	const name = candidates.contests[i].candidates[0].name;
          	const party = candidates.contests[i].candidates[0].party;
          	const website = candidates.contests[i].candidates[0].candidateUrl;

          	//console.log(office, name, party, website);

          	$representatives_container.append(
          		`
		        <div class="card-container">
		          <!-- Image -->
		          <div class="image-container">
		            <i class="material-icons" id="favorite-card">favorite</i>
		          </div>

		          <!-- Description -->
		          <div class="description-container">
		            <p class="title-rep">${office} | ${party}</p>
		            <h2>${name}</h2>
		            <p class="contact">${website}</p>

		          </div>

		          <!-- Button -->
		          <div class="buttons-container">
								<a href="#ex1" rel="modal:open"><button class="representative-button" >More Info <i class="material-icons" id="right-icon">chevron_right</i> </button></a>
							</div>

							<!-- Modal HTML embedded directly into document -->
							<div id="ex1" class="modal">
								<h4> ${office} </h4>
								<h2> ${name}</h2>
								<h4> ${party} </h4>
								<a href="${website}"><h5>Visit Site</h5></a>


								<div class="comment-container">
									<h5>Be part of your political community! Enter any information regarding the candidate</h5>

										<div class="input" id="chatsend">
											<input type="textbox" id="chatbox" value=""><br>
											<p class="send">Send</p>
										</div>

										<div id="chatContainer">
										</div>
								</div>

		        </div>
          		`
          		);

            //$candidates.append(`<a href="representative.html"><li>Representatives: <b>${candidates.contests[i].candidates[0].name}</b></li></a>`);
            //$candidates.append(`<p style="padding-left:20px">Party: <b>${candidates.contests[i].candidates[0].party}</b></p>`);
            console.log(candidates.contests[i].candidates[0].name);
				  });
			}
		});

  	console.log('test');
  });


}
