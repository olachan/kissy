/*
Copyright 2012, KISSY UI Library v1.40dev
MIT Licensed
build time: Jul 6 13:06
*/
KISSY.add("editor/plugin/backColor/index",function(c,f,d,e){function b(a){this.config=a||{}}c.augment(b,{renderUI:function(a){e.init(a);a.addButton("backColor",{cmdType:"backColor",tooltip:"背景颜色",pluginConfig:this.config},d)}});return b},{requires:["editor","../color/btn","./cmd"]});
