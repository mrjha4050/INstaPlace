"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[4947],{73725:(h,s,o)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const n=o(63891),i=o(21412),l=o(76445),r=(e=>e&&e.__esModule?e:{default:e})(n),c={color:!0,cursor:!0,height:!0,width:!0},u=r.default.div.withConfig({shouldForwardProp:(e,t)=>!c[e]&&t(e)})`
  // Font
  font-size: ${({fontSize:e,theme:t})=>l.extractStyleFromTheme(t.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:t})=>l.extractStyleFromTheme(e.colors,t,t)};
  color: ${({theme:e,color:t})=>l.extractStyleFromTheme(e.colors,t,void 0)};

  // Spaces
  ${({theme:e,padding:t})=>i("padding",t,e)}
  ${({theme:e,paddingTop:t})=>i("padding-top",t,e)}
  ${({theme:e,paddingRight:t})=>i("padding-right",t,e)}
  ${({theme:e,paddingBottom:t})=>i("padding-bottom",t,e)}
  ${({theme:e,paddingLeft:t})=>i("padding-left",t,e)}
  ${({theme:e,marginLeft:t})=>i("margin-left",t,e)}
  ${({theme:e,marginRight:t})=>i("margin-right",t,e)}
  ${({theme:e,marginTop:t})=>i("margin-top",t,e)}
  ${({theme:e,marginBottom:t})=>i("margin-bottom",t,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:t})=>t?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:t})=>t?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:t,borderRadius:p})=>t?e.borderRadius:p};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:t})=>l.extractStyleFromTheme(t.colors,e,void 0)};
  border: ${({theme:e,borderColor:t,borderStyle:p,borderWidth:m})=>{if(t&&!p&&typeof m>"u")return`1px solid ${e.colors[t]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:t})=>l.extractStyleFromTheme(e.shadows,t,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:t})=>e?e(t):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:t})=>l.extractStyleFromTheme(t.spaces,e,e)};
  right: ${({right:e,theme:t})=>l.extractStyleFromTheme(t.spaces,e,e)};
  top: ${({top:e,theme:t})=>l.extractStyleFromTheme(t.spaces,e,e)};
  bottom: ${({bottom:e,theme:t})=>l.extractStyleFromTheme(t.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:t})=>l.extractStyleFromTheme(t.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:t})=>l.extractStyleFromTheme(t.spaces,e,e)};
  min-width: ${({minWidth:e,theme:t})=>l.extractStyleFromTheme(t.spaces,e,e)};
  height: ${({height:e,theme:t})=>l.extractStyleFromTheme(t.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:t})=>l.extractStyleFromTheme(t.spaces,e,e)};
  min-height: ${({minHeight:e,theme:t})=>l.extractStyleFromTheme(t.spaces,e,e)};

  // Animation
  transition: ${({transition:e})=>e};
  transform: ${({transform:e})=>e};
  animation: ${({animation:e})=>e};

  //Flexbox children props
  flex-shrink: ${({shrink:e})=>e};
  flex-grow: ${({grow:e})=>e};
  flex-basis: ${({basis:e})=>e};
  flex: ${({flex:e})=>e};

  // Text
  text-align: ${({textAlign:e})=>e};
  text-transform: ${({textTransform:e})=>e};
  line-height: ${({theme:e,lineHeight:t})=>l.extractStyleFromTheme(e.lineHeights,t,t)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`;s.Box=u},91753:(h,s,o)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const n=o(92132),i=o(21272),l=o(69106),d=o(41999),r=o(73725),c=i.forwardRef(({children:u,name:e,error:t,hint:p,id:m,required:$=!1,...x},a)=>{const f=d.useId(m),g=i.useMemo(()=>({name:e,id:f,error:t,hint:p,required:$}),[t,f,p,e,$]);return n.jsx(r.Box,{ref:a,...x,children:n.jsx(l.FieldContext.Provider,{value:g,children:u})})});s.Field=c},69106:(h,s,o)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const n=o(21272),i=n.createContext({id:"",required:!1}),l=()=>n.useContext(i);s.FieldContext=i,s.useField=l},83215:(h,s,o)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const n=o(92132),i=o(69106),l=o(48941),d=()=>{const{id:r,error:c}=i.useField();return!c||typeof c!="string"?null:n.jsx(l.Typography,{variant:"pi",as:"p",id:`${r}-error`,textColor:"danger600","data-strapi-field-error":!0,children:c})};s.FieldError=d},67296:(h,s,o)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const n=o(92132),i=o(69106),l=o(48941),d=()=>{const{id:r,hint:c,error:u}=i.useField();return!c||u?null:n.jsx(l.Typography,{variant:"pi",as:"p",id:`${r}-hint`,textColor:"neutral600",children:c})};s.FieldHint=d},80421:(h,s,o)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const n=o(92132),i=o(21272),l=o(63891),d=o(69106),r=o(93788),c=o(73725),u=o(69909),t=(a=>a&&a.__esModule?a:{default:a})(l),p={S:6.5,M:10.5},m=i.forwardRef(({endAction:a,startAction:f,disabled:g=!1,onChange:y,size:b="M",...v},F)=>{const{id:S,error:T,hint:E,name:M,required:A}=d.useField();let j;T?j=`${S}-error`:E&&(j=`${S}-hint`);const O=Boolean(T),I=R=>{!g&&y&&y(R)};return n.jsxs(x,{justifyContent:"space-between",hasError:O,disabled:g,children:[f?n.jsx(c.Box,{paddingLeft:3,paddingRight:2,children:f}):null,n.jsx($,{id:S,name:M,ref:F,"aria-describedby":j,"aria-invalid":O,"aria-disabled":g,disabled:g,"data-disabled":g?"":void 0,hasLeftAction:Boolean(f),hasRightAction:Boolean(a),onChange:I,"aria-required":A,$size:b,...v}),a?n.jsx(c.Box,{paddingLeft:2,paddingRight:3,children:a}):null]})}),$=t.default.input`
  border: none;
  border-radius: ${({theme:a})=>a.borderRadius};
  padding-bottom: ${({$size:a})=>`${p[a]/16}rem`};
  padding-left: ${({theme:a,hasLeftAction:f})=>f?0:a.spaces[4]};
  padding-right: ${({theme:a,hasRightAction:f})=>f?0:a.spaces[4]};
  padding-top: ${({$size:a})=>`${p[a]/16}rem`};
  cursor: ${a=>a["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:a})=>a.colors.neutral800};
  font-weight: 400;
  font-size: ${a=>a.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:a})=>a.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`,x=t.default(u.Flex)`
  border: 1px solid ${({theme:a,hasError:f})=>f?a.colors.danger600:a.colors.neutral200};
  border-radius: ${({theme:a})=>a.borderRadius};
  background: ${({theme:a})=>a.colors.neutral0};
  ${r.inputFocusStyle()}

  ${({theme:a,disabled:f})=>f?l.css`
          color: ${a.colors.neutral600};
          background: ${a.colors.neutral150};
        `:void 0}
`;s.FieldInput=m,s.InputWrapper=x},76987:(h,s,o)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const n=o(92132),i=o(21272),l=o(63891),d=o(69106),r=o(14053),c=o(48941),u=o(69909),t=(f=>f&&f.__esModule?f:{default:f})(l),p=r.once(console.warn),m=i.forwardRef(({children:f,action:g,required:y,...b},v)=>{const{id:F,required:S}=d.useField(),T=S||y;return y!==void 0&&p('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),n.jsxs($,{ref:v,variant:"pi",textColor:"neutral800",htmlFor:F,fontWeight:"bold",as:"label",...b,children:[f,T&&n.jsx(x,{textColor:"danger600",children:"*"}),g&&n.jsx(a,{marginLeft:1,children:g})]})}),$=t.default(c.Typography)`
  display: flex;
  align-items: center;
`,x=t.default(c.Typography)`
  line-height: 0;
`,a=t.default(u.Flex)`
  line-height: 0;

  svg path {
    fill: ${({theme:f})=>f.colors.neutral500};
  }
`;s.FieldLabel=m},69909:(h,s,o)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const n=o(63891),i=o(21412),l=o(73725),r=(e=>e&&e.__esModule?e:{default:e})(n),c={direction:!0},u=r.default(l.Box).withConfig({shouldForwardProp:(e,t)=>!c[e]&&t(e)})`
  align-items: ${({alignItems:e="center"})=>e};
  display: ${({display:e="flex",inline:t})=>t?"inline-flex":e};
  flex-direction: ${({direction:e="row"})=>e};
  flex-shrink: ${({shrink:e})=>e};
  flex-wrap: ${({wrap:e})=>e};
  ${({gap:e,theme:t})=>i("gap",e,t)};
  justify-content: ${({justifyContent:e})=>e};
`;s.Flex=u},75065:(h,s,o)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const n=o(92132),i=o(21272),l=o(41999),d=o(91753),r=o(69909),c=o(76987),u=o(80421),e=o(67296),t=o(83215),p=i.forwardRef(({name:m,hint:$,error:x,label:a,labelAction:f,id:g,required:y,...b},v)=>{const F=l.useId(g),S=i.useRef(null),T=i.useRef(null);if(!a&&!b["aria-label"])throw new Error('The TextInput component needs a "label" or an "aria-label" props');return i.useImperativeHandle(v,()=>({input:T,inputWrapperRef:S}),[]),n.jsx("div",{ref:S,children:n.jsx(d.Field,{name:m,hint:$,error:x,id:F,required:y,children:n.jsxs(r.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[a&&n.jsx(c.FieldLabel,{action:f,children:a}),n.jsx(u.FieldInput,{ref:T,...b}),n.jsx(e.FieldHint,{}),n.jsx(t.FieldError,{})]})})})});p.displayName="TextInput",s.TextInput=p},20628:(h,s,o)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const n=o(75065);s.TextInput=n.TextInput},48941:(h,s,o)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const n=o(63891),i=o(18415),l=o(76445),r=(e=>e&&e.__esModule?e:{default:e})(n),c={fontSize:!0,fontWeight:!0},u=r.default.span.withConfig({shouldForwardProp:(e,t)=>!c[e]&&t(e)})`
  ${i.variantStyle}
  ${i.ellipsisStyle}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:e,fontWeight:t})=>l.extractStyleFromTheme(e.fontWeights,t,void 0)};
  font-size: ${({theme:e,fontSize:t})=>l.extractStyleFromTheme(e.fontSizes,t,void 0)};
  line-height: ${({theme:e,lineHeight:t})=>l.extractStyleFromTheme(e.lineHeights,t,t)};
  color: ${({theme:e,textColor:t})=>e.colors[t||"neutral800"]};
  text-align: ${({textAlign:e})=>e};
  text-decoration: ${({textDecoration:e})=>e};
  text-transform: ${({textTransform:e})=>e};
