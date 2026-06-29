import{d as l,i as m,f as c}from"./ThemeUtil-b7b0243c.js";import{n as h,c as f}from"./index-3399fbe6.js";const p=l`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundPrimary} 0%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 50%,
      ${({tokens:e})=>e.theme.foregroundPrimary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 2s linear infinite;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`;var s=globalThis&&globalThis.__decorate||function(e,o,i,n){var d=arguments.length,t=d<3?o:n===null?n=Object.getOwnPropertyDescriptor(o,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,o,i,n);else for(var u=e.length-1;u>=0;u--)(a=e[u])&&(t=(d<3?a(t):d>3?a(o,i,t):a(o,i))||t);return d>3&&t&&Object.defineProperty(o,i,t),t};let r=class extends m{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",c`<slot></slot>`}};r.styles=[p];s([h()],r.prototype,"width",void 0);s([h()],r.prototype,"height",void 0);s([h()],r.prototype,"variant",void 0);s([h({type:Boolean})],r.prototype,"rounded",void 0);r=s([f("wui-shimmer")],r);
