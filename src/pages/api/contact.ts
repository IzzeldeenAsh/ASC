import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {
      name,
      email,
      phone,
      howWeCanHelp,
      sector,
      service,
      subservice,
      positionType,
      consultingField,
      position,
      otherPosition,
      resume,
      message,
    } = req.body;

    try {
      const submission = await prisma.contactSubmission.create({
        data: {
          name,
          email,
          phone,
          howWeCanHelp,
          sector,
          service,
          subservice,
          positionType,
          consultingField,
          position,
          otherPosition,
          resume,
          message,
        },
      });

      res.status(200).json({ success: true, submission });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Submission failed' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
