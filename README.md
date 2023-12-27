# MERN_Boilerplate

MERN stack application template

PROJECT FOLDER STRUCTURE
MERN_Boilerplate/
│
├── client/ // Frontend (React)
│ ├── public/
│ ├── src/
│ │ ├── assets/ // Images, fonts, etc.
│ │ ├── Components/
│ │ │ ├── Common/ // Reusable components
│ │ │ ├── FeatureBased/ // Feature-specific
│ │ ├── graphql/ // GraphQL queries, mutations, and fragments
│ │ ├── redux/ // Redux-related files
│ │ │ ├── actions/
│ │ │ ├── reducers/
│ │ │ ├── sagas/ // Redux-Saga
│ │ ├── utils/ // Utility functions
│ │ ├── App.ts // Root component
│ │ ├── index.ts // Entry point
│
├── api/ // Backend (Node.js, Express)
│ ├── config/ // Configuration files
│ ├── controllers/ // Request handlers
│ ├── models/ // Database models
│ ├── routes/ // API routes
│ ├── graphql/ // GraphQL schema, resolvers
│ ├── middleware/ // Request middleware
│ ├── services/ // Business logic
│ ├── utils/ // Utility functions
│ ├── index.ts // Server entry point
│

Installation

1. Clone the repository
   git clone https://github.com/elayneh/CarOnDemand

2. Change directory to local repository
   cd CarOnDemand

3. Change directory to client as well as api folders within two terminals
   cd client,
   cd api

4. Install dependencies for both client and api folders
   yarn add

5. Run the application:
   yarn dev
