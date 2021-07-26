const badge = require('./license-renderer.js');


// createBadge
describe( 'license renderer', () => {
  describe('createBadge', () => {
    it ('should return a markdown string when a correct input is passed that renders a badge', () =>{
      const input = 'Apache 2.0';
      const expectResult = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

      expect(badge.createBadge(input)).toEqual(expectResult);
    });

    it ('should return an empty string when an incorrect input is passed', () => {
      const input = 'Apache 2';
      const expectResult = '';

      expect(badge.createBadge(input)).toEqual(expectResult);

    });
  });

  // createLink
  describe('createLink', () => {
    it ('should return a href link string when a correct input is passed', () =>{
      const input = 'Apache 2.0';
      const expectResult = `https://opensource.org/licenses/Apache-2.0`;

      expect(badge.createLink(input)).toEqual(expectResult);
    });

    it ('should return an empty string when an incorrect input is passed', () => {
      const input = 'Apache 2';
      const expectResult = '';

      expect(badge.createLink(input)).toEqual(expectResult);

    });
  });

  // createSection
  describe('createSection', () => {
    it ('should return a section string when a correct input is passed', () =>{
      const input = 'Apache 2.0';
      const expectResult = `Licensed under the [Apache 2.0](https://opensource.org/licenses/Apache-2.0) license.`;

      expect(badge.createSection(input)).toEqual(expectResult);
    });

    it ('should return an empty string when an incorrect input is passed', () => {
      const input = 'Apache 2';
      const expectResult = '';

      expect(badge.createSection(input)).toEqual(expectResult);

    });
  });
});