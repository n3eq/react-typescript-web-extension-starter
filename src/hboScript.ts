setTimeout(async () => {

    // Creating button
    const btn = document.createElement('BUTTON');
    btn.className = ''
    btn.textContent = 'test'


    // Selecting button container
    const btnContainer = document.getElementsByClassName("css-175oi2r r-1awozwy r-18u37iz r-1mnahxq");
    btnContainer[0].appendChild(btn);
    console.log('123123')
    // Sending Title of movie to storage
    await chrome.runtime.sendMessage({
        "action": document.title
    });
},1)



