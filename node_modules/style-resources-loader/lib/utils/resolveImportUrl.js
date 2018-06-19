"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
function resolveImportUrl({ file, content }) {
    return content.replace(/(@import|@require)(\s+(?:\([a-z,\s]+\)\s*)?)(?:'([^']+)'|"([^"]+)"|([^\s"';]+))/g, (match, importDeclaration, spacingOrOptions, single, double, unquoted) => {
        const pathToResource = single || double || unquoted;
        if (!pathToResource || /^[~/]/.test(pathToResource)) {
            return match;
        }
        const absolutePathToResource = path.resolve(path.dirname(file), pathToResource);
        const relativePathFromContextToResource = path.relative(this.context, absolutePathToResource);
        const quote = (match.match(/['"]$/) || [''])[0];
        return `${importDeclaration}${spacingOrOptions}${quote}${relativePathFromContextToResource}${quote}`;
    });
}
exports.resolveImportUrl = resolveImportUrl;
//# sourceMappingURL=resolveImportUrl.js.map