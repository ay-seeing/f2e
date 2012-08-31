//获得或设置css
function cssStyle(obj,attr,value){
	if(arguments.length==arguments.callee.length){
		if(attr=="opacity"){
			obj.style[attr]=value/100;
			obj.style.filter="alpha(opacity="+value+")";
		}else{
			obj.style[attr]=value;
		}
	}else{
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			if(attr=="opacity"){
				return obj.style.opacity*100 || getComputedStyle(obj,false)[attr]*100;
			}else{
				return getComputedStyle(obj,false)[attr];
			}
		}
	}
}

//非链式运动
function moveFrame(obj,attr,iTarget){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var icur
		icur=parseInt(cssStyle(obj,attr));
		ispeed=(iTarget-icur)/5;
		ispeed=ispeed > 0 ? Math.ceil(ispeed) : Math.floor(ispeed);
		if(ispeed==0){clearInterval(obj.timer);}
		if(attr=="opacity"){
			cssStyle(obj,attr,icur+ispeed);
		}else{
			cssStyle(obj,attr,icur+ispeed+"px");
		}
	},30);
}

//链式运动
function moveFrames(obj,attr,iTarget,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var icur
		icur=parseInt(cssStyle(obj,attr));
		ispeed=(iTarget-icur)/5;
		ispeed=ispeed > 0 ? Math.ceil(ispeed) : Math.floor(ispeed);
		if(ispeed==0){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
		if(attr=="opacity"){
			cssStyle(obj,attr,icur+ispeed);
		}else{
			cssStyle(obj,attr,icur+ispeed+"px");
		}
	},30);
}