const feedEl = document.getElementById('feed');
const hexNum = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexNum2 = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexNum3 = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexNum4 = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexNum5 = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexBtn = document.querySelector('.hexbtn');
const c1 = document.querySelector('body');
const c2 = document.querySelector('.c2');
const c4 = document.querySelector('.c4');
const c3 = document.querySelector('.c3');


function feedData() {
    for (let i = 0; i < 15; i++) {
        const newEl = document.createElement('div');
        newEl.classList.add('color-card');
        let hexcol = '#';
        let hexcol2 = '#';
        let hexcol3 = '#';
        let hexcol4 = '#';
        let hexcol5 = '#';
        for(j = 0; j < 6; j++){
            const random = Math.floor(Math.random()*hexNum.length);
            const random2 = Math.floor(Math.random()*hexNum2.length);
            const random3 = Math.floor(Math.random()*hexNum3.length);
            const random4 = Math.floor(Math.random()*hexNum4.length);
            const random5 = Math.floor(Math.random()*hexNum5.length);
            // console.log(random)
            hexcol += hexNum[random];
            hexcol2 += hexNum2[random2];
            hexcol3 += hexNum3[random3];
            hexcol4 += hexNum4[random4];
            hexcol5 += hexNum5[random5];
            // console.log(hexcol);
        }
        newEl.innerHTML = `
        <div class="item block shadow" data-order="${i}">
            <div class="palette">
            <div class="place c5" style="background-color: ${hexcol5}"><a href=""></a><span></span></div>
            <div class="place c4" style="background-color: ${hexcol}"><a href=""></a><span></span></div>
            <div class="place c3" style="background-color: ${hexcol2}"><a href=""></a><span></span></div>
            <div class="place c2" style="background-color: ${hexcol3}"><a href=""></a><span></span></div>
            <div class="place c1" style="background-color: ${hexcol4}"><a href=""></a><span></span></div>
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