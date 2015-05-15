Instructions to run Map Search Project App:
1. Open index.html in brower.
2. If screen width is more than 500 pixels, you will see 4 green "buttons" placed horizonally on top the screen, each representing an interested category. The default is restaurant. Each category lists 10 popular business names according to Yelp ranking for the area.
3. If the screen width is less than 500 pixels, The horizonal category list collapses into a hamburger menu on left of the header. Click the menu, the categories should show up. Click again the categories disappear.
4. Click the "+" link to the left/top of the search bar, the list of 10 business names should show up. Click "-", list should disappear.
5. Click on each business name in the list (purple part), that business is selected. All other names and map markers except for the selected one should disappear. Meanwhile, a popup window should open showing snippets of review from Yelp. The link in popup window takes you to a new tab of detailed Yelp review page. Click the search bar and backspace should clear the selection and the full list returns.
5. The business icons are placed on the google map. Click an icon, an info window should show up. If the business web adress/phone number are available, both will show up in the info  window. The name link takes you to a new tab of the business website.
6. To choose a different category, click the button/hamburger menu on top.
7. Type in the search box to search for business. It is not case sensitive and matches any substring to any part of the business name. To clear, click the search bar and backspace.

After thoughts:
1. This is by far the most challenging but most rewarding project I have worked on for front end nanodegree. The course was well taught and thought provoking. I learned most through this course and project. Thanks, Udacity!
2. Initially, I thought this project was not difficult at all since it is true every aspect of the project has been taught in either the class itself or other afflicated classses. However, the fact that I have to start from the very beginning to the end with no skeleton to base on gives me the opportunity, as well as the challenge to experience the entire life cycle of a project.
3. Though I put together a skeleton rather quickly, it took me much, much longer than I expected to refine, improve, test and it took quite a few iterations. I do have to read through many documents such as oAuth, Google Map API, many searches on stackoverflow. Still, it is nowhere near perfect.
4. While I am aware much more can be done to improve and I will try once I have time, I hope the current state of the app fulfills the basic requirements. I am not satisfied with this version, but due to time constraints I decided to submit.

Known issues and planned improvements:
1. I like Yelp reviews. So my idea was to get a list of business in each category based on Yelp ranking and then use Google text search for additional info as well as location stats for map marker. Here is the flaw: text search from Google Place Library is designed for ad-hoc query from user interface. When I send search request to google using a loop, the requests fire off too quickly and therefore hit the limit of query per second. I worked around it by incrementally lengthening the gap between each google serach request using setTimeout. This is a hack, not the best solution. I experimented with Google Geocoding, but ran into the same issue. Any suggestion on resolving this issue is greatly appreciated!
2. Google Place library as well as Yelp search API sometimes return unexpected results. For instance, if I search the best cafes on Yelp website itself, the answers are not always the same as those from the results in API. API seems to be more restrictive and the results spread out in a wider region. Similar issue with Google. It does not seems to return the best match. This is completely unexpected. I am not sure why. I should have done more research and pick the most suitable APIs to use before I started the project.
3. I used knockout quite extensively. Knockout is effective and easy to use. But I did run into some problem when I initially attempted to use Bootstrap for various mobile friendly components (such as NAV), but unsuccssful somehow along with knockout binding. I resorted to use jQuery UI for popup window, but I think I mixed a "View" component into "ViewModel". I also struggled a bit as to where Google search and Google map should belong. I attempted to place Google search and map into "View". I am aware that Google map API is more like a "ViewModel" itself as hinted by coaches at the office hours, I am still reluctant to create one big ViewModel object with everything in it. It seems to me that though "Model ViewModel" concept is simple at first glance, it becomes not so clear cut in actual implementation. Any advice here will be greatly appreciated!
4. Stying is primitive.
5. My main testing ground is Chrome. But I also tested the app in Firefox, IE, simulated device in Chrome Developer's Tools, as well as my own mobile devices. while everything seems to work as intended with Chrome, simulate device and Android phones, I did notice some issue with Firefox/IE failing to resize the map on the first click when the region covered is very large. The second click would fix the problem so that all markers show up. So far unsuccessful on resolving this issue.
6. I have not followed steps on "website performance optimization" to build the most efficient production version of this App.
7. I did not use CORS as I did not come across the need to enable CORS request in this simple app. I am not sure if I missed anything here. I read about CORS and ask the same question on Udacity Forum. The answer I got was that for my case JSONP is the simplest solution. I would like to learn about CORS and see some live examples. I need some hand-help advice here as this concept is completely new to me.

I will attemp to tackle all above mentioned once I have time. Any insights are greatly appreciated!