
import { useLoaderData } from 'react-router'


import { useState } from 'react';

import HomeApp from './HomeApp';


function HomepageApps() {
    const [leading, setLeading] = useState(true)


    const apps = useLoaderData();
    return (
        <div className='bg-[#62738205]'>
            <div className='pt-15   w-[1140px]  mx-auto '>
            <div className='text-center space-y-5 mb-15'>
                <h3 className='text-5xl font-bold'>Trending Apps</h3>
                <p className='text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            
            
            <div className='grid grid-cols-4 gap-10'>
                {
                    
                         
                    apps.map((app, ind) => 
                        <HomeApp app={app} ind={ind} key={ind}></HomeApp>
                    )
                    
                }
                
            </div>
        </div>
        </div>
    )
}

export default HomepageApps
