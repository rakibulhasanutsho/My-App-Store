import playStore from "../../assets/playstore.png"
import appStore from "../../assets/appstore.png"
import Hero from "../../assets/hero.png"

function Banner() {
    return (
        <div>
            <div className='text-center space-y-5 mb-10'>
                <h1 className="text-7xl font-bold" >We Build <br />
                    <span className="bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] bg-clip-text text-transparent">Productive</span> Apps</h1>
                <p className="text-[16px] text-[#627382]">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className="flex gap-3 justify-center">
                    <div className="flex gap-3 border border-[#D2D2D2] p-2 px-4 rounded">
                        <img src={playStore} alt="" />
                        <p className="text-xl font-semibold">Google Play</p>
                    </div>
                    <div className="flex gap-3 border border-[#D2D2D2] p-2 px-4 rounded">
                        <img src={appStore} alt="" />
                        <p className="text-xl font-semibold">App Store</p>
                    </div>
                </div>
            </div>
            <div>
                <img className="mx-auto w-[700px]" src={Hero} alt="" />
            </div>
            <div className="bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] p-20 space-y-5">
                <h1 className="text-center text-white">Trusted by Millions, Built for You</h1>
                <div className="flex gap-20 justify-center">
                    <div className="space-y-5">
                    <p className="text-[16px] text-white">Total Downloads</p>
                    <h3 className="text-6xl font-extrabold text-white">29.6M</h3>
                    <p className="text-[16px] text-white">21% more than last month</p>
                </div>
                <div className="space-y-5">
                    <p className="text-[16px] text-white">Total Reviews</p>
                    <h3 className="text-6xl font-extrabold text-white">906K</h3>
                    <p className="text-[16px] text-white">46% more than last month</p>
                </div>
                <div className="space-y-5">
                    <p className="text-[16px] text-white">Active Apps</p>
                    <h3 className="text-6xl font-extrabold text-white">132+</h3>
                    <p className="text-[16px] text-white">31 more will Launch</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
