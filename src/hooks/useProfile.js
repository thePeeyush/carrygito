'use client';

import userData from "@/store/userdata";
import { getUser } from "@/utility/authentication";
import { getProfile } from "@/utility/database";
import { useEffect } from "react";

const useProfile = ( profileData ) => {

    const { setProfile, setAuthenticated, authenticated, profile } = userData((s) => s);

    useEffect(() => {
        setUserProfile();
    }, [authenticated])

    const setUserProfile = async () => {
        const user = await getUser();
        if (user.status === 'success') {
            setAuthenticated(true)
            setProfile({
                name: user.data.name,
                phone: user.data.phone
            })
        }

        const profile = await getProfile();
        console.log(profile);
        
        if(profile.status === 'success'){
            setProfile({
                address: profile.data?.address?.address_line_1,
                area:  profile.data?.address?.address_line_2,
                plans: profile.data?.activePlans,
                orders: profile.data?.orders
            });
        }
        if(profileData){
            setProfile(profileData)
        }
    }
}

export default useProfile