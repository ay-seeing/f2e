//window.onload function
function addLoadEvent(func){
	var oldLoad=window.onload;
	if(typeof window.onload !="function"){
		window.onload=func;
	}else{
		window.onload=function(){
			oldLoad();
			func();
		}
	}
}
//addLoadEvent(addLoadEvent);

//get this Element
function $id(idName){
	if(typeof idName != "object"){
		return document.getElementById(idName);
	}else{
		return idName;
	}
}

//get next element
getnextSibling=function(tagN){
	if(tagN.nextSibling=="null"){return;}
	var nextTag=tagN.nextSibling;
	while(nextTag.nodeType!=1){
		nextTag=nextTag.nextSibling;
	}
	return nextTag;
}

//insert new element for current element before
function insertAfter(newElement,TagElement){
	var parentElement=TagElement.parentNode;
	if(parentelement.lastChild!=TagElement){
		parentElement.insertBefore(newElement,TagElement.nextSibling);
	}else{
		parentElement.appendChild(newElement);
	}
}

//addClass one or more
function addClass(Element,values){
	if(!Element.className){
		Element.className=values;
	}else{
		var EleClass=Element.className;
		EleClass+=''+values;
		Element.className=EleClass;
	}
}

//getClassTags
function getClassName(parentT,Tag,cla){
	var Astring=new Array();
	var Atag=parentT.getElementsByTagName(Tag);
	for(var i=0;i<Atag.length;i++){
		if(Atag[i].className==cla){
			Astring.push(Atag[i]);
		}
	}
	return Astring;
}

oClass={
	addClass:function(ele,values){//给元素追加class样式
		if(typeof values=="Array") var values=values.join(" ");
		ele.className=ele.className ? ele.className+=" "+values : values;
	},
	getClassNames:function(oparent,classN,tagN){//获得元素样式包含 某个特定样式的元素 的数组集合
		var aGetTag=[];
		var tagN=tagN || "*";
		atag=oparent.getElementsByTagName(tagN);
		var classN=new RegExp(classN,i);
		for(var i=0;i<atag.length;i++){
			if(classN.test(atag[i].className)) aGetTag.push(atag[i]);
		};
		return aGetTag;
	}
};


//获取或设置css属性值，如果是2个参数那就获得，如果是3个参数就是设置
function fnTagAttr(obj,attr,values){
	if(arguments.length==3){
		obj.style.attr=values;
	}else{
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj,false)[attr];
		};
	};
};
