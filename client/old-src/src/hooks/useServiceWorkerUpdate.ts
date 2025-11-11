import { useRegisterSW } from 'virtual:pwa-register/react';
import { useState } from 'react';

export const useServiceWorkerUpdate = () => {
  const [updateAvailable, setUpdateAvailable] = useState(false);

  const {
    needRefresh,
    updateServiceWorker,
  } = useRegisterSW({
    onNeedRefresh() {
      setUpdateAvailable(true);
    },
    onOfflineReady() {
      console.log('PWA ready to work offline');
    },
  });

  const reloadPage = () => {
    updateServiceWorker(true);
    window.location.reload();
  };

  return { updateAvailable, reloadPage };
};
