const chai = require('chai');
const { expect } = require('chai');

describe('Protractor Demo Website', function() {
    it('should have the title Super Calculator', async function() {
      browser.get('http://juliemr.github.io/protractor-demo/');         
      expect(await browser.wait(protractor.until.titleIs('Super Calculator'), 5000)).to.be.true;
    });

    it('should display NaN value for incorrect values', async function() {
      await browser.get('http://juliemr.github.io/protractor-demo/');      
      const firstNumber = element(by.model('first'));
      const secondNumber = element(by.model('second'));  
      const goButton = element(by.id('gobutton'));
      const latestResult = element(by.binding('latest')); 
      await firstNumber.sendKeys('asd');
      await secondNumber.sendKeys('asd');
  
      await goButton.click();
      await browser.sleep(3000);                      
  
      expect(await latestResult.getText()).to.be.equal('NaN');      
    });
  });
