module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.module\\.scss': 'identity-obj-proxy', // For CSS module support within tests
    '\\.module\\.css': 'identity-obj-proxy', // For CSS module support within tests
    '\\.css$': require.resolve('./src/__mocks__/styleMock.js'),
  },
}
