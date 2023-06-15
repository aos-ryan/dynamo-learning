/* eslint quote-props: 0 */

import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb'

exports.handler = async function (event, context) {
  const client = new DynamoDBClient({
    region: 'us-east-2',
    credentials: {
      AccessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
      SecretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
    },
  })
  const docClient = DynamoDBDocumentClient.from(client)

  const command = new ScanCommand({
    TableName: 'Users',
  })

  const response = await docClient.send(command)

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
