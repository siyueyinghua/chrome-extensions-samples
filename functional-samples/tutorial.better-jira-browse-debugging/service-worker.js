// service-worker.js
let BETTER_KEY = 'Better?';
let createIssueDialogStatus = {};
createIssueDialogStatus[BETTER_KEY] = ''
chrome.storage.local.set(createIssueDialogStatus);

chrome.runtime.onInstalled.addListener(() => {
});

chrome.runtime.onMessage.addListener((msg) => {
  console.log('Message listened');
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



//==============================================================================

//== chrome.runtime.onInstalled.addListener(() => {
//==   chrome.action.setBadgeText({
//==     text: 'OFF'
//==   });
//== });
//== 
//== chrome.action.onClicked.addListener(async (tab) => {
//== 
//==   // We retrieve the action badge to check if the extension is 'ON' or 'OFF'
//==   const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
//==   // Next state will always be the opposite
//==   const nextState = prevState === 'OFF' ? 'ON' : 'ON';
//== 
//==   // Set the action badge to the next state
//==   await chrome.action.setBadgeText({
//==     tabId: tab.id,
//==     text: nextState
//==   });
//== 
//==   chrome.scripting.executeScript({
//==     target: {tabId: tab.id},
//==     files: ['content.js']
//==   });
//== });