var result= document.getElementById("result");
function display(number){
 result.value += number;
//  console.log(result);
}
function claculate(){
    var final_num= result.value; 
    var final_result= eval(final_num);
    result.value= final_result; 
}
function clrs(){
    result.value=""; 
}
function del(){
    result.value= result.value.slice(0,-1);
}