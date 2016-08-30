<h3>Git link <a href="https://github.com/dumitrubrinza/dBlogAppMean.git">dBlogApp</a></h3> 
<br>
<p>Runing app in HEROKU link ---> <a href="http://safe-sands-20956.herokuapp.com" >http://safe-sands-20956.herokuapp.com</a></p>

***
<p> logging in for demo with</p>
```javascript
1.                       2.                   3. 
email :  homer@simpson.com
password: secret     
```
***
<p>or </p>
<br>
<h3>Sign UP</h3>

#Assignment 2 - MEAN app.

Name: **Dumitru Brinza**

###Overview.
...... A statement of the app concept and objectives (about 1/2 page) ........


 . . . . . List of user features (excluding user registration and authentication) . . . . 
 
 + Feature 1
 + Feature 2
 + Feature 3
 + etc
 + etc

###Installation requirements.
. . . .  List of software used to develop the app . . . . . . .

**Server side**

```
"dependencies": {
        "express": "~4.0.0",
        "debug": "~0.7.4",
        "morgan": "~1.0.0",
        "body-parser": "~1.0.0",
        "mongoose": "~3.8.8",
        "errorhandler": "~1.0.0",
        "lodash": "~2.4.1",
        "cookie-parser": "~1.0.1"
     }
``` 
 **Client side**

 ```
"dependencies": {
    "angular": "1.4.x",
    "angular-mocks": "1.4.x",
    "jquery": "~2.1.1",
    "bootstrap": "3.3.6",
    "angular-route": "1.4.x",
    "angular-resource": "1.4.x",
    "angular-messages": "1.4.x",
    "angular-cookies": "1.4.x",
    "angular-utils-pagination": "0.11.0",
    "bootstrap-social": "^5.0.0"
  }
 ```
    also
    ```
    textAngular (rangy, sanitize)
    font-awesome
    angular-animate
    ```

. . . . . . Also, explain (to a third party) what steps one must take to run your app after cloning it from the repository, e.g. any non-standard software installation ; any environment setup; how to start app; where to view app in browser . . . . . . . 

###Data Model Design.

Diagram of app's data model.

![][image1]

Use meaningful sample data. Briefly explain any non-trivial issues.

###App Design.

A simple diagram showing the app's component design, in particular controllers and services (see example below).

![][image]

###UI Design.

. . . . . Screenshots of app's views with appropriate captions   . . . . . . . 
Login View
![][image4]
Main View
![][image2]

###Routing.

. . . . List each route supported and state the associated view . . . . . 
+ /foos - displays all published foos
+ /foos/:id - detail view of a particular foo (:id)
+ etc
+ etc

## Web API Endpoint Reference

Describe your web API.

| HTTP Verb & Path |  Description |
| -- | -- |
| GET: /api/contacts |return a list of contacts |
| POST: /api/contacts |add a new contact |
| PUT: /posts/api/contacts/:id | update a contact |
| DELETE: /posts/api/contacts/:id | delete a contact |


###Extra features

. . . . . Briefly explain any non-standard features, functional or non-functional (e.g. user registration, authentication) developed for the app . . . . . .  

###Independent learning.

. . . . . State the non-standard aspects of Angular (or other related technologies) that you researched and applied in this assignment . . . . .  

[image1]: ./RMFolder/model.png
[image2]: ./RMFolder/style.png
[image3]: ./screen.png
[image4]: ./RMFolder/login.png