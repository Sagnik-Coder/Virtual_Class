import Head from "next/head";
import { useRouter } from "next/router";
import assignment from "../array/assignment";
import Back from "../components/back";
import Header from "../components/Header";

function subject() {
	const router = useRouter();
	const { subject } = router.query;
	return (
			<div>
					<Head>
							<title>{subject}</title>
					</Head>
					<Header/>
					<div  className="flex flex-1 flex-col min-h-screen bg-slate-800 p-8 ">
						<Back/>
						<div className="flex w-48 flex-row justify-center items-center mx-16 
						bg-slate-700 rounded-lg">
							<h1 className="text-lg text-slate-100 font-semibold ml-8 mr-3 my-3">Subject:</h1>
							<h1 className="text-lg text-slate-100 font-semibold mr-8 my-3">{subject}</h1>
						</div>
						<div className="flex flex-col mx-16 bg-slate-700 rounded-lg pb-8 mt-5">
							<h1 className="text-lg text-slate-100 font-semibold ml-8 mr-3 my-3">Assignment</h1>
							{assignment[subject].map((item, i) => {
								return(
								<div className="flex flex-row justify-between items-center my-1 mx-8 border-b border-slate-500">
									<h3 className="p-2 px-5 text-slate-200 font-semibold">{item["assin"]}</h3>
									<h3 className="p-2 px-5 text-slate-200 font-semibold">{item["marks"]} Marks</h3>
								</div>
								)
							})}
							
							
						</div>
					</div>
			</div>
	);
}

export default subject;
