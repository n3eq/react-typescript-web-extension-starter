
// Check until site is loaded
const netflixInterval = setInterval(async () => {

    // Check if container is fully loaded
    if (document.getElementsByClassName("buttonControls--container")) {
        // Creating button
        const btn = document.createElement('BUTTON');
        btn.onclick = () => {
            console.log('button clickkkkkkkkk');
            // Sending Title of movie to storage
            chrome.runtime.sendMessage({
                "action": document.title
            });
        }

        btn.className = 'color-supplementary hasIcon round ltr-uhap25'

        // Selecting button container
        const btnContainer = document.getElementsByClassName("buttonControls--container");
        // Adding button to container
        btnContainer[0].appendChild(btn);
    }

    // Stop interval
    clearInterval(netflixInterval)
}, 1000)




