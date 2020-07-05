# Online-Compiler
An online code compilation website using docker 

* Developed a distributed code compilation server utilizing REST APIs
* Used Docker to containerize different programming language (C, Java, Python) compilation servers built in Node.js
* Employed HAproxy as a load balancing and a proxy server
* Takes advantage of Docker Compose for defining and running as a multi-container Docker application

C and python codes are comipled by two seperate docker containers and main website is hosted by a seperate docker container
Haproxy is being used as a reverse proxy

#Note:
Java and C# compilers along with full frontend for the website are yet to be created
