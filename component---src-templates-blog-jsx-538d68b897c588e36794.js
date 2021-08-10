(self.webpackChunkdx_website=self.webpackChunkdx_website||[]).push([[366],{1121:function(e,t,a){"use strict";a.d(t,{Z:function(){return f}});var r=a(7294),l=a(5444),n=a(8742),i=function(e){var t=e.to,a=e.imageData,i=e.alt;return r.createElement(l.Link,{to:t,"aria-label":"Preview picture of article: "+i},r.createElement(n.Z,{imageData:a,alt:i}))};i.defaultProps={imageData:"placeholder.png"};var c=i,m=function(e){var t=e.url,a=e.imageData;return r.createElement(l.Link,{to:t,"aria-label":"Picture of the author of this article","data-testid":"profilepic"},r.createElement(n.Z,{className:"profilePicture-module--profilePicture--3NqjX",imageData:a,alt:"Article preview profilepicture"}))};m.defaultProps={url:"/"};var u=m,o=a(8965),s=function(e){var t=e.name,a=e.url,n=e.credentials,i=e.image;return r.createElement("div",{className:"articlePreview-module--author-section--uPydT"},i&&r.createElement(u,{url:a,imageData:i.node.childImageSharp.gatsbyImageData}),r.createElement(l.Link,{to:a,"aria-label":"Link to user profile: "+t},n?t+",":t),n)},d=function(){return r.createElement("span",{className:"articlePreview-module--dot--2KcIv"},"•")},g=function(e){var t=e.articleUrl,a=e.previewImage,n=e.imageAlt,i=e.tags,m=e.title,u=e.type,g=e.readingTime,f=e.date,p=e.description,v=e.authorName,E=e.authorCredentials,h=e.authorImage,N=e.authorUrl;return r.createElement("div",{className:"articlePreview-module--article-preview--2fbNF","aria-label":"Article preview"},a&&r.createElement("div",{className:"articlePreview-module--image-link--18clN"},r.createElement(c,{to:t,imageData:a.childImageSharp.gatsbyImageData,alt:n})),r.createElement("div",{className:"articlePreview-module--info-section--19eNQ"},r.createElement("div",{className:"articlePreview-module--row-section--2xRiF"},function(e){return e&&e.length>0?e.map((function(e){return r.createElement("div",{key:e},r.createElement(o.Z,{type:"link",action:"/tags/"+e},e),r.createElement(d,null))})):""}(i),function(e){return e?r.createElement("div",{"aria-label":"Reading time of the article"},e+" min read"):""}(g),g&&f&&r.createElement(d,null),f),r.createElement("div",null,r.createElement(l.Link,{to:t},r.createElement("h4",null,m)),r.createElement("div",{className:"articlePreview-module--description-section--3a4_u"},p),u&&r.createElement("div",{className:"articlePreview-module--typeSection--2CDzW"},u),v&&r.createElement(s,{name:v,credentials:E,url:N,image:h}))))};g.defaultProps={previewImage:"",tags:[],type:"",readingTime:"",date:"",description:"",authorName:"",authorUrl:"/",authorImage:"",authorCredentials:"",imageAlt:""};var f=g},7927:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var r=a(7294),l=function(e){var t=e.children;return""===t||null==t?"":r.createElement("aside",{className:"blurb-module--blurb--3aElL","aria-label":"Text Blurb"},t)};l.defaultProps={children:""};var n=l},8742:function(e,t,a){"use strict";var r=a(7294),l=a(2407),n=function(e){var t=e.className,a=e.imageData,n=e.alt,i=(0,l.d)(a);return r.createElement(l.G,{className:t,image:i,alt:n})};n.defaultProps={imageData:"placeholder.png",className:""},t.Z=n},3304:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var r=a(7294),l=a(1121),n=function(e){var t=e.contentList,a=e.title;return r.createElement("aside",{className:"relatedContent-module--related-content--Q7RDW",role:"complementary"},r.createElement("h2",null,a),r.createElement("ul",{className:"relatedContent-module--content-previews--2gaWp"},t&&t.map((function(e){var t,a=e.node.frontmatter,n=e.node.fields.slug;return r.createElement("li",{className:"relatedContent-module--content-item--3AerO",key:a.title},r.createElement(l.Z,((t={articleUrl:n,imageAlt:a.imageAlt,previewImage:a.featuredImage,title:a.title,tags:a.tags,readingTime:a.readingTime,date:a.date,description:a.description,author:a.author,authorImage:a.authorImage,authorCredentials:a.authorCredentials}).authorImage=a.authorImage,t)))}))))};n.defaultProps={title:""};var i=n},8965:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var r=a(7294),l=a(5444),n="tag-module--tag--2TGyQ",i=function(e){var t=e.children,a=e.type,i=e.action,c=e.handleToggle,m=e.isActive,u=e.wide,o=(0,r.useRef)(null);return"link"===a?r.createElement(l.Link,{to:i,className:n,"aria-label":"Goto "+t},t):"toggle"===a?r.createElement("button",{type:"button",ref:o,className:"tag-module--toggleTag--24ulh "+(m?"tag-module--toggleTag--active--267PV":"")+" "+(u?"tag-module--wide-tag--2p6uZ":""),onClick:function(){c(t),o.current.blur()},"aria-label":"Toggle "+(m?"off":"on")+" filter for "+t+" "},t):r.createElement("span",{className:n},t)};i.defaultProps={action:"",type:"",handleToggle:null,isActive:!1,wide:!1};var c=i},9217:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}});var r=a(7294),l=a(7927),n=a(8742),i=a(9374),c=a(3304),m=a(8965),u="article-module--tagSeparator--1siAD";function o(e){var t=e.data,a=t.post,o=a.frontmatter,s=a.html,d=t.relatedContent.edges;return r.createElement(i.Z,null,r.createElement("article",{className:"article-module--article--2eyuf"},r.createElement("div",{"aria-label":"Article info",className:"article-module--meta--t5UbQ"},r.createElement("span",{"aria-label":"Tags"},o.tags&&o.tags.map((function(e){return r.createElement("span",{key:e},r.createElement(m.Z,{type:"link",action:"/tags/"+e},e),r.createElement("span",{className:u},"•"))}))),o.readingTime&&r.createElement("span",null,o.readingTime+" min read",r.createElement("span",{className:u},"•")),r.createElement("span",null,o.date)),r.createElement("h1",null,o.title),r.createElement("p",{"aria-label":"author"},o.author),r.createElement(n.Z,{className:"article-module--article-image--3a7a_",imageData:o.featuredImage,alt:o.imageAlt}),r.createElement(l.Z,null,o.blurb),r.createElement("div",{className:"article-module--article-content--1lJlH",dangerouslySetInnerHTML:{__html:s}})),r.createElement(c.Z,{title:"Related content",contentList:d}))}}}]);
//# sourceMappingURL=component---src-templates-blog-jsx-538d68b897c588e36794.js.map