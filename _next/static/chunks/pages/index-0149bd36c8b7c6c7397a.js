_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{RNiq:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return ee}));var o=t("nKUr"),n=t("q1tI"),a=t.n(n),i=t("YFqc"),p=t.n(i),c=t("wx14"),s=t("Ff2n"),l=t("rePB");t("17x9");function u(e){var r,t,o="";if("string"===typeof e||"number"===typeof e)o+=e;else if("object"===typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=u(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}var f=function(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=u(e))&&(o&&(o+=" "),o+=r);return o},d=t("H2TA"),h=t("TrhM");function m(e){if("string"!==typeof e)throw new Error(Object(h.a)(7));return e.charAt(0).toUpperCase()+e.slice(1)}var y=n.forwardRef((function(e,r){var t=e.classes,o=e.className,a=e.component,i=void 0===a?"div":a,p=e.disableGutters,l=void 0!==p&&p,u=e.fixed,d=void 0!==u&&u,h=e.maxWidth,y=void 0===h?"lg":h,g=Object(s.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return n.createElement(i,Object(c.a)({className:f(t.root,o,d&&t.fixed,l&&t.disableGutters,!1!==y&&t["maxWidth".concat(m(String(y)))]),ref:r},g))})),g=Object(d.a)((function(e){return{root:Object(l.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(r,t){var o=e.breakpoints.values[t];return 0!==o&&(r[e.breakpoints.up(t)]={maxWidth:o}),r}),{}),maxWidthXs:Object(l.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(l.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(l.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(l.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(l.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(y),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},v=n.forwardRef((function(e,r){var t=e.align,o=void 0===t?"inherit":t,a=e.classes,i=e.className,p=e.color,l=void 0===p?"initial":p,u=e.component,d=e.display,h=void 0===d?"initial":d,y=e.gutterBottom,g=void 0!==y&&y,v=e.noWrap,x=void 0!==v&&v,j=e.paragraph,O=void 0!==j&&j,w=e.variant,k=void 0===w?"body1":w,N=e.variantMapping,R=void 0===N?b:N,E=Object(s.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),T=u||(O?"p":R[k]||b[k])||"span";return n.createElement(T,Object(c.a)({className:f(a.root,i,"inherit"!==k&&a[k],"initial"!==l&&a["color".concat(m(l))],x&&a.noWrap,g&&a.gutterBottom,O&&a.paragraph,"inherit"!==o&&a["align".concat(m(o))],"initial"!==h&&a["display".concat(m(h))]),ref:r},E))})),x=Object(d.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(v),j=t("KQm4"),O=t("bv9d");var w=function(e){var r=function(r){var t=e(r);return r.css?Object(c.a)({},Object(O.a)(t,e(Object(c.a)({theme:r.theme},r.css))),function(e,r){var t={};return Object.keys(e).forEach((function(o){-1===r.indexOf(o)&&(t[o]=e[o])})),t}(r.css,[e.filterProps])):t};return r.propTypes={},r.filterProps=["css"].concat(Object(j.a)(e.filterProps)),r};var k=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var o=function(e){return r.reduce((function(r,t){var o=t(e);return o?Object(O.a)(r,o):r}),{})};return o.propTypes={},o.filterProps=r.reduce((function(e,r){return e.concat(r.filterProps)}),[]),o},N=t("LybE");function R(e,r){return r&&"string"===typeof r?r.split(".").reduce((function(e,r){return e&&e[r]?e[r]:null}),e):null}var E=function(e){var r=e.prop,t=e.cssProperty,o=void 0===t?e.prop:t,n=e.themeKey,a=e.transform,i=function(e){if(null==e[r])return null;var t=e[r],i=R(e.theme,n)||{};return Object(N.a)(e,t,(function(e){var r;return"function"===typeof i?r=i(e):Array.isArray(i)?r=i[e]||e:(r=R(i,e)||e,a&&(r=a(r))),!1===o?r:Object(l.a)({},o,r)}))};return i.propTypes={},i.filterProps=[r],i};function T(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var K=k(E({prop:"border",themeKey:"borders",transform:T}),E({prop:"borderTop",themeKey:"borders",transform:T}),E({prop:"borderRight",themeKey:"borders",transform:T}),E({prop:"borderBottom",themeKey:"borders",transform:T}),E({prop:"borderLeft",themeKey:"borders",transform:T}),E({prop:"borderColor",themeKey:"palette"}),E({prop:"borderRadius",themeKey:"shape"})),P=k(E({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),E({prop:"display"}),E({prop:"overflow"}),E({prop:"textOverflow"}),E({prop:"visibility"}),E({prop:"whiteSpace"})),W=k(E({prop:"flexBasis"}),E({prop:"flexDirection"}),E({prop:"flexWrap"}),E({prop:"justifyContent"}),E({prop:"alignItems"}),E({prop:"alignContent"}),E({prop:"order"}),E({prop:"flex"}),E({prop:"flexGrow"}),E({prop:"flexShrink"}),E({prop:"alignSelf"}),E({prop:"justifyItems"}),E({prop:"justifySelf"})),C=k(E({prop:"gridGap"}),E({prop:"gridColumnGap"}),E({prop:"gridRowGap"}),E({prop:"gridColumn"}),E({prop:"gridRow"}),E({prop:"gridAutoFlow"}),E({prop:"gridAutoColumns"}),E({prop:"gridAutoRows"}),E({prop:"gridTemplateColumns"}),E({prop:"gridTemplateRows"}),E({prop:"gridTemplateAreas"}),E({prop:"gridArea"})),L=k(E({prop:"position"}),E({prop:"zIndex",themeKey:"zIndex"}),E({prop:"top"}),E({prop:"right"}),E({prop:"bottom"}),E({prop:"left"})),A=k(E({prop:"color",themeKey:"palette"}),E({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),M=E({prop:"boxShadow",themeKey:"shadows"});function I(e){return e<=1?"".concat(100*e,"%"):e}var _=E({prop:"width",transform:I}),S=E({prop:"maxWidth",transform:I}),B=E({prop:"minWidth",transform:I}),z=E({prop:"height",transform:I}),q=E({prop:"maxHeight",transform:I}),G=E({prop:"minHeight",transform:I}),H=(E({prop:"size",cssProperty:"width",transform:I}),E({prop:"size",cssProperty:"height",transform:I}),k(_,S,B,z,q,G,E({prop:"boxSizing"}))),D=t("+Hmc"),U=k(E({prop:"fontFamily",themeKey:"typography"}),E({prop:"fontSize",themeKey:"typography"}),E({prop:"fontStyle",themeKey:"typography"}),E({prop:"fontWeight",themeKey:"typography"}),E({prop:"letterSpacing"}),E({prop:"lineHeight"}),E({prop:"textAlign"})),F=t("2mql"),J=t.n(F),X=t("RD7I");function V(e,r){var t={};return Object.keys(e).forEach((function(o){-1===r.indexOf(o)&&(t[o]=e[o])})),t}var Y=t("cNwE"),Q=function(e){var r=function(e){return function(r){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=o.name,i=Object(s.a)(o,["name"]),p=n,l="function"===typeof r?function(e){return{root:function(t){return r(Object(c.a)({theme:e},t))}}}:{root:r},u=Object(X.a)(l,Object(c.a)({Component:e,name:n||e.displayName,classNamePrefix:p},i));r.filterProps&&(t=r.filterProps,delete r.filterProps),r.propTypes&&(r.propTypes,delete r.propTypes);var d=a.a.forwardRef((function(r,o){var n=r.children,i=r.className,p=r.clone,l=r.component,d=Object(s.a)(r,["children","className","clone","component"]),h=u(r),m=f(h.root,i),y=d;if(t&&(y=V(y,t)),p)return a.a.cloneElement(n,Object(c.a)({className:f(n.props.className,m)},y));if("function"===typeof n)return n(Object(c.a)({className:m},y));var g=l||e;return a.a.createElement(g,Object(c.a)({ref:o,className:m},y),n)}));return J()(d,e),d}}(e);return function(e,t){return r(e,Object(c.a)({defaultTheme:Y.a},t))}},Z=w(k(K,P,W,C,L,A,M,H,D.b,U)),$=Q("div")(Z,{name:"MuiBox"});function ee(){return Object(o.jsx)(g,{maxWidth:"sm",children:Object(o.jsxs)($,{my:4,children:[Object(o.jsx)(x,{variant:"h4",component:"h1",gutterBottom:!0,children:"Next.js Dynamic Content Tools v1.0"}),Object(o.jsx)(p.a,{href:"/bannerTest",children:"Banner Test"})]})})}},YFqc:function(e,r,t){e.exports=t("cTJO")},cTJO:function(e,r,t){"use strict";var o=t("zoAU"),n=t("7KCV");r.__esModule=!0,r.default=void 0;var a=n(t("q1tI")),i=t("elyg"),p=t("nOHt"),c=t("vNVm"),s={};function l(e,r,t,o){if(e&&(0,i.isLocalURL)(r)){e.prefetch(r,t,o).catch((function(e){0}));var n=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;s[r+"%"+t+(n?"%"+n:"")]=!0}}var u=function(e){var r=!1!==e.prefetch,t=(0,p.useRouter)(),n=t&&t.pathname||"/",u=a.default.useMemo((function(){var r=(0,i.resolveHref)(n,e.href,!0),t=o(r,2),a=t[0],p=t[1];return{href:a,as:e.as?(0,i.resolveHref)(n,e.as):p||a}}),[n,e.href,e.as]),f=u.href,d=u.as,h=e.children,m=e.replace,y=e.shallow,g=e.scroll,b=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var v=a.Children.only(h),x=v&&"object"===typeof v&&v.ref,j=(0,c.useIntersection)({rootMargin:"200px"}),O=o(j,2),w=O[0],k=O[1],N=a.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);(0,a.useEffect)((function(){var e=k&&r&&(0,i.isLocalURL)(f),o="undefined"!==typeof b?b:t&&t.locale,n=s[f+"%"+d+(o?"%"+o:"")];e&&!n&&l(t,f,d,{locale:o})}),[d,f,k,b,r,t]);var R={ref:N,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,r,t,o,n,a,p,c){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(t))&&(e.preventDefault(),null==p&&(p=o.indexOf("#")<0),r[n?"replace":"push"](t,o,{shallow:a,locale:c,scroll:p}))}(e,t,f,d,m,y,g,b)},onMouseEnter:function(e){(0,i.isLocalURL)(f)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),l(t,f,d,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){var E="undefined"!==typeof b?b:t&&t.locale,T=t&&t.isLocaleDomain&&(0,i.getDomainLocale)(d,E,t&&t.locales,t&&t.domainLocales);R.href=T||(0,i.addBasePath)((0,i.addLocale)(d,E,t&&t.defaultLocale))}return a.default.cloneElement(v,R)};r.default=u},vNVm:function(e,r,t){"use strict";var o=t("zoAU");r.__esModule=!0,r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!i,c=(0,n.useRef)(),s=(0,n.useState)(!1),l=o(s,2),u=l[0],f=l[1],d=(0,n.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),t||u||e&&e.tagName&&(c.current=function(e,r,t){var o=function(e){var r=e.rootMargin||"",t=p.get(r);if(t)return t;var o=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return p.set(r,t={id:r,observer:n,elements:o}),t}(t),n=o.id,a=o.observer,i=o.elements;return i.set(e,r),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),p.delete(n))}}(e,(function(e){return e&&f(e)}),{rootMargin:r}))}),[t,r,u]);return(0,n.useEffect)((function(){if(!i&&!u){var e=(0,a.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[u]),[d,u]};var n=t("q1tI"),a=t("0G5g"),i="undefined"!==typeof IntersectionObserver;var p=new Map},vlRD:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,1,2,3]]]);