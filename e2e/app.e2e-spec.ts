import { Ng2MeterialDemoPage } from './app.po';

describe('ng2-meterial-demo App', () => {
  let page: Ng2MeterialDemoPage;

  beforeEach(() => {
    page = new Ng2MeterialDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
