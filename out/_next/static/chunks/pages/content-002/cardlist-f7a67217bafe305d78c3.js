_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{uu3v:function(e,t,c){"use strict";c.r(t);var a=c("nKUr"),n=c("q1tI"),i=c("g4pe"),r=c.n(i),s=c("vsKb"),d=c("lopY"),o=c("hlFM"),m=c("ofer"),b=c("Ji2X"),p=c("tRbT"),j=c("tr08"),u=c("x6wa");t.default=function(){var e=Object(n.useState)([]),t=e[0],c=e[1],i=Object(n.useState)(!0),g=i[0],l=i[1],x=Object(j.a)(),h=Object(d.a)(x.breakpoints.up("lg"));return Object(n.useEffect)((function(){var e=Object(u.a)("content");e||(e="aa46ce0c-4eb3-4296-b35b-0d6eb57db8bf");var t="https://76c8qrrtiabd11ltobf89e71r.staging.bigcontent.io/content/id/".concat(e,"?depth=all&format=inlined");fetch(t).then((function(e){return e.json()})).then((function(e){c(e),l(!1),console.log("data",e)}))}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)(r.a,{children:Object(a.jsx)("title",{children:"Content-002 Cardlist Preview | Dynamic Content Preview"})}),g?Object(a.jsx)(o.a,{textAlign:"center",children:Object(a.jsx)(m.a,{variant:"body2",children:"Loading Content, please wait .."})}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(b.a,{fixed:!0,maxWidth:"xl",disableGutters:!0,children:Object(a.jsx)(o.a,{id:"fixedWidthWrapper",padding:"20px 0",children:Object(a.jsx)(p.a,{container:!0,justify:"center",className:h?"MuiGrid-spacing-xs-3 ":"MuiGrid-spacing-xs-1",children:t.content.cards.map((function(e,t){return Object(a.jsx)(s.a,{card:e},"card".concat(t))}))})})})})]})}},vEbl:function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/content-002/cardlist",function(){return c("uu3v")}])},vsKb:function(e,t,c){"use strict";var a=c("nKUr"),n=c("cpVT"),i=(c("q1tI"),c("lopY")),r=c("tRbT"),s=c("hlFM"),d=c("Z3vd"),o=c("R/WZ"),m=c("tr08"),b=Object(o.a)((function(e){var t;return{c002_card:{"& h5":{marginTop:"8px"},"& a":{textDecoration:"none"},"& img.cardImage_c002":(t={},Object(n.a)(t,e.breakpoints.up("sm"),{width:"162px"}),Object(n.a)(t,e.breakpoints.up("md"),{width:"174px"}),Object(n.a)(t,e.breakpoints.up("lg"),{width:"282px"}),Object(n.a)(t,e.breakpoints.up("xl"),{width:"322px"}),t)}}}));t.a=function(e){var t=e.card,c=b(),n=Object(m.a)(),o=t.cardImage.seoText?"/".concat(t.cardImage.seoText):"",p=t.cardImage.ttemplate?"&$".concat(t.cardImage.ttemplate,"$"):"",j=Object(i.a)(n.breakpoints.down("md"));return Object(a.jsx)(r.a,{item:!0,sm:6,md:3,className:c.c002_card,children:t.cardBtnLink&&Object(a.jsxs)("a",{href:t.cardBtnLink,children:[Object(a.jsxs)(s.a,{position:"relative",children:[Object(a.jsxs)("picture",{children:[Object(a.jsx)("source",{type:"image/webp",media:"(min-width: 1920px)",srcSet:"https://images.dfs.co.uk/i/dfs/".concat(t.cardImage.image.name).concat(o,"?w=322&fmt.jpeg.interlaced=true&fmt=webp").concat(p)}),Object(a.jsx)("source",{type:"image/webp",media:"(min-width: 1400px)",srcSet:"https://images.dfs.co.uk/i/dfs/".concat(t.cardImage.image.name).concat(o,"?w=282&fmt.jpeg.interlaced=true&fmt=webp").concat(p)}),Object(a.jsx)("source",{type:"image/webp",media:"(min-width: 768px)",srcSet:"https://images.dfs.co.uk/i/dfs/".concat(t.cardImage.image.name).concat(o,"?w=174&fmt.jpeg.interlaced=true&fmt=webp").concat(p)}),Object(a.jsx)("source",{type:"image/webp",media:"(max-width: 767px)",srcSet:"https://images.dfs.co.uk/i/dfs/".concat(t.cardImage.image.name).concat(o,"?w=162&fmt.jpeg.interlaced=true&fmt=webp").concat(p)}),Object(a.jsx)("source",{media:"(min-width: 1920px)",srcSet:"https://images.dfs.co.uk/i/dfs/".concat(t.cardImage.image.name).concat(o,"?w=322").concat(p)}),Object(a.jsx)("source",{media:"(min-width: 1400px)",srcSet:"https://images.dfs.co.uk/i/dfs/".concat(t.cardImage.image.name).concat(o,"?w=282").concat(p)}),Object(a.jsx)("source",{media:"(min-width: 768px)",srcSet:"https://images.dfs.co.uk/i/dfs/".concat(t.cardImage.image.name).concat(o,"?w=174").concat(p)}),Object(a.jsx)("source",{media:"(max-width: 767px)",srcSet:"https://images.dfs.co.uk/i/dfs/".concat(t.cardImage.image.name).concat(o,"?w=162").concat(p)}),Object(a.jsx)("img",{className:"cardImage_c002",src:"https://images.dfs.co.uk/i/dfs/".concat(t.cardImage.image.name).concat(o,"?w=322").concat(p),alt:t.cardImage.imageAltText||"DFS content card image"})]}),t.roundel&&Object(a.jsx)(s.a,{className:"RoundelImg",children:Object(a.jsx)("img",{className:"cardRoundel rdl_".concat(t.roundel.roundelPosition),src:"https://dfs.a.bigcontent.io/v1/static/".concat(t.roundel.roundel.name),width:j?"".concat(t.roundel.roundelSize,"%"):"auto"})})]}),t.cardHeading?Object(a.jsx)("h3",{children:t.cardHeading}):Object(a.jsx)(s.a,{m:2}),t.buttonType&&Object(a.jsx)(d.a,{variant:t.buttonType,color:t.buttonColour,href:t.cardBtnLink,children:t.cardBtnText})]})})}}},[["vEbl",0,1,2,3,4,5]]]);