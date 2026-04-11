import { useLoaderData } from "react-router"
import { FaSearch } from "react-icons/fa"
import HomeApp from "../../components/trendingapps/HomeApp"


function Apps() {
  const apps = useLoaderData()
  
  return (
    <div className="bg-[#bg-[#62738205] ">
      <div className="mx-auto w-[1140px] ">
        <div className="text-center space-y-4 mb-10">
          <h2 className='text-5xl font-bold'>Our All Applications</h2>
          <p className='text-xl text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>
        <div className="flex justify-between mb-10">
          <h4 className=" text-xl font-semibold">({apps.length}) Apps Found</h4>
          <div className="join">
            <div>
              <label className="input validator join-item">

                <FaSearch></FaSearch>

                <input type="email" placeholder=" Search Apps " required />
              </label>
              <div className="validator-hint hidden">Enter valid email address</div>
            </div>
            <button className="btn btn-neutral join-item">Search</button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-10">
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

export default Apps
