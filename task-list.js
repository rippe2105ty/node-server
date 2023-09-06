const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [];

function showTasks() {
  if (tasks.length === 0) {
    console.log('La lista de tareas está vacía.');
  } else {
    console.log('Lista de tareas:');
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. [${task.completed ? 'X' : ' '}] ${task.description}`);
    });
  }
  menu();
}

function addTask(description) {
  tasks.push({ description, completed: false });
  console.log('Tarea agregada.');
  menu();
}

function removeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    console.log('Tarea eliminada.');
  } else {
    console.log('Índice de tarea no válido.');
  }
  menu();
}

function completeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
    console.log('Tarea marcada como completada.');
  } else {
    console.log('Índice de tarea no válido.');
  }
  menu();
}

function menu() {
  console.log('\nOpciones:');
  console.log('1. Mostrar lista de tareas');
  console.log('2. Agregar tarea');
  console.log('3. Eliminar tarea');
  console.log('4. Marcar tarea como completada');
  console.log('5. Salir');

  rl.question('Seleccione una opción: ', (option) => {
    switch (option) {
      case '1':
        showTasks();
        break;
      case '2':
        rl.question('Ingrese la descripción de la tarea: ', (description) => {
          addTask(description);
        });
        break;
      case '3':
        rl.question('Ingrese el índice de la tarea a eliminar: ', (index) => {
          removeTask(parseInt(index) - 1);
        });
        break;
      case '4':
        rl.question('Ingrese el índice de la tarea a marcar como completada: ', (index) => {
          completeTask(parseInt(index) - 1);
        });
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Opción no válida.');
        menu();
        break;
    }
  });
}

menu();
