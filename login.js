function fn(){
    var a=document.getElementById("username");
    var b=document.getElementById("pass");
    
    if(a.value.trim()=="" && b.value.trim()==""){
        // alert("Username and Password is required.");
        document.getElementById("usernameh6").innerHTML="Username is required.";
        document.getElementById("passh6").innerHTML="Password is required.";
        a.style.border="1px solid red";
        b.style.border="1px solid red";
        // b.style.margin="0px 0px 10px 0px"
        return false;
    }
    else if(a.value.trim()==""){
        // alert("Username is required.");
        document.getElementById("usernameh6").innerHTML="Username is required.";
        a.style.border="1px solid red";
        return false;
    }
    else if(b.value.trim()==""){
        // alert("Password is required.");
        document.getElementById("passh6").innerHTML="Password is required.";
        b.style.border="1px solid red";
        return false;
    }
    else if(a.value.trim()=="starethatkills" && b.value.trim()=="thebasiliskiswatching"){
        alert("Username and Password is Matching.");
        // document.getElementById("btnh6").innerHTML="Username and Passowrd is Matching."
        return true;
    }    
    else if(a.value.trim()=="easteregg" && b.value.trim()=="thesecretisout"){
        alert("Yo mama gae ;)");
        // document.getElementById("btnh6").innerHTML="Username and Passowrd is Matching."
        return true;
    }
    else{
        // alert("Username and Password is Not Matching.");
        document.getElementById("btnloginh6").innerHTML="Username and Password is Not Matching.";
        a.style.border="1px solid red";
        b.style.border="1px solid red";
        document.getElementById("loginbtn").style.display="none";
        return false;
    }
}