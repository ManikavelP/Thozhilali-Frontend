import Worker1Img from "../assets/images/worker1.png";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
export default function Card( { onLearnMore }){
    const cardStyle = {
        background:'#132D3A'
        // background: 'linear-gradient(180deg, rgba(36,195,71,1) 0%, rgba(58,73,249,1) 100%)',
      };
    const handleLearnMoreClick = () => {
      onLearnMore();
    };
      
    return(

        <div style={cardStyle} className=" sm:w-[30%] sm:h-[84%] sm:m-3 m-2 rounded-30 flex flex-row items-center">
        <div className="w-[30%] sm:w-[25%] m-2.5 bg-white rounded-full overflow-hidden flex-shrink-0">
          <img
            src={Worker1Img}
            alt="WorkersImg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[70%] sm:w-[75%] m-3">
          <div>
            <h1 className="text-xl font-bold text-white">
              Nahid Hasan
            </h1>
            <p className="text-sm text-gray-300">Vessel Washing</p>
            <div className="flex items-center mt-2">
              <div className="bg-white text-blue-600 rounded-2xl w-10 h-5 flex items-center justify-center text-xs mr-2">
                4.5
              </div>
              <div className="flex">
                {[...Array(4)].map((_, index) => (
                  <FaStar
                    key={index}
                    className="w-4 h-5 ml-1 text-starColor"
                   
                  />
                ))}
                <FaStarHalfAlt className="w-4 h-5 ml-1 text-starColor" />
              </div>
            </div>
            <div className="text-gray-200 text-xs mt-2">
            UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.
            </div>
            <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md text-sm " onClick={handleLearnMoreClick}>
                LEARN MORE
            </button>
          </div>
        </div>
      </div>
      
    )
}