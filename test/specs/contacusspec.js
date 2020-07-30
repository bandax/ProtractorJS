
const chai = require('chai');
const { expect } = require('chai');
const EC = protractor.ExpectedConditions;

describe('Epam Contact Us page', function() {
    beforeEach(function(){        
        browser.waitForAngularEnabled(false);
    });

    it('should have a title', async function() {                 
      await browser.get('https://www.epam.com/about/who-we-are/contact'); 
      expect(await browser.getTitle()).to.be.equal('Learn more about EPAM and Contact Us | EPAM');                 
    });

    it('should append a span error next to email field', async function() {
        await browser.get('https://www.epam.com/about/who-we-are/contact'); 
        await element(By.id('_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_email')).sendKeys('wrongemail');             
        await element(By.id('_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_last_name')).sendKeys('jfk');                               
        await browser.wait(protractor.until.elementsLocated(By.css('span#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_email-error>span')), 8000);                        
        expect(await element(By.css('span#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_email-error>span')).getText()).to.be.equal('INCORRECT EMAIL FORMAT');                 
      });
  });