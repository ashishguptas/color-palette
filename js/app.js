const feedEl = document.getElementById('feed');
const hexNum = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexBtn = document.querySelector('.hexbtn');
const c1 = document.querySelector('body');
const c2 = document.querySelector('.c2');
const c3 = document.querySelector('.c3');
const c4 = document.querySelector('.c4');


function feedData() {
    for (let i = 0; i < 15; i++) {
        const newEl = document.createElement('div');
        newEl.classList.add('color-card');
        let hexcol = '#';
        for(j = 0; j < 6; j++){
            const random = Math.floor(Math.random()*hexNum.length);
            // console.log(random)
            hexcol += hexNum[random];
            // console.log(hexcol);
        }
        // c1.style.backgroundColor = hexcol;
        // c2.style.backgroundColor = hexcol;
        // c3.style.backgroundColor = hexcol;
        // c4.style.backgroundColor = hexcol;
        newEl.innerHTML = `
        <div class="item block shadow" data-order="${i}">
            <div class="palette">
                <div class="place c4" style="background-color: ${hexcol}"><a href=""></a><span></span></div>
                <div class="place c3" style="background-color: ${hexcol}"><a href=""></a><span></span></div>
                <div class="place c2" style="background-color: ${hexcol}"><a href=""></a><span></span></div>
                <div class="place c1" style="background-color: ${hexcol}"><a href=""></a><span></span></div>
            </div>
            <div class="like button">
                <img alt="" src="images/liked.svg" />
                <span></span>
            </div>
            <span class="pin"> <img alt="" src="images/push-pin.svg" width="15"/></span>
            <span class="download"> <img alt="" src="images/download.svg" width="15"/></span>
        </div>
        `;

        feedEl.appendChild(newEl);
    };
    
}
feedData()

hexBtn.addEventListener('click', changeBg);
function changeBg(){

}