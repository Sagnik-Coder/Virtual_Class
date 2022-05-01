import {
	BellIcon,
	CogIcon,
	HomeIcon,
	LogoutIcon,
	SearchIcon, 
	UserIcon,
} from '@heroicons/react/outline'
import Link from 'next/link';

function Header() {
  return (
    <div className="flex bg-slate-900 items-center justify-between drop-shadow-lg">
        <h1 className="text-white text-2xl px-8 font-medium">Virtual Class</h1>
        <div className="flex items-center bg-slate-700 rounded-full px-3 text-zinc-200 m-5">
			<SearchIcon width={20} height={20} />
			<input 
			placeholder="Search..." 
			className="p-2 px-2 bg-transparent outline-none 
			text-zinc-200 font-medium"/>
        </div>
		<div className="flex items-center px-2 text-zinc-200 m-5">
			<Link href={'/'}>
				<button className='flex justify-center items-center p-2 mx-2 bg-slate-800 rounded-full hover:bg-slate-700'>
					<HomeIcon width={25} height={25} />
				</button>
			</Link>
			<Link href={'./Profile'}>
				<button className='flex justify-center items-center p-2 mx-2 bg-slate-800 rounded-full hover:bg-slate-700'>
					<UserIcon width={25} height={25} />
				</button>
			</Link>
			<Link href={'./notification'}>
				<button className='flex justify-center items-center p-2 mx-2 bg-slate-800 rounded-full hover:bg-slate-700'>
					<BellIcon width={25} height={25} />
				</button>
			</Link>
			<Link href={'./settings'}>
				<button className='flex justify-center items-center p-2 mx-2 bg-slate-800 rounded-full hover:bg-slate-700'>
					<CogIcon width={25} height={25} />
				</button>
			</Link>
			<Link href={'/'}>
				<button className='flex justify-center items-center p-2 mx-2 bg-slate-800 rounded-full hover:bg-red-500'>
					<LogoutIcon width={25} height={25} />
				</button>
			</Link>
		</div>
    </div>
  );
}

export default Header;
