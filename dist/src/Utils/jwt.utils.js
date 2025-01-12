"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJwt = exports.signJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//sign jwt
const signJwt = (payload, expiresIn) => {
    return jsonwebtoken_1.default.sign(payload, process.env.PRIVATE_KEY, { algorithm: 'RS256', expiresIn });
};
exports.signJwt = signJwt;
//verify jwt
const verifyJwt = (token) => {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.PUBLIC_KEY);
        return { payload: decoded, expired: false };
    }
    catch (e) {
        return { payload: null, expired: e.message.include("jwt expired") };
    }
};
exports.verifyJwt = verifyJwt;
