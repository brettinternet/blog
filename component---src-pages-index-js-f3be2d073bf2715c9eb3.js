(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return j});var a=n(154),r=n.n(a),o=n(152),i=(n(183),n(0)),l=n.n(i),c=n(182),d=n(160),m=n(155),s=n(190),u=n(161),p=n(156),g=n(215),f=n.n(g),h=n(216),v=n.n(h),x=n(186),w=n.n(x),b=n(217),E=n.n(b),y=n(218);function k(){var e=r()(["\n          padding-top: 0;\n        "]);return k=function(){return e},e}function C(){var e=r()(["\n          padding-bottom: 0;\n        "]);return C=function(){return e},e}function _(){var e=r()(["\n          padding-top: 0;\n          padding-bottom: 0;\n        "]);return _=function(){return e},e}function z(){var e=r()(["\n          padding-bottom: 0;\n        "]);return z=function(){return e},e}function N(){var e=r()(["\n            margin-top: 0;\n          "]);return N=function(){return e},e}function B(){var e=r()(["\n    flex-direction: row;\n\n    & > div {\n      width: 50%;\n\n      &:first-child a {\n        margin-left: 0;\n      }\n\n      &:last-child a {\n        margin-right: 0;\n      }\n    }\n    \n    a {\n      margin: 1em;\n    }\n  "]);return B=function(){return e},e}var I={linkedin:n.n(y).a,github:f.a,twitter:w.a,instagram:v.a,keybase:E.a};t.default=function(e){var t=e.data,n=e.location,a=t.site.siteMetadata,r=a.postBasePath,o=a.projects,i=a.socialLinks,p=t.allMarkdownRemark.edges.slice(0,2);return l.a.createElement(c.a,{headProps:{title:"about",keywords:["about","brettinternet","brettgardiner"]},location:n},l.a.createElement(d.a,{thin:!0},l.a.createElement(L,null,"Hi! I'm Brett"," ",l.a.createElement("span",{role:"img","aria-label":"hand wave"},"👋")),l.a.createElement(P,null,"I thrive on finding better solutions to challenging tasks and learning new technologies. Whether science, tech, or dinner table discussion, I enjoy dissecting, improving, and creating."),l.a.createElement(P,null,"I am passionate about solving problems through software. I enjoy collaborating with other productive individuals and teams where I can grow and add value.")),l.a.createElement(d.a,{skinny:!0,noPadding:!0},l.a.createElement(M,null,i.map(function(e,t){var n=e.href,a=e.name,r=I[a];return l.a.createElement("li",{key:t},l.a.createElement(m.a,{href:n},l.a.createElement(r,{height:"20"})))}))),l.a.createElement(A,{thin:!0},l.a.createElement("h3",null,"Featured projects:")),l.a.createElement(R,null,l.a.createElement(O,null,o.slice(0,2).map(function(e,t){return l.a.createElement("div",{key:t},l.a.createElement(s.a,e))})),l.a.createElement(T,null,l.a.createElement(u.a,{dir:"forward",to:"/projects"},"Browse"))),l.a.createElement(H,{thin:!0},l.a.createElement("h3",null,"Recent blog posts:")),l.a.createElement(S,null,l.a.createElement(O,null,p.map(function(e){var t=e.node,n=(r||"")+t.fields.slug;return l.a.createElement("div",{key:t.fields.slug},l.a.createElement(s.a,{to:n,title:t.frontmatter.title||t.fields.slug,description:t.frontmatter.description||t.excerpt,details:t.frontmatter.date,tags:t.frontmatter.tags}))})),l.a.createElement(T,null,l.a.createElement(u.a,{dir:"forward",to:"/blog"},"View more"))))};var j="1880996449",M=o.d.ul.withConfig({displayName:"pages__Ul",componentId:"ia64nm-0"})(["list-style:none;padding:0;width:100%;text-align:center;li{display:inline-block;a{padding:0.5rem;&:hover{color:",";svg{transform:translateY(-1px);}}svg{fill:currentColor;transition:transform 200ms;transform:translateY(0);}}}"],function(e){return e.theme.neutralPrimary}),P=o.d.p.withConfig({displayName:"pages__P",componentId:"ia64nm-1"})(["line-height:1.6;font-weight:400;"]),O=o.d.div.withConfig({displayName:"pages__Cards",componentId:"ia64nm-2"})(["display:flex;flex-wrap:wrap;flex-direction:column;a{margin-top:1em;margin-bottom:1em;}",""],p.e.sm(B())),T=o.d.div.withConfig({displayName:"pages__CTAWrapper",componentId:"ia64nm-3"})(["text-align:center;margin:1em;"]),L=Object(o.d)("h1")(N()),A=Object(o.d)(d.a)(z()),R=Object(o.d)(d.a)(_()),H=Object(o.d)(d.a)(C()),S=Object(o.d)(d.a)(k())},157:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(152),c=function(e){var t=e.className,n=e.style,a=e.children,o=e.themed,i=e.noBackground,l=e.textMuted,c=e.mRight,m=e.mBottom,s=e.noPadding;return r.a.createElement(d,{className:t,style:n,themed:o,noBackground:i,textMuted:l,mRight:c,mBottom:m,noPadding:s},r.a.createElement("span",null,a))};c.propTypes={style:i.a.object,themed:i.a.bool,noBackground:i.a.bool,textMuted:i.a.bool,mRight:i.a.string,mBottom:i.a.string},t.a=c;var d=l.d.span.withConfig({displayName:"Tag__StyledTag",componentId:"sc-1f7ugiv-0"})(["display:inline-flex;flex-direction:row;align-items:center;position:relative;border:none;border-radius:3px;box-shadow:none;background-color:",";min-width:20px;max-width:100%;min-height:20px;padding:",";line-height:16px;color:",";white-space:nowrap;margin-right:",";margin-bottom:",";font-size:11px;& > span{flex-grow:1;flex-shrink:1;}transition:background-color 150ms,color 150ms;&:hover{background-color:",";text-decoration:none;}&:active{background-color:",";}"],function(e){var t=e.noBackground,n=e.themed,a=e.theme;return t?"inherit":n?a.themeDarker:a.neutralLight},function(e){return e.noPadding?0:"2px 6px"},function(e){var t=e.textMuted,n=e.themed,a=e.theme;return t?a.neutralSecondary:n?a.white:a.black},function(e){var t=e.mRight;return t||"0px"},function(e){var t=e.mBottom;return t||"0px"},function(e){var t=e.noBackground,n=e.themed,a=e.theme;return t?"inherit":n?a.themeDark:a.neutralQuaternaryAlt},function(e){var t=e.noBackground,n=e.themed,a=e.theme;return t?"inherit":n?a.themeDarkAlt:a.neutralQuaternary})},161:function(e,t,n){"use strict";var a=n(154),r=n.n(a),o=n(74),i=n.n(o),l=n(152),c=(n(183),n(0)),d=n.n(c),m=n(4),s=n.n(m),u=n(155);function p(){var e=r()(["",""]);return p=function(){return e},e}var g=function(e){var t=e.dir,n=e.to,a=e.href,r=e.children,o=e.name,i=e.className,l=e.css,c="forward"===t,m="backward"===t;return d.a.createElement(E,{to:n,href:a,className:i,_css:l},t&&m&&d.a.createElement(v,{role:"img","aria-label":"back arrow"},"⬅"),d.a.createElement(x,null,o||r),t&&c&&d.a.createElement(v,{role:"img","aria-label":"forward arrow"},"➡"))},f=function(e){var t=e.buttons,n=i()(e,["buttons"]);return t&&t.length?d.a.createElement(w,null,t.map(function(e,t){return d.a.createElement("li",{key:t},d.a.createElement(g,e))})):d.a.createElement(g,n)},h=s.a.shape({dir:s.a.oneOf(["forward","backward"])});f.propTypes={buttons:s.a.arrayOf(h)},t.a=f;var v=l.d.span.withConfig({displayName:"NavButton__Arrow",componentId:"sc-1fj35xs-0"})(["text-decoration:none;"]),x=l.d.span.withConfig({displayName:"NavButton__ButtonText",componentId:"sc-1fj35xs-1"})(["margin:0 0.25em;"]),w=l.d.ul.withConfig({displayName:"NavButton__Nav",componentId:"sc-1fj35xs-2"})(["font-size:13px;text-align:center;list-style:none;padding:0;"]),b=Object(l.d)(u.a).withConfig({displayName:"NavButton__StyledA",componentId:"sc-1fj35xs-3"})(["padding:0.25em;text-decoration:none;font-size:15px;&:hover{text-decoration:none;","{margin:0 0.75em;transition:margin 0.2s;text-decoration:underline;}}"],x),E=Object(l.d)(b)(p(),function(e){return e._css})},186:function(e,t,n){var a=n(0);function r(e){return a.createElement("svg",e,[a.createElement("title",{key:0},"Twitter icon"),a.createElement("path",{d:"M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z",key:1})])}r.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=r,r.default=r},190:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(152),c=n(155),d=n(157),m=n(156),s=function(e){var t=e.to,n=e.href,a=e.className,o=e.title,i=e.description,l=e.details,c=e.tags;return r.a.createElement(u,{to:t,href:n,className:a},r.a.createElement("div",null,o&&r.a.createElement("h3",null,o),i&&r.a.createElement("p",null,i),r.a.createElement(p,null,l&&r.a.createElement(g,null,l),c&&r.a.createElement(f,null,c.map(function(e){return r.a.createElement(d.a,{key:e,themed:!0},e)})))))};s.propTypes={title:i.a.string,to:i.a.string,href:i.a.string,className:i.a.string,description:i.a.string,details:i.a.string,tags:i.a.arrayOf(i.a.string)},t.a=s;var u=Object(l.d)(c.a).withConfig({displayName:"Card__RootA",componentId:"aoqtzt-0"})(["display:block;color:inherit;overflow:hidden;padding:2em;box-shadow:0 13px 27px -5px ",",0 8px 16px -8px rgba(0,0,0,0.3),0 -6px 16px -6px rgba(0,0,0,0.025);transform:translateY(0);border-radius:8px;transition:all 200ms;border:1px solid ",";h3{color:",";margin:0 0 0.5em 0;}p{color:",";font-size:15px;line-height:1.3;margin:0;}&:hover{text-decoration:none;transform:translateY(-2px);box-shadow:0 30px 60px -12px ",",0 18px 36px -18px rgba(0,0,0,0.3),0 -12px 36px -8px rgba(0,0,0,0.025);h3{text-decoration:underline;}p{text-decoration:none;}}"],function(e){return e.theme.neutralLighterAlt},function(e){return e.theme.neutralLighter},function(e){return e.theme.black},function(e){return e.theme.neutralSecondary},function(e){return e.theme.neutralLight}),p=l.d.div.withConfig({displayName:"Card__Flex",componentId:"aoqtzt-1"})(["margin-top:1.5em;display:flex;flex-direction:row;justify-content:space-between;align-items:center;"]),g=l.d.div.withConfig({displayName:"Card__Details",componentId:"aoqtzt-2"})(["color:",";font-size:11px;",";font-weight:400;"],function(e){return e.theme.neutralTertiary},m.h),f=l.d.div.withConfig({displayName:"Card__Tags",componentId:"aoqtzt-3"})(["& > span{margin:0.25em;}"])},215:function(e,t,n){var a=n(0);function r(e){return a.createElement("svg",e,[a.createElement("title",{key:0},"GitHub icon"),a.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",key:1})])}r.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=r,r.default=r},216:function(e,t,n){var a=n(0);function r(e){return a.createElement("svg",e,[a.createElement("title",{key:0},"Instagram icon"),a.createElement("path",{d:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",key:1})])}r.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=r,r.default=r},217:function(e,t,n){var a=n(0);function r(e){return a.createElement("svg",e,[a.createElement("title",{key:0},"Keybase icon"),a.createElement("path",{d:"M10.446 21.371c0 .528-.428.953-.954.953-.525 0-.954-.425-.954-.953 0-.526.428-.954.953-.954.524 0 .951.431.951.955m5.922-.001c0 .528-.428.953-.955.953-.526 0-.952-.425-.952-.953 0-.526.423-.954.949-.954s.954.431.954.955",key:1}),a.createElement("path",{d:"M20.904 12.213l-.156-.204c-.046-.06-.096-.116-.143-.175-.045-.061-.094-.113-.141-.169-.104-.12-.209-.239-.319-.359l-.076-.08-.091-.099-.135-.131c-.015-.018-.032-.034-.05-.053-1.16-1.139-2.505-1.986-3.955-2.504l-.23-.078c.012-.027.024-.055.035-.083.41-1.064.367-2.223-.12-3.255-.491-1.035-1.356-1.8-2.438-2.16-.656-.216-1.23-.319-1.711-.305-.033-.105-.1-.577.496-1.848L10.663 0l-.287.399c-.33.455-.648.895-.945 1.328-.328-.345-.766-.552-1.245-.58L6.79 1.061h-.012c-.033-.003-.07-.003-.104-.003-.99 0-1.81.771-1.87 1.755l-.088 1.402v.003c-.061 1.029.727 1.915 1.755 1.979l1.002.061c-.065.84.073 1.62.405 2.306-1.346.562-2.586 1.401-3.66 2.484C.913 14.391.913 18.051.913 20.994v1.775l1.305-1.387c.266.93.652 1.807 1.145 2.615H5.06c-.833-1.114-1.419-2.426-1.68-3.848l1.913-2.03-.985 3.091 1.74-1.268c3.075-2.234 6.744-2.75 10.91-1.529 1.805.532 3.56.039 4.473-1.257l.104-.165c.091.498.141.998.141 1.496 0 1.563-.255 3.687-1.38 5.512h1.611c.776-1.563 1.181-3.432 1.181-5.512-.001-2.199-.786-4.421-2.184-6.274zM8.894 6.191c.123-1.002.578-1.949 1.23-2.97.025.05.054.097.084.144.264.398.713.625 1.199.605.217-.008.605.025 1.233.232.714.236 1.286.744 1.608 1.425s.349 1.442.079 2.149c-.173.445-.454.82-.806 1.109l-.408-.502-.002-.003c-.279-.341-.694-.535-1.134-.535-.335 0-.664.117-.925.33-.334.27-.514.66-.534 1.058-1.2-.541-1.8-1.643-1.628-3.041l.004-.001zm4.304 5.11l-.519.425c-.046.036-.095.053-.146.053-.066 0-.133-.03-.177-.085l-.111-.135c-.083-.1-.067-.25.034-.334l.51-.42-1.055-1.299c-.109-.133-.091-.33.044-.436.058-.048.126-.072.194-.072.091 0 .181.038.24.113l2.963 3.645c.109.135.09.33-.042.436-.039.029-.082.053-.126.063-.023.006-.045.009-.07.009-.09 0-.178-.04-.24-.113l-.295-.365-1.045.854c-.046.037-.1.055-.154.055-.068 0-.139-.03-.186-.09l-.477-.579c-.082-.102-.068-.252.035-.336l1.051-.857-.426-.533-.002.001zM7.753 4.866l-1.196-.075c-.255-.015-.45-.235-.435-.488l.09-1.401c.014-.245.216-.436.461-.436h.024l1.401.091c.123.006.236.06.317.152.083.094.123.21.116.336l-.007.101c-.32.567-.585 1.134-.773 1.72h.002zm12.524 11.481c-.565.805-1.687 1.081-2.924.718-3.886-1.141-7.396-.903-10.468.701l1.636-5.123-5.291 5.609c.099-3.762 2.453-6.966 5.758-8.311.471.373 1.034.66 1.673.841.16.044.322.074.48.102-.183.458-.119.997.21 1.407l.075.09c-.172.45-.105.975.221 1.374l.475.582c.266.325.659.513 1.079.513.321 0 .635-.111.886-.314l.285-.232c.174.074.367.113.566.113.113 0 .222-.01.33-.035.218-.05.424-.15.598-.291.623-.51.72-1.435.209-2.06l-1.67-2.056c.145-.117.281-.244.408-.381.135.037.271.078.4.12.266.097.533.198.795.315 1.005.445 1.954 1.1 2.771 1.897.029.03.059.055.085.083l.17.175c.038.039.076.079.111.12.079.085.16.175.239.267l.126.15c.045.053.086.104.13.16l.114.15c.04.051.079.102.117.154.838 1.149.987 2.329.404 3.157v.005z",key:2}),a.createElement("path",{d:"M7.719 4.115l-.835-.051.053-.835.834.051-.052.835z",key:3})])}r.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=r,r.default=r},218:function(e,t,n){var a=n(0);function r(e){return a.createElement("svg",e,[a.createElement("title",{key:0},"LinkedIn icon"),a.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",key:1})])}r.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-pages-index-js-f3be2d073bf2715c9eb3.js.map