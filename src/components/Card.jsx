export default function Card({fullname, occ,nameChange}) {
    return(
        <>
        <div>
            <h1>{fullname}</h1>
            <h2>{occ}</h2>
        </div>
        <button onClick={nameChange}>name change</button>
            </>
          
        
    )
}