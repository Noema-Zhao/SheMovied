var comment= document.getElementById("SubmitComment");
comment.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("message").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
 
});
