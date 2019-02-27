var API_PREFIX = "http://api.lanyintao.com/Home/movieList/apiVueList/";
var BASE_PREFIX = "http://api.lanyintao.com";

export default {
	COMMON_API:API_PREFIX,
	LATEST_FEED:API_PREFIX + "type/1/page/1",
	MAINLAND_FEED:API_PREFIX + "type/2/page/1",
	US_FEED:API_PREFIX + "type/3/page/1",
	KOREA:API_PREFIX + "type/4/page/1",
	SOURTH:API_PREFIX + "type/5/page/1",
	GUESS:BASE_PREFIX +"/Home/movieList/apiVueGuess",
	RANK:BASE_PREFIX +"/Home/movieList/apiVueRankList",
	FOCUS:BASE_PREFIX +"/Home/movieList/apiFocusVueList",
	SEARCH:BASE_PREFIX +"/Home/movieList/apiSearchList",
	CHECK_LOGIN:BASE_PREFIX +"/Home/Header/apiCheckLogin",
	LOGOUT:BASE_PREFIX+"/Home/Header/apiLogout",
	LOGIN:BASE_PREFIX+"/Home/Login/apiLogin",
	VERIFYCODE:BASE_PREFIX+"/Home/Login/apiVerify",
	REGISTER:BASE_PREFIX+"/Home/login/apiRegister",
	FORGET:BASE_PREFIX+"/Home/login/apiForget",
	COMMENT_RANK:BASE_PREFIX+"/Home/movieList/apiHotComment",
	GETMOVIE:BASE_PREFIX+"/Home/movieList/apiDetail",
	MOVIE_COMMENT:BASE_PREFIX+"/Home/movieList/apiMovieComment",
	POST_SCORE:BASE_PREFIX+"/Home/movieList/apiPostScore",
	GET_USER:BASE_PREFIX+"/Home/user/apiUserInfo",
	POST_COMMENT:BASE_PREFIX+"/Home/user/apiUserComment",
	MOVIE_SCORE:BASE_PREFIX+"/Home/movieList/apiMovieScore",
	MOVIE_LOCATION_POS:BASE_PREFIX+"/Home/movieList/apiGetPos",
};
