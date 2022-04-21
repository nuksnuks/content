function validateForm()                                 
         { 
             var name = document.forms["myForm"]["name"];         
             if (name.value == ""){ 
                 document.getElementById('errorname').innerHTML="Indtast venligst et navn";  
                 name.focus(); 
                 return false; 
             }else{
                 document.getElementById('errorname').innerHTML="";  
             }

             var alder = document.forms["myForm"]["alder"];         
             if (alder.value == ""){ 
                 document.getElementById('erroralder').innerHTML="Indtast venligst en alder";  
                 alder.focus(); 
                 return false; 
             }else{
                 document.getElementById('erroralder').innerHTML="";  
             }

             var rolle = document.forms["myForm"]["rolle"];         
             if (rolle.value == ""){ 
                 document.getElementById('errorrolle').innerHTML="Indtast venligst en ønsket rolle";  
                 rolle.focus(); 
                 return false; 
             }else{
                 document.getElementById('errorrolle').innerHTML="";  
             }

            
         }

         var s = "";
for(var i = 1; i < 11; i += 1) {
  s += i + " ";
}
console.log(s);