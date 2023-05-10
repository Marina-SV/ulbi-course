import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const defaultElement = document.body;
    const { children, element = defaultElement } = props;

    return createPortal(children, element);
};
