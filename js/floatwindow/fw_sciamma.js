window.onload = function(){
    var om1 = document.getElementById("leader1"); //o1是需要悬浮的选项，这里需要同步你的标签id或class名称
    var ob1 = document.getElementById("leader2"); //o2是需要隐藏的div
    ob1.style.display = "none";
    ob1.onmouseover = om1.onmouseover = function(){
        if(timer) clearTimeout(timer)
        ob1.style.display = "block";
    }
    ob1.onmouseout = om1.onmouseout = () => {

        timer = setTimeout(function () {
            ob1.style.display = "none";
        }, 400);

    }

    var om2 = document.getElementById("marketing1"); //o1是需要悬浮的选项，这里需要同步你的标签id或class名称
    var ob2 = document.getElementById("marketing2"); //o2是需要隐藏的div
    ob2.style.display = "none";
    ob2.onmouseover = om2.onmouseover = function(){
        if(timer) clearTimeout(timer)
        ob2.style.display = "block";
    }
    ob2.onmouseout = om2.onmouseout = () => {

        timer = setTimeout(function () {
            ob2.style.display = "none";
        }, 400);

    }

    var om3 = document.getElementById("critics1"); //o1是需要悬浮的选项，这里需要同步你的标签id或class名称
    var ob3 = document.getElementById("critics2"); //o2是需要隐藏的div
    ob3.style.display = "none";
    ob3.onmouseover = om3.onmouseover = function(){
        if(timer) clearTimeout(timer)
        ob3.style.display = "block";
    }
    ob3.onmouseout = om3.onmouseout = () => {

        timer = setTimeout(function () {
            ob3.style.display = "none";
        }, 400);

    }

    var om4 = document.getElementById("femalegaze1"); //o1是需要悬浮的选项，这里需要同步你的标签id或class名称
    var ob4 = document.getElementById("femalegaze2"); //o2是需要隐藏的div
    ob4.style.display = "none";
    ob4.onmouseover = om4.onmouseover = function(){
        if(timer) clearTimeout(timer)
        ob4.style.display = "block";
    }
    ob4.onmouseout = om4.onmouseout = () => {

        timer = setTimeout(function () {
            ob4.style.display = "none";
        }, 400);

    }


  }



  