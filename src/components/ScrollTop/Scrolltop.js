import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ trigger }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        const handleScrollToTop = () => {
            window.scrollTo(0, 0);
        };

        handleScrollToTop();

        // Add event listener to the trigger element
        if (trigger) {
            const triggerElement = document.getElementById(trigger);
            if (triggerElement) {
                triggerElement.addEventListener('click', handleScrollToTop);
            }

            // Cleanup the event listener
            return () => {
                if (triggerElement) {
                    triggerElement.removeEventListener('click', handleScrollToTop);
                }
            };
        }
    }, [pathname, trigger]);

    return null;
};

export default ScrollToTop;
