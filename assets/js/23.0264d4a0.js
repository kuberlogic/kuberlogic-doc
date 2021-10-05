(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{360:function(t,_,v){"use strict";v.r(_);var r=v(34),e=Object(r.a)({},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"components"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#components","aria-hidden":"true"}},[t._v("#")]),t._v(" Components")]),t._v(" "),v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#operator"}},[t._v("operator")]),v("ul",[v("li",[v("a",{attrs:{href:"#operator-configuration"}},[t._v("Operator configuration")])])])]),v("li",[v("a",{attrs:{href:"#apiserver"}},[t._v("apiserver")]),v("ul",[v("li",[v("a",{attrs:{href:"#apiserver-configuration"}},[t._v("Apiserver configuration")])])])])])]),v("p"),t._v(" "),v("h2",{attrs:{id:"operator"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#operator","aria-hidden":"true"}},[t._v("#")]),t._v(" operator")]),t._v(" "),v("p",[t._v("KuberLogic’s heart is the "),v("code",[t._v("operator")]),t._v(". It is responsible for keeping services in a healthy state.")]),t._v(" "),v("h3",{attrs:{id:"operator-configuration"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#operator-configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Operator configuration")]),t._v(" "),v("p",[t._v("The "),v("code",[t._v("operator")]),t._v(" needs a set of configuration parameters passed as environment variables:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("name")]),t._v(" "),v("th",[t._v("type")]),t._v(" "),v("th",[t._v("default")]),t._v(" "),v("th",[t._v("description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("IMG_REPO")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("“”")]),t._v(" "),v("td",[t._v("Container image repository where KuberLogic container images are located. Required.")])]),t._v(" "),v("tr",[v("td",[t._v("IMG_PULL_SECRET")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("“”")]),t._v(" "),v("td",[t._v("ImagePullSecret name for the registry of KuberLogic container images. Optional.")])]),t._v(" "),v("tr",[v("td",[t._v("POD_NAMESPACE")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("“”")]),t._v(" "),v("td",[t._v("Namespace in which KuberLogic "),v("code",[t._v("operator")]),t._v(" is running. Required.")])]),t._v(" "),v("tr",[v("td",[t._v("SENTRY_DSN")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("“”")]),t._v(" "),v("td",[t._v("Sentry URL to report panics. Optional.")])]),t._v(" "),v("tr",[v("td",[t._v("NOTIFICATION_CHANNELS_EMAIL_ENABLED")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("Enable email notification channel for KuberLogic alerts. Optional.")])]),t._v(" "),v("tr",[v("td",[t._v("NOTIFICATION_CHANNELS_EMAIL_HOST")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("“”")]),t._v(" "),v("td",[t._v("SMTP host for email notification channel. Optional.")])]),t._v(" "),v("tr",[v("td",[t._v("NOTIFICATION_CHANNELS_EMAIL_PORT")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("SMTP port for . Optional.")])]),t._v(" "),v("tr",[v("td",[t._v("NOTIFICATION_CHANNELS_EMAIL_TLS_INSECURE")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("Do not verify TLS when connected to SMTP server. Optional.")])]),t._v(" "),v("tr",[v("td",[t._v("NOTIFICATION_CHANNELS_EMAIL_TLS_ENABLED")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("Use TLS when connecting to SMTP server. Optional.")])]),t._v(" "),v("tr",[v("td",[t._v("NOTIFICATION_CHANNELS_EMAIL_USERNAME")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("“”")]),t._v(" "),v("td",[t._v("SMTP server connection username. Optional.")])]),t._v(" "),v("tr",[v("td",[t._v("NOTIFICATION_CHANNELS_EMAIL_PASSWORD")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("“”")]),t._v(" "),v("td",[t._v("SMTP server connection password. Optional.")])]),t._v(" "),v("tr",[v("td",[t._v("GRAFANA_ENABLED")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("Enable Grafana integration for KuberLogic operator. Optional.")])]),t._v(" "),v("tr",[v("td",[t._v("GRAFANA_ENDPOINT")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("“”")]),t._v(" "),v("td",[t._v("Grafana URL. Optional.")])]),t._v(" "),v("tr",[v("td",[t._v("GRAFANA_LOGIN")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("“”")]),t._v(" "),v("td",[t._v("Grafana admin username. Optional.")])]),t._v(" "),v("tr",[v("td",[t._v("GRAFANA_PASSWORD")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("“”")]),t._v(" "),v("td",[t._v("Grafana admin password. Optional.")])]),t._v(" "),v("tr",[v("td",[t._v("GRAFANA_DEFAULT_DATASOURCE_ENDPOINT")]),t._v(" "),v("td",[t._v("“”")]),t._v(" "),v("td",[t._v("Prometheus URL to configure as a Grafana main datasource. Optional.")]),t._v(" "),v("td")])])]),t._v(" "),v("h2",{attrs:{id:"apiserver"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#apiserver","aria-hidden":"true"}},[t._v("#")]),t._v(" apiserver")]),t._v(" "),v("p",[t._v("KuberLogic provides a first class REST API to manage services, backup configurations and more.")]),t._v(" "),v("h3",{attrs:{id:"apiserver-configuration"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#apiserver-configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Apiserver configuration")]),t._v(" "),v("p",[t._v("In order to integrate smoothly into KuberLogic, "),v("code",[t._v("apiserver")]),t._v(" needs to be configured correctly. It is configured via the environment variables:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("name")]),t._v(" "),v("th",[t._v("type")]),t._v(" "),v("th",[t._v("default")]),t._v(" "),v("th",[t._v("description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("KUBERLOGIC_BIND_HOST")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("0.0.0.0")]),t._v(" "),v("td",[t._v("A host to listen on. Required")])]),t._v(" "),v("tr",[v("td",[t._v("KUBERLOGIC_HTTP_BIND_PORT")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("8081")]),t._v(" "),v("td",[t._v("A port to listen on. Required")])]),t._v(" "),v("tr",[v("td",[t._v("KUBERLOGIC_AUTH_PROVIDER")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("“”")]),t._v(" "),v("td",[t._v("Authentication provider for the REST interface. Supported: “keycloak”")])]),t._v(" "),v("tr",[v("td",[t._v("KUBERLOGIC_AUTH_KEYCLOAK_CLIENT_ID")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("“”")]),t._v(" "),v("td",[t._v("Keycloak client ID for “keycloak” authentication provider. Optional.")])]),t._v(" "),v("tr",[v("td",[t._v("KUBERLOGIC_AUTH_KEYCLOAK_CLIENT_SECRET")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("“”")]),t._v(" "),v("td",[t._v("Keycloak client secret. Optional.")])]),t._v(" "),v("tr",[v("td",[t._v("KUBERLOGIC_AUTH_KEYCLOAK_REALM_NAME")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("“”")]),t._v(" "),v("td",[t._v("Keycloak realm name. Optional.")])]),t._v(" "),v("tr",[v("td",[t._v("KUBERLOGIC_AUTH_KEYCLOAK_URL")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("“”")]),t._v(" "),v("td",[t._v("Keycloak URL. Optional.")])]),t._v(" "),v("tr",[v("td",[t._v("KUBERLOGIC_KUBECONFIG_PATH")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("“/root/.kube/config")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("”")]),t._v(" "),v("td",[t._v("Absolute path to kubeconfig when started outside of Kubernetes cluster. Optional.")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("KUBERLOGIC_DEBUG_LOGS")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("Enable debug logging. Optional.")])]),t._v(" "),v("tr",[v("td",[t._v("SENTRY_DSN")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("“”")]),t._v(" "),v("td",[t._v("Sentry URL to report panics. Optional.")])]),t._v(" "),v("tr",[v("td",[t._v("POSTHOG_AP_KEY")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("“”")]),t._v(" "),v("td",[t._v("Posthog API key for statistics. Optional.")])]),t._v(" "),v("tr",[v("td",[t._v("KUBERLOGIC_CORS_ALLOWED_ORIGINS")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("“https://"),v("em",[t._v(";http://")]),t._v("”")]),t._v(" "),v("td",[v("code",[t._v(";")]),t._v(" separated list of CORS allowed origins. Optional.")])])])])])},[],!1,null,null,null);_.default=e.exports}}]);