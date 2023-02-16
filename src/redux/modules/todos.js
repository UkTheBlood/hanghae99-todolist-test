// Action value
const ADD_TODO = "ADD_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

// Action Creator
// Todo를 추가하는 action creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

// Todo를 지우는 action creator
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

// Todo를 isDone를 변경하는 action creator
export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  };
};

// 상세 페이지에서 특정 Todo만 조회하는 action creator
export const getTodoByID = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload,
  };
};


const initialtodo = [
  { id: 1, title: "리액트", desc: "리액트 기초 공부", done: false },
  { id: 2, title: "스프링", desc: "스프링 기초 공부", done: false },
  { id: 3, title: "노드", desc: "끝났다", done: true },
]

// initial state
const initialState = {
  initialtodo: initialtodo
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        initialtodo: [...state.initialtodo, action.payload],
      };

    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        initialtodo: state.initialtodo.map((x) => {
          if (x.id === action.payload) {
            return {
              ...x,
              done: !x.done,
            };
          } else {
            return x;
          }
        }),
      };

    case DELETE_TODO:
      return {
        ...state,
        initialtodo: action.payload
      }

    case GET_TODO_BY_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };
    default:
      return state;
  }
};

export default todos;
