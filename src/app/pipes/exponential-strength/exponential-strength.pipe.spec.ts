import { ExponentialStrengthPipe } from './exponential-strength.pipe';

describe('ExponentialStrenthPipe', () => {
  it('create an instance', () => {
    const pipe = new ExponentialStrengthPipe();
    expect(pipe).toBeTruthy();
  });
});
