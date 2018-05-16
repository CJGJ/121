## Team Members:

- **Jan Eric De Castro**
- **Cameron Lee**
- **Joel Loo**
- **German Flores**


## UI Web Pages:

We refined our front end a bit more compared to the skeleton from last milestone's UI skeleton. We mostly created three main features in this application: seeing who your representatives are based on location, can see election locations, and debate on certain topics. We've been mostly working on these three features thus far. Furthermore, compared to the previous milestone, we've also worked heavily on the styling of the web page. Instead of just showing text from the data we pulled from our API, it shows information in cards. The header/menu in the top of the web page is also stylized.

![Login Screen](https://github.com/CambridgeGuolytica/121/blob/master/static_files/images/screenshot.png)
- User logs in using existing email and password. We will set up a signup page later on and will allow the user to connect to different social media platforms.

![Find a Representative](https://github.com/CambridgeGuolytica/121/blob/master/static_files/images/screenshot3M5.png)
- Here users can find their representative between by city and can see how they can contact them.

![Representative](https://github.com/CambridgeGuolytica/121/blob/master/static_files/images/screenshot5M5.png)
- Can see more details regarding their representative. Can see comments and view news related to the rep. Uses news api for data.

![Elections](https://github.com/CambridgeGuolytica/121/blob/master/static_files/images/screenshot4M5.png)
- Shows a map and future election dates. Then uses user's registered location to show polling places nearby.
- In the future, we plan on fixing the styling for this page to make the available buttons fit the theme of the rest of the webpage. We also plan to do full user/error testing on the polling locations feature, as the future elections and location features limit the amount of polling locations that our team can test.

![Debate](https://github.com/CambridgeGuolytica/121/blob/master/static_files/images/screenshot1M5.png)
![Debate](https://github.com/CambridgeGuolytica/121/blob/master/static_files/images/screenshot2M5.png)
- This is the page where users can create and post different questions/topics. The users can then click on each of these cards and comment/debate on each of the topics. The first screenshot shows different cards which represents debate topics. The second screen shot shows a specific debate topic and the comments that have been left in them.


## 3 Different Functions:
1. First function: By entering your address, you can see who your representatives are. By clicking on a specific card, it will take you to a specific page that's dedicated to the representative you clicked on. You can see latest news about them and comment/debate.
2. Second Function: Our main data visualization function. By choosing your local election coming up, and entering your address, you can view a list of polling locations near you and also see these locations in a map.
3. Third Function: The debate function. You can create a debate topic using the button in the top-right side of the screen. After entering the question/topic, category, and description, you will see a card pop up. By clicking on "Debate" you can comment on that debate topic and see what others said as well. These are all stored in the firebase database so you can have a long debate conversation.
