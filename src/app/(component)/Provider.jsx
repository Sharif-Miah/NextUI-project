"use client"
import { NextUIProvider } from '@nextui-org/react'
import React from 'react'

export default function Provider({children}) {
  return (
    <div>
      <NextUIProvider>{children}</NextUIProvider>
    </div>
  )
}
