// const {
//   DynamoDBClient,
//   ListTablesCommand,
// } = require('@aws-sdk/client-dynamodb')

// exports.handler = async function (event, context) {
//   const client = new DynamoDBClient({ region: 'us-west-2' })
//   const command = new ListTablesCommand({})
//   try {
//     const results = await client.send(command)
//     console.log(results.TableNames.join('\n'))
//   } catch (err) {
//     console.error(err)
//   }
// }
exports.handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  }
  return response
}