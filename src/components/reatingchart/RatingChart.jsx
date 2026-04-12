

const RatingChart = ({ratings}) => {
  

  // সর্বোচ্চ ভ্যালু বের করা যাতে বারগুলো এর সাপেক্ষে ছোট-বড় হয়
  const maxCount = Math.max(...ratings.map((item) => item.count));

  return (
    <div className="w-full max-w-md p-4 space-y-3">
      {ratings.map((item, index) => (
        <div key={index} className="flex items-center gap-4">
          {/* স্টার লেবেল */}
          <span className="w-10 text-sm text-gray-500 whitespace-nowrap">
            {item.name} 
          </span>

          
          <div className="flex-1 h-4 bg-gray-100 rounded-sm overflow-hidden">
            {/* ডাইনামিক বার */}
            <div
              className="h-full bg-orange-500 transition-all duration-500"
              style={{
                width: `${(item.count / maxCount) * 100}%`, 
              }}
            ></div>
          </div>
        </div>
      ))}
      
      
      <div className="flex justify-between text-[10px] text-gray-400 pl-14">
        <span>0</span>
        <span>3000</span>
        <span>6000</span>
        <span>9000</span>
        <span>12000</span>
      </div>
    </div>
  );
};

export default RatingChart;