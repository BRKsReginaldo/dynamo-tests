const AWS = require('aws-sdk')

AWS.config.update({
    region: 'us-east-1'
})

const dynamo = new AWS.DynamoDB()

dynamo.putItem({
    TableName: 'Music',
    Item: {
        Artist: {
            S: 'Gorillaz'
        },
        SongTitle: {
            S: 'DARE'
        },
        AlbumTitle: {
            S: 'Demon Days'
        },
        Awards: {
            N: '10'
        }
    }
}).promise().then(console.log)
