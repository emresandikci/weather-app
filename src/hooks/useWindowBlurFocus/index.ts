import { useEffect } from 'react';

export default function useWindowBlurFocus(onBlur: () => void, onFocus: () => void) {
  useEffect(() => {
    window.addEventListener('blur', onBlur);
    window.addEventListener('focus', onFocus);

    return () => {
      window.removeEventListener('blur', onBlur);
      window.removeEventListener('focus', onFocus);
    };
  }, [onBlur, onFocus]);
}
