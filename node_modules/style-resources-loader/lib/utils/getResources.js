"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const util = require("util");
const glob = require("glob");
const _1 = require("./");
async function getResources(options) {
    const { patterns, globOptions, resolveUrl } = options;
    const resourceFragments = await Promise.all((_1.isString(patterns) ? [patterns] : patterns)
        .map(async (pattern) => {
        const partialFiles = await new Promise((resolve, reject) => glob(pattern, globOptions, (err, matches) => err ? reject(err) : resolve(matches.filter(_1.isStyleFile))));
        partialFiles.forEach(this.dependency.bind(this));
        const partialResources = await Promise.all(partialFiles.map(async (file) => {
            const content = await util.promisify(fs.readFile)(file, 'utf8');
            const resource = { file, content };
            return resolveUrl ? {
                file,
                content: _1.resolveImportUrl.call(this, resource),
            } : resource;
        }));
        return partialResources;
    }));
    const resources = [].concat(...resourceFragments);
    return resources;
}
exports.getResources = getResources;
//# sourceMappingURL=getResources.js.map