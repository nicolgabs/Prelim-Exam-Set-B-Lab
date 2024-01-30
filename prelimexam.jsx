function GreenBring(){
    
    return(<div className="whole"> <h1 className="title">Things to Bring</h1>
    <p className="green">My Strawhat</p>
    <p className="green">Gum gum fruit</p>
    <p className="red">The red vest</p>
    </div>)


}
function NoBring(){
    return(<div className="whole"> <h1 className="title">Things to Bring</h1>
    <p className="nocolor">My Strawhat</p>
    <p className="nocolor">Gum gum fruit</p>
    <p className="nocolor">The red vest</p>
    </div>)
}


function Bring(props){
    const isBring = props.isBring
    
    if(isBring){
    return<GreenBring/>
    }
    else{
        return<NoBring/>

    }
    
}


export default Bring