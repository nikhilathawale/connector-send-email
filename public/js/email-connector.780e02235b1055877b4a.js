!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}({0:function(e,t,n){e.exports=n("ARlc")},"5wd8":function(e,t,n){var i=n("VU/8")(n("zGON"),n("JNHm"),null,null);e.exports=i.exports},ARlc:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("SVkI"),o=[i.a];window.ProcessMaker.EventBus.$on("modeler-init",function(e){var t=e.registerNode,n=(e.registerBpmnExtension,!0),i=!1,a=void 0;try{for(var r,s=o[Symbol.iterator]();!(n=(r=s.next()).done);n=!0){t(r.value)}}catch(e){i=!0,a=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw a}}})},JNHm:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},staticRenderFns:[]}},KZCc:function(e,t){e.exports="/vendor/processmaker/connectors/email/fonts/icon.svg?3cee1ea7533194018f2ca582b93a9815"},SVkI:function(e,t,n){"use strict";var i=n("5wd8"),o=n.n(i);t.a={id:"processmaker-communication-email-send",component:o.a,bpmnType:"bpmn:ServiceTask",control:!0,category:"Communication",icon:n("W4/I"),label:"Send Email",definition:function(e){return e.create("bpmn:ServiceTask",{name:"Send Email",implementation:"processmaker-communication-email-send"})},diagram:function(e){return e.create("bpmndi:BPMNShape",{bounds:e.create("dc:Bounds",{height:80,width:100})})},inspectorHandler:function(e,t,n){for(var i in e)t[i]!=e[i]&&(t[i]=e[i]);n.updateShape()},inspectorConfig:[{name:"Send Email",items:[{component:"FormText",config:{label:"Send Email",fontSize:"2em"}},{component:"FormInput",config:{label:"Email",helper:"Recipient's Email",name:"config.email"}},{component:"FormInput",config:{label:"Name",helper:"recipient's name",name:"config.targetName"}},{component:"FormInput",config:{label:"Subject",helper:"Subject of the message",name:"config.targetName"}},{component:"FormInput",config:{label:"Template",helper:"Template of the message",name:"config.template"}}]}]}},"VU/8":function(e,t){e.exports=function(e,t,n,i){var o,a=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(o=e,a=e.default);var s="function"==typeof a?a.options:a;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),i){var c=Object.create(s.computed||null);Object.keys(i).forEach(function(e){var t=i[e];c[e]=function(){return t}}),s.computed=c}return{esModule:o,exports:a,options:s}}},"W4/I":function(e,t){e.exports="/vendor/processmaker/connectors/email/fonts/vendor/@processmaker/modeler/src/toolpanel/task.svg?e7419065b0c99c6c96817165a9a5a7ce"},gIWh:function(e,t,n){"use strict";var i=joint.shapes.standard.Rectangle.extend({markup:[{tagName:"rect",selector:"body"},{tagName:"text",selector:"label"},{tagName:"image",selector:"image"}],defaults:joint.util.deepSupplement({type:"processmaker.connectors.DecoratedRect",size:{width:100,height:60},attrs:{image:{"ref-x":2,"ref-y":2,ref:"rect",width:16,height:16}}},joint.shapes.standard.Rectangle.prototype.defaults)});t.a=i},zGON:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("W4/I"),o=n.n(i),a=n("gIWh");t.default={props:["graph","node","nodes","id"],data:function(){return{shape:null,definition:null,crownConfig:[{icon:o.a,clickHandler:this.addSequence}]}},methods:{getShape:function(){return this.shape},updateShape:function(){var e=this.node.diagram.bounds;this.shape.position(e.x,e.y),this.shape.resize(e.width,e.height),this.shape.attr({body:{},label:{text:joint.util.breakText(this.node.definition.get("name"),{width:e.width}),fill:"black"},image:{"xlink:href":"http://placehold.it/16x16"}});var t=this.node.definition.get("name"),n=joint.util.breakText(t,{width:e.width});this.shape.attr("label/text",n);var i=this.shape.findView(this.paper),o=i.selectors.label.getBBox().height;o+15!==this.shape.size().height&&(e.height=Math.max(o+15,80),this.shape.resize(e.width,e.height))},handleClick:function(){this.$parent.loadInspector("processmaker-communication-email-send",this.node.definition,this)}},mounted:function(){var e=this;this.shape=new a.a;var t=this.node.diagram.bounds;this.shape.position(t.x,t.y),this.shape.resize(t.width,t.height),this.shape.attr({body:{rx:8,ry:8},label:{text:joint.util.breakText(this.node.definition.get("name"),{width:t.width}),fill:"black"},image:{"xlink:href":n("KZCc")}}),this.shape.on("change:position",function(n,i){e.node.diagram.bounds.x=i.x,e.node.diagram.bounds.y=i.y,e.$emit("move",{x:t.x,y:t.y},n)}),this.shape.addTo(this.graph),this.shape.component=this,this.$parent.nodes[this.id].component=this}}}});