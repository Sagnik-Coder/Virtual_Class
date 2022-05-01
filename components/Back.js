import { ChevronDoubleLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";

function Back() {
  return (
    <Link href={'/'}>
        <button className='flex w-10 h-10 text-slate-300 justify-center items-center p-2 mx-2 mb-8 bg-slate-700 rounded-full hover:bg-slate-700'>
            <ChevronDoubleLeftIcon width={20} height={20} />
        </button>
    </Link>
  );
}

export default Back;
