var expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var str = '';
    var rslt = isRealString(str);

    expect(rslt).toBeFalsy();
  });

  it('should reject a string with only spaces', () => {
    var str = '    ';
    var rslt = isRealString(str);

    expect(rslt).toBeFalsy();
  });

  it('should allow string with non-space characters', () => {
    var str = ' Brian ';
    var rslt = isRealString(str);

    expect(rslt).toBeTruthy();
  });
});
