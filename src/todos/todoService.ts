import { Todo } from "./todo";

export type TodoCreatiionParams = Pick<Todo, "title" | "description">;

export class TodoService {
  public get(todoId: string): Todo {
    return {
      id: todoId,
      title: "mocked todo",
      description: "mocked todo",
      done: false,
    };
  }

  public create(TodoCreatiionParams: TodoCreatiionParams): Todo {
    console.log("mock db call");
    return {
      id: "1",
      title: "mocked todo",
      description: "mocked todo",
      done: false,
    };
  }
}
