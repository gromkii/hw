describe('DemoCtrl', () => {
  it('should serve index.html properly', () => {
    browser.get('http://localhost:3000')

    expect(browser.getTitle()).toEqual('Punk Brews')
  });

  it('should return number of repeated elements', ()=> {
    var beers = element.all(by.repeater('beer in beers'));
    expect(beers.count()).toEqual(25);
  });

  it('should display beers name', () => {
    var beer = element.all(by.repeater('beer in beers')).first();
    var beerName = beer.element(by.css('.md-headline'));

    beerName.getText().then(text => {
      expect(text).not.toEqual(undefined);
      expect(text).not.toEqual('');
    });
  });

});
