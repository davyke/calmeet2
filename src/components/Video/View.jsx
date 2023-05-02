import icon from "../../Images/brain_wiz.png"
import "../../Styles/video.css"
import { FaClock, FaRegCalendarTimes,FaVideo } from 'react-icons/fa';
import { FiEye } from "react-icons/fi";
import { BsPeople,BsBuildings, BsSendFill } from "react-icons/bs";
import VideoRoom from "./VideoRoom";


const View =()=>{
    return(
        <div className="view">
            <div className="sideview">
                <div className="iconview">
                    <img src={icon} alt="calculus"/>
                </div>
                <div className="side_controls">
                    <h2><FaClock /></h2>
                    <h2><FaRegCalendarTimes/></h2>
                    <h2><FiEye/></h2>
                    <h2><BsPeople/></h2>
                    <h2><BsBuildings/></h2>
                    <h2><FaVideo/></h2>
                   
                </div>

                
            </div>
            <div className="media">
                <div className="media_ground">
                    <div className="agenda">
                        <h1>Annual calculus meet</h1>
                        <h3><BsPeople/></h3>
                    </div>
                    <div>
                        <VideoRoom />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default View;