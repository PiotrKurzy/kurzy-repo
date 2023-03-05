let tasks = [{ done: true }, { done: false }, { done: true }];

const checkTasks = tasks.map(function (task) {
  if (task.done === true) return `true`;

  return `false`;
});
const checkTasks2 = tasks.every((task) => task.done === true);

console.log(checkTasks);
console.log(`Czy mamy powodzenie ? `, checkTasks2);
