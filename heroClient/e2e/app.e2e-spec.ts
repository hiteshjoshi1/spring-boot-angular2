import { HeroClientPage } from './app.po';

describe('hero-client App', () => {
  let page: HeroClientPage;

  beforeEach(() => {
    page = new HeroClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
