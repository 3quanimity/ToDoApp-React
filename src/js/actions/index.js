import { ADD_TODO, DELETE_TODO } from "../constants/action-types";

export function addTodo(payload) {
  return { type: ADD_TODO, payload };
}

export function deleteTodo(id) {
  return { type: DELETE_TODO, id };
}
