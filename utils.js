const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1'
});

const dynamo = new AWS.DynamoDB();

const marshall = input => new AWS.DynamoDB.Converter.marshall(input);
const unmarshall = input => new AWS.DynamoDB.Converter.unmarshall(input);

module.exports = {
    dynamo,
    marshall,
    unmarshall,
    AWS
}
