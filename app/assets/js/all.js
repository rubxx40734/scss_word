// 這邊是做手機版菜單功能
const btn = document.querySelector('.phoneMenuBtn')
const phoneMenu = document.querySelector('.phoneList')

btn.addEventListener('click',(e) => {
  console.log(phoneMenu.classList)
  phoneMenu.classList.toggle('showMenu')
})
// 這邊是做店面地區篩選
const citySelect = document.querySelector('.cityChoose')
const cityList = document.querySelector('.cityList')
console.log(citySelect, cityList)
citySelect.addEventListener('change', (e) => {
  console.log(e.target.value)
  if(e.target.value == 'all'){
    console.log('true')
    cityList.innerHTML = `<li>
    <img class="storeImg" src="./assets/images/store-1.png" alt="">
    <div class="btnSet">
        <div class="txt">
            <h2>台北中山旗艦店</h2>
            <div class="phone">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-phone-black.svg" alt="">
                <p>電話：(02)000-1234</p>
            </div>
            <div class="time">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-clock-black.svg" alt="">
                <p>營業時間：10:00-21:00</p>
            </div>
            <div class="local">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-map.svg" alt="">
                <p>地址：台北市中山區南京東路25巷2-1號</p>
            </div>
        </div>
        <button type="button">詳細資訊</button>
    </div>
</li>
<li>
    <img class="storeImg" src="./assets/images/store-2.png" alt="">
    <div class="btnSet">
        <div class="txt">
            <h2>台北綠園店</h2>
            <div class="phone">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-phone-black.svg" alt="">
                <p>電話：(02)000-1234</p>
            </div>
            <div class="time">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-clock-black.svg" alt="">
                <p>營業時間：10:00-21:00</p>
            </div>
            <div class="local">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-map.svg" alt="">
                <p>地址：台北市中正區復興南路 132-1 號</p>
            </div>
        </div>
        <button type="button">詳細資訊</button>
    </div>
</li>
<li>
    <img  class="storeImg" src="./assets/images/store-3.png" alt="">
    <div class="btnSet">
        <div class="txt">
            <h2>台中清水旗艦店</h2>
            <div class="phone">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-phone-black.svg" alt="">
                <p>電話：(02)000-1234</p>
            </div>
            <div class="time">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-clock-black.svg" alt="">
                <p>營業時間：10:00-21:00</p>
            </div>
            <div class="local">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-map.svg" alt="">
                <p>地址：台中市清水區經南一路 23 號 8 樓</p>
            </div>
        </div>
        <button type="button">詳細資訊</button>

    </div>
</li>
<li>
    <img  class="storeImg" src="./assets/images/store-4.png" alt="">
    <div class="btnSet">
        <div class="txt">
            <h2>高雄中正形象店</h2>
            <div class="phone">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-phone-black.svg" alt="">
                <p>電話：(02)000-1234</p>
            </div>
            <div class="time">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-clock-black.svg" alt="">
                <p>營業時間：10:00-21:00</p>
            </div>
            <div class="local">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-map.svg" alt="">
                <p>地址：高雄市苓雅區中正路 38 號 12 樓</p>
            </div>
        </div>
        <button type="button">詳細資訊</button>

    </div>
</li>
<li>
    <img  class="storeImg" src="./assets/images/store-5.png" alt="">
    <div class="btnSet">
        <div class="txt">
            <h2>高雄夢時代店</h2>
            <div class="phone">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-phone-black.svg" alt="">
                <p>電話：(02)000-1234</p>
            </div>
            <div class="time">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-clock-black.svg" alt="">
                <p>營業時間：10:00-21:00</p>
            </div>
            <div class="local">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-map.svg" alt="">
                <p>地址：高雄市前鎮區中華一路 63 號 6 樓</p>
            </div>
        </div>
        <button type="button">詳細資訊</button>

    </div>
</li>`
  }else if(e.target.value == 'tapei'){
    cityList.innerHTML = `        <li>
    <img class="storeImg" src="./assets/images/store-1.png" alt="">
    <div class="btnSet">
        <div class="txt">
            <h2>台北中山旗艦店</h2>
            <div class="phone">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-phone-black.svg" alt="">
                <p>電話：(02)000-1234</p>
            </div>
            <div class="time">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-clock-black.svg" alt="">
                <p>營業時間：10:00-21:00</p>
            </div>
            <div class="local">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-map.svg" alt="">
                <p>地址：台北市中山區南京東路25巷2-1號</p>
            </div>
        </div>
        <button type="button">詳細資訊</button>
    </div>
</li>
<li>
    <img class="storeImg" src="./assets/images/store-2.png" alt="">
    <div class="btnSet">
        <div class="txt">
            <h2>台北綠園店</h2>
            <div class="phone">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-phone-black.svg" alt="">
                <p>電話：(02)000-1234</p>
            </div>
            <div class="time">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-clock-black.svg" alt="">
                <p>營業時間：10:00-21:00</p>
            </div>
            <div class="local">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-map.svg" alt="">
                <p>地址：台北市中正區復興南路 132-1 號</p>
            </div>
        </div>
        <button type="button">詳細資訊</button>
    </div>
</li>`
  }else if(e.target.value =='taichung'){
    cityList.innerHTML = `<li>
    <img  class="storeImg" src="./assets/images/store-3.png" alt="">
    <div class="btnSet">
        <div class="txt">
            <h2>台中清水旗艦店</h2>
            <div class="phone">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-phone-black.svg" alt="">
                <p>電話：(02)000-1234</p>
            </div>
            <div class="time">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-clock-black.svg" alt="">
                <p>營業時間：10:00-21:00</p>
            </div>
            <div class="local">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-map.svg" alt="">
                <p>地址：台中市清水區經南一路 23 號 8 樓</p>
            </div>
        </div>
        <button type="button">詳細資訊</button>

    </div>
</li>`
  }else if(e.target.value == 'kaohsiung'){
    cityList.innerHTML = `<li>
    <img  class="storeImg" src="./assets/images/store-4.png" alt="">
    <div class="btnSet">
        <div class="txt">
            <h2>高雄中正形象店</h2>
            <div class="phone">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-phone-black.svg" alt="">
                <p>電話：(02)000-1234</p>
            </div>
            <div class="time">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-clock-black.svg" alt="">
                <p>營業時間：10:00-21:00</p>
            </div>
            <div class="local">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-map.svg" alt="">
                <p>地址：高雄市苓雅區中正路 38 號 12 樓</p>
            </div>
        </div>
        <button type="button">詳細資訊</button>

    </div>
</li>
<li>
    <img  class="storeImg" src="./assets/images/store-5.png" alt="">
    <div class="btnSet">
        <div class="txt">
            <h2>高雄夢時代店</h2>
            <div class="phone">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-phone-black.svg" alt="">
                <p>電話：(02)000-1234</p>
            </div>
            <div class="time">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-clock-black.svg" alt="">
                <p>營業時間：10:00-21:00</p>
            </div>
            <div class="local">
                <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-map.svg" alt="">
                <p>地址：高雄市前鎮區中華一路 63 號 6 樓</p>
            </div>
        </div>
        <button type="button">詳細資訊</button>

    </div>
</li>`
  }

})