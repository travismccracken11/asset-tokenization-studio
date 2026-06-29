import{h as a,i as f,f as m}from"./ThemeUtil-b7b0243c.js";import{c as p}from"./index-3399fbe6.js";import"./index-ffc35190.js";import"./index-93b59386.js";import"./index-8173741e.js";import"./if-defined-3b6b684d.js";import"./index-923ff4ac.js";import"./index-0ca2aa8f.js";import"./index-eaae2ea5.js";const w=a`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var h=globalThis&&globalThis.__decorate||function(o,i,e,r){var l=arguments.length,t=l<3?i:r===null?r=Object.getOwnPropertyDescriptor(i,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,i,e,r);else for(var s=o.length-1;s>=0;s--)(n=o[s])&&(t=(l<3?n(t):l>3?n(i,e,t):n(i,e))||t);return l>3&&t&&Object.defineProperty(i,e,t),t};let c=class extends f{render(){return m`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};c.styles=w;c=h([p("w3m-transactions-view")],c);export{c as W3mTransactionsView};
