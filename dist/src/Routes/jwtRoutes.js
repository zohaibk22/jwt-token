"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const session_controller_1 = require("../Controllers/session.controller");
const jwtRouter = (0, express_1.Router)();
// Login
// get the current session
// logout
jwtRouter.post('/api/session', session_controller_1.createSessionHandler);
exports.default = jwtRouter;
