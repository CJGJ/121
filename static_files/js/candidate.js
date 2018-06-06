/*
*Specific page that focuses on retrieving and displaying the candidates in a card format
*using the google civic info API
*/
$(document).ready(function() {
	initializePage();
});



function initializePage() {

  console.log('rep_pages.js connected')

	const database = firebase.database();

  $('button.representative-button').click( (e) => {
    e.preventDefault();
    console.log('rep-button click');
    //const name = $.closest('#rep-name');
    //window.location.href = '/representative/' + name;
  });


  // put action listeners here
  $('#search_reps').click(()=> {

    // get the address from the search bar
    const address = $('#search').val();
    console.log('Searching for representatives at ' + address);

    // make the API call with the Address
    $.ajax({
			type: 'GET',
			url: 'https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyBrvfLVDyTJ1Ar8EdM1aZda_9141qQcCh4&address=' + address,
			dataType: 'json',
			success: function(data) {
			  console.log(data);

				const electionID = data.election.id;

        database.ref('voterInfoResponse/').remove();
        database.ref('voterInfoResponse/').set(data);
        // post the data from API to /representative
        //const electionID = data.election.id;
        /*$.ajax({
          data: JSON.stringify(data),
          dataType: 'application/json',
          contentType: 'application/json; charset=utf-8',
          type: 'POST',
          url: '/representative',
          success: (res) => {
            console.log('Contest data posted to /representative');
          },
          failure: (errMsg) => {
            console.log(errMsg);
          }
        });*/

          // iterate through all representatives and display to page
          $.each(data.contests, (i, contest) => {

						let office = contest.office; //data.contests[i].office;
          	let name = ''; //data.contests[i].candidates[0].name;
          	let party = ''; //data.contests[i].candidates[0].party;
          	let website = ''; //data.contests[i].candidates[0].candidateUrl;
						let candidates = 0;
						let arrayLength = 0;

            //console.log(contest);

            // Append offices to drop down menu
						if(office) {
              $('#offices').append(
								'<option value =' + office + '>' + office + '</option>'
						  );
					  }


						// check for candidates and put into array
            if(contest.candidates) {
              candidates = contest.candidates;
						  arrayLength = contest.candidates.length;
            }

            // display all candidates to views
						for (let j = 0; j < arrayLength; j++) {
							name = candidates[j].name;
							party = candidates[j].party;


							$('#representatives_container').append(
								`
							<div class="card-container">
								<!-- Image -->
								<div class="image-container">
									<i class="material-icons" id="favorite-card">favorite</i>
								</div>

								<!-- Description -->
								<div class="description-container">
									<p class="title-rep">${office} | ${party}</p>
									<h2 id='rep-name'>${name}</h2>
									<p class="contact">${website}</p>

								</div>

								<!-- Button -->
								<div class="buttons-container">
									<a href="/candidate/${office}/${name}" rel="modal:open"><button class="representative-button" >More Info <i class="material-icons" id="right-icon">chevron_right</i> </button></a>
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
						}
				 });
			 }
		});
  }); // end of listener
}
