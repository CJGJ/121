// GOOGLE CIVIC INFORMATION API : www.googleapis.com/civicinfo/v2/elections?key=AIzaSyADkYE2PdLRu-ABMd763Qbu8YLzB4cRYQ8

let electionArray = [];
let chosenElection = 0;

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

					let locationData = data.pollingLocations;

					for (const e of locationData) {
						let counter = 1;
						const pollName = e.address.locationName;
						const line1 = e.address.line1 + ', ';
						const city = e.address.city + ' ';
						const state = e.address.state;

						const fullAddress = line1 + city + state;

						const hours = e.pollingHours;

						console.log(fullAddress);
						let popupDesc = '<h4 class="locations">' + hours + '</h4>' + '<h3 class="locations">' + pollName + '</h3>'+ '<p>' + line1 + '<br>' + city + ',' + state + '<br>' + '</p>';
						$(".electionContent").append('<li class="locations">' + '<h3>' + pollName + '</h3>'+ '<p>' + line1 + '<br>' + city + ',' + state + '<br>' + '</p>' + '</li>' );

					  apiKey = 'e6f1858a8df5a11a86911c88fdcd6c1110f6105';

						$.get('https://api.geocod.io/v1.3/geocode?q='+ encodeURIComponent(fullAddress) +'&api_key=' + encodeURIComponent(apiKey), function (response) {
						console.log(response.results);

						const lng = response.results[0].location.lng;
						const lat = response.results[0].location.lat;

						const coordinates = [lng, lat];


					  let geojsonTemplate =
							'{type: "Feature",geometry":{"type": "Point","coordinates": [' + lng + ',' + lat + ']}, Properties: {description: ' + '<li class="locations">' + '<h3>' + pollName + '</h3>'+ '<p>' + line1 + '<br>' + city + ',' + state + '<br>' + '</p>' + '</li>' + 'marker-color: #f74545, marker-size: large, marker-symbol:' + counter +'}}, ';

						geoString = geoString + geojsonTemplate;

					  console.log(geojsonTemplate);

					  const test = [geoString];

					  const geojson =
						{
						          "type": "FeatureCollection",
						          "features": [
						              test
						          ]
						 };


					  //	const marker = new mapboxgl.Marker();
						let marker = new mapboxgl.Marker();


						marker.setLngLat(coordinates);

						let pu = new mapboxgl.Popup();
						pu.setLngLat(coordinates);
            pu.setHTML(popupDesc);

						marker.setPopup(pu);
						marker.addTo(map);

						counter = counter + 1;
					});
				}
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

		const url = "https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyAkklfRAMuZpLZK3Mp4tQvhttb00NHR260";
		const pollURL = "https://www.googleapis.com/civicinfo/v2/voterinfo";

		//gets all upcoming elections
		$.ajax({
			type: 'GET',
			url: url,
			dataType: 'json',
			success: function(data) {
				//console.log(data);
				$.each(data.elections, function(i, election){
					//places a new button with an election onscreen
					console.log(election);
					const html = '<div class="election-button" id="' + election.id + '"> <h3>' + election.name + '</h3>'  + '<p>Election Date: ' + election.electionDay + '</p>' + '<p>Election ID: '  + election.id + '</p>' + '<br>' + '</div>';
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
		$('.geocoder_title').hide();
		$('.search-container').hide();
}
