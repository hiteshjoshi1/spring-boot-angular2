<h1>Spring Boot and Angular Starter Project</h1>


Learning objectives
Applications that do not go down with Eureka Server and client
Swagger / Open API


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
java -jar target/serviceRegistration-0.0.1-SNAPSHOT.war

Hit -
http://localhost:1111/


Start the individual micro applications

java -jar challengesWeb/target/challengesWeb-0.0.1-SNAPSHOT.war


Start the same application in the same JVM different port
Example  -
java -jar target/app.jar --server.port=3331

basically to override any spring boot properties use -- followed by Spring boot property name seprate with .

java -jar challengesWeb/target/challengesWeb-0.0.1-SNAPSHOT.war  --server.port=3331


Starting the Heroes Application

java -jar heroWeb/target/heroesWeb-0.0.1-SNAPSHOT.war


Replicated Heroes Micro Application

java -jar heroWeb/target/heroesWeb-0.0.1-SNAPSHOT.war  --server.port=2223







