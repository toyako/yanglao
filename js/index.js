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

var pulist = $(".public li")
var dlist = $(".tb_ri >div");
//for(var i = 0; i < dlist.length; i++) {
//	$(pulist[i]).on("mousemove", function() {
//		dlist[i].Style().display = "none";
//		pulist=dlist[i].style.display = "block"
//	console.log(dlist[i])
//	})
//}
$(pulist[2]).on("mousemove", function() {
	dlist[0].style.display = "none";
	dlist[1].style.display = "none";
	dlist[2].style.display = "block";
});
$(pulist[1]).on("mousemove", function() {
	dlist[0].style.display = "none";
	dlist[1].style.display = "block";
	dlist[2].style.display = "none";

});
$(pulist[0]).on("mousemove", function() {
	dlist[0].style.display = "block";
	dlist[1].style.display = "none";
	dlist[2].style.display = "none";
});

var lunbo_bann = $(".lunbo_bann");
var parentwd = lunbo_bann.parent().width();
var het = parentwd * 200 / 520 + 48;
lunbo_bann.css("height", het + 'px');
var pc_box = $(".pc_box");
var panl = $(".panl");
var le_arrow = $(".le_arrow");
var ri_arrow = $(".ri_arrow");
var pc_number = $(".pc_box li").length;
var wd = parentwd;
c_index = 0;
ls_index = 0;
pos = [];

for(var i = 0; i < pc_number; i++) {
	var cssClass = "";
	if(i == 0) {
		cssClass = "active"
	}
	var li = $("<li index='" + i + "' class '" + cssClass + "'></li>");
	panl.append(li);
	pos.push(li);
}
$(".pc_box li img").css("width", wd);
le_arrow.on("click", function() {
	left();
})
ri_arrow.on("click", function() {
	right()
})

function left() {
	c_index--;
	if(c_index < 0) {
		c_index = pc_number - 1;
	}
	scroll();
}

function right() {
	c_index++;
	if(c_index > pc_number - 1) {
		c_index = 0;
	}
	scroll();
}

function scrol() {
	if(c_index == 0 && ls_index == pc_number - 1) {
		var cloneDom = pc_box.find(":first").clone();
		cloneDom.appendTo(pc_box);
		pc_box.css("transform", "translateX(-" + pc_number * wd + "px)");
		pc_box.on("webkitTransitionEnd", function() {
			pc_box.css("transition", "none");
			pc_box.css("transform", "translateX(-" + c_index * wd + "px)");
			cloneDom.remove();
			window.getComputedStyle(pc_box[0]).width;
			pc_box.css("transition", "all 500ms ease-in");
		})
	} else if(c_index == pc_number - 1 && ls_index == 0) {
		var cloneDome = pc_box.find(">:last").clone();
		cloneDom.prependTo(pc_box);
		pc_box.css("transition", "none");
		pc_box.css("transform", "translateX(-" + wd + "px)");
		window.getComputedStyle(pc_box[0]).width;
		pc_box.css("transition", "all 500ms ease-in");
		pc_box.css("transform", "translateX(0px)");
		pc_box.one("webkitTransitionEnd", function() {
			cloneDom.remove();
			pc_box.css("transition", "none");
			pc_box.css("transition", "translateX(-" + (pc_number - 1) * wd + "px)");
			window.getComputedStyle(pic_box[0]).width;
			pc_box.css("transition", "all 500ms ease-in");
		})
	} else {
		pc_box.css("transform", "translateX(-" + c_index * wd + "px)");

	}
	pos[ls_index].removeClass("active");
	pos[c_index].addClass("active");
	ls_index = c_index;
}
var s = setInterval(right, 3000);
lunbo_bann.on("mousemove", function() {
	clearInterval(s);
})
lunbo_bann.on("mouseout", function() {
	s = setInterval(right, 3000);
})
$(".panl li").on("click", function() {
	c_index = $(this).index();
	scrol();
});

