const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('helloworld.proto', {keepCase: true, enums: String, defaults: true, oneofs: true});
const hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

function main() {
    const client = new hello_proto.Greeter('localhost:50051', grpc.credentials.createInsecure());
    const user = 'world';

    client.sayHello({name: user}, function(err, response) {
        console.log('Greeting:', response.message);
    });

    client.sayGoodbye({name: user}, function(err, response) {
        console.log('Farewell Message:', response.message);
    });

    client.getTime({}, function(err, response) {
        console.log('Server Time:', response.time);
    });

    client.multiplyNumbers({number1: 6, number2: 4}, function(err, response) {
        console.log('Multiplication Result:', response.result);
    });
}

main();
