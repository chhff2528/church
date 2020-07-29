import request from "@utils/request";

/**
 * 首页
 * @returns {*}
 */
export function getHomeData() {
  return request.get("/receiever.php", {});
}
// 日常借口
export function getData(params) {
  return request.get("/receiever.php", params);
}

/**
 * 注册请求接口---教会
 * @returns {*}
 */
export function getArticleBanner() {
  return request.get("/article/banner/list", {});
}

/**
 * 文章分类列表
 * @returns {*}
 */
export function getArticleCategory() {
  return request.get("/article/category/list", {});
}

/**
 * 文章 热门列表
 * @returns {*}
 */
export function getArticleHotList() {
  return request.get("/article/hot/list", {});
}

/**
 * 文章列表
 * @returns {*}
 */
export function getArticleList(q, cid) {
  return request.get("/article/list/" + cid, q);
}


/**
 * 文章详情
 * @returns {*}
 */
export function getArticleDetails(id) {
  return request.get("/article/details/" + id, {});
}


