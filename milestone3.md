## Team Members:

- **Jan Eric De Castro**
- **Cameron Lee**
- **Joel Loo**
- **German Flores**

## UI Skeleton:

![Login Screen](https://github.com/jcloo/COGS121_Project/blob/master/public/images/screen1.png)
- User logs in using existing email and password. We will set up a signup page later on and will allow the user to connect to different social media platforms.

![Login Screen](https://github.com/jcloo/COGS121_Project/blob/master/public/images/screen2.png)
- This is the home page where the main interactions will take place. Currently, we have a hamburger menu to navigate among the site. There's a red button in the bottom of the hamburger menu that will display news headliners using AJAX. The right side is a map that will visualize the news in the future in the form of circles.

![Login Screen](https://github.com/jcloo/COGS121_Project/blob/master/public/images/screen3.png)
- Clicking on one the circles will give you information and content about that specific type of news. We currently don't have the JSON file connected with these popup information but will have it in the future. 

![Login Screen](https://github.com/jcloo/COGS121_Project/blob/master/public/images/screen4.png)
- Clicking on the red button will display several headlines. Clicking on the title will bring you to the webpage of the actual article. We will have this a bit smoother in the future and will also refresh the circles depending on the type of content the user wants to see in the map. **Need: The implement a possible filtering of interested news content.

![Login Screen](https://github.com/jcloo/COGS121_Project/blob/master/public/images/screen5.png)
- This is the going to be the profile page where users can customize their own profile or change the type of content they want to see (or change social media accounts to get different types of content)

These screenshots are almost completely different from the prototypes we've done in milestone2.md. The main reason for this is due to us switching back to our original idea. Milestone2's storyboards and prototypes are based on the idea of creating a collaborative space for other individuals but doesn't fit this class's theme. As a result, we decided to revert back to our original idea which dealt with visualizing news in a spatial format. This created a more interesting and interactive way for individuals to consume news. Since these are two completely separate ideas, the UI and our skeleton were a bit different. Although our current skeleton is entirely different from the first prototype in milestone2.md, it does strike a resemblance to our prototype 2.

These screenshots have a map to the right and a side menu to the left. The left portion will be dedicated to filtering and possibly seeing detailed content. The right portion will be a map that shows map spatially. Clicking on different circles will allow users to see news through location instead of the usual headline and chronological format. The content on the left (or possibly on top of the map) will have different filtering or visualization options. For example, you can click on crime rate and will visualize crime rate in the map which will give the user a better understanding of the background context of the news.

  ## Note: Our application will mostly be a single-page application. The homepage will allow the user to filter through different visualization. In the home page, the user can do multiple different interactions that will visualize and perform different content.


## Backend:

Mostly used Node.js to handle most of the backend content of our application. Navigation and loading content based on a data from a remote server (e.g. our API) is done through node.js.

## APIs and future live real data:

We're currently using MapBox for our map and the New York times API for our news. We're getting online, live, and actual data JSON files from New York Times. Once users click on the red button, it will show the content using AJAX. We're planning to make this a lot smoother in the future and implement other real data from Facebook, Twitter, and local regional data (ex. San Diego crime rate) in the near future.
