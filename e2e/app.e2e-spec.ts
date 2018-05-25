import { Angular4ComponentsPage } from './app.po';

describe('angular4-components App', () => {
  let page: Angular4ComponentsPage;

  beforeEach(() => {
    page = new Angular4ComponentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
