import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  const formType = req.query.type;
  console.log({ data });
  console.log({ body: req.body });

  const formData = JSON.parse(data?.form_data || '{}');
  console.log({ formData });

  await axios.post(`${process.env.DISCORD_WEBHOOK_URL}`, {
    username: 'brapi',
    avatar_url: 'https://brapi.ga/favicon.png',
    embeds: [
      {
        title: `New ${formType} Form Submission`,
        description: formData?.email || '',
        color: 7419530,
        fields: Object.entries(formData || {}).map(([key, value]) => ({
          name: key,
          value,
        })),
      },
    ],
  });

  console.log('webhook sent to discord');

  res.status(200).json({ message: 'ok' });
};
