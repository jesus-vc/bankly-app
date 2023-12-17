### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

  - It is a JSON web token that is used for authorization and authentication across web systems.
  - The token itself consists of three parts: a header, payload, and signature.
  - Each part is encoded and the result is a string that is then shared between systems.
  - The payload itself typically contains information about the user.
  - The header itself typically contains information abuot the type of token (e.g. JWT) and signing algorigthm (e.g. RSA).

- What is the signature portion of the JWT? What does it do?

  - The signature is built using a secret key and encoded header and encoded payload.
  - This signature is used to verify the authenticity of the sender.

- If a JWT is intercepted, can the attacker see what's inside the payload?

  - Yes, the attacker can see the payload since it's not encrypted and can be decoded.
  - So why encode it in the first place? Well to make it easily readable by the systems involved in the authentication and authorization process.

- How can you implement authentication with a JWT? Describe how it works at a high level.

  - JWT can serve as a token given to a user. From there, the user can use this token in future requests during the valid timeframe (defined in the token payload). This token can contain information about the user's access without having the need to re-login for every request.

- Compare and contrast unit, integration and end-to-end tests.

  - Unit testing typically focus on smaller testable software components such as functions.
  - Integration tests focus on the interaction and collaboration between different functions and systems.
  - End-to-end testing focuses on testing the entire system from start to finish, with the goal of simulating the real user experience.

- What is a mock? What are some things you would mock?

  - A mock is a simulated object that mimics the behavior of the 'real' object, for the purpose of conducting testing.
  - Examples of mocks could be web servers and databases where one aims to test specific functionalities without having to worry about building all the underlying components of a server or database.

- What is continuous integration?

  - It is a software developer practice of regularly integrating code changes. The main goal is to detect smaller integration issues early in the development process, promote collaboration, and ensure the software as a whole functions as intended.

- What is an environment variable and what are they used for?

  - A variable that is defined and assigned a value for a particular type of environment, such as a test environment.
  - These variables (such as keys) would change per environment.
  - As an example, a runtime environment such as Nodejs would set environment variables that are accessible to applications running in that environment. This environment is provided to NodeJs by the OS.
  - These variables' varid values can influence the behavior of applications per environment.
  - Examples of environment variables are: the PATH, location of libraries/resources, credentials, and language-specific settings.

- What is TDD? What are some benefits and drawbacks?

  - Test-driven development provides the key benefits of early defect detection, regression testing (e.g. preventing new bugs via code changes), and improved code quality by encouraging modularity.
  - Drawbacks include a greater upfront time investment, test maintenance, and the learning curve.

- What is the value of using JSONSchema for validation?

  - This schema tool allows one to validate a client's input before propogating and processing the input across the system.

- What are some ways to decide which code to test?

  - Some ways include focusing on key functional requirements, complex (e.g. intricate algorithms) code, error-prone code, integratin points, security-critical code, code paths with high impact and that are performance-critical, code with external dependencies, and code components that may be fragile to future code changes.

  - Code coverage tools can be useful in identifying areas of code lacking test coverage.

- What does `RETURNING` do in SQL? When would you use it?

  - This is a clause that can be added at the end of a query to return certain column values, especially if changes have been made via INSERT, UPDATE OR DELETE. This is especially needed when one needs to capture or process the recently-modified values.

- What are some differences between Web Sockets and HTTP?

  - One key difference is that web sockets enable a persistent, dedicated session between a client and user. This is especially needed in connections that require real-time interactivity and continous bi-directional communication.
  - HTTP is more suitable for request-response scenarios where ongoing connection between requests is not necessary.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

  - I prefer Express given my greater comfortability with Javascript and the NodeJS ecosystem.
