import{e as _}from"./emoji.51829739.js";import{b as c,t as g,M as k}from"../app.2797d890.js";import{h as b,ak as j,r as w,D as i,i as f,A as h,B as x,G as S}from"./framework.a4d4515f.js";import"./theme.07413ae8.js";const C=b({__name:"nav-sort",setup(z){const a=j({user:{id:1,username:"jack",avatar:"https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100",likeIds:[1,2,3]},emoji:_,comments:[],total:10}),m=w(!0),u=e=>{console.log(e)};let s=100;const l=({content:e,parentId:t,files:o,finish:n})=>{console.log("提交评论: "+e,t,o);let r=o==null?void 0:o.map(v=>g(v)).join("||");s+=1;const d={id:String(s),parentId:t,uid:a.user.id,address:"来自江苏",content:e,likes:0,createTime:c().subtract(5,"seconds").toString(),contentImg:r,user:{username:a.user.username,avatar:a.user.avatar,level:6,homeLink:`/${s}`},reply:null};setTimeout(()=>{n(d),k({message:"评论成功!",type:"info"})},200)},p=(e,t)=>{console.log("点赞: "+e),setTimeout(()=>{t()},200)};return a.comments=[{id:"1",parentId:null,uid:"1",address:"来自上海",content:"缘生缘灭，缘起缘落，我在看别人的故事，别人何尝不是在看我的故事?别人在演绎人生，我又何尝不是在这场戏里?谁的眼神沧桑了谁?我的眼神，只是沧桑了自己[喝酒]",likes:2,contentImg:"https://gitee.com/undraw/undraw-ui/raw/master/public/docs/normal.webp",createTime:c().subtract(10,"minute").toString(),user:{username:"落🤍尘",avatar:"https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100",level:6,homeLink:"/1"}}],(e,t)=>{const o=i("u-comment-nav"),n=i("u-comment");return f(),h(n,{config:a,onSubmit:l,onLike:p,"relative-time":""},{default:x(()=>[S(o,{modelValue:m.value,"onUpdate:modelValue":t[0]||(t[0]=r=>m.value=r),onSorted:u},null,8,["modelValue"])]),_:1},8,["config"])}}});export{C as default};
