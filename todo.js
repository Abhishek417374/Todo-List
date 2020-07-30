const todoinput=document.querySelector('.todo-input');
const todobutton=document.querySelector('.todo-btn');
const todolist=document.querySelector('.todo-list');
todobutton.addEventListener("click" , checking);

function checking(){
    const tododiv=document.createElement("div");
    tododiv.classList.add('todo');

    const newtodo=document.createElement('li');
    newtodo.classList.add('todo-item');
   newtodo.innerText='abhishek';
    tododiv.appendChild(newtodo);
         
    const checkbutton=document.createElement('button');
    checkbutton.classList.add('check-button');
   tododiv.appendChild(checkbutton);
   checkbutton.innerHTML='<i class="fas fa-check"></i>';

   const deletebutton=document.createElement('button');
   deletebutton.classList.add('delete-button');
   tododiv.appendChild(deletebutton);
   deletebutton.innerHTML='<i class="fas fa-trash"></i>';

    todolist.appendChild(tododiv);
}




