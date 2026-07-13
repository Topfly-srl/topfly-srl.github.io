(function($){var selectors=[];var checkBinded=false;var checkLock=false;var defaults={interval:250,force_process:false};var $window=$(window);var $priorappear2ed=[];function isappear2ed(){return $(this).is(':appear2ed');}
function isNotTriggered(){return!$(this).data('_appear2_triggered');}
function process(){checkLock=false;for(var index=0,selectorsLength=selectors.length;index<selectorsLength;index++){var $appear2ed=$(selectors[index]).filter(isappear2ed);$appear2ed.filter(isNotTriggered).data('_appear2_triggered',true).trigger('appear2',[$appear2ed]);if($priorappear2ed[index]){var $disappear2ed=$priorappear2ed[index].not($appear2ed);$disappear2ed.data('_appear2_triggered',false).trigger('disappear2',[$disappear2ed]);}
$priorappear2ed[index]=$appear2ed;}}
function addSelector(selector){selectors.push(selector);$priorappear2ed.push();}
$.expr.pseudos.appear2ed=$.expr.createPseudo(function(_arg){return function(element){var $element=$(element);if(!$element.is(':visible')){return false;}
var windowLeft=$window.scrollLeft();var windowTop=$window.scrollTop();var offset=$element.offset();var left=offset.left;var top=offset.top;if(top+$element.height()>=windowTop&&top-($element.data('appear2-top-offset')||0)<=windowTop+$window.height()&&left+$element.width()>=windowLeft&&left-($element.data('appear2-left-offset')||0)<=windowLeft+$window.width()){return true;}
return false;};});$.fn.extend({appear2:function(selector,options){$.appear2(this,options);return this;}});$.extend({appear2:function(selector,options){var opts=$.extend({},defaults,options||{});if(!checkBinded){var onCheck=function(){if(checkLock){return;}
checkLock=true;setTimeout(process,opts.interval);};$(window).scroll(onCheck).resize(onCheck);checkBinded=true;}
if(opts.force_process){setTimeout(process,opts.interval);}
addSelector(selector);},force_appear2:function(){if(checkBinded){process();return true;}
return false;}});}(function(){if(typeof module!=='undefined'){return require('jquery');}
return jQuery;}()));