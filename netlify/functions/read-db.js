/* eslint quote-props: 0 */

const { DynamoDBClient, ScanCommand } = require('@aws-sdk/client-dynamodb')

exports.handler = async function (event, context) {
  const client = new DynamoDBClient({
    region: 'us-east-2',
    credentials: {
      accessKeyId: process.env.VUE_APP_MY_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.VUE_APP_MY_AWS_SECRET_KEY,
    },
  })

  const command = new ScanCommand({
    TableName: 'Users',
  })

  const response = await client.send(command)

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  }
}
// exports.handler = async function (event, context) {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ message: 'Hello World' }),
//   }
// }
