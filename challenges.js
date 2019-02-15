
function equalityCheck(){
  var a = document.getElementById("1digit").value;
    var b = document.getElementById("2digit").value;
    
    
 
var sum = parseInt(a) + parseInt(b);

  if(a===65){
//    document.getElementById(a).innerHTML="true";
      alert(true);
  }else if(b===65){
//   document.getElementById(b).innerHTML="true";
      alert(true);
  }else if(sum===65){
//   document.getElementById(sum).innerHTML="false";
      alert(true);
  }   else
      alert(false);
//    alert("works");



}
equalityCheck(32,33,65);//change parameters to test my code



function calcArea(a,b,c){
    
  var A;
    a = parseInt(document.getElementById("side1").value);
    b = parseInt(document.getElementById("side2").value);
    c = parseInt(document.getElementById("side3").value);
    
    
 
  s= 1/2*(a+b+c);
  
A = (s*(s-a)*(s-b)*(s-c));
squareroot= Math.sqrt(A);
    
  alert(squareroot);
  

}
calcArea(7,8,9);//change to test my code
//
//
//
//
//
function largestNumber(){
    
    var digitone = parseInt(document.getElementById("num1").value);
    var digittwo = parseInt(document.getElementById("num2").value);
    var digitthree = parseInt(document.getElementById("num3").value);
    
  if(digitone>digittwo && digitone>digitthree){
//    document.getElementById("num1").innerHTML;
      alert(digitone);
  }else if(digittwo>digitone&&digittwo>digitthree)
    {
//      document.getElementById("num2").innerHTML
        alert(digittwo);
    }
  else
      alert(digitthree);
//    document.getElementById("num3").innerHTML
}
//largestNumber(100,320,250);//change to test my code
//
//
//
//
function numberTime(){
 var hours;
  var min;
  
  var num = parseInt(document.getElementById("hour").value);
    
  if(num>=60){
   hours = (num/60);
   var finalhour = Math.floor(hours);
     
    
    min = (num%60);
   
     
    alert(finalhour + " hour(s),\t" + min + " minute(s)");
  }
    else if(num<60){
      
      
      
    
      
    
    
     
 
    
  }
    
}
//  numberTime(69);//change input to test my code
//  
// 
//  
//
//
function checkStr()
{
    
    //var a = document.getElementById(a).value;
    //var b = document.getElementById(b).value;
  
 var firstword = document.getElementById("wordone").value;
 var secondword = document.getElementById("wordtwo").value;
  
  
  var string=[];//array declaration
//  var i,j;
  
  for(var i=0; i<firstword.length ; i++)
  {
    for(var j=0; j<secondword.length; j++)
    {
      
      if(firstword.charAt(i)==secondword.charAt(j))
        {
         string.push(firstword.charAt(i));
         }
        
      
    
  }
}
    alert(string);

}

