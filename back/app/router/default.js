module.exports = app =>{
    const {router,controller} = app
    router.get('/default/index',controller.default.home.index)
    router.get('/default/fuck',controller.default.home.type)
    router.get('/default/article',controller.default.home.article)
    router.get('/default/getArticleList',controller.default.home.getArticleList)
    router.get('/default/getTypeInfo',controller.default.home.getTypeInfo)
    router.get('/default/getArticleById/:id',controller.default.home.getArticleById)
    router.get('/default/getListById',controller.default.home.getListById)
}