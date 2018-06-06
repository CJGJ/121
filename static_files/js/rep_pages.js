/*
 * Holds the initializePage() function, which pulls representatives in the area and populates the page with
 * the representatives.
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
			url: 'https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyBrvfLVDyTJ1Ar8EdM1aZda_9141qQcCh4&address=' + address,
			dataType: 'json',
			success: function(data) {
			  console.log(data);

        //database.ref('representativeInfoResponse/').remove();
        //database.ref('representativeInfoResponse/').set(data);

          // iterate through all representatives and display to page
          $.each(data.offices, (i, office) => {

						let officeName = office.name;
          	let officialIndices = office.officialIndices;
						let official = 0;
						let name = '';
						let party = '';
						let address = '';
						let phones = '';
						let photoURL = '';



            //console.log(office);

            // Append offices to drop down menu
						if(officeName) {
              $('#offices').append(
								'<option value =' + officeName + '>' + officeName + '</option>'
						  );
					  }

            // display all candidates to views
						for (let j = 0; j < officialIndices.length; j++) {

							official = data.officials[officialIndices[j]];
							name = official.name;

							if(official.party) {
							  party = official.party;
						  } else {
								party = 'Undeclared';
							}

							address = official.address;

							if(official.phones) {
							  phones = official.phones[0];
						  } else {
								phones = '';
							}

							photoURL = official.photoUrl;

							if(official.urls) {
							  website = official.urls[0];
							} else {
								website = '';
							}

							console.log(name + ' ' + officeName + ' ' + officialIndices[j]);


							$('#representatives_container').append(
								`
							<div class="card-container">
								<!-- Image -->
								<div class="image-container">
									<i class="material-icons" id="favorite-card">favorite</i>
									<img class="official-image" src=${photoURL}></img>
								</div>

								<!-- Description -->
								<div class="description-container">
									<p class="title-rep">${officeName} | ${party}</p>
									<h2 id='rep-name'>${name}</h2>
									<p class="contact">${website}</p>

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
