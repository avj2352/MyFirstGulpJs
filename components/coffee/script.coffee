a=1
$ ->
	$('h1').append('Hello World Again!!')

add = (a,b)	->
	a+b

myfunction = (a,b,c) ->
	c= a+b
	c
do myfunction

#This is a coffee script comment. 
#This will not render into Javascript comment
###This will render as a Javascript comment###

$ ->
	$(h1).css('this is a simple return function')

do -> a=b+c

###This will render out as a JSON object###
data = 
	name: "Pramod AJ"
	numbers: [1,2,3,4]
	links:
		twitter:"http://www.twitterbootstrap.com"
		podcast: "https://www.itunes.com/podcasts"

### This will render out exactly as a Javascript function ###
`function add(a,b){
	return a+b;
	}`		
	