chrome.webNavigation.onCompleted.addListener(function(details) {

    chrome.tabs.executeScript(details.tabId, {
      file: "execute.js",
      allFrames: true
    });    

});