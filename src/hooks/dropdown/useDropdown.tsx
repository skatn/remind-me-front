import { useEffect, useRef, useState } from 'react';

function useDropdown<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current !== null && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);

    return () => {
      document.removeEventListener('mousedown', onClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return { ref, isOpen, toggleDropdown };
}

export default useDropdown;
