// GOOGLE CIVIC INFORMATION API : www.googleapis.com/civicinfo/v2/elections?key=AIzaSyADkYE2PdLRu-ABMd763Qbu8YLzB4cRYQ8
/*
 * Holds the JS code for Elections page functions, such as putting markers on the map
 * and getting the list of current elections w/ click listeners for buttons.
 */

let electionArray = [];
let chosenElection = 0;

/*
 *  makes AJAX call working with the MapBox API to place markers on the map, representing
 *  polling locations in the area. Called when the user enters in a valid location
 *  into the search bar.
 */
function locationCall(pUrl, ev) {
	//AJAX call
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

					let geoString = '';
					let test = '';

					let locationData = data.pollingLocations;

					//removes any previous polling locations
					$(".electionContent").empty();

					for (const e of locationData) {
						let counter = 1;
						const pollName = e.address.locationName;
						const line1 = e.address.line1 + ', ';
						const city = e.address.city + ' ';
						const state = e.address.state;

						const locID = 'loc' + counter;

						const fullAddress = line1 + city + state;

						const hours = e.pollingHours;

						console.log(fullAddress);

						//appends the polling location to the side bar
						let popupDesc = '<h4 class="locations">' + hours + '</h4>' + '<h3 class="locations">' + pollName + '</h3>'+ '<p>' + line1 + '<br>' + city + ',' + state + '<br>' + '</p>';
						$(".electionContent").append('<li class="locations">' + '<h3>' + pollName + '</h3>'+ '<p>' + line1 + '<br>' + city + ',' + state + '<br>' + '</p>' + '</li>' );

					  apiKey = 'e6f1858a8df5a11a86911c88fdcd6c1110f6105';

						$.get('https://api.geocod.io/v1.3/geocode?q='+ encodeURIComponent(fullAddress) +'&api_key=' + encodeURIComponent(apiKey), function (response) {
						console.log(response.results);

						//gets the latitude and longitude of polling location
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

						// create DOM element for the marker
						var el = document.createElement('div');
						el.id = 'marker' + counter;


						//marker for the map
						let marker = new mapboxgl.Marker();

						//sets the latitude and longitude of marker
						marker.setLngLat(coordinates);

						//makes a pop-up for the marker
						let pu = new mapboxgl.Popup();
						pu.setLngLat(coordinates);
            pu.setHTML(popupDesc);
						//adds marker to map
						marker.setPopup(pu);
						marker.addTo(map);

						counter = counter + 1;
					});
				}
			}
		});
}

/*
 * calls initializePage() when the document is ready
 */
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

				//for all buttons for current elections
				console.log(electionArray.length + 'this');
				electionArray.forEach(function(idVal) {
					//adds click listener to each election button
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
