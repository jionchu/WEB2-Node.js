/*
function a(){
    console.log('A');
}
*/

// 이름이 없는 함수: 익명함수
var a = function(){
    console.log('A');
}

function slowfunc(callback){
    callback();
}

slowfunc(a);