(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{362:function(a,s,t){"use strict";t.r(s);var e=t(34),n=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"comand-line-interface"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#comand-line-interface","aria-hidden":"true"}},[a._v("#")]),a._v(" Comand line interface")]),a._v(" "),t("p",[a._v("Run the following commands to install KuberLogic CLI:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://github.com/kuberlogic/kuberlogic/releases/download/latest/kuberlogic\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x kuberlogic\n")])])]),t("p",[a._v("Or you can build it your own:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" kuberlogic/modules/dynamic-apiserver\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" build-cli\n")])])]),t("h4",{attrs:{id:"how-to-set-hostname-and-token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-set-hostname-and-token","aria-hidden":"true"}},[a._v("#")]),a._v(" How to set hostname and token")]),a._v(" "),t("p",[t("strong",[a._v("For the Server side:")])]),a._v(" "),t("p",[a._v("Default token = 8ZTjsD3t2Q3Yq-C4-hoahcFn")]),a._v(" "),t("p",[t("strong",[a._v("For the Client side:")])]),a._v(" "),t("p",[a._v("You can use the flag "),t("code",[a._v("--hostname")]),a._v(" to specify hostname where hostname is the kls-api-server external-IP:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("kubectl get svc -n kuberlogic\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("NAME                                     TYPE           CLUSTER-IP    EXTERNAL-IP    PORT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("S"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("        AGE\nkls-api-server                           LoadBalancer   10.48.5.67    34.133.5.167   80:30007/TCP   3m44s\nkls-controller-manager-metrics-service   ClusterIP      10.48.4.207   "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("         8443/TCP       3m44s\nkls-webhook-service                      ClusterIP      10.48.7.205   "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("         443/TCP        3m43s\n")])])]),t("p",[a._v("Or you can create config with path "),t("code",[a._v("~/.config/kuberlogic/config.yaml")]),a._v(" with content")]),a._v(" "),t("div",{staticClass:"language-jsx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[a._v("token"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("your")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("custom")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("code")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("which")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("specified")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("before")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("deployment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token plain-text"}},[a._v("\nhostname: ")]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("hostname")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("of")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("apiserver")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token plain-text"}},[a._v("\n")])])])]),t("p",[a._v("In the case of config, you do not need to specify those flags in commands")]),a._v(" "),t("h4",{attrs:{id:"available-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#available-commands","aria-hidden":"true"}},[a._v("#")]),a._v(" Available commands")]),a._v(" "),t("p",[t("strong",[a._v("List all application instances (with default token):")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./kuberlogic "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" list --token 8ZTjsD3t2Q3Yq-C4-hoahcFn\n")])])]),t("p",[a._v("You should see something like that:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("№ "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("   ID    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("      TYPE      "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" REPLICA "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" VERSION "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("      DOMAIN      "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("      STATUS\n----+---------+----------------+---------+---------+------------------+--------------------\n  0 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" tenant1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" docker-compose "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("       1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("         "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" productname.site "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" ReadyConditionMet\n  1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" tenant2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" docker-compose "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("       1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("         "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" productname.site "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" ReadyConditionMet\n  2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" tenant3 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" docker-compose "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("       1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("         "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" productname.site "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" ReadyConditionMet\n")])])]),t("p",[a._v("You can access your application through ID.DOMAIN (eg. tenant1.productname.site)")]),a._v(" "),t("p",[t("strong",[a._v("List all application instances:")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./kuberlogic "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" list\n")])])]),t("p",[t("strong",[a._v("Add application (application provisioning):")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./kuberlogic "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" add --id tenant1 --type docker-compose --replicas 1 --domain productname.site\n")])])]),t("p",[t("strong",[a._v("Delete application:")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./kuberlogic "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" delete --id demo\n")])])]),t("p",[t("strong",[a._v("Additional parameters:")])]),a._v(" "),t("p",[a._v("Example:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./kuberlogic "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" add --id demo --type docker-compose --limits.cpu 50 --host example.com --replicas 1\n")])])]),t("p",[a._v("Optionally you may want to enable TLS secured access to a provisioned service:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./kuberlogic "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" add --id demo --type docker-compose --limits.cpu 50 --host example.com --replicas 1 --tls_enabled\n")])])])])},[],!1,null,null,null);s.default=n.exports}}]);