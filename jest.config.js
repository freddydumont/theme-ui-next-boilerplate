const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // add test-utils direct import
  moduleDirectories: ['node_modules', 'test'],
  // add jest-dom and emotion's extra matchers
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  // coverage
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx,js,jsx}'],
  // ignore cypress folder
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/cypress/'],
  // jest 27 introduced 'node' as new default `testEnvironment`
  // this can be set on a per-file basis: https://jestjs.io/docs/configuration#testenvironment-string
  testEnvironment: 'jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
