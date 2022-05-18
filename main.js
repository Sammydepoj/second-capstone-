function validateform(){
    var uname=document.newform.username.value;
    var uemail=document.newform.email.value;
    var mailformat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var pnumber=document.newform.Phonenumber.value;
    var pword=document.newform.Password.value;
    var cpword=document.newform.CPassword.value;
    var male=document.newform.male.checked;
    var female=document.newform.female.checked;

    if (uname==null ||uname==""){
        document.newform.username.focus();
    alert("Username can not be blank");
    return false;
    }
    if (uemail.match(mailformat)){


    }
        else{
        document.newform.email.focus();
    alert("Invalid email Entered, pls enter a valid email");
    return false;
    }
    
    if (pnumber==null || pnumber.length<11){
        document.newform.Phonenumber.focus();
        alert("Phone number is not valid,Phone number must be 11 digits number");
        return false;
    }
    if (pword==null ||pword.length<8){
        document.newform.Password.focus();
        alert("Password must not be less than 8 characters");
        return false; 
    }
    if(cpword==null || cpword!==pword){
        document.newform.CPassword.focus();
        alert("Confirm Password is not the same as Password ");
        return false;   
    }
    if (male == false && female==false ){
        alert("Gender not selected");
        return false;
    }
    else if (male == true && female==true ){
        alert("multiple genders can not be selected, please reload and try again");
        return false;
    }
   
    alert("All inputs are validated");
    window.location="index.html";

}
