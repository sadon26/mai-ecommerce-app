(function(e){function t(t){for(var o,s,a=t[0],d=t[1],c=t[2],u=0,l=[];u<a.length;u++)s=a[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&l.push(i[s][0]),i[s]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);g&&g(t);while(l.length)l.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var a=n[s];0!==i[a]&&(o=!1)}o&&(r.splice(t--,1),e=d(d.s=n[0]))}return e}var o={},s={app:0},i={app:0},r=[];function a(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-03ed5014":"d732d6b4","chunk-2672de03":"e7d4c6cb","chunk-8754e50e":"c9fe5028","chunk-db016a24":"45968670","chunk-e8b287d2":"5d8d4f98","chunk-f9e1000e":"c08871e9"}[e]+".js"}function d(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.e=function(e){var t=[],n={"chunk-2672de03":1,"chunk-8754e50e":1,"chunk-db016a24":1,"chunk-e8b287d2":1,"chunk-f9e1000e":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-03ed5014":"31d6cfe0","chunk-2672de03":"8771ac1a","chunk-8754e50e":"a7610f3f","chunk-db016a24":"90535f08","chunk-e8b287d2":"8d176a8d","chunk-f9e1000e":"7bb0ba7d"}[e]+".css",i=d.p+o,r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var c=r[a],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===o||u===i))return t()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){c=l[a],u=c.getAttribute("data-href");if(u===o||u===i)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var o=t&&t.target&&t.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete s[e],g.parentNode.removeChild(g),n(r)},g.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(g)})).then((function(){s[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,n){o=i[e]=[t,n]}));t.push(o[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,d.nc&&u.setAttribute("nonce",d.nc),u.src=a(e);var l=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(g);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",l.name="ChunkLoadError",l.type=o,l.request=s,n[1](l)}i[e]=void 0}};var g=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},d.m=e,d.c=o,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)d.d(n,o,function(t){return e[t]}.bind(null,o));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/",d.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var g=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"07a4":function(e,t,n){"use strict";n.d(t,"a",(function(){return Y}));var o={};n.r(o),n.d(o,"state",(function(){return v})),n.d(o,"getters",(function(){return w})),n.d(o,"mutations",(function(){return A})),n.d(o,"actions",(function(){return P}));var s={};n.r(s),n.d(s,"state",(function(){return b})),n.d(s,"getters",(function(){return k})),n.d(s,"mutations",(function(){return S})),n.d(s,"actions",(function(){return C}));var i={};n.r(i),n.d(i,"state",(function(){return _})),n.d(i,"mutations",(function(){return I})),n.d(i,"getters",(function(){return M})),n.d(i,"actions",(function(){return O}));var r={};n.r(r),n.d(r,"state",(function(){return T})),n.d(r,"getters",(function(){return D})),n.d(r,"mutations",(function(){return W})),n.d(r,"actions",(function(){return x}));var a={};n.r(a),n.d(a,"state",(function(){return E})),n.d(a,"getters",(function(){return j})),n.d(a,"mutations",(function(){return q})),n.d(a,"actions",(function(){return B}));var d={};n.r(d),n.d(d,"state",(function(){return G})),n.d(d,"getters",(function(){return $})),n.d(d,"mutations",(function(){return H})),n.d(d,"actions",(function(){return N}));var c={};n.r(c),n.d(c,"state",(function(){return Q})),n.d(c,"getters",(function(){return U})),n.d(c,"mutations",(function(){return J})),n.d(c,"actions",(function(){return F}));var u={};n.r(u),n.d(u,"state",(function(){return K})),n.d(u,"getters",(function(){return R})),n.d(u,"mutations",(function(){return z})),n.d(u,"actions",(function(){return V}));var l=n("2b0e"),g=n("2f62"),f=n("bfa9"),p=n("bc3a"),h=n.n(p),m=n("a18c"),L={isLoading:!1,errorMessage:null,verifyAcctDisplay:!1,userDetails:null,isLoggedIn:!1},v={isLoading:!1,errorMessage:null,verifyAcctDisplay:!1,userDetails:null,isLoggedIn:!1,loginSuccessPopup:!1,loginLoading:!1},w={isLoading:function(e){return e.isLoading},errorMessage:function(e){return e.errorMessage},verifyAcctDisplay:function(e){return e.verifyAcctDisplay},isLoggedIn:function(e){return e.isLoggedIn},user:function(e){return e.userDetails},loginSuccessPopup:function(e){return e.loginSuccessPopup},loginLoading:function(e){return e.loginLoading}},A={signup:function(e,t){console.log(t)},isLoading:function(e,t){e.isLoading=t},errMessage:function(e,t){e.errorMessage=t},verifyAcctDisplay:function(e,t){return e.verifyAcctDisplay=t},storeUser:function(e,t){e.userDetails={userId:t.data.data.id,token:t.data.data.token,first_name:t.data.data.first_name,last_name:t.data.data.last_name,email:t.data.data.email},e.isLoggedIn=!0,console.log(e.userDetails,e.isLoggedIn)},loginLoading:function(e,t){e.loginLoading=t},loggedIn:function(e,t){e.isLoggedIn=t},loginSuccessPopup:function(e,t){e.loginSuccessPopup=t},logout:function(e){Object.assign(e,L)},signinWithGoogle:function(e,t){var n=t.res,o=t.token;e.userDetails={userId:n.data.data.id,token:o,first_name:n.data.data.first_name,last_name:n.data.data.last_name,email:n.data.data.email},e.isLoggedIn=!0,console.log(e.userDetails,e.isLoggedIn)},refreshToken:function(e,t){e.userDetails.token=t}},P={signup:function(e,t){var n=e.commit,o=e.dispatch;n("isLoading",!0),n("errMessage",!1),h.a.post("/auth/register",t).then((function(e){n("isLoading",!1),n("signup",t),n("verifyAcctDisplay",!0),o("getAllCartItems",e.data.data.token),o("getAllWishLists",e.data.data.token),n("storeUser",e),console.log(e)})).catch((function(e){console.log(e.response.data.message),n("errMessage",e.response.data.message),n("isLoading",!1)}))},login:function(e,t){var n=e.commit,o=e.dispatch;n("loginLoading",!0),n("errMessage",!1),h.a.post("/auth/login",t).then((function(e){n("loginLoading",!1),n("storeUser",e),setTimeout((function(){n("loginSuccessPopup",!0)}),300),setTimeout((function(){n("loginSuccessPopup",!1)}),7e3),o("toggleLoginModal",!1),"/signup"===m["a"].history.current.path&&m["a"].push("/")})).catch((function(e){console.log(e),n("errMessage",e.response.data.message),n("loginLoading",!1)}))},isLoggedIn:function(e,t){var n=e.commit;n("loggedIn",t)},logout:function(e){var t=e.commit;t("logout")},signinWithGoogle:function(e,t){var n=e.commit;n("signinWithGoogle",t),setTimeout((function(){n("loginSuccessPopup",!0)}),300),setTimeout((function(){n("loginSuccessPopup",!1)}),7e3)}},y=(n("b0c0"),n("2909")),b={categories:[],productsInCategory:null,errorGettingProduct:null,loadingCategorySpinner:!1},k={getProductCategories:function(e){return e.categories},productsInCategory:function(e){return e.productsInCategory},errorGettingProduct:function(e){return e.errorGettingProduct},loadingCategorySpinner:function(e){return e.loadingCategorySpinner}},S={setProductCategories:function(e,t){e.categories=Object(y["a"])(t),console.log(e.categories)},setProducts:function(e,t){e.productsInCategory=t,console.log(e.productsInCategory)},errorGettingProduct:function(e,t){e.errorGettingProduct=t,console.log(t)},loadingCategorySpinner:function(e,t){e.loadingCategorySpinner=t}},C={getProductCategories:function(e){var t=e.commit;h.a.get("/category").then((function(e){var n=e.data.data;t("setProductCategories",n)})).catch((function(e){return console.log(e)}))},getProducts:function(e,t){var n=e.commit;n("errorGettingProduct",null),n("setProducts",null),n("loadingCategorySpinner",!0),h.a.post("/select/product/category",{category:t.name}).then((function(e){console.log(e),n("loadingCategorySpinner",!1);var t=e.data.data;n("setProducts",t)})).catch((function(e){console.log(e.response.data.message),n("errorGettingProduct",e.response.data.message),n("setProducts",null),n("loadingCategorySpinner",!1)}))}},_={searchProduct:""},I={updateSearchProduct:function(e,t){return e.searchProduct=t},clearSearch:function(e){e.searchProduct=""}},M={searchProduct:function(e){return e.searchProduct}},O={updateSearchProduct:function(e,t){var n=e.commit;n("updateSearchProduct",t)},search:function(e,t){var n=e.commit;n("clearSearch"),t&&h.a.post("/search/Product",{product_name:t}).then((function(e){console.log(e)})).catch((function(e){return console.log(e.response.data.message)}))}},T={loginModal:!1},D={loginModal:function(e){return e.loginModal}},W={toggleLoginModal:function(e,t){e.loginModal=t}},x={toggleLoginModal:function(e,t){var n=e.commit;n("toggleLoginModal",t)}},E={showProductOverview:null},j={productOverview:function(e){return e.showProductOverview}},q={showProductOverview:function(e,t){e.showProductOverview=t,console.log(t)},hideProductOverview:function(e){e.showProductOverview=null}},B={showProductOverview:function(e,t){var n=e.commit;n("showProductOverview",t)},hideProductOverview:function(e){var t=e.commit;t("hideProductOverview")}},G=(n("d81d"),{cartItems:[],itemAddedPopup:!1,quantityInCart:null,loadingCart:!1}),$={cartItems:function(e){return e.cartItems},itemAddedPopup:function(e){return e.itemAddedPopup},quantityInCart:function(e){return e.quantityInCart},loadingCart:function(e){return e.loadingCart}},H={addToCart:function(e,t){var n=t.product_name,o=t.product_image,s=t.quantity,i=t.price,r=t.id,a=t.sub_total;e.cartItems.push({product_name:n,product_image:o,quantity:s,price:i,id:r,sub_total:a}),console.log(e.cartItems)},itemAddedPopup:function(e,t){return e.itemAddedPopup=t},allCartItems:function(e,t){console.log(t),e.cartItems=t},cartQuantity:function(e){var t=0;e.cartItems.map((function(e){t+=e.quantity})),e.quantityInCart=t,console.log(t),console.log(e.quantityInCart)},loadingCart:function(e,t){e.loadingCart=t}},N={addToCart:function(e,t){var n=e.commit,o=e.dispatch,s=t.productOverview,i=t.token,r=t.uuid,a={headers:{token:i}};console.log(i,s.id),console.log(r),h.a.post("/cart",{product_id:s.id,order_id:r},a).then((function(e){console.log(e),n("wishListAddedPopup",!0),setTimeout((function(){return n("wishListAddedPopup",!1)}),3e3),o("getAllCartItems",i),n("wishListMessage","".concat(s.product_name," added to the Cart"))})).catch((function(e){console.log(e),n("wishListMessage",e.response.data.message),n("wishListAddedPopup",!0),setTimeout((function(){return n("wishListAddedPopup",!1)}),3e3)}))},getAllCartItems:function(e,t){var n=e.commit,o={headers:{token:t}};h.a.get("/cart",o).then((function(e){console.log(e),n("allCartItems",e.data.cart),n("cartQuantity")})).catch((function(e){return console.log(e)}))},deleteCartItem:function(e,t){var n=e.commit,o=e.dispatch,s=t.id,i=t.token,r={headers:{token:i}};n("loadingCart",!0),h.a.delete("/cart/".concat(s),r).then((function(e){n("loadingCart",!1),console.log(e),o("getAllCartItems",i),n("cartQuantity")})).catch((function(e){console.log(e),n("loadingCart",!1)}))},updateQuantity:function(e,t){var n=e.commit,o=e.dispatch,s=t.data,i=t.token,r={headers:{token:i}};console.log(s.item.product_name,s.quantity),n("addressSpinnerLoading",!0),h.a.post("/search/product",{product_name:s.item.product_name}).then((function(e){var t=e.data.data.quantity,a=s.quantity;console.log(e.data.data.quantity),a<=t?h.a.patch("/cart",{id:s.item.id,quantity:a},r).then((function(e){n("addressSpinnerLoading",!1),console.log(e),n("wishListAddedPopup",!0),n("wishListMessage","Quantity updated successfully"),o("getAllCartItems",i),setTimeout((function(){return n("wishListAddedPopup",!1)}),3e3)})).catch((function(e){console.log(e.response.data.message),n("wishListAddedPopup",!0),n("wishListMessage",e.response.data.message.name),setTimeout((function(){return n("wishListAddedPopup",!1)}),3e3),n("addressSpinnerLoading",!1)})):(n("wishListAddedPopup",!0),n("wishListMessage","Only ".concat(t," quantities left for this product")),setTimeout((function(){return n("wishListAddedPopup",!1)}),3e3),n("addressSpinnerLoading",!1))})).catch((function(e){console.log(e.response.data.message),n("addressSpinnerLoading",!1)}))}},Q={wishLists:[],wishListAddedPopup:!1,wishListMessage:"",showWishList:!1},U={wishList:function(e){return e.wishLists},wishListAddedPopup:function(e){return e.wishListAddedPopup},wishListMessage:function(e){return e.wishListMessage},showHideWishList:function(e){return e.showWishList}},J={wishListAddedPopup:function(e,t){e.wishListAddedPopup=t,console.log(e.wishListAddedPopup)},getAllWishLists:function(e,t){console.log(t),e.wishLists=t},wishListMessage:function(e,t){e.wishListMessage=t,console.log(e.wishListMessage)},showHideWishList:function(e,t){e.showWishList=t,console.log(t)}},F={addToWishList:function(e,t){var n=e.commit,o=e.dispatch,s=t.productOverview,i=t.token,r={headers:{token:i}};console.log(s.id,i),h.a.post("/wishlist",{product_id:s.id},r).then((function(e){console.log(e),n("wishListAddedPopup",!0),n("wishListMessage","".concat(s.product_name," added to the Wish List")),o("getAllWishLists",i),setTimeout((function(){return n("wishListAddedPopup",!1)}),3e3)})).catch((function(e){n("wishListAddedPopup",!0),console.log(e),n("wishListMessage",e.response.data.message),setTimeout((function(){return n("wishListAddedPopup",!1)}),3e3)}))},getAllWishLists:function(e,t){var n=e.commit,o={headers:{token:t}};h.a.get("/wishlist",o).then((function(e){console.log(e),n("getAllWishLists",e.data.wishList)})).catch((function(e){return console.log("here",e.response.data.message)}))},showHideWishList:function(e,t){var n=e.commit;n("showHideWishList",t)},deleteWishList:function(e,t){var n=e.commit,o=e.dispatch,s=t.token,i=t.item,r={headers:{token:s}};console.log(i.id,s),h.a.delete("/wishlist/".concat(i.id),r).then((function(e){console.log(e),n("wishListAddedPopup",!0),n("wishListMessage","".concat(i.product_name," has been deleted from the Wish List")),o("getAllWishLists",s),setTimeout((function(){return n("wishListAddedPopup",!1)}),3e3)})).catch((function(e){n("wishListAddedPopup",!0),console.log(e),n("wishListMessage",e.response.data.message),setTimeout((function(){return n("wishListAddedPopup",!1)}),3e3)}))},moveToCart:function(e,t){var n=e.commit,o=e.dispatch,s=t.token,i=t.item,r={headers:{token:s}};h.a.post("/cart/wishlist",{id:i.id},r).then((function(e){console.log(e),n("wishListAddedPopup",!0),o("getAllCartItems",s),n("wishListMessage","".concat(i.product_name," has been added to the Cart")),setTimeout((function(){return n("wishListAddedPopup",!1)}),3e3)})).catch((function(e){console.log(e.response.data.message),n("wishListAddedPopup",!0),n("wishListMessage","".concat(e.response.data.message)),setTimeout((function(){return n("wishListAddedPopup",!1)}),3e3)}))}},K=(n("4de4"),{address:null,statesAndLga:null,lgas:[],addressSpinnerLoading:!1,showEditAddressBox:!0,showAddAddress:!1,editAddressDetails:""}),R={address:function(e){return e.address},statesAndLga:function(e){return e.statesAndLga},lgas:function(e){return e.lgas},addressSpinnerLoading:function(e){return e.addressSpinnerLoading},showEditAddressBox:function(e){return e.showEditAddressBox},showAddAddress:function(e){return e.showAddAddress},editAddressDetails:function(e){return e.editAddressDetails}},z={getAddress:function(e,t){console.log(t),e.address=t},statesAndLga:function(e,t){e.statesAndLga=t},lgas:function(e){var t=e.statesAndLga.filter((function(e){return"adamawa"===e.alias}));e.lgas=t[0].lgas,console.log(e.lgas)},updateSelectedLga:function(e,t){var n=e.statesAndLga.filter((function(e){return e.alias===t}));e.lgas=n[0].lgas,console.log(e.lgas)},addressSpinnerLoading:function(e,t){e.addressSpinnerLoading=t},showEditAddressBox:function(e,t){e.showEditAddressBox=t},showAddAddress:function(e,t){e.showAddAddress=t},editAddressDetails:function(e,t){console.log(t),e.editAddressDetails=t}},V={getAddress:function(e,t){var n=e.commit,o={headers:{token:t}};n("addressSpinnerLoading",!0),h.a.get("address",o).then((function(e){console.log(e),n("addressSpinnerLoading",!1),n("getAddress",e.data.data)})).catch((function(e){console.log(e),n("addressSpinnerLoading",!1)}))},addAddress:function(e,t){var n=e.commit,o=e.dispatch,s=t.addressDetails,i=t.token,r={headers:{token:i}};console.log(s,i),n("addressSpinnerLoading",!0),h.a.post("address",s,r).then((function(e){console.log(e),o("getAddress",i),n("showEditAddressBox",!1),n("showAddAddress",!1),n("addressSpinnerLoading",!1)})).catch((function(e){console.log(e),n("addressSpinnerLoading",!1)}))},editAddress:function(e,t){var n=e.commit,o=t.id,s=t.token,i={headers:{token:s}};n("addressSpinnerLoading",!0),h.a.get("/oneAddress/".concat(o),i).then((function(e){n("addressSpinnerLoading",!1),n("editAddressDetails",e.data),n("showAddAddress",!0)})).catch((function(e){console.log(e.response.data.message),n("addressSpinnerLoading",!1)}))},removeAddress:function(e,t){var n=e.commit,o=e.dispatch,s=t.id,i=t.token,r={headers:{token:i}};n("addressSpinnerLoading",!0),h.a.delete("/address/".concat(s),r).then((function(e){n("addressSpinnerLoading",!1),console.log(e),o("getAddress",i)})).catch((function(e){console.log(e.response.data.message),n("addressSpinnerLoading",!1)}))},saveAsDefaultAddress:function(e,t){var n=e.commit,o=e.dispatch,s=t.id,i=t.token,r={headers:{token:i}};n("addressSpinnerLoading",!0),h.a.patch("/address",{id:s},r).then((function(e){console.log(e),o("getAddress",i),n("showEditAddressBox",!1),n("addressSpinnerLoading",!1)})).catch((function(e){console.log(e.response.data.message),n("addressSpinnerLoading",!1)}))},updateAddress:function(e,t){var n=e.commit,o=e.dispatch,s=t.addressDetails,i=t.token,r={headers:{token:i}};console.log(s,i);var a=s.id,d=s.additional_mobile_number,c=s.address,u=s.city,l=s.first_name,g=s.last_name,f=s.mobile_number,p=s.state_region;n("addressSpinnerLoading",!0),h.a.put("/address",{id:a,additional_mobile_number:d,address:c,city:u,first_name:l,last_name:g,mobile_number:f,state_region:p},r).then((function(e){console.log(e),n("addressSpinnerLoading",!1),o("getAddress",i),n("showAddAddress",!1),n("showEditAddressBox",!1)})).catch((function(e){console.log(e),n("addressSpinnerLoading",!1)}))}},X=new f["a"]({storage:localStorage});l["a"].use(g["a"]);var Y=new g["a"].Store({modules:{auth:o,categories:s,searchProduct:i,LoginModal:r,productOverview:a,cartItem:d,wishList:c,checkout:u},plugins:[X.plugin]})},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"eventBus",(function(){return v}));n("4de4"),n("a15b"),n("fb6a"),n("a9e3"),n("ac1f"),n("5319"),n("1276"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],r={},a=r,d=(n("5c0b"),n("2877")),c=Object(d["a"])(a,s,i,!1,null,null,null),u=c.exports,l=n("a18c"),g=n("07a4"),f=n("bc3a"),p=n.n(f),h=n("04e1"),m=n.n(h),L=n("ec26");p.a.defaults.baseURL="https://dry-wildwood-70605.herokuapp.com/api/v1",o["a"].filter("toCurrency",(function(e){var t=String(e),n=t.split(".")[0],o=(t.split(".")[1]||"")+"00";return n=n.split("").reverse().join("").replace(/(\d{3}(?!$))/g,"$1,").split("").reverse().join(""),"₦"+n+"."+o.slice(0,2)})),o["a"].config.productionTip=!1,o["a"].prototype.$axios=p.a,o["a"].prototype.$uuid=Object(L["a"])(),new o["a"]({store:g["a"],router:l["a"],watch:{"$store.getters.user":function(e){this.$store.getters.user&&w(),console.log("hello")}},render:function(e){return e(u)}}).$mount("#app");var v=new o["a"]({});function w(){setInterval((function(){if(g["a"].getters.user){var e=g["a"].getters.user.token,t=m()(e),n=new Date,o=Number(String(n.getTime()).slice(0,10)),s=60;if(o>=t.exp-s){console.log(t.exp-s,o);var i={headers:{token:e}};p.a.get("/token",i).then((function(e){console.log(e.data.token),g["a"].commit("refreshToken",e.data.token)})).catch((function(e){return console.log(e)}))}}}),1e3)}},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),s=n.n(o);s.a},"9c0c":function(e,t,n){},a18c:function(e,t,n){"use strict";n("d3b7");var o=n("2b0e"),s=n("8c4f"),i=function(){return n.e("chunk-8754e50e").then(n.bind(null,"b05b"))},r=function(){return n.e("chunk-db016a24").then(n.bind(null,"bede"))},a=function(){return n.e("chunk-03ed5014").then(n.bind(null,"bb51"))},d=function(){return n.e("chunk-2672de03").then(n.bind(null,"58c2"))},c=function(){return n.e("chunk-e8b287d2").then(n.bind(null,"b789"))},u=function(){return n.e("chunk-f9e1000e").then(n.bind(null,"7cb4"))};o["a"].use(s["a"]);var l=[{path:"/signup",name:"Signup",component:i},{path:"/",name:"Landing",component:r,children:[{path:"",name:"Home",component:a},{path:"categories/:id",name:"Categories",component:d},{path:"/cart",name:"Cart",component:c},{path:"/checkout",name:"Checkout",component:u}]}],g=new s["a"]({mode:"history",base:"/",routes:l});t["a"]=g}});
//# sourceMappingURL=app.bb4b6055.js.map