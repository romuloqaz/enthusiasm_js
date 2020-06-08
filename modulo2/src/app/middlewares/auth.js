import jwt from 'jsonwebtoken';
import { promisify } from 'util'; // transforma uma funcção callback podendo utilizar async await

import authConfig from '../../config/auth';

export default async (req, res, next) => {
    const autHeader = req.headers.authorization;
    if (!autHeader) {
        return res.status(401).json({ error: 'Token not provided' });
    }
    const [, token] = autHeader.split(' '); // desestrurando o array, descartanto o bearer dentro de array

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);

        req.userId = decoded.id;

        return next();
    } catch (err) {
        return res.status(401).json({ error: 'Token invalid' });
    }
};
