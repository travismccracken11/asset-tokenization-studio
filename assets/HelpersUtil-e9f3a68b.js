import{d as g,r as f,i as p,f as m,O as u,R as v,k as $}from"./ThemeUtil-b7b0243c.js";import{n as h,c as b}from"./index-3399fbe6.js";import{C as c}from"./ConstantsUtil-0834fb54.js";const y=g`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({spacing:t})=>t[1]};
    text-transform: uppercase;
    white-space: nowrap;
  }

  :host([data-variant='accent']) {
    background-color: ${({tokens:t})=>t.core.foregroundAccent010};
    color: ${({tokens:t})=>t.core.textAccentPrimary};
  }

  :host([data-variant='info']) {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    color: ${({tokens:t})=>t.theme.textSecondary};
  }

  :host([data-variant='success']) {
    background-color: ${({tokens:t})=>t.core.backgroundSuccess};
    color: ${({tokens:t})=>t.core.textSuccess};
  }

  :host([data-variant='warning']) {
    background-color: ${({tokens:t})=>t.core.backgroundWarning};
    color: ${({tokens:t})=>t.core.textWarning};
  }

  :host([data-variant='error']) {
    background-color: ${({tokens:t})=>t.core.backgroundError};
    color: ${({tokens:t})=>t.core.textError};
  }

  :host([data-variant='certified']) {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    color: ${({tokens:t})=>t.theme.textSecondary};
  }

  :host([data-size='md']) {
    height: 30px;
    padding: 0 ${({spacing:t})=>t[2]};
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  :host([data-size='sm']) {
    height: 20px;
    padding: 0 ${({spacing:t})=>t[1]};
    border-radius: ${({borderRadius:t})=>t[1]};
  }
`;var l=globalThis&&globalThis.__decorate||function(t,e,r,a){var i=arguments.length,o=i<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,r):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,a);else for(var d=t.length-1;d>=0;d--)(s=t[d])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let n=class extends p{constructor(){super(...arguments),this.variant="accent",this.size="md",this.icon=void 0}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const e=this.size==="md"?"md-medium":"sm-medium",r=this.size==="md"?"md":"sm";return m`
      ${this.icon?m`<wui-icon size=${r} name=${this.icon}></wui-icon>`:null}
      <wui-text
        display="inline"
        data-variant=${this.variant}
        variant=${e}
        color="inherit"
      >
        <slot></slot>
      </wui-text>
    `}};n.styles=[f,y];l([h()],n.prototype,"variant",void 0);l([h()],n.prototype,"size",void 0);l([h()],n.prototype,"icon",void 0);n=l([b("wui-tag")],n);const T={getTabsByNamespace(t){var r;return!!t&&t===$.CHAIN.EVM?((r=u.state.remoteFeatures)==null?void 0:r.activity)===!1?c.ACCOUNT_TABS.filter(a=>a.label!=="Activity"):c.ACCOUNT_TABS:[]},isValidReownName(t){return/^[a-zA-Z0-9]+$/gu.test(t)},isValidEmail(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(t)},validateReownName(t){return t.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,"")},hasFooter(){var e;const t=v.state.view;if(c.VIEWS_WITH_LEGAL_FOOTER.includes(t)){const{termsConditionsUrl:r,privacyPolicyUrl:a}=u.state,i=(e=u.state.features)==null?void 0:e.legalCheckbox;return!(!r&&!a||i)}return c.VIEWS_WITH_DEFAULT_FOOTER.includes(t)}};export{T as H};
