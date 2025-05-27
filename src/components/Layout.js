import React, { useEffect } from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const Layout = ({ nav = false, children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            window.location.href = '/admin/'
          })
        }
      })
    }
  }, [])

  return (
    <>
      <div className="flex min-h-screen flex-col bg-white dark:bg-black ">
        {nav && <Header />}
        <main className="wrapper">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
