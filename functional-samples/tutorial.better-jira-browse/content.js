// find createIssueDialog and maxmize it window
createIssueDialog = document.getElementById("create-issue-dialog");
// find viewissuesidebar and toggle it's display visibility
viewIssueSideBar = document.getElementById("viewissuesidebar");

if(createIssueDialog) {
    let BETTER_KEY = 'Better?';
    let createIssueDialogStatus = {};
    createIssueDialogStatus[BETTER_KEY] = ''
    let createIssueDialogStatusBetter = createIssueDialogStatus[BETTER_KEY];

    chrome.storage.local.get([BETTER_KEY]).then ((items) => {
        createIssueDialogStatus = items;
        createIssueDialogStatusBetter = createIssueDialogStatus[BETTER_KEY];

        if(createIssueDialogStatusBetter === ''){

            createIssueDialog.style.position = "absolute";
            createIssueDialog.style.left = "0px";
            createIssueDialog.style.top = "0px";
            createIssueDialog.style.width = "100%";
            createIssueDialog.style.height = "100%";

            createIssueDialogContentCollection = document.getElementsByClassName("aui-dialog2-content jira-dialog-core-content");
            if(createIssueDialogContentCollection[0]) {
                createIssueDialogContentCollection[0].style.maxHeight = "100%";
            }
            createIssueDialogStatusBetter = 'none';
            createIssueDialogStatus[BETTER_KEY] = createIssueDialogStatusBetter;
        } else {

            createIssueDialog.style.position = "absolute";
            createIssueDialog.style.left = "";
            createIssueDialog.style.top = "";
            createIssueDialog.style.width = "800px";
            createIssueDialog.style.height = "600px";
            createIssueDialogStatusBetter = '';
            createIssueDialogStatus[BETTER_KEY] = createIssueDialogStatusBetter;
        }
        chrome.storage.local.set(createIssueDialogStatus);
        chrome.runtime.sendMessage({ data: createIssueDialogStatusBetter });
    });
} else if(viewIssueSideBar) {
    viewIssueSideBar.style.display = (viewIssueSideBar.style.display === 'none' ? '' : 'none');
    chrome.runtime.sendMessage({ data: viewIssueSideBar.style.display });
}
