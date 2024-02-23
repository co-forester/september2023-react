

const Car = ({car}) => {
    const {id, brand, year, price} = car;
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
        </div>
    );
};

export {Car};