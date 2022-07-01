(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{365:function(e,t,s){"use strict";s.r(t);var n=s(34),r=Object(n.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"setting-ingress-controller"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-ingress-controller","aria-hidden":"true"}},[e._v("#")]),e._v(" Setting Ingress controller")]),e._v(" "),s("p",[e._v("Follow kong installation guide. Or you can choose another ingress controller.")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/Kong/kubernetes-ingress-controller",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/Kong/kubernetes-ingress-controller"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("Or just run to apply kong ingress controller:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("kubectl apply -f https://bit.ly/k4k8s\n")])])]),s("p",[s("strong",[e._v("Make sure that the Ingress class is set by default.")])]),e._v(" "),s("p",[e._v("Set:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("kubectl annotate ingressclass kong ingressclass.kubernetes.io/is-default-class"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true\n")])])]),s("p",[e._v("*You should change “kong” (e.g. nginx) into the following command if you use another Ingress controller.")])])},[],!1,null,null,null);t.default=r.exports}}]);