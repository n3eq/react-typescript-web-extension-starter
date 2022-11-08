import browser from "webextension-polyfill";

// Listen for messages sent from other parts of the extension
browser.runtime.onMessage.addListener((request: { popupMounted: boolean }) => {
    // Log statement if request.popupMounted is true
    // NOTE: this request is sent in `popup/component.tsx`
    if (request.popupMounted) {
        console.log("backgroundPage notified that Popup.tsx has mounted.");
    }
});

// try{

    // chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    //     if(changeInfo.status == 'complete'){
    //         const tabId = tab.id as number;
    //         chrome.scripting.executeScript({
    //             files: ['contentScript.js'],
    //             target: { tabId }
    //         }).then(r => console.error(r));
    //     }
    // });


// }catch(e){
//     console.log(e);
// }
