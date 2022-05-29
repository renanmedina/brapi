import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  const formType = req.query.type;
  console.log({ data });

  await axios.post(`${process.env.DISCORD_WEBHOOK_URL}`, {
    username: 'brapi',
    avatar_url: 'https://brapi.ga/favicon.png',
    embeds: [
      {
        title: `New ${formType} Form Submission`,
        description: data.form_data?.email || '',
        color: 7419530,
        fields: Object.entries(data.form_data || {}).map(([key, value]) => ({
          name: key,
          value,
        })),
      },
    ],
  });

  console.log('webhook sent to discord');

  res.status(200).json({ message: 'ok' });
};
