'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},correctCoordinates=function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.body,c='elementMove',d=a instanceof HTMLElement;if(!a)throw new Error('Must pass either HTMLElement or cooridinate object!');if(d||(c='coorditate'),'elementMove'==c){var e=window.getComputedStyle(a),f=e.position;('static'===f||'sticky'===f)&&console.warn('Target element will not show poistional changes with current display rule')}var g={};g='elementMove'==c?a.getBoundingClientRect():_extends({},a);var h=g,i=h.left,j=h.top,k=h.width,l=h.height,m=b.getBoundingClientRect(),n=m.left,o=m.right,p=m.top,q=m.bottom,r={left:i,top:j,width:k,height:l},s=n>i,t=o<i+k,u=p>j,v=q<j+l;if(u||v){var w=j-p,x=q-(j+l),y=0;switch(0>x&&0>w&&(y=Math.abs(x+w),r.height-=y),!0){case u&&v:case u:{r.top-=w;break}case v:{r.top+=x+y;break}default:}}if(s||t){var z=o-(i+k),A=n-i,B=0;switch(0>z-A&&(B=z-A-1,r.width+=B),!0){case s&&t:case s:{r.left+=A;break}case t:{r.left+=z-B;break}default:}}return'elementMove'==c?(a.style.left=r.left,a.style.top=r.top,a.style.height=r.height,a.style.width=r.left,!0):_extends({},r)};Object.defineProperty(exports,'__esModule',{value:!0});exports.default=correctCoordinates;
