const app = require('../../src/app');

describe('\'Post\' service', () => {
  it('registered the service', () => {
    const service = app.service('post');
    expect(service).toBeTruthy();
  });
});
