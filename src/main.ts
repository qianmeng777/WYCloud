import { createSSRApp } from "vue";
import musiccomponent from './pages/find/component/musiccomponent.vue';
// import BlogComponent from './BlogComponent.vue';
// import AudiobookComponent from './AudiobookComponent.vue';
// import LiveComponent from './LiveComponent.vue';
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,musiccomponent
  };
}
