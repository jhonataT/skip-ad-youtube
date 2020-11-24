const interval = setInterval( () => {
    const beforeSkipAd = document.querySelector(".ytp-ad-text.ytp-ad-preview-text");
    const closeBoxAd = document.querySelector(".ytp-ad-overlay-close-button");
    if(beforeSkipAd){
        console.log(`
        ╔═╗ ╔╦╗
        ╠═╣  ║║
        ╩ ╩o═╩╝
        `);
        const showInfo = document.querySelector(".style-scope.ytd-masthead");
        const skipAd = document.querySelector(".ytp-ad-text.ytp-ad-skip-button-text");
        if(skipAd)
            document.querySelector(".ytp-ad-text.ytp-ad-skip-button-text").click();
    }
    if(closeBoxAd){
        console.log(`
        ╔═╗ ╔╦╗
        ╠═╣  ║║
        ╩ ╩o═╩╝
        `);
        const showInfo = document.querySelector(".style-scope.ytd-masthead");
        const button = document.createElement("button");
        document.querySelector(".ytp-ad-overlay-close-button").click(); 
    }
}, 1000);
