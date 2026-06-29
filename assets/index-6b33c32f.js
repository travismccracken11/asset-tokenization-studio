import{d as h,r as m,e as g,i as y,f as l}from"./ThemeUtil-b7b0243c.js";import{n as i,c as b}from"./index-3399fbe6.js";import{o as c}from"./if-defined-3b6b684d.js";import"./index-ac110db8.js";const f=h`
  :host {
    width: 100%;
  }

  :host([data-type='primary']) > button {
    background-color: ${({tokens:o})=>o.theme.backgroundPrimary};
  }

  :host([data-type='secondary']) > button {
    background-color: ${({tokens:o})=>o.theme.foregroundPrimary};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:o})=>o[3]};
    width: 100%;
    border-radius: ${({borderRadius:o})=>o[4]};
    transition:
      background-color ${({durations:o})=>o.lg}
        ${({easings:o})=>o["ease-out-power-2"]},
      scale ${({durations:o})=>o.lg} ${({easings:o})=>o["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:o})=>o.theme.textPrimary};
  }

  @media (hover: hover) {
    :host([data-type='primary']) > button:hover:enabled {
      background-color: ${({tokens:o})=>o.theme.foregroundPrimary};
    }

    :host([data-type='secondary']) > button:hover:enabled {
      background-color: ${({tokens:o})=>o.theme.foregroundSecondary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var t=globalThis&&globalThis.__decorate||function(o,n,a,s){var d=arguments.length,r=d<3?n:s===null?s=Object.getOwnPropertyDescriptor(n,a):s,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,n,a,s);else for(var p=o.length-1;p>=0;p--)(u=o[p])&&(r=(d<3?u(r):d>3?u(n,a,r):u(n,a))||r);return d>3&&r&&Object.defineProperty(n,a,r),r};let e=class extends y{constructor(){super(...arguments),this.type="primary",this.imageSrc="google",this.imageSize=void 0,this.loading=!1,this.boxColor="foregroundPrimary",this.disabled=!1,this.rightIcon=!0,this.boxed=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",this.dataset.type=this.type,l`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        tabindex=${c(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?l`<wui-image
        icon=${this.icon}
        iconColor=${c(this.iconColor)}
        ?boxed=${this.boxed}
        ?rounded=${this.rounded}
        boxColor=${this.boxColor}
      ></wui-image>`:l`<wui-image
      ?boxed=${this.boxed}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      size=${c(this.imageSize)}
      src=${this.imageSrc}
      boxColor=${this.boxColor}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?l`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:l`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};e.styles=[m,g,f];t([i()],e.prototype,"type",void 0);t([i()],e.prototype,"imageSrc",void 0);t([i()],e.prototype,"imageSize",void 0);t([i()],e.prototype,"icon",void 0);t([i()],e.prototype,"iconColor",void 0);t([i({type:Boolean})],e.prototype,"loading",void 0);t([i()],e.prototype,"tabIdx",void 0);t([i()],e.prototype,"boxColor",void 0);t([i({type:Boolean})],e.prototype,"disabled",void 0);t([i({type:Boolean})],e.prototype,"rightIcon",void 0);t([i({type:Boolean})],e.prototype,"boxed",void 0);t([i({type:Boolean})],e.prototype,"rounded",void 0);t([i({type:Boolean})],e.prototype,"fullSize",void 0);e=t([b("wui-list-item")],e);
