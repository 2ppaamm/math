import { MathPage } from './app.po';

describe('math App', () => {
  let page: MathPage;

  beforeEach(() => {
    page = new MathPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to ag!!');
  });
});
