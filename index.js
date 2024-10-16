// run `node index.js` in the terminal

// console.log(`Hello Node.js v${process.versions.node}!`);
const fs = require('fs');
const filepath = './tasks.json';

const command = process.argv[2];
const argument = process.argv[3];

const loadTask = () => {
  try {
    const dataBuffer = fs.readFileSync(filepath);
    const dataJSON = dataBuffer.toString() || '[]';
    return JSON.parse(dataJSON);
  } catch (ex) {
    console.log(`load task error: ${ex}`, ex);
    return [];
  }
};
//save tasks
const saveTask = (tasks) => {
  const dataJson = JSON.stringify(tasks);
  fs.writeFileSync(filepath, dataJson);
};

//add new todo
const addTask = (todo) => {
  const tasks = loadTask();
  tasks.push({ todo });
  saveTask(tasks);
  console.log(`task added `);
};

//remove todo
const removeTask = (todo) => {
  const tasks = loadTask();
  tasks.console.log(tasks, 'remove :', todo);
};

//list of todos
const listTasks = () => console.log(loadTask());

if (command == 'add') {
  addTask(argument);
} else if (command == 'list') {
  listTasks();
} else if (command == 'remove') {
  removeTask(argument);
} else {
  console.log('command not found !!');
}
