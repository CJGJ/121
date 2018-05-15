// GOOGLE CIVIC INFORMATION API : www.googleapis.com/civicinfo/v2/elections?key=AIzaSyADkYE2PdLRu-ABMd763Qbu8YLzB4cRYQ8

$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

	let url = "https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyADkYE2PdLRu-ABMd763Qbu8YLzB4cRYQ8";

	$('#searchButton').click((e) => {
		e.preventDefault();
		console.log('Search Button Clicked');

		$.ajax({
			type: 'GET',
			url: url,
			dataType: 'json',
			success: (data) => {
				$.each(data.elections, function(i, election){
					const html = '<div class="election-name">' + election.name + '</div><div class="election-id">ID : '
            + election.id + '</div><div class="electionDay">' + election.electionDay + '</div>';
          $(".electionContent").append(html);
				});
			}
		});
	});

  /*  */
  $('.vi-button').click((e) => {
		console.log('Voter Info Query Button Clicked');

    let address = "1263%20Pacific%20Ave.%20Kansas%20City%20KS";
    let electionID = 2000;

    url = "https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyADkYE2PdLRu-ABMd763Qbu8YLzB4cRYQ8&address=" + address + "&electionId=" + electionID;

		$.ajax({
			type: 'GET',
			url: url,
			dataType: 'json',
			success: (data) => {
				console.log(data);
			}
		});
	});

}
