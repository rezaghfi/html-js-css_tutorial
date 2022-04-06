var arr = ["امیر" , "محمد" , "یعقوب" ,"حسین" , "فاطمه" , "جلیل", "علی" ,"حسن" , "تقی" , "رضا" ];
let children = list.children;

let resultChildren = result.children;

onload = function renderList(){
    for (var i=0; i < arr.length; i++){
        children[i].innerHTML = arr[i];
    }
}

var len = arr.length;
num = 0;
var uniqNum = [];
var unique = [];
var uniqueAnswers = [];
var go = true;

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function uniqueAnswer(){
    var tempRandom = Math.floor(Math.random() * len);
    uniqNum.push(tempRandom);
    uniqueAnswers = uniqNum.filter(onlyUnique);
    // console.log(unique);
}

function uniqueRandom(){
    var tempRandom = Math.floor(Math.random() * 4);
    uniqNum.push(tempRandom);
    unique = uniqNum.filter(onlyUnique);
    // console.log(unique);
}

function finalRender(){
    if(num == unique[unique.length - 1]){
        var tempAnswer = Math.floor(Math.random() * 6);
        for(var j=0; j<resultChildren.length; j++){
            uniqueAnswer();
            if(tempAnswer == num){
                resultChildren[i].innerHTML = num;
            }
            else{
                resultChildren[i].innerHTML =  uniqueAnswers;
            }
        }
    }
    else if(go == true){
        len[num];
        if(num > 0){
            children[num - 1].className = "hid"; 
        }
        children[num].className = "show lis";
        num++;
    }

}



setInterval(finalRender, 1000);