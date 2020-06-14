const {dynamo, marshall, unmarshall} = require('./utils')

let key = marshall({
    Artist: 'Gorillaz',
    SongTitle: 'DARE'
});

console.log(key)

dynamo.getItem({
    TableName: 'Music',
    Key: key
}).promise().then(data => console.log(unmarshall(data.Item)));
