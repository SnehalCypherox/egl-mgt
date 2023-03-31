import React, { useState, createContext, useContext } from 'react';

export const UserContext = createContext({});

export default function CountContext({children}) {
    const useValue = () => useState({});
    return (
        <UserContext.Provider value={useValue()}>{children}</UserContext.Provider>
    )
}

// export default modelContext = () => {
//     

    

//     const useGlobalState = () => {
//         const value = useContext(Context);
//         if (value === null) throw new Error('Please add GlobalStateProvider');
//         return value;
//     };

//     const GlobalStateProvider = ({ children }) => (
//         <Context.Provider value={useValue()}>{children}</Context.Provider>
//     );
// }

// export const modelBody = {
//     dark: {
//         color: white,
//         backGround: black,
//         color: 'white',
//         background: 'black',
//     },
//     light: {
//         color: black,
//         background: white
//     }
// }



// export const Counter = ({ name }) => {
//     const [state, setState] = useGlobalState();
//     const count = state[name] || 0;
//     const increment = () => {
//         setState({ ...state, [name]: count + 1 });
//     };
//     const decrement = () => {
//         (count <= 0) ? setState(0) : setState({ ...state, [name]: count - 1 })
//     };
//     return (
//         <div className="bedroom-detail" style={{ marginRight: '20px' }}>
//             <RemoveCircleOutlineRoundedIcon sx={{ fontSize: '18px', margin: '10px' }} onClick={decrement} />
//             <Typography variant='span' component='span' className="numbers-of-room">{count}</Typography>
//             <AddCircleOutlineRoundedIcon sx={{ fontSize: '18px', margin: '10px' }} onClick={increment} />
//         </div>
//     );
// };

