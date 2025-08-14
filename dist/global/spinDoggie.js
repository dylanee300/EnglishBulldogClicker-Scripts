"use strict";
const doggie = document.getElementById("clickerDoggie");
if (!doggie) {
    console.error("doggie not found");
}
else {
    doggie.style.transition = "transform 1s linear";
    setInterval(() => {
        const rotation = Date.now() % 360;
        doggie.style.transform = `rotate(${rotation}deg)`;
    }, 100);
}
