WebApp Demo
===========
```
The PenPal Schools team wants to test your skills as a front-end web developer (front-end engineer).

Demonstrate your ability to:
1) Work with Angular v1
2) Extract and parse data from REStful APIs
3) Have a good understanding of UI/UX
4) HTML, CSS and JS dominance
```

## Task
```
The objective of this project is to build a craft beer catalog that can be sorted by name and abv
(alcohol by volume).

To Do:
1) Make an API call to "https://api.punkapi.com/v2/beers" this will return a list of craft beers.
Use Angular's standard library $http or $resource to make the API call. Here is the documentation
for this API, "https://punkapi.com/documentation/v2".
Tip: API response returns an array instead of an object(dict).

2) Use your creative design skills to make a catalog (UI/UX). Use your discretion on what information
to display from the API response.
Bonus Points: Use Angular Material for your designs.
Documentation can be found here "https://material.angularjs.org/latest/"

3) Allow the catalog to sort the craft beers by name and abv (alcohol by volume).


Tips:
1) Download the project, it has the initial angular set up and essential libraries needed,
such as angular materials and $resource.

2) If using additional libraries, please add the CDN import to the index file or provide the
JS script in the project.
```

## Dax's Stuff 🐰

Added in a simple node server to allow files to be served. To get it started first run these commands.

```
npm install
```
After we have our dependencies loaded locally, we can run the server.
```
node index.js
```

## Testing
For these tests, I am using protractor. To run these tests, we will first need to install the cli package.
```
npm install -g protractor
```
Next, we will need to start a testing server using webdriver-manager, which we just installed.
```
webdriver-manager start
```
In a separate terminal, we can now run our tests.
```
npm test
```
