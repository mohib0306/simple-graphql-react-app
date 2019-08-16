# Backend

Backend is consist of a simple [express-graphql](https://github.com/graphql/express-graphql) server and a [json-server](https://github.com/typicode/json-server). The `json-server` acts as a data source that serves data in JSON format. The GraphQL uses [axios](https://github.com/axios/axios) to send requests to this `json-server`for fetching and editing data.

## Getting Started

In order to start the backend graphql server, both `express-graphql` server and the `json-server` should be started. To start the backend servers, navigate to the `backend` directory and then;

1. In a separate terminal (or terminal tab) run `npm install` => installs required npm packages.
2. In the same terminal `npm start` => this will start the `express-graphql` server on port 4000.
3. In another terminal (or terminal tab) `npm run json-server` => this will start the `json-server` on port 3000.

_P.S. Make sure that you are in the backend directory while running the above commands. Also if you want to change the default ports you can do so by editing the conresponding files._

## Using GraphiQL or any other GraphQL client to send query and mutation requests to GraphQL server

- **GraphiQL**: In your browser, visit [http://localhost:4000/graphql](http://localhost:4000/graphql "GraphQL Backend").
- **Any other GraphQL client**: Use http://localhost:4000/graphql as an endpoint to connect to the GraphQL server.

## Using `json-server` to send queries to local json server

`db.json` has some sample data and you can add more data by editing the file and adding more _user_ or _company_ objects to their respective arrays.

In your browser, visit [http://localhost:3000](http://localhost:3000 "JSON Server Backend")

## Acknowledgments

This is an implemetation of the course work of [GraphQL with React: The Complete Developers Guide](https://www.udemy.com/graphql-with-react-course/) online course.
