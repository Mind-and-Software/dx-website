(self.webpackChunkdx_website=self.webpackChunkdx_website||[]).push([[366],{1121:function(e,t,a){"use strict";a.d(t,{Z:function(){return f}});var l=a(7294),r=a(5444),n=a(8742),i=function(e){var t=e.to,a=e.imageData,i=e.alt;return l.createElement(r.Link,{to:t,"aria-label":"Preview picture of article: "+i},l.createElement(n.Z,{imageData:a,alt:i}))};i.defaultProps={imageData:"placeholder.png"};var c=i,m=function(e){var t=e.url,a=e.imageData;return l.createElement(r.Link,{to:t,"aria-label":"Picture of the author of this article","data-testid":"profilepic"},l.createElement(n.Z,{className:"profilePicture-module--profilePicture--3NqjX",imageData:a,alt:"Article preview profilepicture"}))};m.defaultProps={url:"/"};var o=m,u=a(8965),s=function(e){var t=e.name,a=e.url,n=e.credentials,i=e.image;return l.createElement("div",{className:"articlePreview-module--author-section--uPydT"},i&&l.createElement(o,{url:a,imageData:i.node.childImageSharp.gatsbyImageData}),l.createElement(r.Link,{to:a,"aria-label":"Link to user profile: "+t},n?t+",":t),n)},d=function(){return l.createElement("span",{className:"articlePreview-module--dot--2KcIv"},"•")},g=function(e){return e.length>100?"articlePreview-module--description-ellipsis--PfsCz":""},p=function(e){var t=e.articleUrl,a=e.previewImage,n=e.imageAlt,i=e.tags,m=e.title,o=e.type,p=e.readingTime,f=e.date,E=e.description,v=e.authorName,h=e.authorCredentials,N=e.authorImage,b=e.authorUrl;return l.createElement("div",{className:"articlePreview-module--article-preview--2fbNF","aria-label":"Article preview"},a&&l.createElement("div",{className:"articlePreview-module--image-link--18clN"},l.createElement(c,{to:t,imageData:a,alt:n})),l.createElement("div",{className:"articlePreview-module--info-section--19eNQ"},l.createElement("div",{className:"articlePreview-module--row-section--2xRiF"},function(e){return e.length>0?e.map((function(e){return l.createElement("div",{key:e},l.createElement(u.Z,{type:"link",action:"tags/"+e},e),l.createElement(d,null))})):""}(i),function(e){return e?l.createElement("div",{"aria-label":"Reading time of the article"},e+" read"):""}(p),p&&f&&l.createElement(d,null),f),l.createElement("div",null,l.createElement(r.Link,{to:t},l.createElement("h3",null,m)),l.createElement("div",{className:g(E)},E),o&&l.createElement("div",{className:"articlePreview-module--typeSection--2CDzW"},o),v&&l.createElement(s,{name:v,credentials:h,url:b,image:N}))))};p.defaultProps={previewImage:"",imageAlt:"",tags:[],type:"",readingTime:"",date:"",description:"",authorName:"",authorUrl:"/",authorImage:"",authorCredentials:""};var f=p},8742:function(e,t,a){"use strict";var l=a(7294),r=a(2407),n=function(e){var t=e.className,a=e.imageData,n=e.alt,i=(0,r.d)(a);return l.createElement(r.G,{className:t,image:i,alt:n})};n.defaultProps={imageData:"placeholder.png",className:""},t.Z=n},8965:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var l=a(7294),r=a(5444),n="tag-module--tag--2TGyQ",i=function(e){var t=e.children,a=e.type,i=e.action,c=(0,l.useState)(!1),m=c[0],o=c[1];return"link"===a?l.createElement(r.Link,{to:i,className:n,"aria-label":"Goto "+t},t):"toggle"===a?l.createElement("button",{type:"button",className:"tag-module--toggleTag--24ulh "+(m?"tag-module--toggleTag--active--267PV":"")+" ",onClick:function(){return o(!m)},"aria-label":"Toggle "+(m?"off":"on")+" filter for "+t+" "},t):l.createElement("span",{className:n},t)};i.defaultProps={action:"",type:""};var c=i},2956:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var l=a(7294),r=function(e){var t=e.children;return""===t||null==t?"":l.createElement("aside",{className:"blurb-module--blurb--3aElL","aria-label":"Text Blurb"},t)};r.defaultProps={children:""};var n=r,i=a(8742),c=a(9934),m=a(1121),o=function(e){var t=e.contentList;return l.createElement("aside",{className:"relatedContent-module--related-content--Q7RDW",role:"complementary"},l.createElement("h2",null,"Related content"),l.createElement("ul",{className:"relatedContent-module--content-previews--2gaWp"},t&&t.map((function(e){var t=e.node.frontmatter,a=e.node.fields.slug;return l.createElement("li",{className:"relatedContent-module--content-item--3AerO",key:t.title},l.createElement(m.Z,{articleUrl:a,type:t.type,imageAlt:t.imageAlt,previewImage:t.featuredImage,title:t.title}))}))))},u=a(8965),s="article-module--tagSeparator--1siAD";function d(e){var t=e.data,a=t.post,r=a.frontmatter,m=a.html,d=t.relatedContent.edges;return l.createElement(c.Z,null,l.createElement("article",{className:"article-module--article--2eyuf"},l.createElement("div",{"aria-label":"Article info",className:"article-module--meta--t5UbQ"},l.createElement("span",{"aria-label":"Tags"},r.tags&&r.tags.map((function(e){return l.createElement("span",{key:e},l.createElement(u.Z,{type:"link",action:"/tags/"+e},e),l.createElement("span",{className:s},"•"))}))),r.readingTime&&l.createElement("span",null,r.readingTime+" min read",l.createElement("span",{className:s},"•")),l.createElement("span",null,r.date)),l.createElement("h1",null,r.title),l.createElement("p",{"aria-label":"author"},r.author),l.createElement(i.Z,{className:"article-module--article-image--3a7a_",imageData:r.featuredImage,alt:r.imageAlt}),l.createElement(n,null,r.blurb),l.createElement("div",{className:"article-module--article-content--1lJlH",dangerouslySetInnerHTML:{__html:m}})),l.createElement(o,{contentList:d}))}}}]);
//# sourceMappingURL=component---src-templates-blog-jsx-c4481baf55d7e7a502dc.js.map