var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Demo test brookapps/whack-a-mole': function (browser) {
    browser
      .url('http://brookapps.co.uk/whack-a-mole/')   
      .waitForElementVisible('body'); 
	  browser.pause(1000);
      // check if we are seeing the div with id 'stories' has children div
      browser.element('css selector', 'button', function(result) {
        if(result.status != -1) { //'stories child div exists, click the first one
		  console.log('button visible, can click');
          browser.click('button')
          .waitForElementVisible('.Mole');
		  
        }else {
		  console.log('button not visible, can not click');
		}
      });
   
    browser.end();
    }
  };
