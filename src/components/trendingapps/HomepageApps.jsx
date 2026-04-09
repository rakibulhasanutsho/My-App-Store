import React from 'react'
import { useLoaderData } from 'react-router'
import HomeApp from './HomeApp';
import { RiDownloadLine } from "react-icons/ri";
import { CiStar } from "react-icons/ci";

function HomepageApps() {
    const apps = useLoaderData();
    return (
        <div className='mt-15'>
            <div className='text-center space-y-5'>
                <h3 className='text-5xl font-bold'>Trending Apps</h3>
                <p className='text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-3'>
                {
                    apps.map((app, ind) => <div key={ind} >





                        <div >

                            <img width={180} height={200} src={app.image} alt={app.title} />
                            <h3>{app.title}</h3>
                            <div className="flex justify-between">
                                <div className="flex gap-1">
                                    <RiDownloadLine />
                                    <p>{app.downloads}</p>
                                </div>
                                <div className="flex gap-1">
                                    <CiStar />
                                    <p>{app.ratingAvg}</p>
                                </div>
                            </div>

                        </div>

                    </div>)
                }
            </div>
        </div>
    )
}

export default HomepageApps
