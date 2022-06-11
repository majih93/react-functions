import { useState, useEffect, useRef } from "react";

const padNumber = (num: number) => {
  return String(num).padStart(2, "0");
};

interface IProps {
  min: number;
}

// 분에 대한 값이 전달되는 경우를 가정해서 구현

function Timer(props: IProps) {
  const tempMin = props.min ? Math.floor(props.min) : 0;

  let userInputMin = props.min;

  const initialTime = useRef(tempMin * 60);
  const interval = useRef<NodeJS.Timeout | null>(null);

  const [min, setMin] = useState(padNumber(tempMin));
  const [sec, setSec] = useState("00");

  // interval 을 통해서 전달된 분값을 초로 전환하고, 1초마다 1씩 감소시키는 형태로 구현
  useEffect(() => {
    interval.current = setInterval(() => {
      initialTime.current -= 1;
      setSec(padNumber(initialTime.current % 60));
      setMin(padNumber(Math.floor(initialTime.current / 60)));
    }, 1000);

    // component unmount 시에 interval clear
    return () => clearInterval(interval.current as NodeJS.Timeout);
  }, []);

  // 타이머를 의미하는 ref 값이 0이 되었을 때 interval clear
  useEffect(() => {
    if (initialTime.current <= 0) {
      clearInterval(interval.current as NodeJS.Timeout);
    }
  }, [sec]);

  // Reset에 대한 useEffect 함수
  // reset 여부를 관리하는 조건에 따라서 실행되도록 구현
  // useEffect(() => {
  //   if (reset에 대한 조건) {
  //     if (initialTime.current <= 0) {
  //       initialTime.current = userInputMin * 60;
  //       interval.current = setInterval(() => {
  //         initialTime.current -= 1;
  //         setSec(padNumber(initialTime.current % 60));
  //         setMin(padNumber(parseInt(initialTime.current / 60)));
  //       }, 1000);
  //     } else {
  //       initialTime.current = userInputMin * 60;

  //   }
  // }, [필요한 dependency]);

  return (
    <div>
      {min} : {sec}
    </div>
  );
}

export default Timer;
