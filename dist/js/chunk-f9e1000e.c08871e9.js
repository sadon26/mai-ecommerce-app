(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f9e1000e"],{"159b":function(e,s,t){var a=t("da84"),d=t("fdbc"),i=t("17c2"),r=t("9112");for(var n in d){var o=a[n],l=o&&o.prototype;if(l&&l.forEach!==i)try{r(l,"forEach",i)}catch(c){l.forEach=i}}},"17c2":function(e,s,t){"use strict";var a=t("b727").forEach,d=t("a640"),i=t("ae40"),r=d("forEach"),n=i("forEach");e.exports=r&&n?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},"331b":function(e,s,t){e.exports=t.p+"img/cancel-black.b5f80afd.svg"},"335c":function(e,s,t){"use strict";var a=t("8631"),d=t.n(a);d.a},4160:function(e,s,t){"use strict";var a=t("23e7"),d=t("17c2");a({target:"Array",proto:!0,forced:[].forEach!=d},{forEach:d})},5530:function(e,s,t){"use strict";t.d(s,"a",(function(){return i}));t("a4d3"),t("4de4"),t("4160"),t("e439"),t("dbb4"),t("b64b"),t("159b");function a(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function d(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?d(Object(t),!0).forEach((function(s){a(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}},5605:function(e,s,t){},7131:function(e,s,t){e.exports=t.p+"img/check-green.8fd17dab.svg"},"7cb4":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"checkout__wrapper"},[a("div",{staticClass:"checkout"},[a("div",{staticClass:"address__n__subtotal"},[a("div",{staticClass:"checkout-address"},[a("div",{staticClass:"checkout-address-heading"},[0===e.address.length?a("div",{staticClass:"checkout-address-heading-image"},[a("img",{attrs:{src:t("dad4"),alt:"check-grey"}})]):a("div",{staticClass:"checkout-address-heading-image"},[a("img",{attrs:{src:t("7131"),alt:"check-grey"}})]),a("p",{staticClass:"checkout-address-heading-text"},[e._v("ADDRESS")])]),0===e.address.length?a("div",{staticClass:"checkout-no-address-details"},[a("div",{staticClass:"checkout-address-details-body"},[e._v(" Add an address ")])]):a("div",{staticClass:"checkout-address-details"},[a("div",{staticClass:"checkout-address-details-full-name"},[e._v(e._s(e.defaultAddress[0].first_name)+" "+e._s(e.defaultAddress[0].last_name))]),a("div",{staticClass:"checkout-address-details-location"},[a("div",[e._v(e._s(e.defaultAddress[0].address))]),a("div",[e._v(e._s(e.defaultAddress[0].mobile_number))]),e.defaultAddress[0].additional_mobile_number?a("div",[e._v(e._s(e.defaultAddress[0].additional_mobile_number))]):e._e()])]),a("div",{staticClass:"edit-icon-box",on:{click:function(s){return e.showEditAddress(!0)}}},[e._m(0)])]),a("div",{staticClass:"checkout-subtotal"},[e._v(" lmsf ")])])]),e.addressSpinnerLoading?a("div",{staticClass:"updating-address-spinner-bg"},[e._m(1)]):e._e(),e.showEditAddressBox?a("EditAddress",{attrs:{defaultAddress:e.defaultAddress}}):e._e()],1)},d=[function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"edit-icon"},[a("img",{attrs:{src:t("9e92"),alt:"edit-icon"}})])},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"updating-address-spinner"},[a("img",{attrs:{src:t("bd28"),alt:"rolling-spinner"}})])}],i=(t("4de4"),t("5530")),r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"edit__address"},[t("div",{staticClass:"edit__address-container"},[0===e.address.length?t("addAddress"):t("div",[e.showAddAddress?t("addAddress"):t("div",{staticClass:"all_addresses"},[t("p",{staticClass:"address__book-heading"},[e._v("Address Book")]),t("div",{staticClass:"add__new-address-btn",on:{click:function(s){return e.showAddAddressDetail(!0)}}},[t("div",{staticClass:"add__new-address-btn--plus"},[t("span",[e._v("+")])]),t("span",{staticClass:"add__new-address-btn--text"},[e._v("ADD A NEW ADDRESS")])]),t("div",{staticClass:"all__addresses-wrapper"},[t("p",{staticClass:"all__addresses-default"},[e._v("DEFAULT ADDRESS")]),t("div",{staticClass:"default-address-details"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedAddress,expression:"selectedAddress"}],staticClass:"default-address-details-input",attrs:{name:"address",type:"radio"},domProps:{value:e.defaultAddress[0].id,checked:e._q(e.selectedAddress,e.defaultAddress[0].id)},on:{change:function(s){e.selectedAddress=e.defaultAddress[0].id}}}),t("div",{staticClass:"default-address-details-wrapper"},[t("div",[t("div",{staticClass:"default-address-full-name"},[e._v(e._s(e.defaultAddress[0].first_name)+" "+e._s(e.defaultAddress[0].last_name))]),t("div",{staticClass:"default-address-location"},[t("div",[e._v(e._s(e.defaultAddress[0].address))]),t("div",[e._v(e._s(e.defaultAddress[0].mobile_number))]),e.defaultAddress[0].additional_mobile_number?t("div",[e._v(e._s(e.defaultAddress[0].additional_mobile_number))]):e._e()])]),t("div",{staticClass:"address-edit-and-remove"},[t("p",{on:{click:function(s){return e.editAddress(e.defaultAddress[0].id)}}},[e._v("Edit")])])])]),e.savedAddresses.length>0?t("p",{staticClass:"all__addresses-default"},[e._v("SAVED ADDRESSES")]):e._e(),e._l(e.savedAddresses,(function(s,a){return t("div",{key:a,staticClass:"default-address-details"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedAddress,expression:"selectedAddress"}],staticClass:"default-address-details-input",attrs:{name:"address",type:"radio"},domProps:{value:s.id,checked:e._q(e.selectedAddress,s.id)},on:{change:function(t){e.selectedAddress=s.id}}}),t("div",{staticClass:"default-address-details-wrapper"},[t("div",[t("div",{staticClass:"default-address-full-name"},[e._v(e._s(s.first_name)+" "+e._s(s.last_name))]),t("div",{staticClass:"default-address-location"},[t("div",[e._v(e._s(s.address))]),t("div",[e._v(e._s(s.mobile_number)),s.additional_mobile_number?t("span",[e._v(", "+e._s(s.additional_mobile_number)+" ")]):e._e()])])]),t("div",{staticClass:"address-edit-and-remove"},[t("p",{on:{click:function(t){return e.editAddress(s.id)}}},[e._v("Edit")]),t("p",{on:{click:function(t){return e.removeAddress(s.id)}}},[e._v("Remove")])])])])}))],2),t("button",{staticClass:"save-address-as-default",on:{click:e.saveAsDefaultAddress}},[e._v("SAVE AS DEFAULT ADDRESS")])])],1),t("div",{staticClass:"cancel__edit-address-wrapper",on:{click:function(s){return e.hideEditAddress(!1)}}},[e._m(0)]),e.addressSpinnerLoading?t("div",{staticClass:"updating-address-spinner-bg"},[e._m(1)]):e._e()],1)])},n=[function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"cancel__edit-address-icon"},[a("img",{attrs:{src:t("331b"),alt:"cancel-black-icon"}})])},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"updating-address-spinner"},[a("img",{attrs:{src:t("bd28"),alt:"rolling-spinner"}})])}],o=t("2f62"),l=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"add__new-address-wrapper"},[t("form",{staticClass:"add__new-address",on:{submit:function(s){s.preventDefault(),e.editAddressDetails?e.updateAddress():e.submitAddress()}}},[e.editAddressDetails?t("p",{staticClass:"add__new-address-heading"},[e._v("EDIT ADDRESS")]):t("p",{staticClass:"add__new-address-heading"},[e._v("ADD ADDRESS")]),t("div",{staticClass:"add__first-n-last-name"},[t("div",{staticClass:"add__first-name"},[t("label",{attrs:{for:""}},[e._v("First name *")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.first_name,expression:"first_name"}],attrs:{placeholder:"First name",type:"text",required:""},domProps:{value:e.first_name},on:{input:function(s){s.target.composing||(e.first_name=s.target.value)}}})]),t("div",{staticClass:"add__last-name"},[t("label",{attrs:{for:""}},[e._v("Last name *")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.last_name,expression:"last_name"}],attrs:{placeholder:"Last name",type:"text",required:""},domProps:{value:e.last_name},on:{input:function(s){s.target.composing||(e.last_name=s.target.value)}}})])]),t("div",{staticClass:"add__mobile-number"},[t("label",{attrs:{for:""}},[e._v("Mobile number *")]),t("div",{staticClass:"add__mobile-number-input"},[t("div",{staticClass:"add__mobile-number-input-left"},[e._v("234")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile_number,expression:"mobile_number"}],staticClass:"add__mobile-number-input-right",attrs:{placeholder:"08022123123",type:"number",required:""},domProps:{value:e.mobile_number},on:{input:function(s){s.target.composing||(e.mobile_number=s.target.value)}}})])]),e.showAdditionalPhoneNo?e._e():t("div",{staticClass:"show__additional-phone-no",on:{click:function(s){e.showAdditionalPhoneNo=!0}}},[e._m(0),t("p",{staticClass:"show__additional-phone-no-add-second"},[e._v("Add a second phone number")])]),e.showAdditionalPhoneNo?t("div",{staticClass:"additional__mobile-number"},[t("label",{attrs:{for:""}},[e._v("Additional mobile number *")]),t("div",{staticClass:"add__mobile-number-input"},[t("div",{staticClass:"add__mobile-number-input-left"},[e._v("234")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.additional_mobile_number,expression:"additional_mobile_number"}],staticClass:"add__mobile-number-input-right",attrs:{placeholder:"08022123123",type:"number"},domProps:{value:e.additional_mobile_number},on:{input:function(s){s.target.composing||(e.additional_mobile_number=s.target.value)}}})])]):e._e(),t("div",{staticClass:"add__address"},[t("label",[e._v("Address *")]),t("div",{staticClass:"add__address-input"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],staticClass:"add__address-input-right",attrs:{required:"",placeholder:"Street Name/Building/Apartment No./Floor",name:"",id:"",cols:"30",rows:"10"},domProps:{value:e.address},on:{input:function(s){s.target.composing||(e.address=s.target.value)}}})])]),t("div",{staticClass:"address-for-state"},[t("label",[e._v("State/Region *")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.state_region,expression:"state_region"}],staticClass:"address-for-state",attrs:{required:""},on:{change:[function(s){var t=Array.prototype.filter.call(s.target.options,(function(e){return e.selected})).map((function(e){var s="_value"in e?e._value:e.value;return s}));e.state_region=s.target.multiple?t:t[0]},e.selectState]}},e._l(e.statesAndLga,(function(s,a){return t("option",{key:a,attrs:{selected:""}},[e._v(e._s(s.alias))])})),0)]),t("div",{staticClass:"address-for-city"},[t("label",[e._v("City *")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.city,expression:"city"}],staticClass:"address-for-state",attrs:{required:""},on:{change:[function(s){var t=Array.prototype.filter.call(s.target.options,(function(e){return e.selected})).map((function(e){var s="_value"in e?e._value:e.value;return s}));e.city=s.target.multiple?t:t[0]},e.selectState]}},e._l(e.lgas,(function(s,a){return t("option",{key:a,attrs:{selected:""}},[e._v(e._s(s))])})),0)]),e.editAddressDetails?t("button",{staticClass:"btn__save-address-details"},[e._v("UPDATE")]):t("button",{staticClass:"btn__save-address-details"},[e._v("SAVE")])])])},c=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"show__additional-phone-no-add"},[t("span",[e._v("+")])])}],u={data:function(){return{showAdditionalPhoneNo:!1,state_region:"adamawa",first_name:"",last_name:"",mobile_number:"",additional_mobile_number:"",address:"",city:""}},computed:Object(i["a"])({},Object(o["c"])(["statesAndLga","lgas","editAddressDetails","showAddAddress"])),methods:{selectState:function(){console.log(this.lgas),this.$store.commit("updateSelectedLga",this.state_region)},submitAddress:function(){var e=this.$store.getters.user.token,s={state_region:this.state_region,first_name:this.first_name,last_name:this.last_name,mobile_number:this.mobile_number,additional_mobile_number:this.additional_mobile_number,address:this.address,city:this.city};this.$store.dispatch("addAddress",{addressDetails:s,token:e})},updateAddress:function(){var e=this.$store.getters.user.token,s={state_region:this.state_region,first_name:this.first_name,last_name:this.last_name,mobile_number:this.mobile_number,additional_mobile_number:this.additional_mobile_number,address:this.address,city:this.city,id:this.editAddressDetails.data.id};console.log(s),this.$store.dispatch("updateAddress",{addressDetails:s,token:e})}},watch:{editAddressDetails:{handler:function(e){e&&(console.log(e,this.editAddressDetails.data),this.state_region=e.data.state_region,this.first_name=e.data.first_name,this.last_name=e.data.last_name,this.mobile_number=e.data.mobile_number,this.additional_mobile_number=e.data.additional_mobile_number,this.address=e.data.address,this.city=e.data.city),this.$store.commit("updateSelectedLga",e.data.state_region)},immediate:!0}}},_=u,m=(t("d8dc"),t("2877")),v=Object(m["a"])(_,l,c,!1,null,null,null),f=v.exports,p={data:function(){return{selectedAddress:this.defaultAddress[0].id}},props:["defaultAddress"],name:"EditAddress",components:{addAddress:f},methods:{hideEditAddress:function(){this.$store.commit("showEditAddressBox",!1),this.$store.commit("showAddAddress",!1),this.$store.commit("editAddressDetails",null)},showAddAddressDetail:function(e){this.$store.commit("showAddAddress",e)},removeAddress:function(e){var s=this.$store.getters.user.token;this.$store.dispatch("removeAddress",{id:e,token:s})},editAddress:function(e){var s=this.$store.getters.user.token;this.$store.dispatch("editAddress",{id:e,token:s})},saveAsDefaultAddress:function(){var e=this.$store.getters.user.token;this.$store.dispatch("saveAsDefaultAddress",{id:this.selectedAddress,token:e})}},computed:Object(i["a"])(Object(i["a"])({},Object(o["c"])(["address","addressSpinnerLoading","showEditAddressBox","showAddAddress"])),{},{savedAddresses:function(){var e=this.address.filter((function(e){return"false"===e.is_default}));return e}})},h=p,b=(t("827d"),Object(m["a"])(h,r,n,!1,null,null,null)),g=b.exports,A=t("07a4"),C=t("a18c"),w={components:{EditAddress:g},computed:Object(i["a"])(Object(i["a"])({},Object(o["c"])(["address","showEditAddressBox","addressSpinnerLoading"])),{},{defaultAddress:function(){var e=this.address.filter((function(e){return"true"===e.is_default}));return e}}),beforeRouteEnter:function(e,s,t){A["a"].getters.isLoggedIn?t():C["a"].push({path:"/signup"})},created:function(){window.scrollY=0;var e=this.$store.getters.user.token;this.$store.dispatch("getAddress",e),this.getStates(),this.$store.commit("showEditAddressBox",!1),this.$store.commit("editAddressDetails",null),this.$store.commit("showAddAddress",!1),this.defaultAddress},methods:{getStates:function(){var e=this;this.$axios.get("http://locationsng-api.herokuapp.com/api/v1/lgas").then((function(s){console.log(s.data),e.$store.commit("statesAndLga",s.data),e.$store.commit("lgas")})).catch((function(e){return console.log(e)}))},showEditAddress:function(e){this.$store.commit("showEditAddressBox",e)}}},k=w,E=(t("335c"),Object(m["a"])(k,a,d,!1,null,null,null));s["default"]=E.exports},"827d":function(e,s,t){"use strict";var a=t("5605"),d=t.n(a);d.a},8631:function(e,s,t){},"9e92":function(e,s,t){e.exports=t.p+"img/edit-icon.b9b0fb5c.svg"},b64b:function(e,s,t){var a=t("23e7"),d=t("7b0b"),i=t("df75"),r=t("d039"),n=r((function(){i(1)}));a({target:"Object",stat:!0,forced:n},{keys:function(e){return i(d(e))}})},bd28:function(e,s,t){e.exports=t.p+"img/rolling-spinner.8ead6fc9.svg"},d071:function(e,s,t){},d8dc:function(e,s,t){"use strict";var a=t("d071"),d=t.n(a);d.a},dad4:function(e,s,t){e.exports=t.p+"img/check-grey.8eda9d3e.svg"},dbb4:function(e,s,t){var a=t("23e7"),d=t("83ab"),i=t("56ef"),r=t("fc6a"),n=t("06cf"),o=t("8418");a({target:"Object",stat:!0,sham:!d},{getOwnPropertyDescriptors:function(e){var s,t,a=r(e),d=n.f,l=i(a),c={},u=0;while(l.length>u)t=d(a,s=l[u++]),void 0!==t&&o(c,s,t);return c}})},e439:function(e,s,t){var a=t("23e7"),d=t("d039"),i=t("fc6a"),r=t("06cf").f,n=t("83ab"),o=d((function(){r(1)})),l=!n||o;a({target:"Object",stat:!0,forced:l,sham:!n},{getOwnPropertyDescriptor:function(e,s){return r(i(e),s)}})}}]);
//# sourceMappingURL=chunk-f9e1000e.c08871e9.js.map