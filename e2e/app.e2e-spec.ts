import { UnderAppPage } from './app.po';

describe('under-app App', () => {
  let page: UnderAppPage;

  beforeEach(() => {
    page = new UnderAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
