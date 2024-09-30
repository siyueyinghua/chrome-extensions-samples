// find createIssueDialog and maxmize it window
createIssueDialog = document.getElementById("create-issue-dialog");
// find viewissuesidebar and toggle it's display visibility
viewIssueSideBar = document.getElementById("viewissuesidebar");

if(createIssueDialog || viewIssueSideBar) {
    chrome.storage.local.get(['Better?']).then ((items) => {
        betterJiraBrowseStatus = items;
        if(viewIssueSideBar) {
            viewIssueSideBar.style.display = betterJiraBrowseStatus['Better?'];
        }
        if(createIssueDialog) {
            if(betterJiraBrowseStatus['Better?'] === 'none') {
                createIssueDialog.style.position = "absolute";
                createIssueDialog.style.left = "0px";
                createIssueDialog.style.top = "0px";
                createIssueDialog.style.width = "100%";
                createIssueDialog.style.height = "100%";
                createIssueDialogContentCollection = document.getElementsByClassName("aui-dialog2-content jira-dialog-core-content");
                if(createIssueDialogContentCollection[0]) {
                    createIssueDialogContentCollection[0].style.maxHeight = "100%";
                }
            } else {
                createIssueDialog.style.position = "absolute";
                createIssueDialog.style.left = "";
                createIssueDialog.style.top = "";
                createIssueDialog.style.width = "800px";
                createIssueDialog.style.height = "600px";
            }
        }
    });
}
