var el = document.getElementById("first");
var body =el.parentElement.parentElement;
console.log(body.childElementCount);
for(var i=0 ; i < body.childElementCount; i+=1){
    part = body.children[i];
    console.log(part);
}