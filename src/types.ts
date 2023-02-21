export type ToDo = 
  TaskToDo | EventToDo | NoteToDo

type ToDoBase = {
  name: string;
  description?: string;
}

type TaskToDo = ToDoBase & {
  status: ToDoStatus;
  type: 'task';
}

type EventToDo = ToDoBase & {
  status: ToDoStatus;
  type: 'event';
}

type NoteToDo = ToDoBase & {
  status: ToDoStatus;
  type: 'note';
}

export type ToDoStatus =
  'completed' | 'canceled' | 'pending';
