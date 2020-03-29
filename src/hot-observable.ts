import {fromEvent} from "rxjs";

//truly hot variable
var observable = fromEvent(document, 'mousemove')

setTimeout(() => {
    var subscription=observable.subscribe(
        (x:any) => addItem(x)
    )
},2000)

function addItem(val:any){
    //use vanilla javascript to create html elements to display in browser.
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}