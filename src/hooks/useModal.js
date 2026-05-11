import { useState, useCallback } from 'react';

/**
 * @param {boolean} [initialOpen=false]
 * @returns {[boolean, () => void, () => void]}
 */
export function useModal(initialOpen = false) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  return [isOpen, open, close];
}
