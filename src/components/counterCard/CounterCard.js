import "./Style.css"
export const CounterCard = ({ value, onIncrease, onDecrease, onDelete, onReset }) => {
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
