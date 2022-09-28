/* eslint-disable no-console */
import {
  BatchDetectSyntaxCommand,
  BatchDetectSyntaxCommandInput,
  ComprehendClient,
  LanguageCode,
} from '@aws-sdk/client-comprehend';

const GET_BATCH_TEXT_SENTIMENT_HAVE_FAILED =
  'Something went wrong with `getBatchTextSentiment` api call';

interface IObjectKeys {
  [key: string]: { text: string; count: number; type: string };
}

export const getKeywords = async (texts: string[]) => {
  const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION } = process.env;

  if (!AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY || !AWS_REGION) {
    throw new Error('Environment variables not set!');
  }

  const map: IObjectKeys = {};

  const client = new ComprehendClient({
    region: AWS_REGION,
    credentials: {
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
    },
  });

  try {
    const entities = [];

    while (texts.length) {
      const batchPage = texts.splice(0, 25);

      const params: BatchDetectSyntaxCommandInput = {
        LanguageCode: LanguageCode.EN,
        TextList: batchPage,
      };

      const command = new BatchDetectSyntaxCommand(params);

      // eslint-disable-next-line no-await-in-loop
      const data = await client.send(command);

      if (data.ResultList) {
        entities.push(...data.ResultList.flatMap((item) => item.SyntaxTokens));
      }
    }

    entities.forEach((item) => {
      const text = item.Text.toLowerCase();
      if (map[text]) {
        map[text].count += 1;
      } else {
        map[text] = {
          text,
          type: item.PartOfSpeech.Tag,
          count: 1,
        };
      }
    });

    const filteredKeywords = Object.values(map).filter(
      (item) => item.type === 'ADJ' && item.count > 2,
    );

    return filteredKeywords.map((item) => ({
      text: item.text,
      count: item.count,
    }));
  } catch (error) {
    console.error(error);
    throw Error(GET_BATCH_TEXT_SENTIMENT_HAVE_FAILED);
  }
};