`;s.Typography=u},78639:(h,s)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const o="alpha",n="beta",i="delta",l="epsilon",d="omega",r="pi",c="sigma",u=[o,n,i,l,d,r,c];s.ALPHA=o,s.BETA=n,s.DELTA=i,s.EPSILON=l,s.OMEGA=d,s.PI=r,s.SIGMA=c,s.TEXT_VARIANTS=u},18415:(h,s,o)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const n=o(78639),i=({ellipsis:d=!1})=>d&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,l=({variant:d=n.OMEGA,theme:r})=>{switch(d){case n.ALPHA:return`
        font-weight: ${r.fontWeights.bold};
        font-size: ${r.fontSizes[5]};
        line-height: ${r.lineHeights[2]};
      `;case n.BETA:return`
        font-weight: ${r.fontWeights.bold};
        font-size: ${r.fontSizes[4]};
        line-height: ${r.lineHeights[1]};
      `;case n.DELTA:return`
        font-weight: ${r.fontWeights.semiBold};
        font-size: ${r.fontSizes[3]};
        line-height: ${r.lineHeights[2]};
      `;case n.EPSILON:return`
        font-size: ${r.fontSizes[3]};
        line-height: ${r.lineHeights[6]};
      `;case n.OMEGA:return`
        font-size: ${r.fontSizes[2]};
        line-height: ${r.lineHeights[4]};
      `;case n.PI:return`
        font-size: ${r.fontSizes[1]};
        line-height: ${r.lineHeights[3]};
      `;case n.SIGMA:return`
        font-weight: ${r.fontWeights.bold};
        font-size: ${r.fontSizes[0]};
        line-height: ${r.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${r.fontSizes[2]};
      `}};s.ellipsisStyle=i,s.variantStyle=l},14053:(h,s)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const o="[@strapi/design-system]:",n=i=>{const l=i;let d=!1;if(typeof l!="function")throw new TypeError(`${o} once requires a function parameter`);return(...r)=>{d||(l(...r),d=!0)}};s.PREFIX=o,s.once=n},21412:h=>{const s=(o,n,i)=>{if(!n)return;if(typeof n=="object")return(Array.isArray(n)?n:[n?.desktop,n?.tablet,n?.mobile]).reduce((c,u,e)=>{if(u)switch(e){case 0:return`${c}${o}: ${i.spaces[u]};`;case 1:return`${c}${i.mediaQueries.tablet}{${o}: ${i.spaces[u]};}`;case 2:return`${c}${i.mediaQueries.mobile}{${o}: ${i.spaces[u]};}`;default:return c}return c},"");const l=i.spaces[n]??n;return`${o}: ${l};`};h.exports=s},60048:(h,s)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});function o(i,l){return typeof i=="string"?!1:l in i}function n(i){return i&&typeof i=="object"&&!Array.isArray(i)}s.isKeyOf=o,s.isObject=n},76445:(h,s,o)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const n=o(60048);function i(l,d,r){return d&&n.isKeyOf(l,d)?l[d]:r}s.extractStyleFromTheme=i},41999:(h,s,o)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const n=o(21272),d=(u=>u&&u.__esModule?u:{default:u})(n).default["useId".toString()]||(()=>{});let r=0;const c=u=>{const[e,t]=n.useState(d());return n.useLayoutEffect(()=>{u||t(p=>p??String(r++))},[u]),u?.toString()??(e||"")};s.useId=c},93788:(h,s,o)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const n=o(63891),i=r=>({theme:c,size:u})=>c.sizes[r][u],l=(r="&")=>({theme:c,hasError:u=!1})=>n.css`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${r}:focus-within {
      border: 1px solid ${u?c.colors.danger600:c.colors.primary600};
      box-shadow: ${u?c.colors.danger600:c.colors.primary600} 0px 0px 0px 2px;
    }
  `,d=({theme:r})=>n.css`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${r.colors.primary600};
    }
  }
