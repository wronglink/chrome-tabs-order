// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.commands.onCommand.addListener(function(command) {
    switch(command) {
        case "moveCurrentTabLeft":
            chrome.tabs.query({active: true, lastFocusedWindow: true}, function (tabs) {
                chrome.tabs.move(tabs[0].id, {index: tabs[0].index - 1});
            });
        break;
        case "moveCurrentTabRight":
            chrome.tabs.query({active: true, lastFocusedWindow: true}, function (tabs) {
                chrome.tabs.query({lastFocusedWindow: true}, function (totalTabs) {
                    if (totalTabs.length == tabs[0].index + 1) {
                        newIndex = 0;
                    } else {
                        newIndex = tabs[0].index + 1;
                    }
                    chrome.tabs.move(tabs[0].id, {index: newIndex});
                });
            });
        break;
    }
});
