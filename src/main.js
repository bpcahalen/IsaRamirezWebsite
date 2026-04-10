import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueYouTubeEmbed from 'vue-youtube-embed'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import{faBars, faFileLines, faLink, faRotate, faAsterisk, faCircleUp, faDownload, faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faCopyright} from '@fortawesome/free-regular-svg-icons';


library.add(faBars, faInstagram, faFileLines, faLink, faCircleUp, faAsterisk, faRotate, faDownload, faTriangleExclamation, faCopyright);


createApp(App)
.use(router)
.component('fa', FontAwesomeIcon)
.mount('#app');



