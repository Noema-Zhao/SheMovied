window.onload = function(){
    var om = document.getElementById("f1"); //o1是需要悬浮的选项，这里需要同步你的标签id或class名称
    var ob = document.getElementById("q1"); //o2是需要隐藏的div
    ob.style.display = "none";
    om.onclick = function(){
        ob.style.display = "block";
    }
    om.onclick = function(){
        ob.style.display = "none";
    }
}