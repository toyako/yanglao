//function addfav(url,title){
////	javascript:window.external.AddFavorite(document.location.href,document.title)
//url=document.location.href;
//title=document.title;
//	if(document.all){
//		window.external.AddFavorite(url,title);
//	}else if(window.sidebar){
//		window.sidebar.addPanel(title,url);
//	}
//	console.log(document.location.href,document.title)
//}
//function addfav(){
//	if(document.all){
//		window.external.AddFavorite(document.location.href,document.title);
//	}else if(window.sidebar){
//		window.sidebar.addPanel(document.title，document.location.href);
//	}
function addfav() {
	if(document.all) {
		window.external.AddFavorite('123.com', '123');
	} else if(window.sidebar) {
		window.sidebar.addPanel('123', '123.com')
	}
	console.log(123)
}
var ig = document.querySelector(".market ul li ul li img");
var bod = document.querySelector(".asx");
//ig.width=bod.width;

var imglist = [{
		src: "../img/1.jpg"
	},
	{
		src: "../img/2.jpg"
	},
	{
		src: "../img/3.jpg"
	},
	{
		src: "../img/4.jpg"
	},
	{
		src: "../img/5.jpg"
	},
]
var lunbo_warp = $(".lunbo_wrap");
var parentWidth = lunbo_warp.parent().width();
var height = parentWidth * 200 / 520 + 48;
lunbo_warp.css("height", height + 'px');
var pic_box = $(".pic_box");
var pannel = $(".pannel");
var left_arrow = $("#left_arrow");
var right_arrow = $("#right_arrow");
var pic_number = $(".pic_box li").length;
var width = parentWidth;
cur_index = 0;
last_index = 0;
points = [];
for(var i = 0; i < pic_number; i++) {
	var cssClass = "";
	if(i == 0) {
		cssClass = "active"
	}
	var li = $("<li index='" + i + "' class '" + cssClass + "'></li>");
	pannel.append(li);
	points.push(li);
}
$(".pic_box li img").css("width", width);
left_arrow.on("click", function() {
	left();
})
right_arrow.on("click", function() {
	right()
})

function left() {
	cur_index--;
	if(cur_index < 0) {
		cur_index = pic_number - 1;
	}
	scroll();
}

function right() {
	cur_index++;
	if(cur_index > pic_number - 1) {
		cur_index = 0;
	}
	scroll();
}

function scroll() {
	if(cur_index == 0 && last_index == pic_number - 1) {
		var cloneDom = pic_box.find(":first").clone();
		cloneDom.appendTo(pic_box);
		pic_box.css("transform", "translateX(-" + pic_number * width + "px)");
		pic_box.on("webkitTransitionEnd", function() {
			pic_box.css("transition", "none");
			pic_box.css("transform", "translateX(-" + cur_index * width + "px)");
			cloneDom.remove();
			window.getComputedStyle(pic_box[0]).width;
			pic_box.css("transition", "all 500ms ease-in");
		})
	} else if(cur_index == pic_number - 1 && last_index == 0) {
		var cloneDome = pic_box.find(">:last").clone();
		cloneDom.prependTo(pic_box);
		pic_box.css("transition", "none");
		pic_box.css("transform", "translateX(-" + width + "px)");
		window.getComputedStyle(pic_box[0]).width;
		pic_box.css("transition", "all 500ms ease-in");
		pic_box.css("transform", "translateX(0px)");
		pic_box.one("webkitTransitionEnd", function() {
			cloneDom.remove();
			pic_box.css("transition", "none");
			pic_box.css("transition", "translateX(-" + (pic_number - 1) * width + "px)");
			window.getComputedStyle(pic_box[0]).width;
			pic_box.css("transition", "all 500ms ease-in");
		})
	} else {
		pic_box.css("transform", "translateX(-" + cur_index * width + "px)");

	}
	points[last_index].removeClass("active");
	points[cur_index].addClass("active");
	last_index = cur_index;
}
var t = setInterval(right, 3000);
lunbo_warp.on("mousemove", function() {
	clearInterval(t);
})
lunbo_warp.on("mouseout", function() {
	t = setInterval(right, 3000);
})
$(".pannel li").on("click", function() {
	cur_index = $(this).index();
	scroll();
});


var pub = $(".public ul li")[2];
var putrend = $(".pu_trends")[0];
console.log(pul)
var pul = $(".pu_login")[0];
$(pub).on("mousemove",function(){
	pul.style.display="block";
	putrend.style.display="none";
});