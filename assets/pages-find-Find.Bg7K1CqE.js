import{r as l,o as a,a as s,h as e,w as t,e as c,b as u,F as n,g as r,f as o,t as d,n as i,l as _,m as f,p,i as m,S as y,q as v,s as g,u as w}from"./index-BfP68fZS.js";import{_ as b,a as k}from"./播放5.Br-nJs9r.js";import{b as h,t as I,a as x,c as C,d as S}from"./index.mjNcLiXg.js";import{_ as U}from"./_plugin-vue_export-helper.BCo6x5W8.js";const j=U({__name:"Music",setup(v){const g=l([]),w=l([]),S=l([]),U=l([]),j=l([]);a((async()=>{try{const l=await h();g.value=l.data.banners}catch(l){console.error(l)}try{const l=await I();w.value=l.data.playlists.slice(0,6),S.value=l.data.playlists.slice(6,11)}catch(l){console.error(l)}try{const l=await x();U.value=l.data.data.slice(0,12)}catch(l){console.error(l)}try{const l=await C();console.log(l),j.value=l.data.list.slice(0,6)}catch(l){console.error(l)}}));return(l,a)=>{const v=_,h=f,I=p,x=m,C=y;return s(),e(x,{class:"page"},{default:t((()=>[c(x,{class:"con"},{default:t((()=>[c(I,{class:"swiper",autoplay:"",interval:"3000",duration:"500"},{default:t((()=>[(s(!0),u(n,null,r(g.value,(l=>(s(),e(h,{key:l.targetId},{default:t((()=>[c(v,{class:"img",src:l.imageUrl,mode:"widthFix",onClick:l=>{i({url:"/pages/find/views/BannerDetail"})}},null,8,["src","onClick"])])),_:2},1024)))),128))])),_:1})])),_:1}),c(x,{class:"tit"},{default:t((()=>[o("甄选歌单")])),_:1}),c(x,{class:"select"},{default:t((()=>[c(x,{class:"selectCon"},{default:t((()=>[c(C,{class:"scroll","scroll-x":""},{default:t((()=>[c(x,{class:"list"},{default:t((()=>[(s(!0),u(n,null,r(w.value,(l=>(s(),e(x,{class:"listItem",key:l},{default:t((()=>[c(v,{src:l.coverImgUrl},null,8,["src"]),c(x,null,{default:t((()=>[o(d(l.name),1)])),_:2},1024),c(x,{class:"play"},{default:t((()=>[c(v,{src:b})])),_:1})])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])),_:1}),c(x,{class:"tit"},{default:t((()=>[o("云村新鲜事")])),_:1}),c(x,{class:"new"},{default:t((()=>[c(x,{class:"newCon"},{default:t((()=>[c(C,{class:"scroll","scroll-x":""},{default:t((()=>[c(x,{class:"list"},{default:t((()=>[(s(!0),u(n,null,r(S.value,(l=>(s(),e(x,{class:"listItem",key:l},{default:t((()=>[c(v,{src:l.coverImgUrl},null,8,["src"]),c(x,null,{default:t((()=>[o(d(l.name),1)])),_:2},1024),c(x,{class:"play"},{default:t((()=>[c(v,{src:b})])),_:1})])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])),_:1}),c(x,{class:"tit"},{default:t((()=>[o("新歌新碟>")])),_:1}),c(x,{class:"newSong"},{default:t((()=>[c(C,{class:"newSongCon","scroll-x":""},{default:t((()=>[c(x,{class:"newSongList"},{default:t((()=>[(s(!0),u(n,null,r(U.value,(l=>(s(),e(x,{class:"newSongItem",key:l},{default:t((()=>[c(v,{src:l.album.picUrl},null,8,["src"]),c(x,{class:"right"},{default:t((()=>[c(x,{class:"song"},{default:t((()=>[o(d(l.album.name),1)])),_:2},1024),c(x,{class:"singer"},{default:t((()=>[o(d(l.album.company)+"-"+d(l.album.subType)+"-"+d(l.album.artists[0].name),1)])),_:2},1024),c(x,{class:"playFive"},{default:t((()=>[c(v,{src:k})])),_:1})])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1}),c(x,{class:"tit phb"},{default:t((()=>[o("排行榜>")])),_:1}),c(x,{class:"top"},{default:t((()=>[c(x,{class:"topCon"},{default:t((()=>[c(C,{class:"scroll","scroll-x":""},{default:t((()=>[c(x,{class:"list"},{default:t((()=>[(s(!0),u(n,null,r(j.value,(u=>(s(),e(x,{class:"listItem",key:u},{default:t((()=>[c(v,{src:u.coverImgUrl,onClick:a[0]||(a[0]=a=>(l.id,void i({url:"/pages/find/views/TopDetail"})))},null,8,["src"]),c(x,{class:"th"},{default:t((()=>[c(x,null,{default:t((()=>{return[o(d(String((l=u.tracks,l.map((l=>l.first)))).replace(/,/g,"、")),1)];var l})),_:2},1024),c(x,{class:"play"},{default:t((()=>[c(v,{src:b})])),_:1})])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])),_:1}),c(x,{class:"tit"},{default:t((()=>[o("探索更多")])),_:1}),c(x,{class:"styleList"},{default:t((()=>[c(x,{class:"style"},{default:t((()=>[o("按曲风浏览>")])),_:1}),c(x,{class:"style"},{default:t((()=>[o("按歌手浏览>")])),_:1}),c(x,{class:"style"},{default:t((()=>[o("音乐专区>")])),_:1}),c(x,{class:"style"},{default:t((()=>[o("歌单广场>")])),_:1}),c(x,{class:"style"},{default:t((()=>[o("宝藏曲库>")])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-ba37fc30"]]),F={__name:"Podcast",setup(c){const u=l([]);return a((async()=>{try{const l=await S();console.log(l),u.value=l.data.banners}catch(l){console.error(l)}})),(l,a)=>{const c=m;return s(),e(c,null,{default:t((()=>[o("播客")])),_:1})}}};const D=U({},[["render",function(l,a){const c=m;return s(),e(c,null,{default:t((()=>[o("直播")])),_:1})}]]);const L=U({},[["render",function(l,a){const c=m;return s(),e(c,null,{default:t((()=>[o("听书")])),_:1})}]]),T=U({__name:"Find",setup(a){const i=l(0),_=["音乐","播客","听书","直播"];return(l,a)=>{const f=w,p=m;return s(),u(n,null,[c(p,{class:"tabs"},{default:t((()=>[(s(),u(n,null,r(_,((l,a)=>c(f,{onClick:l=>i.value=a,class:g({active:i.value===a})},{default:t((()=>[o(d(l),1)])),_:2},1032,["onClick","class"]))),64))])),_:1}),c(p,null,{default:t((()=>[0===i.value?(s(),e(j,{key:0})):v("",!0),1===i.value?(s(),e(F,{key:1})):v("",!0),2===i.value?(s(),e(D,{key:2})):v("",!0),3===i.value?(s(),e(L,{key:3})):v("",!0)])),_:1})],64)}}},[["__scopeId","data-v-76b0340c"]]);export{T as default};
