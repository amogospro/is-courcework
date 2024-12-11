export const clickOutside = (node: any) => {
  const handleClick: (this: Window, ev: MouseEvent) => any = (e) => {
    if (!node.contains(e.target)) {
      node.dispatchEvent(new CustomEvent('outsideClick'));
    }
  };

  window.addEventListener('click', handleClick);

  return {
    destroy() {
      window.removeEventListener('click', handleClick);
    }
  };
};
