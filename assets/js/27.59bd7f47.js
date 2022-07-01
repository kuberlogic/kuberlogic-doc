(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{364:function(e,t,a){"use strict";a.r(t);var r=a(34),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/getting-started/#welcome-to-kuberlogic"}},[e._v("Welcome to KuberLogic")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/getting-started/#installation"}},[e._v("Installation")])],1)]),e._v(" "),a("h2",{attrs:{id:"welcome-to-kuberlogic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#welcome-to-kuberlogic","aria-hidden":"true"}},[e._v("#")]),e._v(" Welcome to KuberLogic")]),e._v(" "),a("p",[e._v("KuberLogic is an open-source solution that helps to deliver any single-tenant application (one stack per customer) to multiple users as-a-cloud service. KuberLogic allows software vendors to accelerate their journey to Software-as-a-Service (SaaS) with minimal modifications to the application.")]),e._v(" "),a("p",[e._v("Follow the "),a("RouterLink",{attrs:{to:"/getting-started/#installation"}},[e._v("Installation guide")]),e._v(" to set up your environment and install KuberLogic.")],1),e._v(" "),a("h4",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[e._v("#")]),e._v(" Features")]),e._v(" "),a("ul",[a("li",[e._v("Application instance (Tenant) orchestration (list/provision/delete)")]),e._v(" "),a("li",[e._v("Custom domain (subdomain) support")]),e._v(" "),a("li",[e._v("Application (Tenant) isolation")]),e._v(" "),a("li",[e._v("SSL support")]),e._v(" "),a("li",[e._v("RESTful API and CLI for service management (bare minimum)")])]),e._v(" "),a("h4",{attrs:{id:"coming-soon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coming-soon","aria-hidden":"true"}},[e._v("#")]),e._v(" Coming soon")]),e._v(" "),a("ul",[a("li",[e._v("Integration with billing provider (Stripe)")]),e._v(" "),a("li",[e._v("Scheduled and Instant backups (Velero)")]),e._v(" "),a("li",[e._v("Application instance updates "),a("a",{attrs:{href:"https://kuberlogic.clearflask.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("More details here →"),a("OutboundLink")],1)])]),e._v(" "),a("h4",{attrs:{id:"why-use-kuberlogic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-use-kuberlogic","aria-hidden":"true"}},[e._v("#")]),e._v(" Why use KuberLogic?")]),e._v(" "),a("p",[e._v("The ultimate goal of KuberLogic is to provide an easily accessible service to turn any containerized application into a cloud-native SaaS solution.")]),e._v(" "),a("p",[e._v("KuberLogic:")]),e._v(" "),a("ul",[a("li",[e._v("Provides a straightforward and reliable way to deploy and manage application instances (Tenants) while achieving maximum resource utilization and standardization.")]),e._v(" "),a("li",[e._v("Simplify migration to multi-tenancy using industry-standard containers & K8s and allows rapid migration to SaaS with minimal application modification.")]),e._v(" "),a("li",[e._v("Gives independence and frees from vendor lock, as KuberLogic is open source and based on Kubernetes to provide a consistent platform anywhere.")])]),e._v(" "),a("h4",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("p",[e._v("Kubernetes cluster 1.20-1.23")]),e._v(" "),a("ul",[a("li",[e._v("StorageClass configured as a default")]),e._v(" "),a("li",[e._v("IngressClass configured as a default")])]),e._v(" "),a("h4",{attrs:{id:"getting-involved"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-involved","aria-hidden":"true"}},[e._v("#")]),e._v(" Getting involved")]),e._v(" "),a("p",[e._v("Feel free to open an issue if you need any help.")]),e._v(" "),a("p",[e._v("You can see the roadmap/announcements and leave your feedback "),a("a",{attrs:{href:"https://kuberlogic.clearflask.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("You can also reach out to us at "),a("a",{attrs:{href:"mailto:info@kuberlogic.com"}},[e._v("info@kuberlogic.com")]),e._v(" or join our "),a("a",{attrs:{href:"https://join.slack.com/t/kuberlogic/shared_invite/zt-x845lggh-lne0taYmwLFgQ6XZEiTJoA",target:"_blank",rel:"noopener noreferrer"}},[e._v("Slack community"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("h4",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[e._v("Kubernetes cluster 1.20-1.23\n"),a("ul",[a("li",[e._v("StorageClass configured as a default")]),e._v(" "),a("li",[e._v("IngressClass configured as a default")])])])]),e._v(" "),a("h4",{attrs:{id:"_1-clone-the-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-clone-the-repository","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. Clone the repository")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/kuberlogic/kuberlogic\n")])])]),a("h4",{attrs:{id:"_2-add-an-application-you-want-to-provide-as-saas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-add-an-application-you-want-to-provide-as-saas","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. Add an application you want to provide as SaaS")]),e._v(" "),a("p",[e._v("Paste the contents of your application's "),a("code",[e._v("docker-compose.yml")]),e._v(" into "),a("code",[e._v("modules/dynamic-operator/config/manager/docker-compose.yaml")])]),e._v(" "),a("h4",{attrs:{id:"_3-secure-api-server-set-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-secure-api-server-set-token","aria-hidden":"true"}},[e._v("#")]),e._v(" 3. Secure API-server (set Token)")]),e._v(" "),a("p",[e._v("You can set your own auth token for the API-server in file "),a("code",[e._v("modules/dynamic-operator/config/manager/kustomization.yaml")])]),e._v(" "),a("h4",{attrs:{id:"_4-deploy-cert-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-deploy-cert-manager","aria-hidden":"true"}},[e._v("#")]),e._v(" 4. Deploy cert-manager")]),e._v(" "),a("p",[e._v("Cert-manager is used by many KuberLogic components to provide certificates for admission webhooks.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" kuberlogic/modules/dynamic-operator\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" deploy-certmanager\n")])])]),a("h4",{attrs:{id:"_5-deploy-the-kuberlogic-operator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-deploy-the-kuberlogic-operator","aria-hidden":"true"}},[e._v("#")]),e._v(" 5. Deploy the KuberLogic operator")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" deploy\n")])])]),a("h4",{attrs:{id:"_6-setting-ingress-controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-setting-ingress-controller","aria-hidden":"true"}},[e._v("#")]),e._v(" 6. Setting Ingress controller")]),e._v(" "),a("p",[e._v("Run the following command to apply kong ingress controller:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("kubectl apply -f https://bit.ly/k4k8s\n")])])]),a("p",[e._v("Set the Ingress class by default. You should change “kong” (e.g. nginx) into the following command if you use another Ingress controller:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("kubectl annotate ingressclass kong ingressclass.kubernetes.io/is-default-class"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true\n")])])]),a("p",[e._v("*You should change “kong” (e.g. nginx) into the following command if you use another Ingress controller.")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/setting-ingress-controller/"}},[e._v("Read more →")])],1),e._v(" "),a("h4",{attrs:{id:"_7-install-kuberlogic-comand-line-interface-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-install-kuberlogic-comand-line-interface-cli","aria-hidden":"true"}},[e._v("#")]),e._v(" 7. Install KuberLogic comand line interface (CLI)")]),e._v(" "),a("p",[e._v("Run the following commands to install KuberLogic CLI interface:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("https://github.com/kuberlogic/kuberlogic/releases/download/latest/kuberlogic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("https://github.com/kuberlogic/kuberlogic/releases/download/latest/kuberlogic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" +x kuberlogic\n")])])]),a("p",[e._v("Specify hostname in "),a("code",[e._v("~/.config/kuberlogic/config.yaml")]),e._v("where hostname is the kls-api-server external-IP.")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/cli/"}},[e._v("Read more →")])],1),e._v(" "),a("h4",{attrs:{id:"_8-configuring-tls-certificate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-configuring-tls-certificate","aria-hidden":"true"}},[e._v("#")]),e._v(" 8. Configuring TLS certificate")]),e._v(" "),a("p",[e._v("Kuberlogic allows you to secure application access with TLS certificate. Follow the steps below to configure this integration.")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/configuring/"}},[e._v("Read more →")])],1),e._v(" "),a("h4",{attrs:{id:"_9-configuring-dns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-configuring-dns","aria-hidden":"true"}},[e._v("#")]),e._v(" 9. Configuring DNS")]),e._v(" "),a("p",[e._v("Add DNS records for KuberLogic endpoints so they are pointing to KuberLogic Ingress IP. Alternatively, if you are evaluating KuberLogic, you may want to use /etc/hosts file to provide the access locally.")])])},[],!1,null,null,null);t.default=s.exports}}]);