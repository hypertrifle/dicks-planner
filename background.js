var status = 0;

function toggle() {
if (status == 0){
    chrome.browserAction.setIcon({path: "on.png", tabId:tab.id}); // so it's set for the tab user is in
    chrome.tabs.executeScript(tab.id, file:"custom.js"); //execute for this tab
    status++;
}
if (status == 1){
    chrome.browserAction.setIcon({path: "off.png", tabId:tab.id});
    chrome.tabs.executeScript(tab.id, code:"alert()"); // execute nothing when off
    status++;
}
if (status > 1)
    status = 0; // toggle
}

chrome.browserAction.onClicked.addListener(function(tab) {
    toggle();
});