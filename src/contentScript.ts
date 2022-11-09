setTimeout(() => {

    // Creating button
    const btn = document.createElement('BUTTON');
    btn.className = 'color-supplementary hasIcon round ltr-uhap25'



    // Selecting button container
    const btnContainer = document.getElementsByClassName("buttonControls--container");
    btnContainer[0].appendChild(btn);

    //Getting movie title
    const movieTitle = document.getElementsByClassName('previewModal--player-titleTreatment-logo')[0].getAttribute('alt')
    console.log(movieTitle)

    chrome.runtime.sendMessage({movie: movieTitle}, function(response) {
        console.log(response.farewell);
    });
},1)



