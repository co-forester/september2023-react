import React from 'react';

const User = ({item}) => {
    // console.log (props);
    // let {name, age} = props;
    const {name} = item;
    return (
        <div>
           <div>name: {name}</div>
        </div>
    );
};

export {User};