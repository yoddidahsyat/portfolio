import { useCallback, useRef, useState } from 'react';

type UseCopyReturn = {
  copied: boolean;
  copy: (text: string) => Promise<boolean>;
  reset: () => void;
};

const useCopy = (
  timeout = 2000,
  onCopy?: (text: string) => void
): UseCopyReturn => {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);

  const clearTimer = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const fallbackCopy = (text: string) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand('copy');
    } finally {
      document.body.removeChild(textarea);
    }
  };

  const copy = useCallback(
    async (text: string) => {
      if (!text) return false;

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          // Fallback for older browsers
          fallbackCopy(text);
        }

        clearTimer();
        setCopied(true);
        onCopy?.(text);
        timerRef.current = window.setTimeout(() => setCopied(false), timeout);
        return true;
      } catch (err) {
        return false;
      }
    },
    [onCopy, timeout]
  );

  const reset = useCallback(() => {
    clearTimer();
    setCopied(false);
  }, []);

  return { copied, copy, reset };
};

export default useCopy;
