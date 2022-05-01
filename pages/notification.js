import { XIcon } from "@heroicons/react/outline";
import Head from "next/head";
import notifcation from "../array/notifications";
import Back from "../components/back";
import Header from "../components/Header";

function Notification() {
 return (
    <div>
        <Head>
            <title>Notification</title>
        </Head>
        <Header/>
        <div className="flex justify-start items-start flex-col min-h-screen bg-slate-800 p-10">
            <Back/>
            
            {notifcation.map((e,index) => {return(
                <div className="flex flex-row justify-center items-center">
                    <button className="flex flex-row bg-slate-600 justify-center items-center mb-5
                    cursor-pointer mr-2 rounded-full hover:bg-red-500">   
                        <XIcon width={20} height={20} className=" m-2 text-slate-100 cursor-pointer"/>
                    </button>
                    <div className=" bg-slate-600 p-3 rounded-md mb-5">
                        <h1 className=" text-slate-300 font-semibold">{e}</h1>
                    </div>
                </div>)})}
            
        </div>
    </div>
    );
}

export default Notification;
