"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENDPOINT = exports.SECRET_ACESS_KEY = exports.ACCESS_KEY_ID = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.ACCESS_KEY_ID = process.env.ACCESS_KEY_ID;
exports.SECRET_ACESS_KEY = process.env.SECRET_ACCESS_KEY;
exports.ENDPOINT = process.env.ENDPOINT;
