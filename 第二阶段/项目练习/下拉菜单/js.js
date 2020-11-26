//获取元素
var navs = document.querySelectorAll('.nav')
for(let i = 0; i < navs.length; i++){
    navs[i].addEventListener('mouseover',function(e){
        this.children[1].children[0].style.display = 'block';
    })
    navs[i].addEventListener('mouseout',function(){
        this.children[1].children[0].style.display = 'none';
    })
}