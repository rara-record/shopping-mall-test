// TODO: 테스트 코드

import numberFormat from './numberFormat';

describe('_numberFormat', () => {
  it('천단위에 콤마를 넣는다', () => {
    expect(numberFormat(1000)).toBe('1,000');
  });
});
