import{a as W,b as ut}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-YIBTG3FD.js";import{n as R,o as yt}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-4NSILI54.js";import{Gb as j,O as Y,R as pt,sc as mt}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-PEYC24KP.js";import{r as D,s as ct}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-42TSFLLH.js";import{a as J,h as lt}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-G4GX3XOZ.js";import{b as B,c as ft}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-SXBIDYQQ.js";import{j as X,k as M,l as dt}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-PR2DJXFR.js";import{b as at,c as K,e as rt}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-GJYOXBH4.js";import{a as st}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-3SFTLRL3.js";import{b as it}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-W2OJRSJR.js";import{a as H,b as ot,d as G}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-TZYDFHR2.js";var q=ot((z,U)=>{"use strict";(function(o,e){if(typeof define=="function"&&define.amd)define(["exports","module"],e);else if(typeof z<"u"&&typeof U<"u")e(z,U);else{var i={exports:{}};e(i.exports,i),o.fetchJsonp=i.exports}})(z,function(o,e){"use strict";var i={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function a(){return"jsonp_"+Date.now()+"_"+Math.ceil(Math.random()*1e5)}function s(r){try{delete window[r]}catch{window[r]=void 0}}function p(r){var t=document.getElementById(r);t&&document.getElementsByTagName("head")[0].removeChild(t)}function f(r){var t=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],l=r,n=t.timeout||i.timeout,u=t.jsonpCallback||i.jsonpCallback,c=void 0;return new Promise(function(y,x){var g=t.jsonpCallbackFunction||a(),k=u+"_"+g;window[g]=function(d){y({ok:!0,json:function(){return Promise.resolve(d)}}),c&&clearTimeout(c),p(k),s(g)},l+=l.indexOf("?")===-1?"?":"&";var h=document.createElement("script");h.setAttribute("src",""+l+u+"="+g),t.charset&&h.setAttribute("charset",t.charset),t.nonce&&h.setAttribute("nonce",t.nonce),t.referrerPolicy&&h.setAttribute("referrerPolicy",t.referrerPolicy),t.crossorigin&&h.setAttribute("crossorigin","true"),h.id=k,document.getElementsByTagName("head")[0].appendChild(h),c=setTimeout(function(){x(new Error("JSONP request to "+r+" timed out")),s(g),p(k),window[g]=function(){s(g)}},n),h.onerror=function(){x(new Error("JSONP request to "+r+" failed")),s(g),p(k),c&&clearTimeout(c)}})}e.exports=f})});var Q,Z=H(()=>{"use strict";ut();Q={"template-export-pdf-typekit-substitution-news-gothic":W`
<style id="export-pdf-typekit-substitution">
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/News Gothic Bold Italic/c6f4e54e-1d69-4559-b813-e2fc4ff29160-3.woff") format("woff"),
		 url("/fonts/webtype/News Gothic Bold Italic/c6f4e54e-1d69-4559-b813-e2fc4ff29160-4.svg#web") format("svg");
	font-style: italic;
	font-weight: 700;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/News Gothic Bold/9aab62b7-bc6f-405a-ad75-227bcf89d9dc-3.woff") format("woff"),
		 url("/fonts/webtype/News Gothic Bold/9aab62b7-bc6f-405a-ad75-227bcf89d9dc-4.svg#web") format("svg");
	font-style: normal;
	font-weight: 700;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/News Gothic Italic/6327ba72-bfd5-4038-9658-e3a4a95a5c98-3.woff") format("woff"),
		 url("/fonts/webtype/News Gothic Italic/6327ba72-bfd5-4038-9658-e3a4a95a5c98-4.svg#web") format("svg");
	font-style: italic;
	font-weight: 400;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/News Gothic/915b0ec4-cd16-40de-883e-1d77c3d07840-3.woff") format("woff"),
		 url("/fonts/webtype/News Gothic/915b0ec4-cd16-40de-883e-1d77c3d07840-4.svg#web") format("svg");
	font-style: normal;
	font-weight: 400;
}
</style>
`,"template-export-pdf-typekit-substitution-georgia-pro":W`
<style id="export-pdf-typekit-substitution">
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Georgia Pro Black/4ec59c91-f66b-4751-8456-e114e9e14673-3.woff") format("woff"),
		 url("/fonts/webtype/Georgia Pro Black/4ec59c91-f66b-4751-8456-e114e9e14673-4.svg#web") format("svg");
	font-style: normal;
	font-weight: 900;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Georgia Pro Bold Italic/6f283590-c3c2-416a-95c2-ca67d04aa929-3.woff") format("woff"),
		 url("/fonts/webtype/Georgia Pro Bold Italic/6f283590-c3c2-416a-95c2-ca67d04aa929-4.svg#web") format("svg");
	font-style: italic;
	font-weight: 700;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Georgia Pro Bold/6f633c58-c751-4d08-9cea-2b27f74f37de-3.woff") format("woff"),
		 url("/fonts/webtype/Georgia Pro Bold/6f633c58-c751-4d08-9cea-2b27f74f37de-4.svg#web") format("svg");
	font-style: normal;
	font-weight: 700;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Georgia Pro Italic/e3bc0ad4-bdaa-4467-82a0-d90f697b7266-3.woff") format("woff"),
		 url("/fonts/webtype/Georgia Pro Italic/e3bc0ad4-bdaa-4467-82a0-d90f697b7266-4.svg#web") format("svg");
	font-style: italic;
	font-weight: 400;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Georgia Pro SemiBold Italic/0e025df5-ba54-4bbb-84b4-c5b337a5b55b-3.woff") format("woff"),
		 url("/fonts/webtype/Georgia Pro SemiBold Italic/0e025df5-ba54-4bbb-84b4-c5b337a5b55b-4.svg#web") format("svg");
	font-style: italic;
	font-weight: 600;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Georgia Pro SemiBold/60fe12ce-0223-4a9a-8e5c-b3e7bd381bc4-3.woff") format("woff"),
		 url("/fonts/webtype/Georgia Pro SemiBold/60fe12ce-0223-4a9a-8e5c-b3e7bd381bc4-4.svg#web") format("svg");
	font-style: normal;
	font-weight: 600;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Georgia Pro/b97bef32-c0cb-4ad3-b724-1204d229731c-3.woff") format("woff"),
		 url("/fonts/webtype/Georgia Pro/b97bef32-c0cb-4ad3-b724-1204d229731c-4.svg#web") format("svg");
	font-style: normal;
	font-weight: 400;
}
</style>
`,"template-export-pdf-typekit-substitution-nitti":W`
<style id="export-pdf-typekit-substitution">
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Nitti Light Italic/15aba0ec-4ceb-49e2-985c-a95134a60aed-3.woff") format("woff"),
		 url("/fonts/webtype/Nitti Light Italic/15aba0ec-4ceb-49e2-985c-a95134a60aed-4.svg#web") format("svg");
	font-style: italic;
	font-weight: 300;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Nitti Light/6fd7c5e9-3131-4cb6-a99e-da74343b1253-3.woff") format("woff"),
		 url("/fonts/webtype/Nitti Light/6fd7c5e9-3131-4cb6-a99e-da74343b1253-4.svg#web") format("svg");
	font-style: normal;
	font-weight: 300;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Nitti Medium/9054f262-2d2d-480f-9360-4560f110243b-3.woff") format("woff"),
		 url("/fonts/webtype/Nitti Medium/9054f262-2d2d-480f-9360-4560f110243b-4.svg#web") format("svg");
	font-style: normal;
	font-weight: 500;
}
</style>
`}});var S,m,et,tt,gt,O,I,Nt,ht=H(()=>{"use strict";S=G(st()),m=G(it()),et=G(q());ft();ct();dt();Z();rt();mt();pt();at();lt();yt();tt=100,gt=1e4,O=3500,I={STYLE_PREFIXES:{paragraph:{viewer:[".used-fonts-test p",".rmwidget.text div p"],editor:["p"],constructor:[".used-fonts-test p",".block.block-text .text-preview p",".controls .control.text_styles .panel .resizable-scroll-wrapper .resizable-content-wrapper .resizable-content .paragraph-style .style-caption"]},"header-h1":{viewer:[".used-fonts-test h1",".rmwidget.text div h1"],editor:["h1"],constructor:[".used-fonts-test h1",".block.block-text .text-preview h1",".controls .control.text_styles .panel .resizable-scroll-wrapper .resizable-content-wrapper .resizable-content .paragraph-style .style-caption"]},"header-h2":{viewer:[".used-fonts-test h2",".rmwidget.text div h2"],editor:["h2"],constructor:[".used-fonts-test h2",".block.block-text .text-preview h2",".controls .control.text_styles .panel .resizable-scroll-wrapper .resizable-content-wrapper .resizable-content .paragraph-style .style-caption"]},"header-h3":{viewer:[".used-fonts-test h3",".rmwidget.text div h3"],editor:["h3"],constructor:[".used-fonts-test h3",".block.block-text .text-preview h3",".controls .control.text_styles .panel .resizable-scroll-wrapper .resizable-content-wrapper .resizable-content .paragraph-style .style-caption"]},"header-h4":{viewer:[".used-fonts-test h4",".rmwidget.text div h4"],editor:["h4"],constructor:[".used-fonts-test h4",".block.block-text .text-preview h4",".controls .control.text_styles .panel .resizable-scroll-wrapper .resizable-content-wrapper .resizable-content .paragraph-style .style-caption"]},link:{viewer:[".rmwidget.text div a"],editor:["a"],constructor:[".block.block-text .text-preview a"]}},fontsShortList:{},fontCustomVariationNames:{},generateStylesStr:function(o){let e="",i,a,s,p=o.style,f=o.indentation?"	":"",r=";"+(o.lineBreaks?`
`:""),t=o.attrPrefix||"";return o.tp=="paragraph"&&(e+=f+"font-family: "+l("font-family")+r,e+=f+"font-style: "+l("font-style")+r,e+=f+"font-weight: "+l("font-weight")+r,e+=f+"font-size: "+n(l("font-size"))+r,e+=f+"letter-spacing: "+n(l("letter-spacing"))+r,e+=f+"line-height: "+n(l("line-height"))+r,e+=f+"text-align: "+l("text-align")+r,e+=f+"text-decoration: "+l("text-decoration")+r,e+=f+"text-transform: "+l("text-transform")+r,e+=f+"color: "+D.getRGBA(l("color"),l("opacity")/100)+r,e+=f+"padding-top: "+n(l("padding-top"))+r,e+=f+"padding-right: "+n(l("padding-right"))+r,e+=f+"padding-bottom: "+n(l("padding-bottom"))+r,e+=f+"padding-left: "+n(l("padding-left"))+r),o.tp=="link"&&(e+=f+"text-decoration: none"+r,e+=f+"color: "+D.getRGBA(l("color"),l("opacity")/100)+r,l("u-style")!="none"?(i=D.getRGBA(l("u-color"),l("u-opacity")/100),a=parseInt(l("u-size"),10),s=parseInt(l("u-offset"),10)+a,e+=f+"padding-bottom: "+n(Math.max(s,0))+r,l("u-style")=="solid"&&(e+=f+"background: linear-gradient(to right, "+i+" 0%, "+i+" 100%)"+r,e+=f+"background-size: 1px "+n(a)+r),l("u-style")=="dotted"&&(e+=f+"background: linear-gradient(to right, "+i+" 0%, "+i+" 50%, transparent 50%,transparent 100%)"+r,e+=f+"background-size: "+n(a*2)+" "+n(a)+r),l("u-style")=="dashed"&&(e+=f+"background: linear-gradient(to right, "+i+" 0%, "+i+" 66.6666%, transparent 66.6666%,transparent 100%)"+r,e+=f+"background-size: "+n(a*3)+" "+n(a)+r),s<0?e+=f+"background-position: 0 "+(100+s)+"%"+r:e+=f+"background-position: 0 100%"+r,e+=f+"background-repeat: repeat-x"+r):e+=f+"background: none"+r),e;function l(u){let c=p[t+u];return c=="inherit"&&t&&(c=p[u]),c}function n(u){return u+(/px/i.test(u)?"":"px")}},generateCSS:function(o,e,i,a,f){if(!a)return;var p=this.STYLE_PREFIXES[o][e],f=f||{},r=this,t="";m.default.each(a,function(u){o=="paragraph"&&(u.tag&&u.tag!=="p"&&B.AVAILABLE_TEXT_TAGS.includes(u.tag)&&(p=[].concat(r.STYLE_PREFIXES["header-"+u.tag][e],r.STYLE_PREFIXES[o][e]).filter(function(c,y,x){return x.indexOf(c)===y})),t+=m.default.map(p,function(c){return c+"."+u._name}).join(`,
`)+` {
`,t+=r.generateStylesStr({tp:o,style:u,indentation:!0,lineBreaks:!0}),t+=`}

