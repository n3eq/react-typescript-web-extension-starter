// Check until site is loaded
const hboInterval = setInterval(async () => {

        // Check if container is fully loaded
        if (document.getElementsByClassName('css-175oi2r r-1habvwh r-18u37iz r-1wtj0ep')) {

                // Creating button
                const btn = document.createElement('BUTTON');
                btn.textContent = 'Add';

                // Selecting button container
                const btnContainer = document.getElementsByClassName("css-175oi2r r-1awozwy r-18u37iz r-1mnahxq");

                if (btnContainer.length > 0){
                        // Adding button to container
                        btnContainer[btnContainer.length -1].appendChild(btn);
                        // Change class name
                        btnContainer[0].className = "css-175oi2r r-1awozwy r-18u37iz r-loaded ";
                }

                // Sending Title of movie to storage
                await chrome.runtime.sendMessage({
                        "action": document.title
                });
                // Stop interval
                clearInterval(hboInterval)
        }
}, 1000)






