import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import * as gtag from '../utils/gtag';
import '../styles/global.css';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const toastMessage = decodeURI(
    (router.query?.['show-toast'] as string) || '',
  );

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    if (toastMessage) {
      toast(toastMessage);
    }
  }, [toastMessage]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5.0, minimum-scale=0.86"
        />
      </Head>
      <Component {...pageProps} />
      <ToastContainer theme="dark" />
    </>
  );
};

export default App;
