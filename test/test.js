const badgeRender = require('../src/license-renderer.js');

console.log(badgeRender.renderLicenseBadge('Apache 2.0') === '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)')
console.log(badgeRender.renderLicenseLink('Apache 2.0') === 'https://opensource.org/licenses/Apache-2.0');
console.log(badgeRender.renderLicenseSection('Apache 2.0') === '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)');


console.log(badgeRender.renderLicenseBadge('Apache 2') === '');
console.log(badgeRender.renderLicenseLink('Apache 2') === '');
console.log(badgeRender.renderLicenseSection('Apache 2') === '');
