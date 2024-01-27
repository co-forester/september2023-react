import React from 'react';

const User = ({item}) => {
    // console.log (props);
    // let {name, age} = props;
    const {name, age, image} = item;
    return (
        <div>
           <div>name: {name}</div>
           <div>age: {age}</div>
           <img src={image} alt={name}/>
        </div>
    );
};

export {User};