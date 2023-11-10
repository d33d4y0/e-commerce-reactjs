"use client"
import useAppRouter from '@router/appRouter';
import React from 'react'

const SignInButton = () => {
    const router = useAppRouter();

    return (
        <button className="w-[456px] px-10 py-2.5 bg-neutral-900 rounded-lg justify-center items-center gap-2 inline-flex" onClick={() => router.push('/')}>
            <div className="text-center text-white text-base font-medium font-['Inter'] leading-7">Sign in</div>
        </button>
    )
}

export default SignInButton