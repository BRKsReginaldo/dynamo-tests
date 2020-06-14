const AWS = require('aws-sdk')

AWS.config.update({
    region: 'us-east-1'
})

const dynamo = new AWS.DynamoDB()

const rawMusic = {
    TableName: 'Music',
    Item: {
        Artist: 'Eu sou o gabe',
        SongTitle: 'Sorvete de pistache',
        AlbumTitle: 'Musicas para ex namorados',
        Awards: 6
    }
}

// console.log(new AWS.DynamoDB.Converter.marshall(rawMusic))
dynamo.putItem({
    TableName: rawMusic.TableName,
    Item: new AWS.DynamoDB.Converter.marshall(rawMusic.Item)
}).promise().then(console.log)
