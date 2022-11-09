import browser from "webextension-polyfill";

// Listen for messages sent from other parts of the extension
browser.runtime.onMessage.addListener((request: { popupMounted: boolean }) => {
    // Log statement if request.popupMounted is true
    // NOTE: this request is sent in `popup/component.tsx`
    if (request.popupMounted) {
        console.log("backgroundPage notified that Popup.tsx has mounted.");
    }
});

try{

    chrome.tabs.onUpdated.addListener(function(tabId:any, changeInfo:any, tab:any) {
        if(changeInfo.status == 'complete'){
            const tabId = tab.id as number;
            const tabUrl = tab.url

            if (tabUrl.includes('jbv')) {
                 chrome.scripting.executeScript({
                     files: ['js/netflixScript.js'],
                     target: { tabId },
                })


            }

        }
    });
} catch(e){
    console.log(e);
}
