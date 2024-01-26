import React from 'react';

const getAllService = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')

    return res.json();
};

export default getAllService;