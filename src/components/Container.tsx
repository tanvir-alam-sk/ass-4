import React,{ ReactNode} from 'react'
// import dynamic from 'next/dynamic';
// const ClientOnlyComponent = dynamic(() => import('../components/ClientOnlyComponent'), { ssr: false });
interface ContainerProps {
    children: ReactNode 
  }
export default function Container({children}:any) {
  return (
    <div className='max-w-[1400px] mx-auto'>{children}</div>
  )
}
