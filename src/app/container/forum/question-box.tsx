import clsxm from '@/lib/clsxm';
import React from 'react';
import Typography from '@/components/Typography';

interface QuestionBoxProps {
    children: string;  
}

export default function QuestionBox({ children }: QuestionBoxProps) {
    return (
        <div className={clsxm("drop-shadow rounded-[10px] border-1 border-[#D8D8D8]",
            "p-4 bg-white w-[80%] m-auto"
        )}>
            <Typography className='text-[36px]'>{children}</Typography>
        </div>
    )
}