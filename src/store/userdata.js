import { create } from 'zustand'

const userData = create(set => ({
    authenticated : false,
    setAuthenticated:status=>set({authenticated:status}),

    userId:'',
    setuserId:id=>set({userId:id}),

    profile : {},
    setProfile:profile=>set((state)=>({profile:{...state.profile, ...profile}})),
}))

export default userData