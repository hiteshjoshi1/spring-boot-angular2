<h1>Spring Boot - Microservices - Netflix Eureka Server and client, Swagger, ZuulProxy</h1>
<ul>
<li>Started this project as learning resource for Spring Boot. Integrated Spring Boot with Angular 2 SPA.</li>
<li>Started exploring Service Discovery - Netflix Eureka Server and Eureka Clients</li>
<li>Started exploring API Edge Gateway - Zuul Proxy</li>
<li>Started exploring API documentation - Swagger 2</li>
</ul>


<h2> Learning objectives : Achieved - </h2> 
<ul>
<li>Angular 2</li>
<li>Spring Boot</li>
<li>Spring boot integrated with Angular2</li>
<li>Microservices API that do not go down with Eureka Server and client</li>
<li>Zuul Proxy, Ribbon</li>
<li>Swagger</li>
</ul>

<h2>Learning Objectives Pending -</h2> 
<ul>
<li>Open API</li>
<li>Loopback with NodeJs</li>
<li>Distributed Caching - Redis and Memacache</li>
<li> Contanerized Micro services </li>
</ul>



![Basic Architecture Diagram](https://github.com/hiteshjoshi1/spring-boot-angular2/blob/images/Capture.PNG)


---------------------------------------------------------------------------------------

Child Web Project has a dependency on the Client Project and by default opens it index.html.

It uses https://github.com/eirslett/frontend-maven-plugin to download Node,NPM,install ,
and run the front end build lifecycle.

Uses In memory DB for Data persistence.
Has the complete Heroes App ,  official starter tutorial for Angular2 implemented.


----------------------------------------------------------------------------------------

Packaging ---
mvn clean package


<h3>Start individual applications - </h3>

Starting the Eureka Server
<code>java -jar serviceRegistration/target/serviceRegistration-0.0.1-SNAPSHOT.war</code>


<b>Eureka Endpoint - </b> 
http://localhost:1111/

<b>Start the individual micro applications</b>

<code>java -jar challengesWeb/target/challengesWeb-0.0.1-SNAPSHOT.war</code>

http://localhost:2222/


Start the same application in the same JVM different port
Example  -
<code>ava -jar target/app.jar --server.port=3331</code>

Basically to override any spring boot properties use -- followed by Spring boot property name seprate with .

<code>java -jar challengesWeb/target/challengesWeb-0.0.1-SNAPSHOT.war  --server.port=3331</code>

Your Microservice should be up at 
http://localhost:3331/api/challenges



Starting the Heroes Application

<code>java -jar heroWeb/target/heroesWeb-0.0.1-SNAPSHOT.war</code>

Your other microservice should be up at 
http://localhost:2222/heroes


Replicated Heroes Micro Application

<code>java -jar heroWeb/target/heroesWeb-0.0.1-SNAPSHOT.war  --server.port=2223</code>

Replicate Microservice should be up at
http://localhost:2223/heroes


Starting the zuul Proxy

<code>java -jar zuulGateway/target/zuulGateway-0.0.1-SNAPSHOT.jar</code>

Deployed at  port 5555

You should be able to access your API using the Zuul gateway  

Heroes API via proxy - [Secure end point- basic security , User Name - user. Password - password ] 
http://localhost:5555/heroes-service/heroes

Challenges API via proxy -
http://localhost:5555/challenges-service/api/challenges

Swagger Documentation-
http://localhost:2222/swagger-ui.html#/

http://localhost:3333/swagger-ui.html#/
