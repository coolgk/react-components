'use strict';

const fs = require('fs');
const path = require('path');
const { sourceFolder, consoleLogError } = require('./utils');

fs.createReadStream(`./README.BASE.md`).pipe(
    fs.createWriteStream(`./README.md`)
).on('finish', async () => {
    const writeStream = fs.createWriteStream(`./README.md`, { flags: 'a' });
    await sourceFolder((folder) => {
        return new Promise((resolve) => {
            fs.access(`${folder}/README.md`, fs.constants.R_OK, (error) => {
                if (error) return resolve(consoleLogError(error));
                writeStream.write(`- [${path.basename(folder)}](${folder}/README.md)\n`, resolve);
            });
        });
    });
    writeStream.write(`\n`);
    writeStream.end();

    await sourceFolder((folder) => {
        return new Promise((resolve, reject) => {
            fs.access(`${folder}/README.md`, fs.constants.R_OK, (error) => {
                if (error) return resolve(consoleLogError(error));
                fs.createReadStream(`${folder}/README.md`).pipe(
                    fs.createWriteStream(`./README.md`, { flags: 'a' })
                ).on('finish', () => resolve()).on('error', reject);
            });
        });
    });
}).on('error', consoleLogError);
