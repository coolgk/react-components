'use strict';

const shelljs = require('shelljs');

require('./utils').sourceFolder((folder) => {
    shelljs.exec(`cd ${folder} && npm run pretest`);
});
