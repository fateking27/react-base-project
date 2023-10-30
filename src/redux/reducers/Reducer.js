// 定义reducer修改函数
function Reducer(state = { count: 8 }, action) {
    // console.log(action);
    switch (action.type) {
        case "increment":
            state.count += action.payload
            return {...state}
        case "decrement":
            state.count -= action.payload
            return {...state}
        default:
            return state
    }
}
export default Reducer
