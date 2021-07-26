const { writeFile } = require('fs'); 

const writeToFile = (filepath, string) => {
  writeFile(filepath, string, (err) => {
    if (err) console.error(err);
    console.log('The file has been saved!');
  });
};

module.exports = {
  writeToFile
}