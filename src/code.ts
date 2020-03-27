import { Observable } from "rxjs/Observable"

//Observables facilitate a stream by providing the means to emit and respond to them.
var observable = Observable.create((observer:any) =>{
    try{
        observer.next('Hello World')
        observer.next('Hello big World')
        setInterval(() =>{ //repeats i am good ever 2 seconds
            observer.next('i am good')
        }, 2000)
        // observer.complete()
        // observer.next('This will not send')
    } catch (err) {
        observer.error(err) //will fire the error:any subscribed code.
    }
});

//observable need to subscribe to their data stream
var observer = observable.subscribe(
    (x:any)=>addItem(x),
    (error:any) => addItem(error),
    () => addItem('Completed!!') //on complete() event above this will be last item
);

setTimeout(() => {
    observer.unsubscribe(); //timeouts after 6 seconds
},6000);

function addItem(val:any){
    //use vanilla javascript to create html elements to display in browser.
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}