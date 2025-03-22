'use client'

import { FullLoaders } from '@/components/Loaders'
import { ApiContext } from '@/context/apiContext'
import { AppContext } from '@/context/appContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css';

const page = ({ params }) => {
   const resolvedParams = React.use(params);
    const { id } =  resolvedParams

    const {change_password_inputs, changePasswordInputs,
      handlePasswordSubmit, password_err, loader, setLoader} = useContext(AppContext)

      const{ToastContainer, Bounce} = useContext(ApiContext)

      useEffect(()=>{ 
           setLoader(false);             
         }, [])

        
      if (loader) return <FullLoaders/>
  return (
    <>
     <div className='mb-5'>
        <div className="fixed top-0 bottom-0 right-0 left-0 sm:left-[unset] h-[100vw] sm:rotate-90 pointer-events-none select-none -z-10">
        <div className="relative w-screen h-[208px] overflow-hidden">
            <div className="flex flex-1 flex-col whitespace-nowrap motion-safe:animate-marquee">
                <div className="text-[144px] font-black font-display leading-[0.775] text-gray-200">INLEOINLEOINLEOINLEOINLEOINLEOINLEOINLEOINLEOINLEOINLEOINLEOINLEOINLEOINLEOINLEO</div>
            </div>
                <div className="flex flex-1 flex-col whitespace-nowrap motion-safe:animate-marquee-reverse">
                    <div className="text-[144px] font-black font-display leading-[0.78] text-gray-200 -translate-x-[360px]">INLEOINLEOINLEOINLEOINLEOINLEOINLEOINLEOINLEOINLEOINLEOINLEOINLEOINLEOINLEOINLEO</div>
                </div>
        </div>
      </div>
        <Link href='/'>
        <svg xmlns="http://www.w3.org/2000/svg" height="70" width="150" viewBox="0 0 835 190" className="logo footer__logo p-4">
              <g fill="none">
                <g className="logo__icon">
                  <path fill='#e31337' d="M157.272625,107.263942 C157.998992,107.263942 158.45262,108.051463 158.088736,108.68075 L111.33839,189.528945 C111.169808,189.820485 110.858795,190 110.522279,190 L81.9443812,190 C81.2180145,190 80.764386,189.212478 81.1282705,188.583191 L127.878616,107.734996 C128.047199,107.443456 128.358211,107.263942 128.694727,107.263942 L157.272625,107.263942 Z M129.477721,84.0901367 C129.141205,84.0901367 128.830192,83.9106218 128.66161,83.6190818 L81.1282705,1.41680884 C80.764386,0.787521511 81.2180145,0 81.9443812,0 L110.522279,0 C110.858795,0 111.169808,0.179514873 111.33839,0.471054898 L158.87173,82.6733278 C159.235614,83.3026152 158.781986,84.0901367 158.055619,84.0901367 L129.477721,84.0901367 Z"></path>
                  <path fill= '#e31337' d="M135.128406 1.41635199C134.76385.787064228 135.218932 0 135.947343 0L164.565951 0C164.903712 0 165.215845.179714185 165.384888.47151174L219.873006 94.5275799C220.042331 94.8198642 220.042331 95.1801358 219.873006 95.4724201L165.384888 189.528488C165.215845 189.820286 164.903712 190 164.565951 190L135.947343 190C135.218932 190 134.76385 189.212936 135.128406 188.583648L189.342845 95 135.128406 1.41635199zM111.870216 94.5240823C112.042446 94.816752 112.043313 95.1785591 111.872487 95.4720377L57.1252257 189.528106C56.7599958 190.155572 55.8478414 190.157723 55.4796094 189.531986L.129783614 95.4759177C-.0424457704 95.183248-.0433125021 94.8214409.127512727 94.5279623L54.8747743.471894257C55.2400042-.15557243 56.1521586-.157723129 56.5203906.468014185L111.870216 94.5240823z"></path>
                </g>
                <path fillRule="nonzero" d="M371.507904,36 L403.108995,36 L403.108995,152.798507 L371.507904,152.798507 L371.507904,107.24709 L326.601091,107.24709 L326.601091,152.798507 L295,152.798507 L295,36 L326.601091,36 L326.601091,78.2143177 L371.507904,78.2143177 L371.507904,36 Z M469.637608,36 L500.822895,36 L500.822895,152.798507 L469.637608,152.798507 L469.637608,36 Z M602.709958,152.798507 L556.956412,37.5016951 L556.956412,36 L591.229977,36 L619.846741,115.25613 L648.463504,36 L682.73707,36 L682.73707,37.5016951 L636.983523,152.798507 L602.709958,152.798507 Z M769.500274,124.099446 L834.505467,124.099446 L834.505467,152.798507 L737.831077,152.798507 L737.831077,36 L833.338707,36 L833.338707,64.6990618 L769.500274,64.6990618 L769.500274,80.8839979 L810.003509,80.8839979 L810.003509,107.5808 L769.500274,107.5808 L769.500274,124.099446 Z" className="logo__text dark:fill-white fill-black"></path>
              </g>
            </svg>
        </Link>
      

      <div className='w-[70%] mx-auto'>
      
     <p className='font-sans text-[44px] font-[600] text-[#212529] dark:text-white'> Change Password </p>
    <form className="max-w-sm my-8" onSubmit={(e)=>{ e.preventDefault(); handlePasswordSubmit(id)}}>
      <div className='mb-5'>
      

  <div className="mb-5">   
    <label htmlFor="old_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Old password</label>
    <input onChange={changePasswordInputs}  name='old_password' value= {change_password_inputs.old_password} type="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E31337] focus:border-[#E31337] block w-full p-2.5" required />
  </div>
     {password_err && <p className='text-xs font-medium text-red-600'>{password_err.password_length}</p>}
  <div className="mb-5">   
    <label htmlFor="new_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your New password</label>
    <input onChange={changePasswordInputs} name='new_password' value= {change_password_inputs.new_password} type="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E31337] focus:border-[#E31337] block w-full p-2.5" required />
  </div>
  {password_err && <p className='text-xs font-medium text-red-600'>{password_err.password_err}</p>}
  <div className="mb-5">
    <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
    <input onChange={changePasswordInputs} name='confirm_password' value={change_password_inputs.confirm_password} type="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#E31337] focus:border-[#E31337] block w-full p-2.5" required />
  </div>
  
      </div>
        <button 
        type="submit" className=" dark:hover:border-[#E31337] py-2 px-5 border hover:bg-[#EEEEEE]  font-medium rounded-full text-sm text-center transition-all duration-200 flex gap-5 items-center justify-center">
        <Image src='https://inleo.io/build/_assets/hive-AIJIRDAR.svg' width={30} height={30} alt='logo'/>
          <p className='font-sans font-[600] text-[15px] dark:text-white dark:hover:text-gray-900'>Change Hive Password</p>    
      </button>
      </form>
      <Link 
    href={`/users/${id}`}
    onClick={()=> setLoader(true)}
      className="focus:ring-2 border border-[#E31337] focus:outline-none focus:ring-[#E31337] px-9 py-2 hover:bg-[#FEF1EE] font-medium rounded-full text-sm text-center transition-all duration-200 text-[#F44727]">Return to profile page</Link>
    </div>
    </div>

    
    <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
          />
    
    </>
  )
}

export default page

