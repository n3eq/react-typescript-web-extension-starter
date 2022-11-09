setTimeout(async () => {

    // Creating button
    const btn = document.createElement('BUTTON');
    btn.className = 'color-supplementary hasIcon round ltr-uhap25'



    // Selecting button container
    const btnContainer = document.getElementsByClassName("buttonControls--container");
    btnContainer[0].appendChild(btn);

    // Sending Title of movie to storage
    await chrome.runtime.sendMessage({
        "action": document.title
    });
},1)



