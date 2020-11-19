import jwt from "jsonwebtoken";

export const decodeJWT = token => {
    return jwt.decode(token, { complete: true });
};