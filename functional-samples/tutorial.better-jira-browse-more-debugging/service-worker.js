// service-worker.js
let betterJiraBrowseStatus = {};

function updateIcon(betterJiraBrowseStatus) {
  switch (betterJiraBrowseStatus['Better?']) {
    case 'none':
      chrome.action.setIcon({
        path: {
          16: "images/icon-16.png",
          32: "images/icon-32.png",
          48: "images/icon-48.png",
          128: "images/icon-128.png"
        },
      });
      break;
    case '':
      chrome.action.setIcon({
        path: {
          16: "images/icon_off-16.png",
          32: "images/icon_off-32.png",
          48: "images/icon_off-48.png",
          128: "images/icon_off-128.png"
        },
      });
      break;
  }
}

chrome.runtime.onInstalled.addListener(() => {
  betterJiraBrowseStatus['Better?'] = 'none'
  chrome.storage.local.set(betterJiraBrowseStatus);
});

chrome.runtime.onStartup.addListener(function() {
  console.log("onStartup: first startup");
  chrome.storage.local.get(['Better?']).then ((items) => {
    updateIcon(items);
  });
});

chrome.action.onClicked.addListener(async (tab) => {
  betterJiraBrowseStatus['Better?'] = (betterJiraBrowseStatus['Better?'] === '' ? 'none' : '');
  chrome.storage.local.set(betterJiraBrowseStatus);
  updateIcon(betterJiraBrowseStatus);
  console.log("onClicked url: "+JSON.stringify(tab.url));
  if (tab.url === undefined) return undefined; // skip urls undefined
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
  });
});

chrome.tabs.onUpdated.addListener(function listener(tabId, changedProps, tab) {
  console.log("onUpdated: "+JSON.stringify(changedProps));
  console.log("onUpdated url: "+JSON.stringify(tab.url));
  if (tab.url === undefined) return undefined; // skip urls undefined
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
  });
});

chrome.tabs.onActivated.addListener(function(activeInfo) {
  console.log("onActivated: "+JSON.stringify(activeInfo));
  chrome.tabs.get(activeInfo.tabId, function(tab){
    console.log("onActivated url: "+JSON.stringify(tab.url));
    if (tab.url === undefined) return undefined; // skip urls undefined
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['content.js']
    });
  });
}); 