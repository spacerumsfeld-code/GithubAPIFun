import { servicesGithub } from './services-github';

describe('servicesGithub', () => {
  it('should work', () => {
    expect(servicesGithub()).toEqual('service-github');
  });
});
