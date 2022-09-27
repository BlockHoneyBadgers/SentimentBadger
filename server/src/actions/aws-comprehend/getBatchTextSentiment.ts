/* eslint-disable no-console */
import {
  BatchDetectSentimentCommand,
  BatchDetectSentimentCommandInput,
  ComprehendClient,
  LanguageCode,
} from '@aws-sdk/client-comprehend';

const GET_BATCH_TEXT_SENTIMENT_HAVE_FAILED =
  'Something went wrong with `getBatchTextSentiment` api call';

export const getBatchTextSentiment = async (texts: string[]) => {
  const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION } = process.env;

  if (!AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY || !AWS_REGION) {
    throw new Error('Environment variables not set!');
  }

  const client = new ComprehendClient({
    region: AWS_REGION,
    credentials: {
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
    },
  });

  const sentiments: string[] = [];

  try {
    while (texts) {
      const batch = texts.splice(0, 25);

      const params: BatchDetectSentimentCommandInput = {
        LanguageCode: LanguageCode.EN,
        TextList: batch,
      };

      const command = new BatchDetectSentimentCommand(params);

      // eslint-disable-next-line no-await-in-loop
      const data = await client.send(command);

      if (!data.ResultList) {
        sentiments.push(...data.ResultList.map((item) => item.Sentiment));
      }
    }

    return sentiments;
  } catch (error) {
    console.error(error);
    throw Error(GET_BATCH_TEXT_SENTIMENT_HAVE_FAILED);
  }
};
