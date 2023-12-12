# gRPC Hello World Example with Node.js

## Description

This project is a basic example of using gRPC with Node.js. It includes a gRPC server and client that exchange simple messages. The server offers four methods: `SayHello`, `SayGoodbye`, `GetTime`, and `MultiplyNumbers`.

## Project Structure

- `helloworld.proto` - Defines the gRPC service and messages.
- `server.js` - Implements the gRPC server.
- `client.js` - A sample gRPC client that calls methods on the server.

## Requirements

To work with this project, you'll need Node.js and npm installed on your machine.

## Installation

1. Clone the repository:
   ```
   git clone [repository URL]
   ```
2. Navigate to the project directory:
   ```
   cd [directory name]
   ```
3. Install the required dependencies:
   ```
   npm install
   ```

## Running the Application

### Starting the Server

Run the following command to start the server:

```
node server.js
```

### Running the Client

Open a new terminal and run the client:

```
node client.js
```

The client will send requests to the server, and you'll see the responses in the console.

## Service Methods

- `SayHello`: Accepts a name as a parameter and returns a greeting message.
- `SayGoodbye`: Accepts a name and returns a farewell message.
- `GetTime`: Returns the current server time.
- `MultiplyNumbers`: Accepts two numbers and returns their product.

## Testing

You can modify the request parameters in `client.js` and rerun the client to see different server responses.
"""
