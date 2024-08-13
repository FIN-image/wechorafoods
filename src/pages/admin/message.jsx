import React from 'react';
import AdminSideNav from '../../components/admin/adminSideNav';
import AdminNavbar from '../../components/admin/adminNavbar';
import { NavFunctions } from '../../components/Dashboard/navFunctions';


function Message() {
    const { openSideNav, handleMenuClick } = NavFunctions();

  return (
    <>
        <div className='flex max-w-screen'>
            <div className={openSideNav ? 'md:block' : 'md:block hidden basis-[10%]'}>
                <AdminSideNav openSideNav={openSideNav} handleMenuClick={handleMenuClick}/>
            </div>
            <div className='basis-[90%] rounded-l-xl bg-gray-200 mt-0 md:mt-2'>
                <AdminNavbar openSideNav={openSideNav} handleMenuClick={handleMenuClick}/>
                <div className='md:mt-10 my-5 rounded-md  md:w-2/3 m-4'>Message</div>
            </div>
        </div>
    </>
  )
}

export default Message;