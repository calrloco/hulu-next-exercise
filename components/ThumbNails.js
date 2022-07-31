import Image from "next/image";
import {ThumbUpIcon} from "@heroicons/react/solid";
import {forwardRef} from "react";

const ThumbNail = forwardRef( ({result},ref) =>
    (
        <div ref={ref} className="group cursor-pointer transform">
           <Image layout="responsive" src={`https://image.tmdb.org/t/p/original${result.backdrop_path || result.poster_path}`} width={1920} height={1080} />
           <div className="">
               <p className='truncate'>{result.overview}</p>
               <h2 className={'mt-1 text-xl transition-all group-hover:tracking-wide duration-100 ease-in-out group-hover:font-bold'}>{result.title ?? result.original_name}</h2>
               <div className="flex items-center opacity-0 group-hover:opacity-100  transition-all">
                   {result.release_date || result.first_air_date } &bull;
                   <ThumbUpIcon className="h-4 mx-2" />
                   {result.vote_count}
               </div>
           </div>
        </div>
    ))
export default ThumbNail