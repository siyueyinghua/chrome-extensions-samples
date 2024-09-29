# Improve User Experience on Jira browse page

This extension aims to fix the problem or unfriendly user experiment of Jira browse using Jira SoftWare from Atlassian Company. For now, one problem is that we could not hide the right hand sidebar/panel, as descripted in jira.atlassian.com, [Ability to hide the right hand sidebar in the new issue view](https://jira.atlassian.com/browse/JRACLOUD-79327) and [Add option to collapse the right panel of the new issue view](https://jira.atlassian.com/browse/JRACLOUD-76253) etc. And another problem is that the Create Issue pop up dialog/window is too small to edit, we wish the pop up dialog/window maxmized.[How to make 'Create Issue' pop up bigger](https://community.atlassian.com/t5/Jira-questions/How-to-make-Create-Issue-pop-up-bigger/qaq-p/1782862).

It is very unfriendly for user to browse the main info of issue, especially when the issue description have images, we may see part of images. Honestly it is very ridiculous Jira could not support the feature. Just as some developers comment: "ridiculous this isn't a feature", or "This is ridiculous : this right-side column takes almost 40% of the available screen, for information I could really live without most of the time. I don't simply want the possibility to resize it, I want to be able to hide the whole right-side panel."

This extension names as "Better Jira Browse Status", of which we define "Better Jira Browse Status" as "the right hand sidebar/panel was hidden" and "the create issue pop up dialog/window maxmized", and the "not Better Jira Browse Status" as the opposite. Correspondly The icon with check mark of the extension stands for the "Better Jira Browse Status", The icon without check mark of the extension stands for the "not Better Jira Browse Status". 

The "better or not status" will keep until you click the extension icon to toggle it, which means the new open tab will be loaded as the current "better or not status". The "better or not status" of current tab will toggle immediately when you click the extension icon, and also the extension icon with check mark or not will toggle at the same time. Further more the former opend tabs will change to the newest status automatically when you switch it, awesome! isn't it?!

## Running this extension

1. Clone this repository.
2. Load this directory in Chrome as an [unpacked extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked).
3. You can pin the extension for convience, then click the extension icon, it will toggle visibility of the right hand sidebar/panel on Jira browse page and the size of create issue pop up dialog/window between maxmized size and its default small size.
4. The "better or not status" of current tab will toggle immediately when you click the extension icon, and will keep until you click to toggle it again. Further more the status of former opend tabs will change to the newest status automatically when you switch it, awesome! isn't it?!
5. The create issue pop up dialog/window will maxmize automatically if the current "better or not status" is "better status", gorgeous! isn't it?!


[*Note*] The shortcut is as following:
- Window/Linux: "Ctrl+B",
- "mac": "Command+B"