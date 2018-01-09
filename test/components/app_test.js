import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// //use describe to group together similar tests
// describe('App', () => {
//   //use it to test a single attribute of a targget
//   it('shows the correct test', () => {
//     //create an instance of App
//     const component = renderComponent(App);
//
//     //use expect to make an 'assertion' about a target
//     expect(component).to.contain('React simple starter');
//   });
// });

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  })
  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });
});
