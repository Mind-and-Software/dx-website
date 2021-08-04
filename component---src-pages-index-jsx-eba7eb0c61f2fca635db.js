(self.webpackChunkdx_website=self.webpackChunkdx_website||[]).push([[230],{2450:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=m;var a=o(r(7294)),l=r(5444),n=o(r(5697)),i=r(9650);function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){var t=e.to,r=e.title,n=e.children,o=e.className,c=e.stripHash,u=void 0!==c&&c,m=e.gatsbyLinkProps,d=void 0===m?{}:m,p=e.onAnchorLinkClick,f=u?i.handleStrippedLinkClick:i.handleLinkClick,h=s(s({},d),{},{to:u?(0,i.stripHashedLocation)(t):t,onClick:function(e){return f(t,e,p)}});return r&&(h.title=r),o&&(h.className=o),a.default.createElement(l.Link,h,n||r)}m.propTypes={to:n.default.string.isRequired,title:n.default.string,className:n.default.string,stripHash:n.default.bool,gatsbyLinkProps:n.default.object,onAnchorLinkClick:n.default.func,children:n.default.node}},9869:function(e,t,r){"use strict";Object.defineProperty(t,"P",{enumerable:!0,get:function(){return a.AnchorLink}});var a=r(2450)},1121:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var a=r(7294),l=r(5444),n=r(8742),i=function(e){var t=e.to,r=e.imageData,i=e.alt;return a.createElement(l.Link,{to:t,"aria-label":"Preview picture of article: "+i},a.createElement(n.Z,{imageData:r,alt:i}))};i.defaultProps={imageData:"placeholder.png"};var o=i,c=function(e){var t=e.url,r=e.imageData;return a.createElement(l.Link,{to:t,"aria-label":"Picture of the author of this article","data-testid":"profilepic"},a.createElement(n.Z,{className:"profilePicture-module--profilePicture--3NqjX",imageData:r,alt:"Article preview profilepicture"}))};c.defaultProps={url:"/"};var s=c,u=r(8965),m=function(e){var t=e.name,r=e.url,n=e.credentials,i=e.image;return a.createElement("div",{className:"articlePreview-module--author-section--uPydT"},i&&a.createElement(s,{url:r,imageData:i.node.childImageSharp.gatsbyImageData}),a.createElement(l.Link,{to:r,"aria-label":"Link to user profile: "+t},n?t+",":t),n)},d=function(){return a.createElement("span",{className:"articlePreview-module--dot--2KcIv"},"•")},p=function(e){return e.length>100?"articlePreview-module--description-ellipsis--PfsCz":""},f=function(e){var t=e.articleUrl,r=e.previewImage,n=e.imageAlt,i=e.tags,c=e.title,s=e.type,f=e.readingTime,h=e.date,v=e.description,g=e.authorName,E=e.authorCredentials,P=e.authorImage,k=e.authorUrl;return a.createElement("div",{className:"articlePreview-module--article-preview--2fbNF","aria-label":"Article preview"},r&&a.createElement("div",{className:"articlePreview-module--image-link--18clN"},a.createElement(o,{to:t,imageData:r,alt:n})),a.createElement("div",{className:"articlePreview-module--info-section--19eNQ"},a.createElement("div",{className:"articlePreview-module--row-section--2xRiF"},function(e){return e.length>0?e.map((function(e){return a.createElement("div",{key:e},a.createElement(u.Z,{type:"link",action:"tags/"+e},e),a.createElement(d,null))})):""}(i),function(e){return e?a.createElement("div",{"aria-label":"Reading time of the article"},e+" read"):""}(f),f&&h&&a.createElement(d,null),h),a.createElement("div",null,a.createElement(l.Link,{to:t},a.createElement("h3",null,c)),a.createElement("div",{className:p(v)},v),s&&a.createElement("div",{className:"articlePreview-module--typeSection--2CDzW"},s),g&&a.createElement(m,{name:g,credentials:E,url:k,image:P}))))};f.defaultProps={previewImage:"",imageAlt:"",tags:[],type:"",readingTime:"",date:"",description:"",authorName:"",authorUrl:"/",authorImage:"",authorCredentials:""};var h=f},8742:function(e,t,r){"use strict";var a=r(7294),l=r(2407),n=function(e){var t=e.className,r=e.imageData,n=e.alt,i=(0,l.d)(r);return a.createElement(l.G,{className:t,image:i,alt:n})};n.defaultProps={imageData:"placeholder.png",className:""},t.Z=n},8965:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(7294),l=r(5444),n="tag-module--tag--2TGyQ",i=function(e){var t=e.children,r=e.type,i=e.action,o=(0,a.useState)(!1),c=o[0],s=o[1];return"link"===r?a.createElement(l.Link,{to:i,className:n,"aria-label":"Goto "+t},t):"toggle"===r?a.createElement("button",{type:"button",className:"tag-module--toggleTag--24ulh "+(c?"tag-module--toggleTag--active--267PV":"")+" ",onClick:function(){return s(!c)},"aria-label":"Toggle "+(c?"off":"on")+" filter for "+t+" "},t):a.createElement("span",{className:n},t)};i.defaultProps={action:"",type:""};var o=i},8524:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var a=r(7294),l=r(2963),n=r(9869),i=r(6838),o=r.n(i),c=r(8855),s=r.n(c),u="hero-module--anchor-link--1RRz_",m=function(){return a.createElement("section",{className:"hero-module--hero--38eV6","aria-label":"Hero",role:"banner"},a.createElement("div",{className:"hero-module--hero--left--2U_QF"},a.createElement("h1",null,"Welcome to Developer Experience Portal"),a.createElement("p",null,"“Developer Experience (DX) is the personal experience that software developers have with things and events they encounter in the context of development.”"),a.createElement("ul",{"aria-label":"Frontpage section",role:"navigation"},a.createElement("li",null,a.createElement(n.P,{to:"/#for-developers",title:"Grow as a developer",className:u,"aria-label":"Go to Grow as a developer",stripHash:!0}),a.createElement(s(),null)),a.createElement("li",null,a.createElement(n.P,{to:"/#for-managers",title:"Work better with developers",className:u,"aria-label":"Go to Work better with developers",stripHash:!0}),a.createElement(s(),null)),a.createElement("li",null,a.createElement(n.P,{to:"/#for-researchers",title:"Research developer experience",className:u,"aria-label":"Go to Research developer experience",stripHash:!0}),a.createElement(s(),null)))),a.createElement("div",{className:"hero-module--hero--right--2wwf6"},a.createElement(o(),{className:"hero-module--heroImage--lfXkz"})))},d=r(1121),p=r(5271),f="previewColumn-module--column-items--tI-_E",h=function(e){var t=e.columnPreviewData,r=e.header,l=e.className,n=e.pathPrefix;return a.createElement("div",{className:"previewColumn-module--preview-column--1bTyb"},r&&a.createElement("h2",null,r),a.createElement("ul",{className:l?f+" "+l:f},t.map((function(e,t){var r=e.frontmatter;return a.createElement("li",{key:t+"+"+r.title},a.createElement(d.Z,{title:r.title,tags:r.tags,articleUrl:n+"/"+r.slug,date:r.date,description:r.description,readingTime:r.readingTime,previewImage:r.featuredImage,authorName:r.authorName,authorCredentials:r.authorCredentials,authorUrl:r.authorUrl,authorImage:r.authorImage}))}))),r&&a.createElement("div",{className:"previewColumn-module--link-arrow--3a_74"},a.createElement(p.Z,{to:n,type:"secondary"},"More ",a.createElement("span",null,r))))};h.defaultProps={className:"",header:""};var v=h,g=r(4715),E=r.n(g),P="homePageSection-module--content-item--1lgJa",k=function(e){var t=e.featuredArticles,r=(e.featuredDiscussions,e.featuredTutorials),l=e.sectionId,n=e.targetGroup,i=e.title,o={develop:"homePageSection-module--developers--3-XzL",manage:"homePageSection-module--managers--1orUa",research:"homePageSection-module--researchers--3xZuw"};return a.createElement("section",{className:o[n]},a.createElement("div",{className:"homePageSection-module--title-section--1JkZ-"},a.createElement("h2",{id:l},i),a.createElement(E(),{className:"homePageSection-module--title-icon--3CvJu"})),a.createElement("div",{className:"homePageSection-module--content-section--6K6i6"},a.createElement(v,{columnPreviewData:r,header:"Tutorials",className:P,pathPrefix:"tutorials"}),a.createElement(v,{columnPreviewData:t,header:"Articles",className:P,pathPrefix:"articles"}),a.createElement(v,{columnPreviewData:r,header:"Tutorials again",className:P,pathPrefix:"tutorials"})))},b=function(e){var t=e.data,r=t.develop,n=t.manage,i=t.research,o=function(e,t){var r=e.group.filter((function(e){return e.nodes[0]?e.nodes[0].frontmatter.type===t:[]}));return r.length>0?r[0].nodes:r};return a.createElement(l.Z,null,a.createElement(m,null),a.createElement(k,{sectionId:"for-developers",featuredArticles:o(r,"Article"),featuredTutorials:o(r,"Tutorial"),featuredDiscussions:o(r,"Discussion"),title:"Grow as a developer",targetGroup:"develop"}),a.createElement(k,{sectionId:"for-managers",featuredArticles:o(n,"Article"),featuredTutorials:o(n,"Tutorial"),featuredDiscussions:o(n,"Discussion"),title:"Work better with developers",targetGroup:"manage"}),a.createElement(k,{sectionId:"for-researchers",featuredArticles:o(i,"Article"),featuredTutorials:o(i,"Tutorial"),featuredDiscussions:o(i,"Discussion"),title:"Research developer experience",targetGroup:"research"}))}},4715:function(e,t,r){var a=r(7294);function l(e){return a.createElement("svg",e,[a.createElement("circle",{cx:"30.9422",cy:"19.6415",r:"15.961",fill:"#EFAE98",key:0}),a.createElement("path",{d:"M4.70264 31.1558L14.1077 40.5609",stroke:"#222222",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",key:1}),a.createElement("path",{d:"M11.25 22.4227C11.0051 20.4309 11.2149 18.4095 11.8636 16.5104C12.5123 14.6114 13.583 12.8841 14.9953 11.4584C20.0649 6.33237 28.4125 6.2045 33.629 11.1811C35.6514 13.1084 37.0157 15.6237 37.5282 18.37C38.0408 21.1164 37.6755 23.9544 36.4844 26.4815C35.2932 29.0086 33.3366 31.0964 30.892 32.4489C28.4475 33.8015 25.6391 34.3499 22.8653 34.0165C22.258 33.9395 21.6411 34.0015 21.0613 34.1979C20.4815 34.3943 19.9539 34.7199 19.5185 35.1502L18.8103 35.8585C18.5608 36.1079 18.2225 36.248 17.8697 36.248C17.517 36.248 17.1787 36.1079 16.9292 35.8584L9.40513 28.3343C9.15569 28.0849 9.01556 27.7466 9.01556 27.3938C9.01555 27.0411 9.15568 26.7028 9.40511 26.4533L10.1141 25.7443C10.5431 25.3131 10.8684 24.79 11.0652 24.2145C11.262 23.639 11.3252 23.0262 11.25 22.4227V22.4227Z",stroke:"#222222",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",key:2}),a.createElement("path",{d:"M30.9592 16.2143C31.9141 17.5602 32.4274 19.1694 32.4285 20.8196C32.4295 22.4698 31.9181 24.0796 30.9649 25.4267",stroke:"#222222",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",key:3})])}l.defaultProps={width:"47",height:"46",viewBox:"0 0 47 46",fill:"none"},e.exports=l,l.default=l}}]);
//# sourceMappingURL=component---src-pages-index-jsx-eba7eb0c61f2fca635db.js.map