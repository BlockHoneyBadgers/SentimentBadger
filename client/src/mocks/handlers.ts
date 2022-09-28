import { rest } from 'msw';

export const handlers = [
  rest.get(
    '*/api/business/:googleId/:yelpId',
    (req, res, ctx) => {
      const { googleDataId } = req.params;


      return res(
        ctx.status(200),
        ctx.json({
            googleDataId: '123',
            name: 'bob construction',
            googleRatingAvg: 4.2,
            yelpRatingAvg: 3.0,
            reviews: [
                {
                    content: ' especially like (wink) their DEMOLITION team (wink). Please don\'t blow up (wink) my beloved building (wink) that houses all my "loving" (wink, wink) neighbors. - and while (wink) you are at it (wink) please, please don\'t NUKE the ENTIRE (wink) BLOCK (wink, wink...extra wink)...for God\'s sake...make this Christmas special...',
                    sentimentScore: 'POSITIVE',
                    rating: 4,
                    source: 'GOOGLE'
                },
                {
                    content: 'Most experienced and respectable builder in the city. Great to work with and true quality shown in their projects in NYC.',
                    sentimentScore: 'MIXED',
                    rating: 5,
                    source: 'GOOGLE'
                },
                {
                    content: 'They don\'t care about workers. Skill and safety is not main concern it\'s the almighty $$$$$$$$$$.\n',
                    sentimentScore: 'NEGATIVE',
                    rating: 1,
                    source: 'GOOGLE'
                },
                {
                    content: '',
                    sentimentScore: null,
                    rating: 1,
                    source: 'GOOGLE'
                },
                {
                    content: ' especially like (wink) their DEMOLITION team (wink). Please don\'t blow up (wink) my beloved building (wink) that houses all my "loving" (wink, wink) neighbors. - and while (wink) you are at it (wink) please, please don\'t NUKE the ENTIRE (wink) BLOCK (wink, wink...extra wink)...for God\'s sake...make this Christmas special...',
                    sentimentScore: 'POSITIVE',
                    rating: 4,
                    source: 'YELP'
                },
                {
                    content: 'Most experienced and respectable builder in the city. Great to work with and true quality shown in their projects in NYC.',
                    sentimentScore: 'MIXED',
                    rating: 5,
                    source: 'YELP'
                },
                {
                    content: 'They don\'t care about workers. Skill and safety is not main concern it\'s the almighty $$$$$$$$$$.\n',
                    sentimentScore: 'NEGATIVE',
                    rating: 1,
                    source: 'YELP'
                },
            ]
        }),
      );
    },
  ),
];
