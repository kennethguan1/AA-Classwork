export const allTodos = (state) => {
    let todoKeys = Object.keys(state.todos);
    return todoKeys.map((key) => state.todos[key]);
}