`),o=="link"&&(f.forcePseudoState&&f.forcePseudoClass==u._name?(t+=m.default.map(p,function(c){return c+"."+u._name}).join(`,
`)+` {
`,t+=r.generateStylesStr({tp:o,style:u,attrPrefix:f.forcePseudoState+"-",indentation:!0,lineBreaks:!0}),t+=`}

`):(t+=m.default.map(p,function(y){return y+"."+u._name}).join(`,
`)+` {
`,t+=r.generateStylesStr({tp:o,style:u,indentation:!0,lineBreaks:!0}),t+=`}

`,m.default.find(m.default.keys(u),function(y){return/^current/.test(y)})&&(t+=m.default.map(p,function(y){return y+".current."+u._name}).join(`,
`)+` {
`,t+=r.generateStylesStr({tp:o,style:u,attrPrefix:"current-",indentation:!0,lineBreaks:!0}),t+=`}

`),t+=m.default.map(p,function(y){return y+".hovered."+u._name}).join(`,
`)+` {
`,t+=r.generateStylesStr({tp:o,style:u,attrPrefix:"hover-",indentation:!0,lineBreaks:!0}),t+=`}

`),t+=m.default.map(p,function(c){return c+"."+u._name+" *"}).join(`,
`)+` {
`,t+=`	color: inherit !important;
`,t+=`	text-decoration: none !important;
`,t+=`}

