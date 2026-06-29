import{C as c,E as g,R as d,j as m,S as w,c as l,F as E,G as _,k as R,d as b,r as y,i as v,f as C,e as T}from"./ThemeUtil-b7b0243c.js";import{n as p,c as S}from"./index-3399fbe6.js";import{o as O}from"./if-defined-3b6b684d.js";function $(){try{return l.returnOpenHref(`${R.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes")}catch{throw new Error("Could not open social popup")}}async function I(){d.push("ConnectingFarcaster");const e=m.getAuthConnector();if(e){const o=c.getAccountData();if(!(o!=null&&o.farcasterUrl))try{const{url:t}=await e.provider.getFarcasterUri();c.setAccountProp("farcasterUrl",t,c.state.activeChain)}catch(t){d.goBack(),w.showError(t)}}}async function L(e){d.push("ConnectingSocial");const o=m.getAuthConnector();let t=null;try{const n=setTimeout(()=>{throw new Error("Social login timed out. Please try again.")},45e3);if(o&&e){if(l.isTelegram()||(t=$()),t)c.setAccountProp("socialWindow",E(t),c.state.activeChain);else if(!l.isTelegram())throw new Error("Could not create social popup");const{uri:i}=await o.provider.getSocialRedirectUri({provider:e});if(!i)throw t==null||t.close(),new Error("Could not fetch the social redirect uri");if(t&&(t.location.href=i),l.isTelegram()){_.setTelegramSocialProvider(e);const r=l.formatTelegramSocialLoginUrl(i);l.openHref(r,"_top")}clearTimeout(n)}}catch(n){t==null||t.close();const i=l.parseError(n);w.showError(i),g.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:e,message:i}})}}async function F(e){c.setAccountProp("socialProvider",e,c.state.activeChain),g.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}}),e==="farcaster"?await I():await L(e)}const U=b`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[20]};
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var x=globalThis&&globalThis.__decorate||function(e,o,t,n){var i=arguments.length,r=i<3?o:n===null?n=Object.getOwnPropertyDescriptor(o,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,o,t,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(i<3?a(r):i>3?a(o,t,r):a(o,t))||r);return i>3&&r&&Object.defineProperty(o,t,r),r};let f=class extends v{constructor(){super(...arguments),this.logo="google"}render(){return C`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};f.styles=[y,U];x([p()],f.prototype,"logo",void 0);f=x([S("wui-logo")],f);const j=b`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var h=globalThis&&globalThis.__decorate||function(e,o,t,n){var i=arguments.length,r=i<3?o:n===null?n=Object.getOwnPropertyDescriptor(o,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,o,t,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(i<3?a(r):i>3?a(o,t,r):a(o,t))||r);return i>3&&r&&Object.defineProperty(o,t,r),r};let u=class extends v{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.disabled=!1}render(){return C`
      <button ?disabled=${this.disabled} tabindex=${O(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          <wui-image ?boxed=${!0} logo=${this.logo}></wui-image>
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}};u.styles=[y,T,j];h([p()],u.prototype,"logo",void 0);h([p()],u.prototype,"name",void 0);h([p()],u.prototype,"tabIdx",void 0);h([p({type:Boolean})],u.prototype,"disabled",void 0);u=h([S("wui-list-social")],u);export{F as e};
