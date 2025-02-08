import  { useContext } from 'react';
import { HeartContext } from './HeartContext';

const Store = () => {
    const { count } = useContext(HeartContext);

    return (
        <div>
            <h1>Store Page</h1>
            <p>Items: {count}</p> 
        </div>
    );
};

export default Store;
