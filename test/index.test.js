// Simple test file to demonstrate testing setup
const assert = require('assert');

describe('Basic Tests', () => {
  it('should return true', () => {
    assert.strictEqual(true, true);
  });

  it('should add two numbers correctly', () => {
    assert.strictEqual(1 + 1, 2);
  });

  it('should concatenate strings', () => {
    assert.strictEqual('Hello ' + 'World', 'Hello World');
  });
});
