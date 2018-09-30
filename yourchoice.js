var sem1_subject1;
var sem1_subject2;
var sem1_subject3;

function calculate_gpa(){
    var z;
    var y;
    var x;
    var a;
//     var semester=prompt("Enter your Semester");
// alert( "You entered a semester"+semester);
 sem1_subject1 = document.getElementById("Subject_1").value;
 sem1_subject2 = document.getElementById("Subject_2").value;
 sem1_subject3 = document.getElementById("Subject_3").value;

if( sem1_subject1 == "A" || sem1_subject1 == "a") {
     z= 4.0;
     
} else if(sem1_subject1 == "B" || sem1_subject1 =="b"){
     z= 3.0;

} else if(sem1_subject1 =="C" || sem1_subject1 =="c"){
     z=2.0;
    
} else if (sem1_subject1 =="F" || sem1_subject1 =="f") {
     z= 0.0;
   
}else {
    alert(z = "Please Enter a grade from "+ "A"+" "+"B"+" "+"C"+" "+" "+"F" +" to know your Semester 1 Gpa") ;
}
 if( sem1_subject2 == "A" ||  sem1_subject2 == "a") {
     y=4.0;

}else if(sem1_subject2 =="B"|| sem1_subject2=="b"){
     y=3.0;

}else if(sem1_subject2 =="C"|| sem1_subject2=="c"){
     y=2.0;
    
}else if(sem1_subject2=="F"|| sem1_subject1=="f"){
     y=0.0;

    
}else{
    alert(y = "Please Enter a grades "+ "A"+" "+"B"+" "+"C"+" "+"D"+" "+"F" +" to know your Semester 1 Gpa") ;
}
if( sem1_subject3 == "A" ||  sem1_subject3 == "a") {
    x= 4.0;

}else if(sem1_subject3 =="B"|| sem1_subject3=="b"){
    x= 3.0;

}else if(sem1_subject3 =="C"|| sem1_subject3=="c"){
    x= 2.0;
    
}else if(sem1_subject3 =="F"|| sem1_subject1=="f"){
    x= 0.0; 
}else{
    alert(x = "Please Enter a grades "+ "A"+" "+"B"+" "+"C"+" "+"F" +" to know your Semester 1 Gpa" );
}

a=(x+y+z)/3;

document.getElementById("dem").innerHTML=a;

}