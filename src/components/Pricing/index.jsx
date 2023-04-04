import React, { useState } from 'react';
import Cart from "../Cart";

const Pricing = ({ isMonthly }) => {
    
    const formules = [{
        type: 'Basic',
        priceAnnually: 99.99,
        priceMonthly: 19.99,
        storage: 500 + ' GB',
        usersAllowed: 2,
        gbSend: 3
    },
    {
        type: 'Professional',
        priceAnnually: 199.99,
        priceMonthly: 24.99,
        storage: 1 + ' TB',
        usersAllowed: 5,
        gbSend: 10
    },
    {
        type: 'Master',
        priceAnnually: 299.99,
        priceMonthly: 39.99,
        storage: 2 + ' TB',
        usersAllowed: 10,
        gbSend: 20
    }]

    const [activeIndex, setActiveIndex] = useState(1);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };
    
    const handleMouseLeave = () => {
        setActiveIndex(1);
    };
    

    return (
        <>
            <ul className='main-ul'>
            {formules.map((formula, index) => (
                <Cart
                    key={index}
                    classActive={activeIndex === index}
                    type={formula.type}
                    price={ isMonthly ? formula.priceMonthly : formula.priceAnnually}
                    storage={formula.storage}
                    usersAllowed={formula.usersAllowed}
                    gbSend={formula.gbSend}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                />
            ))}
            </ul>
        </>
    )
}

export default Pricing;