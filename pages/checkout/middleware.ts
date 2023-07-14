import { NextApiRequest, NextApiResponse } from 'next';
import { jwt } from '../../utils';

export default async function middleware(req: NextApiRequest, res: NextApiResponse) {
  const { token = '' } = req.cookies;

  try {
    await jwt.isValidToken(token);
    return res.end();
  } catch (error) {
    const requestedPage = req.url;
    return res.redirect(`/auth/login?p=${requestedPage}`);
  }
}
