import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

import { db } from '../../../database';
import { User } from '../../../models';
import { jwt } from '../../../utils';

type Data = 
| { message: string }
| {
    token: string;
    user: {
        email: string;
        name: string;
        role: string;
    }
}
// export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
//     switch( req.method ) {
//         case 'GET':
//             return checkJWT(req, res)

//         default:
//             res.status(400).json({
//                 message: 'Bad request'
//             })
//     }
// }
