# http-server

This will install http-server and a static file web server so that it may be run from the command line.

# Installation:

git clone https://github.com/hmd8/http-server.git

npm install

# Usage:

node server.js

you can visit http://localhost:8080 to view your server

Now Put it in your path to fire up servers in any directory.
e.g
http://localhost:8080/directory/page.html

# Available Options:

p Port to use (defaults to 8080)

h Address to use (defaults to 0.0.0.0)

e.g
h=127.0.01 p=3000 node server.js
http://127.0.0.1:3000
