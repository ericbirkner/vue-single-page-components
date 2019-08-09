import NewsHolder from "../components/NewsHolder"
import Noticia from '../components/Noticia.vue'

const routes= [
      { path: '/', component: NewsHolder },
      { path: '/noticias', component: NewsHolder },
      { path: '/noticias/page/:page', component: NewsHolder },
      { path: '/noticia/:id', name: 'noticia', component: Noticia }
    ]
export default routes;
