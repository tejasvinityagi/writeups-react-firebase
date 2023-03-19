import '@/styles/globals.css'
import { WriteupsProvider } from "context"

 function App({ Component, pageProps }) {
  return (
  <WriteupsProvider>
      <Component {...pageProps} /> 
  </WriteupsProvider>
  )
}

export default App
