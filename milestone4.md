## Team Members:

- **Jan Eric De Castro**
- **Cameron Lee**
- **Joel Loo**
- **German Flores**

## UI Skeleton:

![Login Screen](https://github.com/CambridgeGuolytica/121/blob/master/static_files/images/screenshot.png)
- User logs in using existing email and password. We will set up a signup page later on and will allow the user to connect to different social media platforms.

![Find a Representative](https://github.com/CambridgeGuolytica/121/blob/master/static_files/images/screenshot1.png)
- Here users can find their representative between by city and can see how they can contact them.

![Representative](https://github.com/CambridgeGuolytica/121/blob/master/static_files/images/screenshot2.png)
![Representative](https://github.com/CambridgeGuolytica/121/blob/master/static_files/images/screenshot3.png)
- Can see more details regarding their representative. Can see comments and view news related to the rep. Uses news api for data.

![Elections](https://github.com/CambridgeGuolytica/121/blob/master/static_files/images/screenshot4.png)
- Shows a map and possible election dates. Shows location of these elections.

![Debate](https://github.com/CambridgeGuolytica/121/blob/master/static_files/images/screenshot5.png)
- Will be more complex in the future. We want users to create discussion and debates in this platform. Users can post these topics and questions and people can take sides/

## User Privacy:

Data is a very important issue that we have to address in our application due to the recent events of Facebook and Cambridge Analytica. We plan our application to be a political platform where people can debate, easily find who their represenatives are, and find real news regarding that person. Our main interaction will still be to displaying political and election data using real-world data through Google's Civic Information API. BUT there will also be functions that allow users to openly debate - meaning that they will post opinions about sensitive political topics online and is stored in their account. Our Project will mainly deal with the first level of user privacy - interacting with data from freely-available open data. 

We are not planning to collect data from users without their informed consent (they will acknowledge the fact that they will be posting their opinions online) nor are we planning to share data froms without their consent. If we decide to launch this to the public or display it as one of our portfolio piece, we're going to erace the data we gathered during class and start a new with content that other people put in if they choose to visit the site. 

We are all using publicly known and trusted APIs for our data (e.g. MapBox, NYTimes, News API, etc.).

## Data API:

We're currently using three Data APIs: NYTimes News API, News.org API, and Google Civic Information API. We're using NYTimes API and News.org API as our source of news data. We're thinking of implementing Google news in the future and test which one is the best to include in our final project. We chose these two because they're the most trusted news api currently out there (going to use google news api later). We want to be wary that there could be fake news so we try to use as many sources so users can determine for themselves which source they should trust. 

Our main Data API will come from Google's civic information API. We can use the data provided here to look up polling plaes, early vote locations, candidate data, and other election official information. This API is currently the best political API tool available and gives us useful functions to include in our prototype. This is government partnered and generally pretty trusted. 


## Future Plans for Data Visualization:

We're planning to visualize these data in a very interactive and visually appealing manner. Here are our current wireframes: https://projects.invisionapp.com/share/KUHSJJTSFX8#/screens/294497327. We're going to visualize the election locations, representatives, etc. in through this way.










