// find viewissuesidebar and toggle it's display state
viewIssueSideBarState = document.getElementById("viewissuesidebar");
if(viewIssueSideBarState) {
    viewIssueSideBarState.style.display = (viewIssueSideBarState.style.display === 'none' ? '' : 'none');
    chrome.runtime.sendMessage({ data: viewIssueSideBarState.style.display });
}