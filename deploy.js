  
const ghPages = require('gh-pages');
const path = require('path');

ghPages.publish(path.join(process.cwd(), 'dist'), {
  depth: 1,
  logger: function (message) {
    console.log(message);
  }
}, function (err) {
  if (err) {
    throw err;
  }
  console.log('Site has been published.');
});