import { RiDownloadLine } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { useLoaderData } from "react-router";
import { Link } from "react-router";

import { RiseLoader } from 'react-spinners';
function HomeApp({app, ind}) {
    const apps = useLoaderData()
    
    
   return (
    <Link to={`/appdetails/${app.id}`}  className='bg-white p-5 shadow-md rounded space-y-4 cursor-pointer' key={ind} >

                            <img  className='mx-auto rounded' width={180} height={200} src={app.image} alt={app.title} />
                            <h3 className='text-[16px] text-[#001931] font-medium text-wrap'>{app.title}</h3>
                            <div className="flex justify-between">
                                <div className="flex gap-1 bg-green-100 p-2 rounded text-green-500">
                                    <RiDownloadLine />
                                    <p className='flex items-center'>{app.downloads}</p>
                                </div>
                                <div className="flex gap-1 bg-yellow-100 p-2 rounded text-yellow-500">
                                    <CiStar className=' my-auto' />
                                    <p>{app.ratingAvg}</p>
                                </div>
                            </div>

                        </Link>

   )

                       
    
  
}

export default HomeApp
