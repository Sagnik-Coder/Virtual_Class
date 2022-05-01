import Link from "next/link";
import { useRouter } from "next/router";
import array from "../array/data";

function HomeScreen() {
    const router = useRouter();
    const { subject } = router.query;
  return (
        <div className="flex flex-wrap flex-col bg-slate-800 py-8 w-screen min-h-screen">
            <h1 className="text-2xl text-slate-100 font-semibold mx-8 mb-5">Classes</h1>
            <div className="flex flex-wrap flex-row"> 
            {array.classInfo.map((classInfo) => {
                return (
                    <div>
                        <h1 className="mx-9 mt-4 text-gray-400 font-semibold">Time - {classInfo.time}</h1>
                        <div className="w-64 h-auto p-2 mt-2 px-5 mx-8 mb-5 bg-slate-700 rounded-md 
                        text-neutral-200 cursor-pointer hover:bg-slate-600 ease-in-out duration-100">
                                <h1 className="font-semibold text-lg">{classInfo.classname}</h1>
                                <p className="font-semibold text-slate-400">{classInfo.description}</p>
                                <p className="font-semibold text-slate-400 mb-1">{classInfo.teacher}</p>
                        </div>
                    </div>
                )
            })}
           </div>
           <h1 className="text-2xl text-slate-100 font-semibold mt-10 mx-8 mb-5">Assignments</h1>
              <div className="flex flex-wrap flex-row mx-8">
                {array.subjects.map((subject) => {return (
                        <Link href={"/[subject]"} as={`/${subject}`}>
                            <div href={'/'} className="flex justify-center items-center bg-slate-700 rounded-md p-4 mx-2
                        text-slate-300 font-semibold cursor-pointer hover:bg-slate-600">
                                <h1>{subject}</h1>
                            </div>
                        </Link>
                )})}
            </div>
        </div>    
    );
}

export default HomeScreen;
