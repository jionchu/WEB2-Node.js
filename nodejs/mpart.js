var M = {
    v:'v',
    f:function(){
        console.log(this.v);
    }
}

// M에 있는 기능들을 외부에서 사용할 수 있도록
module.exports = M;