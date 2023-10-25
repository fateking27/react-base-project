import React from 'react'
import { useRoutes } from "react-router-dom"
import routes from "./index"
function DynamicRouter() {
    //这个地方筛选出你最终路由
    const element = useRoutes(routes)
    return element
}
export default DynamicRouter