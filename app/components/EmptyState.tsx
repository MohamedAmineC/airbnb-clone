"use client"

import { useRouter } from 'next/navigation'
import React from 'react'
import Heading from './Heading';
import Button from './Button';

interface EmptyStateProps{
    title?: string,
    subTitle?: string,
    showReset?: boolean,
    errorReset?: boolean
}

const EmptyState:React.FC<EmptyStateProps> = ({
    title = "No exact matches",
    subTitle = "Try changing or removing some of your filters",
    showReset,
    errorReset
}) => {
    const router = useRouter();

  return (
    <div className='h-[60vh] flex flex-col gap-2 justify-center items-center'>
       <Heading 
       title={title}
       subtitle={subTitle}
       center
       /> 
       <div className='w-48 mt-4'>
        {showReset && (
            <Button 
            outline
            label='Remove all filters'
            onClick={() => router.push('/')}
            />
        )}
        {
          errorReset && (
            <Button 
            outline
            label='Try again maybe ?'
            onClick={() => router.refresh()}
            />
          )
        }
       </div>
    </div>
  )
}

export default EmptyState