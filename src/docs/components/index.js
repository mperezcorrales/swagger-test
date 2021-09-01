const schemas = require('./schemas');
const responses = require('./responses');

module.exports = {
    components: {
        ...schemas,
        ...responses
    }
}