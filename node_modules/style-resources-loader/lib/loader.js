"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const loader = function (source) {
    this.cacheable && this.cacheable();
    const callback = this.async();
    if (typeof callback !== 'function') {
        throw new Error('[style-resources-loader] Synchronous compilation is not supported.');
    }
    utils_1.loadResources.call(this, source, callback);
};
exports.default = loader;
//# sourceMappingURL=loader.js.map