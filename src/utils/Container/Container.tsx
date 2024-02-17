//@ts-nocheck
// v
"use client"
import React from 'react'

const Container = ({ children, className }: any) => {

    return (
        <div className={`max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-10 ${className}`}  >
            {children}
        </div>
    )
}

export default Container