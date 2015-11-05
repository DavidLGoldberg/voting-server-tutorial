import { expect } from 'chai';
import departer from '../../src/reducers/departer';
import { DEPART_MESSAGE } from '../../src/actions/departer';

describe('reducers', () => {
  describe('departer', () => {
    it('should handle initial state', () => {
      expect(departer(undefined, {})).to.equal('');
    });

    it('should handle DEPART_MESSAGE', () => {
      expect(departer('foo', { type: DEPART_MESSAGE })).to.equal('fooBye!');
    });

    it('should handle unknown action type', () => {
      expect(departer('', { type: 'unknown' })).to.equal('');
    });
  });
});
