import React, { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout(props: PropsWithChildren) {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <div className='flex-1 overflow-auto flex flex-col items-center'>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;