`)}),i=i||document;let l="text_styles_"+o+"_"+e;(0,S.default)("#"+l,i).remove();let n=i.createElement("style");n.type="text/css",n.id=l,n.className="text_styles",n.appendChild(i.createTextNode(t)),i.getElementsByTagName("head")[0].appendChild(n)},appendFontsCssToDocument:function(o,e){window.TypekitPreview&&window.TypekitPreview.setup&&window.TypekitPreview.setup({auth_id:B.TYPEKIT_ID,auth_token:B.TYPEKIT_TOKEN,default_subset:"all"});let i=(0,S.default)("link.fonts, style.fonts"),a=[],s=[],p=[],f={};i.each(function(){let c=(0,S.default)(this),y=c.attr("data-provider"),x=c.attr("data-fonts-and-variations").split("||");m.default.each(x,function(g){a.push(y+"|"+g)})}),m.default.each(o.fonts,function(c){m.default.each(c.used_variations||c.variations,function(y){s.push(c.provider+"|"+c.css_name+"|"+y)})}),p=m.default.difference(s,a);let r={};m.default.each(p,function(c){let y=c.split("|"),x=y[0],g=y[1],k=y[2],h=x+"|"+g;r[h]=r[h]||[],r[h].push(k)});let t=[];m.default.each(r,function(c,y){let x=y.split("|"),g=x[0],k=x[1],h=c;t.push({provider:g,css_name:k,variations:h})}),m.default.each(t,function(c){let y=c.provider,x,g=c.css_name+"|"+c.variations.join("||"+c.css_name+"|");if(f[y]||(f[y]=[]),y=="google"){let k=S.default.map(c.variations,function(h){return(h.substr(1,1)-0)*100+(h.substr(0,1)=="n"?"":"italic")});x={fontAndVariations:g,data:c.css_name.split(" ").join("+")+":"+k.join(",")}}if(y=="webtype"&&(x={fontAndVariations:g,data:c.css_name+":"+c.variations.join(",")}),y=="typetoday"&&(x={fontAndVariations:g,data:c.css_name+":"+c.variations.join(",")}),y=="custom"){let k=m.default.findWhere(o.fonts,{provider:"custom",css_name:c.css_name});k&&k.css_url&&(x={fontAndVariations:g,data:{css_name:c.css_name,css_url:k.css_url,signed_css_url:k.signed_css_url}})}y=="typekit"&&(x={fontAndVariations:g,data:{id:c.css_name,variations:c.variations}}),x&&f[y].push(x)});let l=RM.screenshot&&J("pdf")=="true";l&&this.loadTypekitSubstitutionFonts(f.typekit);let n=m.default.has(f,"custom");m.default.each(f,function(c,y){let x=y=="custom"?1:y=="google"?22:c.length,g=Math.ceil(c.length/x),k,h,d,w,b,v,_=0;for(k=0;k<g;k++){let V=function(E){E.addClass("fonts").attr("data-id",D.generateUUID()).attr("data-provider",y).attr("data-fonts-and-variations",v.join("||"))};var N=V;if(h=k*x,d=Math.min((k+1)*x,c.length),w=c.slice(h,d),b=m.default.pluck(w,"data"),v=m.default.pluck(w,"fontAndVariations"),(0,S.default)("link, style").addClass("existing"),y=="google"){var F=(B.IS_FILE_PROTOCOL?"http://":"//")+"fonts.googleapis.com/css?family=",L=b.join("%7C"),T="&subset=latin,vietnamese,khmer,cyrillic-ext,greek-ext,greek,devanagari,latin-ext,cyrillic";u(F+L+T)}if(y=="typekit"){if(o.version=="edit"&&!l)try{window.TypekitPreview&&window.TypekitPreview.load(b)}catch{}o.version=="published"&&o.typekit_url&&(typeof Typekit<"u"&&(Typekit=void 0),(0,S.default)("style.typekit-kit").remove(),S.default.getScript(o.typekit_url,function(){try{Typekit.load({active:function(){let E=(0,S.default)("style").filter(function($,nt){return/typekit/i.test(nt.innerHTML)});E.addClass("typekit-kit"),V(E)}})}catch{}}))}let A=B.readymag_viewer_host;if(y=="webtype"){var F=RM.common.isDownloadedSource?A:"";if(!(0,S.default)('link.fonts[data-provider="webtype"]').length){var P=window.ServerData&&window.ServerData.fonts&&window.ServerData.fonts.webtype;u(F+P)}}if(y=="typetoday"&&!l){var F=RM.common.isDownloadedSource?A:"";if(!(0,S.default)('link.fonts[data-provider="typetoday"]').length){var P=window.ServerData&&window.ServerData.fonts&&window.ServerData.fonts.typetoday;u(F+P)}}if(y=="custom"){var C=b[0].signed_css_url||b[0].css_url;/^\/api\/fonts\//i.test(C)?function(){let E=(0,S.default)("<style>").attr("type","text/css");(0,S.default)("head").append(E),S.default.get(C,function($){E.text($),_++,_>=c.length&&m.default.isFunction(e)&&e()})}():u(C)}V((0,S.default)("link:not(.existing), style:not(.existing)")),(0,S.default)("link, style").removeClass("existing")}}),!n&&m.default.isFunction(e)&&e();function u(c){let y=(0,S.default)("<link>").attr("type","text/css").attr("rel","stylesheet").attr("href",c);(0,S.default)("head").append(y)}},getGoogleFontUrl:function(o){let e=[];for(let f of o){let r=f.name,t=f.variations.map(l=>(l.substr(1,1)-0)*100+(l.substr(0,1)==="n"?"":"italic")).join(",");e.push(`${r}:${t}`)}let i="https://fonts.googleapis.com/css?family=",a=e.join("%7C");return i+a+"&subset=latin,vietnamese,khmer,cyrillic-ext,greek-ext,greek,devanagari,latin-ext,cyrillic"},loadTypekitSubstitutionFonts:function(o){!o||!o.length||m.default.each(o,function(e){let i=e.data.id,a=m.default.findWhere(I.fontsShortList.typekit,{id:i});a=a&&a.browse_info,a=a&&a.classification;let s=a&&a.length&&a[0]||"sans-serif",p={"sans-serif":"news-gothic",decorative:"news-gothic",handmade:"news-gothic",blackletter:"news-gothic",script:"news-gothic","slab-serif":"news-gothic",serif:"georgia-pro",monospaced:"nitti"},f="template-export-pdf-typekit-substitution-"+(p[s]||p["sans-serif"]),r=Q[f],t=r({id:i});(0,S.default)("head").append(t)})},appendFontsCssToIFrame:function(o){let e=(0,S.default)("link.fonts, style.fonts"),i=(0,S.default)("link.fonts, style.fonts",o),a={},s=(0,S.default)("head",o);i.each(function(){a[(0,S.default)(this).attr("data-id")]=!0}),e.each(function(){let p=(0,S.default)(this),f=this.href;if(!a[p.attr("data-id")]){let r=p.clone();f&&Modernizr.safari&&r.attr("href",f+"&edit_mode=true"),r.appendTo(s)}})},isFastFontLoadCheckAvailable:function(){return!!(document.fonts&&window.Promise)},fastWaitForFontLoad:function(o,e,i){let a;if(document.fonts){let s=i+(e?" "+e:"")+" 12px "+o,p=(l,n)=>{for(let u of document.fonts)if(u.family===l)return u.loaded;return n>Date.now()-O?new Promise(u=>{setTimeout(()=>{u(p(l,n))},50)}):Promise.resolve(!1)},f=!document.fonts.check(s),r=K("viewer.enhancedFontLoadCheck")&&!f?document.fonts.load(s).then(()=>p(o,Date.now())):document.fonts.load(s).then(()=>document.fonts.check(s)?s:this.fontLoadedTimeoutCheck(s)),t=new window.Promise(function(l,n){setTimeout(n.bind(null,s),O)});a=window.Promise.race([r,t])}else a=window.Promise.reject();return a},exactWaitForFontLoad:function(o,e,i,a){let s=i+" "+e+" 12px "+o+", Arial",p=i+" "+e+" 12px Arial",f=20,r=20,t=(0,S.default)('<canvas width="'+f+'" height="'+r+'"></canvas>'),l=t[0],n=l.getContext("2d"),u="",c="",y=+new Date;t.appendTo("body").css({position:"absolute",left:0,top:"-999px"}),x();function x(){let k=+new Date-y>gt,h=g();if(h||k){n=void 0,t.remove(),a(h,o,e,i);return}setTimeout(x,tt)}function g(){let k=s;n.clearRect(0,0,f,r),u||(u=l.toDataURL("image/png"),k=p),n.font=k,n.fillStyle="000",n.fillText("a1-&q",0,20);let h=l.toDataURL("image/png");return c||(c=h),h!=u&&h!=c}},fontLoadedTimeoutCheck:function(o){let e=Date.now();var i=function(a,s){let p=Date.now()-e;document.fonts.check(o)?a(o):p<O?setTimeout(i.bind(null,a,s),tt):s(o)};return new window.Promise(function(a,s){i(a,s)})},getHotspotTextModels:function(o){let e=[];return o.widgets_collection&&o.widgets_collection.length?e=o.widgets_collection.filter(function(i){return i.get("type")==="text"&&(o.get?o.get("wids"):o.wids).indexOf(i.get("_id"))>-1}):o._nestedWidgetsJSON&&o._nestedWidgetsJSON.length?e=m.default.filter(o._nestedWidgetsJSON,function(i){return i.type==="text"}):o.wids&&o.wids.length&&(e=m.default.filter(o.wids,function(i){return i.type==="text"})),e},getUsedFontsFromWidgetsModels:function(o,e){let i={},a={},s={},p={},f={},r={},t={},l=o.models;function n(h,d){return typeof h.get=="function"?h.get(d):h[d]}let u={bold:700,normal:400};for(let h=0;h<l.length;h++){let d=l[h];if(n(d,"type")==="slideshow"){if(n(d,"version")===2){let w=n(d,"pictures");n(d,"theme_data").captions&&w?.length&&w.forEach(v=>{v.caption?.blocks&&m.default.extend(a,j(v.caption,o.activeViewports))})}else if(n(d,"text_style")){let w=n(d,"text_style"),b=w["font-family"];if(b){let v=w["font-style"]||"normal",_=w["font-weight"]||u.normal;a[b+"|"+v+"|"+_]=1}}}if(n(d,"type")==="button"){let w=n(d,"font-family");if(!n(d,"hidden")&&w){let b=n(d,"font-style")||"normal",v=n(d,"font-weight")||u.normal;s[w+"|"+b+"|"+v]=1}for(let b=0;b<M.viewports.length;b++){let v=d["viewport_"+M.viewports[b].name]||{},_=v["font-family"];if(_&&!v.hidden){let F=v["font-style"]||"normal",L=v["font-weight"]||u.normal;s[_+"|"+F+"|"+L]=1}}}if(n(d,"type")==="ecommercecart"){let w=n(d,"font-family");if(w){let v=n(d,"font-style")||"normal",_=n(d,"font-weight")||u.normal;f[w+"|"+v+"|"+_]=1}let b=n(d,"bar-font-family");if(b){let v=n(d,"bar-font-style")||"normal",_=n(d,"bar-font-weight")||u.normal;f[b+"|"+v+"|"+_]=1}}if(n(d,"type")==="addtocart"){let w=n(d,"font-family");if(w){let v=n(d,"font-style")||"normal",_=n(d,"font-weight")||u.normal;r[w+"|"+v+"|"+_]=1}let b=n(d,"attrs-font-family");if(b){let v=n(d,"attrs-font-style")||"normal",_=n(d,"attrs-font-weight")||u.normal;r[b+"|"+v+"|"+_]=1}}if(n(d,"type")==="form"){if(!n(d,"hidden")){let w=n(d,"style"),b=n(d,"style-"+w+"-fields")||{},{"font-family":v,"font-style":_="normal","font-weight":F=u.normal}=b;v&&(p[v+"|"+_+"|"+F]=1);let L=n(d,"style-"+w+"-button-default")||{},{"font-family":T,"font-style":P="normal","font-weight":C=u.normal}=L;T&&(T=T==="inherit"?v:T,P=P==="inherit"?_:P,C=C==="inherit"?F:C,p[T+"|"+P+"|"+C]=1)}for(let w=0;w<M.viewports.length;w++){let b=d["viewport_"+M.viewports[w].name];if(b&&!b.hidden){let v=b.style||n(d,"style"),_=b["style-"+v+"-fields"]||n(d,"style-"+v+"-fields")||{},{"font-family":F,"font-style":L="normal","font-weight":T=u.normal}=_;F&&(p[F+"|"+L+"|"+T]=1);let P=b["style-"+v+"-button-default"]||{},{"font-family":C,"font-style":N="normal","font-weight":A=u.normal}=P;C&&(C=C==="inherit"?F:C,N=N==="inherit"?L:N,A=A==="inherit"?T:A,p[C+"|"+N+"|"+A]=1)}}}if(n(d,"type")==="text"&&n(d,"version")===3){n(d,"hidden")||m.default.extend(i,j(d,o.activeViewports));for(let w=0;w<M.viewports.length;w++){let b=d["viewport_"+M.viewports[w].name];b&&!b.hidden&&m.default.extend(i,j({blocks:n(d,"blocks"),...b},o.activeViewports))}}if(n(d,"type")==="text"&&n(d,"text")&&n(d,"version")!==3&&m.default.extend(i,this.scanTextForFontsAndVariationsRaw(n(d,"text"),n(d,"version"),o.excludeUnusedDefault,o.activeViewports)),n(d,"type")==="hotspot"&&m.default.each(this.getHotspotTextModels(d),m.default.bind(function(w){n(w,"version")===3?m.default.extend(i,j(w,o.activeViewports)):n(w,"text")&&m.default.extend(i,this.scanTextForFontsAndVariationsRaw(n(w,"text"),n(w,"version"),o.excludeUnusedDefault))},this)),n(d,"type")==="video"){let w=typeof d.get=="function"&&d.attributes?d.attributes:d;X(w,(b={})=>{let v=b?.custom_controls??{},_=b?.controls_type,{type:F,fontFamily:L=R.fontFamily,fontStyle:T=R.fontStyle,fontWeight:P=R.fontWeight}=v;_==="custom"&&F==="Text"&&(t[L+"|"+T+"|"+P]=1)})}}let c=m.default.extend({},i,a,s,p,f,r,t),y={};if(o.onlyFontsNames){let h=[];return m.default.each(c,(d,w)=>{let b=w.split("|"),v=b[0];v&&h.push(v)}),h}m.default.each(c,function(h,d){let w=d.split("|"),b=w[0],v=w[1].toLowerCase(),_=w[2].toLowerCase(),F=_ in u?u[_]:_;y[b]=y[b]||[],y[b].push(F==="variable"?"v":(v==="italic"?"i":"n")+Math.floor(F/100))});let x=[],g,k=this;return m.default.each(y,function(h,d){(g=m.default.findWhere(e.webtype,{name:d}))?x.push({provider:"webtype",css_name:g.name,name:g.name,variations:g.variations,used_variations:k.calcBrowserUsedVariation(h,g.variations)}):(g=m.default.findWhere(e.typetoday,{name:d}))?x.push({provider:"typetoday",css_name:g.name,name:g.name,variations:g.variations,used_variations:k.calcBrowserUsedVariation(h,g.variations)}):(g=m.default.findWhere(e.google,{family:d}))?x.push({provider:"google",css_name:g.family,name:g.family,variations:g.variations,used_variations:k.calcBrowserUsedVariation(h,g.variations)}):(g=m.default.findWhere(e.typekit,{id:d}))?x.push({provider:"typekit",css_name:g.id,name:g.name,variations:g.variations,used_variations:k.calcBrowserUsedVariation(h,g.variations)}):o.includeCustom&&(g=m.default.findWhere(o.customList,{css_name:d}))&&x.push({provider:"custom",css_name:g.css_name,css_url:g.css_url,name:g.name,variations:g.variations,used_variations:k.calcBrowserUsedVariation(h,g.variations)})}),x.filter(h=>h.used_variations&&h.used_variations.length>0)},convertToFVD:function(o,e){let i=o==="italic"?"i":"n",a=!Number.isNaN(e)&&Number(e)>0?Math.floor(e/100):null;return i&&a?i+a:null},getStylesFromText3Model:function(o,e){function i(s,p){return typeof s.get=="function"?s.get(p):s[p]}let a=new Set;if(e==="link"&&i(o,"entityMap")){let s=i(o,"entityMap");m.default.isEmpty(s)||m.default.each(s,p=>{p.type==="LINK"&&p.data?.linkStyle&&a.add(p.data?.linkStyle)})}else if(i(o,"blocks")&&i(o,"blocksMeta")){let s=i(o,"blocks")||[],p=i(o,"blocksMeta");s.forEach(f=>{let t=(p?p.find(n=>n.key===f.key):f)?.data,l=e==="paragraph"?"textStyle":"listStyle";t?.[l]&&a.add(t[l])})}return a},getStylesFromText:function(o="",e){let i=new Set,a=e||RM.constructorRouter.workspace.mag.edit_params.get("paragraph_styles");if(o)for(let s=0;s<a.length;s++){let p=a[s];o.indexOf(p._name)>=0&&i.add(p)}return i},getUsedStylesFromWidgetsModels:function(o,e="paragraph",i=!1){let a=e==="paragraph"?RM.constructorRouter.workspace.mag.edit_params.get("paragraph_styles"):e==="list"?Y()?.project:[],s=new Set,p="";function f(r,t){return typeof r.get=="function"?r.get(t):r[t]}for(let r=0;r<o.length;r++){let t=o[r];if(f(t,"type")==="text"&&f(t,"version")===3){let l=this.getStylesFromText3Model(t,e);l.size&&l.forEach(n=>s.add(n)),M.viewports.forEach(n=>{let u=`viewport_${n.name}`;if(t[u]?.blocksMeta){let c=t[u].blocks||f(t,"blocks"),y=this.getStylesFromText3Model({...t[u],blocks:c},e);y.size&&y.forEach(x=>s.add(x))}})}if(!i&&f(t,"type")==="text"&&f(t,"version")!==3&&f(t,"text")&&(p+=f(t,"text")),f(t,"type")==="slideshow"&&f(t,"version")===2){let l=f(t,"pictures");l?.length&&l.forEach(n=>{if(n.caption?.blocks&&n.caption?.blocksMeta){let u=this.getStylesFromText3Model(n.caption,e);u.size&&u.forEach(c=>s.add(c))}})}f(t,"type")==="hotspot"&&m.default.each(this.getHotspotTextModels(t),l=>{if(f(l,"version")===3){let n=this.getStylesFromText3Model(l,e);n.size&&n.forEach(u=>s.add(u))}else!i&&f(l,"text")&&(p+=f(l,"text"))})}if(!i){let r=this.getStylesFromText(p,a);r.size&&r.forEach(t=>s.add(t))}return s},getUsedParagraphStylesFromWidgetsModels:function(o,e){let i="",a,s;for(a=0;a<o.length;a++)s=o[a],r(s,"type")=="text"&&r(s,"text")&&(i+=r(s,"text")),r(s,"type")=="hotspot"&&m.default.each(this.getHotspotTextModels(s),m.default.bind(function(t){i+=r(t,"text")||""},this));let p=[],f=e.edit_params.get("paragraph_styles");if(i)for(a=0;a<f.length;a++){let t=f[a];i.indexOf(t._name)>=0&&p.push(t)}function r(t,l){return typeof t.get=="function"?t.get(l):t[l]}return p},getUsedLinkStylesFromWidgetsModels:function(o,e){let i="",a,s;for(a=0;a<o.length;a++)s=o[a],r(s,"type")=="text"&&r(s,"text")&&(i+=r(s,"text")),r(s,"type")=="hotspot"&&m.default.each(this.getHotspotTextModels(s),m.default.bind(function(t){i+=r(t,"text")||""},this));let p=[],f=e.edit_params.get("link_styles");if(i)for(a=0;a<f.length;a++){let t=f[a];i.indexOf(t._name)>=0&&p.push(t)}function r(t,l){return typeof t.get=="function"?t.get(l):t[l]}return p},sortFontsByProvider(o){let e={custom:[],google:[],typekit:[],typetoday:[],webtype:[]};for(let i of o){let a=i.provider;e[a]=e[a]||[],i.provider==="custom"?e[a].push(i.css_name):e[a].push({id:i.css_name,variations:i.used_variations})}return{used_custom_fonts:e.custom,used_google_fonts:e.google,used_typekit_fonts:e.typekit,used_typetoday_fonts:e.typetoday,used_webtype_fonts:e.webtype}},scanTextForFontsAndVariationsRaw:function(o,e,i,a){let s={},p={},f=[],r=document.defaultView.getComputedStyle,t,l,n,u,c,y,x,g,k,h,d;for(t=0;t<M.viewports.length;t++)if(o.split("-"+M.viewports[t].name).length>1){if(a&&a.indexOf(M.viewports[t].name)===-1)continue;f.push(M.viewports[t].name)}n=(0,S.default)(".used-fonts-test"),n.length||(n=(0,S.default)("<div>").addClass("used-fonts-test").css({position:"absolute",display:"none !important",left:-9999,width:999}).appendTo("body")),n.removeClass("v1 v2").addClass("v"+(e||1)),l=n[0],l.innerHTML=o,y=l.querySelectorAll("span,p,a"),x=y.length,c=r(l,null);let w=c.fontFamily+"|"+c.fontStyle+"|"+c.fontWeight;s[w]=1;let b,v=!1,_=function(T){return m.default.findIndex(T.childNodes,function(P){return P.nodeType===Node.TEXT_NODE&&P.textContent.replace(/\r?\n/g,"").length})!==-1},F=m.default.filter(y,_);for(let T=0;T<F.length;T++)c=r(F[T],null),b=c.fontFamily+"|"+c.fontStyle+"|"+c.fontWeight,v=v||b===w,s[c.fontFamily+"|"+c.fontStyle+"|"+c.fontWeight]=1;let L=_(l);for(t=0;t<f.length;t++)if(h=f[t],h!="default"){for(u=0;u<x;u++)d=y[u],(g=d.getAttribute("data-style-"+h))&&(g=="empty"?d.removeAttribute("style"):d.setAttribute("style",g)),(k=d.getAttribute("data-class-"+h))&&(k=="empty"?d.removeAttribute("class"):d.setAttribute("class",k)),_(d)&&(c=r(d,null),b=c.fontFamily+"|"+c.fontStyle+"|"+c.fontWeight,v=v||b===w,s[b]=1);t<f.length-1&&(l.innerHTML=o,y=l.querySelectorAll("span,p,a"),x=y.length)}return i&&!v&&!L&&delete s[w],m.default.each(s,function(T,P){let C=P.split("|"),N=C[0],A=C[1].toLowerCase(),V=C[2].toLowerCase();N=N.split(",")[0],N=N.replace(/'|"/g,""),V=V.replace(/normal/g,"400"),V=V.replace(/regular/g,"400"),V=V.replace(/bold/g,"700"),p[N+"|"+A+"|"+V]=1}),p},calcBrowserUsedVariation:function(o,e){let i={};for(let u=0;u<o.length;u++){var a=o[u],s=a.substr(1,1),p=a.substr(0,1),f=99999,r="",t,l,n;for(let c=0;c<e.length;c++)t=e[c].substr(1,1)-0,l=e[c].substr(0,1),s<4&&(n=Math.abs(t-s)*10+(l==p?0:1e3)+(t<=s?0:100)),s>5&&(n=Math.abs(t-s)*10+(l==p?0:1e3)+(t>=s?0:100)),s==4&&(t==5?n=0+(l==p?0:1e3)+0:n=Math.abs(t-s)*10+(l==p?0:1e3)+(t<=s?0:100)),s==5&&(n=Math.abs(t-s)*10+(l==p?0:1e3)+(t<=s?0:100)),s==t&&p==l&&(n=0),n<f&&(f=n,r=e[c]);i[r]=1}return m.default.keys(i).filter(u=>!!u)},getVeryShortList:function(o){let e={google:[],typekit:[],webtype:[],typetoday:[]};return m.default.each(o,function(i){let a=i.provider,s;switch(a){case"google":s={provider:a,family:i.name,variations:i.variations};break;case"typekit":s={provider:a,id:i.css_name,name:i.name,variations:i.variations};break;case"webtype":s={provider:a,name:i.name,variations:i.variations};break;case"typetoday":s={provider:a,name:i.name,variations:i.variations};break}e[a]&&e[a].push(s)}),e},getCustomVariationNameByFVD:function(o,e){return(I.fontCustomVariationNames[o]||{})[e]},setShortList:function(o){I.fontsShortList=o||{},I.fontCustomVariationNames={},m.default.each(I.fontsShortList,function(e,i){m.default.each(e,function(a){if(a.custom_variation_names){let s;switch(i){case"google":s=a.family;break;case"typekit":case"webtype":case"typetoday":s=a.name;break}I.fontCustomVariationNames[s]=a.custom_variation_names}})})},preloadShortList:async function(){let o=new Date().toISOString().split("T")[0];try{let e=await(0,et.default)(`${B.fontslist_short}?timestamp=${o}`,{jsonpCallback:"callback",jsonpCallbackFunction:"fontsShortListCallback"}).then(i=>i.json());I.setShortList(e)}catch{console.error("Cannot preload fontslist")}}},Nt=I});export{Nt as a,ht as b};
