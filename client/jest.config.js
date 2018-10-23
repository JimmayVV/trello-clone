const path = require('path')

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
  moduleNameMapper: {
    '\\.module\\.scss': 'identity-obj-proxy', // For CSS module support within tests
    '\\.module\\.css': 'identity-obj-proxy', // For CSS module support within tests
    '\\.css$': require.resolve('./test/styleMock.js'),
  },
  setupTestFrameworkScriptFile: require.resolve('./test/setup-tests.js'),
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      lines: 50,
      functions: 100,
    },
    /*
    example of a glob:
    './src/index.js': {
      statements: 100,
      branches: 100,
      lines: 100,
      functions: 100,
    }
    */
  },
}
