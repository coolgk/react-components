'use strict';

const shelljs = require('shelljs');
const fs = require('fs');

const srcFolder = './src';
fs.readdir(srcFolder, (error, files) => {
    while (files.length) {
        let folder = `${srcFolder}/${files.pop()}`;
        if (fs.lstatSync(folder).isDirectory()) {
            shelljs.exec(`cd ${folder} && npm run pretest`);
        }
    }
});
