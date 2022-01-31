import{u as B,r as E,a as W,o as a,c as r,b as o,t as I,F as H,d as V,e as k,f as R,w as g,g as _,h as D,i as P,j as b,n as $,p as X,k as K,l as F,m as oe,q as j,s as v,v as G,x as J,y as ne,z as se,A as ae,B as ie}from"./vendor.74c6db85.js";const re=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const d of n)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function s(n){const d={};return n.integrity&&(d.integrity=n.integrity),n.referrerpolicy&&(d.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?d.credentials="include":n.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(n){if(n.ep)return;n.ep=!0;const d=s(n);fetch(n.href,d)}};re();const L=(e,t)=>{window.addEventListener(e,t)},M=(e,t)=>{window.removeEventListener(e,t)},q=(e,t)=>{window.dispatchEvent(new Event(e),t)};var x=(e,t)=>{const s=e.__vccOpts||e;for(const[i,n]of t)s[i]=n;return s};const le={key:0,class:"navPopover"},de={class:"navPopover__list"},ce=["onClick"],ue=["href"],he={props:{name:{type:String,description:"The text of the dropdown display."},links:{type:Array,description:"Array of objects containing 'to', 'text', and 'external', each will create a router-link."}},emits:["routed"],setup(e){const t=B(),s=E(!1),i=p=>{const y=f=>{p!==f&&(s.value=!s.value,document.removeEventListener("click",y))};s.value||(s.value=!s.value,document.addEventListener("click",y))},n=()=>{q("routed")},d=p=>{p.external&&(window.location.href=p.to),n(),t.push(p.to)};return(p,y)=>{const f=W("router-link");return a(),r("nav",null,[o("div",{class:"navDropdown",onClick:i},I(e.name),1),s.value?(a(),r("div",le,[o("menu",de,[(a(!0),r(H,null,V(e.links,m=>(a(),r("li",{key:m.to,onClick:u=>d(m),class:"navPopover__list__line"},[m.external?(a(),r("a",{key:0,href:m.to},I(m.text),9,ue)):(a(),R(f,{key:1,to:m.to,onClick:n},{default:g(()=>[_(I(m.text),1)]),_:2},1032,["to"]))],8,ce))),128))])])):k("",!0)])}}};var Q=x(he,[["__scopeId","data-v-05bab1bc"]]);const Z=e=>(X("data-v-f94baed4"),e=e(),K(),e),pe={class:"overlord"},me={id:"sineaters",class:"headerBar"},_e={key:0,class:"headerBar__links"},ye=Z(()=>o("div",{class:"headerBar__links__spacer"},"|",-1)),fe=Z(()=>o("div",{class:"headerBar__links__spacer"},"|",-1)),ve={emits:["routed"],setup(e){const t=B(),s=E(matchMedia("screen and (min-width: 900px)").matches),i=()=>{s.value=!matchMedia("screen and (max-width: 900px)").matches},n=()=>{s.value=!s.value,s&&q("navOpen")},d=[{to:"/",text:"Home"},{to:"/feedback",text:"Feedback"},{to:"https://www.innumerable-engines.net",external:!0,text:"Innumerable Engines"}],p=[{to:"/",text:"Intro"},{to:"/rolling",text:"Rolling"}],y=()=>{q("routed"),t.push("/")};t.beforeEach(m=>{document.title=m.meta.title,Array.from(document.querySelectorAll("[data-vue-app-controlled]")).map(u=>u.parentNode.removeChild(u)),!!m.meta.tags&&m.meta.tags.map(u=>{const h=document.createElement("meta");return Object.keys(u).forEach(c=>h.setAttribute(c,u[c])),h.setAttribute("data-vue-app-controlled",!0),h}).forEach(u=>document.head.appendChild(u))});const f=()=>{s.value=matchMedia("screen and (min-width: 900px)").matches};return D(()=>{window.addEventListener("resize",f),L("routed",i)}),P(()=>{console.log("before unmounted"),window.removeEventListener("resize",f),M("routed",i)}),(m,u)=>{const h=W("router-view");return a(),r("div",pe,[o("div",me,[o("div",{class:"headerBar__title",onClick:y}," Sin Eaters "),o("div",{class:"headerBar__nav-button",onClick:n}," \u2630 "),s.value?(a(),r("div",_e,[b(Q,{name:"Content",links:p}),ye,k("",!0),fe,b(Q,{name:"About",links:d})])):k("",!0)]),o("div",{class:$({pageBody:!0,"pageBody--sidebar":m.$route.meta.sidebar})},[b(h)],2)])}}};var ge=x(ve,[["__scopeId","data-v-f94baed4"]]);const be={move:"Move",basicMove:"Basic Move"},ee=e=>e.toLowerCase().replaceAll(" ","_"),we=({type:e,name:t})=>`/${ee(e)}/${ee(t)}`,ke=({name:e,routeContent:t,type:s})=>({title:`${e} - ${s}`,tags:[{name:"description",content:t}]}),$e=e=>{e.forEach(t=>{t.path=we(t),t.meta=ke(t)})},xe=e=>e.map(t=>({name:t.name,path:t.path,type:t.type,tags:t.tags}));const Se=["onClick"],Ie={class:"body"},Ee=["onClick"],Te={class:"header"},Ce=_('"'),Le=_('"'),Me={props:{id:{type:String,description:"unique id of this example so that it can be made visible uniquely when multiples are embedded on a single page.",required:!0}},setup(e){const t=e,s=F(),i=B();let n=0,d=0,p=0;const y=l=>{n=l.targetTouches[0].screenX,d=l.targetTouches[0].screenY,p=l.timeStamp},f=l=>{const T=l.changedTouches[0].screenX-n,C=l.changedTouches[0].screenY-d,O=l.timeStamp-p;n=0,d=0,p=0,T>100&&-50<C&&C<50&&O<1e3&&c()},m=E(null);let u=E(!1);const h=()=>{i.push({query:{showExample:t.id}}),m.value.focus()},c=()=>{if(m.value.blur(),window.history.state.back===s.path){i.back();return}i.push({query:{showExample:void 0}})},S=()=>{!u.value||c()},w=l=>{!u.value||l.key==="Escape"&&c()};return oe(()=>s.query.showExample,()=>u.value=s.query.showExample===t.id),D(()=>{u.value=s.query.showExample===t.id,document.addEventListener("click",S),document.addEventListener("keyup",w),m.value.addEventListener("touchstart",y,!1),m.value.addEventListener("touchend",f,!1)}),P(()=>{document.removeEventListener("click",S),document.removeEventListener("keyup",w)}),(l,T)=>(a(),r(H,null,[o("div",{class:"example__icon",onClick:j(h,["stop"])},"\xBF\uFF1F",8,Se),o("div",{class:$({example:!0,"example--shown":G(u)}),onClick:T[0]||(T[0]=j(()=>{},["stop"])),ref_key:"slideout",ref:m,tabindex:"-1"},[o("div",Ie,[o("div",{class:"close clickable",onClick:j(c,["stop"])},"\u2573",8,Ee),o("div",Te,[Ce,v(l.$slots,"header",{},void 0,!0),Le]),v(l.$slots,"body",{},void 0,!0)])],2)],64))}};var Ae=x(Me,[["__scopeId","data-v-40bc9054"]]);const He={class:"move__title"},qe={class:"move__name"},Be={class:"move__example"},We={class:"move__preconditions"},Ge={props:{id:{type:String,description:"unique id of this move so that it can be recognized uniquely when multiples are embedded on a single page.  Preferably the move name.",required:!0},bordered:{type:Boolean,description:"Renders the move within a border."},ruled:{type:Boolean,description:"Renders the move with top and bottom horizontal rules."},shaded:{type:Boolean,description:"Renders the move within a shaded box."},leftLined:{type:Boolean,description:"Renders the move body with a vertical border on the left side."},flat:{type:Boolean,description:"Renders the ruled or borered style without curved borders."}},setup(e){return(t,s)=>(a(),r("div",{class:$({move:!0,"move--bordered":e.bordered,"move--ruled":e.ruled,"move--shaded":e.shaded,"move--flat":e.flat})},[o("div",He,[o("div",qe,[v(t.$slots,"name",{},void 0,!0)]),o("div",Be,[b(Ae,{id:e.id},{header:g(()=>[v(t.$slots,"name",{},void 0,!0)]),body:g(()=>[v(t.$slots,"example",{},void 0,!0)]),_:3},8,["id"])])]),o("div",We,[v(t.$slots,"preconditions",{},void 0,!0)]),o("div",{class:$({move__body:!0,"move__body--leftLined":e.leftLined})},[v(t.$slots,"body",{},void 0,!0)],2)],2))}};var Ne=x(Ge,[["__scopeId","data-v-6ea29388"]]);const Oe={class:"options__item"},Re={class:"options__item__text"},De=["innerHTML"],Pe={key:1},Fe={props:{options:{type:Array,description:"Array of string options values."},asHtml:{type:Boolean,description:"Treat the options values as HTML instead of plain text."},bullet:{type:String,description:"Custom bullet character prepended to all options."},bulletSize:{type:String,description:"Font size of the custom bullet.",default:"1em"},bulletWidth:{type:String,description:"Width of the bullet spacing, for alignment of text."},noIndent:{type:Boolean,description:"Prevents indenting the options by an additional margin."},numbered:{type:Boolean,description:"Prefixes the options with increasing numbers (ex: 1. 2. ... N.)."},prefixes:{type:Array,description:"Array of string prefixes for option values."},selectable:{type:Boolean,description:"Renders a checkbox for each option, instead of a dot."},use:{type:String,description:"A hack to prevent a million warnings in the glossary from SHPM passing use as a non-prop attribute to this component."}},setup(e){const t=e,s=t.prefixes&&t.prefixes.length>0,i=!t.bullet&&!s&&!t.selectable&&!t.numbered,n={"font-size":t.bulletSize,width:t.bulletWidth};return(d,p)=>(a(!0),r(H,null,V(e.options,(y,f)=>(a(),r("ul",{key:y,class:$({options:!0,"options--noIndent":e.noIndent})},[o("li",Oe,[e.bullet?(a(),r("span",{key:0,class:"options__item__custom",style:n},I(e.bullet),1)):k("",!0),e.numbered?(a(),r("span",{key:1,class:"options__item__numbered",style:n},I(f+1)+".\xA0",1)):k("",!0),G(s)?(a(),r("span",{key:2,class:"options__item__prefix",style:n},I(e.prefixes[f]),1)):k("",!0),e.selectable?(a(),r("span",{key:3,class:"options__item__selectable",style:n},"\u25A2")):k("",!0),G(i)?(a(),r("span",{key:4,class:"options__item__standard",style:n},"\u25CF")):k("",!0),o("div",Re,[e.asHtml?(a(),r("span",{key:0,innerHTML:y},null,8,De)):(a(),r("span",Pe,I(y),1)),v(d.$slots,`subslot-${f}`,{},void 0,!0)])])],2))),128))}};var z=x(Fe,[["__scopeId","data-v-713ef5cd"]]);const je={class:"roll"},ze={props:{dice:{type:Boolean,details:"Roll details for a specific number of dice"},n:{type:Number,details:"quanity of dice to roll",default:0}},setup(e){const t=e,s=t.n>0?`${t.n} DICE`:t.dice?"DICE":"SOMETHING";return(i,n)=>{const d=W("router-link");return a(),R(d,{to:"/rolling"},{default:g(()=>[o("span",je,"roll "+I(G(s)),1)]),_:1})}}};var Ye=x(ze,[["__scopeId","data-v-71149e6d"]]);const Ve=_("Cost: Abyss / Resilience"),Xe=_(" When you "),Ke=o("b",null,"do the move",-1),Ue=_(" and need to learn the consequences, "),Je=_(". "),Qe=o("h3",{class:"lineTo indent"},"Design Thoughts",-1),Ze=o("p",null,"Todo",-1),et=o("h3",{class:"lineTo indent"},"In Play",-1),tt=o("div",{class:"playExample miniBorder"},[o("p",null,"Skipping play examples for now.")],-1),ot={setup(e){const t="Template";return(s,i)=>(a(),R(Ne,{id:"template",leftLined:""},{name:g(()=>[_(I(t))]),preconditions:g(()=>[Ve]),body:g(()=>[Xe,Ke,Ue,b(Ye,{dice:""}),Je,b(z,{bullet:"\u21C0",options:["Option 1.","Option 2."]},null,8,["options"])]),example:g(()=>[Qe,Ze,et,tt]),_:1}))}},U=[{name:"Template",type:be.basicMove,tags:[],routeContent:"move template.",component:ot}];$e(U);const nt=xe(U),te=[...U],st=[...nt],at=J('<h1 class="title"> Journey In The Mind </h1><blockquote> She had locked something away, something deep inside. A truth that she had once known, but chose to forget. And she couldn&#39;t break free. So I decided to search for it. I went deep into the recess of her mind and found that secret place. And I broke in... <figcaption>Cobb</figcaption></blockquote><p> Sin Eaters is a role playing game about people who delve into the boundless figments and hauntings of the mind. The theme is inspired by works like <i>Psychonauts</i>, <i>The Cell (2002)</i>, <i>To The Moon</i>, and <i>Inception</i>. Within, we follow a crew of characters risking self-sacrifice to journey into the mental universe of the traumatized and the dying, and save them from themselves. </p><h2> What is a Sin Eater? </h2><blockquote> I give easement and rest now to thee. Come not down the lanes or in our meadows. And for thy peace, I pawn my own soul. Amen. <figcaption>Historical Sin Eater Prayer</figcaption></blockquote><p> The dying are consumed by their sins at the edge of their life. Death for the sinful damns their soul to the earth, to plague the living as wraiths and ghosts forever more. Penance cannot help them. Their body is failing, they cannot perform the rites. Their loved ones must make a choice: let them die in the horror of their own failings, or call out for you: a sin eater. </p><p> Sin eating was a real practice in the UK and other parts of the world between 1600 and 1900. Sin eater were called to help those on the verge of death, their job to undertake a ritual meal whereby the sins of the dying were passed onto the food, and then into the eater. </p><p> And what did they get for their service? A little money, and enormous shame. You see, a sin eater bore all the sins of those whom they&#39;ve served. They were living anathema, walking hell. The person who carries such tarnish has no good place in society. </p><p> This game is not historically accurate. Far from it. We&#39;re here to magify the transaction of the sin eaters in fantasy and imagination. What if, to those people, the ritual were more than a meal? What if it were a transcendant and harrowing adventure. A gamble of their own humanity against the sin they consumed, an effort to internalize the abysses of another person&#39;s life? Where would this event take them? </p><h2> In this game: </h2><blockquote> Everybody has a secret world inside of them. I mean everybody. All of the people in the whole world, I mean everybody \u2014 no matter how dull and boring they are on the outside. Inside them they\u2019ve all got unimaginable, magnificent, wonderful, stupid, amazing worlds\u2026 <figcaption>Niel Gaiman</figcaption></blockquote><blockquote> (alternate quote choice)<br> The mind is not a book, to be opened at will and examined at leisure. Thoughts are not etched on the inside of skulls, to be perused by an invader. The mind is a complex and many-layered thing... <figcaption>Severus Snape</figcaption></blockquote><p>You can expect to:</p>',13),it=o("h2",null," State of the game: ",-1),rt=o("p",null," Sin eaters is in pre-alpha. We're just starting on this adventure, figuring out everything from the ground up, and are so glad you're taking part in it. Thank you! ",-1),lt={setup(e){return(t,s)=>(a(),r("div",null,[at,b(z,{bullet:"\u03DF",asHtml:"",options:["Navigate <strong>psychic landscapes</strong>","Help others through <strong>their past suffering</strong> at the cost of your own well-being","Explore <strong>awareness</strong> of personal faults & issues","Work past <strong>your own demons</strong> with time, care, and help"]}),it,rt]))}};const dt={},ct=J('<hr data-v-6fbc8b59><br data-v-6fbc8b59><div id="feedback" class="feedback" data-v-6fbc8b59><span data-v-6fbc8b59>Have some feedback about Sin Eaters?</span><span data-v-6fbc8b59>Maybe you just want to say &quot;Hello!&quot;?</span><span data-v-6fbc8b59>\xA0</span><span data-v-6fbc8b59>Go ahead and tell us what&#39;s good at:</span><span data-v-6fbc8b59><a href="mailto:emmy.holthe.author@gmail.com" data-v-6fbc8b59>emmy.holthe.author@gmail.com</a>.</span><span data-v-6fbc8b59><a href="mailto:keepers@innumerable-engines.net" data-v-6fbc8b59>keepers@innumerable-engines.net</a>.</span></div><br data-v-6fbc8b59><hr data-v-6fbc8b59><br data-v-6fbc8b59>',6);function ut(e,t){return ct}var ht=x(dt,[["render",ut],["__scopeId","data-v-6fbc8b59"]]);const pt=["id"],mt=["id"],_t=["id"],yt=["id"],ft=["id"],vt=["id"],gt={props:{id:{type:String,description:"ID of the title reference, to be appended to the url"},h:{type:Number,description:"1-6, representing h1-h6",default:1},title:{type:Boolean,description:"flags the title display styling"}},setup(e){const t=e;F();const s=B(),i=()=>{s.replace({hash:`#${t.id}`})};return(n,d)=>(a(),r(H,null,[e.h===1?(a(),r("h1",{key:0,id:e.id,class:$({linkable:!0,title:e.title}),onClick:i},[v(n.$slots,"default",{},void 0,!0)],10,pt)):k("",!0),e.h===2?(a(),r("h2",{key:1,id:e.id,class:$({linkable:!0,title:e.title}),onClick:i},[v(n.$slots,"default",{},void 0,!0)],10,mt)):k("",!0),e.h===3?(a(),r("h3",{key:2,id:e.id,class:$({linkable:!0,title:e.title}),onClick:i},[v(n.$slots,"default",{},void 0,!0)],10,_t)):k("",!0),e.h===4?(a(),r("h4",{key:3,id:e.id,class:$({linkable:!0,title:e.title}),onClick:i},[v(n.$slots,"default",{},void 0,!0)],10,yt)):k("",!0),e.h===5?(a(),r("h5",{key:4,id:e.id,class:$({linkable:!0,title:e.title}),onClick:i},[v(n.$slots,"default",{},void 0,!0)],10,ft)):k("",!0),e.h===6?(a(),r("h6",{key:5,id:e.id,class:$({linkable:!0,title:e.title}),onClick:i},[v(n.$slots,"default",{},void 0,!0)],10,vt)):k("",!0)],64))}};var Y=x(gt,[["__scopeId","data-v-3a0fae92"]]);const bt={class:"rolling"},wt=_(" Rolling Dice "),kt=o("p",null," Sin Eaters uses two sets of rolling mechanics. When your character is out in the real world, you roll a solitary D12. When inside a pocket reality, you swap that out for a D6 dice-pool. ",-1),$t=_(" The Real World "),xt=o("p",null," When you're in the real world, all rolls use a D12. Each roll can have one of three possible results: ",-1),St=o("div",{class:"playExample"},[o("p",null,` "This lady is all kinds of shifty," Emmy says, "I think she's hiding something. I'm going to go up and look her in the eye and say, 'you're awful quiet. I think you're holding out. Gonna spill it?'" `),o("p",null,` "Okay," the GM agrees, "lets get a roll. You haven't entered her father's mind yet, so thats one D12." `),o("p",null,[o("i",null,"Em rolls a 9."),_(' "So close," she says. ')]),o("p",null,` "Suzie, the lady, tries to look away and ignore you. When she realizes you aren't leaving she sighs. 'Look,' she says in a whisper, 'this isn't the sort of thing I can just blurt out. It's a family secret, one that my brother has worked hard to keep silent. Get him out of here. I can't say it with him around, and he's been watching me like a hawk.'" `)],-1),It=_(" In Figment Space "),Et=o("p",null," Pocket realities get a bit more complicated than the real world. Instead of a single die, you'll roll a pool of them. Five, to be exact. 5D6. You won't use these dice right away. As soon as you step into someone's mind you roll your initial pool and hold onto it. Later on during play you'll hit a situation where the outcome isn't clear, and the GM will ask you to use those dice to figure out the result. ",-1),Tt=o("p",null," Using your pool is simple. Spend as many dice as you want, up to five at a time, and sum up their values to get one of three results: ",-1),Ct=o("p",null," Dice can be mixed and matched however you want. Spend all of them at once to get above a 10 and a full success? Parcel them out for two 7's instead? That's up to you! But beware, every time you reroll your pool, you're going to take on... ",-1),Lt=_(" Instability "),Mt=o("p",null," When inside a pocket reality, you can reroll your dice pool anytime you want. Stuck with a single 1? Reroll your pool! You rolled five 1's? Reroll your pool! Out of dice? Well, now you have to reroll your pool! ",-1),At=o("p",null,[_(" Every time you reroll, you take a token of "),o("em",null,"Instability"),_(". In other people's realities, you're an anomaly. A germ. A foreign object. Likewise, you're out of your element, too. The longer you stay there, the more your Instability builds, eventually leading to Something Bad. (Developer note, we're still figuring out what that is. But it's super duper bad news bears. Promise. Probably.) ")],-1),Ht=o("div",{class:"playExample"},[o("p",null,` "Whatever that thing is," the GM explains, "it's got that guy in its jaws and is dragging him down the street. He's screaming and flailing at it, there's dust kicking up everywhere, so the going is petty slow." `),o("p",null,` "Definitely want to put an end to that." Keepers says, "how can I, like, distract it, or try and break the guy free? I think I'm going to run over and kick that thing in its side. Try and make it drop the dude." `),o("p",null,` "That will need a roll, let's see how it goes." `),o("p",null,` Keepers looks at his dice, he only has one left, and it's a 5. "I want this to happen, so I'm going to take Instability and reroll. Lets see: 2, 5, 2, 4, 3. I'm going to spend the 4 and 3, so that's 7, a partial success, right?" `),o("p",null,` The GM nods, "yeah. You give this thing a solid kick, and it drops the guy. Then it immediately starts snapping at your legs. As you're trying to avoid those jaws, it catches one of your boots in its mouth. What do you do?" `)],-1),qt={props:{embedded:{type:Boolean,description:"alters the display for when embedded into a separate page"}},setup(e){return(t,s)=>(a(),r("div",bt,[b(Y,{id:"rolling",h:e.embedded?2:1,title:!e.embedded},{default:g(()=>[wt]),_:1},8,["h","title"]),kt,b(Y,{id:"real_world",h:e.embedded?3:2},{default:g(()=>[$t]),_:1},8,["h"]),xt,b(z,{bullet:"\u03DF",asHtml:"",options:["<b>4-</b>: a miss.  The GM will tell you what happens (it won't be good).","<b>5-9</b>: a partial success.  Whatever you tried to do, you do it.  However, something goes wrong in the doing.  The GM will tell you what kind of cost, new danger, or partial result you can expect.","<b>10+</b>: success!  You do it."]},null,8,["options"]),St,b(Y,{id:"figment_space",h:e.embedded?3:2},{default:g(()=>[It]),_:1},8,["h"]),Et,Tt,b(z,{bullet:"\u03DF",asHtml:"",options:["<b>6-</b>: a miss.  The GM will tell you what happens (it won't be good).","<b>7-9</b>: a partial success.  Whatever you tried to do, you do it.  However, something goes wrong in the doing.  The GM will tell you what kind of cost, new danger, or partial result you can expect.","<b>10+</b>: success!  You do it."]},null,8,["options"]),Ct,b(Y,{id:"instability",h:e.embedded?3:2},{default:g(()=>[Lt]),_:1},8,["h"]),Mt,At,Ht]))}};const Bt=["onKeyup"],Wt={props:{initHidden:{type:Function,description:"A function that returns a boolean.  When it returns true, the sidebar will immediately hide."}},setup(e){const t=e,s=F();let i=0,n=0,d=0;const p=l=>{!matchMedia("screen and (max-width: 900px)").matches||(i=l.targetTouches[0].screenX,n=l.targetTouches[0].screenY,d=l.timeStamp)},y=l=>{if(!matchMedia("screen and (max-width: 900px)").matches)return;const T=l.changedTouches[0].screenX-i,C=l.changedTouches[0].screenY-n,O=l.timeStamp-d;i=0,n=0,d=0,T<-100&&-50<C&&C<50&&O<1e3&&c(),T>100&&-50<C&&C<50&&O<1e3&&h()},f=E(null),m=E(null);let u=E(!0);const h=()=>{const l=!u.value;u.value=!0,l&&u.value&&q("sidebarOpen")},c=()=>{const l=!!u.value;u.value=matchMedia("screen and (min-width: 900px)").matches,l&&!u.value&&q("sidebarClose")},S=()=>{(u.value?c:h)()},w=()=>{!u.value||c()};return D(()=>{var l;f.value.addEventListener("touchstart",p,!1),f.value.addEventListener("touchend",y,!1),m.value.addEventListener("touchstart",p,!1),m.value.addEventListener("touchend",y,!1),L("navOpen",w),L("toggleSidebar",S),L("closeSidebar",c),L("openSidebar",h),u.value=!((l=t.initHidden)==null?void 0:l.call(t)),s.hash&&scrollTo(s.hash.substring(1),"auto")}),P(()=>{document.removeEventListener("click",w),M("navOpen",w),M("toggleSidebar",S),M("closeSidebar",c),M("openSidebar",h)}),(l,T)=>(a(),r(H,null,[o("div",{class:$({sidebar:!0,"sidebar--visible":G(u)}),onKeyup:ne(c,["esc"]),ref_key:"sidebar",ref:m,tabglossary:"-1"},[v(l.$slots,"sidebar",{},void 0,!0)],42,Bt),o("div",{class:"page",ref_key:"page",ref:f},[o("div",{class:"menu",onClick:h}," \u2B44 Menu "),v(l.$slots,"page",{},void 0,!0)],512)],64))}};var Gt=x(Wt,[["__scopeId","data-v-177ec9a8"]]);const Nt={class:"search"},Ot={class:"entries"},Rt=["onClick"],Dt={class:"entry__type"},Pt={setup(e){const t=F(),s=B(),i=E(null),n=()=>{i.value.focus()},d=()=>{var h;(h=i.value)==null||h.blur()};E("");const p=[];st.forEach(h=>{const c=Object.assign({},h);c.searchable=[c.name,c.type,...c.tags].map(S=>S.toLowerCase()),p.push(c)}),p.sort((h,c)=>h.name.localeCompare(c.name));const y=E(Object.assign({},p)),f=h=>{let c=h.target.value?h.target.value.toLowerCase().trim():"";if(!c){y.value=Object.assign({},p);return}y.value=p.filter(S=>S.searchable.some(w=>w.includes(c)))},m=h=>{var c;s.push({path:`/glossary${h.path}`}),(c=i.value)==null||c.blur(),q("toggleSidebar")};D(()=>{L("sidebarOpen",n),L("sidebarClose",d)}),P(()=>{M("sidebarOpen",n),M("sidebarClose",d)});const u=()=>{if(matchMedia("screen and (max-width: 900px)").matches)return!0;t.path.includes("landing")&&i.value.focus()};return(h,c)=>{const S=W("router-view");return a(),R(Gt,{initHidden:u},{sidebar:g(()=>[o("div",Nt,[o("input",{type:"text",ref_key:"searchInput",ref:i,class:"search__input",placeholder:"search for moves/playbooks/etc",onInput:f},null,544)]),o("div",Ot,[o("ul",null,[(a(!0),r(H,null,V(y.value,w=>(a(),r("li",{key:w,class:$({entry:!0,"entry--selected":h.$route.path.includes(w.path)}),onClick:j(l=>m(w),["stop"])},[o("div",null,I(w.name),1),o("div",Dt,I(w.type),1)],10,Rt))),128))])])]),page:g(()=>[b(S)]),_:1})}}};var Ft=x(Pt,[["__scopeId","data-v-5ee5b218"]]);const jt={},zt=e=>(X("data-v-6d395690"),e=e(),K(),e),Yt={class:"glossaryHome"},Vt=_(" Welcome to the glossary. Here you can search quick references to any move, background, persona, or other thingy in the game! "),Xt=zt(()=>o("div",{class:"glossaryHome__controls"},[o("br"),o("br"),o("b",null,"Swipe right"),_(" to open the menu. "),o("br"),o("br"),o("b",null,"Swipe Left"),_(" or select an entry to close it again. ")],-1)),Kt=[Vt,Xt];function Ut(e,t){return a(),r("div",Yt,Kt)}var Jt=x(jt,[["render",Ut],["__scopeId","data-v-6d395690"]]);const Qt={},Zt={class:"glossaryNotFound"};function eo(e,t){return a(),r("div",Zt," Whatever that is, it's not a part of this game. Maybe you had a typo? ")}var to=x(Qt,[["render",eo],["__scopeId","data-v-2b5dfecc"]]);const oo={},no=e=>(X("data-v-8159442c"),e=e(),K(),e),so={class:"notFound"},ao=no(()=>o("div",null,"That url isn't part of Sin Eaters.",-1)),io=_("Go "),ro=_("home.");function lo(e,t){const s=W("router-link");return a(),r("div",so,[ao,o("div",null,[io,b(s,{to:"/"},{default:g(()=>[ro]),_:1})])])}var co=x(oo,[["render",lo],["__scopeId","data-v-8159442c"]]);const N=(...e)=>e.concat("Sin Eaters").join(" - ");let A=[{path:"/",name:"Home",component:lt,meta:{title:N("Home"),tags:[{name:"description",content:"Sin Eaters - a pbta about fighting the unbroken god."}]}},{path:"/feedback",name:"Feedback",component:ht,meta:{title:N("Feedback"),tags:[{name:"description",content:"Give some feedback about the game!"}]}}];A=A.concat([{path:"/rolling",name:"Rolling",component:qt,meta:{title:N("Rolling"),tags:[{name:"description",content:"The dice rolling and resolution mechanics in Sin Eaters."}]}}]);te.forEach(e=>{e.meta.title=N(e.meta.title),e.path=e.path.substring(1)});A=A.concat([{path:"/glossary",name:"Glossary",component:Ft,meta:{title:N("Glossary"),sidebar:!0,tags:[{name:"description",content:"The glossary reference for all rules in the game."}]},children:[...te,{path:"landing",name:"Glossary Landing",component:Jt,meta:{title:"Glossary"}},{path:":pathMatch(.*)*",component:to,meta:{title:"Glossary - Not Found"}}]}]);A=A.concat([{path:"/:pathMatch(.*)*",component:co,meta:{title:"Not Found"}}]);const uo=se({history:ae(),routes:A});ie(ge).use(uo).mount("#app");