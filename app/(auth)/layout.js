import StarfieldBackground from '@/components/background'
import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <>
    <div className='flex justify-center pt-40'>
        {children}
      
    </div>
    <div>
      <StarfieldBackground/>
    </div>
    </>

  )
}

export default AuthLayout
