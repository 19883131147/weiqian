// 定义请求方式
export const Method = {
  GET: "get",
  POST: "post"
}

export const PATH = {

  // 登录接口：
  LOGIN: '/manage/user/login.do',

  // 商品管理：
  SHOPP: '/manage/product/list.do',

  // 查询
  SEARCH: '/manage/product/search.do',

  // 品类管理
  OTHER: '/manage/category/get_category.do',

  // 订单管理
  ORDER: 'manage/order/list.do',
  // 上架商品
  shangjia:"/manage/product/set_sale_status.do",
  setShop: '/manage/product/save.do',//修改商品
  imgs: '/manage/product/upload.do',//上传图片
  detail: '/manage/product/detail.do',//商品详情
  category: '/manage/category/get_category.do',//品级分类
  setCategory: '/manage/category/set_category_name.do',//修改品类
  addCategory: '/manage/category/add_category.do',//添加品类
  order_search: '/manage/order/search.do',//订单搜索
  order_detail: '/manage/order/detail.do',//订单详情
}
