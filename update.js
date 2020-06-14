const {dynamo, marshall, unmarshall} = require('./utils')

let key = marshall({
    Artist: 'Gorillaz',
    SongTitle: 'DARE'
});

console.log(key)

dynamo.updateItem({
    TableName: 'Music',
    Key: key,
    UpdateExpression: 'SET Awards = :newAwards',
    ExpressionAttributeValues: marshall({
        ':newAwards': 8
    })
}).promise().then(data => console.log(unmarshall(data.Item)));
