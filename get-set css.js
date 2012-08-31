// 获取css样式(一次只能获取一个属性值)
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}

// 设置css样式(一次只能设置一个属性值)
function setStyle(obj,attr,value){
	if(attr=="opacity"){
		obj.style[attr]=value;
		obj.style["filter"]="alpha(opacity="+value+")";
	}else{
		obj.style[attr]=value;
	}
}

//判断是获取还是设置css样式(一次只能获取或设置一个属性值)
function cssStyle(obj,attr,value){
	if(arguments.length==2){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj,false)[attr];
		}
	}else{
		if(attr=="opacity"){
			obj.style[attr]=value;
			obj.style["filter"]="alpha(opacity="+value+")";
		}else{
			obj.style[attr]=value;
		}
	}
}

// 获取css样式-array(一次获取多个属性值)
function getStyleS(obj,arr){
	var aResult=[];
	for(var attr in arr){
		if(obj.currentStyle){
			aResult.push(obj.currentStyle[arr[attr]]);
		}else{
			aResult.push(getComputedStyle(obj,false)[arr[attr]]);
		}
	}
	return aResult;  //按传入的属性顺序返回属性值
}

// 设置css样式-json(一次设置多个属性值)
function setStyleS(obj,json){
	for(var attr in json){
		if(attr=="opacity"){
			obj.style[attr]=json[attr];
			obj.style["filter"]="alpha(opacity="+json[attr]+")";
		}else{
			obj.style[attr]=json[attr];
		}
	}
}

//判断是获取还是设置css样式(一次获取或设置多个属性值)
function cssStyleS(obj,oAttr){
	var aResult=[];
	for(var attr in oAttr){
		if(oAttr instanceof Array){  //判断如果传入的是数组，则获取属性值，否则设置属性    instanceof 用于判断一个变量是否某个对象的实例
			if(obj.currentStyle){
				aResult.push(obj.currentStyle[oAttr[attr]]);
			}else{
				aResult.push(getComputedStyle(obj,false)[oAttr[attr]]);
			}
		}else{
			if(attr=="opacity"){
				obj.style[attr]=oAttr[attr];
				obj.style["filter"]="alpha(opacity="+oAttr[attr]+")";
			}else{
				obj.style[attr]=oAttr[attr];
			}
		}
	}
	if(oAttr instanceof Array){return aResult;}    //判断如果传入的是数组，按传入的属性顺序返回属性值
}