import { Request, Response } from 'express';

export default {
  'GET /api/a/list': (req: Request, res: Response) => {
    return res.send({
      code: 0,
      data: {
        count: 2,
        listData: [
          {
            id: 1,
            name: 'macbook pro 2020',
            price: 10999,
          },
          {
            id: 2,
            name: 'ipd 2020',
            price: 2499,
          },
        ],
      },
    });
  },
};
