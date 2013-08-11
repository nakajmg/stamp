// module for ng-app
var sr = angular.module('stamprally', []);

// define routing - view - controller
sr.config(function($routeProvider){
	$routeProvider.
		when("/", {
			templateUrl: "./views/memberList.html",
			controller: "MemberListCtrl"
		}).
		when("/info/:link/", {
			templateUrl: "./views/memberInfo.html",
			controller: "MemberInfoCtrl"
		}).
		otherwise({ redirectTo: "/" });
});

sr.value('experts', {
	"memberList": [
		{ "No":  1, "name": "白石 俊平", "link": "shumpei-shiraishi" },
		{ "No":  2, "name": "小松 健作", "link": "komasshu" },
		{ "No":  3, "name": "吉川 徹", "link": "yoshikawa_t" },
		{ "No":  4, "name": "轟 啓介", "link": "keisuke322" },
		{ "No":  5, "name": "あんどう やすし", "link": "technohippy" },
		{ "No":  6, "name": "羽田野 太巳", "link": "futomi" },
		{ "No":  7, "name": "大津 繁樹", "link": "jovi0608" },
		{ "No":  8, "name": "辻 正浩", "link": "tsuj" },
		{ "No":  9, "name": "小山田 晃浩", "link": "yomotsu" },
		{ "No": 10, "name": "斉藤 祐也", "link": "cssradar" },
		{ "No": 11, "name": "村岡 正和", "link": "bathtimefish" },
		{ "No": 12, "name": "外村 和仁", "link": "hokaccha" },
		{ "No": 13, "name": "紀平 拓男", "link": "tkihira" },
		{ "No": 14, "name": "春日井 良隆", "link": "ykasugai" },
		{ "No": 15, "name": "物江 修", "link": "osamum_ms" },
		{ "No": 16, "name": "秋葉 秀樹", "link": "hidetaro7" },
		{ "No": 17, "name": "城戸 総史", "link": "sou" },
		{ "No": 18, "name": "矢倉 眞隆", "link": "myakura" },
		{ "No": 19, "name": "浅井 智也", "link": "dynamitter" },
		{ "No": 20, "name": "こもり まさあき", "link": "cipher" },
		{ "No": 21, "name": "Andy Hall", "link": "fenomas" },
		{ "No": 23, "name": "高橋 登史朗", "link": "toshirot" },
		{ "No": 24, "name": "鷹野 雅弘", "link": "swwwitch" },
		{ "No": 25, "name": "清水 俊博", "link": "meso" },
		{ "No": 26, "name": "古籏 一浩", "link": "openspc" },
		{ "No": 28, "name": "吾郷 協", "link": "kyo_ago" },
		{ "No": 29, "name": "浅野 紀予", "link": "noriyo" },
		{ "No": 30, "name": "Tomomi Imura", "link": "girlie_mac" },
		{ "No": 31, "name": "Daniel Davis", "link": "ourmaninjapa" },
		{ "No": 32, "name": "えーじ", "link": "agektmr" },
		{ "No": 33, "name": "Jxck", "link": "jxck_" },
		{ "No": 34, "name": "石本 光司", "link": "t32k" },
		{ "No": 35, "name": "池田 泰延", "link": "clockmaker" },
		{ "No": 36, "name": "たにぐち まこと", "link": "seltzer" },
		{ "No": 37, "name": "長谷川恭久", "link": "yhassy" },
		{ "No": 38, "name": "田中 正裕", "link": "masahiro" },
		{ "No": 39, "name": "久保田 光則", "link": "anatoo" },
		{ "No": 40, "name": "木達 一仁", "link": "kazuhito" },
		{ "No": 43, "name": "増井 雄一郎", "link": "masuidrive" },
		{ "No": 44, "name": "上村 光星", "link": "kosei27" },
		{ "No": 45, "name": "比留間 和也", "link": "edo_m18"}
	]
});

// for memberlist.html
sr.controller('MemberListCtrl', function($scope, experts){
	$scope.experts = experts.memberList;
});

// for memberinfo.html
sr.controller('MemberInfoCtrl', function($scope, $routeParams, experts){
	var member = {}, link = $routeParams.link;
	
	for(var i = 0, len = experts.memberList.length; i < len; i++){
		if(link === experts.memberList[i].link){
			member = experts.memberList[i];
			break;
		}
	}

	$scope.member = member;
});
