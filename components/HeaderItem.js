function HeaderItem({Icon,title}){
   return(
       <div className="cursor-pointer grid place-items-center group py-5 hover:text-white">
          <Icon className="h-7 mb-1 group-hover:animate-bounce transition-all" />
           <p className="uppercase opacity-0 transition-all group-hover:opacity-100 text-xs tracking-widest">{title}</p>
       </div>
   )
}

export default HeaderItem