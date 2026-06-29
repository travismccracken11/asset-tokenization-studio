import{d,r as h,i as g,f as u}from"./ThemeUtil-b7b0243c.js";import{n as p,c as b}from"./index-3399fbe6.js";const m=d`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:t})=>t.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color;
  }

  :host([data-bg-color='primary']) > wui-text {
    background-color: ${({tokens:t})=>t.theme.backgroundPrimary};
  }

  :host([data-bg-color='secondary']) > wui-text {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }
`;var c=globalThis&&globalThis.__decorate||function(t,r,o,a){var l=arguments.length,e=l<3?r:a===null?a=Object.getOwnPropertyDescriptor(r,o):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(t,r,o,a);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(e=(l<3?n(e):l>3?n(r,o,e):n(r,o))||e);return l>3&&e&&Object.defineProperty(r,o,e),e};let i=class extends g{constructor(){super(...arguments),this.text="",this.bgColor="primary"}render(){return this.dataset.bgColor=this.bgColor,u`${this.template()}`}template(){return this.text?u`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};i.styles=[h,m];c([p()],i.prototype,"text",void 0);c([p()],i.prototype,"bgColor",void 0);i=c([b("wui-separator")],i);
