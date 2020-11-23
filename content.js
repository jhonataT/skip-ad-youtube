const interval = setInterval( () => {
    const beforeAd = document.querySelector(".ytp-ad-text.ytp-ad-preview-text");
    const boxAd = document.querySelector(".ytp-ad-overlay-close-button");
    if(boxAd){
        console.log("FECHANDO!");
        document.querySelector(".ytp-ad-overlay-close-button").click(); 
    }
    
    if(beforeAd){
        console.log("OLHA O AD CHEGANDO!");
        const afterAd = document.querySelector(".ytp-ad-text.ytp-ad-skip-button-text");

        if(afterAd){
            console.log("SKIPANDO");
            document.querySelector(".ytp-ad-text.ytp-ad-skip-button-text").click();
        }
    } 
    else console.log("No aguardo")
    
}, 1000);



