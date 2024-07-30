import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      const subscription = await prisma.subscription.create({
        data: {
          email,
        },
      });

      res.status(200).json(subscription);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Subscription failed' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
