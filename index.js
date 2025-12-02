let todos = ['first todo', 'second todo', 'third todo'];
          function markAsDone(todos) {
            return   "done -" + todos[0];      
          };

document.getElementById('result').innerHTML = markAsDone(todos);

