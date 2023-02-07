(()=>{var e={102:(e,t,a)=>{var s=a(909);e.exports=s},909:e=>{Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}),"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||function(e){"use strict";if("Element"in e){var t="classList",a="prototype",s=e.Element[a],o=Object,i=String[a].trim||function(){return this.replace(/^\s+|\s+$/g,"")},n=Array[a].indexOf||function(e){for(var t=0,a=this.length;a>t;t++)if(t in this&&this[t]===e)return t;return-1},r=function(e,t){this.name=e,this.code=DOMException[e],this.message=t},d=function(e,t){if(""===t)throw new r("SYNTAX_ERR","The token must not be empty.");if(/\s/.test(t))throw new r("INVALID_CHARACTER_ERR","The token must not contain space characters.");return n.call(e,t)},l=function(e){for(var t=i.call(e.getAttribute("class")||""),a=t?t.split(/\s+/):[],s=0,o=a.length;o>s;s++)this.push(a[s]);this._updateClassName=function(){e.setAttribute("class",this.toString())}},c=l[a]=[],m=function(){return new l(this)};if(r[a]=Error[a],c.item=function(e){return this[e]||null},c.contains=function(e){return~d(this,e+"")},c.add=function(){var e,t=arguments,a=0,s=t.length,o=!1;do{~d(this,e=t[a]+"")||(this.push(e),o=!0)}while(++a<s);o&&this._updateClassName()},c.remove=function(){var e,t,a=arguments,s=0,o=a.length,i=!1;do{for(t=d(this,e=a[s]+"");~t;)this.splice(t,1),i=!0,t=d(this,e)}while(++s<o);i&&this._updateClassName()},c.toggle=function(e,t){var a=this.contains(e),s=a?!0!==t&&"remove":!1!==t&&"add";return s&&this[s](e),!0===t||!1===t?t:!a},c.replace=function(e,t){var a=d(e+"");~a&&(this.splice(a,1,t),this._updateClassName())},c.toString=function(){return this.join(" ")},o.defineProperty){var u={get:m,enumerable:!0,configurable:!0};try{o.defineProperty(s,t,u)}catch(e){void 0!==e.number&&-2146823252!==e.number||(u.enumerable=!1,o.defineProperty(s,t,u))}}else o[a].__defineGetter__&&s.__defineGetter__(t,m)}}(self),function(){"use strict";var e=document.createElement("_");if(e.classList.add("c1","c2"),!e.classList.contains("c2")){var t=function(e){var t=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(e){var a,s=arguments.length;for(a=0;s>a;a++)e=arguments[a],t.call(this,e)}};t("add"),t("remove")}if(e.classList.toggle("c3",!1),e.classList.contains("c3")){var a=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:a.call(this,e)}}"replace"in document.createElement("_").classList||(DOMTokenList.prototype.replace=function(e,t){var a=this.toString().split(" "),s=a.indexOf(e+"");~s&&(a=a.slice(s),this.remove.apply(this,a),this.add(t),this.add.apply(this,a.slice(1)))}),e=null}());var t={pageWrapper:document.getElementsByClassName("page-wrapper")[0],stickyAlerts:document.getElementsByClassName("sticky-alerts")[0],darkModeOn:!1,createCookie:function(e,t,a){var s;if(a){var o=new Date;o.setTime(o.getTime()+24*a*60*60*1e3),s="; expires="+o.toGMTString()}else s="";document.cookie=e+"="+t+s+"; path=/"},readCookie:function(e){for(var t=e+"=",a=document.cookie.split(";"),s=0;s<a.length;s++){for(var o=a[s];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(t))return o.substring(t.length,o.length)}return null},eraseCookie:function(e){this.createCookie(e,"",-1)},toggleDarkMode:function(){document.body.classList.contains("dark-mode")?(document.body.classList.remove("dark-mode"),this.darkModeOn=!1,this.createCookie("halfmoon_preferredMode","light-mode",365)):(document.body.classList.add("dark-mode"),this.darkModeOn=!0,this.createCookie("halfmoon_preferredMode","dark-mode",365))},getPreferredMode:function(){return this.readCookie("halfmoon_preferredMode")?this.readCookie("halfmoon_preferredMode"):"not-set"},toggleSidebar:function(){this.pageWrapper&&(this.pageWrapper.getAttribute("data-sidebar-hidden")?this.pageWrapper.removeAttribute("data-sidebar-hidden"):this.pageWrapper.setAttribute("data-sidebar-hidden","hidden"))},deactivateAllDropdownToggles:function(){for(var e=document.querySelectorAll("[data-toggle='dropdown'].active"),t=0;t<e.length;t++)e[t].classList.remove("active"),e[t].closest(".dropdown").classList.remove("show")},toggleModal:function(e){var t=document.getElementById(e);t&&t.classList.toggle("show")},makeId:function(e){for(var t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=a.length,o=0;o<e;o++)t+=a.charAt(Math.floor(Math.random()*s));return t},toastAlert:function(e,t){var a=document.getElementById(e);if(void 0===t&&(t=5e3),!a.classList.contains("show")){a.classList.contains("alert-block")||a.classList.add("alert-block"),setTimeout((function(){a.classList.add("show")}),250);var s=t+250;setTimeout((function(){a.classList.add("fade")}),s),setTimeout((function(){a.classList.remove("alert-block"),a.classList.remove("show"),a.classList.remove("fade")}),s+500)}},initStickyAlert:function(e){var t="content"in e?e.content:"",a="title"in e?e.title:"",s="alertType"in e?e.alertType:"",o="fillType"in e?e.fillType:"",i=!("hasDismissButton"in e)||e.hasDismissButton,n="timeShown"in e?e.timeShown:5e3,r=document.createElement("div");r.setAttribute("id",this.makeId(6)),a&&(t="<h4 class='alert-heading'>"+a+"</h4>"+t),r.classList.add("alert"),s&&r.classList.add(s),o&&r.classList.add(o),i&&(t="<button class='close' data-dismiss='alert' type='button' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"+t),r.innerHTML=t,this.stickyAlerts.insertBefore(r,this.stickyAlerts.childNodes[0]),this.toastAlert(r.getAttribute("id"),n)},clickHandler:function(e){},keydownHandler:function(e){},onDOMContentLoaded:function(){t.pageWrapper||(t.pageWrapper=document.getElementsByClassName("page-wrapper")[0]),t.stickyAlerts||(t.stickyAlerts=document.getElementsByClassName("sticky-alerts")[0]),t.readCookie("halfmoon_preferredMode")?"dark-mode"==t.readCookie("halfmoon_preferredMode")?t.darkModeOn=!0:t.darkModeOn=!1:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches||document.body.classList.contains("dark-mode")?t.darkModeOn=!0:t.darkModeOn=!1,(document.body.getAttribute("data-set-preferred-mode-onload")||document.body.getAttribute("data-set-preferred-theme-onload"))&&(t.darkModeOn?document.body.classList.contains("dark-mode")||document.body.classList.add("dark-mode"):document.body.classList.contains("dark-mode")&&document.body.classList.remove("dark-mode")),document.documentElement.clientWidth<=768?t.pageWrapper&&(t.pageWrapper.getAttribute("data-show-sidebar-onload-sm-and-down")||t.pageWrapper.setAttribute("data-sidebar-hidden","hidden")):t.pageWrapper&&"overlayed-all"===t.pageWrapper.getAttribute("data-sidebar-type")&&t.pageWrapper.setAttribute("data-sidebar-hidden","hidden"),document.addEventListener("click",(function(e){var a=e,s=e.target;if(s.matches("[data-toggle='dropdown']")||s.matches("[data-toggle='dropdown'] *")?(s.matches("[data-toggle='dropdown'] *")&&(s=s.closest("[data-toggle='dropdown']")),s.classList.contains("active")?(s.classList.remove("active"),s.closest(".dropdown").classList.remove("show")):(t.deactivateAllDropdownToggles(),s.classList.add("active"),s.closest(".dropdown").classList.add("show"))):s.matches(".dropdown-menu *")||t.deactivateAllDropdownToggles(),(s.matches(".alert [data-dismiss='alert']")||s.matches(".alert [data-dismiss='alert'] *"))&&(s.matches(".alert [data-dismiss='alert'] *")&&(s=s.closest(".alert [data-dismiss='alert']")),s.parentNode.classList.add("dispose")),s.matches("[data-toggle='modal']")||s.matches("[data-toggle='modal'] *")){s.matches("[data-toggle='modal'] *")&&(s=s.closest("[data-toggle='modal']"));var o=document.getElementById(s.getAttribute("data-target"));o&&o.classList.contains("modal")&&t.toggleModal(s.getAttribute("data-target"))}if((s.matches(".modal [data-dismiss='modal']")||s.matches(".modal [data-dismiss='modal'] *"))&&(s.matches(".modal [data-dismiss='modal'] *")&&(s=s.closest(".modal [data-dismiss='modal']")),s.closest(".modal").classList.remove("show")),s.matches(".modal-dialog")){var i=s.closest(".modal");i.getAttribute("data-overlay-dismissal-disabled")||(i.classList.contains("show")?i.classList.remove("show"):window.location.hash="#")}t.clickHandler(a)}),!1),document.addEventListener("keydown",(function(e){var a=e;if(!(document.querySelector("input:focus")||document.querySelector("textarea:focus")||document.querySelector("select:focus")||(e=e||window.event).ctrlKey||e.metaKey)){if(document.body.getAttribute("data-sidebar-shortcut-enabled")&&e.shiftKey&&83==e.which){var s=!1;if(window.location.hash){var o=window.location.hash.substring(1);(i=document.getElementById(o))&&i.classList.contains("modal")&&(s=!0)}document.querySelector(".modal.show")&&(s=!0),s||(t.toggleSidebar(),e.preventDefault())}document.body.getAttribute("data-dm-shortcut-enabled")&&e.shiftKey&&68==e.which&&(t.toggleDarkMode(),e.preventDefault())}if(27===e.which)if(document.querySelector("[data-toggle='dropdown'].active"))(i=document.querySelector("[data-toggle='dropdown'].active")).classList.remove("active"),i.closest(".dropdown").classList.remove("show"),e.preventDefault();else{var i;window.location.hash&&(o=window.location.hash.substring(1),(i=document.getElementById(o))&&i.classList.contains("modal")&&(i.getAttribute("data-esc-dismissal-disabled")||(window.location.hash="#",e.preventDefault()))),document.querySelector(".modal.show")&&((i=document.querySelector(".modal.show")).getAttribute("data-esc-dismissal-disabled")||(i.classList.remove("show"),e.preventDefault()))}t.keydownHandler(a)}));for(var e=document.querySelectorAll(".custom-file input"),a=0;a<e.length;a++){var s=e[a],o=document.createElement("div");o.classList.add("file-names");var i=s.getAttribute("data-default-value");o.innerHTML=i||"No file chosen",s.parentNode.appendChild(o),s.addEventListener("change",(function(e){o=e.target.parentNode.querySelector(".file-names"),1===e.target.files.length?o.innerHTML=e.target.files[0].name:e.target.files.length>1?o.innerHTML=e.target.files.length+" files":o.innerHTML="No file chosen"}))}t.pageWrapper&&t.pageWrapper.classList.add("with-transitions")}};e.exports=t},400:(e,t,a)=>{"use strict";a.r(t)},438:e=>{e.exports='<div class="modal" id="server-ip" tabindex="-1" role="dialog">    <div class="modal-dialog" role="document">      <div class="modal-content">        <a data-dismiss="modal" class="close" role="button" aria-label="Close">          <span aria-hidden="true">&times;</span>        </a>        <h5 class="modal-title">Barbaros Server IP</h5>        <code>            fivem://connect/brrp.online        </code>        <div class="text-right mt-20">          <a class="btn mr-5" role="button" data-dismiss="modal">Close</a>          <a href="fivem://connect/brrp.online" class="btn btn-primary" role="button">Connect</a>        </div>      </div>    </div>  </div><nav class="navbar navbar-fixed-bottom">    <span class="navbar-text ml-5">Made with <span style="color: red; margin-left: 5px; margin-right: 5px;">♥️</span> by <a href="https://github.com/akatiggerx04" style="margin-left: 5px; margin-right: 5px;">akatiggerx04</a> & <a style="margin-left: 5px;" href="https://github.com/salim-dev11">salim-dev11</a></span>    <ul class="navbar-nav ml-auto">        <li class="nav-item">            <a href="https://discord.gg/barbaros" class="nav-link">                Discord            </a>        </li>        <li class="nav-item">            <a onclick="halfmoon.toggleModal(\'server-ip\')" class="nav-link" role="button">                Server IP            </a>        </li>    </ul>    <span class="navbar-text">        &copy; Copyright 2023, Barbaros     </span></nav>'},433:e=>{e.exports='<nav class="navbar">    <div class="navbar-content">        <button id="toggle-sidebar-btn" class="btn btn-action" type="button" onclick="halfmoon.toggleSidebar()">            <i class="fa fa-bars" aria-hidden="true"></i>        </button>    </div>    <a href="/" class="navbar-brand ml-10 ml-sm-20">        <img src="/assets/img/logo-text.png" alt="barbaros" class="img-fluid">    </a>    <div class="navbar-content ml-auto">        <button class="btn btn-action mr-5" type="button" onclick="halfmoon.toggleDarkMode()">            <i class="fa fa-moon-o" aria-hidden="true"></i>            <span class="sr-only">Toggle dark mode</span>        </button>        <a href="fivem://connect/brrp.online" class="btn btn-primary" role="button">Connect</a>    </div></nav>'},118:e=>{e.exports='<div class="sidebar">    <div class="sidebar-menu">        <h5 class="sidebar-title">Related Pages</h5>        <div class="sidebar-divider"></div>        <a href="/" class="sidebar-link sidebar-link-with-icon" id="sidebar-home">            <span class="sidebar-icon">                <i class="fa fa-home" aria-hidden="true"></i>            </span>            Home        </a>        <a href="/pages/staff" class="sidebar-link sidebar-link-with-icon" id="sidebar-staff">            <span class="sidebar-icon">                <i class="fa fa-users" aria-hidden="true"></i>            </span>            Staff        </a>        <a href="/pages/rules" class="sidebar-link sidebar-link-with-icon" id="sidebar-rules">            <span class="sidebar-icon">                <i class="fa fa-file-text-o" aria-hidden="true"></i>            </span>            Rules        </a>        <br/>        <h5 class="sidebar-title">Getting Started</h5>        <div class="sidebar-divider"></div>        <a href="/pages/how-to-join" class="sidebar-link sidebar-link-with-icon" id="sidebar-howtojoin">            <span class="sidebar-icon">                <i class="fa fa-list-ul" aria-hidden="true"></i>            </span>            How to join        </a>    </div></div>'},643:(e,t,a)=>{const s=a(438),o=a(433),i=a(118);function n(e,t){var a=`barbaros-ui-block[data-block="${e}"]`;document.querySelector(a).outerHTML=t}document.addEventListener("DOMContentLoaded",(function(){n("footer",s),n("navbar",o),n("sidebar",i)}))}},t={};function a(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,a),i.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";a(643),a(400);const e=a(102);console.log("Made By akatigger04 on github. Special thanks to @salim-dev11"),document.addEventListener("DOMContentLoaded",(function(){e.onDOMContentLoaded()}))})(),window["barbaros-ui"]={}.default})();