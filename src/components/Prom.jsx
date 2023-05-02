import "../Styles/global.css"
import { XyzTransition } from '@animxyz/react'
import '@animxyz/core'
const Prom =()=>{
    return(
        <XyzTransition appear={true} duration="auto"  >
        <div className="promotion" >
            <div className="promo">
                <p className="don" xyz="fade left stagger duration-30">powered by agora</p>   
            </div>
        </div>
        </XyzTransition>
    )

}
export default Prom;
