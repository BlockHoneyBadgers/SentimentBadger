import { rest } from 'msw';

export const handlers = [
  rest.get(
    '*/api/business/:googleId/:yelpId',
    (req, res, ctx) => {
      const { googleDataId } = req.params;


      return res(
        ctx.status(200),
        ctx.json({
            address: '45 Main St Suite 206, Brooklyn, NY',
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
            ],
            keywords: [
                { text: 'amazing', type: 'ADJ', count: 27 },
                { text: 'responsive', type: 'ADJ', count: 4 },
                { text: 'knowledgeable', type: 'ADJ', count: 10 },
                { text: 'best', type: 'ADJ', count: 23 },
                { text: 'great', type: 'ADJ', count: 58 },
                { text: 'affordable', type: 'ADJ', count: 3 },
                { text: 'nice', type: 'ADJ', count: 15 },
                { text: 'happy', type: 'ADJ', count: 13 },
                { text: 'next', type: 'ADJ', count: 4 },
                { text: 'new', type: 'ADJ', count: 11 },
                { text: 'impressed', type: 'ADJ', count: 4 },
                { text: 'modern', type: 'ADJ', count: 3 },
                { text: 'patient', type: 'ADJ', count: 7 },
                { text: 'perfect', type: 'ADJ', count: 10 },
                { text: 'honest', type: 'ADJ', count: 4 },
                { text: 'helpful', type: 'ADJ', count: 26 },
                { text: 'personal', type: 'ADJ', count: 3 },
                { text: 'quick', type: 'ADJ', count: 6 },
                { text: 'much', type: 'ADJ', count: 9 },
                { text: 'wonderful', type: 'ADJ', count: 3 },
                { text: 'beautiful', type: 'ADJ', count: 4 },
                { text: 'friendly', type: 'ADJ', count: 6 },
                { text: 'many', type: 'ADJ', count: 5 },
                { text: 'huge', type: 'ADJ', count: 4 },
                { text: 'good', type: 'ADJ', count: 19 },
                { text: 'outstanding', type: 'ADJ', count: 3 },
                { text: 'first', type: 'ADJ', count: 3 },
                { text: 'kind', type: 'ADJ', count: 7 },
                { text: 'gorgeous', type: 'ADJ', count: 3 },
                { text: 'excellent', type: 'ADJ', count: 9 },
                { text: 'whole', type: 'ADJ', count: 4 },
                { text: 'pleased', type: 'ADJ', count: 4 },
                { text: 'long', type: 'ADJ', count: 5 },
                { text: 'reasonable', type: 'ADJ', count: 3 },
                { text: 'wide', type: 'ADJ', count: 5 },
                { text: 'unprofessional', type: 'ADJ', count: 3 },
                { text: 'different', type: 'ADJ', count: 7 },
                { text: 'other', type: 'ADJ', count: 8 },
                { text: 'high', type: 'ADJ', count: 3 },
                { text: 'ready', type: 'ADJ', count: 4 },
                { text: 'courteous', type: 'ADJ', count: 3 },
                { text: 'terrible', type: 'ADJ', count: 3 },
                { text: 'horrible', type: 'ADJ', count: 5 }
            ]
        }),
      );
    },
  ),
];
