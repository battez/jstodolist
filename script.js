// Todo list: bit of practise with JS syntax.
// containing object for a todo list
let todoList = {
	todos: [
		{todoText:'item1', completed:false},
		{todoText:'itrm2', completed:false},
		{todoText:'item3', completed:false}
		],
	displayTodos: function () {
		if (this.todos.length > 0) {
			
			for(let i=0; i < this.todos.length; i++) {
				let isCompleted = (this.todos[i].completed) ? '(\u2713)' : '( )';
				console.log(isCompleted, this.todos[i].todoText);
			}
		}
		else {
			console.log('there are no todos in the list');
		}
		
	},
	toggleCompleted: function(position) {
		this.todos[position].completed = ! this.todos[position].completed;
		this.displayTodos();
	},
	toggleAll: function() {
		
		const COMPLETE = this.todos.filter( item => item.completed );
		if(COMPLETE.length !== this.todos.length) {
			// set all to true (completed) if any are incomplete
			this.todos.forEach( item => item.completed = true );
		} else {
			// since they are all completed we should set them to incomplete.
			this.todos.forEach( item => item.completed = false );
		}
		this.displayTodos();
		
	},
	addTodo: function(text) {
		this.todos.push(
			{
				todoText:text,
				completed: false
			});
		this.displayTodos();
	},
	changeTodo: function(position, text) {
		this.todos[position].todoText = text;
		this.displayTodos();
	},

	removeTodo: function(position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	}
};

