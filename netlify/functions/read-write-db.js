import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb'

exports.handler = async function (event, context) {
  const client = new DynamoDBClient({
    region: 'us-east-2',
    credentials: {
      accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
    },
  })
  const command = new ScanCommand({ TableName: 'Users' })
  const results = await client.send(command)

  return {
    statusCode: 200,
    body: results.items,
  }
}
// exports.handler = async function (event, context) {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ message: 'Hello World' }),
//   }
// }
