var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Demo test brookapps/hn': function (browser) {
    browser
      .url('http://brookapps.co.uk/hn')   
      .waitForElementVisible('body'); 
	  browser.pause(1000);
      // check if we are seeing the div with id 'stories' has children div
      browser.element('css selector', '#stories > div', function(result) {
        if(result.status != -1) { //'stories child div exists, click the first one
		  console.log('stories visible, can click');
          browser.click('#stories > div:nth-child(1)')
          .waitForElementVisible('#comment');
		  
        }else {
		  console.log('stories not visible, can not click');
		}
      });
   
    browser.end();
    }
  };
