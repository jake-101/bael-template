"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
async function loadResources(source, callback) {
    try {
        const options = _1.getNormalizedOptions.call(this);
        const resources = await _1.getResources.call(this, options);
        const { injector } = options;
        const next = injector(source, resources);
        if (typeof next !== 'string' && !(next instanceof Buffer)) {
            throw new TypeError('[style-resources-loader] Expected options.injector(...) returns a string or a Buffer. '
                + `Instead received ${typeof next}.`);
        }
        return callback(null, next);
    }
    catch (err) {
        return callback(err);
    }
}
exports.loadResources = loadResources;
//# sourceMappingURL=loadResources.js.map