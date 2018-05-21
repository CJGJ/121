// GOOGLE CIVIC INFORMATION API : www.googleapis.com/civicinfo/v2/elections?key=AIzaSyADkYE2PdLRu-ABMd763Qbu8YLzB4cRYQ8

let electionArray = [];
let chosenElection = 0;

/**
* checks if the Enter key is pressed
*/
function checkEnter(e) {
	if (e.keyCode == 13) {
		return false;
	}
	else {
		return true;
	}
}





function locationCall(pUrl, ev) {
	$.ajax({
				type: 'GET',
				url: pUrl,
				data: {
					'address': ev.result.place_name,
					'electionId': chosenElection,
					'key': 'AIzaSyAkklfRAMuZpLZK3Mp4tQvhttb00NHR260'
				},
				dataType: 'json',
				success: function(data) {
					console.log(data);
					console.log('we in this');

					console.log(data.pollingLocations);

					let geoString = '';
					let test = '';

					//console.log(data);
					//$.each(data.pollingLocations, function(i, pollingLocations) {
					//	const html = '<div class="election-name">' + data + '</div>';

					let locationData = data.pollingLocations;

					for (const e of locationData) {
						const pollName = e.address.locationName;
						const line1 = e.address.line1 + ', ';
						const city = e.address.city + ' ';
						const state = e.address.state;

						const fullAddress = line1 + city + state;


						console.log(fullAddress);
						$(".electionContent").append('<p class="locations">' + pollName + '<br>' + line1 + '<br>' + city + '<br>' + state + '<br>' + '</p>' );

					    apiKey = 'e6f1858a8df5a11a86911c88fdcd6c1110f6105';

						$.get('https://api.geocod.io/v1.3/geocode?q='+ encodeURIComponent(fullAddress) +'&api_key=' + encodeURIComponent(apiKey), function (response) {
						  console.log(response.results);

						  const lng = response.results[0].location.lng;
						  const lat = response.results[0].location.lat;


						  const coordinates = [lng, lat];


						  let geojsonTemplate =
							'{"type": "Feature","properties": {"message": "Foo","iconSize": [40, 40]},"geometry":{"type": "Point","coordinates": [' + lng + ',' + lat + ']}}, ';

						  geoString = geoString + geojsonTemplate;

						  const test = [geoString];


						  const geojson =
							{
							          "type": "FeatureCollection",
							          "features": [
							              test
							          ]
							 };

						console.log(geojson);

						 for(const p of geojson.features) {
						 	 console.log(p);
					          var el = document.createElement('div');
					          el.className = 'marker';
					          el.style.backgroundImage = 'url(https://placekitten.com/g/40/40)';
					          el.style.width = 40 + 'px';
					          el.style.height = 40 + 'px';
					          el.style.borderRadius = '50%';
					          var popup = new mapboxgl.Popup()
					              .setText('Construction on the Washington Monument began in 1848.');
					          // add marker to map
					          new mapboxgl.Marker(el)
					              .setLngLat(coordinates)
					              .setPopup(popup)
					              .addTo(map);
						 }


						  console.log(lat, lng);
						});
					}


					//console.log(ev.result.place_name);





					/*

					if (data.pollingLocations == undefined) {
						html = "No current Polling Locations";
					}
					else {
					 console.log(data.pollingLocations.address);
					 html = '<div class="election-name">' + data.pollingLocations.address + '</div><div class="election-id"> '+ data.pollingLocations.address + '</div><div class="electionDay">' + data.pollingLocations.pollingHours + '</div>';
				  }

				  */

					//});
				}
			});
}

$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

	let url = "https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyADkYE2PdLRu-ABMd763Qbu8YLzB4cRYQ8";
	//const url = "https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyAkklfRAMuZpLZK3Mp4tQvhttb00NHR260";
	//const pollURL = "https://www.googleapis.com/civicinfo/v2/voterinfo";

	$('#searchButton').click((e) => {
		e.preventDefault();
		console.log('Search Button Clicked');


		//gets all upcoming elections
		$.ajax({
			type: 'GET',
			url: url,
			dataType: 'json',
			success: (data) => {
				$.each(data.elections, function(i, election){
					//places a new button with an election onscreen
					console.log(election);
					const html = '<button class="election-button" id="' + election.id + '">' + election.name + '<br>' + election.id + '<br>' + election.id + '<br>' + election.electionDay + '</button>';
          			$(".electionContent").append(html);

					electionArray.push(election.id);
					console.log(electionArray.length);
				});

				//adds click listener to each election button
				console.log(electionArray.length + 'this');
				electionArray.forEach(function(idVal) {
					$('#' + idVal).click(function(e) {
						e.preventDefault();

						chosenElection = idVal;
						console.log(chosenElection);

						electionArray.forEach(function(removeVal) {
							$('#' + removeVal).remove();
						});
						$('.choose_election_title').hide();
						$('.geocoder_title').show();
						$('.search-container').show();
					});
				});


			}
		});



		//used when registered address is entered
/*		$.ajax({
			type: 'GET',
			url: pollURL,
			data: {
				'address': ev.result.place_name,
				'electionId': chosenElection
			},
			dataType: 'json',
			success: function(pollData) {

			}
		});
*/

		$('.geocoder_title').hide();
		$('.search-container').hide();


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
