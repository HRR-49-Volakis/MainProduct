const photos = require('../../images');
const argv = require('yargs').argv;
const generator = require('../../generator');

const lines = argv.lines || 1000000;
const filename = argv.output || 'image_12345';

const createImage = () => `${photos.getOne()}`;

const stream = generator.setStream(__dirname + `/../csv/${filename}.csv`);
generator.init(['url'], stream, createImage, lines);