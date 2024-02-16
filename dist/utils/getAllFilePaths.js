"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFilePaths = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getAllFilePaths = (folderPath) => {
    let response = [];
    // allFilesAndFolder contains all files and folders names
    const allFilesAndFolders = fs_1.default.readdirSync(folderPath);
    // get all file paths
    allFilesAndFolders.forEach((file) => {
        const fullFilePath = path_1.default.join(folderPath, file);
        if (fs_1.default.statSync(fullFilePath).isDirectory()) {
            response = response.concat((0, exports.getAllFilePaths)(fullFilePath));
        }
        else {
            response.push(fullFilePath);
        }
    });
    return response;
};
exports.getAllFilePaths = getAllFilePaths;
