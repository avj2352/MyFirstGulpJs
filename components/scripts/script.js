var a, add, data, myfunction;

a = 1;

$(function() {
  return $('h1').append('Hello World Again!!');
});

add = function(a, b) {
  return a + b;
};

myfunction = function(a, b, c) {
  c = a + b;
  return c;
};

myfunction();


/*This will render as a Javascript comment */

$(function() {
  return $(h1).css('this is a simple return function');
});

(function() {
  return a = b + c;
})();


/*This will render out as a JSON object */

data = {
  name: "Pramod AJ",
  numbers: [1, 2, 3, 4],
  links: {
    twitter: "http://www.twitterbootstrap.com",
    podcast: "https://www.itunes.com/podcasts"
  }
};


/* This will render out exactly as a Javascript function */

function add(a,b){
	return a+b;
	};
