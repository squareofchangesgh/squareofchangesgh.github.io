import{g as G}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-U74ODL6G.js";import{a as W,b as y,e as se}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-4IKXPOHB.js";import{a as I}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-R4PAHBE6.js";import{a as H,b as de}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-K45ZXRYF.js";import{c as A,k as oe}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-U77NG7W3.js";import{a as ce}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-RQ434LTH.js";import{l as h,m as re,r as f,s as ae}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-42TSFLLH.js";import{a as ee}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-JTEJSVZP.js";import{e as E,o as D,p as ie}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-Y3K5ZMDI.js";import{g as _,h as F,i as x,j as R,k as b,l as ne}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-HKXDGYOU.js";import{g as O,h as X}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-VUD7OPNE.js";import{b as m,c as te}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-SXBIDYQQ.js";import{a as Z}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-3SFTLRL3.js";import{b as Y}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-W2OJRSJR.js";import{d as v}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-TZYDFHR2.js";var V=v(Y()),i=v(Z()),q=v(ee());ne();ie();X();var z=v(ce());ae();re();te();se();de();oe();var j=async()=>{typeof window<"u"&&($=(await import("https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-XEKJBHRN.js")).default)},$=async(...e)=>{await j(),$(...e)};j();function C(e){let t=0,r="",s=[];for(let a of e)t+=a.price*a.cart_count,r=a.currency.toUpperCase(),s.push({item_id:a.id,item_name:a.name,item_variant:JSON.stringify(a.selectedOptions),price:a.price,quantity:a.cart_count});return{value:t,currency:r,items:s}}var le=q.default.View.extend({template:G["template-viewer-cart-sidebar"],initialize:function(e){return V.default.bindAll(this),this.mag=e,this.environment=this.mag.router.environment,this.rendered=!1,this.havePrices=!1,this.isHiddenSettings=!0,this.hoveredItem=null,this.render(),this},render:function(){if(RM.screenshot)return;{let s=H.getPermissions();if(!s||!s.can_use_e_commerce)return}if(!this.mag.eCommerceManager.isCartWidgetExist||this.mag.eCommerceManager.isPublished&&this.mag.eCommerceManager.getConnectedProvider()!=="ecwid"||this.rendered)return;this.rendered=!0,this.provider=this.mag.eCommerceManager.getConnectedProvider(),document.querySelectorAll("#cart-sidebar").length&&document.querySelectorAll("#cart-sidebar").forEach(s=>s.parentNode.removeChild(s)),this.setElement(this.template({isMobile:(0,z.isMobile)(),isViewer:this.environment===m.environment.viewer,imgPublicPath:W})),this.$el.appendTo((0,i.default)("body")),this.$toolbar=(0,i.default)(".toolbar.for-viewer"),this.$tabs=this.$el.find(".cart-sidebar-tabs"),this.$items=this.$el.find(".cart-items-list"),this.$closeButton=this.$el.find(".close-button"),this.$footer=this.$el.find(".sidebar-footer"),this.$calcTextContainer=this.$el.find(".text-size-calc-container"),this.$itemsTab=this.$tabs.find(".tab-items"),this.$checkOutButton=this.$itemsTab.find(".\u0441heck-out-btn"),this.cartWidgetData=A(this.environment,[...this.mag.staticGlobalWidgetsData,...this.mag.aboveGlobalWidgetsData]),this.environment===m.environment.preview&&(this.cartWidgetData&&this.cartWidgetData._id&&this.setupSettingsPanel(),window.RM.constructorRouter.on("previewClose",this.closeSideBar.bind(this)),this.bindTextInputsEvents());let e=this.$el.find(".svg");$(e),this.$el.find("[data-alt]:not(.rmalttext)").RMAltText(),this.generateSidebarCSS(this.cartWidgetData);let t=this.mag.eCommerceCartManager.getEcommerceData();return(0,i.default)(`<div class="ec-cart-widget"></div><div><script data-cfasync="false" type="text/javascript" src="https://app.ecwid.com/script.js?${t.ecwid.serviceData.storeId}&data_platform=code&data_date=${E(D(this.mag.published?this.mag.published:this.mag.creation_date),"yyyy-MM-dd")}" charset="utf-8"><\/script></div>`).appendTo(this.$el),this.renderSidebarTexts(),this.renderCartItems(),this.bindDomEvents(),h.on("ecommerce:cartsidebar:visibility:changed",this.toggleSidebar),h.on("ecommerce:cartdata:changed",this.renderCartItems),this},bindDomEvents:function(){this.$closeButton.on("click",this.closeSideBar.bind(this)),this.$checkOutButton.on("click",this.goToCheckout.bind(this)),(0,i.default)(document).on("mouseover",".cart-sidebar .sidebar-body .cart-item-block",this.cartItemBlockHover),(0,i.default)(document).on("mouseleave",".cart-sidebar .sidebar-body .cart-item-block",this.cartItemBlockLeave),this.bindStaticTextFieldsHovers(),this.ecwidInit()},unbindDomEvents:function(){this.$closeButton.off("click",this.closeSideBar),this.$checkOutButton.off("click",this.goToCheckout.bind(this)),(0,i.default)(document).off("mouseover",".cart-sidebar .sidebar-body .cart-item-block",this.cartItemBlockHover),(0,i.default)(document).off("mouseleave",".cart-sidebar .sidebar-body .cart-item-block",this.cartItemBlockLeave)},bindStaticTextFieldsHovers:function(){this.environment===m.environment.preview&&(this.$itemsTab.find(".cart-title-input, .empty-cart-title-input").on("mouseover",e=>{(0,i.default)(e.target).addClass("active")}),this.$itemsTab.find(".cart-title-input, .empty-cart-title-input").on("mouseleave",e=>{(0,i.default)(e.target).is(":focus")||(0,i.default)(e.target).removeClass("active")}),this.$itemsTab.find(".\u0441heck-out-btn").on("mouseover",e=>{(0,i.default)(e.target).find(".cart-checkout-input").addClass("active")}),this.$itemsTab.find(".\u0441heck-out-btn").on("mouseleave",e=>{let t=(0,i.default)(e.target).find(".cart-checkout-input");t.is(":focus")||t.removeClass("active")}))},hideSidebar:function(){this.$el.removeClass("show"),(0,i.default)("body").removeClass("cart-sidebar-shown"),(0,i.default)("html").removeClass("cart-disable-scroll"),!this.isHiddenSettings&&this.settingsPanel&&(this.isHiddenSettings=!0,this.settingsPanel.isHidden=this.isHiddenSettings)},toggleSidebar:function(e){if(e)this.hideSidebar();else{this.$el.addClass("show"),(0,i.default)("body").addClass("cart-sidebar-shown"),(0,i.default)("html").addClass("cart-disable-scroll");try{let t=this.mag.eCommerceCartManager.getCartData(),{value:r,currency:s,items:a}=C(Object.values(t.prices));RM.analytics&&RM.analytics.sendEvent("view_cart",{ecommerceData:{value:r,currency:s,items:a}})}catch(t){console.error("Cannot send GA analytics: ",t)}}},closeSideBar:function(){this.mag.eCommerceCartManager.isCartSidebarHidden||this.mag.eCommerceCartManager.changeCartSidebarVisibility()},generateSidebarCSS(e){this.stylesElementId=`cart_sidebar_styles_${e._id}`;let t=f.getRGBA(e["bar-color"],e["bar-color-opacity"]/100),r=f.getRGBA(e["bar-background-color"],e["bar-background-color-opacity"]/100),s=f.getRGBA(e["bar-color"],e["bar-color-opacity"]*.45/100),a=f.getRGBA(e["bar-color"],e["bar-color-opacity"]*.9/100),c=16*(e["bar-font-size-factor"]||1),n=this.getAdditionalColor(r),d=`    #cart-sidebar {
      color: ${t};
      background-color: ${r};
      box-shadow: ${e["bar-shadow"]?"0 0 4px rgba(124, 124, 125, 0.5)":"none"};
      font-size: ${c}px !important;
      font-family: ${e["bar-font-family"]};
      font-weight: ${e["bar-font-weight"]};
      font-style: ${e["bar-font-style"]};
    }

    #cart-sidebar textarea {
      font-family: ${e["bar-font-family"]};
      font-weight: ${e["bar-font-weight"]};
      font-style: ${e["bar-font-style"]};
    }

    #cart-sidebar input {
      color: ${t};
      font-family: ${e["bar-font-family"]};
      font-weight: ${e["bar-font-weight"]};
      font-style: ${e["bar-font-style"]};
    }

    #cart-sidebar input::placeholder {
      color: ${s};
    }

    #cart-sidebar .cart-title-input.active {
      border-color: ${b(.8,t)};
    }

    #cart-sidebar .empty-cart-title-input.active {
      border-color: ${b(.8,t)};
    }

    #cart-sidebar .cart-price-input.active, #cart-sidebar .cart-quantity-input.active {
      border-color: ${b(.2,s)};
    }

    #cart-sidebar .cart-checkout-input.active {
      border-color: ${b(.8,t)};
    }

    #cart-sidebar .cart-price-input {
      color: ${a};
      font-family: ${e["bar-font-family"]};
      font-weight: ${e["bar-font-weight"]};
      font-style: ${e["bar-font-style"]};
    }

    #cart-sidebar .cart-quantity-input {
      color: ${a};
      font-family: ${e["bar-font-family"]};
      font-weight: ${e["bar-font-weight"]};
      font-style: ${e["bar-font-style"]};
    }

    #cart-sidebar button {
      font-family: ${e["bar-font-family"]};
      font-weight: ${e["bar-font-weight"]};
      font-style: ${e["bar-font-style"]};
    }

    #cart-sidebar .sidebar-btn > input, #cart-sidebar .sidebar-btn > span {
      top: ${e["bar-button-baseline"]+"px"||0};
    }

    #cart-sidebar select {
      font-family: ${e["bar-font-family"]};
      font-weight: ${e["bar-font-weight"]};
      font-style: ${e["bar-font-style"]};
    }

    #cart-sidebar .sidebar-btn {
      color: ${t};
      border-color: ${s};
    }

    #cart-sidebar .sidebar-btn path {
      fill: ${t};
    }

    #cart-sidebar .sidebar-icon-btn path, #cart-sidebar .sidebar-icon-btn rect {
      fill: ${t};
    }

    #cart-sidebar .preloader svg path {
      stroke: ${t};
    }

    #cart-sidebar .expand-arrow svg path {
      fill: ${t};
    }

    #cart-sidebar .cart-cancel-btn {
      color: ${t};
    }

    #cart-sidebar .sidebar-body .cart-item-block.hover {
      background-color: ${n};
    }

    #cart-sidebar .sidebar-body .cart-item-block .cart-item-attributes {
      color: ${a};
    }

    #cart-sidebar .sidebar-body .cart-item-block .cart-item-price {
      color: ${a};
    }

    #cart-sidebar .sidebar-body .cart-item-block .cart-items-quantity {
      color: ${a};
    }

    #cart-sidebar .sidebar-body .cart-item-block .cart-item-remove-btn-icon path {
      fill: ${t};
    }

    #cart-sidebar .sidebar-body .cart-item-block .cart-item-decrease-btn-icon rect {
      fill: ${t};
    }

    #cart-sidebar .sidebar-body .cart-item-block .cart-item-increase-btn-icon path {
      fill: ${t};
    }

    #cart-sidebar .sidebar-settings-container .settings-button path {
      stroke: ${t};
    }

    #cart-sidebar .sidebar-settings-container .settings-button:hover path {
      stroke: ${s};
    }

    #cart-sidebar .sidebar-settings-container .settings-toggle {
      color: ${t};
    }

    #cart-sidebar .sidebar-settings-container .settings-toggle:hover {
      color: ${s};
    }

    #cart-sidebar.cart-is-mobile .sidebar-body .cart-item-block {
      background-color: ${n};
    }`;(0,i.default)(`#${this.stylesElementId}`).remove();let o=document.createElement("style");o.id=this.stylesElementId,o.className="cart-sidebar-styles",o.appendChild(document.createTextNode(d)),document.querySelector("head").appendChild(o)},getAdditionalColor(e){return F(e)<.05&&x("#fff",e)-x("#000",e)>=8?R(.1,e):_(.1,e)},renderCartItems:function(){let e=this.mag.eCommerceCartManager.getCartData();if(!e)return;let t=Object.keys(e.prices);this.$items.empty(),this.havePrices=!!t.length,this.havePrices?(this.$itemsTab.find(".\u0441heck-out-btn").css("display","flex"),this.$itemsTab.find(".empty-cart").css("display","none"),this.environment===m.environment.viewer&&this.$itemsTab.find(".sidebar-title").css("display","flex")):(this.$itemsTab.find(".\u0441heck-out-btn").css("display","none"),this.$itemsTab.find(".empty-cart").css("display","flex"),this.environment===m.environment.viewer&&this.$itemsTab.find(".sidebar-title").css("display","none")),this.renderPricesCartItems(t);let r=this.$items.find(".svg");$(r),this.renderSidebarTexts(),this.unbindTextInputsEvents(!0),this.bindTextInputsEvents(!0)},renderPricesCartItems(e){let t=this.mag.eCommerceCartManager.getCartData();e.forEach(r=>{let s=t.prices[r];this.renderCartItem(s)})},renderCartItem(e,t="price"){let r=this.mag.eCommerceCartManager.getCartItenKey(e),s=this.hoveredItem===r,a=(0,i.default)("<div/>",{class:`cart-item-block${s?" hover":""}`});a.data(`${t}-id`,r);let c;if(e.selectedCombination?.thumbnailUrl||e.image||e.images&&e.images.length){let u=this.getProductImage(e);c=(0,i.default)("<div/>",{class:"cart-item-image",css:{"background-position":"center center","background-size":"cover","background-repeat":"no-repeat","background-image":`url(${u})`}}),a.append(c)}let d=(0,i.default)("<div/>",{class:c?"cart-item-title":"cart-item-title without-image"}).text(e.nameTranslated&&e.nameTranslated[this.mag.eCommerceManager.userLocale]?e.nameTranslated[this.mag.eCommerceManager.userLocale]:e.name),o=e.cart_count,l=this.getOneItemPrice(e),g=I(l,e.currency),w=I((l*o).toFixed(2),e.currency),S=(0,i.default)("<div/>",{class:"cart-item-price"}),M=(0,i.default)("<input/>",{type:"text",class:"cart-text-input cart-price-input",name:"price",placeholder:"Price",maxlength:"32",translate:"no",autocomplete:"no",autocorrect:"no",spellcheck:"false"});M.get(0).dataset.dynamicWidth=!0;let L=(0,i.default)('<span class="cart-item-price-value"/>').html(o>1?`: ${g} \xD7 ${o} = ${w}`:`: ${g}`);S.append(M).append(L);let K=this.getTranslatedOptions(e),P=(0,i.default)("<div/>",{class:"cart-items-quantity"}),B=(0,i.default)("<input/>",{type:"text",class:"cart-text-input cart-quantity-input",name:"quantity",placeholder:"Quantity",maxlength:"32",translate:"no",autocomplete:"no",autocorrect:"no",spellcheck:"false"});B.get(0).dataset.dynamicWidth=!0;let U=(0,i.default)('<span class="cart-item-quantity-value"/>').html(`: ${o}`);P.append(B).append(U);let T=(0,i.default)("<div/>",{class:"cart-item-remove-btn",title:"remove"}).attr(`data-${t}-id`,r),N=(0,i.default)("<img/>",{class:"svg cart-item-remove-btn-icon sidebar-icon-btn",src:y("./viewer/cart-sidebar/cart-item-delete.svg?c")});T.append(N),T.on("click",this.onRemoveItem);let k=(0,i.default)("<div/>",{class:"cart-item-edit-group"}),p=(0,i.default)("<div/>",{class:"cart-item-increase-btn"}).attr(`data-${t}-id`,r),Q=(0,i.default)("<img/>",{class:"svg cart-item-increase-btn-icon sidebar-icon-btn",src:y("./viewer/cart-sidebar/cart-item-increase.svg?c")});if(p.append(Q),k.append(p),this.mag.eCommerceCartManager.isOutOfStock(e)||(p.addClass("active"),p.on("click",this.onIncreaseItem)),o>1){let u=(0,i.default)("<div/>",{class:`cart-item-decrease-btn decrease-btn-${r}`}).attr(`data-${t}-id`,r),J=(0,i.default)("<img/>",{class:"svg cart-item-decrease-btn-icon sidebar-icon-btn",src:y("./viewer/cart-sidebar/cart-item-decrease.svg?c")});u.append(J),k.append(u),u.on("click",this.onDecreaseItem)}else{let u=this.$items.find(`decrease-btn-${r}`);u.off("click",this.onDecreaseItem),u.remove()}a.append(d).append(K).append(S).append(P).append(T).append(k),this.$items.append(a)},getProductImage(e){return e.selectedCombination?.thumbnailUrl?e.selectedCombination.thumbnailUrl:e.image?e.image:e.images?e.images[0]:""},getTranslatedOptions(e){if(!e.selectedOptions)return;let t=(0,i.default)("<div/>",{class:"cart-item-attributes"});return Object.keys(e.selectedOptions).forEach(r=>{let s=f.capitalize(r),a=e.selectedOptions[r],c=this.mag.eCommerceManager.userLocale,n=e.options.find(o=>o.name===r);if(n?.nameTranslated&&n?.nameTranslated[c]&&(s=f.capitalize(n.nameTranslated[c])),n?.choices){let o=n.choices.find(l=>l.text===e.selectedOptions[r]);o?.textTranslated&&o?.textTranslated[c]&&(a=o.textTranslated[c])}let d=(0,i.default)("<div/>",{class:"cart-item-attribute"}).html(`${s}: ${a}`);t.append(d)}),t},getOneItemPrice(e){let t=e.price;return e.selectedCombination?.price&&(t=e.selectedCombination.price),e.selectedOptions&&Object.keys(e.selectedOptions).forEach(r=>{let s=e.options.find(c=>c.name===r),a=s?s.choices?.find(c=>c.text===e.selectedOptions[r]):null;a&&a.priceModifier&&(a.priceModifierType==="ABSOLUTE"?t+=a.priceModifier:a.priceModifierType==="PERCENT"&&(t+=e.price*(a.priceModifier/100).toFixed(2)))}),t},onRemoveItem:function(e){if(e.currentTarget.dataset.priceId){let t=this.mag.eCommerceCartManager.removeFromCart(e.currentTarget.dataset.priceId);try{let{value:r,currency:s,items:a}=C([t]);RM.analytics&&RM.analytics.sendEvent("remove_from_cart",{ecommerceData:{value:r,currency:s,items:a}})}catch(r){console.error("Cannot send GA analytics: ",r)}}},onIncreaseItem:function(e){e.currentTarget.dataset.priceId&&this.mag.eCommerceCartManager.increaseCartItem(e.currentTarget.dataset.priceId)},onDecreaseItem:function(e){e.currentTarget.dataset.priceId&&this.mag.eCommerceCartManager.decreaseCartItem(e.currentTarget.dataset.priceId)},ecwidInit:function(){let e=window.Ecwid;e&&e.init()},async goToCheckout(e){if(e.isDefaultPrevented())return;this.closeSideBar();let t=this.mag.eCommerceCartManager.getCartData(),r=window.Ecwid;if(!r){alert("No Ecwid");return}let s=Object.keys(t.prices),a=[],c=n=>a.push(n);await new Promise(n=>r.Cart.clear(n)),await new Promise(n=>r.Cart.calculateTotal(n)),s.forEach(n=>{let d={id:Number(t.prices[n].id),quantity:t.prices[n].cart_count,callback:async o=>{o&&c(n),s.length===a.length&&(r.OnOrderPlaced.add(()=>{try{let{value:l,currency:g,items:w}=C(Object.values(t.prices));RM.analytics&&RM.analytics.sendEvent("purchase",{ecommerceData:{value:l,currency:g,items:w}})}catch(l){console.error("Cannot send GA analytics: ",l)}this.mag.eCommerceCartManager.clearCart(),this.mag.eCommerceManager.loadProducts()}),r.Cart.gotoCheckout(),h.trigger("ecwid:checkout:opened"),this.mag.eCommerceManager.loadProducts().then(()=>{this.mag.eCommerceCartManager.updateCartProductItems()}),(0,i.default)("html, body").css({overflow:"auto"}),(0,i.default)(".ecwid-popup").css({position:"fixed",top:"55%",transform:"translate(0, -50%)",width:"100%",height:"100%",overflow:"scroll"}),(0,i.default)(".ecwid-overlay").css("position","fixed"),(0,i.default)(".ecwid-popup-closeButton, .ecwid-overlay").on("mousedown",()=>{(0,i.default)("html, body").css("overflow",""),h.trigger("ecwid:checkout:closed")}),(0,i.default)(".ecwid-popup").on("mousedown",l=>{l.currentTarget===l.target&&((0,i.default)("html, body").css("overflow",""),h.trigger("ecwid:checkout:closed"))}),r.OnOrderPlaced.add(()=>{setTimeout(()=>{(0,i.default)(".ec-confirmation__continue > .form-control--done > button").on("mousedown",()=>{(0,i.default)("html, body").css("overflow","auto"),h.trigger("ecwid:checkout:closed")})},300)}))}};t.prices[n].selectedOptions?d.options={...t.prices[n].selectedOptions}:t.prices[n].options.length&&t.prices[n].options.forEach(o=>{o.required&&(d.options||(d.options={}),d.options[o.name]=o.choices[o.defaultChoice])}),r.Cart.addProduct(d)});try{let n=this.mag.eCommerceCartManager.getCartData(),{value:d,currency:o,items:l}=C(Object.values(n.prices));RM.analytics&&RM.analytics.sendEvent("begin_checkout",{ecommerceData:{value:d,currency:o,items:l}})}catch(n){console.error("Cannot send GA analytics: ",n)}},getTextFieldModelKey(e){return`bar-${e}`},getSidebarTextValue(e){let t=this.getTextFieldModelKey(e);return this.cartWidgetData&&this.cartWidgetData[t]?O.sanitize(this.cartWidgetData[t]):m.defaultSidebarTexts[e]?m.defaultSidebarTexts[e]:null},calcTextFieldSize(e){if(!e)return null;let t=getComputedStyle(e);this.$calcTextContainer.css({"font-family":t.fontFamily,"font-size":t.fontSize,"font-style":t.fontStyle,"font-weight":t.fontWeight,"letter-spacing":t.letterSpacing}),this.$calcTextContainer.text(e.value);let r=this.$calcTextContainer.width();return Math.ceil(r)},renderSidebarTexts(){this.$itemsTab.find(".cart-text-input").each((e,t)=>{let r=t.getAttribute("name"),s=this.getSidebarTextValue(r);if(s&&(t.value=s,t.dataset.dynamicWidth)){let a=this.calcTextFieldSize(t);a&&(t.style.width=`${a}px`)}})},bindTextInputsEvents(e=!1){this.$itemsTab.find(".cart-text-input"+(e?'[data-dynamic-width="true"]':"")).each((t,r)=>{(0,i.default)(r).on("click",this.onTextFieldClick),(0,i.default)(r).on("input",this.onTextFieldChange),(0,i.default)(r).on("blur",this.onTextFieldBlur)}),e&&this.environment===m.environment.preview&&(this.$itemsTab.find(".cart-item-block").on("mouseover",this.onDynamicMouseOver),this.$itemsTab.find(".cart-item-block").on("mouseleave",this.onDynamicMouseLeave))},unbindTextInputsEvents(e=!1){this.$itemsTab.find(".cart-text-input"+(e?'[data-dynamic-width="true"]':"")).each((t,r)=>{(0,i.default)(r).off("click",this.onTextFieldClick),(0,i.default)(r).off("input",this.onTextFieldChange),(0,i.default)(r).off("blur",this.onTextFieldBlur)}),e&&this.environment===m.environment.preview&&(this.$itemsTab.find(".cart-item-block").off("mouseover",this.onDynamicMouseOver),this.$itemsTab.find(".cart-item-block").off("mouseleave",this.onDynamicMouseLeave))},onDynamicMouseOver(e){(0,i.default)(e.target).find(".cart-price-input, .cart-quantity-input").addClass("active")},onDynamicMouseLeave(e){(0,i.default)(e.target).find(".cart-price-input, .cart-quantity-input").each(function(){(0,i.default)(this).is(":focus")||(0,i.default)(this).removeClass("active")})},onTextFieldClick(e){e.preventDefault()},onTextFieldChange(e){if(e.target.dataset.dynamicWidth){let t=this.calcTextFieldSize(e.target);t&&(e.target.style.width=`${t}px`)}},onTextFieldFocus(e){this.environment===m.environment.preview&&(0,i.default)(e.target).addClass("active")},onTextFieldBlur(e){this.environment===m.environment.preview&&(0,i.default)(e.target).removeClass("active");let t=e.target.getAttribute("name"),r=this.getSidebarTextValue(t);if(r){if(!e.target.value){e.target.value=r;return}if(this.cartWidgetModel){let a={[this.getTextFieldModelKey(t)]:e.target.value};this.updateCartWidgetData(a),this.cartWidgetModel.save(a,{toHistory:!1,skipHistory:!0,patch:!0}).then(()=>{e.target.dataset.dynamicWidth&&this.renderSidebarTexts()})}}},toogleSettings:function(){this.isHiddenSettings=!this.isHiddenSettings,this.settingsPanel&&(this.settingsPanel.isHidden=this.isHiddenSettings)},setupSettingsPanel:function(){},onModelChange(e){this.saveModelChanges_debounced(e)},saveModelChanges(e){this.updateCartWidgetData(e),this.generateSidebarCSS(this.cartWidgetData),this.cartWidgetModel&&this.cartWidgetModel.save(e,{toHistory:!1,skipHistory:!0,patch:!0}).then(()=>{this.renderSidebarTexts()})},updateCartWidgetData(e={}){this.cartWidgetData={...this.cartWidgetData,...e}},destroy:function(){if(this.rendered)return h.off("ecommerce:cartsidebar:visibility:changed"),h.off("ecommerce:cartdata:changed"),this.$items.find(".cart-item-remove-btn").each(function(e,t){(0,i.default)(t).off("click")}),this.unbindDomEvents(),this.settingsPanel&&(this.settingsPanel.$off("change",this.onModelChange),this.settingsPanel.$destroy()),this.$settingButton&&this.$settingButton.off("click",this.toogleSettings),this.environment===m.environment.preview&&this.unbindTextInputsEvents(),(0,i.default)(`#${this.stylesElementId}`).remove(),this.remove()},cartItemBlockHover:function(e){let t=(0,i.default)(e.currentTarget);t&&t.length&&(t.addClass("hover").siblings().removeClass("hover"),this.hoveredItem=t.data("price-id")||t.data("sku-id"))},cartItemBlockLeave:function(e){let t=(0,i.default)(e.currentTarget);t&&t.length&&(t.removeClass("hover"),(t.data("price-id")||t.data("sku-id"))===this.hoveredItem&&(this.hoveredItem=null))}}),we=le;export{we as a};
