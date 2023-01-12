"use strict";(self.webpackChunkdx_website=self.webpackChunkdx_website||[]).push([[366],{1121:function(e,t,a){a.d(t,{Z:function(){return g}});var l=a(7294),r=a(5444),n=a(8742),i=function(e){var t=e.to,a=e.imageData,i=e.alt;return l.createElement(r.Link,{to:t,"aria-label":"Preview picture of article: "+i},l.createElement(n.Z,{imageData:a,alt:i}))};i.defaultProps={imageData:"placeholder.png"};var c=i,m=function(e){var t=e.url,a=e.imageData;return l.createElement(r.Link,{to:t,"aria-label":"Picture of the author of this article","data-testid":"profilepic"},l.createElement(n.Z,{className:"profilePicture-module--profilePicture--tkpBk",imageData:a,alt:"Article preview profilepicture"}))};m.defaultProps={url:"/"};var o=a(8965),u=function(e){var t=e.name,a=(e.url,e.credentials);e.image;return l.createElement("div",{className:"articlePreview-module--author-section--W456o"},l.createElement("span",{className:"articlePreview-module--author--jpiFz"},a?t+",":t),a)};u.defaultProps={url:"",image:"",credentials:""};var s=function(){return l.createElement("span",{className:"articlePreview-module--dot--jtaR3"},"•")},d=function(e){var t=e.articleUrl,a=e.previewImage,n=e.imageAlt,i=e.tags,m=e.title,d=e.type,g=e.readingTime,p=e.date,v=e.description,f=e.authorName,E=e.authorCredentials,h=e.authorImage,N=e.authorUrl;return l.createElement("div",{className:"articlePreview-module--article-preview--NS0ot","aria-label":"Article preview","data-test-id":"articlePreview"},a&&l.createElement("div",{className:"articlePreview-module--image-link--bhvLA"},l.createElement(c,{to:t,imageData:a.childImageSharp.gatsbyImageData,alt:n})),l.createElement("div",{className:"articlePreview-module--info-section--hseUh"},l.createElement("div",{className:"articlePreview-module--row-section--vAl-v"},function(e){return e&&e.length>0?e.map((function(e){return l.createElement("div",{key:e},l.createElement(o.Z,{type:"link",action:"/tags/"+e},e),l.createElement(s,null))})):""}(i),function(e){return e?l.createElement("div",{"aria-label":"Reading time of the article"},e+" min read"):""}(g),g&&p&&l.createElement(s,null),p),l.createElement("div",null,l.createElement(r.Link,{to:t},l.createElement("h4",null,m)),l.createElement("div",{className:"articlePreview-module--description-section--O-ee5"},v),d&&l.createElement("div",{className:"articlePreview-module--typeSection--iBdJG"},d),f&&l.createElement(u,{name:f,credentials:E,url:N,image:h}))))};d.defaultProps={previewImage:"",tags:[],type:"",readingTime:"",date:"",description:"",authorName:"",authorUrl:"/",authorImage:"",authorCredentials:"",imageAlt:""};var g=d},7927:function(e,t,a){a.d(t,{Z:function(){return n}});var l=a(7294),r=function(e){var t=e.children;return""===t||null==t?"":l.createElement("aside",{className:"blurb-module--blurb--X5110","aria-label":"Text Blurb"},t)};r.defaultProps={children:""};var n=r},8742:function(e,t,a){var l=a(7294),r=a(6125),n=function(e){var t=e.className,a=e.imageData,n=e.alt,i=(0,r.d)(a);return l.createElement(r.G,{className:t,image:i,alt:n})};n.defaultProps={imageData:"placeholder.png",className:""},t.Z=n},3304:function(e,t,a){a.d(t,{Z:function(){return i}});var l=a(7294),r=a(1121),n=function(e){var t=e.contentList,a=e.title;return l.createElement("aside",{className:"relatedContent-module--related-content--jORqn",role:"complementary"},l.createElement("h2",null,a),l.createElement("ul",{className:"relatedContent-module--content-previews--8HdOW"},t&&t.map((function(e){var t,a=e.node.frontmatter,n=e.node.fields.slug;return l.createElement("li",{className:"relatedContent-module--content-item--lnwwD",key:a.title},l.createElement(r.Z,((t={articleUrl:n,imageAlt:a.imageAlt,previewImage:a.featuredImage,title:a.title,tags:a.tags,readingTime:a.readingTime,date:a.date,description:a.description,author:a.author,authorImage:a.authorImage,authorCredentials:a.authorCredentials}).authorImage=a.authorImage,t)))}))))};n.defaultProps={title:""};var i=n},8965:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(7294),r=a(5444),n="tag-module--tag--4vrlp",i=function(e){var t=e.children,a=e.type,i=e.action,c=e.handleToggle,m=e.isActive,o=e.wide,u=(0,l.useRef)(null);return"link"===a?l.createElement(r.Link,{to:i,className:n,"aria-label":"Goto "+t},t):"toggle"===a?l.createElement("button",{type:"button",ref:u,className:"tag-module--toggleTag--oYmNk "+(m?"tag-module--toggleTag--active--xlkRB":"")+" "+(o?"tag-module--wide-tag--lPb+N":""),onClick:function(){c(t),u.current.blur()},"aria-label":"Toggle "+(m?"off":"on")+" filter for "+t+" "},t):l.createElement("span",{className:n},t)};i.defaultProps={action:"",type:"",handleToggle:null,isActive:!1,wide:!1};var c=i},9217:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var l=a(7294),r=a(7927),n=a(8742),i=a(9374),c=a(3304),m=a(8965),o="article-module--tagSeparator--SF1ke";function u(e){var t=e.data,a=t.post,u=a.frontmatter,s=a.html,d=t.relatedContent.edges;return l.createElement(i.Z,null,l.createElement("article",{className:"article-module--article--syldC"},l.createElement("div",{"aria-label":"Article info",className:"article-module--meta--wxL6R"},l.createElement("span",{"aria-label":"Tags"},u.tags&&u.tags.map((function(e){return l.createElement("span",{key:e},l.createElement(m.Z,{type:"link",action:"/tags/"+e},e),l.createElement("span",{className:o},"•"))}))),u.readingTime&&l.createElement("span",null,u.readingTime+" min read",l.createElement("span",{className:o},"•")),l.createElement("span",null,u.date)),l.createElement("h1",null,u.title),l.createElement("p",{"aria-label":"author"},u.author),l.createElement(n.Z,{className:"article-module--article-image--leK5r",imageData:u.featuredImage,alt:u.imageAlt}),l.createElement(r.Z,null,u.blurb),l.createElement("div",{className:"article-module--article-content--cJFSQ",dangerouslySetInnerHTML:{__html:s}})),l.createElement(c.Z,{title:"Related content",contentList:d}))}}}]);
//# sourceMappingURL=component---src-templates-blog-jsx-5772f4abf24759e0eb09.js.map