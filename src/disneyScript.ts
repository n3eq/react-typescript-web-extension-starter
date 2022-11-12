
    // Check until site is loaded
    const disneyInterval = setInterval(async () => {
        console.log('work');
        if (document.getElementsByClassName("sc-giOsra blOJuP")){

            // Selecting button container
            let btnContainer;
            btnContainer = document.getElementsByClassName("sc-giOsra blOJuP");

            // Creating button
            const btn = document.createElement('BUTTON');
            btn.className = 'button button--watchlist movie-list-addon-bnt';
            btn.textContent = 'Add';
            //Creating button in container
            btnContainer[0].appendChild(btn);


            // Sending Title of movie to storage
            await chrome.runtime.sendMessage({
                "action": document.title
            });
            // Stop interval
            clearInterval(disneyInterval)

        }
    }, 1000)











