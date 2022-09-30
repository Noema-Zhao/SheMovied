window.onload = function(){
    var om = document.getElementById("f1"); //o1是需要悬浮的选项，这里需要同步你的标签id或class名称
    var ob = document.getElementById("q1"); //o2是需要隐藏的div
    ob.style.display = "none";
    ob.onmouseover = om.onmouseover = function(){
        
        ob.style.display = "block";
    }
    ob.onmouseout = om.onmouseout = function(){
        
        timer = setTimeout(function(){
            ob.style.display = "none";
        },400);
  
    }

    var om2 = document.getElementById("f2"); //o1是需要悬浮的选项，这里需要同步你的标签id或class名称
    var ob2 = document.getElementById("q2"); //o2是需要隐藏的div
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

    var om3 = document.getElementById("f3"); //o1是需要悬浮的选项，这里需要同步你的标签id或class名称
    var ob3 = document.getElementById("q3"); //o2是需要隐藏的div
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

    var om4 = document.getElementById("f4"); //o1是需要悬浮的选项，这里需要同步你的标签id或class名称
    var ob4 = document.getElementById("q4"); //o2是需要隐藏的div
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

    var om5 = document.getElementById("f5"); //o1是需要悬浮的选项，这里需要同步你的标签id或class名称
    var ob5 = document.getElementById("q5"); //o2是需要隐藏的div
    ob5.style.display = "none";
    ob5.onmouseover = om5.onmouseover = function(){
        if(timer) clearTimeout(timer)
        ob5.style.display = "block";
    }
    ob5.onmouseout = om5.onmouseout = () => {

        timer = setTimeout(function () {
            ob5.style.display = "none";
        }, 400);

    }
    
    var om6 = document.getElementById("f6"); //o1是需要悬浮的选项，这里需要同步你的标签id或class名称
    var ob6 = document.getElementById("q6"); //o2是需要隐藏的div
    ob6.style.display = "none";
    ob6.onmouseover = om6.onmouseover = function(){
        if(timer) clearTimeout(timer)
        ob6.style.display = "block";
    }
    ob6.onmouseout = om6.onmouseout = () => {

        timer = setTimeout(function () {
            ob6.style.display = "none";
        }, 400);

    }

    var om7 = document.getElementById("f7"); //o1是需要悬浮的选项，这里需要同步你的标签id或class名称
    var ob7 = document.getElementById("q7"); //o2是需要隐藏的div
    ob7.style.display = "none";
    ob7.onmouseover = om7.onmouseover = function(){
        if(timer) clearTimeout(timer)
        ob7.style.display = "block";
    }
    ob7.onmouseout = om7.onmouseout = () => {

        timer = setTimeout(function () {
            ob7.style.display = "none";
        }, 400);

    }



  }



  