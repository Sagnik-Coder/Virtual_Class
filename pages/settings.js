import Head from 'next/head';
import details from '../array/details';
import Back from '../components/back';
import Header from '../components/Header';

function settings() {
  return (
      <div>
          <Head>
              <title>Settings</title>
          </Head>
          <Header/>
            <div className="flex flex-1 flex-col h-screen bg-slate-800 p-8 ">
                <Back/>
                <div className='flex flex-row  justify-center items-center m-2 p-2 rounded-lg'>
                    <h1 className=' text-slate-100 text-lg font-semibold mx-5'>Name: </h1>
                    <input type={'text'} placeholder='Name' className='p-2 h-10 px-5 rounded-md 
                text-slate-200 bg-slate-600 outline-none placeholder:text-slate-400 mx-5'/>
                </div>
            </div>
      </div>
  );
}

export default settings;
