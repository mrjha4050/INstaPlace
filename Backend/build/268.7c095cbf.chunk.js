"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[268],{40268:(W,s,_)=>{_.r(s),_.d(s,{HomePageEE:()=>m});var a=_(92132),D=_(61624),n=_(40894),A=_(21272),C=_(55506),R=_(14718),l=_(86379),v=_(55151),U=_(79077),B=_(30504),t=_(15126),i=_(63299),I=_(67014),L=_(59080),d=_(79275),M=_(82437),T=_(61535),O=_(5790),E=_(12083),o=_(35223),K=_(5409),P=_(74930),h=_(2600),r=_(48940),f=_(41286),g=_(56336),S=_(13426),y=_(84624),j=_(77965),N=_(54257),H=_(71210),c=_(51187),F=_(39404),x=_(58692),G=_(501),V=_(57646),$=_(23120),e=_(44414),z=_(25962),X=_(14664),Y=_(42588),J=_(90325),Q=_(62785),Z=_(87443),u=_(41032),p=_(22957),k=_(93179),w=_(73055),b=_(15747),q=_(85306),__=_(26509),E_=_(32058),t_=_(81185),s_=_(82261),M_=_(34011),O_=_(67031);const m=()=>((0,n.u)(),(0,a.jsx)(D.HomePageCE,{}))},40894:(W,s,_)=>{_.d(s,{u:()=>B});var a=_(21272),D=_(55506),n=_(67031),A=_(54894),C=_(17703),R=_(30504);const l="strapi-notification-seat-limit",v="https://cloud.strapi.io/profile/billing",U="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:t}=(0,A.A)(),{license:i,isError:I,isLoading:L}=(0,R.m)(),d=(0,D.hN)(),{pathname:M}=(0,C.zy)(),{enforcementUserCount:T,permittedSeats:O,licenseLimitStatus:E,isHostedOnStrapiCloud:o}=i??{};a.useEffect(()=>{if(I||L)return;const K=!n(O)&&!window.sessionStorage.getItem(`${l}-${M}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let P;E==="OVER_LIMIT"?P="warning":E==="AT_LIMIT"&&(P="softWarning"),K&&d({type:P,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:T,permittedSeats:O}),link:{url:o?v:U,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:o})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${l}-${M}`,"true")}})},[d,i,M,t,L,O,E,T,o,I])}}}]);
