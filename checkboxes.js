

function fun(more){
    var checkBox=document.getElementById("loan");
    checkBox.style.display = more.checked ? "block" : "none";
    
}

/* function fun2(){
    var checkBox=document.getElementById("more2");
    if (checkBox.checked =true){
        alert("was 2");
    }
} */

function fun2(more2){
    var checkBox=document.getElementById("dvPassport2");
    checkBox.style.display = more2.checked ? "block" : "none";
    
}
/* function selectOnlyThis(id){
    var myCheckbox = document.getElementsByName("box");
     Array.prototype.forEach.call(myCheckbox,function(el){
       el.checked = false;
     });
     id.checked = true;
     
 }
 */

function sm(amount){
    var slider = document.getElementById("amount");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
}


    