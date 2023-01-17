import Mexp from 'math-expression-evaluator';
import { useState, useRef } from 'react'

export const Calculator = () => {
    const inputRef = useRef<any>();
    const [result, setResult] = useState("");
    const [current, setCurrent] = useState("");

    const update = (value: string) => {
        setCurrent(value);

        if (value === "") {
            setResult("");
        } else {
            try {
                // Mexp 2.0.0 currently causes TypeScript to show syntax errors when building
                // and has been downgraded to 1.4.0
                setResult(Mexp.eval(value));
            } catch { }
        }
    }

    return (
        <div onClick={() => inputRef.current.focus()}>
            <input style={{ width: "100%", padding: "0.5em" }} onChange={e => update(e.target.value)} value={current} ref={inputRef} placeholder="Enter mathematical expression" autoFocus/>
            <h2 style={{ textAlign: "center" }}>= {result}</h2>
        </div>
    )
}

export default Calculator;