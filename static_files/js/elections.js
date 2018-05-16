// GOOGLE CIVIC INFORMATION API : www.googleapis.com/civicinfo/v2/elections?key=AIzaSyADkYE2PdLRu-ABMd763Qbu8YLzB4cRYQ8

$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

	const url = "https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyADkYE2PdLRu-ABMd763Qbu8YLzB4cRYQ8";

	$('#searchButton').click(function(e) {
		e.preventDefault();
		console.log('button clicked');

		$.ajax({
			type: 'GET',
			url: url,
			dataType: 'json',
			success: function(data) {
				console.log(data);
				$.each(data.elections, function(i, election){
					const html = '<div class="election-name">' + election.name + '</div><div class="election-id">ID : '
            + election.id + '</div><div class="electionDay">' + election.electionDay + '</div>';
          $(".electionContent").append(html);
				});
			}
		});
	});

}
