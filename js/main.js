 

var input = document.querySelectorAll(' input');
var tasksentered = document.querySelectorAll('.tasksentered');
var button = document.querySelectorAll('.add');
var paragraph = document.querySelectorAll(' paragraph');


function inner_task(value,parent_section){
    var element = document.createElement('p');
    var elemt_value = document.createTextNode(value);
    element.append(elemt_value);
    parent_section.append(element);
}

button[0].addEventListener('click',function(){

    inner_task(input[0].value, tasksentered[0]);
 

})



