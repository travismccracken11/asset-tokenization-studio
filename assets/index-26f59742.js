import{d as v,r as I,e as W,i as m,f as l,O as f,C as u,Q as Se,D as T,c as y,M as P,h as ee,E as C,G as fe,j as b,k as S,R as h,b as D,S as k,n as x,o as ze,W as Fe,aT as Xt,aS as he,_ as Ki,y as A,aX as tt,I as qi,T as mt,U as Yt,V as Qt,aY as Gi,aZ as Xi}from"./ThemeUtil-b7b0243c.js";import{n as c,c as p,U as F,r as d,b as Ai}from"./index-3399fbe6.js";import{o as w}from"./if-defined-3b6b684d.js";import"./index-0ca2aa8f.js";import"./index-ac110db8.js";import"./index-161c40c3.js";import"./index-8173741e.js";import{a as Ea,W as ka}from"./index-05aafcd4.js";import"./index-df32177c.js";import"./index-6b33c32f.js";import"./index-872d1919.js";import{H as Jt}from"./HelpersUtil-e9f3a68b.js";import{n as Yi}from"./index-905c64f6.js";import{E as Q}from"./ExchangeController-adcb9457.js";import"./index-ffc35190.js";import"./index-ea8701fd.js";import"./index-2d2185fb.js";import{M as ft}from"./MathUtil-b514a570.js";import"./index-f7254805.js";import{H as J,A as Ii,E as Qi,W as Ji,C as Zi,S as Bt}from"./index-191eafe8.js";import{e as Zt,n as ei}from"./ref-76f2f589.js";import"./index-69a925a4.js";import"./index-eaae2ea5.js";import"./index-83d1a4a1.js";import"./index-1bd197bf.js";import{O as bt}from"./index-cbdf7dec.js";import{e as en}from"./index-f5a3c718.js";import"./index-923ff4ac.js";import"./index-ed2cd579.js";import{N as tn}from"./NavigationUtil-a0d0ce87.js";import"./index-328078c2.js";import"./index-93b59386.js";import"./ConstantsUtil-0834fb54.js";import"./http-95220236.js";import"./browser-e933942f.js";const nn=v`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:t})=>t[20]};
    background: ${({tokens:t})=>t.theme.foregroundPrimary};
    display: flex;
    gap: ${({spacing:t})=>t[1]};
    padding: ${({spacing:t})=>t[1]};
    color: ${({tokens:t})=>t.theme.textSecondary};
    border-radius: ${({borderRadius:t})=>t[16]};
    height: 32px;
    transition: box-shadow ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: box-shadow;
  }

  button wui-flex.avatar-container {
    width: 28px;
    height: 24px;
    position: relative;

    wui-flex.network-image-container {
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 12px;
      height: 12px;
    }

    wui-flex.network-image-container wui-icon {
      background: ${({tokens:t})=>t.theme.foregroundPrimary};
    }

    wui-avatar {
      width: 24px;
      min-width: 24px;
      height: 24px;
    }

    wui-icon {
      width: 12px;
      height: 12px;
    }
  }

  wui-image,
  wui-icon {
    border-radius: ${({borderRadius:t})=>t[16]};
  }

  wui-text {
    white-space: nowrap;
  }

  button wui-flex.balance-container {
    height: 100%;
    border-radius: ${({borderRadius:t})=>t[16]};
    padding-left: ${({spacing:t})=>t[1]};
    padding-right: ${({spacing:t})=>t[1]};
    background: ${({tokens:t})=>t.theme.foregroundSecondary};
    color: ${({tokens:t})=>t.theme.textPrimary};
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:focus-visible:enabled,
  button:active:enabled {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);

    wui-flex.balance-container {
      background: ${({tokens:t})=>t.theme.foregroundTertiary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled wui-text,
  button:disabled wui-flex.avatar-container {
    opacity: 0.3;
  }
`;var se=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let q=class extends m{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return l`
      <button
        ?disabled=${this.disabled}
        class=${w(this.balance?void 0:"local-no-balance")}
        data-error=${w(this.isUnsupportedChain)}
      >
        ${this.imageTemplate()} ${this.addressTemplate()} ${this.balanceTemplate()}
      </button>
    `}imageTemplate(){const e=this.networkSrc?l`<wui-image src=${this.networkSrc}></wui-image>`:l` <wui-icon size="inherit" color="inherit" name="networkPlaceholder"></wui-icon> `;return l`<wui-flex class="avatar-container">
      <wui-avatar
        .imageSrc=${this.avatarSrc}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>

      <wui-flex class="network-image-container">${e}</wui-flex>
    </wui-flex>`}addressTemplate(){return l`<wui-text variant="md-regular" color="inherit">
      ${this.address?F.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
    </wui-text>`}balanceTemplate(){if(this.balance){const e=this.loading?l`<wui-loading-spinner size="md" color="inherit"></wui-loading-spinner>`:l`<wui-text variant="md-regular" color="inherit"> ${this.balance}</wui-text>`;return l`<wui-flex alignItems="center" justifyContent="center" class="balance-container"
        >${e}</wui-flex
      >`}return null}};q.styles=[I,W,nn];se([c()],q.prototype,"networkSrc",void 0);se([c()],q.prototype,"avatarSrc",void 0);se([c()],q.prototype,"balance",void 0);se([c({type:Boolean})],q.prototype,"isUnsupportedChain",void 0);se([c({type:Boolean})],q.prototype,"disabled",void 0);se([c({type:Boolean})],q.prototype,"loading",void 0);se([c()],q.prototype,"address",void 0);se([c()],q.prototype,"profileName",void 0);se([c()],q.prototype,"charsStart",void 0);se([c()],q.prototype,"charsEnd",void 0);q=se([p("wui-account-button")],q);var U=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};class z extends m{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.isSupported=f.state.allowUnsupportedChain?!0:u.state.activeChain?u.checkIfSupportedNetwork(u.state.activeChain):!0}connectedCallback(){super.connectedCallback(),this.setAccountData(u.getAccountData(this.namespace)),this.setNetworkData(u.getNetworkData(this.namespace))}firstUpdated(){const e=this.namespace;e?this.unsubscribe.push(u.subscribeChainProp("accountState",i=>{this.setAccountData(i)},e),u.subscribeChainProp("networkState",i=>{var o;this.setNetworkData(i),this.isSupported=u.checkIfSupportedNetwork(e,(o=i==null?void 0:i.caipNetwork)==null?void 0:o.caipNetworkId)},e)):this.unsubscribe.push(Se.subscribeNetworkImages(()=>{this.networkImage=T.getNetworkImage(this.network)}),u.subscribeKey("activeCaipAddress",i=>{this.caipAddress=i}),u.subscribeChainProp("accountState",i=>{this.setAccountData(i)}),u.subscribeKey("activeCaipNetwork",i=>{this.network=i,this.networkImage=T.getNetworkImage(i),this.isSupported=i!=null&&i.chainNamespace?u.checkIfSupportedNetwork(i==null?void 0:i.chainNamespace):!0,this.fetchNetworkImage(i)}))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!u.state.activeChain)return null;const e=this.balance==="show",i=typeof this.balanceVal!="string",{formattedText:o}=y.parseBalance(this.balanceVal,this.balanceSymbol);return l`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${f.state.allowUnsupportedChain?!1:!this.isSupported}
        address=${w(y.getPlainAddress(this.caipAddress))}
        profileName=${w(this.profileName)}
        networkSrc=${w(this.networkImage)}
        avatarSrc=${w(this.profileImage)}
        balance=${e?o:""}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${this.namespace?`-${this.namespace}`:""}`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${i}
      >
      </wui-account-button>
    `}onClick(){this.isSupported||f.state.allowUnsupportedChain?P.open({namespace:this.namespace}):P.open({view:"UnsupportedChain"})}async fetchNetworkImage(e){var i,o;(i=e==null?void 0:e.assets)!=null&&i.imageId&&(this.networkImage=await T.fetchNetworkImage((o=e==null?void 0:e.assets)==null?void 0:o.imageId))}setAccountData(e){e&&(this.caipAddress=e.caipAddress,this.balanceVal=e.balance,this.balanceSymbol=e.balanceSymbol,this.profileName=e.profileName,this.profileImage=e.profileImage)}setNetworkData(e){e&&(this.network=e.caipNetwork,this.networkImage=T.getNetworkImage(e.caipNetwork))}}U([c({type:Boolean})],z.prototype,"disabled",void 0);U([c()],z.prototype,"balance",void 0);U([c()],z.prototype,"charsStart",void 0);U([c()],z.prototype,"charsEnd",void 0);U([c()],z.prototype,"namespace",void 0);U([d()],z.prototype,"caipAddress",void 0);U([d()],z.prototype,"balanceVal",void 0);U([d()],z.prototype,"balanceSymbol",void 0);U([d()],z.prototype,"profileName",void 0);U([d()],z.prototype,"profileImage",void 0);U([d()],z.prototype,"network",void 0);U([d()],z.prototype,"networkImage",void 0);U([d()],z.prototype,"isSupported",void 0);let ci=class extends z{};ci=U([p("w3m-account-button")],ci);let ui=class extends z{};ui=U([p("appkit-account-button")],ui);const on=ee`
  :host {
    display: block;
    width: max-content;
  }
