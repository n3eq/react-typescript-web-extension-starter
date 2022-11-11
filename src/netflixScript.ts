
// Check until site is loaded
const netflixInterval = setInterval(async () => {

    // Check if container is fully loaded
    if (document.getElementsByClassName("buttonControls--container")) {
        // Creating button
        const btn = document.createElement('BUTTON');
        btn.className = 'color-supplementary hasIcon round ltr-uhap25'

        // Selecting button container
        const btnContainer = document.getElementsByClassName("buttonControls--container");
        // Adding button to container
        btnContainer[0].appendChild(btn);

        // Sending Title of movie to storage
        await chrome.runtime.sendMessage({
            "action": document.title
        });
    }

    // Stop interval
    clearInterval(netflixInterval)
}, 1000)




