// find createIssueDialog and maxmize it window
createIssueDialog = document.getElementById("create-issue-dialog");
// find editCommentDialog and maxmize it window
editCommentDialog = document.getElementById("edit-comment");
// find viewissuesidebar and toggle it's display visibility
viewIssueSideBar = document.getElementById("viewissuesidebar");

if(createIssueDialog || editCommentDialog || viewIssueSideBar) {
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
        if(editCommentDialog) {
            if(betterJiraBrowseStatus['Better?'] === 'none') {
                editCommentDialog.style.position = "absolute";
                editCommentDialog.style.left = "0px";
                editCommentDialog.style.top = "0px";
                editCommentDialog.style.marginLeft = "0px";
                editCommentDialog.style.marginTop = "0px";
                editCommentDialog.style.width = "100%";
                editCommentDialog.style.height = "100%";
                editCommentDialogContentCollection = document.getElementsByClassName("jira-dialog-content jira-dialog-core-content");
                if(editCommentDialogContentCollection[0]) {
                    editCommentDialogContentCollection[0].style.maxHeight = "100%";
                    editCommentDialogContentCollection[0].style.height = "100%";
                }
                editCommentDialogContentCollection = document.getElementsByClassName("aui dnd-attachment-support");
                if(editCommentDialogContentCollection[0]) {
                    editCommentDialogContentCollection[0].style.maxHeight = "100%";
                    editCommentDialogContentCollection[0].style.height = "100%";
                }
                editCommentDialogContentCollection = document.getElementsByClassName("tox tox-tinymce jira-editor-container");
                if(editCommentDialogContentCollection[0]) {
                    editCommentDialogContentCollection[0].style.maxHeight = "100%";
                    editCommentDialogContentCollection[0].style.height = "100%";
                }
                editCommentDialogContentCollection = document.getElementsByClassName("form-body");
                if(editCommentDialogContentCollection[1]) {
                    editCommentDialogContentCollection[1].style.maxHeight = "800px";
                    editCommentDialogContentCollection[1].style.height = "700px";
                }
                editCommentDialogContentCollection = document.getElementsByClassName("buttons-container form-footer");
                if(editCommentDialogContentCollection[0]) {
                    editCommentDialogContentCollection[0].style.maxHeight = "80px";
                    editCommentDialogContentCollection[0].style.height = "80px";
                    editCommentDialog.style.position = "absolute";
                    editCommentDialog.style.top = "0px";
                }
            } else {
                editCommentDialog.style.position = "absolute";
                editCommentDialog.style.left = "";
                editCommentDialog.style.top = "";
                editCommentDialog.style.marginLeft = "-405.5px";
                editCommentDialog.style.marginTop = "-402.5px";
                editCommentDialog.style.width = "800px";
                editCommentDialog.style.height = "600px";
            }
        }
    });
}
