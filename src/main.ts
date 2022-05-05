import App from './App.svelte'
const documentApp = document.getElementById('app')
const app = new App({
  target: documentApp ? documentApp : document.body
})

export default app
