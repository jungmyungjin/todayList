"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[917],{3093:function(t,n,e){e(2791);n.Z=e.p+"static/media/LoginKeyboard.9b9cd6530a1b404d1a817e4e080829f7.svg"},8740:function(t,n,e){e(2791);n.Z=e.p+"static/media/LoginUser.9a81968db1d4f1b82cd98374e3210d9a.svg"},8914:function(t,n,e){e.d(n,{Z:function(){return v}});var r=e(4165),a=e(5861),o=e(9439),c=e(2791),u=e(1087),s={LayoutHeader:"Header_LayoutHeader__5+e23",LayoutLogo:"Header_LayoutLogo__GLQtR",LogoIcon:"Header_LogoIcon__WhxL6",LogoText:"Header_LogoText__m1Fht",LayoutLogin:"Header_LayoutLogin__qhJzU",LoginText:"Header_LoginText__vWNlZ",LoginIcon:"Header_LoginIcon__XPn9E",LogoutIcon:"Header_LogoutIcon__DGNRZ",horizontalShaking:"Header_horizontalShaking__o0Df+"};var i=e.p+"static/media/Pen.e4e8cb2fa9140c7c24780332b817a94a.svg";var l=e.p+"static/media/User.49db7e2a8b2815411dff6a67a49eaf2b.svg";var f=e.p+"static/media/Logout.462b161b7f3916f11c3b75efefa920d0.svg",p=e(3737),d=e(5508),h=e(5330),g=e(184),v=function(){var t=(0,h.FV)(d.C),n=(0,o.Z)(t,2),e=n[0],v=n[1];(0,c.useEffect)((function(){(0,a.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.CS)();case 3:return n=t.sent,t.next=6,v({isLogin:!0,email:n.email,full_name:n.full_name});case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}),[]);return(0,g.jsxs)("div",{className:s.LayoutHeader,children:[(0,g.jsxs)(u.rU,{to:"".concat("/TodayList"),className:s.LayoutLogo,children:[(0,g.jsx)("img",{className:s.LogoIcon,src:i,alt:""}),(0,g.jsx)("div",{className:"".concat(s.LogoText," ").concat(s.Text),children:"Today list"})]}),e.isLogin&&(0,g.jsxs)(u.rU,{to:"".concat("/TodayList"),className:s.LayoutLogin,children:[(0,g.jsxs)("div",{className:s.LoginText,children:["hello, ",e.full_name]}),(0,g.jsx)("img",{className:s.LoginIcon,src:f,alt:"logout",onClick:function(){(0,p.g_)(),v({isLogin:!1,email:"",full_name:""}),window.location.replace("".concat("/TodayList"))}})]}),!e.isLogin&&(0,g.jsxs)(u.rU,{to:"".concat("/TodayList","/signIn"),className:s.LayoutLogin,children:[(0,g.jsx)("div",{className:s.LoginText,children:"\ub85c\uadf8\uc778"}),(0,g.jsx)("img",{className:s.LoginIcon,src:l,alt:"login"})]})]})}},455:function(t,n,e){e.d(n,{x:function(){return r}});var r=(0,e(5330).cn)({key:"userInfoState",default:{isLogin:!1,email:"",full_name:""}})},5508:function(t,n,e){e.d(n,{C:function(){return o}});var r=e(5330),a=e(455),o=(0,r.nZ)({key:"userInfoSelector",get:function(t){return(0,t.get)(a.x)},set:function(t,n){return(0,t.set)(a.x,n)}})},3737:function(t,n,e){e.d(n,{CS:function(){return d},Fl:function(){return f},XB:function(){return u},eM:function(){return g},g6:function(){return m},g_:function(){return i},h0:function(){return v}});var r=e(4165),a=e(1413),o=e(5861),c=e(1243).Z.create({baseURL:"".concat("https://aws.duckkuri.com","/api"),timeout:1e3,withCredentials:!0});function u(t){return s.apply(this,arguments)}function s(){return(s=(0,o.Z)((0,r.Z)().mark((function t(n){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.post("/auth/login",(0,a.Z)({},n));case 3:return e=t.sent,t.abrupt("return",e);case 7:throw t.prev=7,t.t0=t.catch(0),console.log("Failed to login",t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function i(){return l.apply(this,arguments)}function l(){return(l=(0,o.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.delete("/auth/logout");case 3:return n=t.sent,t.abrupt("return",n);case 7:throw t.prev=7,t.t0=t.catch(0),console.log("Logout Error",t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function f(t){return p.apply(this,arguments)}function p(){return(p=(0,o.Z)((0,r.Z)().mark((function t(n){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.post("/auth/join",n);case 3:return e=t.sent,t.abrupt("return",e);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function d(){return h.apply(this,arguments)}function h(){return(h=(0,o.Z)((0,r.Z)().mark((function t(){var n,e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("/auth/user");case 3:return n=t.sent,t.next=6,null===n||void 0===n?void 0:n.data;case 6:return e=t.sent,t.abrupt("return",e);case 10:throw t.prev=10,t.t0=t.catch(0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function g(){var t="".concat("https://aws.duckkuri.com","/api/auth/kakao");return"https://kauth.kakao.com/oauth/authorize?client_id=".concat("6cc06c72534bb75de5a9d7b805108c88","&redirect_uri=").concat(t,"&response_type=code")}function v(t,n){return L.apply(this,arguments)}function L(){return(L=(0,o.Z)((0,r.Z)().mark((function t(n,e){var a,o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.toFormat("yyyy-MM-dd")||"",t.next=4,c.post("/task?date=".concat(a),n);case 4:return o=t.sent,t.abrupt("return",o);case 8:throw t.prev=8,t.t0=t.catch(0),console.log("Logout Error",t.t0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,o.Z)((0,r.Z)().mark((function t(n){var e,a,o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=n.toFormat("yyyy-MM-dd")||"",t.next=4,c.get("/task?date=".concat(e));case 4:return a=t.sent,t.next=7,null===a||void 0===a?void 0:a.data;case 7:return o=t.sent,t.abrupt("return",o);case 11:throw t.prev=11,t.t0=t.catch(0),t.t0;case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}},6766:function(t,n,e){function r(t){return/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(t)}e.d(n,{b:function(){return o},J:function(){return a}});var a=function(t){return r(t.email)?(n=t.password,/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(n)?t.password!==t.confirmPassword?"\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.":"\uc774\uba54\uc77c \uc874\uc7ac\ud558\ub294\uc9c0 \ud655\uc778"===t.email?"\uc774\ubbf8 \uc0ac\uc6a9\uc911\uc778 \uc774\uba54\uc77c \uc785\ub2c8\ub2e4.":t.full_name?"":"\ube44\uc5b4\uc788\ub294 \uc785\ub825\ub780\uc774 \uc788\uc2b5\ub2c8\ub2e4.":"\ud328\uc2a4\uc6cc\ub4dc \ud615\uc2dd\uc774 \ub9de\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."):"\uc774\uba54\uc77c \ud615\uc2dd\uc774 \ub9de\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.";var n},o=function(t){return r(t.email)?"":"\uc774\uba54\uc77c \ud615\uc2dd\uc774 \ub9de\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}}}]);
//# sourceMappingURL=917.339f0b60.chunk.js.map