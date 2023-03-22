import React, { useState, useEffect } from 'react';

// const LearnHooks = () => {
//     const [count, setCount] = useState(0); // в круглые скобки передается initial values
//     const [step, setStep] = useState(1);
//     const handlerClick = () => {
//         setCount(count+1);
//     }
//     const handlerInput = ({target:{value}}) => {
//         setStep(Number(value));
//     }
//     return (
//         <div>
//             <h2>Count: {count}</h2>
//             <button onClick={handlerClick}>Add</button>
//             <p>
//                 <input type='number' value={step} onChange={handlerInput} />
//             </p>
//         </div>
//     );
// }

// export default LearnHooks;


// const LearnHooks = () => {
//     const [coords, setCoords] = useState({
//         x: 0,
//         y: 0,
//     });
//     const [count, setCount] = useState(0);
//     const handlerMove = (event) => {
//         setCoords({
//             x: event.clientX,
//             y: event.clientY,
//         })
//     }
//     const handlerClick = () => {
//         setCount(prevCount => prevCount+1);
//     }
//     return (
//         <div style={{height:'90vh'}} onMouseMove={handlerMove} onClick={handlerClick}>
//             <p>x:{coords.x}</p>
//             <p>y:{coords.y}</p>
//             <p>count:{count}</p>
//         </div>
//     );
// }

// export default LearnHooks;


const LearnHooks = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(10);
    const handlerStep = ({target:{value}}) => {setStep(Number(value))}

    useEffect(() => {
        const handlerClick = () => {
            setCount(prevCount => prevCount+step);
        }
        document.body.addEventListener('click', handlerClick);
        return () => {
            document.body.removeEventListener('click', handlerClick); 
        }
    }, [step])
    
    return (
        <div>
            <p>count:{count}</p>
            <input type='number' value={step} onChange={handlerStep} />
        </div>
    );
}

export default LearnHooks;
