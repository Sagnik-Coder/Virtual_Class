import Head from "next/head";
import Image from "next/image";
import details from "../array/details";
import Back from "../components/back";
import Header from "../components/Header";

function Profile() {
  return (
	<div>
		<Head>
			<title>Profile</title>
		</Head>
		<Header/>
		<div className="flex flex-row bg-slate-800 min-h-screen p-8 py-16">
				<Back/>
				<div className="flex justify-center items-center w-56 h-56 rounded-full 
				bg-slate-700 border-8 border-slate-500 p-2 mx-20">
					<Image src={'/../public/pp.jpg'} width={224} height={224} className="rounded-full"/>
				</div>
				<div className="flex-1 flex-wrap p-5 flex-col mx-20 bg-slate-700 rounded-md font-semibold text-slate-300">
					<h1 className="text-center text-2xl text-slate-100 font-semibold mb-5">Personal Details</h1>
					<div className="flex justify-between items-center flex-row mb-3">
						<h3 className="mx-5 text-lg text-slate-300">Name</h3>
						<h3 className="mx-5 text-lg text-slate-300">{details.name}</h3>
					</div>
					<div className="flex justify-between items-center flex-row mb-3">
						<h3 className="mx-5 text-lg text-slate-300">Class</h3>
						<h3 className="mx-5 text-lg text-slate-300">{details.class}</h3>
					</div>
					<div className="flex justify-between items-center flex-row mb-3">
						<h3 className="mx-5 text-lg text-slate-300">Section</h3>
						<h3 className="mx-5 text-lg text-slate-300">{details.section}</h3>
					</div>
					<div className="flex justify-between items-center flex-row mb-3">
						<h3 className="mx-5 text-lg text-slate-300">School</h3>
						<h3 className="mx-5 text-lg text-slate-300">{details.school}</h3>
					</div>
					<div className="flex justify-between items-center flex-row mb-3">
						<h3 className="mx-5 text-lg text-slate-300">Email</h3>
						<h3 className="mx-5 text-lg text-slate-300">{details.email}</h3>
					</div>
					<div className="flex justify-between items-center flex-row mb-3">
						<h3 className="mx-5 text-lg text-slate-300">Contact No.</h3>
						<h3 className="mx-5 text-lg text-slate-300">{details.contact}</h3>
					</div>
					<div className="flex justify-between items-center flex-row mb-3">
						<h3 className="mx-5 text-lg text-slate-300">Date of Birth</h3>
						<h3 className="mx-5 text-lg text-slate-300">{details.dob}</h3>
					</div>
					<div className="flex justify-between items-center flex-row mb-3">
						<h3 className="mx-5 text-lg text-slate-300">Age (As of Now.)</h3>
						<h3 className="mx-5 text-lg text-slate-300">{details.age} + years</h3>
					</div>
					<div className="flex justify-between items-center flex-row mb-3">
						<h3 className="mx-5 text-lg text-slate-300">Gender</h3>
						<h3 className="mx-5 text-lg text-slate-300">{details.gender}</h3>
					</div>
					<h1 className="text-center text-2xl text-slate-100 font-semibold mb-5">Gurdians Details</h1>
					<div className="flex justify-between items-center flex-row mb-3">
						<h3 className="mx-5 text-lg text-slate-300">Father's Name</h3>
						<h3 className="mx-5 text-lg text-slate-300">{details.fathers_name}</h3>
					</div>
					<div className="flex justify-between items-center flex-row mb-3">
						<h3 className="mx-5 text-lg text-slate-300">Mother's Name</h3>
						<h3 className="mx-5 text-lg text-slate-300">{details.mothers_name}</h3>
					</div>
					<div className="flex justify-between items-center flex-row mb-3">
						<h3 className="mx-5 text-lg text-slate-300">Guardian's Contact No. 1</h3>
						<h3 className="mx-5 text-lg text-slate-300">{details.g_contact}</h3>
					</div>
					<div className="flex justify-between items-center flex-row mb-3">
						<h3 className="mx-5 text-lg text-slate-300">Guardian's Contact No. 2</h3>
						<h3 className="mx-5 text-lg text-slate-300">{details.g_contact2}</h3>
					</div>
					<div className="flex justify-between items-center flex-row mb-3">
						<h3 className="mx-5 text-lg text-slate-300">Guardian's Email</h3>
						<h3 className="mx-5 text-lg text-slate-300">{details.g_email}</h3>
					</div>
				</div>
		</div>
  </div>
  )
}

export default Profile;
