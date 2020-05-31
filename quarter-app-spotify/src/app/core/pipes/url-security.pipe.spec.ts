import { UrlSecurityPipe } from './url-security.pipe';

describe('UrlSecurityPipe', () => {
  it('create an instance', () => {
    const pipe = new UrlSecurityPipe();
    expect(pipe).toBeTruthy();
  });
});
