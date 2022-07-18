import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '../node_modules/bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


import App from './App.vue'
import router from './router'


const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)
    /*pinia.use((contex) => {
        //console.log(contex.store.$id)
        const storeId = contex.store.$id;

        const serilizer = {
            serialize: JSON.stringify,
            deserialize: JSON.parse
        }

        //sync store form localstorage
        const fromStorage = serilizer.deserialize(window.localStorage.getItem(storeId))

        console.log(fromStorage);

        if (fromStorage) {
            contex.store.$patch(fromStorage)
        }
        //listen for changes and update locastroage;
        contex.store.$subscribe((mutation, state) => {
            console.log(mutation);
            window.localStorage.setItem(storeId, serilizer.serialize(state))


        })
    })*/

//const installPersistedStatePlugin = createPersistedStatePlugin()
//pinia.use((context) => installPersistedStatePlugin(context))

const app = createApp(App)
app.use(pinia)

//app.use(pinia)
app.use(router)

app.mount('#app')