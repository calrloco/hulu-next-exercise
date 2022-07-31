import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {BadgeCheckIcon, CollectionIcon, HomeIcon, LightBulbIcon, SearchIcon, UserIcon} from "@heroicons/react/solid";

function Header(){
    return (
        <header className="flex md:justify-between flex-col md:flex-row items-center">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="Home" Icon={HomeIcon} />
                <HeaderItem title="trending" Icon={LightBulbIcon} />
                <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
                <HeaderItem title="Collection" Icon={CollectionIcon} />
                <HeaderItem title="account" Icon={UserIcon} />
            </div>
           <Image className="object-contain" src="https://links.papareact.com/ua6" width={200} height={100} />
        </header>
    )
}
export default Header