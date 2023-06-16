/* eslint quote-props: 0 */

const { DynamoDBClient, PutItemCommand } = require('@aws-sdk/client-dynamodb')

exports.handler = async function (event, context) {
  const client = new DynamoDBClient({
    region: 'us-east-2',
    credentials: {
      accessKeyId: process.env.VUE_APP_MY_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.VUE_APP_MY_AWS_SECRET_KEY,
    },
  })
  const { id, email, name } = JSON.parse(event.body)

  const command = new PutItemCommand({
    TableName: 'Users',
    Item: {
      'id': { 'S': id },
      'Name': { 'S': name },
      'Email': { 'S': email },
    },
  })

  const response = await client.send(command)
  console.log(response)
  return {
    statusCode: 200,
  }
}
