import requests from "../utils/requests";
import {useRouter} from "next/router";


function Nav() {
    const router = useRouter()
    return (
        <nav className={'relative my-5'}>
            <div className="text-white sm:px-20 text-2xl justify-between scrollbar-hide whitespace-nowrap flex space-x-10 sm:space-x-20 overflow-x-scroll px-5">
                {
                    Object.entries(requests).map(([key, {title,url}])=> (
                         <h2
                             onClick={()=>router.push(`/?genre=${key}`)}
                             key={key}
                             className='text-sm transition-all cursor-pointer transform hover:scale-125 active:text-green-500' >{title}</h2>
                    ))
                }
            </div>
            <div className='absolute top-0 right-0 w-1/12 bg-gradient-to-l from-[#06202a] to-g h-10'></div>
        </nav>
    )
}

export default Nav