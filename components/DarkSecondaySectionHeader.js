export default function DarkSecondarySectionHeader({txt, hidden}) {
    const rest_of_word = txt.toUpperCase().substr(1)
    const firstWord = txt[0]
    return(
        <div style={{
            fontSize:30,
            fontWeight:900,
            marginBottom:18,
            marginTop:10,
            color:"#f7a02e",
            visibility: hidden ? "hidden" :'unset'
        }}> 
            <span style={{
        color:"#111",
            }}>{firstWord}</span>
            <span>{rest_of_word}</span>

        </div>
    )
}