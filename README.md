# CityTaps Intern Test

Hello and welcome to the city taps intern test! 
This is a little and hopefully fun exercise so we can get an idea of your skill level. 
The test is a fullstack exercise and aims to test your fundamental web development knowledge, problem solving ability and your development workflow.

For this test, nodejs with express is used for the backend and vuejs for the frontend. 
Please don't panic if you haven't used any of these before, we are not evaluating how well you know these frameworks, but rather how you set up the project, evaluate and solve problems and how you write your code.
If you haven't used either of these frameworks before, there are some useful links attached at the bottom so that you can gain a bit more understanding.
## The code
In the project, we have set up some skeleton code for you. 
This skeleton code is to help you get started with the project and to give a simple demonstration of how vue and node work, and how you can communicate between the client and server.
## Requirements
* Your answers must be pushed on this repo on a *demo* branch.
* The layout and rendering are opened to your creativity, remember this is a demonstration of your skills.
* If you are used to it, testing of your code is a plus.

## Evaluation
Your code will be tested on a local environment.
Please document any installation requirements and how to launch your app.

## Your job
### 1. Customize the repo
Add an whoami.txt file with your name and the current date, commit it and push it.

### 2. Create your application
You have to create a web application and a server to display your answers. Your homepage should give access to the other pages.

#### 2.1 Inspiration
Let's start easy, create a first page, /inspiration, in your app and display a list of 2 books that inspire you and 2 songs you would like to put on the office playlist.

#### 2.2 Leak detection
As part of our service, our system needs to detect leaks from consumption data collected by our meters.
We will consider a leak as a continous consumption over 15L/h for more than 3 hours.

For this exercise, you should:
* on the client side, create a page /leaks that will display the results sent by the server
* on the server side, create a route /leaks
* query the source data from the file https://s3.eu-central-1.amazonaws.com/ct-tech-test-files/hourly_consumption.json (volume in L)
* process the data to detect if a leak has happened
* return the result as an array of leaks to the client app with this format 
```json
[
  [{
    "hour": 6,
    "day": 1,
    "consumptionVolume": 20
  }, {
    "hour": 7,
    "day": 1,
    "consumptionVolume": 34
  }, {
    "hour": 8,
    "day": 1,
    "consumptionVolume": 50
  }],
  [{
    "hour": 10,
    "day": 1,
    "consumptionVolume": 17
  }, {
    "hour": 11,
    "day": 1,
    "consumptionVolume": 42
  }, {
    "hour": 12,
    "day": 1,
    "consumptionVolume": 20
  }]
]
```
Note: this is an example of the returned object, not the correct answer

#### 2.3 Authentication
Add a authentication mechanism to your app where user can login with a username (*citytaps*) and a password (*thisisfun*), then have all her queries to the API secured. 


## 3. Share your work
Send us an email once you're done so we can review your work.



# Thank you for your time and interest in CityTaps !

