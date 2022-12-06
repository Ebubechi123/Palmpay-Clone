import React,{useState,createContext,useContext} from 'react';

const AccountBalanceContext = createContext();


export const AccountBalanceProvider=({children})=>{
    const [accountBalance,setAccountBalance] = useState(50000)
    return(
        <AccountBalanceContext.Provider value={[accountBalance,setAccountBalance]}>
            {children}
        </AccountBalanceContext.Provider>
    )
}



export const AccountBalance =()=>{
    return useContext(AccountBalanceContext)
}