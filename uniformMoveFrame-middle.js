/*
 运用该运动框架时，先确定需要更改的css属性已经设置过，否则可能会出错
*/



//获得或设置css
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

//非链式-匀速运动框架
function moveFrame(obj,attr,iTarget){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var icur;
		icur=parseInt(cssStyle(obj,attr));
		var ispeed=10;
		ispeed=iTarget-icur > 0 ? ispeed : -ispeed ;
		if(Math.abs(iTarget-icur) < Math.abs(ispeed)){
			clearInterval(obj.timer);
			ispeed=iTarget-icur;
		}
		cssStyle(obj,attr,icur+ispeed);
	},30);
}

//链式-匀速运动框架
function moveFrame(obj,attr,iTarget,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var icur;
		icur=parseInt(cssStyle(obj,attr));
		var ispeed=10;
		ispeed=iTarget-icur > 0 ? ispeed : -ispeed ;
		if(Math.abs(iTarget-icur) < Math.abs(ispeed)){
			clearInterval(obj.timer);
			ispeed=iTarget-icur;
			if(fn){
				fn();
			}
		}
		cssStyle(obj,attr,icur+ispeed);
	},30);
}