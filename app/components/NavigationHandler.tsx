'use client';

import { useEffect } from 'react';
import { handleInitialScroll } from '../lib/navigation';

export function NavigationHandler() {
  useEffect(() => {
    handleInitialScroll();

    window.addEventListener('popstate', handleInitialScroll);

    return () => {
      window.removeEventListener('popstate', handleInitialScroll);
    };
  }, []);

  return null;
}
