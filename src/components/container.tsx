
import React from 'react'

interface Children {
    children: React.ReactNode
}

function Container({ children }: Children) {
  return (
    <div className="max-w-[1300px] mx-auto px-5 md:px-0">
        { children }
    </div>
  )
}

export default Container