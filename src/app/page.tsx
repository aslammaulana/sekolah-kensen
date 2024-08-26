import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
      <div className="bg-[#f6f6f6] overflow-y-auto h-screen">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto">
            <div className='rounded-lg'>
              
              <div className='text-[#000000] pt-[8px] pr-[40px] pb-[0px] pl-[25px] flex grid-cols-2 justify-start items-center text-[12px] font-semibold gap-5'>
                <div className="w-[40%] bg-[#f6f6f6]">
                  <div className="text-[38px] font-bold">
                    <p className='text-[#1c738e] text-[47px]'>
                      AI-Powered
                    </p>
                    <p className='text-[#198754]'>
                      Lung Disease Screening & Telemedicine
                    </p>
                  </div>
                  <p className='text-[16px] font-normal mt-4 '>
                    System to help patients and medical personnel in early screening for lung disease with AI technology in the form of self-screening and telemedicine quickly, easy and cheap.
                  </p>
                </div>
                <div className='w-[40%] flex justify-center items-center'>
                  <Image
                    src="/images/cut/CutHero.jpg"
                    width={180} height={180}
                    alt='Logo'
                    className='w-[80%] items-center'
                  />
                </div>

                <div className='w-[20%] border-1 border-[#ffffffe5] text-[#292929] space-y-6 '>
                  <div className="flex justify-start items-center gap-4">
                    <p className='text-[#29292981]'>01</p>
                    <p className='text-[16px] font-semibold '>Introducing LUDESC</p>
                  </div>
                  <div className="flex justify-start items-center py-10 border-l-[2px] border-[#29292949]"></div>
                  <div className="flex justify-start items-center  gap-4">
                    <p className='text-[#29292981]'>02</p>
                    <p className='text-[16px] font-semibold '> Our Vision</p>
                  </div>
                  <div className="flex justify-start items-center  gap-4">
                    <p className='text-[#29292981]'>03</p>
                    <p className='text-[16px] font-semibold '> Products</p>
                  </div>
                  <div className="flex justify-start items-center  gap-4">
                    <p className='text-[#29292981]'>04</p>
                    <p className='text-[16px] font-semibold '> Products</p>
                  </div>
                  <div className="flex justify-start items-center  gap-4">
                    <p className='text-[#29292981]'>05</p>
                    <p className='text-[16px] font-semibold '>Team</p>
                  </div>
                </div>
              </div>

              <div className='text-[#000000] pt-[8px] pr-[40px] pb-[0px] pl-[25px] flex grid-cols-2 justify-start items-center text-[12px] font-semibold gap-5'>

                <div className="w-[40%] bg-[#f6f6f6]">
                  <div className="bg-[#d37272] py-[50px]"></div>
                </div>

                <div className='w-[40%]'>
                  <div className="bg-[#bd3636] py-[50px]"></div>
                </div>

                <div className='w-[20%] border-1 border-[#ffffffe5] text-[#292929]'>
                  <div className="bg-[#6e1313] py-[50px]"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
