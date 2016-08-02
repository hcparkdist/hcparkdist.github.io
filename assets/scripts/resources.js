/* Various Website js */

/* Begin Menu--- VWpopmenu.js */
function P7_setPM(){ 
 var i,d='',h="<sty"+"le type=\"text/css\">",tA=navigator.userAgent.toLowerCase();if(window.opera){
 if(tA.indexOf("opera 5")>-1||tA.indexOf("opera 6")>-1){return;}}if(document.getElementById){
 for(i=1;i<20;i++){d+='ul ';h+="\n#VWnav "+d+"{position:absolute;left:-9000px;}";}
 document.write(h+"\n<"+"/sty"+"le>");}}P7_setPM();
function P7_initPM(){ 
 var i,g,tD,tA,tU,pp,lvl,tn=navigator.userAgent.toLowerCase();if(window.opera){
 if(tn.indexOf("opera 5")>-1||tn.indexOf("opera 6")>-1){return;}}else if(!document.getElementById){return;}
 VWp=arguments;VWct=new Array;tD=document.getElementById('VWnav');if(tD){tA=tD.getElementsByTagName('A');
 for(i=0;i<tA.length;i++){tA[i].VWcl=VWct.length;VWct[VWct.length]=tA[i];g=tA[i].parentNode.getElementsByTagName("UL");
 tA[i].VWsub=(g)?g[0]:false;ev=tA[i].getAttribute("onmouseover");if(!ev||ev=='undefined'){tA[i].onmouseover=function(){
 P7_PMtrig(this);};}ev=tA[i].getAttribute("onfocus");if(!ev||ev=='undefined'){tA[i].onfocus=function(){P7_PMtrig(this);};}
 if(tA[i].VWsub){pp=tA[i].parentNode;lvl=0;while(pp){if(pp.tagName&&pp.tagName=="UL"){lvl++;}pp=pp.parentNode;}
 tA[i].VWlv=lvl;}}tD.onmouseout=P7_PMclose;P7_PMopen();}
}
function P7_PMtrig(a){ 
 var b,t;if(document.VWt){clearTimeout(document.VWt);}document.VWa=1;b=(a.VWsub)?'P7_PMshow(':'P7_PMtg(';
 t='document.VWt=setTimeout("'+b+a.VWcl+')",160)';eval (t);
}
function P7_PMshow(a,bp){
 var u,lv,oft,ofr,uw,uh,pp,aw,ah,adj,mR,mT,wW=0,wH,w1,w2,w3,sct,pw,lc,pwv,xx=0,yy=0,wP=true;
 var iem=(navigator.appVersion.indexOf("MSIE 5")>-1)?true:false,dce=document.documentElement,dby=document.body;document.VWa=1;
 if(!bp){P7_PMtg(a);}u=VWct[a].VWsub;if(u.VWax&&u.VWax==1){return;}u.VWax=1;lv=(VWp[0]==1&&VWct[a].VWlv==1)?true:false;
 VWct[a].className=VWct[a].className.replace("VWtrg","VWon");oft=parseInt(VWp[3]);ofr=parseInt(VWp[4]);
 uw=u.offsetWidth;uh=u.offsetHeight;pp=VWct[a];aw=pp.offsetWidth;ah=pp.offsetHeight;while(pp){xx+=(pp.offsetLeft)?pp.offsetLeft:0;
 yy+=(pp.offsetTop)?pp.offsetTop:0;if(window.opera||navigator.userAgent.indexOf("Safari")>-1){
 if(VWct[a].VWlv!=1&&pp.nodeName=="BODY"){yy-=(pp.offsetTop)?pp.offsetTop:0;}}pp=pp.offsetParent;}
 if(iem&&navigator.userAgent.indexOf("Mac")>-1){yy+=parseInt(dby.currentStyle.marginTop);}adj=parseInt((aw*ofr)/100);mR=(lv)?0:aw-adj;
 adj=parseInt((ah*oft)/100);mT=(lv)?0:(ah-adj)*-1;w3=dby.parentNode.scrollLeft;if(!w3){w3=dby.scrollLeft;}w3=(w3)?w3:0;
 if(dce&&dce.clientWidth){wW=dce.clientWidth+w3;}else if(dby){wW=dby.clientWidth+w3;}if(!wW){wW=0;wP=false;}wH=window.innerHeight;
 if(!wH){wH=dce.clientHeight;if(!wH||wH<=0){wH=dby.clientHeight;}}sct=dby.parentNode.scrollTop;if(!sct){sct=dby.scrollTop;if(!sct){
 sct=window.scrollY?window.scrollY:0;}}pw=xx+mR+uw;if(pw>wW&&wP){mR=uw*-1;mR+=10;if(lv){mR=(wW-xx)-uw;}}lc=xx+mR;if(lc<0){mR=xx*-1;}
 pw=yy+uh+ah+mT-sct;pwv=wH-pw;if(pwv<0){mT+=pwv;if(uh>wH){mT=(yy+ah-sct)*-1;}}u.style.marginLeft=mR+'px';u.style.marginTop=mT+'px';
 if(VWp[2]==1){if(!iem){P7_PManim(a,60);}}u.className="VWshow";
}
function P7_PMhide(u){ 
 var i,tt,ua;u.VWax=0;u.className="VWhide";ua=u.parentNode.firstChild;ua.className=ua.className.replace("VWon","VWtrg");
}
function P7_PMtg(a,b){
 var i,u,tA,tU,pp;tA=VWct[a];pp=tA.parentNode;while(pp){if(pp.tagName=="UL"){break;}pp=pp.parentNode;}if(pp){
 tU=pp.getElementsByTagName("UL");for(i=tU.length-1;i>-1;i--){if(b!=1&&tA.VWsub==tU[i]){continue;}else{P7_PMhide(tU[i]);}}}
}
function P7_PMclose(evt){ 
 var pp,st,tS,m=true;evt=(evt)?evt:((event)?event:null);st=document.VWa;if(st!=-1){if(evt){
 tS=(evt.relatedTarget)?evt.relatedTarget:evt.toElement;if(tS){pp=tS.parentNode;while(pp){if(pp&&pp.id&&pp.id=="VWnav"){m=false;
 document.VWa=1;break;}pp=pp.parentNode;}}if(m){document.VWa=-1;if(document.VWt){clearTimeout(document.VWt);}
 document.VWt=setTimeout("P7_PMclr()",360);}}}
}
function P7_PMclr(){ 
 var i,tU,tUU;document.VWa=-1;tU=document.getElementById('VWnav');if(tU){tUU=tU.getElementsByTagName("UL");if(tUU){
 for(i=tUU.length-1;i>-1;i--){P7_PMhide(tUU[i]);}}}
}
function P7_PManim(a,st){ 
 var g=VWct[a].VWsub,sp=30,inc=20;st=(st>=100)?100:st;g.style.fontSize=st+"%";if(st<100){st+=inc;setTimeout("P7_PManim("+a+","+st+")",sp);}
}
function P7_PMmark(){document.VWop=arguments;}
function P7_PMopen(){
 var i,x,tA,op,pp,wH,tA,aU,r1,k=-1,kk=-1,mt=new Array(1,'','');if(document.VWop){mt=document.VWop;}op=mt[0];if(op<1){return;}
 tA=document.getElementById('VWnav').getElementsByTagName("A");wH=window.location.href;r1=/index\.[\S]*/i;for(i=0;i<tA.length;i++){
 if(tA[i].href){aU=tA[i].href.replace(r1,'');if(op>0){if(tA[i].href==wH||aU==wH){k=i;kk=-1;break;}}if(op==2){if(tA[i].firstChild){
 if(tA[i].firstChild.nodeValue==mt[1]){kk=i;}}}if(op==3 && tA[i].href.indexOf(mt[1])>-1){kk=i;}if(op==4){for(x=1;x<mt.length;x+=2){
 if(wH.indexOf(mt[x])>-1){if(tA[i].firstChild&&tA[i].firstChild.data){if(tA[i].firstChild.data==mt[x+1]){kk=i;break;}}}}}}}k=(kk>k)?kk:k;
 if(k>-1){pp=tA[k].parentNode;while(pp){if(pp.nodeName=="LI"){pp.firstChild.className="VWmark"+" "+pp.firstChild.className;}
 pp=pp.parentNode;}}if(kk>-1){document.VWad=1;}P7_PMadma();P7_PMadmb();
}
function P7_PMadma(){ 
 var s,ss,i,j,a,g,b,c,d,t,h,tA,b,tP,r1,r2,tI,bA,aA,tB=new Array(),bC='',x=0,ur=1,mt=document.VWad;g=document.getElementById("VWnav");
 b=document.getElementById("pmmcrumb");if(g&&b){c=b.getElementsByTagName("A");if(c&&c[0]){tP=c[0].parentNode.childNodes;r1=/<a/i;r2=/\/a>/i;
 tI=c[0].parentNode.innerHTML;j=tI.search(r1);bA=tI.substring(0,j);j=tI.search(r2);aA=tI.substring(j+3);bC+=(bA)?bA:'';s=(aA)?aA:' &gt ';
 if(!c[0].id||c[0].id!="pmmcn"){if(c[0].href!=window.location.href){tB[0]=c[0];x++;ur=2;}}tA=g.getElementsByTagName("A");for(i=0;i<tA.length;i++){
 if(tA[i].className.indexOf("VWmark")>-1){tB[x]=tA[i];x++;}}for(i=0;i<tB.length;i++){ss=(i>0)?s:'';a=(i==tB.length-1)?0:1;
 d=(i==0&&c[0].id)?'id="'+c[0].id+'" ':' ';t=tB[i].firstChild.nodeValue;if(a==1||mt==1||x<ur){bC+=ss+'<a '+d+'hr'+'ef="'+tB[i].href+'">'+t+'</a>';
 }else{bC+=ss+t;}}if(mt==1||i<ur){ss=(i>0)?s:'';bC+=ss+document.title;}c[0].parentNode.innerHTML=bC;}}
}
function P7_PMadmb(){ 
 var h='',g,i,tA,b,m=false;g=document.getElementById("VWnav");b=document.getElementById("pmmnext");if(g&&b){tA=g.getElementsByTagName("A");
 for(i=tA.length-1;i>-1;i--){if(tA[i].className.indexOf("VWmark")>-1){m=true;break;}}if(m){if(i<tA.length-1){i++;}else{i=0;}
 while(tA[i].href==window.location.href+"#"||tA[i].href=="javascript:;"){i++;if(i>tA.length-1){
 i=0;break;}}b.href=tA[i].href;b.innerHTML=tA[i].firstChild.nodeValue;}}	
}
function P7_centerTag(t){ //v1.0 by Project Seven Development (www.projectseven.com)
 var w=0,tP,tL,lp,pp,ow;t=(t)?t:document.p7cme;tP=document.getElementById(t);
 if(tP){tL=tP.childNodes;for(i=0;i<tL.length;i++){
 w+=(tL[i].offsetWidth)?tL[i].offsetWidth:0;}pp=tP.parentNode;
 ow=pp.offsetWidth;if(ow<w){w=ow;}lp=parseInt(ow-w)/2;
 tP.style.marginLeft=lp+"px";document.p7cme=t;}
 document.p7cmh=document.body.offsetHeight;document.p7cmw=document.body.offsetWidth;
 setInterval("P7_cmPM()",10);onresize=P7_cmPM;}function P7_cmPM(){
 if(document.p7cmh!=document.body.offsetHeight||document.p7cmw!=document.body.offsetWidth){
 P7_centerTag();}
}
/* end Menu */
/* Begin mm mouseover image swap */

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

/* End mm mouseover image swap */


// Begin Display Date
function makeArray(n) {
this.length = n
return this
}
monthNames = new makeArray(12)
monthNames[1] = "January"
monthNames[2] = "February"
monthNames[3] = "March"
monthNames[4] = "April"
monthNames[5] = "May"
monthNames[6] = "June"
monthNames[7] = "July"
monthNames[8] = "August"
monthNames[9] = "September"
monthNames[10] = "October"
monthNames[11] = "November"
monthNames[12] = "December"
function dateString(oneDate) {
var theMonth = monthNames[oneDate.getMonth() + 1]
var theYear = oneDate.getFullYear()
return theMonth + " " + oneDate.getDate() + ", " + theYear
}
// End Date

/**
 * SWFObject v1.5: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if(typeof deconcept=="undefined"){var deconcept=new Object();}if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObject.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObject.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObject.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;
// End SWFObject




// clear input field
function cleartext(thefield){
if (thefield.defaultValue==thefield.value)
thefield.value = ""
} 
// clear




//-->