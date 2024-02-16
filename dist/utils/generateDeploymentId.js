"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDeploymentId = void 0;
function generateDeploymentId() {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";
    const idLength = 8;
    let id = "";
    for (let i = 0; i < idLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        id += characters.charAt(randomIndex);
    }
    return id;
}
exports.generateDeploymentId = generateDeploymentId;
