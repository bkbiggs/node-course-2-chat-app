var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

const {app} = require('./../server');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
      var from = 'brian';
      var text = 'text message';
      var message = generateMessage(from, text);

      // expect(message.createdAt).toBeA('number');
      expect(typeof message.createdAt).toBe('number');
      expect(message.from).toBe(from);
      expect(message.text).toBe(text);

    });
});


describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'brian';
//    var latitude = position.coords.latitude;
//    var longitude = position.coords.longitude;
    var latitude = 39;
    var longitude = -77;
    var url = 'https://www.google.com/maps?q=39,-77';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toInclude({from, url});
  })
})
