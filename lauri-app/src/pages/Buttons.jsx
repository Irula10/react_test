import React from 'react';
import { useState } from 'react';

export const Buttons = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    function countClics() {
        setCount(count + (1 * count2));
    }

    function countClics2() {
        setCount2(count2 + 0.1);
    }

    function resetCount() {
        setCount(0);
        setCount2(0);
    }

    return (
        <div>
            <button onClick={countClics}>Coins: {count}. Click to get more</button>
            <button onClick={countClics2}>Coin multipalyer: {count2}. Click to get more</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
}
