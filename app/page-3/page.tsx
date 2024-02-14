'use client'
import React from 'react';
import {useRouter} from "next/navigation";
import Image from "next/image";

function Page() {
    const {push} = useRouter()
    const handleClick = () => {
        push('/')
    }
    return (
        <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
            <div className='w-[400px] h-[400px] bg-white rounded-[8px] p-4 space-y-3'>
                <h1 className='text-xl font-medium border-b border-gray-300'>Тебя съел пудж💔</h1>
                <h1 className='text-xl font-medium'>Не путёвая ты растяпа...</h1>
                <Image className='h-[200px] w-[400px] m-auto' src={'/pudge1.jpg'} width={400} height={400} alt={'pudge'}/>
                <button
                    className='text-xs font-bold border border-violet-300 bg-violet-300 hover:border-violet-600 hover:bg-violet-600 transition-all rounded-[8px] p-5'
                    onClick={handleClick}
                >
                    Вернуться обратно
                </button>
            </div>
        </div>
    );
}

export default Page;