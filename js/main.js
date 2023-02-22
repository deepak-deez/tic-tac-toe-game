const box = document.querySelectorAll(".box");
// const containerMain = document.querySelector(".container");
const reset = document.querySelector(".reset-button");
const resultbox= document.querySelector("#print");
let game=0;
let i = 0;
let player;
let ctr = 0;
let j;
box.forEach((ele) => {
    ele.onclick = function run() {
        if(game==0){
        if (!ele.classList.contains("marked")) {
            // console.log("hi");
            if (i % 2 == 0) {
                ele.innerHTML = "X";
                
                player = "X";
            } else {
                ele.innerHTML = "O";
                player = "O";
            }
            ele.classList.add("marked");
            i++;
            ctr++;
            check();
        }}
    };
});

let winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function check() {
    let array = [];
    for (j = 0; j < box.length; j++) {
        array[j] = box[j].innerHTML;
    }
    console.log(array);
    for (arr of winCombination) {
        let ele1 = arr[0],
            ele2 = arr[1],
            ele3 = arr[2];
        if (
            array[ele1] == array[ele2] &&
            array[ele2] == array[ele3] &&
            array[ele1] != ""
        ) {
            winner = array[ele1];
            resultbox.innerHTML=`${winner} wins`;
            disable();                       
            return;
        }
    }
    if (ctr == 9) {
        // document.write();
        resultbox.innerHTML="It's a draw!";
        disable();
        //     containerMain.append(resultbox);
        return;
    }
}
function disable(){
game=1;
}

reset.onclick = () => {
    box.forEach((ele) => {
        ele.innerHTML="";
        resultbox.innerHTML="";
        game=0;
        ctr=0;
        i=0;
        ele.classList.remove("marked");
    })
}