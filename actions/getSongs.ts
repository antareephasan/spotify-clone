"use server";

import { useSupabaseClient } from "@supabase/auth-helpers-react";

const getSongs = async () => {
    try {
        const {
            data,
            error
        } = await useSupabaseClient()
            .from('songs')
            .select('*')

    } catch (error) {
        console.log(error);
    }
}