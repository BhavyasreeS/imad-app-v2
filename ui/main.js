//counter code
var button=document.getElementById('counter');

button.onclick=function() {
    //Create a request object
    var request=new XMLhttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange=function() {
        if(request.readystate===XMLhttpRequest.DONE){
            //Take some action
            if(request.status===200){
                var counter=request.resposeText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
        //Not done
        
    };
    //Make the request
    request.open('GET','http://bhavyasrees.imad.hasura-app.io/counter', true);
    request.send(null);
   
    
};