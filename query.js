const {dynamo, marshall, unmarshall} = require('./utils')

dynamo.query({
    TableName: 'Music',
    KeyConditionExpression: 'Artist = :name',
    ExpressionAttributeValues: marshall({
        ':name': 'Gorillaz'
    })
}).promise().then(data => console.log(JSON.stringify(data.Items.map(unmarshall))))
