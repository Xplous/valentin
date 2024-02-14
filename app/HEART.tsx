'use client'
import {Heart} from "lucide-react";
import {useEffect, useRef} from "react";
import {IMAGES} from "@/app/IMAGES";
import {useRouter} from "next/navigation";

export const HEART = () => {
    const ref = useRef(null)
    useEffect(() => {
        console.log(ref.current)
    }, []);
    const {push} = useRouter()
    const handleClick = () => {
        push('/page-2')
    }
    const handleClickNO = () => {
        push('/page-3')
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <IMAGES/>
            <div
                className="flex flex-col z-10 max-w-5xl w-full h-full items-center justify-between font-mono text-sm lg:flex space-y-2">
                <Heart width={'35%'} height={'35%'} fill='red' color='red'/>
                <h1 className='font-semibold text-2xl text-white bg-gray-500 p-3 rounded-[8px]'>Станешь моей валентинкой?</h1>
                <div className='flex flex-row justify-center space-x-5 w-full'>
                    <button
                        className='
                    h-[80px] w-[160px]
                    rounded-[8px] border
                    border-white bg-white
                    flex items-center
                    justify-center
                    font-medium text-2xl
                    hover:bg-green-600
                    hover:border-green-600
                    hover:text-white
                    transition-all
                    '
                        onClick={handleClick}
                    >
                        Да
                    </button>
                    <button
                        onClick={handleClickNO}
                        className='
                        h-[80px] w-[160px]
                        rounded-[8px] border
                        border-white bg-white
                        flex items-center
                        justify-center
                        font-medium text-2xl
                        hover:bg-red-600
                        hover:border-red-600
                        hover:text-white
                        transition-all
                        '
                        >
                        Нет
                    </button>
                </div>
            </div>
        </main>
    );
};