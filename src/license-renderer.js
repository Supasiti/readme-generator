const availiableLicenses = [
  {
    name: 'Apache 2.0',
    shield : 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    link : 'https://opensource.org/licenses/Apache-2.0',
    text : 'License'
  },
  {
    name : 'BSD 3-Clause',
    shield : 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
    link : 'https://opensource.org/licenses/BSD-3-Clause',
    text : 'License'
  },
  {
    name: 'CC BY 4.0',
    shield : 'https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg',
    link : 'http://creativecommons.org/licenses/by/4.0/',
    text : 'License: CC BY 4.0'
  },
  {
    name : 'GPL v3',
    shield : 'https://img.shields.io/badge/License-GPL%20v3-blue.svg',
    link : 'http://www.gnu.org/licenses/gpl-3.0',
    text : 'License: GPL v3'
  },
  {
    name : 'MIT',
    shield : 'https://img.shields.io/badge/License-MIT-yellow.svg',
    link : 'https://opensource.org/licenses/MIT',
    text : 'License: MIT'
  },
  {
    name : 'MPL 2.0',
    shield : 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
    link : 'https://opensource.org/licenses/MPL-2.0',
    text : 'License: MPL 2.0'
  }
];

// returns a license badge based on which license is passed in
// If there is no license, return an empty string
const createBadge = (licenseName) =>  {
  const licenses = availiableLicenses.map(data => data.name);
  if (licenses.includes(licenseName)) {
    const {shield, link, text} = availiableLicenses.filter(data => data.name === licenseName)[0];
    return `[![${text}](${shield})](${link})`;
  }
  return '';
};

// returns the license link
// If there is no license, return an empty string
const createLink = (licenseName) => {
  const licenses = availiableLicenses.map( data => data.name);
  if (licenses.includes(licenseName)) {
    const {link} = availiableLicenses.filter(data => data.name === licenseName)[0];
    return link;
  }
  return '';
};

// returns the license section of README
// If there is no license, return an empty string
const createSection = (licenseName) => {
  const licenses = availiableLicenses.map( data => data.name);
  if (licenses.includes(licenseName)) {
    const {name,link} = availiableLicenses.filter(data => data.name === licenseName)[0];
    return `Licensed under the [${name}](${link}) license.`
  }
  return '';
};

module.exports = {
  availiableLicenses,
  createBadge,
  createLink,
  createSection
};
