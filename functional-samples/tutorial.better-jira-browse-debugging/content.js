// find viewissuesidebar and toggle it's display state

console.log('content.js begin');
document.body.style.backgroundColor = "red";
// viewIssueSideBarState = document.querySelector('[id="viewissuesidebar"]'); // use querySelector
viewIssueSideBarState = document.getElementById("viewissuesidebar"); // use getElementById
console.log('content.js begin'+viewIssueSideBarState);
if(viewIssueSideBarState) {
    //==================================================================================================//
    // https://stackoverflow.com/questions/6242976/javascript-hide-show-element, Note, 3 method differs.
    //==================================================================================================//
    
    //viewIssueSideBarState.style.visibility = (viewIssueSideBarState.style.visibility === 'hidden' ? 'visible': 'hidden');
    //viewIssueSideBarState.style.display = (viewIssueSideBarState.style.display === 'none' ? 'block' : 'none');
    viewIssueSideBarState.style.display = (viewIssueSideBarState.style.display === 'none' ? '' : 'none');
    chrome.runtime.sendMessage({ data: viewIssueSideBarState.style.display });
}
alert('Hello, world!');
console.log('content.js end');