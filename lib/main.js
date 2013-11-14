exports.main = function() {
	var bb = require("barbutton");
	var data = require("self").data;
	var tabBrowser = require("tab-browser");
	var showForPage = require('showforpage').ShowForPage,
					listeners , checkLocation;



     
    


	checkLocation = function (tabUrl, domReady) {
    

    if (tabUrl.indexOf('github.com') > -1) {
      // show the barbutton
	     barbutton.collapsed(false);
	
	// set Image of the barButton
	     barbutton.setImage(data.url("icon-16.jpg"));
    } else {
    	// hide the barbutton
        barbutton.collapsed(true);
      
      }
    };
  //};
	
	// create the panel
	var panel = require("panel").Panel({
		width: 180,
		height: 180,
		contentURL: "https://en.wikipedia.org/w/index.php?title=Jetpack&useformat=mobile"
	});
	
	// create the barButton with "id , image and Panel"
	let barbutton = bb.BarButton({
		id: "firefox-barbutton",
		image: data.url("icon-16.jpg"),
		panel:panel
	});
	


      for(var tab in tabs) {
        checkLocation(tab.url);
    }
        
   // listener for tab lcoation URL
    listeners = ShowForPage({
       onLocationChange : checkLocation
    });
		
   exports.onUnload = function (reason) {
        if (reason !== 'shutdown') {
                listeners.remove();
        }
   
	
	
	
};