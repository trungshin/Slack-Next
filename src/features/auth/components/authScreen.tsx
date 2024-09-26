"use client"
import { useState } from "react"
import { AuthFlow } from "../types"
import { SignUpCard } from "./signUpCard"
import { SignInCard } from "./signInCard"

export const AuthScreen = () => {
    const [auth, setAuth] = useState<AuthFlow>("signIn")

    return (
        <div className="h-full flex items-center justify-center bg-[#5c3b58]">
            <div className="md:h-auto md:w-[420px]">
                {auth === "signIn" ? <SignInCard setAuth={setAuth}/> : <SignUpCard setAuth={setAuth}/>}
            </div>
        </div>
    );
}