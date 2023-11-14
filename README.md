# MERN_Boilerplate
MERN stack application template

PROJECT FOLDER STRUCTURE
MERN_Boilerplate/
│
├── client/            // Frontend (React)
│   ├── public/
│   ├── src/
│   │   ├── assets/    // Images, fonts, etc.
│   │   ├── components/
│   │   │   ├── Common/          // Reusable components
│   │   │   ├── FeatureBased/    // Feature-specific components
│   │   ├── pages/      // Components representing specific pages/views
│   │   ├── graphql/    // GraphQL queries, mutations, and fragments
│   │   ├── redux/      // Redux-related files
│   │   │   ├── actions/
│   │   │   ├── reducers/
│   │   │   ├── sagas/    // Redux-Saga
│   │   ├── utils/      // Utility functions
│   │   ├── App.ts      // Root component
│   │   ├── index.ts    // Entry point
│
├── server/            // Backend (Node.js, Express)
│   ├── config/       // Configuration files
│   ├── controllers/  // Request handlers
│   ├── models/       // Database models
│   ├── routes/       // API routes
│   ├── graphql/      // GraphQL schema, resolvers
│   ├── middleware/   // Request middleware
│   ├── services/     // Business logic
│   ├── utils/        // Utility functions
│   ├── index.ts      // Server entry point
│
├── shared/            // Shared code between client and server
│   ├── constants/    // Shared constants
│   ├── types/        // Shared types/interfaces
│   ├── utils/        // Shared utility functions
│
├── tests/             // Test files
