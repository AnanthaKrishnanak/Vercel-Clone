"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const simple_git_1 = require("simple-git");
const uuid_1 = require("uuid");
const getAllFilePaths_1 = require("./utils/getAllFilePaths");
const uploadFile_1 = require("./utils/uploadFile");
const git = (0, simple_git_1.simpleGit)().clean(simple_git_1.CleanOptions.FORCE);
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// Middleware to parse request bodies
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong");
});
const port = 3000;
//deployment service
app.get("/deploy", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = (0, uuid_1.v4)();
    const folderPath = `./files/${id}`;
    const repoUrl = req.body.repoUrl;
    const test = "https://github.com/AnanthaKrishnanak/React-custom-hooks";
    try {
        yield git.clone(test, folderPath);
        const files = (0, getAllFilePaths_1.getAllFilePaths)(folderPath);
        files.forEach((file) => __awaiter(void 0, void 0, void 0, function* () {
            (0, uploadFile_1.uploadFile)(file, file);
        }));
        res.json({ id: id });
    }
    catch (error) {
        res.status(500).json({ message: "Faild to deploy" });
    }
}));
app.listen(3000);
