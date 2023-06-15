/* eslint quote-props: 0 */

import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb'

exports.handler = async function (event, context) {
  const client = new DynamoDBClient({
    region: 'us-east-2',
    credentials: {
      'accessKeyId': process.env.MY_AWS_ACCESS_KEY_ID,
      'secretAccessKey': process.env.MY_AWS_SECRET_ACCESS_KEY,
    },
  })
  const docClient = DynamoDBDocumentClient.from(client)

  const command = new ScanCommand({ TableName: 'Users' })

  const results = await new Promise((resolve, reject) =>
    docClient.send(command, function (err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  )

  const data = results.Items
  console.log(data)

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}
// exports.handler = async function (event, context) {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ message: 'Hello World' }),
//   }
// }
