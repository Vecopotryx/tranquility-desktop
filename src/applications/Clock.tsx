import { useEffect, useState } from 'react'

export const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000);
    }, []);

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // TODO: Add stopwatch and stuff

    return (
        <div style={{ left: "0", margin: "auto", right: "0", position: "absolute", textAlign: "center" }}>
            <h1>{time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            })}</h1>
            <p>
                {days[time.getDay()]}{" "}
                {months[time.getMonth()]}{" "}
                {time.getDate()}{" "}
                {time.getFullYear()}
            </p>
        </div>
    )
}

export default Clock;