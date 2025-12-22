import Card from "./Card";

function Dashboard({name,occ, nameChange,changeOcc}) {
    return (
        
        <Card fullname={name} occ={occ} nameChange={nameChange} changeOcc={changeOcc}/>
    )
}
export default Dashboard