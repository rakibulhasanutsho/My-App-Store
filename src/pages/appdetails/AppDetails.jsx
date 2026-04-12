import { use } from "react"
import { FaDownload } from "react-icons/fa"
import { FaStar } from "react-icons/fa"
import { AiOutlineLike } from "react-icons/ai";
import { useContext} from "react";
import {AppContext} from "../../components/appcontext/AppContext";
import { useParams } from "react-router"
import RatingChart from "../../components/reatingchart/RatingChart";
const appsPromise = fetch('/data.json').then(res => res.json())

function AppDetails() {
    const {handleInstalled} = useContext(AppContext)

    const { id } = useParams()
    const apps = use(appsPromise)
    const expectedApps = apps.find((app, index) => app.id == id)

    const {
        title,
        image,
        companyName,
        description,
        size,
        reviews,
        ratingAvg,
        downloads,
        ratings
    } = expectedApps
    return (
        <div className="bg-[#62738215] min-h-screen w-full py-20">
            <div className="w-[1140px] mx-auto  space-y-5">
                <div className="flex gap-5 rounded ">
                    <div className=" bg-white p-5 flex items-center justify-center">
                        
                            <img className="w-[180px] h-[200px] rounded " src={image} alt="" />
                        
                    </div>
                    <div className="p-5 space-y-5">
                        <h3 className="text-3xl font-bold text-[#001931]">{title}</h3>
                        <p className="text-xl leading-7 text-[#627382]">Developed by: <span className=" text-[16px] font-semibold bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] bg-clip-text text-transparent"> {companyName} </span></p>
                        <hr class="border-t border-gray-300" />
                        <div className="flex gap-5">
                            <div className="space-y-3">
                                <FaDownload className="text-green-500" size={30}></FaDownload>
                                <p className="text-[16px] leading-6 text-[#001931]">Downloads</p>
                                <h2 className="text-4xl font-extrabold">{downloads}</h2>
                            </div>
                            <div className="space-y-3">
                                <FaStar className="text-[#FF8811]" size={30}></FaStar>
                                <p className="text-[16px] leading-6 text-[#001931]">Total Reviews</p>
                                <h2 className="text-4xl font-extrabold">{ratingAvg}</h2>
                            </div >
                            <div className="space-y-3">
                                <AiOutlineLike className="text-blue-500 p-1" size={30} />
                                <p className="text-[16px] leading-6 text-[#001931]">Total Reviews</p>
                                <h2 className="text-4xl font-extrabold">{reviews}</h2>
                            </div>
                        </div>
                        <button onClick={() => handleInstalled(expectedApps)} className="btn btn-success">Install Now ({size} MB)</button>
                    </div>
                </div>
                <hr class="border-t border-gray-300" />
                <div className="p-5">
                    <h3 className="text-2xl text-[#001931] font-semibold mb-5">Ratings</h3>
                    <div>
                        <RatingChart ratings={ratings}></RatingChart>
                    </div>
                </div>
                <hr class="border-t border-gray-300" />
                <div className="p-5">
                    <h3 className="text-2xl text-[#001931] font-semibold mb-5">Description</h3>
                    <div>
                        <p className="text-[16px] leading-8 text-[#627382]">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppDetails
