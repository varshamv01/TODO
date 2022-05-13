function validate(callback){
var username=document.getElementById("username").value  ;
var password=document.getElementById("password").value  ;
if(username=="admin"&& password=="12345")
{
    callback();
    
}

else {

    alert("Login failed");

    return false;
}

}
function redirect(){

    window.location.href=todolist2.html;
}
function displaylist(){

    var httpRequest =new XMLHttpRequest();
    httpRequest.onreadystatechange=function(){
        try{
            if(httpRequest.state===XMLHttpRequest.DONE){
                if(httpRequest.status===200){
                    console.log(httpRequest.responseText);
                    displaylist(httpRequest.responseText)
                }
                else{
                    alert("Error from api");
                }
            }
        }
        catch(e)
        {
            alert(e.description);

        }
    };
    try{
        httpRequest.open('GET' ,'https://jsonplaceholder.typicode.com/todos',true);
        httpRequest.send();
    }
    catch(e)
    {
        alert(e.description);
    }
}
function display(data){
    var list =JSON.parse(data);
    let table=document.getElementById("todotable");
    for(var i=0;i<list.length;i++){
        let rowcount =table.rows.length;
        var row =table.insertrow(rowcount);
        var cell= row.insertCell(0);
        cell.innerHTML=list[i].id;
        var cell= row.insertCell(1);
        cell.innerHTML=list[i].title;
        var cell= row.insertCell(2);
        var element=document.createElement("input");
        element.type="checkbox";

    }
}