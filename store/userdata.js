import { create } from 'zustand'

const userData = create(set => ({
    data: {},
    setData:data=>set({data:data}),

    userID:'',
    setID:id=>{set({userID:id})}
}))

const userInteraction = create(set=>({
    orderStatus:'',
    setStatus:status=>set({orderStatus:status})
}))

export { userData , userInteraction}