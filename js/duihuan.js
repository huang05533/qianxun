document.getElementById("dh-ul").onclick = function(e){
    e = e || window.event;
    var target = e.srcElement || e.target,
        //tagName = target.tagName.toLowerCase(),
        allLi = document.getElementById("dh-ul").getElementsByTagName("li");
     
    for(var i=0,len=allLi.length;i<len;i++){
        if(target == allLi[i]){
            allLi[i].style.color = "red";
        }else{
            allLi[i].style.color = "white";
        }
    }
     
};