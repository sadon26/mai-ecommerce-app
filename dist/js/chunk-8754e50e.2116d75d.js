(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8754e50e"],{"01f7":function(e,t,s){},"135d":function(e,t,s){e.exports=s.p+"img/noun-bag-check-1622114.50921922.svg"},1538:function(e,t,s){e.exports=s.p+"img/twitter.ed0dca73.svg"},"159b":function(e,t,s){var a=s("da84"),r=s("fdbc"),o=s("17c2"),i=s("9112");for(var n in r){var c=a[n],l=c&&c.prototype;if(l&&l.forEach!==o)try{i(l,"forEach",o)}catch(d){l.forEach=o}}},"17c2":function(e,t,s){"use strict";var a=s("b727").forEach,r=s("a640"),o=s("ae40"),i=r("forEach"),n=o("forEach");e.exports=i&&n?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},"230c":function(e,t,s){},2902:function(e,t,s){e.exports=s.p+"img/pills.7598df45.svg"},4160:function(e,t,s){"use strict";var a=s("23e7"),r=s("17c2");a({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"41b7":function(e,t,s){"use strict";var a=s("a3f4"),r=s.n(a);r.a},"44c6":function(e,t,s){e.exports=s.p+"img/facebook.2b99affb.svg"},5338:function(e,t,s){"use strict";var a=s("230c"),r=s.n(a);r.a},"53d7":function(e,t,s){"use strict";var a=s("01f7"),r=s.n(a);r.a},"541d":function(e,t,s){e.exports=s.p+"img/cancel.c1045163.svg"},5530:function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));s("a4d3"),s("4de4"),s("4160"),s("e439"),s("dbb4"),s("b64b"),s("159b");function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}},"578a":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-wrapper"},[a("form",{staticClass:"right",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("div",{staticClass:"second"},[a("label",{attrs:{for:""}},[e._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"Yourmail@mail.com",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"fourth"},[a("label",{attrs:{for:""}},[e._v("Password")]),"checkbox"===(e.showPassword?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"Password",required:"",type:"checkbox"},domProps:{checked:Array.isArray(e.password)?e._i(e.password,null)>-1:e.password},on:{change:function(t){var s=e.password,a=t.target,r=!!a.checked;if(Array.isArray(s)){var o=null,i=e._i(s,o);a.checked?i<0&&(e.password=s.concat([o])):i>-1&&(e.password=s.slice(0,i).concat(s.slice(i+1)))}else e.password=r}}}):"radio"===(e.showPassword?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"Password",required:"",type:"radio"},domProps:{checked:e._q(e.password,null)},on:{change:function(t){e.password=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"Password",required:"",type:e.showPassword?"text":"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("p",{staticClass:"show-password",on:{click:function(t){e.showPassword=!e.showPassword}}},[e._v("Show password")])]),a("a",{staticClass:"sign-up-with-google",attrs:{href:"http://dry-wildwood-70605.herokuapp.com/google"}},[a("div",{staticClass:"sign-up-with-google__wrapper",on:{click:function(t){return e.toggleLoginModal(!1)}}},[a("p",{staticClass:"__text"},[e._v("Or Sign in with Google")]),e._m(0)])]),e.errorMessage?a("p",{staticClass:"signup-err__message"},[e._v(e._s(e.errorMessage))]):e._e(),e.loginLoading?a("div",{staticClass:"rolling-spinner"},[e._m(1)]):a("button",{staticClass:"signup-submit__btn",attrs:{disabled:e.loginLoading}},[e._v(" Login ")])]),a("div",{staticClass:"modal-cancel",on:{click:function(t){return e.toggleLoginModal(!1)}}},[a("img",{attrs:{src:s("541d"),alt:"cancel-icon"}})])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sign-up-with-google__logo"},[a("img",{attrs:{src:s("c754"),alt:"google-icon"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"rolling-spinner__image"},[a("img",{attrs:{src:s("bd28"),alt:""}})])}],o=s("5530"),i=s("2f62"),n={name:"Login",data:function(){return{email:"",password:"",phone_number:"",showPassword:!1}},computed:Object(o["a"])({},Object(i["c"])(["loginLoading","errorMessage","verifyAcctDisplay"])),methods:{toggleLoginModal:function(e){this.$store.commit("toggleLoginModal",e)},submit:function(){var e={email:this.email,password:this.password};this.$store.dispatch("login",e)}}},c=n,l=(s("5338"),s("2877")),d=Object(l["a"])(c,a,r,!1,null,null,null);t["a"]=d.exports},"6a55":function(e,t,s){e.exports=s.p+"img/linkedin.37dfbe17.svg"},7573:function(e,t,s){e.exports=s.p+"img/nigeria.330e623e.svg"},9322:function(e,t,s){e.exports=s.p+"img/youtube-play.47f1b41c.svg"},a2f1:function(e,t,s){e.exports=s.p+"img/noun-wallet-1564321.0f15f3be.svg"},a3f4:function(e,t,s){},b05b:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"container"},[s("nav",[s("router-link",{attrs:{to:{path:"/"}}},[e._v("Mai")]),s("div",[s("p",[e._v("Already have an account?")]),s("p",{staticClass:"login-from-signup",on:{click:function(t){return e.toggleLoginModal(!0)}}},[e._v("Login")])])],1),s("div",{staticClass:"below-nav"},[e._m(0),s("form",{staticClass:"right",on:{submit:function(t){return t.preventDefault(),e.signup(t)}}},[s("div",{staticClass:"first"},[s("div",[s("label",{attrs:{for:""}},[e._v("First name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.first_name,expression:"first_name"}],attrs:{type:"text",placeholder:"John",required:""},domProps:{value:e.first_name},on:{input:function(t){t.target.composing||(e.first_name=t.target.value)}}})]),s("div",[s("label",{attrs:{for:""}},[e._v("Last name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.last_name,expression:"last_name"}],attrs:{type:"text",placeholder:"Doe",required:""},domProps:{value:e.last_name},on:{input:function(t){t.target.composing||(e.last_name=t.target.value)}}})])]),s("div",{staticClass:"second"},[s("label",{attrs:{for:""}},[e._v("Email address")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"Yourmail@mail.com",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),s("div",{staticClass:"third"},[s("label",{attrs:{for:""}},[e._v("Phone number")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.phone_number,expression:"phone_number"}],attrs:{type:"text",placeholder:"80 - 734 - 04890",required:""},domProps:{value:e.phone_number},on:{input:function(t){t.target.composing||(e.phone_number=t.target.value)}}}),e._m(1)]),s("div",{staticClass:"fourth"},[s("label",{attrs:{for:""}},[e._v("Create password")]),"checkbox"===(e.showPassword?"text":"password")?s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"Password",required:"",type:"checkbox"},domProps:{checked:Array.isArray(e.password)?e._i(e.password,null)>-1:e.password},on:{change:function(t){var s=e.password,a=t.target,r=!!a.checked;if(Array.isArray(s)){var o=null,i=e._i(s,o);a.checked?i<0&&(e.password=s.concat([o])):i>-1&&(e.password=s.slice(0,i).concat(s.slice(i+1)))}else e.password=r}}}):"radio"===(e.showPassword?"text":"password")?s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"Password",required:"",type:"radio"},domProps:{checked:e._q(e.password,null)},on:{change:function(t){e.password=null}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"Password",required:"",type:e.showPassword?"text":"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),s("p",{staticClass:"show-password",on:{click:function(t){e.showPassword=!e.showPassword}}},[e._v("Show password")])]),s("transition",{attrs:{name:"slide-into"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.passwordStrength,expression:"passwordStrength"}]},[s("div",{staticClass:"password__strength"},[s("div",{ref:"password",staticClass:"password__strength-length"})]),e.passwordStrength?s("div",{staticClass:"password__strength-text"},[e._v(e._s(e.passwordStrength))]):e._e()])]),e._m(2),s("div",{staticClass:"fifth"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(t){var s=e.checked,a=t.target,r=!!a.checked;if(Array.isArray(s)){var o=null,i=e._i(s,o);a.checked?i<0&&(e.checked=s.concat([o])):i>-1&&(e.checked=s.slice(0,i).concat(s.slice(i+1)))}else e.checked=r}}}),s("p",[e._v("I agree to Terms and Conditions. See Privacy and Cookie Policy for information on how we use the the information you provide to us.")])]),e.errorMessage?s("p",{staticClass:"signup-err__message"},[e._v(e._s(e.errorMessage))]):e._e(),e.isLoading?s("div",{staticClass:"rolling-spinner"},[e._m(3)]):s("button",{staticClass:"signup-submit__btn",class:{not_checked:!e.checked},attrs:{disabled:e.isLoading||!e.checked}},[e._v(" Create Account ")])],1),e.verifyAcctDisplay?s("div",{staticClass:"verify-acct-display"},[s("div",{staticClass:"verify-acct-display__wrapper"},[e._m(4),s("button",{staticClass:"verify-acct-display__button",on:{click:e.verified}},[e._v("OK")])])]):e._e()])]),s("div",{staticClass:"above-footer"},[e._m(5),e.loginModal?s("Login"):e._e()],1),s("Footer")],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"left"},[a("div",[a("img",{attrs:{src:s("2902"),alt:"pills"}})]),a("h1",[e._v("Get started")]),a("p",[e._v("You’re just a few moments away from switching to a better, simpler pharmacy. Let’s start with some contact information and selecting a password.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"left-side"},[a("div",[a("img",{attrs:{src:s("7573"),alt:""}})]),a("p",[e._v("(+234)")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"sign-up-with-google",attrs:{href:"http://dry-wildwood-70605.herokuapp.com/google",target:"__blank"}},[a("p",{staticClass:"__text"},[e._v("Or Sign up with Google")]),a("div",{staticClass:"sign-up-with-google__logo"},[a("img",{attrs:{src:s("c754"),alt:"google-icon"}})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"rolling-spinner__image"},[a("img",{attrs:{src:s("bd28"),alt:""}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("Account created successfully. "),s("br"),e._v("Check your email and verify account")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"first"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:s("be72"),alt:""}})]),a("div",[a("h1",[e._v("Reliable")]),a("p",[e._v("All products displayed on 1mg are procured from verified and licensed pharmacies. All labs listed on the platform are accredited")])])]),a("div",{staticClass:"second"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:s("135d"),alt:""}})]),a("div",[a("h1",[e._v("Secure")]),a("p",[e._v("Express pharmacy uses Secure Sockets Layer (SSL) 128-bit encryption and is Payment Card Industry Data Security Standard (PCI DSS) compliant")])])]),a("div",{staticClass:"third"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:s("a2f1"),alt:""}})]),a("div",[a("h1",[e._v("Affordable")]),a("p",[e._v("Enjoy 20% off on allopathy medicines, up to 50% off on health products, up to 80% off on lab tests and free doctor consultations")])])])])}],o=s("5530"),i=s("fd2d"),n=s("578a"),c=s("2f62"),l={components:{Footer:i["a"],Login:n["a"]},data:function(){return{first_name:"",last_name:"",email:"",password:"",phone_number:"",showPassword:!1,checked:!1,passwordStrength:""}},computed:Object(o["a"])({},Object(c["c"])(["isLoading","errorMessage","verifyAcctDisplay","loginModal"])),methods:{signup:function(){var e={first_name:this.first_name,last_name:this.last_name,email:this.email,password:this.password,phone_number:this.phone_number};this.$store.dispatch("signup",e)},verified:function(){this.$router.push({path:"/"})},toggleLoginModal:function(e){this.$store.commit("toggleLoginModal",e)}},watch:{password:function(e){var t=this.$refs.password;e?e.length<3?(t.style.width="10%",this.passwordStrength="Very weak"):e.length<6?(t.style.width="30%",t.style.background="orangered",this.passwordStrength="Weak"):e.length<12?(t.style.width="65%",t.style.background="orange",this.passwordStrength="Fairly strong"):(t.style.background="green",t.style.width="100%",this.passwordStrength="Very strong"):(this.passwordStrength="",t.style.width="0%")}}},d=l,p=(s("41b7"),s("2877")),u=Object(p["a"])(d,a,r,!1,null,null,null);t["default"]=u.exports},b64b:function(e,t,s){var a=s("23e7"),r=s("7b0b"),o=s("df75"),i=s("d039"),n=i((function(){o(1)}));a({target:"Object",stat:!0,forced:n},{keys:function(e){return o(r(e))}})},bd28:function(e,t,s){e.exports=s.p+"img/rolling-spinner.8ead6fc9.svg"},be72:function(e,t,s){e.exports=s.p+"img/noun-badge-1563220.384d7c61.svg"},c754:function(e,t,s){e.exports=s.p+"img/google-logo.87bb3083.png"},dbb4:function(e,t,s){var a=s("23e7"),r=s("83ab"),o=s("56ef"),i=s("fc6a"),n=s("06cf"),c=s("8418");a({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(e){var t,s,a=i(e),r=n.f,l=o(a),d={},p=0;while(l.length>p)s=r(a,t=l[p++]),void 0!==s&&c(d,t,s);return d}})},e439:function(e,t,s){var a=s("23e7"),r=s("d039"),o=s("fc6a"),i=s("06cf").f,n=s("83ab"),c=r((function(){i(1)})),l=!n||c;a({target:"Object",stat:!0,forced:l,sham:!n},{getOwnPropertyDescriptor:function(e,t){return i(o(e),t)}})},fd2d:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",[a("div",{staticClass:"top"},[a("p",[e._v("Mai")]),a("div",[a("h1",[e._v("Do you have questions or complain about our services?")]),a("p",[e._v("Call us on Monday - Saturday 9am -8pm")]),a("p",[e._v("Send us a mail on contact@epharmarcy.com")]),a("p",[e._v("(+234)80 734 048 90, (+234)80 734 048 90")])])]),a("div",{staticClass:"bottom"},[a("p",[e._v("©All rights reserved.")]),a("div",{staticClass:"images"},[a("div",[a("img",{attrs:{src:s("44c6"),alt:""}})]),a("div",[a("img",{attrs:{src:s("1538"),alt:""}})]),a("div",[a("img",{attrs:{src:s("9322"),alt:""}})]),a("div",[a("img",{attrs:{src:s("6a55"),alt:""}})])])])])}],o={name:"Footer"},i=o,n=(s("53d7"),s("2877")),c=Object(n["a"])(i,a,r,!1,null,null,null);t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-8754e50e.2116d75d.js.map