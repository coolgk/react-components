'use strict';

const fs = require('fs');
const chalk = require('chalk');
const srcFolder = './src';

function sourceFolder (callback) {
    return new Promise((resolve) => {
        fs.readdir(srcFolder, async (error, files) => {
            while (files.length) {
                let folder = `${srcFolder}/${files.pop()}`;
                if (fs.lstatSync(folder).isDirectory()) {
                    await callback(folder);
                }
            }
            resolve();
        });
    });
}

function consoleLogError (message) {
    console.error(chalk.white.bgRed.bold(message));
}

module.exports = { sourceFolder, consoleLogError };

process.on('unhandledRejection', consoleLogError);
