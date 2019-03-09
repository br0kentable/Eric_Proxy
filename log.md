api request for the review name and date

https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-399759106655/resources/bundle.js


remember big problem I had with the 404 message when adding my
service to the proxy was that the variable
pathname inside of componentWillUpdate 

which I was using inside of my App component, to query my db and 
get photos on page load, 
pathname was not returning anything

that's because pathname in my own service directory was a different relative path
from the path inside of the proxy directory

to be clear:
pathname was a way for me to access the params object inside of the 
client

const pathname = window.location.pathname

which could also be location.pathname