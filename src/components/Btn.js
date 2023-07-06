// function Btn() {

//     const clickHandler = () => console.log("clicked");

//     return (
//         <button onClick={clickHandler}>
//             Click!
//         </button>
//     );
// }

// export default Btn;

// function Btn() {

//     const mouseHandler = () => console.log("mouse");

//     return (
//         <button onMouseOver={mouseHandler}>
//             Hover!
//         </button>
//     );
// }

// export default Btn;

import React, {useState} from 'react';

function Btn() {

    // This makes Btn stateful rather than stateless
    // useState is a hook
    const[mode, setMode] = useState(false);
    // mode is a state value init as false
    // setMode can modify mode, but can't happen directly in component, must happen on an event or such

    const darkMode = <h1>Dark Mode is On</h1>;
    const lightMode = <h1>Light Mode is On</h1>;

    function handleClick() {
        if (mode) {
            setMode(false);
        } else {
            setMode(true);
        }
    }

    return (

        <div>  
            {mode ? darkMode : lightMode}
            <button onClick={handleClick}>
                Click me!
            </button>
        </div>
    );

}

export default Btn;

