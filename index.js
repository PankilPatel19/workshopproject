let p = new Promise((resolve, reject) =>{
    let xhttp = new XMLHttpRequest();
xhttp.open("GET","https://jsonplaceholder.typicode.com/users");
xhttp.send();
xhttp.onload = function()
{
if(xhttp.status==200)
{
resolve(xhttp.responseText)

}
else{resject("Can't fulfill");
}





});

p.then(
function(value){
    console.log(value)
},

function(error){

    console.log(error)
}


)