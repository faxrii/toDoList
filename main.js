let input=document.querySelector('.todoDiv input');
let addBtn=document.querySelector('.addBtn');
let deleteAll=document.querySelector('.dltAll');
let todoUl=document.querySelector('.todoUl');



addBtn.onclick=todoList

function todoList(){
    if(input.value!=''){
     let todoLi=document.createElement('li');
     todoUl.appendChild(todoLi);
     todoLi.className='todoItem'
     let todoItem=document.querySelectorAll('.todoItem')
     let deleteIco=document.createElement('i');
     deleteIco.className="fa-solid fa-xmark deletebtn";
    
     
     
    
     todoItem[todoItem.length-1].textContent=input.value
     todoItem[todoItem.length-1].appendChild(deleteIco)
     input.value=''
     let deleteBtn=document.querySelectorAll('.deletebtn')
     for(let i=0;i<deleteBtn.length;i++){
         deleteBtn[i].onclick=function(){
           todoUl.removeChild(todoItem[i])
         }
     }
     deleteAll.onclick=function(){
     for(let i=0;i<todoItem.length;i++){
        if(todoUl.childElementCount!=0){
            for(let i=0; i<todoItem.length;i++){
                todoItem[i].remove()
            }
        }
        }
     }
    
 }
}
 
