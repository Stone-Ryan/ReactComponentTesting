import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/commentList';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['new comment', 'other comment'] };

    component = renderComponent(CommentList, null, props );
  });

  it('shows and li for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment provided', () => {
    expect(component).to.contain('new comment');
    expect(component).to.contain('other comment');
  });
});
