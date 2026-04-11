import { use } from "react"
import { FaDownload } from "react-icons/fa"
import { FaStar } from "react-icons/fa"
import { AiOutlineLike } from "react-icons/ai";

import {  useParams } from "react-router"
const appsPromise = fetch('/data.json').then(res => res.json())

function AppDetails() {
    
    const {id } = useParams()
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
    <div>
        <div className="flex gap-5">
            <div>
                <img className="w-[180px] h-[200px]" src={image} alt="" />
            </div>
            <div>
                <h3>{title}</h3>
                <p>Developed by <span> {companyName} </span></p>
                <hr />
                <div className="flex gap-5">
                    <div>
                        <FaDownload></FaDownload>
                        <p>Downloads</p>
                        <h2>{downloads}</h2>
                    </div>
                    <div>
                        <FaStar></FaStar>
                        <p>Total Reviews</p>
                        <h2>{ratingAvg}</h2>
                    </div>
                    <div>
                        <AiOutlineLike />
                        <p>Total Reviews</p>
                        <h2>{reviews}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppDetails
