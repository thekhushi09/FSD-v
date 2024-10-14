function validate(){
    let un=document.getElementById('un').value;
    let pass=document.getElementById('pass').value;
    if(un=='admin' && pass=='admin'){
        document.getElementById('res').innerHTML="Login Successful";
    }
    else{
        document.getElementById('res').innerHTML="Login Failed";
    }


}

function display(){
    let p1=document.querySelector("p");
    p1.innerHTML="Result";
    p1.style.backgroundColor="red";
}