import '../styles/globals.css'
import { AppProps } from 'next/app'
import {useUserChanged} from '../hooks/useUserChanged'
import {Provider} from 'react-redux'
import {store} from '../app/store'

function MyApp({ Component, pageProps }: AppProps) {
  const {} = useUserChanged()
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
