const btn = document.querySelector('button');
const input = document.querySelector('input');
const imgs = document.querySelectorAll('.pic img');
const diem = document.querySelector('.diem');
const lan = document.querySelector('#head .vong .lan');
function getRandom(){
    return random = Math.floor(Math.random()*6)+1;
}
function getRandoms(){
    const arrRandom = [];
    for(let i=0;i<3;i++){
        arrRandom.push(getRandom());
    }
    return arrRandom;
}   
 let score=0;
 let round=0;
btn.onclick = function(e){
    //Lay du lieu tu input value
    const value = input.value;

    //Random
    const randomList = getRandoms();

    //Xu li diem
     //Thay anh
    imgs.forEach((item,index) => {
        item.src= `./assets/img/${randomList[index]}.png`;
    })
     //In diem
    const sum = randomList.reduce((Sum, a) => Sum + a, 0); 
    if(value <3 || value >18 || !value){
        alert('Không hợp lệ nhập lại dự đoán!');
        input.focus();
        return;
    }
     //So lan
    round ++;
    if(round>10){
        alert('Bạn đã hết lượt chơi! Hãy nạp thêm tiền');
        return;
    }
     //Thong bao doan dung hay sai
    if(value == sum){
        score +=10;
        alert("Bạn đã đoán đúng!");
    }
    else alert("Bạn đã đoán sai!");
    lan.innerText = `${round}`
    diem.innerText = `${score}`

}

