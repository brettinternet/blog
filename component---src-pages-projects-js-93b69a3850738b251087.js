(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return g});var r=n(154),a=n.n(r),o=n(152),i=n(0),l=n.n(i),c=n(182),d=n(160),m=n(190),u=n(156);function s(){var e=a()(["\n          padding-top: 0;\n          padding-bottom: 0;\n        "]);return s=function(){return e},e}function p(){var e=a()(["\n          padding-bottom: 0;\n        "]);return p=function(){return e},e}function h(){var e=a()(["\n    flex-direction: row;\n\n    & > div {\n      width: 50%;\n\n      &:first-child a {\n        margin-left: 0;\n      }\n\n      &:last-child a {\n        margin-right: 0;\n      }\n    }\n    \n    a {\n      margin: 1em;\n    }\n  "]);return h=function(){return e},e}t.default=function(e){var t=e.data,n=e.location,r=t.site.siteMetadata.projects,a=r&&r.length;return l.a.createElement(c.a,{headProps:{title:"projects",keywords:["projects","brettinternet","work"]},location:n},l.a.createElement(x,{thin:!0},l.a.createElement("h2",null,"Projects:")),l.a.createElement(b,null,l.a.createElement(f,null,a&&r.slice(0,2).map(function(e,t){return l.a.createElement("div",{key:t},l.a.createElement(m.a,e))})),a&&r.length>2&&l.a.createElement(f,null,a&&r.slice(2,4).map(function(e,t){return l.a.createElement("div",{key:t},l.a.createElement(m.a,e))}))))};var g="859827767",f=o.d.div.withConfig({displayName:"projects__Cards",componentId:"i2bhtp-0"})(["display:flex;flex-wrap:wrap;flex-direction:column;a{margin-top:1em;margin-bottom:1em;}",""],u.e.sm(h())),x=Object(o.d)(d.a)(p()),b=Object(o.d)(d.a)(s())},157:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(152),c=function(e){var t=e.className,n=e.style,r=e.children,o=e.themed,i=e.noBackground,l=e.textMuted,c=e.mRight,m=e.mBottom,u=e.noPadding;return a.a.createElement(d,{className:t,style:n,themed:o,noBackground:i,textMuted:l,mRight:c,mBottom:m,noPadding:u},a.a.createElement("span",null,r))};c.propTypes={style:i.a.object,themed:i.a.bool,noBackground:i.a.bool,textMuted:i.a.bool,mRight:i.a.string,mBottom:i.a.string},t.a=c;var d=l.d.span.withConfig({displayName:"Tag__StyledTag",componentId:"sc-1f7ugiv-0"})(["display:inline-flex;flex-direction:row;align-items:center;position:relative;border:none;border-radius:3px;box-shadow:none;background-color:",";min-width:20px;max-width:100%;min-height:20px;padding:",";line-height:16px;color:",";white-space:nowrap;margin-right:",";margin-bottom:",";font-size:11px;& > span{flex-grow:1;flex-shrink:1;}transition:background-color 150ms,color 150ms;&:hover{background-color:",";text-decoration:none;}&:active{background-color:",";}"],function(e){var t=e.noBackground,n=e.themed,r=e.theme;return t?"inherit":n?r.themeDarker:r.neutralLight},function(e){return e.noPadding?0:"2px 6px"},function(e){var t=e.textMuted,n=e.themed,r=e.theme;return t?r.neutralSecondary:n?r.white:r.black},function(e){var t=e.mRight;return t||"0px"},function(e){var t=e.mBottom;return t||"0px"},function(e){var t=e.noBackground,n=e.themed,r=e.theme;return t?"inherit":n?r.themeDark:r.neutralQuaternaryAlt},function(e){var t=e.noBackground,n=e.themed,r=e.theme;return t?"inherit":n?r.themeDarkAlt:r.neutralQuaternary})},190:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(152),c=n(155),d=n(157),m=n(156),u=function(e){var t=e.to,n=e.href,r=e.className,o=e.title,i=e.description,l=e.details,c=e.tags;return a.a.createElement(s,{to:t,href:n,className:r},a.a.createElement("div",null,o&&a.a.createElement("h3",null,o),i&&a.a.createElement("p",null,i),a.a.createElement(p,null,l&&a.a.createElement(h,null,l),c&&a.a.createElement(g,null,c.map(function(e){return a.a.createElement(d.a,{key:e,themed:!0},e)})))))};u.propTypes={title:i.a.string,to:i.a.string,href:i.a.string,className:i.a.string,description:i.a.string,details:i.a.string,tags:i.a.arrayOf(i.a.string)},t.a=u;var s=Object(l.d)(c.a).withConfig({displayName:"Card__RootA",componentId:"aoqtzt-0"})(["display:block;color:inherit;overflow:hidden;padding:2em;box-shadow:0 13px 27px -5px ",",0 8px 16px -8px rgba(0,0,0,0.3),0 -6px 16px -6px rgba(0,0,0,0.025);transform:translateY(0);border-radius:8px;transition:all 200ms;border:1px solid ",";h3{color:",";margin:0 0 0.5em 0;}p{color:",";font-size:15px;line-height:1.3;margin:0;}&:hover{text-decoration:none;transform:translateY(-2px);box-shadow:0 30px 60px -12px ",",0 18px 36px -18px rgba(0,0,0,0.3),0 -12px 36px -8px rgba(0,0,0,0.025);h3{text-decoration:underline;}p{text-decoration:none;}}"],function(e){return e.theme.neutralLighterAlt},function(e){return e.theme.neutralLighter},function(e){return e.theme.black},function(e){return e.theme.neutralSecondary},function(e){return e.theme.neutralLight}),p=l.d.div.withConfig({displayName:"Card__Flex",componentId:"aoqtzt-1"})(["margin-top:1.5em;display:flex;flex-direction:row;justify-content:space-between;align-items:center;"]),h=l.d.div.withConfig({displayName:"Card__Details",componentId:"aoqtzt-2"})(["color:",";font-size:11px;",";font-weight:400;"],function(e){return e.theme.neutralTertiary},m.h),g=l.d.div.withConfig({displayName:"Card__Tags",componentId:"aoqtzt-3"})(["& > span{margin:0.25em;}"])}}]);
//# sourceMappingURL=component---src-pages-projects-js-93b69a3850738b251087.js.map