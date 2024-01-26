import React from 'react';
import getAllService from '../lib/getAllService';

const Service = async() => {
    const services = await getAllService();
    
    return (
        <div>
            <h1 className="mt-6 text-3xl fond-bold">This is service page</h1>
            {
                services.map(service => <h3 className="text-xl mt-6" key={service.id}>{service.title}</h3>)
            }
            
        </div>
    );
};

export default Service;