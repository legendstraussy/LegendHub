import React from 'react';

const useCloneComponent = () => (component, props) => React.cloneElement(component, { ...props });

export default useCloneComponent;
