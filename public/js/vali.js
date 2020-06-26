console.log("hai");
function validate()
 {
   console.log("hai");
   console.log(document);
   uname.focus();
     let eMail1=document.getElementById("email").value;    
     let uname1=document.getElementById('uname').value;
     let pwd=document.getElementById('pwd').value;    
     let pwd1=document.getElementById('pwd1').value;
 // Email validation
 
 let regexp1=/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,15})$/;
  let regexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if((uname1=="")||(!isNaN(uname1)))
  {
    // alert("User name should be Alphabets");
    uname.focus();
    document.getElementById("uname").value="";
    document.getElementById('uspan').innerHTML="Sorry!! username empty";
    return false;
  }
  if((eMail1=="")||!(regexp.test(eMail1)))
  {
    document.getElementById('uspan').innerHTML="";
    email.focus();
    document.getElementById("email").value="";
    document.getElementById('espan').innerHTML="Sorry!! Invalid email format";
    return false;
  }
  if( !(regexp1.test(pwd)))
  {
    document.getElementById('pwd').focus();
    document.getElementById('espan').innerHTML="";
    document.getElementById("pwd").value="";
    document.getElementById('pspan').innerHTML="Password is of 7-15 with Upper,lower and digit";
    return false;
  }

  if(pwd!=pwd1)
  {
    // alert("Please re enter correct password");
    document.getElementById('pwd1').focus();
    document.getElementById('pspan').innerHTML="";
    document.getElementById("pwd1").value="";
    document.getElementById('rspan').innerHTML="Sorry!! please confirm password";
    return false;
  }
  else{
alert("Registration successful");
    return true;

}}
function validate1()
 {console.log("hai");
 console.log(document);

     let eMaill1=document.getElementById("emaill").value;
      
     let pwdls=document.getElementById('pswl').value;
     console.log(eMaill1);
     let regexp1=/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,15})$/;
 // Email validation
   let regexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if((eMaill1=="")||!(regexp.test(eMaill1)))
  {
    // alert("Please Enter valid email");
    emaill.focus();
    document.getElementById("emaill").value="";
    document.getElementById('emailspan').innerHTML="Sorry!! Invalid email format";
    return false;
  }
  
  if( !(regexp1.test(pwdls)))
  {
  // if((pwdls=="")||(pwdls.length<=7)||(pwdls.length>12))
  
    // alert("Password lenght should be with in 7 -12 ");
    pswl.focus();
    document.getElementById("pswl").value="";
    document.getElementById('emailspan').innerHTML=" ";
    document.getElementById('pwdspan').innerHTML="Password is of 7-15 with Upper,lower and digit";
    return false;
  }
else{

    return true;}
  }

function getdata()
{
  alert("We will look into it")
  return true;
}

//  let regexp=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,5})(.[a-z]{2,3})?$/;
