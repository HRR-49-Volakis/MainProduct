const fs = require('fs');

const setStream = (filename) => fs.createWriteStream(filename);

const startWriting = (writeStream, encoding, done, fn, lines) => {
  let index = lines;
  const writing = () => {
    let canWrite = true;
    do {
      index--;
      const record = `${fn()}\n`;
      if (index === 0) {
        // we are done
        writeStream.write(record, encoding, done);
      } else {
        // we are not done so don't fire callback
        writeStream.write(record, encoding);
      }
      // check if the lines are done
    } while (index > 0 && canWrite)

    if (index > 0 && !canWrite) {
      writeStream.once('drain', writing);
    }
  };
  writing();
};

//write our `header` line before we invoke the loop
const init = (headers, stream, fn, lines) => {
  stream.write(`${headers.join('#')}\n`, 'utf-8');
  startWriting(stream, 'utf-8', () => {
    stream.end()
  }, fn, lines);
};

module.exports.init = init;
module.exports.setStream = setStream;