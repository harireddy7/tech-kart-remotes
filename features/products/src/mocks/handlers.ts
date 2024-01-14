import { rest } from 'msw';

const host = 'http://localhost:3000';

export const handlers = [
  rest.get(`${host}/products`, (_, res, ctx) => {
    console.log('in msw handler');
    return res(
      ctx.status(200),
      ctx.json([{ name: 'barry' }, { name: 'oliver' }]),
      ctx.set({
        'Access-Control-Allow-Origin': 'localhost',
      })
    );
  }),
];
