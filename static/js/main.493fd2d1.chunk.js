(this["webpackJsonpquote-generator"]=this["webpackJsonpquote-generator"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),c=a.n(r),i=(a(14),a(3),a(5)),u=a(6),l=a(1),s=a(8),h=a(7),d=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={quoteData:[],quote:"An unexamined life is not worth living",author:"Socrates"},e.handleClick=e.handleClick.bind(Object(l.a)(e)),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(e){return e.json()})).then((function(t){e.setState({quoteData:t.quotes})}))}},{key:"handleClick",value:function(){var e=Math.floor(Math.random()*this.state.quoteData.length),t=this.state.quoteData[e];console.log(t),this.setState({quote:t.quote,author:t.author})}},{key:"render",value:function(){return o.a.createElement("div",{id:"quote-box"},o.a.createElement("div",{id:"text-and-author"},o.a.createElement("i",{id:"quote-icon",className:"fa fa-quote-left fa-3x fa-pull-left fa-border","aria-hidden":"true"}),o.a.createElement("p",{id:"text"},this.state.quote),o.a.createElement("p",{id:"author"},"- ",this.state.author)),o.a.createElement("div",{className:"buttons"},o.a.createElement("a",{href:"twitter.com/intent/tweet",target:"_blank",id:"tweet-quote"},o.a.createElement("i",{className:"fa fa-twitter-square","aria-hidden":"true"})),o.a.createElement("a",{target:"_blank",id:"facebook",href:"http://facebook.com"},o.a.createElement("i",{className:"fa fa-facebook-square","aria-hidden":"true"})),o.a.createElement("button",{onClick:this.handleClick,id:"new-quote",type:"submit"},"New Quote")))}}]),a}(o.a.Component);var f=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,t,a){},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.493fd2d1.chunk.js.map