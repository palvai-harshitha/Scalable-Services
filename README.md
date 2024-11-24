# Scalable-Services

# Node.js API Gateway

This is a Node.js API Gateway that integrates and routes requests to three microservices:

1. **Users Microservice** - Manages user data.
2. **Posts Microservice** - Handles blog posts.
3. **Comments Microservice** - Manages comments on posts.

The gateway handles authentication, authorization, and request routing between clients and the microservices.

---

## Features

- **Centralized API Gateway**: Simplifies client interaction with the backend.
- **Service Routing**: Directs requests to the appropriate microservice.
- **Error Handling**: Standardized error responses for clients.
- **Logging**: Request and error logs for better debugging and monitoring.

---

## Prerequisites

- **Node.js** (>= 14.x)
- **npm** (>= 6.x)
- **Microservices**: Ensure the following services are running:
  - `Users Service` 
  - `Posts Service` 
  - `Comments Service`

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/palvai-harshitha/Scalable-Services_Gateway
   cd nodejs-api-gateway
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file for configuration:
   ```env
   PORT=5000
   ```

4. Start the API Gateway:
   ```bash
   npm start
   ```

---

## API Endpoints

### Users Microservice
- **`GET /users`** - Get a list of users.
- **`POST /auth`** - Create a new user.

### Posts Microservice
- **`GET /posts`** - Get a list of posts.
- **`POST /posts`** - Create a new post.

### Comments Microservice
- **`GET /comments`** - Get all comments.
- **`POST /comments`** - Add a new comment.

---

## Development

- Run in development mode:
  ```bash
  npm run dev
  ```
- Lint code:
  ```bash
  npm run lint
  ```

---

## Contributions

Contributions are welcome! Please fork the repository and submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
