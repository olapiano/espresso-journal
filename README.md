TODO

AUTH0

- user profile attributes from:
  https://auth0.com/docs/manage-users/user-accounts/user-profiles/user-profile-structure#user-profile-attributes

- protect SSR, CSR, API Route etc from:
  https://github.com/auth0/nextjs-auth0/blob/main/EXAMPLES.md#protecting-a-server-side-rendered-ssr-page

* Designing the login page:
  https://auth0.com/universal-login

The endpoints available from the Atlas Data API are:
/action/find
/action/findOne
/action/insertOne
/action/insertMany
/action/updateOne
/action/updateMany
/action/replaceOne
/action/deleteOne
/action/deleteMany
/action/aggregate

Each endpoint must use the POST method.

The base URL for each endpoint is: https://data.mongodb-api.com/app/<Data API App ID>/endpoint/data/v1

Each request must include the following headers:

- Content-Type: application/json
- Access-Control-Request-Headers: \*
- api-key: <Data API Key>

Each request must include, at minimum, the following in body:

- dataSource: <cluster name>
- database: <database name>
- collection: <collection name>
