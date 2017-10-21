<h1>Spring Boot- Microservices Netflix Eureka And some Angular 2</h1>


<h2>Learning objectives : Achieved</h2> -
<ul>
<li>Angular 2</li>
<li>Spring Boot</li>
<li>Spring boot integrated with Angular2</li>
<li>Microservices API that do not go down with Eureka Server and client</li>
<li>Swagger</li>
</ul>

<h2>Learning Objectives Pending</h2> -
<ul>
<li>Open API</li>
<li>Loopback with NodeJs</li>
<li>Zuul Proxy, Ribbon</li>
<li>Distributed Caching - Redis and Memacache</li>
</ul>



<h2>Parent Project with a Child Web Project and Client Project </h2>

Child Web Project has a dependency on the Client Project and by default opens it index.html.

It uses https://github.com/eirslett/frontend-maven-plugin to download Node,NPM,install ,
and run the front end build lifecycle.

Uses In memory DB for Data persistence.
Has the complete Heroes App ,  official starter tutorial for Angular2 implemented.


-----------------------------------------------------------------

Packaging ---
mvn clean package


Start individual applications

Starting the Eureka Server
java -jar serviceRegistration/target/serviceRegistration-0.0.1-SNAPSHOT.war


<b>Eureka Endpoint - </b> 
http://localhost:1111/


Start the individual micro applications

java -jar challengesWeb/target/challengesWeb-0.0.1-SNAPSHOT.war

http://localhost:2222/


Start the same application in the same JVM different port
Example  -
java -jar target/app.jar --server.port=3331

basically to override any spring boot properties use -- followed by Spring boot property name seprate with .

java -jar challengesWeb/target/challengesWeb-0.0.1-SNAPSHOT.war  --server.port=3331

Your Microservice should be up at http://localhost:3331/api/challenges




Starting the Heroes Application

java -jar heroWeb/target/heroesWeb-0.0.1-SNAPSHOT.war

Your other microservice should be up at http://localhost:2222/heroes


Replicated Heroes Micro Application

java -jar heroWeb/target/heroesWeb-0.0.1-SNAPSHOT.war  --server.port=2223

Replicate Microservice should be up at http://localhost:2223/heroes


Starting the zuul Proxy

java -jar zuulGateway/target/zuulGateway-0.0.1-SNAPSHOT.jar

Deployed at  port 5555

You should be able to access your API using the Zuul gateway  

Heroes API via proxy - [Secure end point- basic security , User Name - user. Password - password ] 
http://localhost:5555/heroes-service/heroes

Challenges API via proxy -
http://localhost:5555/challenges-service/api/challenges

