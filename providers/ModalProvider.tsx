"use client";

import { useEffect, useState } from "react";
import AuthModal from "@/components/AuthModal";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    // Cheat for avoiding hydration error while running modals on SSR
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
           <AuthModal />
        </>
    )
}

export default ModalProvider;