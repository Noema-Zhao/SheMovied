window.onload = function(){
    var om = document.getElementById("Sorbonne1"); //o1是需要悬浮的选项，这里需要同步你的标签id或class名称
    var ob = document.getElementById("Sorbonne2"); //o2是需要隐藏的div
    ob.style.display = "none";
    ob.onmouseover = om.onmouseover = function(){
        if(timer) clearTimeout(timer)
        ob.style.display = "block";
    }
    ob.onmouseout = om.onmouseout = function(){
        
        timer = setTimeout(function(){
            ob.style.display = "none";
        },400);
  
    }

    var om2 = document.getElementById("photographer1"); //o1是需要悬浮的选项，这里需要同步你的标签id或class名称
    var ob2 = document.getElementById("photographer2"); //o2是需要隐藏的div
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

    var om3 = document.getElementById("m3431"); //o1是需要悬浮的选项，这里需要同步你的标签id或class名称
    var ob3 = document.getElementById("m3432"); //o2是需要隐藏的div
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
  }



  