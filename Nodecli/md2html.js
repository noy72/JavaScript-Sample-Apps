const marked = require('marked');

module.exports = (markdown, opts) => {
    return marked(markdown, {
        gfm: opts.gfm,
    });
};
