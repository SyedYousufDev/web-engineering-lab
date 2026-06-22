//Author: S.M Yousuf
//lab task # 06, lab # 11
const fruitlist = (props) =>{

    return(
        <div>
            <h1>Fruit List</h1>
            <ul>
               <li>{props.Apple}</li> 
               <li>{props.mango}</li> 
            </ul>
        </div>
    )
}

export default fruitlist;