var data = [{
		src: "//i0.hdslb.com/bfs/archive/3ea09590468d179baaf7d3d48d309159a75d1f4e.jpg_320x200.jpg",
		name: "疯粤crazecanton",
		make: "通过购物赚取养老金",
		money: "￥10086.00元"
	},
	{
		src: "//i0.hdslb.com/bfs/archive/bfaa73d0488d9841455e88bc369e0731b91c7922.jpg_320x200.jpg",
		name: "EdisonXxu",
		make: "通过分享赚取养老金",
		money: "￥10086.00元"
	},
	{
		src: "//i0.hdslb.com/bfs/archive/003c8c38d5f9537e2055c497be32b55225357ef0.jpg_320x200.jpg",
		name: "柚子又抽了",
		make: "通过购物赚取养老金",
		money: "￥10086.00元"
	},
	{
		src: "//i0.hdslb.com/bfs/archive/225a67544676c2aae788ca27a53744918562cef9.jpg_320x200.jpg",
		name: "SoFun搜趣坊",
		make: "通过购物赚取养老金",
		money: "￥10086.00元"
	},
	{
		src: "//i0.hdslb.com/bfs/archive/86e2d5395208c71b0f0afd1b197dae4e0eff0937.jpg_320x200.jpg",
		name: "泠鸢yousa",
		make: "通过购物赚取养老金",
		money: "￥10086.00元"
	},
	{
		src: "//i0.hdslb.com/bfs/archive/6801fc461b419ebd4980f8e7eadca55085f44f42.jpg_320x200.jpg",
		name: "纳兰寻风",
		make: "通过购物赚取养老金",
		money: "￥10086.00元"
	},
	{
		src: "//i0.hdslb.com/bfs/archive/9a65cee2ed141536fb64520d9a90c012ebcd29f5.jpg_320x200.jpg",
		name: "MaxKim",
		make: "通过购物赚取养老金",
		money: "￥10086.00元"
	},
	{
		src: "//i0.hdslb.com/bfs/archive/2329b566df8ce99af3d0672cf950cfd2915b3f54.jpg_320x200.jpg",
		name: "科技微讯",
		make: "通过购物赚取养老金",
		money: "￥10086.00元"
	},
	{
		src: "//i0.hdslb.com/bfs/archive/b279d4e862d750135702f075993f44cf0ac230ed.jpg_320x200.jpg",
		name: "彼优传媒",
		make: "通过购物赚取养老金",
		money: "￥10086.00元"
	},
];

var tu = $("#dance td img");
var use = $("#dance td .trand_list p:nth-child(1)");
var makes = $("#dance td .trand_list p:nth-child(2)");
for(var i = 0; i < data.length; i++) {
	$("#dance #demo1 tbody").append("<tr><td height='25' align='left' valign='middle' class='zi3'><img src='" + data[i].src + "'><div class='trand_list'><p>" + data[i].name + "</p>" + data[i].make + "<p></p></div></td><td align='center' valign='middle' class='zi5'>" + data[i].money + "</td></tr>");
};

var speeda = 30;
demo2.innerHTML = demo1.innerHTML;

function Marqueea() {
	if(demo2.offsetTop - dance.scrollTop <= 0) {
		dance.scrollTop -= demo1.offsetHeight;
	} else {
		dance.scrollTop++;
	}
};
var MyMara = setInterval(Marqueea, speeda);
dance.onmouseover = function() {
	clearInterval(MyMara)
}
dance.onmouseout = function() {
	MyMara = setInterval(Marqueea, speeda);
};

var mask = document.querySelector(".top_ban .mask_warp .mask_bg img");
var sc = document.querySelectorAll(".carousel-inner .active img")[0];
//var asd = $(".top_ban .mask_warp .mask_bg").css("background-image").split("\"")[1];

mask.src = sc.src;
//setInterval(1000, function() {
//	var s,t;
//});