import b from"./TabsHeader.eac7e5a0.js";import g from"./ComponentPlaygroundProps.2ba702b5.js";import{_ as v}from"./ComponentPlaygroundSlots.vue.a7cf8e22.js";import{_ as x}from"./ComponentPlaygroundTokens.vue.c2e7ea1d.js";import{a as k}from"./index.443e0ff7.js";import{d as D,r as V,b as n,c as C,g as P,J as o,X as m,as as T,f as s,k as B}from"./entry.3907c13e.js";import"./ProseH4.c2e33326.js";import"./ProseCodeInline.6b3aac8f.js";import"./Badge.abeb274c.js";import"./slot.a6de2dfa.js";import"./node.676c5e99.js";import"./ProseP.ef5a6ada.js";const I={class:"component-playground-data"},j=D({__name:"ComponentPlaygroundData",props:{modelValue:{type:Object,required:!1,default:()=>({})},componentData:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:p}){const a=k(t,"modelValue",p),e=V(0),r=[{label:"Props"},{label:"Slots"},{label:"Design Tokens"}],d=c=>e.value=c;return(c,l)=>{const u=b,_=g,i=v,f=x;return n(),C("div",I,[P(u,{"active-tab-index":o(e),tabs:r,"onUpdate:activeTabIndex":d},null,8,["active-tab-index"]),o(e)===0?(n(),m(_,{key:0,modelValue:o(a),"onUpdate:modelValue":l[0]||(l[0]=y=>T(a)?a.value=y:null),"component-data":t.componentData},null,8,["modelValue","component-data"])):s("",!0),o(e)===1?(n(),m(i,{key:1,"component-data":t.componentData},null,8,["component-data"])):s("",!0),o(e)===2?(n(),m(f,{key:2,"component-data":t.componentData},null,8,["component-data"])):s("",!0)])}}});const z=B(j,[["__scopeId","data-v-ff75821c"]]);export{z as default};