exports.main = function() {
	var bb = require("barbutton");
	var data = require("self").data;
	var tabs = require("tabs");
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

    open = function(){
     var url = getTabURL(tab);
     var path = url.split('//');
     var username = path[1].split('/')[1];
     var repo = path[1].split('/')[2];
     var hackernotesUrl = "http://hackernotes.org/" + username + '/' + repo;
    if(username === "" || repo === "") {
     hackernotesUrl = "http://hackernotes.org/"
     }
      
       open.tabs(hackernotesUrl)


    }
  
	
	
	
	// create the barButton with "id , image "
	let barbutton = bb.BarButton({
		id: "firefox-barbutton",
		image: data.url("icon-16.jpg"),
		onClick : open,
		tooltip : 'HackerNotes'; 
	});
	


      for(var tab in tabs) {
        checkLocation(tab.url);
    }
        
   // listener for tab location URL
    listeners = ShowForPage({
       onLocationChange : checkLocation
    });
		
   exports.onUnload = function (reason) {
        if (reason !== 'shutdown') {
                listeners.remove();
        }
   
	
	
	
};