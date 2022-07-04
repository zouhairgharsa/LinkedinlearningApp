import { useRef, useEffect, useState } from 'react'


export const useMeasure = (data) => {
  const [measure, setMeasure] = useState([]);
  const containerRef = useRef();

  useEffect(() => {
    const m = [];
    data.forEach((item) =>
      item?.ref?.current?.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          m.push({ x, y, width, height });
          if (m.length === data.length) {
            return setMeasure(m);
          }
        }
      )
    );
  }, [data]);

  return { measure, containerRef }

}