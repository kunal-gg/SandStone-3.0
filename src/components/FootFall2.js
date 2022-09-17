import React from 'react'

export default function FootFall2() {
    function handleScroll() {
        let valueDisplays = document.querySelectorAll(".num");
        let interval = 4000;
        valueDisplays.forEach((valueDisplay) => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
            let duration = Math.floor(interval / endValue);
            let counter = setInterval(function () {
                startValue += 1;
                valueDisplay.textContent = startValue;
                if (startValue == endValue) {
                    clearInterval(counter);
                }
            }, duration);
        });
    }
    return (
        <div class="wrapper">
            <div class="container">
                <span class="num" data-val="3">000</span>
                <span class="text">Physical Editons</span>
            </div>
            <div class="container">
                <span class="num" data-val="45">000</span>
                <span class="text">Speakers</span>
            </div>
            <div class="container">
                <span class="num" data-val="200">000</span>
                <span class="text">Number of Companies</span>
            </div>
            <div class="container">
                <span class="num" data-val="100">000</span>
                <span class="text">Footfall</span>
            </div>
            {handleScroll}

        </div>
    )
}
