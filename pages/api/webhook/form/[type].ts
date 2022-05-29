import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  const formType = req.query.type;
  console.log({ data });

  const formData = JSON.parse(data?.form_data || '{}');
  console.log({ formData });

  // remove keys that start with _
  const cleanFormData = Object.keys(formData).reduce((acc, key) => {
    if (key.startsWith('_')) {
      return acc;
    }
    return {
      ...acc,
      [key]: data[key],
    };
  }, {}) as { [key: string]: any };

  console.log({ cleanFormData });

  await axios.post(`${process.env.DISCORD_WEBHOOK_URL}`, {
    username: 'brapi',
    avatar_url: 'https://brapi.ga/favicon.png',
    embeds: [
      {
        title: `New ${formType} Form Submission`,
        description: cleanFormData?.email || '',
        color: 7419530,
        fields: Object.entries(cleanFormData || {}).map(([key, value]) => ({
          name: key,
          value,
        })),
      },
    ],
  });

  console.log('webhook sent to discord');

  res.status(200).json({ message: 'ok' });
};
