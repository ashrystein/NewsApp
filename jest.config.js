module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['<rootDir>/__tests__/**/*.tsx', '**/?(*.)(spec|test).tsx?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/__tests__/setup.js',
    '<rootDir>/__tests__/__mocks__',
  ],
};
