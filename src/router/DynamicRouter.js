import React from 'react'
import { useRoutes } from "react-router-dom"
import routes from "./index"
function DynamicRouter() {
    //筛选出最终路由(暂未)

    const element = useRoutes(routes)
    return element
}
export default DynamicRouter