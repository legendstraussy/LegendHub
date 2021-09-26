const useScroll = () => (element, position = 0) => {
  if (element) {
    // TODO: reference useRef and change ref.current directly
    // eslint-disable-next-line no-param-reassign
    element.style.marginLeft = `${-position}px`;
    return true;
  }
  return false;
};

export default useScroll;
