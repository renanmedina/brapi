import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import * as gtag from '../utils/gtag';
import '../styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const toastMessage = router.query?.['show-toast'];

  // useEffect(() => {
  //   const handleRouteChange = (url: URL) => {
  //     gtag.pageview(url);
  //   };
  //   router.events.on('routeChangeComplete', handleRouteChange);
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, [router.events]);

  useEffect(() => {
    if (toastMessage) {
      toast(toastMessage);
    }
  }, [toastMessage]);

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer theme="dark" />
    </>
  );
};

export default App;
