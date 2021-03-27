import React, { useState } from 'react';
import InfoSection from '../components/InfoSection';
import { infoDataOne, infoDataTwo, infoDataThree } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Sidebar from '../components/Sidebar';

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Section />
        <InfoSection {...infoDataOne} />
        <InfoSection {...infoDataTwo} />
        <InfoSection {...infoDataThree} />
        </>
    );
}

export default Home;
