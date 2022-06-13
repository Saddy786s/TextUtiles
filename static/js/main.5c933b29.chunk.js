(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),l=a(7),c=a.n(l),r=(a(17),a(3)),s=(a(6),a(4));function i(e){return o.a.createElement("nav",{className:"navbar navbar-expand-lg bg-".concat(e.mode," ")},o.a.createElement("div",{className:"container-fluid"},o.a.createElement(s.b,{className:"navbar-brand",to:"/",style:{color:"#0000fd"}},"TextUtiles"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(s.b,{style:{color:"#0000fd"},className:"nav-link active","aria-current":"page",to:"/"},e.home)),o.a.createElement("li",{className:"nav-item"},o.a.createElement(s.b,{style:{color:"#0000fd"},className:"nav-link",to:"/about"},"About"))),o.a.createElement("button",{type:"button",className:"setcolorbtn setcolorbtnblue",onClick:e.togglemodeblue},"  "),o.a.createElement("button",{type:"button",className:"setcolorbtn setcolorbtnred",onClick:e.togglemodered},"  "),o.a.createElement("button",{type:"button",className:"setcolorbtn setcolorbtngreen",onClick:e.togglemodegreen},"  "),o.a.createElement("button",{type:"button",className:"setcolorbtn setcolorbtnyellow",onClick:e.togglemodeyellow},"  "),o.a.createElement("form",{className:"d-flex",role:"search"},o.a.createElement("div",{className:"form-check form-switch"},o.a.createElement("input",{className:"form-check-input",type:"checkbox",onClick:e.togglemode,id:"flexSwitchCheckDefault"}),o.a.createElement("label",{className:"form-check-label text-".concat("light"===e.mode?"grey":"white"),htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode"))))))}function d(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),l=a[0],c=a[1],s=function(t){return"light"===t||"dark"===t?"primary":e.mode};return o.a.createElement("div",null,o.a.createElement("div",{className:"mb-3",style:{color:"dark"===e.mode?"white":"black"}},o.a.createElement("h4",null,"Enter Text Here"),o.a.createElement("textarea",{className:"form-control",value:l,onChange:function(e){c(e.target.value)},id:"myBox",rows:"8",style:{backgroundColor:"dark"===e.mode?"#3d3d3d":"white",color:"dark"===e.mode?"white":"black"}}),o.a.createElement("button",{disabled:0===l.length,type:"button",className:"btn btn-".concat(s(e.mode)," my-3 mx-2"),onClick:function(){var t=l.toUpperCase();c(t),e.showAlert("Converted to Uppercase","success")}},"Convert To UpperCase"),o.a.createElement("button",{disabled:0===l.length,type:"button",className:"btn btn-".concat(s(e.mode)," my-3 mx-2"),onClick:function(){var t=l.toLowerCase();c(t),e.showAlert("Converted to Lowercase","success")}},"Convert To LowerCase"),o.a.createElement("button",{disabled:0===l.length,type:"button",className:"btn btn-".concat(s(e.mode)," my-3 mx-2"),onClick:function(){c(""),e.showAlert("Text cleared","success")}},"Clear Text"),o.a.createElement("button",{disabled:0===l.length,type:"submit",onClick:function(){var t=new SpeechSynthesisUtterance;t.text=l,window.speechSynthesis.speak(t),e.showAlert("Speaking","success")},className:"btn btn-".concat(s(e.mode)," mx-2 my-2")},"Speak"),o.a.createElement("button",{disabled:0===l.length,type:"button",className:"btn btn-".concat(s(e.mode)," my-3 mx-2"),onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),document.getSelection().removeAllRanges(),e.showAlert("Text copied","success")}},"Copy Text"),o.a.createElement("button",{disabled:0===l.length,type:"button",className:"btn btn-".concat(s(e.mode)," my-3 mx-2"),onClick:function(){var t=l.split(/[ ]+/);c(t.join(" ")),e.showAlert("Extra Spaces Removed!","success")}},"Remove Extra Space")),o.a.createElement("div",{style:{color:"dark"===e.mode?"white":"black"}},o.a.createElement("h2",null,"Your Text Summery"),o.a.createElement("p",null,l.split(/\s+/).filter(function(e){return 0!==e.length}).length," Words and ",l.length," Characters"),o.a.createElement("p",null,"This text is readable in ","0"===l.lenght?"0":.008*l.split(" ").filter(function(e){return 0!==e.length}).length," Minutes"),o.a.createElement("h2",null,"Preview"),o.a.createElement("p",null,l.length>0?l:"Nothing to Preview")))}var m=function(e){return o.a.createElement("div",{style:{height:"60px"}},e.alert&&o.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)," : ",e.alert.msg))};var u=function(){return o.a.createElement("div",{className:"accordion",id:"accordionExample"},o.a.createElement("div",{className:"accordion-item"},o.a.createElement("h2",{className:"accordion-header",id:"headingOne"},o.a.createElement("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Accordion Item #1")),o.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body"},o.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),o.a.createElement("div",{className:"accordion-item"},o.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},o.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Accordion Item #2")),o.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body"},o.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),o.a.createElement("div",{className:"accordion-item"},o.a.createElement("h2",{className:"accordion-header",id:"headingThree"},o.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"Accordion Item #3")),o.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body"},o.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))))},b=a(0);var h=function(){var e=Object(n.useState)("light"),t=Object(r.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),h=Object(r.a)(c,2),g=h[0],p=h[1],y=function(e,t){p({msg:e,type:t}),setTimeout(function(){p(null)},1e3)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,null,o.a.createElement(i,{home:"Home",mode:a,togglemode:function(){"light"===a||"primary"===a||"danger"===a||"success"===a||"warning"===a?(l("dark"),document.body.style.backgroundColor="#3d3d3d",y("Dark Mode Enabled","success")):(l("light"),document.body.style.backgroundColor="white",y("Light Mode Enabled","success"))},togglemodeblue:function(){l("primary"),document.body.style.backgroundColor="blue"},togglemodered:function(){l("danger"),document.body.style.backgroundColor="#ff5d5d"},togglemodegreen:function(){l("success"),document.body.style.backgroundColor="green"},togglemodeyellow:function(){l("warning"),document.body.style.backgroundColor="yellow"}}),o.a.createElement(m,{alert:g}),o.a.createElement("div",{className:"container"},o.a.createElement(b.c,null,o.a.createElement(b.a,{path:"/",element:o.a.createElement(d,{showAlert:y,mode:a})}),o.a.createElement(b.a,{path:"about",element:o.a.createElement(u,null)})))))},g=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,21)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),o(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null))),g()},6:function(e,t,a){},8:function(e,t,a){e.exports=a(20)}},[[8,3,2]]]);
//# sourceMappingURL=main.5c933b29.chunk.js.map