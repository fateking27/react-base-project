import { Navigate } from "react-router-dom"
import { message } from "antd";
/**
 * RouterAuth也是一个组件
 * @param {} param0 
 * @returns 
 */
function RouterAuth({ children }) {
    //获取本地token
    const token = localStorage.token
    // const token = localStorage.getItem("token");
    if (token) {
        return <>{children}</>
    } else {
        message.warning('请先登录')
        return <Navigate to="/login"></Navigate>
    }
}
export default RouterAuth