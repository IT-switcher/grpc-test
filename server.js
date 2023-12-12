const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('helloworld.proto', {keepCase: true, enums: String, defaults: true, oneofs: true});
const hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

function sayHello(call, callback) {
    callback(null, {message: 'Hello ' + call.request.name});
}

function sayGoodbye(call, callback) {
    callback(null, {message: 'Goodbye ' + call.request.name});
}

function getTime(call, callback) {
    const now = new Date();
    callback(null, {time: now.toISOString()});
}

function multiplyNumbers(call, callback) {
    const result = call.request.number1 * call.request.number2;
    callback(null, {result: result});
}

function main() {
    const server = new grpc.Server();
    server.addService(hello_proto.Greeter.service, {
        sayHello: sayHello,
        sayGoodbye: sayGoodbye,
        getTime: getTime,
        multiplyNumbers: multiplyNumbers
    });
    server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
    console.log('Server running at http://0.0.0.0:50051');
    server.start();
}

main();
