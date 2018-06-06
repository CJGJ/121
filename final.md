# unBiased

## Team Name: CJGJ
- **Jan Eric De Castro**
- **Cameron Lee**
- **Joel Loo**
- **German Flores**

## Contributions:

**Jan**: Jan has mostly worked on the debate page to make sure that it's fully functional and connected to the firebase database. He also collaborated with Joel Loo for the elections page. After Joel wrote the code for pulling the address data from the Google Civic Information API for all of the polling locations, Jan integrated a geocode api that parses through the addresses and coverts them into coordinates to visualize points on the map. He also worked on creating the basic wireframes and creating a consistent style for the app.

**Cameron**: Cameron worked on the home/represenatative page and help fix the search bar that was located on the home to help find candidates. He created a unique handlebars route for each time you go to a new candidate and was able to pass the data for each specific candidate through the routs. Cameron has also helped troubleshoot lots of backend problems and helped manage a good github work flow. 
 
**German**: German has worked mainly on the home/representative page with Cameron in an attempt to figure out the optimal way for users to gine the right candidates for them. Has focused mainly on attributing backup for whenever their was an area that need looking at. Made a modal pop up view of the deailed view for each candidate card in the case that the handlebars routes didn't properly function.

**Joel**: Joel has worked mainly on the Elections page, helping design the UI and writing code for the overall functionality. Joel used the MapBox API and the Google Civic Information API to pull a list of all upcoming elections, which the user chooses first. After this, Joel wrote the code to pull address data from a Google Maps search bar, which is used to pull a JSON object holding all of the polling locations within the area. Lastly, Joel wrote the code to place markers on the MapBox Map for each polling location, with a pop-up which describes the open hours, name, and address of the polling location. He has also done general UI refining on all pages and created a basic login page for the app.

## Source Code Files:

**HTML**:
- **debate.html** - Shows all the content of the page and connects with debateTopic.js for full functionality. Contains the button for creating new debate topics.
- **elections.html** - Contains header, search box, and div to show the mapbox map. It also contains some JS code that creates the map and pulls the address value from the search box. This is connects to elections.js to for full functionality.
- **representative.html**:
- **voteApp.html**:
- **login.html**: A simple login page, which incorporates a username and password text box in order for the user to log in. Uses a "Wizard of Oz" login just to show basic functionality.

**CSS**:
- **main.css** - Contains all of the styling for common components in all the html files (header, font, color, buttons, etc.)
- **debate.css** - Contains the styling for the debate.html page. It mostly styles the page so that it displays three cards in every row. Also styles the images and comment layout in the cards and modal.
- **elections.css** - Minimal styling - just styles the left hand portion of the elections.html file which displays the election IDs and addresses.
- **represenative.css** -
- **voteApp.css** -
- **login.css** - Contains very minimal styling for the login page, including the logo and the text boxes.

**JS**:
- **debateTopic.js** - Is the core code for the functionality in the debate page. It connects to the firebase database in order to store all of the user inputs (debate topics and comments for each topic). It will also pull all of the data from this database and renders/appends them to the debate.html page.
- **elections.js** - Core functionalities for the Elections page. The JavaScript file contains a function which places markers and pop-ups on the map, as well as the location names/addresses on the side bar. It also contains a function which incorporates the Google Civic Information API in order to get all of the upcoming elections for the user to choose from.
- **representative.js** -
- **voteApp.js** -
- **login.js** - Basic rendering of HTML output for the login page.

## Video:

https://youtu.be/wxc3KVze43Y
