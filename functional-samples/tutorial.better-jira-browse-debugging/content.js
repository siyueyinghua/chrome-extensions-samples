//==================================================================================================//
// https://stackoverflow.com/questions/6242976/javascript-hide-show-element, Note, 3 method differs.
//==================================================================================================//

//viewIssueSideBarState.style.visibility = (viewIssueSideBarState.style.visibility === 'hidden' ? 'visible': 'hidden');
//viewIssueSideBarState.style.display = (viewIssueSideBarState.style.display === 'none' ? 'block' : 'none');
//viewIssueSideBarState.style.display = (viewIssueSideBarState.style.display === 'none' ? '' : 'none');
console.log('content.js begin');
document.body.style.backgroundColor = "red";

// find createIssueDialog and maxmize it window
createIssueDialog = document.getElementById("create-issue-dialog");
// find viewissuesidebar and toggle it's display visibility
viewIssueSideBar = document.getElementById("viewissuesidebar");
//-- createIssueButton = document.getElementById("create_link");

//-- createIssueButton.addEventListener('click', async () => {
//--     const response = await chrome.runtime.sendMessage({ data: 'none' }); // 'none' equal viewIssueSideBar === 'none', will maxmize create issue dialog
//--     console.log('createIssueButton clicked');
//-- });
//-- 
//-- createIssueDialog.addEventListener('beforeunload', async () => {
//--     const response = await chrome.runtime.sendMessage({ data: '' }); // '' equal viewIssueSideBar === '', create issue dialog was closed
//--     console.log('createIssueDialog closed');
//-- });

if(createIssueDialog) {
    // createIssueDialog.style.display = (createIssueDialog.style.display === 'none' ? '' : 'none');
    //-- console.log('Dialog resize = ' + createIssueDialog.style.resize);
    //-- createIssueDialog.style.resize = "both";
    //-- console.log('Dialog resize = ' + createIssueDialog.style.resize);

    let BETTER_KEY = 'Better?';
    let createIssueDialogStatus = {};
    createIssueDialogStatus[BETTER_KEY] = ''
    let createIssueDialogStatusBetter = createIssueDialogStatus[BETTER_KEY];
    console.log('init createIssueDialogStatusBetter = ' + createIssueDialogStatusBetter);

    chrome.storage.local.get([BETTER_KEY]).then ((items) => {
        console.log('items[BETTER_KEY] = ' + items[BETTER_KEY]);
        createIssueDialogStatus = items;
        createIssueDialogStatusBetter = createIssueDialogStatus[BETTER_KEY];
        console.log('Update createIssueDialogStatusBetter = ' + createIssueDialogStatusBetter);

        if(createIssueDialogStatusBetter === ''){
            console.log('Dialog position = ' + createIssueDialog.style.position);
            console.log('Dialog left = ' + createIssueDialog.style.left);
            console.log('Dialog top = ' + createIssueDialog.style.top);

            createIssueDialog.style.position = "absolute";
            createIssueDialog.style.left = "0px";
            createIssueDialog.style.top = "0px";

            console.log('Dialog width = ' + createIssueDialog.style.width);
            createIssueDialog.style.width = "100%";
            console.log('Dialog width = ' + createIssueDialog.style.width);

            console.log('Dialog height = ' + createIssueDialog.style.height);
            createIssueDialog.style.height = "100%";
            console.log('Dialog height = ' + createIssueDialog.style.height);

            createIssueDialogContentCollection = document.getElementsByClassName("aui-dialog2-content jira-dialog-core-content");
            if(createIssueDialogContentCollection[0]) {
                createIssueDialogContentCollection[0].style.maxHeight = "100%";
                console.log('Dialog Content height = ' + createIssueDialogContentCollection[0].style.height);
            }

            // createIssueDialogContentDescription = document.getElementById("description-wiki-edit");
            createIssueDialogContentDescription = document.getElementById("description");
            if(createIssueDialogContentDescription){
                createIssueDialogContentDescription.style.maxHeight = "1200px";
                createIssueDialogContentDescription.style.Height = "800px";
                console.log('Dialog Content Description maxHeight = ' + createIssueDialogContentDescription.style.maxHeight);
                console.log('Dialog Content Description height = ' + createIssueDialogContentDescription.style.Height);
            }

            createIssueDialogContentDescriptionCollection = document.getElementsByClassName("rte-container");
            for(createIssueDialogContentDescription of createIssueDialogContentDescriptionCollection) {
                createIssueDialogContentDescription.style.maxHeight = "1200px";
                createIssueDialogContentDescription.style.Height = "800px";
                console.log('Dialog Content Description maxHeight = ' + createIssueDialogContentDescription.style.maxHeight);
                console.log('Dialog Content Description height = ' + createIssueDialogContentDescription.style.Height);
            }

            createIssueDialogContentDescriptionRichEditorCollection = document.getElementsByTagName("rich-editor");
            for(createIssueDialogContentDescriptionRichEditor of createIssueDialogContentDescriptionRichEditorCollection){
                createIssueDialogContentDescriptionRichEditor.style.maxHeight = "1200px";
                createIssueDialogContentDescriptionRichEditor.style.Height = "800px";
                console.log('Dialog Content Description maxHeight = ' + createIssueDialogContentDescriptionRichEditor.style.maxHeight);
                console.log('Dialog Content Description height = ' + createIssueDialogContentDescriptionRichEditor.style.Height);
            }

            createIssueDialogContentDescriptionToxCollection = document.getElementsByClassName("tox tox-tinymce jira-editor-container");
            for(createIssueDialogContentDescriptionTox of createIssueDialogContentDescriptionToxCollection) {
                createIssueDialogContentDescriptionTox.style.maxHeight = "none"; // "1400px";
                createIssueDialogContentDescriptionTox.style.height = "600px";
                console.log('Dialog Content Description maxHeight = ' + createIssueDialogContentDescriptionTox.style.maxHeight);
                console.log('Dialog Content Description height = ' + createIssueDialogContentDescriptionTox.style.height);
            }

            createIssueDialogStatusBetter = 'none';
            createIssueDialogStatus[BETTER_KEY] = createIssueDialogStatusBetter;
        } else {
            console.log('Else Dialog position = ' + createIssueDialog.style.position);
            console.log('Else Dialog left = ' + createIssueDialog.style.left);
            console.log('Else Dialog top = ' + createIssueDialog.style.top);

            createIssueDialog.style.position = "absolute";
            createIssueDialog.style.left = "";
            createIssueDialog.style.top = "";

            console.log('Else Dialog width = ' + createIssueDialog.style.width);
            createIssueDialog.style.width = "800px";
            console.log('Else Dialog width = ' + createIssueDialog.style.width);

            console.log('Else Dialog height = ' + createIssueDialog.style.height);
            createIssueDialog.style.height = "600px";
            console.log('Else Dialog height = ' + createIssueDialog.style.height);
            createIssueDialogStatusBetter = '';
            createIssueDialogStatus[BETTER_KEY] = createIssueDialogStatusBetter;
        }
        chrome.storage.local.set(createIssueDialogStatus);
        chrome.runtime.sendMessage({ data: createIssueDialogStatusBetter });
    });
} else if(viewIssueSideBar) {
    console.log('viewIssueSideBar display = ' + viewIssueSideBar.style.display);
    viewIssueSideBar.style.display = (viewIssueSideBar.style.display === 'none' ? '' : 'none');
    console.log('viewIssueSideBar width = ' + viewIssueSideBar.style.width);
    chrome.runtime.sendMessage({ data: viewIssueSideBar.style.display });
}

alert('Hello, world!');
console.log('content.js end');
