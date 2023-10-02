import { useState } from "react";
import "./style.css"
import { CounterCard } from "../counterCard/CounterCard";

function Counter() {
    const [counters, setCounters] = useState([{ id: 1, value: 0 }]);
 
    const handleIncrease = (counterId) => {
        setCounters((prevCounters) =>
            prevCounters.map((counter) =>
                counter.id === counterId ? { ...counter, value: counter.value + 1 } : counter
            )
        );
        // setCounters(3);
        // setCounters((prev) => {
        //     return `${prev.value}`
        // });
    };

    const handleDecrease = (counterId) => {
        setCounters(prevCounters =>
            prevCounters.map(prevCounter =>
                prevCounter.id === counterId ? { ...prevCounter, value: prevCounter.value - 1 } : prevCounter
            )
        );
    };

    const handleDelete = (counterId) => {
        setCounters((prevCounters) =>
            prevCounters.filter(({ id, ...restProps }) => id !== counterId)
        );
    };

    const handleReset = (counterId) => {
        setCounters((prevCounters) =>
            prevCounters.map((counter) =>
                counter.id === counterId ? { ...counter, value: 0 } : counter
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
                <CounterCard 
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
export default Counter;


