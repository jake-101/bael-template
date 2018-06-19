"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const _1 = require("./");
exports.isStyleFile = (file) => _1.supportedFileExtsWithDot.includes(path.extname(file));
//# sourceMappingURL=isStyleFile.js.map