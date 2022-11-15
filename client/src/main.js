import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

// Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(router).use(vuetify).mount("#app");
