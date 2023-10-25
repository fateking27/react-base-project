import http from "../utils/http";

const goods = {
    addGoods: (data) => http.post('/goods/addGoods', data),
    findGoods: (data) => http.get('/goods/findGoods',data),
    delGoods: (data) => http.post('/goods/deleteGoods',data),
    updateGoods: (data) => http.post('/goods/updateGoods',data),
    findGoodsById: (data) => http.post('/goods/findGoodsById',data),
    searchGoods: (data) => http.post('/goods/findGoodsByName',data)
}

export default goods