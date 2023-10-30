//定义reducer修改函数
function Reducer2(state = { count: 10, user: "user" }, action) {
  //   console.log(action);
  switch (action.type) {
    case "increment_":
      state.count += action.payload;
      return { ...state };
    case "decrement_":
      state = {
        ...state,
        coun2: (state.count += action.payload),
        user: action.payload,
      };
      return { ...state };
    default:
      return state;
  }
}

export default Reducer2;
