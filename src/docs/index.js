
const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const paths = require('./paths');
const externalDocs = require('./externalDocs');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...paths,
    ...externalDocs,
};


// Useful docs:
// - OpenAPI official guide: https://swagger.io/specification/
// - OpenAPI tutorial: https://idratherbewriting.com/learnapidoc/
// - Swagger editor: https://editor.swagger.io/