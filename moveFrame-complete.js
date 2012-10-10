/*
 运用该运动框架时，先确定需要更改的css属性已经设置过，否则可能会出错
*/


//设置\获取css
function cssStyle(obj,attr,value){
	if(arguments.length==arguments.callee.length){
		if(attr=="opacity"){
			obj.style[attr]=value/100;
			obj.style.filter="alpha(opacity="+value+")";
		}else{
			obj.style[attr]=value+"px";
		}
	}else{
		if(obj.currentStyle){
			if(attr=="opacity"){
				return obj.currentStyle[attr]*100;
			}else{
				return obj.currentStyle[attr];
			}
		}else{
			if(attr=="opacity"){
				return obj.style.opacity*100 || getComputedStyle(obj,false)[attr]*100;
			}else{
				return getComputedStyle(obj,false)[attr];
			}
		}
	}
}

//高级运动框架
//json => {width:50,height:60}
function moveFrame(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var stopMove;    //用于判断是否停止运动

		//循环属性
		for(attr in json){
			stopMove=true;
			var icur
			icur=parseInt(cssStyle(obj,attr));
			ispeed=(json[attr]-icur)/5;
			ispeed=ispeed > 0 ? Math.ceil(ispeed) : Math.floor(ispeed);
			if(ispeed!=0){
				stopMove=false;
			}
			cssStyle(obj,attr,icur+ispeed);
		}

		//判断如果所有运动都到各自目标点了就关闭定时器
		if(stopMove){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
	},30);
}