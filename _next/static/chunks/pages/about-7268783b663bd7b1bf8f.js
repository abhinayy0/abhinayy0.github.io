(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{7375:function(e,t,r){"use strict";function a(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}r.d(t,{Z:function(){return a}})},6071:function(e,t,r){"use strict";var a=r(3038),s=r(862);t.default=void 0;var n=s(r(7294)),l=r(1689),o=r(2441),i=r(5749),c={};function d(e,t,r,a){if(e&&(0,l.isLocalURL)(t)){e.prefetch(t,r,a).catch((function(e){0}));var s=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;c[t+"%"+r+(s?"%"+s:"")]=!0}}var x=function(e){var t=!1!==e.prefetch,r=(0,o.useRouter)(),s=r&&r.asPath||"/",x=n.default.useMemo((function(){var t=(0,l.resolveHref)(s,e.href,!0),r=a(t,2),n=r[0],o=r[1];return{href:n,as:e.as?(0,l.resolveHref)(s,e.as):o||n}}),[s,e.href,e.as]),f=x.href,u=x.as,m=e.children,g=e.replace,h=e.shallow,p=e.scroll,y=e.locale;"string"===typeof m&&(m=n.default.createElement("a",null,m));var v=n.Children.only(m),b=v&&"object"===typeof v&&v.ref,j=(0,i.useIntersection)({rootMargin:"200px"}),w=a(j,2),N=w[0],k=w[1],L=n.default.useCallback((function(e){N(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,N]);(0,n.useEffect)((function(){var e=k&&t&&(0,l.isLocalURL)(f),a="undefined"!==typeof y?y:r&&r.locale,s=c[f+"%"+u+(a?"%"+a:"")];e&&!s&&d(r,f,u,{locale:a})}),[u,f,k,y,t,r]);var _={ref:L,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,r,a,s,n,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(r))&&(e.preventDefault(),null==o&&(o=a.indexOf("#")<0),t[s?"replace":"push"](r,a,{shallow:n,locale:i,scroll:o}))}(e,r,f,u,g,h,p,y)},onMouseEnter:function(e){(0,l.isLocalURL)(f)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),d(r,f,u,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){var E="undefined"!==typeof y?y:r&&r.locale,O=r&&r.isLocaleDomain&&(0,l.getDomainLocale)(u,E,r&&r.locales,r&&r.domainLocales);_.href=O||(0,l.addBasePath)((0,l.addLocale)(u,E,r&&r.defaultLocale))}return n.default.cloneElement(v,_)};t.default=x},5749:function(e,t,r){"use strict";var a=r(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!l,i=(0,s.useRef)(),c=(0,s.useState)(!1),d=a(c,2),x=d[0],f=d[1],u=(0,s.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),r||x||e&&e.tagName&&(i.current=function(e,t,r){var a=function(e){var t=e.rootMargin||"",r=o.get(t);if(r)return r;var a=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return o.set(t,r={id:t,observer:s,elements:a}),r}(r),s=a.id,n=a.observer,l=a.elements;return l.set(e,t),n.observe(e),function(){l.delete(e),n.unobserve(e),0===l.size&&(n.disconnect(),o.delete(s))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,x]);return(0,s.useEffect)((function(){if(!l&&!x){var e=(0,n.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,n.cancelIdleCallback)(e)}}}),[x]),[u,x]};var s=r(7294),n=r(8391),l="undefined"!==typeof IntersectionObserver;var o=new Map},9593:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var a=r(5893),s=(r(7294),r(6063)),n=r(1565);function l(){var e;return(0,a.jsxs)("section",{className:"bg-white dark:bg-gray-800",children:[(0,a.jsx)("div",{className:"max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800",children:(0,a.jsx)("h1",{className:" text-5xl md:text-9xl font-bold py-20 text-center md:text-left",children:"About Me."})}),(0,a.jsx)("div",{className:"bg-[#F1F1F1] -mt-10 dark:bg-gray-900",children:(0,a.jsx)("div",{className:"text-container max-w-6xl mx-auto pt-20",children:(0,a.jsxs)("p",{className:"leading-loose text-2xl md:text-4xl font-semibold  mx-4",style:{lineHeight:"3rem"},children:[n.Z.about.title," ",(0,a.jsxs)("a",{className:"bg-red-500 rounded-md px-2 py-1 text-white",href:n.Z.about.currentProjectUrl,children:[n.Z.about.currentProject," \u2708\ufe0f"]})]})})}),(0,a.jsx)("div",{className:"bg-[#F1F1F1] dark:bg-gray-900 px-4",children:(0,a.jsxs)("div",{className:"pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20",children:[(0,a.jsxs)("div",{className:"inline-flex flex-col",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"text-xl font-semibold text-gray-700 dark:text-gray-200",children:"Contact"}),(0,a.jsxs)("p",{className:"text-lg text-gray-500 mt-4 dark:text-gray-300",children:["For any sort help / enquiry, shoot a"," ",(0,a.jsx)("a",{href:"mailto:".concat(n.Z.email),className:"text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300",children:"mail"})," ","and I'll get back. I swear."]})]}),(0,a.jsxs)("div",{className:"mt-8",children:[(0,a.jsx)("h1",{className:"text-xl font-semibold text-gray-700 dark:text-gray-200",children:"Job Opportunities"}),(0,a.jsxs)("p",{className:"text-lg text-gray-500 mt-4 dark:text-gray-300",children:["I'm looking for a job currently, If you see me as a good fit, check my"," ",(0,a.jsx)("a",{href:n.Z.resumeUrl,target:"__blank",className:"text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300",children:"CV"})," ","and I'd love to work for you."]})]}),(0,a.jsx)("h1",{className:"text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200",children:"Links"}),(0,a.jsxs)("div",{className:"mt-4 ml-4",children:[(0,a.jsx)("div",{className:"flex flex-row justify-start items-center ",children:(0,a.jsxs)("a",{href:n.Z.socialLinks.linkedin,className:"flex flex-row items-center space-x-4 group",children:[(0,a.jsx)("div",{className:"my-4",children:"\u2192"}),(0,a.jsxs)("p",{className:"text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300",children:[(0,a.jsx)("div",{className:"absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"}),"LinkedIn"]})]})}),(0,a.jsx)("div",{className:"flex flex-row justify-start items-center",children:(0,a.jsxs)("a",{href:n.Z.socialLinks.github,className:"flex flex-row items-center space-x-4 group",children:[(0,a.jsx)("div",{className:"my-4",children:"\u2192"}),(0,a.jsxs)("p",{className:"text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300",children:[(0,a.jsx)("div",{className:"absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"}),"GitHub"]})]})}),(0,a.jsx)("div",{className:"flex flex-row justify-start items-center",children:(0,a.jsxs)("a",{href:n.Z.socialLinks.github,className:"flex flex-row items-center space-x-4 group",children:[(0,a.jsx)("div",{className:"my-4",children:"\u2192"}),(0,a.jsxs)("p",{className:"text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300",children:[(0,a.jsx)("div",{className:"absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"}),"Stack Overflow"]})]})}),(0,a.jsx)("div",{className:"flex flex-row justify-start items-center",children:(0,a.jsxs)("a",{href:n.Z.socialLinks.linkedin,className:"flex flex-row items-center space-x-4 group",children:[(0,a.jsx)("div",{className:"my-4"}),(0,a.jsx)("p",{className:"text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300",children:(0,a.jsx)("div",{className:"absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"})})]})}),(0,a.jsx)("div",{className:"flex flex-row justify-start items-center",children:(0,a.jsxs)("a",{href:n.Z.socialLinks.twitter,className:"flex flex-row items-center space-x-4 group",children:[(0,a.jsx)("div",{className:"my-4"}),(0,a.jsx)("p",{className:"text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300",children:(0,a.jsx)("div",{className:"absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"})})]})})]})]}),(0,a.jsxs)("div",{className:"col-span-1 md:col-span-2",children:[null===(e=n.Z.about.description)||void 0===e?void 0:e.map((function(e,t){return(0,a.jsx)("p",{className:"text-xl text-gray-700 mb-4 dark:text-gray-300 ",children:e},t)})),(0,a.jsx)("h1",{className:"bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50",children:"Tech Stack"}),(0,a.jsxs)("div",{className:"flex flex-row flex-wrap mt-8",children:[(0,a.jsx)("img",{src:"https://stickler.de/images/2000px-Python-logo-notext.png",className:"h-20 w-20 mx-4 my-4"}),(0,a.jsx)("img",{src:"https://miro.medium.com/max/1400/0*2FHPEDZ26S-p4ozK.png",className:"h-20 w-20 mx-4 my-4"}),(0,a.jsx)("img",{src:"https://www.pngitem.com/pimgs/m/159-1595977_flask-python-logo-hd-png-download.png",className:"h-20 w-20 mx-4 my-4"}),(0,a.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",className:"h-20 w-20 mx-4 my-4"}),(0,a.jsx)("img",{src:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png",className:"h-20 w-20 mx-4 my-4"}),(0,a.jsx)("img",{src:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png",className:"h-20 w-20 mx-4 my-4"}),(0,a.jsx)("img",{src:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",className:"h-20 w-20 mx-4 my-4"})]})]})]})})]})}function o(){return(0,a.jsx)(s.Z,{children:(0,a.jsx)(l,{})})}},8961:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return r(9593)}])},1664:function(e,t,r){e.exports=r(6071)},1163:function(e,t,r){e.exports=r(2441)}},function(e){e.O(0,[63,774,888,179],(function(){return t=8961,e(e.s=t);var t}));var t=e.O();_N_E=t}]);