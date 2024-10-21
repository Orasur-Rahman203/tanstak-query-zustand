
//zustand section 
import { create } from 'zustand'

export const useCounterStore = create((set) =>({
    count:0,

increase: ()=>set((state)=>({count:state.count + 1})),

increaseAsync:async ()=>{
await new Promise ((resolve)=>setTimeout(resolve, 1000))
set((state)=>({count:state.count + 1}))
},

decrease: ()=>set((state)=>({count:state.count - 1})),

decreaseAsync: async ()=>{
    await new Promise ((resolve)=>setTimeout(resolve, 1500))
    set((state)=>({count:state.count - 1}))
},

remove: ()=>set({count: 0})

}));