`;s.buttonFocusStyle=d,s.getThemeSize=i,s.inputFocusStyle=l},24947:(h,s,o)=>{o.r(s),o.d(s,{default:()=>f});var n=o(92132),i=o(21272),l=o(33544),d=o.n(l),r=o(20628),c=o.n(r),u=o(94061),e=o(85963),t=o(61485),p=o(99248),m=o(30893),$=o(6239),x=o(54894);const a=({onChange:g,name:y,intlLabel:b,attribute:v,description:F,placeholder:S,error:T,value:E})=>{const{formatMessage:M}=(0,x.A)(),[A,j]=(0,i.useState)(""),[O,I]=(0,i.useState)(!1),R="http://localhost:1337";return(0,n.jsxs)(u.a,{children:[(0,n.jsx)(r.TextInput,{placeholder:S,label:M(b),name:y,id:y,hint:F&&M(F),error:T,onChange:P=>{j(P.target.value),g({target:{name:y,value:P.target.value,type:v.type}})},value:E,withTags:!0}),(0,n.jsx)(u.a,{paddingTop:2,children:(0,n.jsx)(e.$,{onClick:()=>I(P=>!P),children:"Preview"})}),O&&(0,n.jsxs)(t.k,{style:{width:"95vw",height:"95vh"},onClose:()=>I(P=>!P),labelledBy:"title",children:[(0,n.jsx)(p.r,{children:(0,n.jsx)(m.o,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title",children:"Page Preview"})}),(0,n.jsx)($.c,{style:{maxHeight:"none"},children:(0,n.jsx)("iframe",{src:R+E,style:{height:"83vh"},title:R+E,width:"100%",allowFullScreen:"true"})})]})]})};a.defaultProps={description:null,error:null,labelAction:null,required:!1,value:""},a.propTypes={intlLabel:d().object.isRequired,onChange:d().func.isRequired,attribute:d().object.isRequired,name:d().string.isRequired,description:d().object,error:d().string,labelAction:d().object,required:d().bool,value:d().string};const f=a}}]);
