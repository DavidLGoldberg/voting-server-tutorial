import { expect } from 'chai';
import greeter from '../../src/reducers/greeter';
import { GREET_MESSAGE } from '../../src/actions/greeter';

describe('reducers', () => {
  describe('greeter', () => {
    it('should handle initial state', () => {
      expect(greeter(undefined, {})).to.equal('');
    });

    it('should handle GREETER', () => {
      expect(greeter('foo', { type: GREET_MESSAGE })).to.equal('fooDavid');
    });

    it('should handle unknown action type', () => {
      expect(greeter('', { type: 'unknown' })).to.equal('');
    });
  });
});
