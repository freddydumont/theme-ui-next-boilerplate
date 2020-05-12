module.exports = {
  // add test-utils direct import
  moduleDirectories: ['node_modules', 'test'],
  // add jest-dom and emotion's extra matchers
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.js'],
  snapshotSerializers: ['jest-emotion'],
};
