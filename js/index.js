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
	le();
})
right_arrow.on("click", function() {
	rit()
})

function le() {
	cur_index--;
	if(cur_index < 0) {
		cur_index = pic_number - 1;
	}
	scroll();
}

function rit() {
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
var t = setInterval(rit, 3000);
lunbo_warp.on("mousemove", function() {
	clearInterval(t);
})
lunbo_warp.on("mouseout", function() {
	t = setInterval(rit, 3000);
})
$(".pannel li").on("click", function() {
	cur_index = $(this).index();
	scroll();
});


var puc = $(".public ul li")[2];
var pua = $(".public ul li")[0];
var putrend = $(".pu_trends")[0];
console.log(puc)
var pul = $(".pu_login")[0];
$(puc).on("mousemove",function(){
	pul.style.display="block";
	putrend.style.display="none";
});
$(pua).on("mousemove",function(){
	pul.style.display="none";
	putrend.style.display="block";
});


//var lunbo_bann = $(".lunbo_bann");
//var parentwd = lunbo_bann.parent().width();
//var het = parentwd * 200 / 520 + 48;
//lunbo_bann.css("height", het + 'px');
//var pc_box = $(".pc_box");
//var panl = $(".panl");
//var le_arrow = $(".le_arrow");
//var ri_arrow = $(".ri_arrow");
//var pc_number = $(".pc_box li").length;
//var wd = parentwd;
//c_index = 0;
//ls_index = 0;
//pos = [];
//
//for(var i = 0; i < pc_number; i++) {
//	var cssClass = "";
//	if(i == 0) {
//		cssClass = "active"
//	}
//	var li = $("<li index='" + i + "' class '" + cssClass + "'></li>");
//	panl.append(li);
//	pos.push(li);
//}
//$(".pc_box li img").css("width", wd);
//le_arrow.on("click", function() {
//	left();
//})
//ri_arrow.on("click", function() {
//	right()
//})
//
//function left() {
//	c_index--;
//	if(c_index < 0) {
//		c_index = pc_number - 1;
//	}
//	scrol();
//}
//
//function right() {
//	c_index++;
//	if(c_index > pc_number - 1) {
//		c_index = 0;
//	}
//	scrol();
//}
//
//function scrol() {
//	if(c_index == 0 && ls_index == pc_number - 1) {
//		var cloneDom = pc_box.find(":first").clone();
//		cloneDom.appendTo(pc_box);
//		pc_box.css("transform", "translateX(-" + pc_number * wd + "px)");
//		pc_box.on("webkitTransitionEnd", function() {
//			pc_box.css("transition", "none");
//			pc_box.css("transform", "translateX(-" + c_index * wd + "px)");
//			cloneDom.remove();
//			window.getComputedStyle(pc_box[0]).width;
//			pc_box.css("transition", "all 500ms ease-in");
//		})
//	} else if(c_index == pc_number - 1 && ls_index == 0) {
//		var cloneDome = pc_box.find(">:last").clone();
//		cloneDom.prependTo(pc_box);
//		pc_box.css("transition", "none");
//		pc_box.css("transform", "translateX(-" + wd + "px)");
//		window.getComputedStyle(pc_box[0]).width;
//		pc_box.css("transition", "all 500ms ease-in");
//		pc_box.css("transform", "translateX(0px)");
//		pc_box.one("webkitTransitionEnd", function() {
//			cloneDom.remove();
//			pc_box.css("transition", "none");
//			pc_box.css("transition", "translateX(-" + (pc_number - 1) * wd + "px)");
//			window.getComputedStyle(pic_box[0]).width;
//			pc_box.css("transition", "all 500ms ease-in");
//		})
//	} else {
//		pc_box.css("transform", "translateX(-" + c_index * wd + "px)");
//
//	}
//	pos[ls_index].removeClass("active");
//	pos[c_index].addClass("active");
//	ls_index = c_index;
//}
//var s = setInterval(right, 3000);
//lunbo_bann.on("mousemove", function() {
//	clearInterval(s);
//})
//lunbo_bann.on("mouseout", function() {
//	s = setInterval(right, 3000);
//})
//$(".panl li").on("click", function() {
//	c_index = $(this).index();
//	scrol();
//});

//
//var xml=new XMLHttpRequest();
//xml.open("GET","index.html", true);
//xml.send();
//xml.onreadystatechange = function() {
//if (xml.readyState == 4 && xml.status == 200) {
//
//}
//};
//var dino = $(".pu_login");
//var p_tren = $(".pu_trends");
//var ind = $(".public ul li")[2];
//console.log(ind)
//ind[0].add("touchmove",function(){
//	p_tren.css("display","none");
//	dino.css("display","block");
//	console.log(123)
//})

