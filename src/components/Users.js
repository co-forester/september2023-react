import React from 'react';

import {User} from "./User";

const Users = () => {
    const users = [
        {id: 1, name: 'sergio', age: 51, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSFHHSEtaaubGSioLCOqiuxmPHJy1JUf4vB7l42TBRFoSFd0bfFlXzk4ai9B_20bCg1qE&usqp=CAU'},
        {id: 2, name: 'marina', age: 34},
        {id: 3, name: 'natali', age: 24},
        {id: 4, name: 'victor', age: 19},
        {id: 5, name: 'andre', age: 47},
        {id: 6, name: 'margo', age: 21},
        {id: 7, name: 'vitalii', age: 33},
        {id: 8, name: 'nona', age: 21}
    ]
    return (
        <div>
            {users.map(value => <User key={value.id} item = {value}/>)}
        </div>
    );
};

export {Users};