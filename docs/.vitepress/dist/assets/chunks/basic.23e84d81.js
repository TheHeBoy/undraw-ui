import{h as g,r as h,D as n,i as _,j as A,G as a,B as v,l as C,F as V}from"./framework.a4d4515f.js";const k=g({__name:"basic",setup(S){const o=h([{path:"/home",meta:{title:"首页",isAffix:!0}},{path:"/user",meta:{title:"用户管理",isAffix:!1}},{path:"/role",meta:{title:"角色管理",isAffix:!1}},{path:"/other",meta:{title:"其 他xxxxxxxxxxxx",isAffix:!1}}]),c=e=>{console.log("select")};let t=0;const r=e=>{o.value.push({path:`${t++}`,meta:{title:`val-${t++}`,isAffix:!1}})},f=()=>{console.log("refresh")},i=e=>{console.log("close")},u=e=>{console.log("closeOther")},x=()=>{console.log("closeAll")},m=()=>{console.log("fullScreen")};return(e,l)=>{const p=n("u-tags"),d=n("el-button");return _(),A(V,null,[a(p,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=s=>o.value=s),classic:"",onSelect:c,onRefresh:f,onClose:i,onCloseOther:u,onCloseAll:x,onFullScreen:m},null,8,["modelValue"]),a(d,{onClick:l[1]||(l[1]=s=>r())},{default:v(()=>[C("add")]),_:1})],64)}}});export{k as default};
