chrome.webNavigation.onCompleted.addListener(function(details) {

  if(details.url.split('/')[3] !== 'pokes') return;

  chrome.tabs.executeScript(details.tabId, {
    file: "execute.js",
    allFrames: true
  });

});