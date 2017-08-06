class Task {
  done: boolean = false;

  constructor(public description: string, public priority: string){};

  markDone() {
    this.done = true;
  }
}

var tasks: Task[] = [];
tasks.push(new Task('Do the dishes', 'medium'));
tasks.push(new Task('Buy chocolate', 'low'));
tasks.push(new Task('Do laundry', 'high'));

tasks[0].markDone();

for(var task of tasks) {
  console.log(task);
}

// console.log(tasks);
