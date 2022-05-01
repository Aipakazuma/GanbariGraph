import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import Pixela from "@mikazuki/pixela";

import schema from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const graphId: string = "test-graph";
  console.log(process.env.HOGE);
  // const client = new Pixela(process.env.PIXELA_USER_NAME, process.env.PIXELA_USER_TOKEN);
  // console.log(await client.incrementPixel(graphId));

  return formatJSONResponse({
    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    event,
  });
};

export const main = middyfy(hello);
