_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n("nKUr"),r=n("q1tI"),o=n("YFqc"),i=n.n(o),c=n("wx14"),s=n("Ff2n"),u=n("rePB"),l=(n("17x9"),n("iuhU")),f=n("H2TA"),d=n("NqtD"),p=r.forwardRef((function(e,t){var n=e.classes,a=e.className,o=e.component,i=void 0===o?"div":o,u=e.disableGutters,f=void 0!==u&&u,p=e.fixed,v=void 0!==p&&p,b=e.maxWidth,h=void 0===b?"lg":b,m=Object(s.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return r.createElement(i,Object(c.a)({className:Object(l.a)(n.root,a,v&&n.fixed,f&&n.disableGutters,!1!==h&&n["maxWidth".concat(Object(d.a)(String(h)))]),ref:t},m))})),v=Object(f.a)((function(e){return{root:Object(u.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,n){var a=e.breakpoints.values[n];return 0!==a&&(t[e.breakpoints.up(n)]={maxWidth:a}),t}),{}),maxWidthXs:Object(u.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(u.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(u.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(u.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(u.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(p),b=n("ofer"),h=n("hlFM");function m(){return Object(a.jsx)(v,{maxWidth:"sm",children:Object(a.jsxs)(h.a,{my:4,children:[Object(a.jsx)(b.a,{variant:"h4",component:"h1",gutterBottom:!0,children:"Next.js Dynamic Content Tools v1.0"}),Object(a.jsx)(i.a,{href:"/bannerTest",children:"Banner Test"})]})})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("zoAU"),r=n("7KCV");t.__esModule=!0,t.default=void 0;var o=r(n("q1tI")),i=n("elyg"),c=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,a){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;u[t+"%"+n+(r?"%"+r:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),r=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,i.resolveHref)(r,e.href,!0),n=a(t,2),o=n[0],c=n[1];return{href:o,as:e.as?(0,i.resolveHref)(r,e.as):c||o}}),[r,e.href,e.as]),d=f.href,p=f.as,v=e.children,b=e.replace,h=e.shallow,m=e.scroll,g=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var x=o.Children.only(v),k=x&&"object"===typeof x&&x.ref,j=(0,s.useIntersection)({rootMargin:"200px"}),y=a(j,2),O=y[0],w=y[1],L=o.default.useCallback((function(e){O(e),k&&("function"===typeof k?k(e):"object"===typeof k&&(k.current=e))}),[k,O]);(0,o.useEffect)((function(){var e=w&&t&&(0,i.isLocalURL)(d),a="undefined"!==typeof g?g:n&&n.locale,r=u[d+"%"+p+(a?"%"+a:"")];e&&!r&&l(n,d,p,{locale:a})}),[p,d,w,g,t,n]);var _={ref:L,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,o,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:o,locale:s,scroll:c}))}(e,n,d,p,b,h,m,g)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};if(e.passHref||"a"===x.type&&!("href"in x.props)){var E="undefined"!==typeof g?g:n&&n.locale,M=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(p,E,n&&n.locales,n&&n.domainLocales);_.href=M||(0,i.addBasePath)((0,i.addLocale)(p,E,n&&n.defaultLocale))}return o.default.cloneElement(x,_)};t.default=f},vNVm:function(e,t,n){"use strict";var a=n("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,s=(0,r.useRef)(),u=(0,r.useState)(!1),l=a(u,2),f=l[0],d=l[1],p=(0,r.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var a=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var a=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:r,elements:a}),n}(n),r=a.id,o=a.observer,i=a.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),c.delete(r))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,r.useEffect)((function(){if(!i&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var r=n("q1tI"),o=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var c=new Map},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,3,2,4]]]);