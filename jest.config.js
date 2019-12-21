module.exports = {
  // add test-utils direct import
  moduleDirectories: ['node_modules', 'utils'],
  // add jest-dom's extra matchers
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