`;var ae=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};class te extends m{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0}firstUpdated(){var e;this.caipAddress=this.namespace?(e=u.getAccountData(this.namespace))==null?void 0:e.caipAddress:u.state.activeCaipAddress,this.namespace?this.unsubscribe.push(u.subscribeChainProp("accountState",i=>{this.caipAddress=i==null?void 0:i.caipAddress},this.namespace)):this.unsubscribe.push(u.subscribeKey("activeCaipAddress",i=>this.caipAddress=i))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.caipAddress?l`
          <appkit-account-button
            .disabled=${!!this.disabled}
            balance=${w(this.balance)}
            .charsStart=${w(this.charsStart)}
            .charsEnd=${w(this.charsEnd)}
            namespace=${w(this.namespace)}
          >
          </appkit-account-button>
        `:l`
          <appkit-connect-button
            size=${w(this.size)}
            label=${w(this.label)}
            loadingLabel=${w(this.loadingLabel)}
            namespace=${w(this.namespace)}
          ></appkit-connect-button>
        `}}te.styles=on;ae([c({type:Boolean})],te.prototype,"disabled",void 0);ae([c()],te.prototype,"balance",void 0);ae([c()],te.prototype,"size",void 0);ae([c()],te.prototype,"label",void 0);ae([c()],te.prototype,"loadingLabel",void 0);ae([c()],te.prototype,"charsStart",void 0);ae([c()],te.prototype,"charsEnd",void 0);ae([c()],te.prototype,"namespace",void 0);ae([d()],te.prototype,"caipAddress",void 0);let di=class extends te{};di=ae([p("w3m-button")],di);let hi=class extends te{};hi=ae([p("appkit-button")],hi);const sn=v`
  :host {
    position: relative;
    display: block;
  }

  button {
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  button[data-size='sm'] {
    padding: ${({spacing:t})=>t[2]};
  }

  button[data-size='md'] {
    padding: ${({spacing:t})=>t[3]};
  }

  button[data-size='lg'] {
    padding: ${({spacing:t})=>t[4]};
  }

  button[data-variant='primary'] {
    background: ${({tokens:t})=>t.core.backgroundAccentPrimary};
  }

  button[data-variant='secondary'] {
    background: ${({tokens:t})=>t.core.foregroundAccent010};
  }

  button:hover:enabled {
    border-radius: ${({borderRadius:t})=>t[3]};
  }

  button:disabled {
    cursor: not-allowed;
  }

  button[data-loading='true'] {
    cursor: not-allowed;
  }

  button[data-loading='true'][data-size='sm'] {
    border-radius: ${({borderRadius:t})=>t[32]};
    padding: ${({spacing:t})=>t[2]} ${({spacing:t})=>t[3]};
  }

  button[data-loading='true'][data-size='md'] {
    border-radius: ${({borderRadius:t})=>t[20]};
    padding: ${({spacing:t})=>t[3]} ${({spacing:t})=>t[4]};
  }

  button[data-loading='true'][data-size='lg'] {
    border-radius: ${({borderRadius:t})=>t[16]};
    padding: ${({spacing:t})=>t[4]} ${({spacing:t})=>t[5]};
  }
`;var at=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Ee=class extends m{constructor(){super(...arguments),this.size="md",this.variant="primary",this.loading=!1,this.text="Connect Wallet"}render(){return l`
      <button
        data-loading=${this.loading}
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.loading}
      >
        ${this.contentTemplate()}
      </button>
    `}contentTemplate(){const e={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},i={primary:"invert",secondary:"accent-primary"};return this.loading?l`<wui-loading-spinner
      color=${i[this.variant]}
      size=${this.size}
    ></wui-loading-spinner>`:l` <wui-text variant=${e[this.size]} color=${i[this.variant]}>
        ${this.text}
      </wui-text>`}};Ee.styles=[I,W,sn];at([c()],Ee.prototype,"size",void 0);at([c()],Ee.prototype,"variant",void 0);at([c({type:Boolean})],Ee.prototype,"loading",void 0);at([c()],Ee.prototype,"text",void 0);Ee=at([p("wui-connect-button")],Ee);var ve=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};class $e extends m{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=P.state.open,this.loading=this.namespace?P.state.loadingNamespaceMap.get(this.namespace):P.state.loading,this.unsubscribe.push(P.subscribe(e=>{this.open=e.open,this.loading=this.namespace?e.loadingNamespaceMap.get(this.namespace):e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-connect-button
        size=${w(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${this.namespace?`-${this.namespace}`:""}`}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?P.close():this.loading||P.open({view:"Connect",namespace:this.namespace})}}ve([c()],$e.prototype,"size",void 0);ve([c()],$e.prototype,"label",void 0);ve([c()],$e.prototype,"loadingLabel",void 0);ve([c()],$e.prototype,"namespace",void 0);ve([d()],$e.prototype,"open",void 0);ve([d()],$e.prototype,"loading",void 0);let pi=class extends $e{};pi=ve([p("w3m-connect-button")],pi);let wi=class extends $e{};wi=ve([p("appkit-connect-button")],wi);const an=v`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:t})=>t[32]};
    display: flex;
    gap: ${({spacing:t})=>t[1]};
    padding: ${({spacing:t})=>t[1]} ${({spacing:t})=>t[2]}
      ${({spacing:t})=>t[1]} ${({spacing:t})=>t[1]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    }
  }

  button[data-size='sm'] > wui-icon-box,
  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-icon-box,
  button[data-size='md'] > wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-icon-box,
  button[data-size='lg'] > wui-image {
    width: 24px;
    height: 24px;
  }

  wui-image,
  wui-icon-box {
    border-radius: ${({borderRadius:t})=>t[32]};
  }
`;var rt=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let ke=class extends m{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.size="lg"}render(){const e={sm:"sm-regular",md:"md-regular",lg:"lg-regular"};return l`
      <button data-size=${this.size} data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant=${e[this.size]} color="primary">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?l` <wui-icon-box color="error" icon="warningCircle"></wui-icon-box> `:this.imageSrc?l`<wui-image src=${this.imageSrc}></wui-image>`:l` <wui-icon size="xl" color="default" name="networkPlaceholder"></wui-icon> `}};ke.styles=[I,W,an];rt([c()],ke.prototype,"imageSrc",void 0);rt([c({type:Boolean})],ke.prototype,"isUnsupportedChain",void 0);rt([c({type:Boolean})],ke.prototype,"disabled",void 0);rt([c()],ke.prototype,"size",void 0);ke=rt([p("wui-network-button")],ke);const rn=ee`
  :host {
    display: block;
    width: max-content;
  }
`;var me=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};class ue extends m{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=u.state.activeCaipNetwork,this.networkImage=T.getNetworkImage(this.network),this.caipAddress=u.state.activeCaipAddress,this.loading=P.state.loading,this.isSupported=f.state.allowUnsupportedChain?!0:u.state.activeChain?u.checkIfSupportedNetwork(u.state.activeChain):!0,this.unsubscribe.push(Se.subscribeNetworkImages(()=>{this.networkImage=T.getNetworkImage(this.network)}),u.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),u.subscribeKey("activeCaipNetwork",e=>{var i;this.network=e,this.networkImage=T.getNetworkImage(e),this.isSupported=e!=null&&e.chainNamespace?u.checkIfSupportedNetwork(e.chainNamespace):!0,T.fetchNetworkImage((i=e==null?void 0:e.assets)==null?void 0:i.imageId)}),P.subscribeKey("loading",e=>this.loading=e))}firstUpdated(){var e,i;T.fetchNetworkImage((i=(e=this.network)==null?void 0:e.assets)==null?void 0:i.imageId)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.network?u.checkIfSupportedNetwork(this.network.chainNamespace):!0;return l`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${f.state.allowUnsupportedChain?!1:!e}
        imageSrc=${w(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?!this.isSupported&&!f.state.allowUnsupportedChain?"Switch Network":this.network.name:this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(C.sendEvent({type:"track",event:"CLICK_NETWORKS"}),P.open({view:"Networks"}))}}ue.styles=rn;me([c({type:Boolean})],ue.prototype,"disabled",void 0);me([c({type:String})],ue.prototype,"label",void 0);me([d()],ue.prototype,"network",void 0);me([d()],ue.prototype,"networkImage",void 0);me([d()],ue.prototype,"caipAddress",void 0);me([d()],ue.prototype,"loading",void 0);me([d()],ue.prototype,"isSupported",void 0);let mi=class extends ue{};mi=me([p("w3m-network-button")],mi);let fi=class extends ue{};fi=me([p("appkit-network-button")],fi);const ln=v`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:t})=>t[4]};
    padding: ${({spacing:t})=>t[3]};
    border-radius: ${({borderRadius:t})=>t[4]};
    background-color: ${({tokens:t})=>t.core.foregroundAccent010};
  }

  wui-flex > wui-icon {
    padding: ${({spacing:t})=>t[2]};
    color: ${({tokens:t})=>t.theme.textInvert};
    background-color: ${({tokens:t})=>t.core.backgroundAccentPrimary};
    border-radius: ${({borderRadius:t})=>t[2]};
    align-items: center;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:t})=>t.core.foregroundAccent020};
    }
  }
`;var Rt=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Me=class extends m{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return l`
      <button>
        <wui-flex gap="2" alignItems="center">
          <wui-icon weight="fill" size="lg" name=${this.icon} color="inherit"></wui-icon>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.label}</wui-text>
            <wui-text variant="md-regular" color="tertiary">${this.description}</wui-text>
          </wui-flex>
        </wui-flex>
        <wui-icon size="lg" color="accent-primary" name="chevronRight"></wui-icon>
      </button>
    `}};Me.styles=[I,W,ln];Rt([c()],Me.prototype,"label",void 0);Rt([c()],Me.prototype,"description",void 0);Rt([c()],Me.prototype,"icon",void 0);Me=Rt([p("wui-notice-card")],Me);var _i=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Ut=class extends m{constructor(){super(),this.unsubscribe=[],this.socialProvider=fe.getConnectedSocialProvider(),this.socialUsername=fe.getConnectedSocialUsername(),this.namespace=u.state.activeChain,this.unsubscribe.push(u.subscribeKey("activeChain",e=>{this.namespace=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=b.getConnectorId(this.namespace),i=b.getAuthConnector();if(!i||e!==S.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;const o=i.provider.getEmail()??"";return!o&&!this.socialUsername?(this.style.cssText="display: none",null):l`
      <wui-list-item
        ?rounded=${!0}
        icon=${this.socialProvider??"mail"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(o,this.socialProvider)}}
      >
        <wui-text variant="lg-regular" color="primary">${this.getAuthName(o)}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(e,i){i||h.push("UpdateEmailWallet",{email:e,redirectView:"Account"})}getAuthName(e){return this.socialUsername?this.socialProvider==="discord"&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};_i([d()],Ut.prototype,"namespace",void 0);Ut=_i([p("w3m-account-auth-button")],Ut);var je=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let be=class extends m{constructor(){var e,i,o;super(),this.usubscribe=[],this.networkImages=Se.state.networkImages,this.address=(e=u.getAccountData())==null?void 0:e.address,this.profileImage=(i=u.getAccountData())==null?void 0:i.profileImage,this.profileName=(o=u.getAccountData())==null?void 0:o.profileName,this.network=u.state.activeCaipNetwork,this.disconnecting=!1,this.remoteFeatures=f.state.remoteFeatures,this.usubscribe.push(u.subscribeChainProp("accountState",s=>{s&&(this.address=s.address,this.profileImage=s.profileImage,this.profileName=s.profileName)}),u.subscribeKey("activeCaipNetwork",s=>{s!=null&&s.id&&(this.network=s)}),f.subscribeKey("remoteFeatures",s=>{this.remoteFeatures=s}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var i,o,s;if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[((o=(i=this.network)==null?void 0:i.assets)==null?void 0:o.imageId)??""];return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${["0","5","3","5"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${w(this.profileImage)}
          size="lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="1" alignItems="center" justifyContent="center">
            <wui-text variant="h5-medium" color="primary" data-testid="account-settings-address">
              ${F.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="default"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" gap="2" .padding=${["6","4","3","4"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            imageSrc=${w(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            ?fullSize=${!0}
            ?rounded=${!0}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="lg-regular" color="primary">
              ${((s=this.network)==null?void 0:s.name)??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.smartAccountSettingsTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            ?rounded=${!0}
            icon="power"
            iconColor="error"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){var n;const e=(n=this.network)==null?void 0:n.chainNamespace,i=b.getConnectorId(e),o=b.getAuthConnector();return!u.checkIfNamesSupported()||!o||i!==S.CONNECTOR_ID.AUTH||this.profileName?null:l`
      <wui-list-item
        icon="id"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="lg-regular" color="primary">Choose account name </wui-text>
      </wui-list-item>
    `}authCardTemplate(){var s;const e=b.getConnectorId((s=this.network)==null?void 0:s.chainNamespace),i=b.getAuthConnector(),{origin:o}=location;return!i||e!==S.CONNECTOR_ID.AUTH||o.includes(D.SECURE_SITE)?null:l`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const e=u.getAllRequestedCaipNetworks(),i=e?e.length>1:!1,o=e==null?void 0:e.find(({id:s})=>{var n;return s===((n=this.network)==null?void 0:n.id)});return i||!o}onCopyAddress(){try{this.address&&(y.copyToClopboard(this.address),k.showSuccess("Address copied"))}catch{k.showError("Failed to copy")}}smartAccountSettingsTemplate(){var n;const e=(n=this.network)==null?void 0:n.chainNamespace,i=u.checkIfSmartAccountEnabled(),o=b.getConnectorId(e);return!b.getAuthConnector()||o!==S.CONNECTOR_ID.AUTH||!i?null:l`
      <wui-list-item
        icon="user"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onSmartAccountSettings.bind(this)}
        data-testid="account-smart-account-settings-button"
      >
        <wui-text variant="lg-regular" color="primary">Smart Account Settings</wui-text>
      </wui-list-item>
    `}onChooseName(){h.push("ChooseAccountName")}onNetworks(){this.isAllowedNetworkSwitch()&&h.push("Networks")}async onDisconnect(){var e,i;try{this.disconnecting=!0;const o=(e=this.network)==null?void 0:e.chainNamespace,n=x.getConnections(o).length>0,a=o&&b.state.activeConnectorIds[o],r=(i=this.remoteFeatures)==null?void 0:i.multiWallet;await x.disconnect(r?{id:a,namespace:o}:{}),n&&r&&(h.push("ProfileWallets"),k.showSuccess("Wallet deleted"))}catch{C.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),k.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){C.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),h.push("UpgradeEmailWallet")}onSmartAccountSettings(){h.push("SmartAccountSettings")}};je([d()],be.prototype,"address",void 0);je([d()],be.prototype,"profileImage",void 0);je([d()],be.prototype,"profileName",void 0);je([d()],be.prototype,"network",void 0);je([d()],be.prototype,"disconnecting",void 0);je([d()],be.prototype,"remoteFeatures",void 0);be=je([p("w3m-account-settings-view")],be);const cn=v`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:t})=>t[1]} ${({spacing:t})=>t[2]};
    column-gap: ${({spacing:t})=>t[1]};
    color: ${({tokens:t})=>t.theme.textSecondary};
    border-radius: ${({borderRadius:t})=>t[20]};
    background-color: transparent;
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:t})=>t.theme.textPrimary};
    background-color: ${({tokens:t})=>t.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:t})=>t.theme.textPrimary};
    }
  }
`;var lt=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};const un={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},dn={lg:"md",md:"sm",sm:"sm"};let Ae=class extends m{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return l`
      <button data-active=${this.active}>
        ${this.icon?l`<wui-icon size=${dn[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${un[this.size]}> ${this.label} </wui-text>
      </button>
    `}};Ae.styles=[I,W,cn];lt([c()],Ae.prototype,"icon",void 0);lt([c()],Ae.prototype,"size",void 0);lt([c()],Ae.prototype,"label",void 0);lt([c({type:Boolean})],Ae.prototype,"active",void 0);Ae=lt([p("wui-tab-item")],Ae);const hn=v`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    border-radius: ${({borderRadius:t})=>t[32]};
    padding: ${({spacing:t})=>t["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var ct=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Ie=class extends m{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((e,i)=>{var s;const o=i===this.activeTab;return l`
        <wui-tab-item
          @click=${()=>this.onTabClick(i)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${o}
          data-active=${o}
          data-testid="tab-${(s=e.label)==null?void 0:s.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(e){this.activeTab=e,this.onTabChange(e)}};Ie.styles=[I,W,hn];ct([c({type:Array})],Ie.prototype,"tabs",void 0);ct([c()],Ie.prototype,"onTabChange",void 0);ct([c()],Ie.prototype,"size",void 0);ct([d()],Ie.prototype,"activeTab",void 0);Ie=ct([p("wui-tabs")],Ie);const pn=v`
  wui-icon-link {
    margin-right: calc(${({spacing:t})=>t[8]} * -1);
  }

  wui-notice-card {
    margin-bottom: ${({spacing:t})=>t[1]};
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .balance-container {
    display: inline;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .symbol {
    transform: translateY(-2px);
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:t})=>t[3]};
    height: 48px;
    padding: ${({spacing:t})=>t[2]};
    padding-right: ${({spacing:t})=>t[3]};
    box-shadow: inset 0 0 0 1px ${({tokens:t})=>t.theme.foregroundPrimary};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[6]};
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
  }

  .account-button:hover {
    background-color: ${({tokens:t})=>t.core.glass010};
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px ${({tokens:t})=>t.core.glass010};
  }

  wui-wallet-switch {
    margin-top: ${({spacing:t})=>t[2]};
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px ${({tokens:t})=>t.core.glass010};
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color ${({durations:t})=>t.md}
        ${({easings:t})=>t["ease-out-power-1"]},
      opacity ${({durations:t})=>t.md} ${({easings:t})=>t["ease-out-power-1"]};
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var ie=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let M=class extends m{constructor(){var e,i,o,s,n,a;super(),this.unsubscribe=[],this.caipAddress=(e=u.getAccountData())==null?void 0:e.caipAddress,this.address=y.getPlainAddress((i=u.getAccountData())==null?void 0:i.caipAddress),this.profileImage=(o=u.getAccountData())==null?void 0:o.profileImage,this.profileName=(s=u.getAccountData())==null?void 0:s.profileName,this.disconnecting=!1,this.balance=(n=u.getAccountData())==null?void 0:n.balance,this.balanceSymbol=(a=u.getAccountData())==null?void 0:a.balanceSymbol,this.features=f.state.features,this.remoteFeatures=f.state.remoteFeatures,this.namespace=u.state.activeChain,this.activeConnectorIds=b.state.activeConnectorIds,this.unsubscribe.push(u.subscribeChainProp("accountState",r=>{this.address=y.getPlainAddress(r==null?void 0:r.caipAddress),this.caipAddress=r==null?void 0:r.caipAddress,this.balance=r==null?void 0:r.balance,this.balanceSymbol=r==null?void 0:r.balanceSymbol,this.profileName=r==null?void 0:r.profileName,this.profileImage=r==null?void 0:r.profileImage}),f.subscribeKey("features",r=>this.features=r),f.subscribeKey("remoteFeatures",r=>this.remoteFeatures=r),b.subscribeKey("activeConnectorIds",r=>{this.activeConnectorIds=r}),u.subscribeKey("activeChain",r=>this.namespace=r),u.subscribeKey("activeCaipNetwork",r=>{r!=null&&r.chainNamespace&&(this.namespace=r==null?void 0:r.chainNamespace)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.caipAddress||!this.namespace)return null;const e=this.activeConnectorIds[this.namespace],i=e?b.getConnectorById(e):void 0,o=T.getConnectorImage(i),{value:s,decimals:n,symbol:a}=y.parseBalance(this.balance,this.balanceSymbol);return l`<wui-flex
        flexDirection="column"
        .padding=${["0","5","4","5"]}
        alignItems="center"
        gap="3"
      >
        <wui-avatar
          alt=${w(this.caipAddress)}
          address=${w(y.getPlainAddress(this.caipAddress))}
          imageSrc=${w(this.profileImage===null?void 0:this.profileImage)}
          data-testid="single-account-avatar"
        ></wui-avatar>
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          imageSrc=${o}
          alt=${i==null?void 0:i.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
        <div class="balance-container">
          <wui-text variant="h3-regular" color="primary">${s}</wui-text>
          <wui-text variant="h3-regular" color="secondary">.${n}</wui-text>
          <wui-text variant="h6-medium" color="primary" class="symbol">${a}</wui-text>
        </div>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="2" .padding=${["0","3","3","3"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          .rounded=${!0}
          icon="power"
          iconColor="error"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          .rightIcon=${!1}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}fundWalletTemplate(){var n,a;if(!this.namespace)return null;const e=D.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),i=!!((n=this.features)!=null&&n.receive),o=((a=this.remoteFeatures)==null?void 0:a.onramp)&&e,s=Q.isPayWithExchangeEnabled();return!o&&!i&&!s?null:l`
      <wui-list-item
        .rounded=${!0}
        data-testid="w3m-account-default-fund-wallet-button"
        iconVariant="blue"
        icon="dollar"
        ?chevron=${!0}
        @click=${this.handleClickFundWallet.bind(this)}
      >
        <wui-text variant="lg-regular" color="primary">Fund wallet</wui-text>
      </wui-list-item>
    `}orderedFeaturesTemplate(){var i;return(((i=this.features)==null?void 0:i.walletFeaturesOrder)||D.DEFAULT_FEATURES.walletFeaturesOrder).map(o=>{switch(o){case"onramp":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}activityTemplate(){var i;return this.namespace&&((i=this.remoteFeatures)==null?void 0:i.activity)&&D.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?l` <wui-list-item
          .rounded=${!0}
          icon="clock"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="lg-regular" color="primary">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){var o;const e=(o=this.remoteFeatures)==null?void 0:o.swaps,i=u.state.activeChain===S.CHAIN.EVM;return!e||!i?null:l`
      <wui-list-item
        .rounded=${!0}
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="lg-regular" color="primary">Swap</wui-text>
      </wui-list-item>
    `}sendTemplate(){var s;const e=(s=this.features)==null?void 0:s.send,i=u.state.activeChain;if(!i)throw new Error("SendController:sendTemplate - namespace is required");const o=D.SEND_SUPPORTED_NAMESPACES.includes(i);return!e||!o?null:l`
      <wui-list-item
        .rounded=${!0}
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="lg-regular" color="primary">Send</wui-text>
      </wui-list-item>
    `}authCardTemplate(){const e=u.state.activeChain;if(!e)throw new Error("AuthCardTemplate:authCardTemplate - namespace is required");const i=b.getConnectorId(e),o=b.getAuthConnector(),{origin:s}=location;return!o||i!==S.CONNECTOR_ID.AUTH||s.includes(D.SECURE_SITE)?null:l`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickFundWallet(){h.push("FundWallet")}handleClickSwap(){h.push("Swap")}handleClickSend(){h.push("WalletSend")}explorerBtnTemplate(){var i;return((i=u.getAccountData())==null?void 0:i.addressExplorerUrl)?l`
      <wui-button size="md" variant="accent-primary" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}onTransactions(){C.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:ze(u.state.activeChain)===Fe.ACCOUNT_TYPES.SMART_ACCOUNT}}),h.push("Transactions")}async onDisconnect(){var e;try{this.disconnecting=!0;const o=x.getConnections(this.namespace).length>0,s=this.namespace&&b.state.activeConnectorIds[this.namespace],n=(e=this.remoteFeatures)==null?void 0:e.multiWallet;await x.disconnect(n?{id:s,namespace:this.namespace}:{}),o&&n&&(h.push("ProfileWallets"),k.showSuccess("Wallet deleted"))}catch{C.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),k.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){var i;const e=(i=u.getAccountData())==null?void 0:i.addressExplorerUrl;e&&y.openHref(e,"_blank")}onGoToUpgradeView(){C.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),h.push("UpgradeEmailWallet")}onGoToProfileWalletsView(){h.push("ProfileWallets")}};M.styles=pn;ie([d()],M.prototype,"caipAddress",void 0);ie([d()],M.prototype,"address",void 0);ie([d()],M.prototype,"profileImage",void 0);ie([d()],M.prototype,"profileName",void 0);ie([d()],M.prototype,"disconnecting",void 0);ie([d()],M.prototype,"balance",void 0);ie([d()],M.prototype,"balanceSymbol",void 0);ie([d()],M.prototype,"features",void 0);ie([d()],M.prototype,"remoteFeatures",void 0);ie([d()],M.prototype,"namespace",void 0);ie([d()],M.prototype,"activeConnectorIds",void 0);M=ie([p("w3m-account-default-widget")],M);const wn=v`
  span {
    font-weight: 500;
    font-size: 38px;
    color: ${({tokens:t})=>t.theme.textPrimary};
    line-height: 38px;
    letter-spacing: -2%;
    text-align: center;
    font-family: var(--apkt-fontFamily-regular);
  }

  .pennies {
    color: ${({tokens:t})=>t.theme.textSecondary};
  }
`;var ti=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let it=class extends m{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return l`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};it.styles=[I,wn];ti([c()],it.prototype,"dollars",void 0);ti([c()],it.prototype,"pennies",void 0);it=ti([p("wui-balance")],it);const mn=v`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  /* -- Variants --------------------------------------------------------- */
  :host([data-variant='fill']) {
    background-color: ${({colors:t})=>t.neutrals100};
  }

  :host([data-variant='shade']) {
    background-color: ${({colors:t})=>t.neutrals900};
  }

  :host([data-variant='fill']) > wui-text {
    color: ${({colors:t})=>t.black};
  }

  :host([data-variant='shade']) > wui-text {
    color: ${({colors:t})=>t.white};
  }

  :host([data-variant='fill']) > wui-icon {
    color: ${({colors:t})=>t.neutrals100};
  }

  :host([data-variant='shade']) > wui-icon {
    color: ${({colors:t})=>t.neutrals900};
  }

  /* -- Sizes --------------------------------------------------------- */
  :host([data-size='sm']) {
    padding: ${({spacing:t})=>t[1]} ${({spacing:t})=>t[2]};
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  :host([data-size='md']) {
    padding: ${({spacing:t})=>t[2]} ${({spacing:t})=>t[3]};
    border-radius: ${({borderRadius:t})=>t[3]};
  }

  /* -- Placements --------------------------------------------------------- */
  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var ut=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};const fn={sm:"sm-regular",md:"md-regular"};let _e=class extends m{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.size="md",this.message=""}render(){return this.dataset.variant=this.variant,this.dataset.size=this.size,l`<wui-icon data-placement=${this.placement} size="inherit" name="cursor"></wui-icon>
      <wui-text variant=${fn[this.size]}>${this.message}</wui-text>`}};_e.styles=[I,W,mn];ut([c()],_e.prototype,"placement",void 0);ut([c()],_e.prototype,"variant",void 0);ut([c()],_e.prototype,"size",void 0);ut([c()],_e.prototype,"message",void 0);_e=ut([p("wui-tooltip")],_e);const bn=ee`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;var gn=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let zt=class extends m{render(){return l`<w3m-activity-list page="account"></w3m-activity-list>`}};zt.styles=bn;zt=gn([p("w3m-account-activity-widget")],zt);const yn=v`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({spacing:t})=>t[4]};
    padding: ${({spacing:t})=>t[4]};
    background-color: transparent;
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  wui-text {
    max-width: 174px;
  }

  .tag-container {
    width: fit-content;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    }
  }
`;var Xe=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let ge=class extends m{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.disabled=!1}render(){return l`
      <button ?disabled=${this.disabled}>
        <wui-flex alignItems="center" gap="3">
          <wui-icon-box padding="2" color="secondary" icon=${this.icon} size="lg"></wui-icon-box>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.text}</wui-text>
            ${this.description?l`<wui-text variant="md-regular" color="secondary">
                  ${this.description}</wui-text
                >`:null}
          </wui-flex>
        </wui-flex>

        <wui-flex class="tag-container" alignItems="center" gap="1" justifyContent="flex-end">
          ${this.tag?l`<wui-tag tagType="main" size="sm">${this.tag}</wui-tag>`:null}
          <wui-icon size="md" name="chevronRight" color="default"></wui-icon>
        </wui-flex>
      </button>
    `}};ge.styles=[I,W,yn];Xe([c()],ge.prototype,"icon",void 0);Xe([c()],ge.prototype,"text",void 0);Xe([c()],ge.prototype,"description",void 0);Xe([c()],ge.prototype,"tag",void 0);Xe([c({type:Boolean})],ge.prototype,"disabled",void 0);ge=Xe([p("wui-list-description")],ge);const xn=ee`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var ii=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let nt=class extends m{constructor(){var e;super(),this.unsubscribe=[],this.tokenBalance=(e=u.getAccountData())==null?void 0:e.tokenBalance,this.remoteFeatures=f.state.remoteFeatures,this.unsubscribe.push(u.subscribeChainProp("accountState",i=>{this.tokenBalance=i==null?void 0:i.tokenBalance}),f.subscribeKey("remoteFeatures",i=>{this.remoteFeatures=i}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`${this.tokenTemplate()}`}tokenTemplate(){var e;return this.tokenBalance&&((e=this.tokenBalance)==null?void 0:e.length)>0?l`<wui-flex class="contentContainer" flexDirection="column" gap="2">
        ${this.tokenItemTemplate()}
      </wui-flex>`:l` <wui-flex flexDirection="column">
      ${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Scan the QR code and receive funds"
        icon="qrCode"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="w3m-account-receive-button"
      ></wui-list-description
    ></wui-flex>`}onRampTemplate(){var e;return(e=this.remoteFeatures)!=null&&e.onramp?l`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="w3m-account-onramp-button"
      ></wui-list-description>`:l``}tokenItemTemplate(){var e;return(e=this.tokenBalance)==null?void 0:e.map(i=>l`<wui-list-token
          tokenName=${i.name}
          tokenImageUrl=${i.iconUrl}
          tokenAmount=${i.quantity.numeric}
          tokenValue=${i.value}
          tokenCurrency=${i.symbol}
        ></wui-list-token>`)}onReceiveClick(){h.push("WalletReceive")}onBuyClick(){C.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:ze(u.state.activeChain)===Fe.ACCOUNT_TYPES.SMART_ACCOUNT}}),h.push("OnRampProviders")}};nt.styles=xn;ii([d()],nt.prototype,"tokenBalance",void 0);ii([d()],nt.prototype,"remoteFeatures",void 0);nt=ii([p("w3m-account-tokens-widget")],nt);const vn=v`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * ${({spacing:t})=>t[4]});
  }

  wui-promo + wui-profile-button {
    margin-top: ${({spacing:t})=>t[4]};
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:t})=>t[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var re=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let G=class extends m{constructor(){var e,i,o,s;super(...arguments),this.unsubscribe=[],this.network=u.state.activeCaipNetwork,this.profileName=(e=u.getAccountData())==null?void 0:e.profileName,this.address=(i=u.getAccountData())==null?void 0:i.address,this.currentTab=(o=u.getAccountData())==null?void 0:o.currentTab,this.tokenBalance=(s=u.getAccountData())==null?void 0:s.tokenBalance,this.features=f.state.features,this.namespace=u.state.activeChain,this.activeConnectorIds=b.state.activeConnectorIds,this.remoteFeatures=f.state.remoteFeatures}firstUpdated(){u.fetchTokenBalance(),this.unsubscribe.push(u.subscribeChainProp("accountState",e=>{e!=null&&e.address?(this.address=e.address,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance):P.close()}),b.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),u.subscribeKey("activeChain",e=>this.namespace=e),u.subscribeKey("activeCaipNetwork",e=>this.network=e),f.subscribeKey("features",e=>this.features=e),f.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e)),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}render(){if(!this.address)throw new Error("w3m-account-features-widget: No account provided");if(!this.namespace)return null;const e=this.activeConnectorIds[this.namespace],i=e?b.getConnectorById(e):void 0,{icon:o,iconSize:s}=this.getAuthData();return l`<wui-flex
      flexDirection="column"
      .padding=${["0","3","4","3"]}
      alignItems="center"
      gap="4"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center" gap="2">
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          icon=${o}
          iconSize=${s}
          alt=${i==null?void 0:i.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        ${this.tokenBalanceTemplate()}
      </wui-flex>
      ${this.orderedWalletFeatures()} ${this.tabsTemplate()} ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){var n;const e=((n=this.features)==null?void 0:n.walletFeaturesOrder)||D.DEFAULT_FEATURES.walletFeaturesOrder;if(e.every(a=>{var r,g;return a==="send"||a==="receive"?!((r=this.features)!=null&&r[a]):a==="swaps"||a==="onramp"?!((g=this.remoteFeatures)!=null&&g[a]):!0}))return null;const o=e.map(a=>a==="receive"||a==="onramp"?"fund":a),s=[...new Set(o)];return l`<wui-flex gap="2">
      ${s.map(a=>{switch(a){case"fund":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}
    </wui-flex>`}fundWalletTemplate(){var n,a;if(!this.namespace)return null;const e=D.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),i=(n=this.features)==null?void 0:n.receive,o=((a=this.remoteFeatures)==null?void 0:a.onramp)&&e,s=Q.isPayWithExchangeEnabled();return!o&&!i&&!s?null:l`
      <w3m-tooltip-trigger text="Fund wallet">
        <wui-button
          data-testid="wallet-features-fund-wallet-button"
          @click=${this.onFundWalletClick.bind(this)}
          variant="accent-secondary"
          size="lg"
          fullWidth
        >
          <wui-icon name="dollar"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}swapsTemplate(){var o;const e=(o=this.remoteFeatures)==null?void 0:o.swaps,i=u.state.activeChain===S.CHAIN.EVM;return!e||!i?null:l`
      <w3m-tooltip-trigger text="Swap">
        <wui-button
          fullWidth
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="recycleHorizontal"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}sendTemplate(){var s;const e=(s=this.features)==null?void 0:s.send,i=u.state.activeChain,o=D.SEND_SUPPORTED_NAMESPACES.includes(i);return!e||!o?null:l`
      <w3m-tooltip-trigger text="Send">
        <wui-button
          fullWidth
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="send"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}watchSwapValues(){this.watchTokenBalance=setInterval(()=>u.fetchTokenBalance(e=>this.onTokenBalanceError(e)),1e4)}onTokenBalanceError(e){e instanceof Error&&e.cause instanceof Response&&e.cause.status===S.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}listContentTemplate(){return this.currentTab===0?l`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:this.currentTab===1?l`<w3m-account-activity-widget></w3m-account-activity-widget>`:l`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){var e;if(this.tokenBalance&&((e=this.tokenBalance)==null?void 0:e.length)>=0){const i=y.calculateBalance(this.tokenBalance),{dollars:o="0",pennies:s="00"}=y.formatTokenBalance(i);return l`<wui-balance dollars=${o} pennies=${s}></wui-balance>`}return l`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){const e=Jt.getTabsByNamespace(u.state.activeChain);return e.length===0?null:l`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      .tabs=${e}
    ></wui-tabs>`}onTabChange(e){u.setAccountProp("currentTab",e,this.namespace)}onFundWalletClick(){h.push("FundWallet")}onSwapClick(){var e,i,o;(e=this.network)!=null&&e.caipNetworkId&&!D.SWAP_SUPPORTED_NETWORKS.includes((i=this.network)==null?void 0:i.caipNetworkId)?h.push("UnsupportedChain",{swapUnsupportedChain:!0}):(C.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:((o=this.network)==null?void 0:o.caipNetworkId)||"",isSmartAccount:ze(u.state.activeChain)===Fe.ACCOUNT_TYPES.SMART_ACCOUNT}}),h.push("Swap"))}getAuthData(){const e=fe.getConnectedSocialProvider(),i=fe.getConnectedSocialUsername(),o=b.getAuthConnector(),s=(o==null?void 0:o.provider.getEmail())??"";return{name:Xt.getAuthName({email:s,socialUsername:i,socialProvider:e}),icon:e??"mail",iconSize:e?"xl":"md"}}onGoToProfileWalletsView(){h.push("ProfileWallets")}onSendClick(){var e;C.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:((e=this.network)==null?void 0:e.caipNetworkId)||"",isSmartAccount:ze(u.state.activeChain)===Fe.ACCOUNT_TYPES.SMART_ACCOUNT}}),h.push("WalletSend")}};G.styles=vn;re([d()],G.prototype,"watchTokenBalance",void 0);re([d()],G.prototype,"network",void 0);re([d()],G.prototype,"profileName",void 0);re([d()],G.prototype,"address",void 0);re([d()],G.prototype,"currentTab",void 0);re([d()],G.prototype,"tokenBalance",void 0);re([d()],G.prototype,"features",void 0);re([d()],G.prototype,"namespace",void 0);re([d()],G.prototype,"activeConnectorIds",void 0);re([d()],G.prototype,"remoteFeatures",void 0);G=re([p("w3m-account-wallet-features-widget")],G);var Ri=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Ft=class extends m{constructor(){super(),this.unsubscribe=[],this.namespace=u.state.activeChain,this.unsubscribe.push(u.subscribeKey("activeChain",e=>{this.namespace=e}))}render(){if(!this.namespace)return null;const e=b.getConnectorId(this.namespace),i=b.getAuthConnector();return l`
      ${i&&e===S.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return l`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return l`<w3m-account-default-widget></w3m-account-default-widget>`}};Ri([d()],Ft.prototype,"namespace",void 0);Ft=Ri([p("w3m-account-view")],Ft);const $n=v`
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  wui-icon:not(.custom-icon, .icon-badge) {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    border-radius: ${({borderRadius:t})=>t[2]};
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border: 2px solid ${({tokens:t})=>t.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:t})=>t["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;var K=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let L=class extends m{constructor(){super(...arguments),this.address="",this.profileName="",this.content=[],this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadge=void 0,this.iconBadgeSize="md",this.buttonVariant="neutral-primary",this.enableMoreButton=!1,this.charsStart=4,this.charsEnd=6}render(){return l`
      <wui-flex flexDirection="column" rowgap="2">
        ${this.topTemplate()} ${this.bottomTemplate()}
      </wui-flex>
    `}topTemplate(){return l`
      <wui-flex alignItems="flex-start" justifyContent="space-between">
        ${this.imageOrIconTemplate()}
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="copy"
          @click=${this.dispatchCopyEvent}
        ></wui-icon-link>
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="externalLink"
          @click=${this.dispatchExternalLinkEvent}
        ></wui-icon-link>
        ${this.enableMoreButton?l`<wui-icon-link
              variant="secondary"
              size="md"
              icon="threeDots"
              @click=${this.dispatchMoreButtonEvent}
              data-testid="wui-active-profile-wallet-item-more-button"
            ></wui-icon-link>`:null}
      </wui-flex>
    `}bottomTemplate(){return l` <wui-flex flexDirection="column">${this.contentTemplate()}</wui-flex> `}imageOrIconTemplate(){return this.icon?l`
        <wui-flex flexGrow="1" alignItems="center">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?l`<wui-icon
                  color="accent-primary"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:l`
      <wui-flex flexGrow="1" alignItems="center">
        <wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>
      </wui-flex>
    `}contentTemplate(){return this.content.length===0?null:l`
      <wui-flex flexDirection="column" rowgap="3">
        ${this.content.map(e=>this.labelAndTagTemplate(e))}
      </wui-flex>
    `}labelAndTagTemplate({address:e,profileName:i,label:o,description:s,enableButton:n,buttonType:a,buttonLabel:r,buttonVariant:g,tagVariant:$,tagLabel:E,alignItems:_="flex-end"}){return l`
      <wui-flex justifyContent="space-between" alignItems=${_} columngap="1">
        <wui-flex flexDirection="column" rowgap="01">
          ${o?l`<wui-text variant="sm-medium" color="secondary">${o}</wui-text>`:null}

          <wui-flex alignItems="center" columngap="1">
            <wui-text variant="md-regular" color="primary">
              ${F.getTruncateString({string:i||e,charsStart:i?16:this.charsStart,charsEnd:i?0:this.charsEnd,truncate:i?"end":"middle"})}
            </wui-text>

            ${$&&E?l`<wui-tag variant=${$} size="sm">${E}</wui-tag>`:null}
          </wui-flex>

          ${s?l`<wui-text variant="sm-regular" color="secondary">${s}</wui-text>`:null}
        </wui-flex>

        ${n?this.buttonTemplate({buttonType:a,buttonLabel:r,buttonVariant:g}):null}
      </wui-flex>
    `}buttonTemplate({buttonType:e,buttonLabel:i,buttonVariant:o}){return l`
      <wui-button
        size="sm"
        variant=${o}
        @click=${e==="disconnect"?this.dispatchDisconnectEvent.bind(this):this.dispatchSwitchEvent.bind(this)}
        data-testid=${e==="disconnect"?"wui-active-profile-wallet-item-disconnect-button":"wui-active-profile-wallet-item-switch-button"}
      >
        ${i}
      </wui-button>
    `}dispatchDisconnectEvent(){this.dispatchEvent(new CustomEvent("disconnect",{bubbles:!0,composed:!0}))}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("switch",{bubbles:!0,composed:!0}))}dispatchExternalLinkEvent(){this.dispatchEvent(new CustomEvent("externalLink",{bubbles:!0,composed:!0}))}dispatchMoreButtonEvent(){this.dispatchEvent(new CustomEvent("more",{bubbles:!0,composed:!0}))}dispatchCopyEvent(){this.dispatchEvent(new CustomEvent("copy",{bubbles:!0,composed:!0}))}};L.styles=[I,W,$n];K([c()],L.prototype,"address",void 0);K([c()],L.prototype,"profileName",void 0);K([c({type:Array})],L.prototype,"content",void 0);K([c()],L.prototype,"alt",void 0);K([c()],L.prototype,"imageSrc",void 0);K([c()],L.prototype,"icon",void 0);K([c()],L.prototype,"iconSize",void 0);K([c()],L.prototype,"iconBadge",void 0);K([c()],L.prototype,"iconBadgeSize",void 0);K([c()],L.prototype,"buttonVariant",void 0);K([c({type:Boolean})],L.prototype,"enableMoreButton",void 0);K([c({type:Number})],L.prototype,"charsStart",void 0);K([c({type:Number})],L.prototype,"charsEnd",void 0);L=K([p("wui-active-profile-wallet-item")],L);const Cn=v`
  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  .right-icon {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border: 2px solid ${({tokens:t})=>t.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:t})=>t["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;var j=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let R=class extends m{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.buttonLabel="",this.buttonVariant="accent-primary",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadgeSize="md",this.rightIcon="signOut",this.rightIconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return l`
      <wui-flex alignItems="center" columngap="2">
        ${this.imageOrIconTemplate()} ${this.labelAndDescriptionTemplate()}
        ${this.buttonActionTemplate()}
      </wui-flex>
    `}imageOrIconTemplate(){return this.icon?l`
        <wui-flex alignItems="center" justifyContent="center" class="icon-box">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?l`<wui-icon
                  color="default"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:l`<wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>`}labelAndDescriptionTemplate(){return l`
      <wui-flex
        flexDirection="column"
        flexGrow="1"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <wui-text variant="lg-regular" color="primary">
          ${F.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
        </wui-text>
      </wui-flex>
    `}buttonActionTemplate(){return l`
      <wui-flex columngap="1" alignItems="center" justifyContent="center">
        <wui-button
          size="sm"
          variant=${this.buttonVariant}
          .loading=${this.loading}
          @click=${this.handleButtonClick}
          data-testid="wui-inactive-profile-wallet-item-button"
        >
          ${this.buttonLabel}
        </wui-button>

        <wui-icon-link
          variant="secondary"
          size="md"
          icon=${w(this.rightIcon)}
          class="right-icon"
          @click=${this.handleIconClick}
        ></wui-icon-link>
      </wui-flex>
    `}handleButtonClick(){this.dispatchEvent(new CustomEvent("buttonClick",{bubbles:!0,composed:!0}))}handleIconClick(){this.dispatchEvent(new CustomEvent("iconClick",{bubbles:!0,composed:!0}))}};R.styles=[I,W,Cn];j([c()],R.prototype,"address",void 0);j([c()],R.prototype,"profileName",void 0);j([c()],R.prototype,"alt",void 0);j([c()],R.prototype,"buttonLabel",void 0);j([c()],R.prototype,"buttonVariant",void 0);j([c()],R.prototype,"imageSrc",void 0);j([c()],R.prototype,"icon",void 0);j([c()],R.prototype,"iconSize",void 0);j([c()],R.prototype,"iconBadge",void 0);j([c()],R.prototype,"iconBadgeSize",void 0);j([c()],R.prototype,"rightIcon",void 0);j([c()],R.prototype,"rightIconSize",void 0);j([c({type:Boolean})],R.prototype,"loading",void 0);j([c({type:Number})],R.prototype,"charsStart",void 0);j([c({type:Number})],R.prototype,"charsEnd",void 0);R=j([p("wui-inactive-profile-wallet-item")],R);const jt={getAuthData(t){var a,r;const e=t.connectorId===S.CONNECTOR_ID.AUTH;if(!e)return{isAuth:!1,icon:void 0,iconSize:void 0,name:void 0};const i=((a=t==null?void 0:t.auth)==null?void 0:a.name)??fe.getConnectedSocialProvider(),o=((r=t==null?void 0:t.auth)==null?void 0:r.username)??fe.getConnectedSocialUsername(),s=b.getAuthConnector(),n=(s==null?void 0:s.provider.getEmail())??"";return{isAuth:!0,icon:i??"mail",iconSize:i?"xl":"md",name:e?Xt.getAuthName({email:n,socialUsername:o,socialProvider:i}):void 0}}},Tn=v`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .balance-amount {
    flex: 1;
  }

  .wallet-list {
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({easings:t})=>t["ease-out-power-1"]}
      ${({durations:t})=>t.md};
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .active-wallets {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  .active-wallets-box {
    height: 330px;
  }

  .empty-wallet-list-box {
    height: 400px;
  }

  .empty-box {
    width: 100%;
    padding: ${({spacing:t})=>t[4]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  wui-separator {
    margin: ${({spacing:t})=>t[2]} 0 ${({spacing:t})=>t[2]} 0;
  }

  .active-connection {
    padding: ${({spacing:t})=>t[2]};
  }

  .recent-connection {
    padding: ${({spacing:t})=>t[2]} 0 ${({spacing:t})=>t[2]} 0;
  }

  @media (max-width: 430px) {
    .active-wallets-box,
    .empty-wallet-list-box {
      height: auto;
      max-height: clamp(360px, 470px, 80vh);
    }
  }
`;var X=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};const Y={ADDRESS_DISPLAY:{START:4,END:6},BADGE:{SIZE:"md",ICON:"lightbulb"},SCROLL_THRESHOLD:50,OPACITY_RANGE:[0,1]},Te={eip155:"ethereum",solana:"solana",bip122:"bitcoin",ton:"ton",tron:"tron"},Sn=[{namespace:"eip155",icon:Te.eip155,label:"EVM"},{namespace:"solana",icon:Te.solana,label:"Solana"},{namespace:"bip122",icon:Te.bip122,label:"Bitcoin"},{namespace:"ton",icon:Te.ton,label:"Ton"},{namespace:"tron",icon:Te.tron,label:"Tron"}],En={eip155:{title:"Add EVM Wallet",description:"Add your first EVM wallet"},solana:{title:"Add Solana Wallet",description:"Add your first Solana wallet"},bip122:{title:"Add Bitcoin Wallet",description:"Add your first Bitcoin wallet"},ton:{title:"Add TON Wallet",description:"Add your first TON wallet"},tron:{title:"Add TRON Wallet",description:"Add your first TRON wallet"}};let B=class extends m{constructor(){var e,i,o;super(),this.unsubscribers=[],this.currentTab=0,this.namespace=u.state.activeChain,this.namespaces=Array.from(u.state.chains.keys()),this.caipAddress=void 0,this.profileName=void 0,this.activeConnectorIds=b.state.activeConnectorIds,this.lastSelectedAddress="",this.lastSelectedConnectorId="",this.isSwitching=!1,this.caipNetwork=u.state.activeCaipNetwork,this.user=(e=u.getAccountData())==null?void 0:e.user,this.remoteFeatures=f.state.remoteFeatures,this.currentTab=this.namespace?this.namespaces.indexOf(this.namespace):0,this.caipAddress=(i=u.getAccountData(this.namespace))==null?void 0:i.caipAddress,this.profileName=(o=u.getAccountData(this.namespace))==null?void 0:o.profileName,this.unsubscribers.push(x.subscribeKey("connections",()=>this.onConnectionsChange()),x.subscribeKey("recentConnections",()=>this.requestUpdate()),b.subscribeKey("activeConnectorIds",s=>{this.activeConnectorIds=s}),u.subscribeKey("activeCaipNetwork",s=>this.caipNetwork=s),u.subscribeChainProp("accountState",s=>{this.user=s==null?void 0:s.user}),f.subscribeKey("remoteFeatures",s=>this.remoteFeatures=s)),this.chainListener=u.subscribeChainProp("accountState",s=>{this.caipAddress=s==null?void 0:s.caipAddress,this.profileName=s==null?void 0:s.profileName},this.namespace)}disconnectedCallback(){var e,i;this.unsubscribers.forEach(o=>o()),(e=this.resizeObserver)==null||e.disconnect(),this.removeScrollListener(),(i=this.chainListener)==null||i.call(this)}firstUpdated(){var o;const e=(o=this.shadowRoot)==null?void 0:o.querySelector(".wallet-list");if(!e)return;const i=()=>this.updateScrollOpacity(e);requestAnimationFrame(i),e.addEventListener("scroll",i),this.resizeObserver=new ResizeObserver(i),this.resizeObserver.observe(e),i()}render(){const e=this.namespace;if(!e)throw new Error("Namespace is not set");return l`
      <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="4">
        ${this.renderTabs()} ${this.renderHeader(e)} ${this.renderConnections(e)}
        ${this.renderAddConnectionButton(e)}
      </wui-flex>
    `}renderTabs(){const e=this.namespaces.map(o=>Sn.find(s=>s.namespace===o)).filter(Boolean);return e.length>1?l`
        <wui-tabs
          .onTabChange=${o=>this.handleTabChange(o)}
          .activeTab=${this.currentTab}
          .tabs=${e}
        ></wui-tabs>
      `:null}renderHeader(e){const o=this.getActiveConnections(e).flatMap(({accounts:s})=>s).length+(this.caipAddress?1:0);return l`
      <wui-flex alignItems="center" columngap="1">
        <wui-icon
          size="sm"
          name=${Te[e]??Te.eip155}
        ></wui-icon>
        <wui-text color="secondary" variant="lg-regular"
          >${o>1?"Wallets":"Wallet"}</wui-text
        >
        <wui-text
          color="primary"
          variant="lg-regular"
          class="balance-amount"
          data-testid="balance-amount"
        >
          ${o}
        </wui-text>
        <wui-link
          color="secondary"
          variant="secondary"
          @click=${()=>x.disconnect({namespace:e})}
          ?disabled=${!this.hasAnyConnections(e)}
          data-testid="disconnect-all-button"
        >
          Disconnect All
        </wui-link>
      </wui-flex>
    `}renderConnections(e){const i=this.hasAnyConnections(e);return l`
      <wui-flex flexDirection="column" class=${Ai({"wallet-list":!0,"active-wallets-box":i,"empty-wallet-list-box":!i})} rowgap="3">
        ${i?this.renderActiveConnections(e):this.renderEmptyState(e)}
      </wui-flex>
    `}renderActiveConnections(e){const i=this.getActiveConnections(e),o=this.activeConnectorIds[e],s=this.getPlainAddress();return l`
      ${s||o||i.length>0?l`<wui-flex
            flexDirection="column"
            .padding=${["4","0","4","0"]}
            class="active-wallets"
          >
            ${this.renderActiveProfile(e)} ${this.renderActiveConnectionsList(e)}
          </wui-flex>`:null}
      ${this.renderRecentConnections(e)}
    `}renderActiveProfile(e){const i=this.activeConnectorIds[e];if(!i)return null;const{connections:o}=he.getConnectionsData(e),s=b.getConnectorById(i),n=T.getConnectorImage(s),a=this.getPlainAddress();if(!a)return null;const r=e===S.CHAIN.BITCOIN,g=jt.getAuthData({connectorId:i,accounts:[]}),$=this.getActiveConnections(e).flatMap(O=>O.accounts).length>0,E=o.find(O=>O.connectorId===i),_=E==null?void 0:E.accounts.filter(O=>!J.isLowerCaseMatch(O.address,a));return l`
      <wui-flex flexDirection="column" .padding=${["0","4","0","4"]}>
        <wui-active-profile-wallet-item
          address=${a}
          alt=${s==null?void 0:s.name}
          .content=${this.getProfileContent({address:a,connections:o,connectorId:i,namespace:e})}
          .charsStart=${Y.ADDRESS_DISPLAY.START}
          .charsEnd=${Y.ADDRESS_DISPLAY.END}
          .icon=${g.icon}
          .iconSize=${g.iconSize}
          .iconBadge=${this.isSmartAccount(a)?Y.BADGE.ICON:void 0}
          .iconBadgeSize=${this.isSmartAccount(a)?Y.BADGE.SIZE:void 0}
          imageSrc=${n}
          ?enableMoreButton=${g.isAuth}
          @copy=${()=>this.handleCopyAddress(a)}
          @disconnect=${()=>this.handleDisconnect(e,i)}
          @switch=${()=>{r&&E&&(_!=null&&_[0])&&this.handleSwitchWallet(E,_[0].address,e)}}
          @externalLink=${()=>this.handleExternalLink(a)}
          @more=${()=>this.handleMore()}
          data-testid="wui-active-profile-wallet-item"
        ></wui-active-profile-wallet-item>
        ${$?l`<wui-separator></wui-separator>`:null}
      </wui-flex>
    `}renderActiveConnectionsList(e){const i=this.getActiveConnections(e);return i.length===0?null:l`
      <wui-flex flexDirection="column" .padding=${["0","2","0","2"]}>
        ${this.renderConnectionList(i,!1,e)}
      </wui-flex>
    `}renderRecentConnections(e){const{recentConnections:i}=he.getConnectionsData(e);return i.flatMap(s=>s.accounts).length===0?null:l`
      <wui-flex flexDirection="column" .padding=${["0","2","0","2"]} rowGap="2">
        <wui-text color="secondary" variant="sm-medium" data-testid="recently-connected-text"
          >RECENTLY CONNECTED</wui-text
        >
        <wui-flex flexDirection="column" .padding=${["0","2","0","2"]}>
          ${this.renderConnectionList(i,!0,e)}
        </wui-flex>
      </wui-flex>
    `}renderConnectionList(e,i,o){return e.filter(s=>s.accounts.length>0).map((s,n)=>{const a=b.getConnectorById(s.connectorId),r=T.getConnectorImage(a)??"",g=jt.getAuthData(s);return s.accounts.map(($,E)=>{const _=n!==0||E!==0,O=this.isAccountLoading(s.connectorId,$.address);return l`
            <wui-flex flexDirection="column">
              ${_?l`<wui-separator></wui-separator>`:null}
              <wui-inactive-profile-wallet-item
                address=${$.address}
                alt=${s.connectorId}
                buttonLabel=${i?"Connect":"Switch"}
                buttonVariant=${i?"neutral-secondary":"accent-secondary"}
                rightIcon=${i?"bin":"power"}
                rightIconSize="sm"
                class=${i?"recent-connection":"active-connection"}
                data-testid=${i?"recent-connection":"active-connection"}
                imageSrc=${r}
                .iconBadge=${this.isSmartAccount($.address)?Y.BADGE.ICON:void 0}
                .iconBadgeSize=${this.isSmartAccount($.address)?Y.BADGE.SIZE:void 0}
                .icon=${g.icon}
                .iconSize=${g.iconSize}
                .loading=${O}
                .showBalance=${!1}
                .charsStart=${Y.ADDRESS_DISPLAY.START}
                .charsEnd=${Y.ADDRESS_DISPLAY.END}
                @buttonClick=${()=>this.handleSwitchWallet(s,$.address,o)}
                @iconClick=${()=>this.handleWalletAction({connection:s,address:$.address,isRecentConnection:i,namespace:o})}
              ></wui-inactive-profile-wallet-item>
            </wui-flex>
          `})})}renderAddConnectionButton(e){if(!this.isMultiWalletEnabled()&&this.caipAddress||!this.hasAnyConnections(e))return null;const{title:i}=this.getChainLabelInfo(e);return l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="plus"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.handleAddConnection(e)}
        data-testid="add-connection-button"
      >
        <wui-text variant="md-medium" color="secondary">${i}</wui-text>
      </wui-list-item>
    `}renderEmptyState(e){const{title:i,description:o}=this.getChainLabelInfo(e);return l`
      <wui-flex alignItems="flex-start" class="empty-template" data-testid="empty-template">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowgap="3"
          class="empty-box"
        >
          <wui-icon-box size="xl" icon="wallet" color="secondary"></wui-icon-box>

          <wui-flex flexDirection="column" alignItems="center" justifyContent="center" gap="1">
            <wui-text color="primary" variant="lg-regular" data-testid="empty-state-text"
              >No wallet connected</wui-text
            >
            <wui-text color="secondary" variant="md-regular" data-testid="empty-state-description"
              >${o}</wui-text
            >
          </wui-flex>

          <wui-link
            @click=${()=>this.handleAddConnection(e)}
            data-testid="empty-state-button"
            icon="plus"
          >
            ${i}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}handleTabChange(e){var o,s,n;const i=this.namespaces[e];i&&((o=this.chainListener)==null||o.call(this),this.currentTab=this.namespaces.indexOf(i),this.namespace=i,this.caipAddress=(s=u.getAccountData(i))==null?void 0:s.caipAddress,this.profileName=(n=u.getAccountData(i))==null?void 0:n.profileName,this.chainListener=u.subscribeChainProp("accountState",a=>{this.caipAddress=a==null?void 0:a.caipAddress},i))}async handleSwitchWallet(e,i,o){var s;try{this.isSwitching=!0,this.lastSelectedConnectorId=e.connectorId,this.lastSelectedAddress=i,((s=this.caipNetwork)==null?void 0:s.chainNamespace)!==o&&(e!=null&&e.caipNetwork)&&(b.setFilterByNamespace(o),await u.switchActiveNetwork(e==null?void 0:e.caipNetwork)),await x.switchConnection({connection:e,address:i,namespace:o,closeModalOnConnect:!1,onChange({hasSwitchedAccount:a,hasSwitchedWallet:r}){r?k.showSuccess("Wallet switched"):a&&k.showSuccess("Account switched")}})}catch{k.showError("Failed to switch wallet")}finally{this.isSwitching=!1}}handleWalletAction(e){const{connection:i,address:o,isRecentConnection:s,namespace:n}=e;s?(fe.deleteAddressFromConnection({connectorId:i.connectorId,address:o,namespace:n}),x.syncStorageConnections(),k.showSuccess("Wallet deleted")):this.handleDisconnect(n,i.connectorId)}async handleDisconnect(e,i){try{await x.disconnect({id:i,namespace:e}),k.showSuccess("Wallet disconnected")}catch{k.showError("Failed to disconnect wallet")}}handleCopyAddress(e){y.copyToClopboard(e),k.showSuccess("Address copied")}handleMore(){h.push("AccountSettings")}handleExternalLink(e){var o,s;const i=(s=(o=this.caipNetwork)==null?void 0:o.blockExplorers)==null?void 0:s.default.url;i&&y.openHref(`${i}/address/${e}`,"_blank")}handleAddConnection(e){b.setFilterByNamespace(e),h.push("Connect",{addWalletForNamespace:e})}getChainLabelInfo(e){return En[e]??{title:"Add Wallet",description:"Add your first wallet"}}isSmartAccount(e){var o,s;if(!this.namespace)return!1;const i=(s=(o=this.user)==null?void 0:o.accounts)==null?void 0:s.find(n=>n.type==="smartAccount");return i&&e?J.isLowerCaseMatch(i.address,e):!1}getPlainAddress(){return this.caipAddress?y.getPlainAddress(this.caipAddress):void 0}getActiveConnections(e){const i=this.activeConnectorIds[e],{connections:o}=he.getConnectionsData(e),[s]=o.filter(g=>J.isLowerCaseMatch(g.connectorId,i));if(!i)return o;const n=e===S.CHAIN.BITCOIN,{address:a}=this.caipAddress?Ki.parseCaipAddress(this.caipAddress):{};let r=[...a?[a]:[]];return n&&s&&(r=s.accounts.map(g=>g.address)||[]),he.excludeConnectorAddressFromConnections({connectorId:i,addresses:r,connections:o})}hasAnyConnections(e){const i=this.getActiveConnections(e),{recentConnections:o}=he.getConnectionsData(e);return!!this.caipAddress||i.length>0||o.length>0}isAccountLoading(e,i){return J.isLowerCaseMatch(this.lastSelectedConnectorId,e)&&J.isLowerCaseMatch(this.lastSelectedAddress,i)&&this.isSwitching}getProfileContent(e){const{address:i,connections:o,connectorId:s,namespace:n}=e,[a]=o.filter(g=>J.isLowerCaseMatch(g.connectorId,s));if(n===S.CHAIN.BITCOIN&&(a!=null&&a.accounts.every(g=>typeof g.type=="string")))return this.getBitcoinProfileContent(a.accounts,i);const r=jt.getAuthData({connectorId:s,accounts:[]});return[{address:i,tagLabel:"Active",tagVariant:"success",enableButton:!0,profileName:this.profileName,buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral-secondary",...r.isAuth?{description:this.isSmartAccount(i)?"Smart Account":"EOA Account"}:{}}]}getBitcoinProfileContent(e,i){const o=e.length>1,s=this.getPlainAddress();return e.map(n=>{const a=J.isLowerCaseMatch(n.address,s);let r="PAYMENT";return n.type==="ordinal"&&(r="ORDINALS"),{address:n.address,tagLabel:J.isLowerCaseMatch(n.address,i)?"Active":void 0,tagVariant:J.isLowerCaseMatch(n.address,i)?"success":void 0,enableButton:!0,...o?{label:r,alignItems:"flex-end",buttonType:a?"disconnect":"switch",buttonLabel:a?"Disconnect":"Switch",buttonVariant:a?"neutral-secondary":"accent-secondary"}:{alignItems:"center",buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral-secondary"}}})}removeScrollListener(){var i;const e=(i=this.shadowRoot)==null?void 0:i.querySelector(".wallet-list");e&&e.removeEventListener("scroll",()=>this.handleConnectListScroll())}handleConnectListScroll(){var i;const e=(i=this.shadowRoot)==null?void 0:i.querySelector(".wallet-list");e&&this.updateScrollOpacity(e)}isMultiWalletEnabled(){var e;return!!((e=this.remoteFeatures)!=null&&e.multiWallet)}updateScrollOpacity(e){e.style.setProperty("--connect-scroll--top-opacity",ft.interpolate([0,Y.SCROLL_THRESHOLD],Y.OPACITY_RANGE,e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",ft.interpolate([0,Y.SCROLL_THRESHOLD],Y.OPACITY_RANGE,e.scrollHeight-e.scrollTop-e.offsetHeight).toString())}onConnectionsChange(){if(this.isMultiWalletEnabled()&&this.namespace){const{connections:e}=he.getConnectionsData(this.namespace);e.length===0&&h.reset("ProfileWallets")}this.requestUpdate()}};B.styles=Tn;X([d()],B.prototype,"currentTab",void 0);X([d()],B.prototype,"namespace",void 0);X([d()],B.prototype,"namespaces",void 0);X([d()],B.prototype,"caipAddress",void 0);X([d()],B.prototype,"profileName",void 0);X([d()],B.prototype,"activeConnectorIds",void 0);X([d()],B.prototype,"lastSelectedAddress",void 0);X([d()],B.prototype,"lastSelectedConnectorId",void 0);X([d()],B.prototype,"isSwitching",void 0);X([d()],B.prototype,"caipNetwork",void 0);X([d()],B.prototype,"user",void 0);X([d()],B.prototype,"remoteFeatures",void 0);B=X([p("w3m-profile-wallets-view")],B);var Ye=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Re=class extends m{constructor(){super(),this.unsubscribe=[],this.activeCaipNetwork=u.state.activeCaipNetwork,this.features=f.state.features,this.remoteFeatures=f.state.remoteFeatures,this.exchangesLoading=Q.state.isLoading,this.exchanges=Q.state.exchanges,this.unsubscribe.push(f.subscribeKey("features",e=>this.features=e),f.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e),u.subscribeKey("activeCaipNetwork",e=>{this.activeCaipNetwork=e,this.setDefaultPaymentAsset()}),Q.subscribeKey("isLoading",e=>this.exchangesLoading=e),Q.subscribeKey("exchanges",e=>this.exchanges=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}async firstUpdated(){Q.isPayWithExchangeSupported()&&(await this.setDefaultPaymentAsset(),await Q.fetchExchanges())}render(){return l`
      <wui-flex flexDirection="column" .padding=${["1","3","3","3"]} gap="2">
        ${this.onrampTemplate()} ${this.receiveTemplate()} ${this.depositFromExchangeTemplate()}
      </wui-flex>
    `}async setDefaultPaymentAsset(){if(!this.activeCaipNetwork)return;const e=await Q.getAssetsForNetwork(this.activeCaipNetwork.caipNetworkId),i=e.find(o=>o.metadata.symbol==="USDC")||e[0];i&&Q.setPaymentAsset(i)}onrampTemplate(){var o;if(!this.activeCaipNetwork)return null;const e=(o=this.remoteFeatures)==null?void 0:o.onramp,i=D.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.activeCaipNetwork.chainNamespace);return!e||!i?null:l`
      <wui-list-item
        @click=${this.onBuyCrypto.bind(this)}
        icon="card"
        data-testid="wallet-features-onramp-button"
      >
        <wui-text variant="lg-regular" color="primary">Buy crypto</wui-text>
      </wui-list-item>
    `}depositFromExchangeTemplate(){return!this.activeCaipNetwork||!Q.isPayWithExchangeSupported()?null:l`
      <wui-list-item
        @click=${this.onDepositFromExchange.bind(this)}
        icon="arrowBottomCircle"
        data-testid="wallet-features-deposit-from-exchange-button"
        ?loading=${this.exchangesLoading}
        ?disabled=${this.exchangesLoading||!this.exchanges.length}
      >
        <wui-text variant="lg-regular" color="primary">Deposit from exchange</wui-text>
      </wui-list-item>
    `}receiveTemplate(){var i;return!((i=this.features)!=null&&i.receive)?null:l`
      <wui-list-item
        @click=${this.onReceive.bind(this)}
        icon="qrCode"
        data-testid="wallet-features-receive-button"
      >
        <wui-text variant="lg-regular" color="primary">Receive funds</wui-text>
      </wui-list-item>
    `}onBuyCrypto(){h.push("OnRampProviders")}onReceive(){h.push("WalletReceive")}onDepositFromExchange(){var e;Q.reset(),h.push("PayWithExchange",{redirectView:(e=h.state.data)==null?void 0:e.redirectView})}};Ye([d()],Re.prototype,"activeCaipNetwork",void 0);Ye([d()],Re.prototype,"features",void 0);Ye([d()],Re.prototype,"remoteFeatures",void 0);Ye([d()],Re.prototype,"exchangesLoading",void 0);Ye([d()],Re.prototype,"exchanges",void 0);Re=Ye([p("w3m-fund-wallet-view")],Re);const kn=v`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      color ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      border ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      box-shadow ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      width ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      height ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      transform ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      opacity ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:t})=>t.neutrals300};
    border-radius: ${({borderRadius:t})=>t.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      color ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      border ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      box-shadow ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      width ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      height ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      transform ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      opacity ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:t})=>t.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:t})=>t.core.iconAccentPrimary};
    background-color: ${({tokens:t})=>t.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:t})=>t.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:t})=>t.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:t})=>t.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:t})=>t.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:t})=>t.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:t})=>t.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:t})=>t.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:t})=>t.theme.textTertiary};
  }
