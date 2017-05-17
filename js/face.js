//function PreviewImage(imgFile) {
//	var filextension = imgFile.value.substring(imgFile.value.lastIndexOf("."), imgFile.value.length);
//	filextension = filextension.toLowerCase();
//	if((filextension != '.jpg') && (filextension != '.gif') && (filextension != '.jpeg') && (filextension != '.png') && (filextension != '.bmp')) {
//		alert("对不起，系统仅支持标准格式的照片，请您调整格式后重新上传，谢谢 !");
//		imgFile.focus();
//	} else {
//		var path;
//		if(document.all) //IE
//		{
//			imgFile.select();
//			path = document.selection.createRange().text;
//
//			document.getElementById("imgPreview").innerHTML = "";
//			document.getElementById("imgPreview").style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='scale',src=\"" + path + "\")"; //使用滤镜效果  
//		} else //FF
//		{
//			path = imgFile.files[0].getAsDataURL();
//			document.getElementById("imgPreview").innerHTML = "<img id='img1' width='120px' height='100px' src='" + path + "'/>";
//			// document.getElementById("img1").src = path;
//		}
//	}
//}

//var tup = $("#img img").src;
//var tu100 = $(".tu100").src;
//var tu50 = $(".tu50").src;
//var tu100 = $(".tu100")[0];
//var tu50 = $(".tu50")[0];
//console.log(tu100.src)