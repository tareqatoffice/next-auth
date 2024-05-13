import jwt from 'jsonwebtoken';

export const encodeJwt = async (user: any, secret: any) => {
	const token = jwt.sign(user, secret);
	return token;
};

export const decodeJwt = async (user: any, secret: any) => {
	const token = jwt.verify(user, secret);
	return token;
};