`;var Wt=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Ve=class extends m{constructor(){super(...arguments),this.inputElementRef=Zt(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return l`
      <label data-size=${this.size}>
        <input
          ${ei(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var e;this.dispatchEvent(new CustomEvent("switchChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.checked,bubbles:!0,composed:!0}))}};Ve.styles=[I,W,kn];Wt([c({type:Boolean})],Ve.prototype,"checked",void 0);Wt([c({type:Boolean})],Ve.prototype,"disabled",void 0);Wt([c()],Ve.prototype,"size",void 0);Ve=Wt([p("wui-toggle")],Ve);const An=v`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:t})=>t[2]};
    padding: ${({spacing:t})=>t[2]} ${({spacing:t})=>t[3]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:t})=>t.theme.foregroundPrimary};
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var Wi=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let gt=class extends m{constructor(){super(...arguments),this.checked=!1}render(){return l`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(e){e.stopPropagation(),this.checked=e.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};gt.styles=[I,W,An];Wi([c({type:Boolean})],gt.prototype,"checked",void 0);gt=Wi([p("wui-certified-switch")],gt);const In=v`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:t})=>t[3]};
    color: ${({tokens:t})=>t.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:t})=>t[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:t})=>t[4]};
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    }
  }
`;var Ni=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let yt=class extends m{constructor(){super(...arguments),this.inputComponentRef=Zt(),this.inputValue=""}render(){return l`
      <wui-input-text
        ${ei(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?l`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(e){this.inputValue=e.detail||""}clearValue(){const e=this.inputComponentRef.value,i=e==null?void 0:e.inputElementRef.value;i&&(i.value="",this.inputValue="",i.focus(),i.dispatchEvent(new Event("input")))}};yt.styles=[I,In];Ni([c()],yt.prototype,"inputValue",void 0);yt=Ni([p("wui-search-bar")],yt);const _n=v`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:t})=>t[2]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:t})=>t.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var Oi=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let xt=class extends m{constructor(){super(...arguments),this.type="wallet"}render(){return l`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?l` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${Yi}`:l`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};xt.styles=[I,W,_n];Oi([c()],xt.prototype,"type",void 0);xt=Oi([p("wui-card-select-loader")],xt);const Rn=ee`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var ne=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let V=class extends m{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&F.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&F.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&F.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&F.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&F.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&F.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&F.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&F.getSpacingStyles(this.margin,3)};
    `,l`<slot></slot>`}};V.styles=[I,Rn];ne([c()],V.prototype,"gridTemplateRows",void 0);ne([c()],V.prototype,"gridTemplateColumns",void 0);ne([c()],V.prototype,"justifyItems",void 0);ne([c()],V.prototype,"alignItems",void 0);ne([c()],V.prototype,"justifyContent",void 0);ne([c()],V.prototype,"alignContent",void 0);ne([c()],V.prototype,"columnGap",void 0);ne([c()],V.prototype,"rowGap",void 0);ne([c()],V.prototype,"gap",void 0);ne([c()],V.prototype,"padding",void 0);ne([c()],V.prototype,"margin",void 0);V=ne([p("wui-grid")],V);const Wn=v`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:t})=>t[2]};
    padding: ${({spacing:t})=>t[3]} ${({spacing:t})=>t[0]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:t})=>t[4]}, 20px);
    transition:
      color ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-1"]},
      background-color ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-1"]},
      border-radius ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:t})=>t.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:t})=>t.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:t})=>t.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:t})=>t.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:t})=>t.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var de=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Z=class extends m{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(i=>{i.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var i,o;const e=((i=this.wallet)==null?void 0:i.badge_type)==="certified";return l`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${w(e?"certified":void 0)}
            >${(o=this.wallet)==null?void 0:o.name}</wui-text
          >
          ${e?l`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var e,i;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():l`
      <wui-wallet-image
        size="lg"
        imageSrc=${w(this.imageSrc)}
        name=${w((e=this.wallet)==null?void 0:e.name)}
        .installed=${((i=this.wallet)==null?void 0:i.installed)??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return l`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=T.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await T.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){!this.wallet||this.isImpressed||(this.isImpressed=!0,C.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:h.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};Z.styles=Wn;de([d()],Z.prototype,"visible",void 0);de([d()],Z.prototype,"imageSrc",void 0);de([d()],Z.prototype,"imageLoading",void 0);de([d()],Z.prototype,"isImpressed",void 0);de([c()],Z.prototype,"explorerId",void 0);de([c()],Z.prototype,"walletQuery",void 0);de([c()],Z.prototype,"certified",void 0);de([c()],Z.prototype,"displayIndex",void 0);de([c({type:Object})],Z.prototype,"wallet",void 0);Z=de([p("w3m-all-wallets-list-item")],Z);const Nn=v`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:t})=>t.xl};
    animation-timing-function: ${({easings:t})=>t["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:t})=>t[4]};
    padding-bottom: ${({spacing:t})=>t[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var dt=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};const bi="local-paginator";let We=class extends m{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!A.state.wallets.length,this.wallets=A.state.wallets,this.mobileFullScreen=f.state.enableMobileFullScreen,this.unsubscribe.push(A.subscribeKey("wallets",e=>this.wallets=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(i=>i()),(e=this.paginationObserver)==null||e.disconnect()}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),l`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var i;this.loading=!0;const e=(i=this.shadowRoot)==null?void 0:i.querySelector("wui-grid");e&&(await A.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,i){return[...Array(e)].map(()=>l`
        <wui-card-select-loader type="wallet" id=${w(i)}></wui-card-select-loader>
      `)}walletsTemplate(){return tt.getWalletConnectWallets(this.wallets).map((e,i)=>l`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${e.id}"
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
          explorerId=${e.id}
          certified=${this.badge==="certified"}
          displayIndex=${i}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:i,featured:o,count:s,mobileFilteredOutWalletsLength:n}=A.state,a=window.innerWidth<352?3:4,r=e.length+i.length;let $=Math.ceil(r/a)*a-r+a;return $-=e.length?o.length%a:0,s===0&&o.length>0?null:s===0||[...o,...e,...i].length<s-(n??0)?this.shimmerTemplate($,bi):null}createPaginationObserver(){var i;const e=(i=this.shadowRoot)==null?void 0:i.querySelector(`#${bi}`);e&&(this.paginationObserver=new IntersectionObserver(([o])=>{if(o!=null&&o.isIntersecting&&!this.loading){const{page:s,count:n,wallets:a}=A.state;a.length<n&&A.fetchWalletsByPage({page:s+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){b.selectWalletConnector(e)}};We.styles=Nn;dt([d()],We.prototype,"loading",void 0);dt([d()],We.prototype,"wallets",void 0);dt([d()],We.prototype,"badge",void 0);dt([d()],We.prototype,"mobileFullScreen",void 0);We=dt([p("w3m-all-wallets-list")],We);const On=ee`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var ht=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Ne=class extends m{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=f.state.enableMobileFullScreen,this.query=""}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.onSearch(),this.loading?l`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await A.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=A.state,i=tt.markWalletsAsInstalled(e),o=tt.filterWalletsByWcSupport(i);return o.length?l`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${o.map((s,n)=>l`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(s)}
              .wallet=${s}
              data-testid="wallet-search-item-${s.id}"
              explorerId=${s.id}
              certified=${this.badge==="certified"}
              walletQuery=${this.query}
              displayIndex=${n}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:l`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){b.selectWalletConnector(e)}};Ne.styles=On;ht([d()],Ne.prototype,"loading",void 0);ht([d()],Ne.prototype,"mobileFullScreen",void 0);ht([c()],Ne.prototype,"query",void 0);ht([c()],Ne.prototype,"badge",void 0);Ne=ht([p("w3m-all-wallets-search")],Ne);var ni=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let vt=class extends m{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=y.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return l`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge==="certified"}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?l`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:l`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onCertifiedSwitchChange(e){e.detail?(this.badge="certified",k.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return y.isMobile()?l`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){h.push("ConnectingWalletConnect")}};ni([d()],vt.prototype,"search",void 0);ni([d()],vt.prototype,"badge",void 0);vt=ni([p("w3m-all-wallets-view")],vt);const Pn=v`
  button {
    display: flex;
    gap: ${({spacing:t})=>t[1]};
    padding: ${({spacing:t})=>t[4]};
    width: 100%;
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[4]};
    justify-content: center;
    align-items: center;
  }

  :host([data-size='sm']) button {
    padding: ${({spacing:t})=>t[2]};
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  :host([data-size='md']) button {
    padding: ${({spacing:t})=>t[3]};
    border-radius: ${({borderRadius:t})=>t[3]};
  }

  button:hover {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  button:disabled {
    opacity: 0.5;
  }
`;var Qe=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let ye=class extends m{constructor(){super(...arguments),this.text="",this.disabled=!1,this.size="lg",this.icon="copy",this.tabIdx=void 0}render(){this.dataset.size=this.size;const e=`${this.size}-regular`;return l`
      <button ?disabled=${this.disabled} tabindex=${w(this.tabIdx)}>
        <wui-icon name=${this.icon} size=${this.size} color="default"></wui-icon>
        <wui-text align="center" variant=${e} color="primary">${this.text}</wui-text>
      </button>
    `}};ye.styles=[I,W,Pn];Qe([c()],ye.prototype,"text",void 0);Qe([c({type:Boolean})],ye.prototype,"disabled",void 0);Qe([c()],ye.prototype,"size",void 0);Qe([c()],ye.prototype,"icon",void 0);Qe([c()],ye.prototype,"tabIdx",void 0);ye=Qe([p("wui-list-button")],ye);const Dn=v`
  wui-separator {
    margin: ${({spacing:t})=>t[3]} calc(${({spacing:t})=>t[3]} * -1);
    width: calc(100% + ${({spacing:t})=>t[3]} * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: ${({spacing:t})=>t[2]};
  }

  wui-loading-spinner {
    right: ${({spacing:t})=>t[3]};
  }

  wui-text {
    margin: ${({spacing:t})=>t[2]} ${({spacing:t})=>t[3]}
      ${({spacing:t})=>t[0]} ${({spacing:t})=>t[3]};
  }
`;var Be=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let pe=class extends m{constructor(){super(),this.unsubscribe=[],this.formRef=Zt(),this.email="",this.loading=!1,this.error="",this.remoteFeatures=f.state.remoteFeatures,this.hasExceededUsageLimit=A.state.plan.hasExceededUsageLimit,this.unsubscribe.push(f.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}),A.subscribeKey("plan",e=>this.hasExceededUsageLimit=e.hasExceededUsageLimit))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",i=>{i.key==="Enter"&&this.onSubmitEmail(i)})}render(){const e=x.hasAnyConnection(S.CONNECTOR_ID.AUTH);return l`
      <form ${ei(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${w(this.tabIdx)}
          ?disabled=${e||this.hasExceededUsageLimit}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?l`
          <wui-icon-link
            size="lg"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?l`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:null}templateError(){return this.error?l`<wui-text variant="sm-medium" color="error">${this.error}</wui-text>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){var o;if(!Jt.isValidEmail(this.email)){Ii.open({displayMessage:Qi.ALERT_WARNINGS.INVALID_EMAIL.displayMessage},"warning");return}if(!S.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(s=>s===u.state.activeChain)){const s=u.getFirstCaipNetworkSupportsAuthConnector();if(s){h.push("SwitchNetwork",{network:s});return}}try{if(this.loading)return;this.loading=!0,e.preventDefault();const s=b.getAuthConnector();if(!s)throw new Error("w3m-email-login-widget: Auth connector not found");const{action:n}=await s.provider.connectEmail({email:this.email});if(C.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),n==="VERIFY_OTP")C.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),h.push("EmailVerifyOtp",{email:this.email});else if(n==="VERIFY_DEVICE")h.push("EmailVerifyDevice",{email:this.email});else if(n==="CONNECT"){const a=(o=this.remoteFeatures)==null?void 0:o.multiWallet;await x.connectExternal(s,u.state.activeChain),a?(h.replace("ProfileWallets"),k.showSuccess("New Wallet Added")):h.replace("Account")}}catch(s){const n=y.parseError(s);n!=null&&n.includes("Invalid email")?this.error="Invalid email. Try again.":k.showError(s)}finally{this.loading=!1}}onFocusEvent(){C.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};pe.styles=Dn;Be([c()],pe.prototype,"tabIdx",void 0);Be([d()],pe.prototype,"email",void 0);Be([d()],pe.prototype,"loading",void 0);Be([d()],pe.prototype,"error",void 0);Be([d()],pe.prototype,"remoteFeatures",void 0);Be([d()],pe.prototype,"hasExceededUsageLimit",void 0);pe=Be([p("w3m-email-login-widget")],pe);const Ln=v`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background: ${({tokens:t})=>t.theme.foregroundSecondary};
    }
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;var Nt=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let He=class extends m{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return l`
      <button ?disabled=${this.disabled} tabindex=${w(this.tabIdx)}>
        <wui-icon size="xxl" name=${this.logo}></wui-icon>
      </button>
    `}};He.styles=[I,W,Ln];Nt([c()],He.prototype,"logo",void 0);Nt([c({type:Boolean})],He.prototype,"disabled",void 0);Nt([c()],He.prototype,"tabIdx",void 0);He=Nt([p("wui-logo-select")],He);const jn=v`
  wui-separator {
    margin: ${({spacing:t})=>t[3]} calc(${({spacing:t})=>t[3]} * -1)
      ${({spacing:t})=>t[3]} calc(${({spacing:t})=>t[3]} * -1);
    width: calc(100% + ${({spacing:t})=>t[3]} * 2);
  }
`;var Ce=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};const gi=2,yi=6;let ce=class extends m{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=b.state.connectors,this.remoteFeatures=f.state.remoteFeatures,this.authConnector=this.connectors.find(e=>e.type==="AUTH"),this.isPwaLoading=!1,this.hasExceededUsageLimit=A.state.plan.hasExceededUsageLimit,this.unsubscribe.push(b.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(i=>i.type==="AUTH")}),f.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e),A.subscribeKey("plan",e=>this.hasExceededUsageLimit=e.hasExceededUsageLimit))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="2"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){var o;const e=this.walletGuide==="explore";let i=(o=this.remoteFeatures)==null?void 0:o.socials;return!i&&e?(i=D.DEFAULT_SOCIALS,this.renderTopViewContent(i)):i?this.renderTopViewContent(i):null}renderTopViewContent(e){return e.length===2?l` <wui-flex gap="2">
        ${e.slice(0,gi).map(i=>l`<wui-logo-select
              data-testid=${`social-selector-${i}`}
              @click=${()=>{this.onSocialClick(i)}}
              logo=${i}
              tabIdx=${w(this.tabIdx)}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
      </wui-flex>`:l` <wui-list-button
      data-testid=${`social-selector-${e[0]}`}
      @click=${()=>{this.onSocialClick(e[0])}}
      size="lg"
      icon=${w(e[0])}
      text=${`Continue with ${F.capitalize(e[0])}`}
      tabIdx=${w(this.tabIdx)}
      ?disabled=${this.isPwaLoading||this.hasConnection()}
    ></wui-list-button>`}bottomViewTemplate(){var s;let e=(s=this.remoteFeatures)==null?void 0:s.socials;const i=this.walletGuide==="explore";return(!this.authConnector||!e||e.length===0)&&i&&(e=D.DEFAULT_SOCIALS),!e||e.length<=gi?null:e&&e.length>yi?l`<wui-flex gap="2">
        ${e.slice(1,yi-1).map(n=>l`<wui-logo-select
              data-testid=${`social-selector-${n}`}
              @click=${()=>{this.onSocialClick(n)}}
              logo=${n}
              tabIdx=${w(this.tabIdx)}
              ?focusable=${this.tabIdx!==void 0&&this.tabIdx>=0}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${w(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading||this.hasConnection()}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`:e?l`<wui-flex gap="2">
      ${e.slice(1,e.length).map(n=>l`<wui-logo-select
            data-testid=${`social-selector-${n}`}
            @click=${()=>{this.onSocialClick(n)}}
            logo=${n}
            tabIdx=${w(this.tabIdx)}
            ?focusable=${this.tabIdx!==void 0&&this.tabIdx>=0}
            ?disabled=${this.isPwaLoading||this.hasConnection()}
          ></wui-logo-select>`)}
    </wui-flex>`:null}onMoreSocialsClick(){h.push("ConnectSocials")}async onSocialClick(e){if(this.hasExceededUsageLimit){h.push("UsageExceeded");return}if(!S.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(o=>o===u.state.activeChain)){const o=u.getFirstCaipNetworkSupportsAuthConnector();if(o){h.push("SwitchNetwork",{network:o});return}}e&&await en(e)}async handlePwaFrameLoad(){var e;if(y.isPWA()){this.isPwaLoading=!0;try{((e=this.authConnector)==null?void 0:e.provider)instanceof Ji&&await this.authConnector.provider.init()}catch(i){Ii.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:i.message},"error")}finally{this.isPwaLoading=!1}}}hasConnection(){return x.hasAnyConnection(S.CONNECTOR_ID.AUTH)}};ce.styles=jn;Ce([c()],ce.prototype,"walletGuide",void 0);Ce([c()],ce.prototype,"tabIdx",void 0);Ce([d()],ce.prototype,"connectors",void 0);Ce([d()],ce.prototype,"remoteFeatures",void 0);Ce([d()],ce.prototype,"authConnector",void 0);Ce([d()],ce.prototype,"isPwaLoading",void 0);Ce([d()],ce.prototype,"hasExceededUsageLimit",void 0);ce=Ce([p("w3m-social-login-widget")],ce);var Je=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Oe=class extends m{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.count=A.state.count,this.filteredCount=A.state.filteredWallets.length,this.isFetchingRecommendedWallets=A.state.isFetchingRecommendedWallets,this.unsubscribe.push(b.subscribeKey("connectors",e=>this.connectors=e),A.subscribeKey("count",e=>this.count=e),A.subscribeKey("filteredWallets",e=>this.filteredCount=e.length),A.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.find($=>$.id==="walletConnect"),{allWallets:i}=f.state;if(!e||i==="HIDE"||i==="ONLY_MOBILE"&&!y.isMobile())return null;const o=A.state.featured.length,s=this.count+o,n=s<10?s:Math.floor(s/10)*10,a=this.filteredCount>0?this.filteredCount:n;let r=`${a}`;this.filteredCount>0?r=`${this.filteredCount}`:a<s&&(r=`${a}+`);const g=x.hasAnyConnection(S.CONNECTOR_ID.WALLET_CONNECT);return l`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${r}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${w(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${g}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){var e;C.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),h.push("AllWallets",{redirectView:(e=h.state.data)==null?void 0:e.redirectView})}};Je([c()],Oe.prototype,"tabIdx",void 0);Je([d()],Oe.prototype,"connectors",void 0);Je([d()],Oe.prototype,"count",void 0);Je([d()],Oe.prototype,"filteredCount",void 0);Je([d()],Oe.prototype,"isFetchingRecommendedWallets",void 0);Oe=Je([p("w3m-all-wallets-widget")],Oe);const Bn=v`
  :host {
    margin-top: ${({spacing:t})=>t[1]};
  }
  wui-separator {
    margin: ${({spacing:t})=>t[3]} calc(${({spacing:t})=>t[3]} * -1)
      ${({spacing:t})=>t[2]} calc(${({spacing:t})=>t[3]} * -1);
    width: calc(100% + ${({spacing:t})=>t[3]} * 2);
  }
`;var Ze=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let xe=class extends m{constructor(){super(),this.unsubscribe=[],this.explorerWallets=A.state.explorerWallets,this.connections=x.state.connections,this.connectorImages=Se.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(x.subscribeKey("connections",e=>this.connections=e),Se.subscribeKey("connectorImages",e=>this.connectorImages=e),A.subscribeKey("explorerFilteredWallets",e=>{this.explorerWallets=e!=null&&e.length?e:A.state.explorerWallets}),A.subscribeKey("explorerWallets",e=>{var i;(i=this.explorerWallets)!=null&&i.length||(this.explorerWallets=e)})),y.isTelegram()&&y.isIos()&&(this.loadingTelegram=!x.state.wcUri,this.unsubscribe.push(x.subscribeKey("wcUri",e=>this.loadingTelegram=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){return Xt.connectorList().map((e,i)=>e.kind==="connector"?this.renderConnector(e,i):this.renderWallet(e,i))}getConnectorNamespaces(e){var i;return e.subtype==="walletConnect"?[]:e.subtype==="multiChain"?((i=e.connector.connectors)==null?void 0:i.map(o=>o.chain))||[]:[e.connector.chain]}renderConnector(e,i){var _,O;const o=e.connector,s=T.getConnectorImage(o)||this.connectorImages[(o==null?void 0:o.imageId)??""],a=(this.connections.get(o.chain)??[]).some(Lt=>J.isLowerCaseMatch(Lt.connectorId,o.id));let r,g;e.subtype==="walletConnect"?(r="qr code",g="accent"):e.subtype==="injected"||e.subtype==="announced"?(r=a?"connected":"installed",g=a?"info":"success"):(r=void 0,g=void 0);const $=x.hasAnyConnection(S.CONNECTOR_ID.WALLET_CONNECT),E=e.subtype==="walletConnect"||e.subtype==="external"?$:!1;return l`
      <w3m-list-wallet
        displayIndex=${i}
        imageSrc=${w(s)}
        .installed=${!0}
        name=${o.name??"Unknown"}
        .tagVariant=${g}
        tagLabel=${w(r)}
        data-testid=${`wallet-selector-${o.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(e)}
        tabIdx=${w(this.tabIdx)}
        ?disabled=${E}
        rdnsId=${w(((_=o.explorerWallet)==null?void 0:_.rdns)||void 0)}
        walletRank=${w((O=o.explorerWallet)==null?void 0:O.order)}
        .namespaces=${this.getConnectorNamespaces(e)}
      >
      </w3m-list-wallet>
    `}onClickConnector(e){var o;const i=(o=h.state.data)==null?void 0:o.redirectView;if(e.subtype==="walletConnect"){b.setActiveConnector(e.connector),y.isMobile()?h.push("AllWallets"):h.push("ConnectingWalletConnect",{redirectView:i});return}if(e.subtype==="multiChain"){b.setActiveConnector(e.connector),h.push("ConnectingMultiChain",{redirectView:i});return}if(e.subtype==="injected"){b.setActiveConnector(e.connector),h.push("ConnectingExternal",{connector:e.connector,redirectView:i,wallet:e.connector.explorerWallet});return}if(e.subtype==="announced"){if(e.connector.id==="walletConnect"){y.isMobile()?h.push("AllWallets"):h.push("ConnectingWalletConnect",{redirectView:i});return}h.push("ConnectingExternal",{connector:e.connector,redirectView:i,wallet:e.connector.explorerWallet});return}h.push("ConnectingExternal",{connector:e.connector,redirectView:i})}renderWallet(e,i){const o=e.wallet,s=T.getWalletImage(o),a=x.hasAnyConnection(S.CONNECTOR_ID.WALLET_CONNECT),r=this.loadingTelegram,g=e.subtype==="recent"?"recent":void 0,$=e.subtype==="recent"?"info":void 0;return l`
      <w3m-list-wallet
        displayIndex=${i}
        imageSrc=${w(s)}
        name=${o.name??"Unknown"}
        @click=${()=>this.onClickWallet(e)}
        size="sm"
        data-testid=${`wallet-selector-${o.id}`}
        tabIdx=${w(this.tabIdx)}
        ?loading=${r}
        ?disabled=${a}
        rdnsId=${w(o.rdns||void 0)}
        walletRank=${w(o.order)}
        tagLabel=${w(g)}
        .tagVariant=${$}
      >
      </w3m-list-wallet>
    `}onClickWallet(e){var n;const i=(n=h.state.data)==null?void 0:n.redirectView,o=u.state.activeChain;if(e.subtype==="featured"){b.selectWalletConnector(e.wallet);return}if(e.subtype==="recent"){if(this.loadingTelegram)return;b.selectWalletConnector(e.wallet);return}if(e.subtype==="custom"){if(this.loadingTelegram)return;h.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:i});return}if(this.loadingTelegram)return;const s=o?b.getConnector({id:e.wallet.id,namespace:o}):void 0;s?h.push("ConnectingExternal",{connector:s,redirectView:i}):h.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:i})}};xe.styles=Bn;Ze([c({type:Number})],xe.prototype,"tabIdx",void 0);Ze([d()],xe.prototype,"explorerWallets",void 0);Ze([d()],xe.prototype,"connections",void 0);Ze([d()],xe.prototype,"connectorImages",void 0);Ze([d()],xe.prototype,"loadingTelegram",void 0);xe=Ze([p("w3m-connector-list")],xe);var Pi=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Mt=class extends m{constructor(){super(...arguments),this.tabIdx=void 0}render(){return l`
      <wui-flex flexDirection="column" gap="2">
        <w3m-connector-list tabIdx=${w(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${w(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};Pi([c()],Mt.prototype,"tabIdx",void 0);Mt=Pi([p("w3m-wallet-login-list")],Mt);const Un=v`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: ${({spacing:t})=>t[3]} calc(${({spacing:t})=>t[3]} * -1);
    width: calc(100% + ${({spacing:t})=>t[3]} * 2);
  }
`;var oe=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};const zn=470;let H=class extends m{constructor(){var e,i;super(),this.unsubscribe=[],this.connectors=b.state.connectors,this.authConnector=this.connectors.find(o=>o.type==="AUTH"),this.features=f.state.features,this.remoteFeatures=f.state.remoteFeatures,this.enableWallets=f.state.enableWallets,this.noAdapters=u.state.noAdapters,this.walletGuide="get-started",this.checked=bt.state.isLegalCheckboxChecked,this.isEmailEnabled=((e=this.remoteFeatures)==null?void 0:e.email)&&!u.state.noAdapters,this.isSocialEnabled=((i=this.remoteFeatures)==null?void 0:i.socials)&&this.remoteFeatures.socials.length>0&&!u.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(b.subscribeKey("connectors",o=>{this.connectors=o,this.authConnector=this.connectors.find(s=>s.type==="AUTH"),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)}),f.subscribeKey("features",o=>{this.features=o}),f.subscribeKey("remoteFeatures",o=>{this.remoteFeatures=o,this.setEmailAndSocialEnableCheck(this.noAdapters,this.remoteFeatures)}),f.subscribeKey("enableWallets",o=>this.enableWallets=o),u.subscribeKey("noAdapters",o=>this.setEmailAndSocialEnableCheck(o,this.remoteFeatures)),bt.subscribeKey("isLegalCheckboxChecked",o=>this.checked=o))}disconnectedCallback(){var i,o;this.unsubscribe.forEach(s=>s()),(i=this.resizeObserver)==null||i.disconnect();const e=(o=this.shadowRoot)==null?void 0:o.querySelector(".connect");e==null||e.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){var i,o;const e=(i=this.shadowRoot)==null?void 0:i.querySelector(".connect");e&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),e==null||e.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleConnectListScroll()}),(o=this.resizeObserver)==null||o.observe(e),this.handleConnectListScroll())}render(){var O;const{termsConditionsUrl:e,privacyPolicyUrl:i}=f.state,o=(O=f.state.features)==null?void 0:O.legalCheckbox,a=!!(e||i)&&!!o&&this.walletGuide==="get-started"&&!this.checked,r={connect:!0,disabled:a},g=f.state.enableWalletGuide,$=this.enableWallets,E=this.isSocialEnabled||this.authConnector,_=a?-1:void 0;return l`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          .padding=${["0","0","4","0"]}
          class=${Ai(r)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="2"
            .padding=${E&&$&&g&&this.walletGuide==="get-started"?["0","3","0","3"]:["0","3","3","3"]}
          >
            ${this.renderConnectMethod(_)}
          </wui-flex>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}reownBrandingTemplate(){var e;return Jt.hasFooter()||!((e=this.remoteFeatures)!=null&&e.reownBranding)?null:l`<wui-ux-by-reown></wui-ux-by-reown>`}setEmailAndSocialEnableCheck(e,i){this.isEmailEnabled=(i==null?void 0:i.email)&&!e,this.isSocialEnabled=(i==null?void 0:i.socials)&&i.socials.length>0&&!e,this.remoteFeatures=i,this.noAdapters=e}checkIfAuthEnabled(e){const i=e.filter(s=>s.type===qi.CONNECTOR_TYPE_AUTH).map(s=>s.chain);return S.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(s=>i.includes(s))}renderConnectMethod(e){const i=tt.getConnectOrderMethod(this.features,this.connectors);return l`${i.map((o,s)=>{switch(o){case"email":return l`${this.emailTemplate(e)} ${this.separatorTemplate(s,"email")}`;case"social":return l`${this.socialListTemplate(e)}
          ${this.separatorTemplate(s,"social")}`;case"wallet":return l`${this.walletListTemplate(e)}
          ${this.separatorTemplate(s,"wallet")}`;default:return null}})}`}checkMethodEnabled(e){switch(e){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(e){const o=tt.getConnectOrderMethod(this.features,this.connectors)[e+1];return o?this.checkMethodEnabled(o)?o:this.checkIsThereNextMethod(e+1):void 0}separatorTemplate(e,i){const o=this.checkIsThereNextMethod(e),s=this.walletGuide==="explore";switch(i){case"wallet":return this.enableWallets&&o&&!s?l`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case"email":{const n=o==="social";return this.isAuthEnabled&&this.isEmailEnabled&&!n&&o?l`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null}case"social":{const n=o==="email";return this.isAuthEnabled&&this.isSocialEnabled&&!n&&o?l`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}default:return null}}emailTemplate(e){return!this.isEmailEnabled||!this.isAuthEnabled?null:l`<w3m-email-login-widget tabIdx=${w(e)}></w3m-email-login-widget>`}socialListTemplate(e){return!this.isSocialEnabled||!this.isAuthEnabled?null:l`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${w(e)}
    ></w3m-social-login-widget>`}walletListTemplate(e){var r,g;const i=this.enableWallets,o=((r=this.features)==null?void 0:r.emailShowWallets)===!1,s=(g=this.features)==null?void 0:g.collapseWallets,n=o||s;return!i||(y.isTelegram()&&(y.isSafari()||y.isIos())&&x.connectWalletConnect().catch($=>({})),this.walletGuide==="explore")?null:this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&n?l`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${w(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
        icon="wallet"
      ></wui-list-button>`:l`<w3m-wallet-login-list tabIdx=${w(e)}></w3m-wallet-login-list>`}legalCheckboxTemplate(){return this.walletGuide==="explore"?null:l`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){var o;const e=(o=this.shadowRoot)==null?void 0:o.querySelector(".connect");if(!e)return;e.scrollHeight>zn?(e.style.setProperty("--connect-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 100px,
          black calc(100% - 100px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`),e.style.setProperty("--connect-scroll--top-opacity",ft.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",ft.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--connect-mask-image","none"),e.style.setProperty("--connect-scroll--top-opacity","0"),e.style.setProperty("--connect-scroll--bottom-opacity","0"))}onContinueWalletClick(){h.push("ConnectWallets")}};H.styles=Un;oe([d()],H.prototype,"connectors",void 0);oe([d()],H.prototype,"authConnector",void 0);oe([d()],H.prototype,"features",void 0);oe([d()],H.prototype,"remoteFeatures",void 0);oe([d()],H.prototype,"enableWallets",void 0);oe([d()],H.prototype,"noAdapters",void 0);oe([c()],H.prototype,"walletGuide",void 0);oe([d()],H.prototype,"checked",void 0);oe([d()],H.prototype,"isEmailEnabled",void 0);oe([d()],H.prototype,"isSocialEnabled",void 0);oe([d()],H.prototype,"isAuthEnabled",void 0);H=oe([p("w3m-connect-view")],H);const Fn=v`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[5]};
    padding-left: ${({spacing:t})=>t[3]};
    padding-right: ${({spacing:t})=>t[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:t})=>t[6]};
  }

  wui-text {
    color: ${({tokens:t})=>t.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var Ot=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Ke=class extends m{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return l`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Ke.styles=[I,W,Fn];Ot([c({type:Boolean})],Ke.prototype,"disabled",void 0);Ot([c()],Ke.prototype,"label",void 0);Ot([c()],Ke.prototype,"buttonLabel",void 0);Ke=Ot([p("wui-cta-button")],Ke);const Mn=v`
  :host {
    display: block;
    padding: 0 ${({spacing:t})=>t[5]} ${({spacing:t})=>t[5]};
  }
`;var Di=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let $t=class extends m{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:i,play_store:o,chrome_store:s,homepage:n}=this.wallet,a=y.isMobile(),r=y.isIos(),g=y.isAndroid(),$=[i,o,n,s].filter(Boolean).length>1,E=F.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return $&&!a?l`
        <wui-cta-button
          label=${`Don't have ${E}?`}
          buttonLabel="Get"
          @click=${()=>h.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!$&&n?l`
        <wui-cta-button
          label=${`Don't have ${E}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:i&&r?l`
        <wui-cta-button
          label=${`Don't have ${E}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:o&&g?l`
        <wui-cta-button
          label=${`Don't have ${E}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&y.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&y.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&y.openHref(this.wallet.homepage,"_blank")}};$t.styles=[Mn];Di([c({type:Object})],$t.prototype,"wallet",void 0);$t=Di([p("w3m-mobile-download-links")],$t);const Vn=v`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:t})=>t[1]} * -1);
    bottom: calc(${({spacing:t})=>t[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:t})=>t.lg};
    transition-timing-function: ${({easings:t})=>t["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:t})=>t[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:t})=>t["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var le=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};class N extends m{constructor(){var e,i,o,s,n;super(),this.wallet=(e=h.state.data)==null?void 0:e.wallet,this.connector=(i=h.state.data)==null?void 0:i.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=T.getConnectorImage(this.connector)??T.getWalletImage(this.wallet),this.name=((o=this.wallet)==null?void 0:o.name)??((s=this.connector)==null?void 0:s.name)??"Wallet",this.isRetrying=!1,this.uri=x.state.wcUri,this.error=x.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(x.subscribeKey("wcUri",a=>{var r;this.uri=a,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(r=this.onConnect)==null||r.call(this))}),x.subscribeKey("wcError",a=>this.error=a)),(y.isTelegram()||y.isSafari())&&y.isIos()&&x.state.wcUri&&((n=this.onConnect)==null||n.call(this))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),x.setWcError(!1),clearTimeout(this.timeout)}render(){var o;(o=this.onRender)==null||o.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let i="";return this.label?i=this.label:(i=`Continue in ${this.name}`,this.error&&(i="Connection declined")),l`
      <wui-flex
        data-error=${w(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${w(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${i}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?l`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?l`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const i=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");i==null||i.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,i;x.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(i=this.onConnect)==null||i.call(this)}loaderTemplate(){const e=mt.state.themeVariables["--w3m-border-radius-master"],i=e?parseInt(e.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(y.copyToClopboard(this.uri),k.showSuccess("Link copied"))}catch{k.showError("Failed to copy")}}}N.styles=Vn;le([d()],N.prototype,"isRetrying",void 0);le([d()],N.prototype,"uri",void 0);le([d()],N.prototype,"error",void 0);le([d()],N.prototype,"ready",void 0);le([d()],N.prototype,"showRetry",void 0);le([d()],N.prototype,"label",void 0);le([d()],N.prototype,"secondaryBtnLabel",void 0);le([d()],N.prototype,"secondaryLabel",void 0);le([d()],N.prototype,"isLoading",void 0);le([c({type:Boolean})],N.prototype,"isMobile",void 0);le([c()],N.prototype,"onRetry",void 0);var Hn=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let xi=class extends N{constructor(){var i,o,s,n,a;if(super(),this.externalViewUnsubscribe=[],this.connectionsByNamespace=x.getConnections((i=this.connector)==null?void 0:i.chain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.remoteFeatures=f.state.remoteFeatures,this.currentActiveConnectorId=b.state.activeConnectorIds[(o=this.connector)==null?void 0:o.chain],!this.connector)throw new Error("w3m-connecting-view: No connector provided");const e=(s=this.connector)==null?void 0:s.chain;this.isAlreadyConnected(this.connector)&&(this.secondaryBtnLabel=void 0,this.label=`This account is already linked, change your account in ${this.connector.name}`,this.secondaryLabel=`To link a new account, open ${this.connector.name} and switch to the account you want to link`),C.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser",displayIndex:(n=this.wallet)==null?void 0:n.display_index,walletRank:(a=this.wallet)==null?void 0:a.order,view:h.state.view}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(b.subscribeKey("activeConnectorIds",r=>{var _;const g=r[e],$=(_=this.remoteFeatures)==null?void 0:_.multiWallet,{redirectView:E}=h.state.data??{};g!==this.currentActiveConnectorId&&(this.hasMultipleConnections&&$?(h.replace("ProfileWallets"),k.showSuccess("New Wallet Added")):E?h.replace(E):P.close())}),x.subscribeKey("connections",this.onConnectionsChange.bind(this)))}disconnectedCallback(){this.externalViewUnsubscribe.forEach(e=>e())}async onConnectProxy(){try{if(this.error=!1,this.connector){if(this.isAlreadyConnected(this.connector))return;(this.connector.id!==S.CONNECTOR_ID.COINBASE_SDK||!this.error)&&await x.connectExternal(this.connector,this.connector.chain)}}catch(e){e instanceof Yt&&e.originalName===Qt.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?C.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:e.message}}):C.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}onConnectionsChange(e){var i,o;if((i=this.connector)!=null&&i.chain&&e.get(this.connector.chain)&&this.isAlreadyConnected(this.connector)){const s=e.get(this.connector.chain)??[],n=(o=this.remoteFeatures)==null?void 0:o.multiWallet;if(s.length===0)h.replace("Connect");else{const a=he.getConnectionsByConnectorId(this.connectionsByNamespace,this.connector.id).flatMap(g=>g.accounts),r=he.getConnectionsByConnectorId(s,this.connector.id).flatMap(g=>g.accounts);r.length===0?this.hasMultipleConnections&&n?(h.replace("ProfileWallets"),k.showSuccess("Wallet deleted")):P.close():!a.every($=>r.some(E=>J.isLowerCaseMatch($.address,E.address)))&&n&&h.replace("ProfileWallets")}}}isAlreadyConnected(e){return!!e&&this.connectionsByNamespace.some(i=>J.isLowerCaseMatch(i.connectorId,e.id))}};xi=Hn([p("w3m-connecting-external-view")],xi);const Kn=ee`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var Li=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Ct=class extends m{constructor(){super(),this.unsubscribe=[],this.activeConnector=b.state.activeConnector,this.unsubscribe.push(b.subscribeKey("activeConnector",e=>this.activeConnector=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${w(T.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["0","3","0","3"]}
        >
          <wui-text variant="lg-medium" color="primary">
            Select Chain for ${(e=this.activeConnector)==null?void 0:e.name}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","2","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){var e,i;return(i=(e=this.activeConnector)==null?void 0:e.connectors)==null?void 0:i.map((o,s)=>{var n;return o.name?l`
            <w3m-list-wallet
              displayIndex=${s}
              imageSrc=${w(T.getChainImage(o.chain))}
              name=${S.CHAIN_NAME_MAP[o.chain]}
              @click=${()=>this.onConnector(o)}
              size="sm"
              data-testid="wui-list-chain-${o.chain}"
              rdnsId=${(n=o.explorerWallet)==null?void 0:n.rdns}
            ></w3m-list-wallet>
          `:null})}onConnector(e){var s,n,a,r;const i=(n=(s=this.activeConnector)==null?void 0:s.connectors)==null?void 0:n.find(g=>g.chain===e.chain),o=(a=h.state.data)==null?void 0:a.redirectView;if(!i){k.showError("Failed to find connector");return}i.id==="walletConnect"?y.isMobile()?h.push("AllWallets"):h.push("ConnectingWalletConnect",{redirectView:o}):h.push("ConnectingExternal",{connector:i,redirectView:o,wallet:(r=this.activeConnector)==null?void 0:r.explorerWallet})}};Ct.styles=Kn;Li([d()],Ct.prototype,"activeConnector",void 0);Ct=Li([p("w3m-connecting-multi-chain-view")],Ct);var oi=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Tt=class extends m{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return l`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(i=>i==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:i==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:i==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:i==="web"?{label:"Webapp",icon:"browser",platform:"web"}:i==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:i})=>i),e}onTabChange(e){var o;const i=this.platformTabs[e];i&&((o=this.onSelectPlatfrom)==null||o.call(this,i))}};oi([c({type:Array})],Tt.prototype,"platforms",void 0);oi([c()],Tt.prototype,"onSelectPlatfrom",void 0);Tt=oi([p("w3m-connecting-header")],Tt);var qn=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let vi=class extends N{constructor(){var e;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),C.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:(e=this.wallet)==null?void 0:e.display_index,walletRank:this.wallet.order,view:h.state.view}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=b.state,i=e.find(o=>{var s,n,a;return o.type==="ANNOUNCED"&&((s=o.info)==null?void 0:s.rdns)===((n=this.wallet)==null?void 0:n.rdns)||o.type==="INJECTED"||o.name===((a=this.wallet)==null?void 0:a.name)});if(i)await x.connectExternal(i,i.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");P.close()}catch(e){e instanceof Yt&&e.originalName===Qt.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?C.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:e.message}}):C.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};vi=qn([p("w3m-connecting-wc-browser")],vi);var Gn=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let $i=class extends N{constructor(){var e;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),C.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:(e=this.wallet)==null?void 0:e.display_index,walletRank:this.wallet.order,view:h.state.view}})}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:i,name:o}=this.wallet,{redirect:s,href:n}=y.formatNativeUrl(i,this.uri);x.setWcLinking({name:o,href:n}),x.setRecentWallet(this.wallet),y.openHref(s,"_blank")}catch{this.error=!0}}};$i=Gn([p("w3m-connecting-wc-desktop")],$i);var et=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Pe=class extends N{constructor(){var e;if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=f.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{he.onConnectMobile(this.wallet)},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=D.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(x.subscribeKey("wcUri",()=>{this.onHandleURI()})),C.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:(e=this.wallet)==null?void 0:e.display_index,walletRank:this.wallet.order,view:h.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){var e;this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onTryAgain(){var e;x.setWcError(!1),(e=this.onConnect)==null||e.call(this)}};et([d()],Pe.prototype,"redirectDeeplink",void 0);et([d()],Pe.prototype,"redirectUniversalLink",void 0);et([d()],Pe.prototype,"target",void 0);et([d()],Pe.prototype,"preferUniversalLinks",void 0);et([d()],Pe.prototype,"isLoading",void 0);Pe=et([p("w3m-connecting-wc-mobile")],Pe);const Xn=v`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:t})=>t.xl};
    animation-timing-function: ${({easings:t})=>t["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var ji=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let St=class extends N{constructor(){super(),this.basic=!1}firstUpdated(){var e,i,o;this.basic||C.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((e=this.wallet)==null?void 0:e.name)??"WalletConnect",platform:"qrcode",displayIndex:(i=this.wallet)==null?void 0:i.display_index,walletRank:(o=this.wallet)==null?void 0:o.order,view:h.state.view}})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.forEach(i=>i())}render(){return this.onRenderProxy(),l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0)}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.wallet?this.wallet.name:void 0;x.setWcLinking(void 0),x.setRecentWallet(this.wallet);const i=mt.state.themeVariables["--apkt-qr-color"]??mt.state.themeVariables["--w3m-qr-color"];return l` <wui-qr-code
      theme=${mt.state.themeMode}
      uri=${this.uri}
      imageSrc=${w(T.getWalletImage(this.wallet))}
      color=${w(i)}
      alt=${w(e)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return l`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};St.styles=Xn;ji([c({type:Boolean})],St.prototype,"basic",void 0);St=ji([p("w3m-connecting-wc-qrcode")],St);var Yn=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Ci=class extends m{constructor(){var e,i,o;if(super(),this.wallet=(e=h.state.data)==null?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");C.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:(i=this.wallet)==null?void 0:i.display_index,walletRank:(o=this.wallet)==null?void 0:o.order,view:h.state.view}})}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${w(T.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Ci=Yn([p("w3m-connecting-wc-unsupported")],Ci);var Bi=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Vt=class extends N{constructor(){var e,i;if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=D.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(x.subscribeKey("wcUri",()=>{this.updateLoadingState()})),C.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:(e=this.wallet)==null?void 0:e.display_index,walletRank:(i=this.wallet)==null?void 0:i.order,view:h.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:i,name:o}=this.wallet,{redirect:s,href:n}=y.formatUniversalUrl(i,this.uri);x.setWcLinking({name:o,href:n}),x.setRecentWallet(this.wallet),y.openHref(s,"_blank")}catch{this.error=!0}}};Bi([d()],Vt.prototype,"isLoading",void 0);Vt=Bi([p("w3m-connecting-wc-web")],Vt);const Qn=v`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;var Ue=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let we=class extends m{constructor(){var e;super(),this.wallet=(e=h.state.data)==null?void 0:e.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!f.state.siwx,this.remoteFeatures=f.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(f.subscribeKey("remoteFeatures",i=>this.remoteFeatures=i))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return f.state.enableMobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),l`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){var e;return!((e=this.remoteFeatures)!=null&&e.reownBranding)||!this.displayBranding?null:l`<wui-ux-by-reown></wui-ux-by-reown>`}async initializeConnection(e=!1){var i,o;if(!(this.platform==="browser"||f.state.manualWCControl&&!e))try{const{wcPairingExpiry:s,status:n}=x.state,{redirectView:a}=h.state.data??{};if(e||f.state.enableEmbedded||y.isPairingExpired(s)||n==="connecting"){const r=x.getConnections(u.state.activeChain),g=(i=this.remoteFeatures)==null?void 0:i.multiWallet,$=r.length>0;await x.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||($&&g?(h.replace("ProfileWallets"),k.showSuccess("New Wallet Added")):a?h.replace(a):P.close())}}catch(s){if(s instanceof Error&&s.message.includes("An error occurred when attempting to switch chain")&&!f.state.enableNetworkSwitch&&u.state.activeChain){u.setActiveCaipNetwork(Zi.getUnsupportedNetwork(`${u.state.activeChain}:${(o=u.state.activeCaipNetwork)==null?void 0:o.id}`)),u.showUnsupportedChainUI();return}s instanceof Yt&&s.originalName===Qt.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?C.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:s.message}}):C.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(s==null?void 0:s.message)??"Unknown"}}),x.setWcError(!0),k.showError(s.message??"Connection error"),x.resetWcConnection(),h.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:e,desktop_link:i,webapp_link:o,injected:s,rdns:n}=this.wallet,a=s==null?void 0:s.map(({injected_id:Hi})=>Hi).filter(Boolean),r=[...n?[n]:a??[]],g=f.state.isUniversalProvider?!1:r.length,$=e,E=o,_=x.checkInstalled(r),O=g&&_,Lt=i&&!y.isMobile();O&&!u.state.noAdapters&&this.platforms.push("browser"),$&&this.platforms.push(y.isMobile()?"mobile":"qrcode"),E&&this.platforms.push("web"),Lt&&this.platforms.push("desktop");const Vi=Gi.isCustomDeeplinkWallet(this.wallet.id,u.state.activeChain);!O&&g&&!u.state.noAdapters&&!Vi&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return l`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return l`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return l`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return l`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return l`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return l`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?l`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var o;const i=(o=this.shadowRoot)==null?void 0:o.querySelector("div");i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};we.styles=Qn;Ue([d()],we.prototype,"platform",void 0);Ue([d()],we.prototype,"platforms",void 0);Ue([d()],we.prototype,"isSiwxEnabled",void 0);Ue([d()],we.prototype,"remoteFeatures",void 0);Ue([c({type:Boolean})],we.prototype,"displayBranding",void 0);Ue([c({type:Boolean})],we.prototype,"basic",void 0);we=Ue([p("w3m-connecting-wc-view")],we);var si=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Et=class extends m{constructor(){super(),this.unsubscribe=[],this.isMobile=y.isMobile(),this.remoteFeatures=f.state.remoteFeatures,this.unsubscribe.push(f.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(this.isMobile){const{featured:e,recommended:i}=A.state,{customWallets:o}=f.state,s=fe.getRecentWallets(),n=e.length||i.length||(o==null?void 0:o.length)||s.length;return l`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${n?l`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return l`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){var e;return(e=this.remoteFeatures)!=null&&e.reownBranding?l` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};si([d()],Et.prototype,"isMobile",void 0);si([d()],Et.prototype,"remoteFeatures",void 0);Et=si([p("w3m-connecting-wc-basic-view")],Et);const Jn=ee`
  .continue-button-container {
    width: 100%;
  }
`;var Ui=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let kt=class extends m{constructor(){super(...arguments),this.loading=!1}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${["0","0","4","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{y.openHref(tn.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return l` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${["0","6","0","6"]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box icon="id" size="xl" iconSize="xxl" color="default"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="lg-medium" color="primary">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return l`<wui-flex
      .padding=${["0","8","0","8"]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){h.push("RegisterAccountName"),C.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:ze(u.state.activeChain)===Fe.ACCOUNT_TYPES.SMART_ACCOUNT}})}};kt.styles=Jn;Ui([d()],kt.prototype,"loading",void 0);kt=Ui([p("w3m-choose-account-name-view")],kt);var Zn=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Ti=class extends m{constructor(){var e;super(...arguments),this.wallet=(e=h.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return l`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?l`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?l`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?l`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?l`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(e){e.href&&this.wallet&&(C.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:e.type}}),y.openHref(e.href,"_blank"))}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};Ti=Zn([p("w3m-downloads-view")],Ti);var eo=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};const to="https://walletconnect.com/explorer";let Si=class extends m{render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="2">
        ${this.recommendedWalletsTemplate()}
        <w3m-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          size="sm"
          @click=${()=>{y.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></w3m-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:i}=A.state,{customWallets:o}=f.state;return[...i,...o??[],...e].slice(0,4).map((n,a)=>l`
        <w3m-list-wallet
          displayIndex=${a}
          name=${n.name??"Unknown"}
          tagVariant="accent"
          size="sm"
          imageSrc=${w(T.getWalletImage(n))}
          @click=${()=>{this.onWalletClick(n)}}
        ></w3m-list-wallet>
      `)}onWalletClick(e){C.sendEvent({type:"track",event:"GET_WALLET",properties:{name:e.name,walletRank:void 0,explorerId:e.id,type:"homepage"}}),y.openHref(e.homepage??to,"_blank")}};Si=eo([p("w3m-get-wallet-view")],Si);var zi=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Ht=class extends m{constructor(){super(...arguments),this.data=[]}render(){return l`
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        ${this.data.map(e=>l`
            <wui-flex flexDirection="column" alignItems="center" gap="5">
              <wui-flex flexDirection="row" justifyContent="center" gap="1">
                ${e.images.map(i=>l`<wui-visual size="sm" name=${i}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="1">
              <wui-text variant="md-regular" color="primary" align="center">${e.title}</wui-text>
              <wui-text variant="sm-regular" color="secondary" align="center"
                >${e.text}</wui-text
              >
            </wui-flex>
          `)}
      </wui-flex>
    `}};zi([c({type:Array})],Ht.prototype,"data",void 0);Ht=zi([p("w3m-help-widget")],Ht);var io=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};const no=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let Ei=class extends m{render(){return l`
      <wui-flex
        flexDirection="column"
        .padding=${["6","5","5","5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${no}></w3m-help-widget>
        <wui-button variant="accent-primary" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){C.sendEvent({type:"track",event:"CLICK_GET_WALLET_HELP"}),h.push("GetWallet")}};Ei=io([p("w3m-what-is-a-wallet-view")],Ei);const oo=v`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var Fi=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let At=class extends m{constructor(){super(),this.unsubscribe=[],this.checked=bt.state.isLegalCheckboxChecked,this.unsubscribe.push(bt.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var g;const{termsConditionsUrl:e,privacyPolicyUrl:i}=f.state,o=(g=f.state.features)==null?void 0:g.legalCheckbox,n=!!(e||i)&&!!o,a=n&&!this.checked,r=a?-1:void 0;return l`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${n?["0","3","3","3"]:"3"}
        gap="2"
        class=${w(a?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${w(r)}></w3m-wallet-login-list>
      </wui-flex>
    `}};At.styles=oo;Fi([d()],At.prototype,"checked",void 0);At=Fi([p("w3m-connect-wallets-view")],At);const so=v`
  :host {
    display: block;
    width: 120px;
    height: 120px;
  }

  svg {
    width: 120px;
    height: 120px;
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: ${t=>t.colors.accent100};
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var ao=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Kt=class extends m{render(){return l`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Kt.styles=[I,so];Kt=ao([p("wui-loading-hexagon")],Kt);const ro=ee`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var ai=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let ot=class extends m{constructor(){var e;super(),this.network=(e=h.state.data)==null?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.getLabel(),i=this.getSubLabel();return l`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","10","5"]}
        gap="7"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${w(T.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:l`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="h6-regular" color="primary">${e}</wui-text>
          <wui-text align="center" variant="md-regular" color="secondary">${i}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent-primary"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const e=b.getConnectorId(u.state.activeChain);return b.getAuthConnector()&&e===S.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){var o;const e=b.getConnectorId(u.state.activeChain);return b.getAuthConnector()&&e===S.CONNECTOR_ID.AUTH?`Switching to ${((o=this.network)==null?void 0:o.name)??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const i=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");i==null||i.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){var e;try{this.error=!1,u.state.activeChain!==((e=this.network)==null?void 0:e.chainNamespace)&&u.setIsSwitchingNamespace(!0),this.network&&(await u.switchActiveNetwork(this.network),await Bt.isAuthenticated()&&h.goBack())}catch{this.error=!0}}};ot.styles=ro;ai([d()],ot.prototype,"showRetry",void 0);ai([d()],ot.prototype,"error",void 0);ot=ai([p("w3m-network-switch-view")],ot);const lo=v`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:t})=>t[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var pt=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let De=class extends m{constructor(){super(...arguments),this.imageSrc=void 0,this.name="Ethereum",this.disabled=!1}render(){return l`
      <button ?disabled=${this.disabled} tabindex=${w(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          ${this.imageTemplate()}
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}imageTemplate(){return this.imageSrc?l`<wui-image ?boxed=${!0} src=${this.imageSrc}></wui-image>`:l`<wui-image
      ?boxed=${!0}
      icon="networkPlaceholder"
      size="lg"
      iconColor="default"
    ></wui-image>`}};De.styles=[I,W,lo];pt([c()],De.prototype,"imageSrc",void 0);pt([c()],De.prototype,"name",void 0);pt([c()],De.prototype,"tabIdx",void 0);pt([c({type:Boolean})],De.prototype,"disabled",void 0);De=pt([p("wui-list-network")],De);const co=ee`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var wt=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Le=class extends m{constructor(){super(),this.unsubscribe=[],this.network=u.state.activeCaipNetwork,this.requestedCaipNetworks=u.getCaipNetworks(),this.search="",this.onDebouncedSearch=y.debounce(e=>{this.search=e},100),this.unsubscribe.push(Se.subscribeNetworkImages(()=>this.requestUpdate()),u.subscribeKey("activeCaipNetwork",e=>this.network=e),u.subscribe(()=>{this.requestedCaipNetworks=u.getAllRequestedCaipNetworks()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","3","3","3"]}
        flexDirection="column"
        gap="2"
      >
        ${this.networksTemplate()}
      </wui-flex>
    `}templateSearchInput(){return l`
      <wui-flex gap="2" .padding=${["0","3","3","3"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}networksTemplate(){var o;const e=u.getAllApprovedCaipNetworkIds(),i=y.sortRequestedNetworks(e,this.requestedCaipNetworks);return this.search?this.filteredNetworks=i==null?void 0:i.filter(s=>{var n;return(n=s==null?void 0:s.name)==null?void 0:n.toLowerCase().includes(this.search.toLowerCase())}):this.filteredNetworks=i,(o=this.filteredNetworks)==null?void 0:o.map(s=>{var n;return l`
        <wui-list-network
          .selected=${((n=this.network)==null?void 0:n.id)===s.id}
          imageSrc=${w(T.getNetworkImage(s))}
          type="network"
          name=${s.name??s.id}
          @click=${()=>this.onSwitchNetwork(s)}
          .disabled=${u.isCaipNetworkDisabled(s)}
          data-testid=${`w3m-network-switch-${s.name??s.id}`}
        ></wui-list-network>
      `})}onSwitchNetwork(e){Xi.onSwitchNetwork({network:e})}};Le.styles=co;wt([d()],Le.prototype,"network",void 0);wt([d()],Le.prototype,"requestedCaipNetworks",void 0);wt([d()],Le.prototype,"filteredNetworks",void 0);wt([d()],Le.prototype,"search",void 0);Le=wt([p("w3m-networks-view")],Le);const uo=v`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    border-radius: calc(
      ${({borderRadius:t})=>t[1]} * 9 - ${({borderRadius:t})=>t[3]}
    );
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(
      ${({borderRadius:t})=>t[1]} * 9 - ${({borderRadius:t})=>t[3]}
    );
    box-shadow: inset 0 0 0 1px ${({tokens:t})=>t.core.glass010};
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:t})=>t[1]} * -1);
    bottom: calc(${({spacing:t})=>t[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      transform ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:t})=>t[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:t})=>t["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: ${({spacing:t})=>t["01"]} ${({spacing:t})=>t[2]};
  }

  .capitalize {
    text-transform: capitalize;
  }
`;var Mi=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};const ho={eip155:"eth",solana:"solana",bip122:"bitcoin",polkadot:void 0};let It=class extends m{constructor(){var e,i;super(...arguments),this.unsubscribe=[],this.switchToChain=(e=h.state.data)==null?void 0:e.switchToChain,this.caipNetwork=(i=h.state.data)==null?void 0:i.network,this.activeChain=u.state.activeChain}firstUpdated(){this.unsubscribe.push(u.subscribeKey("activeChain",e=>this.activeChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.switchToChain?S.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;const i=S.CHAIN_NAME_MAP[this.switchToChain];return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["4","2","2","2"]}
        gap="4"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="2">
          <wui-visual
            size="md"
            name=${w(ho[this.switchToChain])}
          ></wui-visual>
          <wui-flex gap="2" flexDirection="column" alignItems="center">
            <wui-text
              data-testid=${`w3m-switch-active-chain-to-${i}`}
              variant="lg-regular"
              color="primary"
              align="center"
              >Switch to <span class="capitalize">${i}</span></wui-text
            >
            <wui-text variant="md-regular" color="secondary" align="center">
              Connected wallet doesn't support connecting to ${e} chain. You
              need to connect with a different wallet.
            </wui-text>
          </wui-flex>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(u.setIsSwitchingNamespace(!0),b.setFilterByNamespace(this.switchToChain),this.caipNetwork?await u.switchActiveNetwork(this.caipNetwork):u.setActiveNamespace(this.switchToChain),h.reset("Connect"))}};It.styles=uo;Mi([c()],It.prototype,"activeChain",void 0);It=Mi([p("w3m-switch-active-chain-view")],It);var po=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};const wo=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let ki=class extends m{render(){return l`
      <wui-flex
        flexDirection="column"
        .padding=${["6","5","5","5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${wo}></w3m-help-widget>
        <wui-button
          variant="accent-primary"
          size="md"
          @click=${()=>{y.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};ki=po([p("w3m-what-is-a-network-view")],ki);const mo=ee`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var ri=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let st=class extends m{constructor(){var e;super(),this.swapUnsupportedChain=(e=h.state.data)==null?void 0:e.swapUnsupportedChain,this.unsubscribe=[],this.disconnecting=!1,this.remoteFeatures=f.state.remoteFeatures,this.unsubscribe.push(Se.subscribeNetworkImages(()=>this.requestUpdate()),f.subscribeKey("remoteFeatures",i=>{this.remoteFeatures=i}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["3","5","2","5"]}
          alignItems="center"
          gap="5"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="3" gap="2"> ${this.networksTemplate()} </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="3" gap="2">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="signOut"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="md-medium" color="secondary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?l`
        <wui-text variant="sm-regular" color="secondary" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:l`
      <wui-text variant="sm-regular" color="secondary" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const e=u.getAllRequestedCaipNetworks(),i=u.getAllApprovedCaipNetworkIds(),o=y.sortRequestedNetworks(i,e);return(this.swapUnsupportedChain?o.filter(n=>D.SWAP_SUPPORTED_NETWORKS.includes(n.caipNetworkId)):o).map(n=>l`
        <wui-list-network
          imageSrc=${w(T.getNetworkImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(n)}
        >
        </wui-list-network>
      `)}async onDisconnect(){var e;try{this.disconnecting=!0;const i=u.state.activeChain,s=x.getConnections(i).length>0,n=i&&b.state.activeConnectorIds[i],a=(e=this.remoteFeatures)==null?void 0:e.multiWallet;await x.disconnect(a?{id:n,namespace:i}:{}),s&&a&&(h.push("ProfileWallets"),k.showSuccess("Wallet deleted"))}catch{C.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),k.showError("Failed to disconnect")}finally{this.disconnecting=!1}}async onSwitchNetwork(e){const i=u.getActiveCaipAddress(),o=u.getAllApprovedCaipNetworkIds(),s=u.getNetworkProp("supportsAllNetworks",e.chainNamespace),n=h.state.data;i?o!=null&&o.includes(e.caipNetworkId)?await u.switchActiveNetwork(e):s?h.push("SwitchNetwork",{...n,network:e}):h.push("SwitchNetwork",{...n,network:e}):i||(u.setActiveCaipNetwork(e),h.push("Connect"))}};st.styles=mo;ri([d()],st.prototype,"disconnecting",void 0);ri([d()],st.prototype,"remoteFeatures",void 0);st=ri([p("w3m-unsupported-chain-view")],st);const fo=v`
  wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:t})=>t[2]};
    border-radius: ${({borderRadius:t})=>t[4]};
    padding: ${({spacing:t})=>t[3]};
  }

  /* -- Types --------------------------------------------------------- */
  wui-flex[data-type='info'] {
    color: ${({tokens:t})=>t.theme.textSecondary};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  wui-flex[data-type='success'] {
    color: ${({tokens:t})=>t.core.textSuccess};
    background-color: ${({tokens:t})=>t.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] {
    color: ${({tokens:t})=>t.core.textError};
    background-color: ${({tokens:t})=>t.core.backgroundError};
  }

  wui-flex[data-type='warning'] {
    color: ${({tokens:t})=>t.core.textWarning};
    background-color: ${({tokens:t})=>t.core.backgroundWarning};
  }

  wui-flex[data-type='info'] wui-icon-box {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  wui-flex[data-type='success'] wui-icon-box {
    background-color: ${({tokens:t})=>t.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] wui-icon-box {
    background-color: ${({tokens:t})=>t.core.backgroundError};
  }

  wui-flex[data-type='warning'] wui-icon-box {
    background-color: ${({tokens:t})=>t.core.backgroundWarning};
  }

  wui-text {
    flex: 1;
  }
`;var Pt=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let qe=class extends m{constructor(){super(...arguments),this.icon="externalLink",this.text="",this.type="info"}render(){return l`
      <wui-flex alignItems="center" data-type=${this.type}>
        <wui-icon-box size="sm" color="inherit" icon=${this.icon}></wui-icon-box>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
      </wui-flex>
    `}};qe.styles=[I,W,fo];Pt([c()],qe.prototype,"icon",void 0);Pt([c()],qe.prototype,"text",void 0);Pt([c()],qe.prototype,"type",void 0);qe=Pt([p("wui-banner")],qe);const bo=ee`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var go=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let qt=class extends m{constructor(){super(),this.unsubscribe=[]}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l` <wui-flex flexDirection="column" .padding=${["2","3","3","3"]} gap="2">
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=u.getAllRequestedCaipNetworks(),i=u.getAllApprovedCaipNetworkIds(),o=u.state.activeCaipNetwork,s=u.checkIfSmartAccountEnabled();let n=y.sortRequestedNetworks(i,e);if(s&&ze(o==null?void 0:o.chainNamespace)===Fe.ACCOUNT_TYPES.SMART_ACCOUNT){if(!o)return null;n=[o]}return n.filter(r=>r.chainNamespace===(o==null?void 0:o.chainNamespace)).map(r=>l`
        <wui-list-network
          imageSrc=${w(T.getNetworkImage(r))}
          name=${r.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};qt.styles=bo;qt=go([p("w3m-wallet-compatible-networks-view")],qt);const yo=v`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    box-shadow: 0 0 0 8px ${({tokens:t})=>t.theme.borderPrimary};
    border-radius: ${({borderRadius:t})=>t[4]};
    overflow: hidden;
  }

  :host([data-border-radius-full='true']) {
    border-radius: 50px;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Dt=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Ge=class extends m{render(){return this.dataset.borderRadiusFull=this.borderRadiusFull?"true":"false",l`${this.templateVisual()}`}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:l`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};Ge.styles=[I,yo];Dt([c()],Ge.prototype,"imageSrc",void 0);Dt([c()],Ge.prototype,"alt",void 0);Dt([c({type:Boolean})],Ge.prototype,"borderRadiusFull",void 0);Ge=Dt([p("wui-visual-thumbnail")],Ge);const xo=v`
  :host {
    display: flex;
    justify-content: center;
    gap: ${({spacing:t})=>t[4]};
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var vo=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Gt=class extends m{constructor(){var e,i,o;super(...arguments),this.dappImageUrl=(e=f.state.metadata)==null?void 0:e.icons,this.walletImageUrl=(o=(i=u.getAccountData())==null?void 0:i.connectedWalletInfo)==null?void 0:o.icon}firstUpdated(){var i;const e=(i=this.shadowRoot)==null?void 0:i.querySelectorAll("wui-visual-thumbnail");e!=null&&e[0]&&this.createAnimation(e[0],"translate(18px)"),e!=null&&e[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){var e;return l`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e=this.dappImageUrl)==null?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,i){e.animate([{transform:"translateX(0px)"},{transform:i}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};Gt.styles=xo;Gt=vo([p("w3m-siwx-sign-message-thumbnails")],Gt);var li=globalThis&&globalThis.__decorate||function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let _t=class extends m{constructor(){var e;super(...arguments),this.dappName=(e=f.state.metadata)==null?void 0:e.name,this.isCancelling=!1,this.isSigning=!1}render(){return l`
      <wui-flex justifyContent="center" .padding=${["8","0","6","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex .padding=${["0","20","5","20"]} gap="3" justifyContent="space-between">
        <wui-text variant="lg-medium" align="center" color="primary"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["0","10","4","10"]} gap="3" justifyContent="space-between">
        <wui-text variant="md-regular" align="center" color="secondary"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["4","5","5","5"]} gap="3" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-secondary"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-primary"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0;try{await Bt.requestSignMessage()}catch(e){if(e instanceof Error&&e.message.includes("OTP is required")){k.showError({message:"Something went wrong. We need to verify your account again."}),h.replace("DataCapture");return}throw e}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,await Bt.cancelSignMessage().finally(()=>this.isCancelling=!1)}};li([d()],_t.prototype,"isCancelling",void 0);li([d()],_t.prototype,"isSigning",void 0);_t=li([p("w3m-siwx-sign-message-view")],_t);export{ui as AppKitAccountButton,hi as AppKitButton,wi as AppKitConnectButton,fi as AppKitNetworkButton,ci as W3mAccountButton,be as W3mAccountSettingsView,Ft as W3mAccountView,vt as W3mAllWalletsView,di as W3mButton,kt as W3mChooseAccountNameView,pi as W3mConnectButton,H as W3mConnectView,At as W3mConnectWalletsView,xi as W3mConnectingExternalView,Ct as W3mConnectingMultiChainView,Et as W3mConnectingWcBasicView,we as W3mConnectingWcView,Ti as W3mDownloadsView,Ea as W3mFooter,Re as W3mFundWalletView,Si as W3mGetWalletView,mi as W3mNetworkButton,ot as W3mNetworkSwitchView,Le as W3mNetworksView,B as W3mProfileWalletsView,ka as W3mRouter,_t as W3mSIWXSignMessageView,It as W3mSwitchActiveChainView,st as W3mUnsupportedChainView,qt as W3mWalletCompatibleNetworksView,ki as W3mWhatIsANetworkView,Ei as W3mWhatIsAWalletView};
