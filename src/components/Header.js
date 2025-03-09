import { useState, useEffect } from 'react';

export default function Header() {

    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const newOpacity = 1.5 - currentScrollY / 100;
            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className='header' style={{opacity: opacity}}>
            <h1>My Website</h1>
        </header>
    );
}