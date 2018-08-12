
/* global $ */
$(document).ready(function(){
  $.getJSON("/api/todo")
  .then(addTodos)

  $('#todoInput').keypress(function(event){
    if(event.which == 13) {
      createTodo();
    }
  });
  //
  // $('.list').on('click', 'li', function(){
  //   updateTodo($(this));
  // })
  //
  // $('.list').on('click', 'span', function(e){
  //   e.stopPropagation();
  //   removeTodo($(this).parent());
  // })
});

function addTodos(todos){
  todos.forEach(function(todo){
    addTodo(todo);
});
}

function addTodo(todo){
  var newTodo = $('<li class="task">'+ todo.name + '</li>');
  if(todo.completed){
  newTodo.addClass("done");
  }
  $('.list').append(newTodo);
}
function createTodo(){
var usrInput = $('#todoInput').val();
$.post('api/todo',{name:usrInput})
.then(function(newTodo){
$('#todoInput').val('');
addTodo(newTodo);
}).catch(function(err){
console.log(err
)
})
}
