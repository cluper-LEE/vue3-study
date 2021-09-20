import { inject } from 'vue'

export const useFilter = () => {
  const today = inject('today')
  const fnSort = (a, b) => {
    const a_date = Date.parse(a.date)
    const b_date = Date.parse(b.date)
    if (a_date > b_date) return 1
    else if (a_date < b_date) return 0
    else return a.id - b.id
  }

  const getPendingTodos = (todos) => { // 시간 지났으나 완료되지 않은
    return todos.value.filter((todo) => todo.date < today && !todo.completed)
      .slice() // 복사하여 원본을 보존하기 위함
      .sort(fnSort)
  }

  const getActiveTodayTodos = (todos) => { // 오늘 완료되지 않은
    return todos.value
      .filter((todo) => todo.date == today && !todo.completed)
      .slice()
      .sort(fnSort)
  }

  const getCompletedTodayTodos = (todos) => { // 오늘 완료된
    return todos.value
      .filter((todo) => todo.date == today && todo.completed)
      .slice()
      .sort(fnSort)
  }

  const getAllTodayTodos = (todos) => { // 오늘 전부
    return getActiveTodayTodos(todos)
      .concat(getCompletedTodayTodos(todos))
      .slice()
      .sort(fnSort)
  }

  const getAllTodos = (todos) => {
    return todos.value.slice().sort(fnSort)
  }

  return {
    getPendingTodos,
    getActiveTodayTodos,
    getCompletedTodayTodos,
    getAllTodayTodos,
    getAllTodos
  }
}