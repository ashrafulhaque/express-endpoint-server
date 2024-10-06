# Express.js Backend for Product Data API

### Author

Md. Ashraful Haque

---

### Description

This project is a Node.js and Express.js backend server that provides product data via RESTful API endpoints. It supports CORS for frontend communication and works seamlessly with a React frontend using Firebase Authentication.

---

### Features

- RESTful API Endpoints for products
- CORS Support
- Error handling for undefined routes

---

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/ashrafulhaque/express-endpoint-server.git
   ```

2. Navigate to the project directory:

   ```bash
   cd express-endpoint-server
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   npm start
   ```

The server will run on `http://localhost:4000` or the port specified in the `PORT` environment variable.

---

### Endpoints

- **Base URL**: `http://localhost:4000`

| Method | Endpoint        | Description                      |
| ------ | --------------- | -------------------------------- |
| GET    | `/`             | Returns a welcome message        |
| GET    | `/products`     | Fetches all products             |
| GET    | `/products/:id` | Fetches a specific product by ID |

---

### Error Handling

- **404 Not Found**: Returned for undefined routes or if a product with the requested ID is not found:
  ```json
  {
    "error": "Endpoint Not Found"
  }
  ```

---

### Live Link

Live link of the deployed server is:
`https://express-endpoint-server.vercel.app/`

The backend will be accessible via the deployed URL.

---

### License

This project is licensed under the MIT License.
