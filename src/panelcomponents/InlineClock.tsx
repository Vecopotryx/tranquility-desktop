import { useEffect, useState } from "react";

export const InlineClock = () => {
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

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <h2 style={{ display: "inline" }}>
      {time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })}
    </h2>

    //   <Dropdown text={months[time.getMonth()] + " " + time.getDate() + " " +
    //     time.toLocaleTimeString([], {
    //       hour: "2-digit",
    //       minute: "2-digit",
    //     })}>
    //     <MenubarList>
    //       <h2 style={{ display: "inline" }}>{time.toLocaleTimeString([], {
    //         hour: "2-digit",
    //         minute: "2-digit",
    //         second: "2-digit",
    //       })}</h2>
    //       <br />
    //       <h3 style={{ display: "inline" }}>{days[time.getDay()]}{" "}</h3>
    //       <br />
    //       <p>
    //         {months[time.getMonth()]}{" "}
    //         {time.getDate()}{" "}
    //         {time.getFullYear()}
    //       </p>
    //     </MenubarList>
    //   </Dropdown>
  );
};
