import { useState, useEffect } from 'react';
import { router } from '../routes';

const getCurrentPath = () => {
  const fullpath = window.location.href;
  const currentPath = router.flatRoutes.find((route) => fullpath.includes(route.fullPath));
  return currentPath?.path as string;
}

export function useGetCurrentPath() {
  const [path, setPath] = useState("/");

  useEffect(() => {
    setPath(getCurrentPath())
  }, []);

  return path;
}

