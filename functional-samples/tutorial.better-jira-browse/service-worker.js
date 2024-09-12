// service-worker.js
chrome.runtime.onInstalled.addListener(() => {
});

chrome.runtime.onMessage.addListener((msg) => {
  console.log('Message listen');
  switch (msg.data) {
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
});

chrome.action.onClicked.addListener(async (tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
  });
});