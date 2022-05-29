import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log({ req });

  res.status(200).json({ message: 'ok' });
};
