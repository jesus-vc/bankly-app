- BUG #1: Replaced jwt.decode with jwt.verify, as jwt.decode does not verify the authenticity of the token.

- BUG #2: GET /users should not include 'email' and 'phone' in response. Only return basic info.

- BUG #3: GET /users/[username] should return 404 err if no user found.

- BUG #4: PATCH /[username] should allow a user to update information about themself.

- BUG #5: PATCH /[username] should not allow updates first_name, last_name, phone, and email.

- BUG #6: Add 'await' to database query. Otherwise, a promise is returned immediately and incorrect response is returned to client.

- Additional issue: Removed 'jest' from dev dependencies in package.json as this can lead to future incompatibility issues between Jest and Node. Instead, run tests through a global installation of jest.
