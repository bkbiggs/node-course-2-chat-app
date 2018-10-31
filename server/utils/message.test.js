var expect = require('expect');

var {generateMessage} = require('./message');

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
