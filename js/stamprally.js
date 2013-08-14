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
		{ "No":  1, "name": "白石 俊平", "link": "shumpei-shiraishi", "icon": "./img/1.png","color": "#f04a31" },
		{ "No":  2, "name": "小松 健作", "link": "komasshu", "icon": "./img/2.jpg","color": "#42bd7b" },
		{ "No":  3, "name": "吉川 徹", "link": "yoshikawa_t", "icon": "./img/3.jpg","color": "#bd2121" },
		{ "No":  4, "name": "轟 啓介", "link": "keisuke322", "icon": "./img/4.jpeg","color": "#00ad63" },
		{ "No":  5, "name": "あんどう やすし", "link": "technohippy", "icon": "./img/5.jpg","color": "#00bd9c" },
		{ "No":  6, "name": "羽田野 太巳", "link": "futomi", "icon": "./img/6.jpg","color": "#9c5ab5" },
		{ "No":  7, "name": "大津 繁樹", "link": "jovi0608", "icon": "./img/7.jpg","color": "#5a6b7b" },
		{ "No":  8, "name": "辻 正浩", "link": "tsuj", "icon": "./img/8.jpg","color": "#de5100" },
		{ "No":  9, "name": "小山田 晃浩", "link": "yomotsu", "icon": "./img/9.png","color": "#d66352" },
		{ "No": 10, "name": "斉藤 祐也", "link": "cssradar", "icon": "./img/10.jpg","color": "#009cde" },
		{ "No": 11, "name": "村岡 正和", "link": "bathtimefish", "icon": "./img/11.jpg","color": "#29ceb4" },
		{ "No": 12, "name": "外村 和仁", "link": "hokaccha", "icon": "./img/12.jpeg","color": "#314a5a" },
		{ "No": 13, "name": "紀平 拓男", "link": "tkihira", "icon": "./img/13.jpg","color": "#ffad39" },
		{ "No": 14, "name": "春日井 良隆", "link": "ykasugai", "icon": "./img/14.png","color": "#c63921" },
		{ "No": 15, "name": "物江 修", "link": "osamum_ms", "icon": "./img/15.jpg","color": "#ef7b0f" },
		{ "No": 16, "name": "秋葉 秀樹", "link": "hidetaro7", "icon": "./img/16.jpg","color": "#b57bc6" },
		{ "No": 17, "name": "城戸 総史", "link": "sou", "icon": "./img/17.jpg","color": "#f76b5a" },
		{ "No": 18, "name": "矢倉 眞隆", "link": "myakura", "icon": "./img/18.jpg","color": "#5a6b7b" },
		{ "No": 19, "name": "浅井 智也", "link": "dynamitter", "icon": "./img/19.jpg","color": "#00bd9c" },
		{ "No": 20, "name": "こもり まさあき", "link": "cipher", "icon": "./img/20.jpg","color": "#00c066" },
		{ "No": 21, "name": "Andy Hall", "link": "fenomas", "icon": "./img/21.jpeg","color": "#4aade7" },
		{ "No": 23, "name": "高橋 登史朗", "link": "toshirot", "icon": "./img/22.gif","color": "#de5100" },
		{ "No": 24, "name": "鷹野 雅弘", "link": "swwwitch", "icon": "./img/24.jpeg","color": "#ff9c00" },
		{ "No": 25, "name": "清水 俊博", "link": "meso", "icon": "./img/25.jpg","color": "#88bf7e" },
		{ "No": 26, "name": "古籏 一浩", "link": "openspc", "icon": "./img/26.jpg","color": "#ffce31" },
		{ "No": 28, "name": "吾郷 協", "link": "kyo_ago", "icon": "./img/28.jpg","color": "#0084bd" },
		{ "No": 29, "name": "浅野 紀予", "link": "noriyo", "icon": "./img/29.jpg","color": "#c62153" },
		{ "No": 30, "name": "Tomomi Imura", "link": "girlie_mac", "icon": "./img/30.jpeg","color": "#00bd9c" },
		{ "No": 31, "name": "Daniel Davis", "link": "ourmaninjapa", "icon": "./img/31.jpg","color": "#f7944a" },
		{ "No": 32, "name": "えーじ", "link": "agektmr", "icon": "./img/32.jpeg","color": "#695842" },
		{ "No": 33, "name": "Jxck", "link": "jxck_", "icon": "./img/33.png","color": "#009c85" },
		{ "No": 34, "name": "石本 光司", "link": "t32k", "icon": "./img/34.jpg","color": "#ff9c00" },
		{ "No": 35, "name": "池田 泰延", "link": "clockmaker", "icon": "./img/35.png","color": "#42d68c" },
		{ "No": 36, "name": "たにぐち まこと", "link": "seltzer", "icon": "./img/36.jpeg","color": "#68b7d1" },
		{ "No": 37, "name": "長谷川恭久", "link": "yhassy", "icon": "./img/37.jpg","color": "#314a5a" },
		{ "No": 38, "name": "田中 正裕", "link": "masahiro", "icon": "./img/38.jpg","color": "#429cce" },
		{ "No": 39, "name": "久保田 光則", "link": "anatoo", "icon": "./img/39.jpg","color": "#807666" },
		{ "No": 40, "name": "木達 一仁", "link": "kazuhito", "icon": "./img/40.jpg","color": "#bd5a7b" },
		{ "No": 43, "name": "増井 雄一郎", "link": "masuidrive", "icon": "./img/43.jpeg","color": "#bd2121" },
		{ "No": 44, "name": "上村 光星", "link": "kosei27", "icon": "./img/44.jpg","color": "#de9c63" },
		{ "No": 45, "name": "比留間 和也", "link": "edo_m18", "icon": "./img/45.jpg","color": "#ffad39"}
	]
});

// for memberlist.html
sr.controller('MemberListCtrl', function($scope, experts){

	var member_list = experts.memberList;

	for(var i = 0, len = member_list.length; i < len; i++){
		var exp = member_list[i];

		if(window.localStorage.getItem(exp.link) !== null){
			exp.stamped = true;
		} else {
			exp.stamped = false;
		}
	}

	$scope.experts = member_list;
	
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

	function pushStamp(){
		var def = $.Deferred();
		$('.stamp').remove();
		var $stamp = $('<div class="stamp anime-stamp">').one('webkitAnimationEnd',function(){
			$(this).removeClass('anime-stamp');
			$stamparea.addClass('anime-stampend').one('webkitAnimationEnd',function(){
				setTimeout(function(){
					$stamparea.removeClass('anime-stampend');
				},500);
				def.resolve();
			});
		});
		$stamparea.append($stamp);

		return def.promise();
	};

	var $stamparea = $('#info-stamparea');
	var storage_key = member.link;
	var storage_value = window.localStorage.getItem(storage_key);

	if(storage_value !== null){
		$stamparea.append('<div class="stamp">');
	}else{
		$stamparea.on('click',function(){
			var result = window.prompt('Expertコードを入力して下さい');
			pushStamp().then(function(){
				window.localStorage.setItem(storage_key,'{ stamped:true}');
			});
		});
	}

});
