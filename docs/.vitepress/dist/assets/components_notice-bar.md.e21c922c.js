import{_ as e,D as t,i as a,j as o,G as n,B as c,z as E,l as B}from"./chunks/framework.a4d4515f.js";const u=JSON.parse('{"title":"notice-bar","description":"","frontmatter":{"title":"notice-bar"},"headers":[],"relativePath":"components/notice-bar.md","lastUpdated":1682343111000}'),r={name:"components/notice-bar.md"},i=E("h1",{id:"noticebar-通知栏",tabindex:"-1"},[B("NoticeBar 通知栏 "),E("a",{class:"header-anchor",href:"#noticebar-通知栏","aria-label":'Permalink to "NoticeBar 通知栏"'},"​")],-1),D=E("p",null,"将一些重要的信息即使告诉用户 功能: 左右滑动，上下滚动",-1),s=E("h2",{id:"基础用法",tabindex:"-1"},[B("基础用法 "),E("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),C=E("p",null,"notice-bar/basic",-1);function F(d,l,p,m,_,b){const A=t("Demo");return a(),o("div",null,[i,D,s,n(A,{source:"%3Ctemplate%3E%0D%0A%20%20%3Cu-notice-bar%20data%3D%22%F0%9F%94%A5%E4%BD%A0%E6%98%AF%E4%BA%91%E5%B1%82%E9%87%8C%E9%9A%90%E7%BA%A6%E5%8F%AF%E8%A7%81%E7%9A%84%E6%98%9F%E5%85%89%EF%BC%8C%E6%98%AF%E9%93%B6%E6%B2%B3%E9%87%8C%E6%8E%89%E4%B8%8B%E6%9D%A5%E7%9A%84%E4%B8%80%E9%A2%97%E7%B3%96%E3%80%82%22%3E%3C%2Fu-notice-bar%3E%0D%0A%20%20%3Cu-notice-bar%0D%0A%20%20%20%20background%3D%22%23ecf5ff%22%0D%0A%20%20%20%20color%3D%22%23409eff%22%0D%0A%20%20%20%20prefix-icon%3D%22dianzan%22%0D%0A%20%20%20%20suffix-icon%3D%22comment%22%0D%0A%20%20%20%20data%3D%22%F0%9F%94%A5%E7%94%9F%E6%B4%BB%E6%9C%AC%E6%9D%A5%E5%B0%B1%E6%98%AF%E4%B8%8D%E6%96%AD%E5%A4%B1%E5%8E%BB%E7%9A%84%E8%BF%87%E7%A8%8B%EF%BC%8C%E4%BD%A0%E6%89%80%E5%A4%B1%E5%8E%BB%E7%9A%84%E4%B8%8D%E8%BF%87%E6%98%AF%E6%8D%A2%E4%BA%86%E5%8F%A6%E4%B8%80%E7%A7%8D%E6%96%B9%E5%BC%8F%E8%AE%A9%E4%BD%A0%E9%87%8D%E6%96%B0%E6%8B%A5%E6%9C%89%E3%80%82%22%0D%0A%20%20%3E%3C%2Fu-notice-bar%3E%0D%0A%20%20%3Cu-notice-bar%20vertical%20%3Adata%3D%22noticeList%22%3E%3C%2Fu-notice-bar%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aconst%20noticeList%20%3D%20ref(%5B%0D%0A%20%20'%F0%9F%94%A5%E6%9C%89%E4%B8%80%E6%9D%A1%E6%B7%B1%E6%B5%B7%E9%B1%BC%E5%9C%A8%E5%BE%80%E6%B7%B1%E5%A4%84%E6%B8%B8%EF%BC%8C%E6%B8%B8%E7%9D%80%E6%B8%B8%E7%9D%80%E5%AE%83%E5%B0%B1%E5%93%AD%E4%BA%86%EF%BC%8C%E5%9B%A0%E4%B8%BA%E5%AE%83%E8%A7%89%E5%BE%97%E5%8E%8B%E5%8A%9B%E5%A5%BD%E5%A4%A7%E3%80%82'%2C%0D%0A%20%20'%E8%AF%B7%E6%89%8B%E6%9C%BA%E8%87%AA%E6%88%91%E6%A3%80%E8%AE%A8%E4%B8%80%E4%B8%8B%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E6%80%BB%E6%8B%89%E7%9D%80%E6%88%91%E4%B8%80%E8%B5%B7%E7%86%AC%E5%A4%9C%EF%BC%9F'%2C%0D%0A%20%20'%E5%8E%86%E5%8F%B2%E8%80%81%E5%B8%88%EF%BC%9A%E4%BD%A0%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BA%A4%E7%99%BD%E5%8D%B7%EF%BC%9F%E6%88%91%EF%BC%9A%E6%88%91%E6%80%95%E6%88%91%E4%BC%9A%E7%AF%A1%E6%94%B9%E5%8E%86%E5%8F%B2'%2C%0D%0A%20%20'%E4%BB%8A%E5%A4%A9%E5%A4%A9%E6%B0%94%E5%BE%88%E5%A5%BD%EF%BC%8C%E5%9C%A8%E6%88%BF%E9%97%B4%E9%87%8C%E5%AE%85%E4%B9%85%E4%BA%86%EF%BC%8C%E5%87%86%E5%A4%87%E5%8E%BB%E5%AE%A2%E5%8E%85%E6%95%A3%E6%95%A3%E5%BF%83%E3%80%82'%0D%0A%5D)%0D%0A%3C%2Fscript%3E%0D%0A",path:"notice-bar/basic",description:""},{default:c(()=>[C]),_:1})])}const h=e(r,[["render",F]]);export{u as __pageData,h as default};
