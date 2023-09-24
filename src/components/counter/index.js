import { useState } from "react";
import "./style.css"
const Counter = ({ value, onIncrease, onDecrease, onDelete, onReset }) => {
    return (

        <div className="container">
            <h3> {value}</h3>
            <div className="Counter">
                <button onClick={onIncrease}>➕</button>
                <button onClick={onDecrease} disabled={value === 0}>➖</button>
                <button onClick={onDelete}>❌</button>
                <button onClick={onReset}>♻️</button>
            </div>
        </div>
    );
};

function Compo() {
    const [counters, setCounters] = useState([{ id: 1, value: 0 }]);

    const handleIncrease = (id) => {
        setCounters((prevCounters) =>
            prevCounters.map((counter) =>
                counter.id === id ? { ...counter, value: counter.value + 1 } : counter
            )
        );
    };

    const handleDecrease = (id) => {
        setCounters((prevCounters) =>
            prevCounters.map((counter) =>
                counter.id === id ? { ...counter, value: counter.value - 1 } : counter
            )
        );
    };

    const handleDelete = (id) => {
        setCounters((prevCounters) =>
            prevCounters.filter((counter) => counter.id !== id)
        );
    };

    const handleReset = (id) => {
        setCounters((prevCounters) =>
            prevCounters.map((counter) =>
                counter.id === id ? { ...counter, value: 0 } : counter
            )
        );
    };

    const handleAddCounter = () => {
        setCounters((prevCounters) => [
            ...prevCounters,
            { id: Date.now(), value: 0 },
        ]);
    };

    const handleResetAll = () => {
        setCounters((prevCounters) =>
            prevCounters.map((counter) => ({ ...counter, value: 0 }))
        );
    };
    const calculateTotal = () => {
        let total = 0;
        counters.forEach(counter => {
            total += counter.value;
        });
        return total;
    };
    return (
        <div >
            <div className="card">
                <button onClick={handleAddCounter}>Add</button>
                <button onClick={handleResetAll}>Reset</button>

            </div>
            <div className="total">
                <h3>Total: {calculateTotal()}</h3>
            </div>
            {counters.map((counter) => (
                <Counter
                    key={counter.id}
                    value={counter.value}
                    onIncrease={() => handleIncrease(counter.id)}
                    onDecrease={() => handleDecrease(counter.id)}
                    onDelete={() => handleDelete(counter.id)}
                    onReset={() => handleReset(counter.id)}
                />
            ))}
          
        </div>
    

    );
}

export default Compo;
