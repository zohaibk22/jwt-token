"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSessionHandler = void 0;
const db_1 = require("../Database/db");
const jwt_utils_1 = require("../Utils/jwt.utils");
// Logging in
const createSessionHandler = (req, res) => {
    const { email, password } = req === null || req === void 0 ? void 0 : req.body;
    // console.log(req.body, 'req body')
    console.log(email, "email inside conttoller");
    const user = (0, db_1.getUser)(email);
    console.log(user, "user");
    if (!user || user.password !== password) {
        return res.status(401).send("Invalid email or password");
    }
    // create access token
    const accessToken = (0, jwt_utils_1.signJwt)({ email: user.email, name: user.name }, '1h');
    // set access token in cookie
    res.cookie('accessToken', accessToken, {
        maxAge: 30000,
        httpOnly: true
    });
    // send user back
    res.send((0, jwt_utils_1.verifyJwt)(accessToken).payload);
};
exports.createSessionHandler = createSessionHandler;
// Get the session
// Loutgout handler
