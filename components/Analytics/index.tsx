'use client';

import { useEffect } from 'react';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { useRouter } from 'next/router';
import * as gtag from '~/utils/gtag';

export const Analytics = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router?.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router?.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router?.events]);

  return <VercelAnalytics />;
};
