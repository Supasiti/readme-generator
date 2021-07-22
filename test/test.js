const badge = require('../src/license-renderer.js');

console.log(badge.createBadge('Apache 2.0') === '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)')
console.log(badge.createLink('Apache 2.0') === 'https://opensource.org/licenses/Apache-2.0');
console.log(badge.createSection('Apache 2.0') === '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)');

// when it is not in the list
console.log(badge.createBadge('Apache 2') === '');
console.log(badge.createLink('Apache 2') === '');
console.log(badge.createSection('Apache 2') === '');
