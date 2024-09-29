# Improve User Experience on Jira browse page

This extension aims to fix the problem or unfriendly user experiment of Jira browse using Jira SoftWare from Atlassian Company. For now, one problem is we could not hide the right hand sidebar/panel, as descripted in jira.atlassian.com, [Ability to hide the right hand sidebar in the new issue view](https://jira.atlassian.com/browse/JRACLOUD-79327) and [Add option to collapse the right panel of the new issue view](https://jira.atlassian.com/browse/JRACLOUD-76253) etc. And another problem is the Create Issue pop up window/dialog is too small to edit, we wish the pop up window maxmized.[How to make 'Create Issue' pop up bigger](https://community.atlassian.com/t5/Jira-questions/How-to-make-Create-Issue-pop-up-bigger/qaq-p/1782862).

It is very unfriendly for user to browse the main info of issue, especially when the issue description have image, we may see part of image. Jira could not support the ability is very ridiculous.Just as some developers comment: "ridiculous this isn't a feature", or "This is ridiculous : this right-side column takes almost 40% of the available screen, for information I could really live without most of the time. I don't simply want the possibility to resize it, I want to be able to hide the whole right-side panel."

## Running this extension

1. Clone this repository.
2. Load this directory in Chrome as an [unpacked extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked).
3. Click the extension icon, it will toggle the right hand sidebar/panel on Jira browse page.

[*Note*] The shortcut is as following:
- Window/Linux: "Ctrl+B",
- "mac": "Command+B"