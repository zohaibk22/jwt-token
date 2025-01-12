"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.users = void 0;
exports.users = [
    {
        name: "Zohaib Khan",
        email: "test@test.com",
        password: "password"
    }
];
const getUser = (email) => {
    const user = exports.users.filter((element) => {
        console.log(element, "ELEMent");
        console.log(email);
        return element.email === email;
    })[0] || null;
    console.log(user, "USER USER");
    if (!user) {
        return null;
    }
    return user;
};
exports.getUser = getUser;
