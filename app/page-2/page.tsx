'use client'
import React from 'react';
import {useRouter} from "next/navigation";

function Page() {
    const {push} = useRouter()
    const handleClick = () => {
        push('/')
    }
    return (
        <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
            <div className='w-[400px] h-[400px] bg-white rounded-[8px] p-4 space-y-3'>
                <h1 className='text-xl font-medium border-b border-gray-300'>Привет, спасибо что согласилась быть моей валентинкой❤️</h1>
                <p className='text-xl font-medium'>{'Я очень старался, надеюсь тебе понравилось то что ты увидела :>'}</p>
                <p className='text-xl font-medium'> Спасибо тебе за всё что ты для меня делаешь)
                <br/> Ты делаешь меня счастливее.
                </p>
                <p>Удачи, твой Н.</p>
                <button
                    className='text-xs font-bold border border-violet-300 bg-violet-300 hover:border-violet-600 hover:bg-violet-600 transition-all rounded-[8px] p-5'
                    onClick={handleClick}
                >
                    Вернуться обратно</button>
            </div>
        </div>
    );
}

export default Page;