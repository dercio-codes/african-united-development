export default ({txt, hidden}) => {
    const rest_of_word = txt.toUpperCase().substr(1)
    const firstWord = txt[0]
    return(
        <div style={{
            fontSize:50,
            fontWeight:900,
            marginBottom:18,
            marginTop:10,
            color:"#fff",
            visibility: hidden ? "hidden" :'unset'
        }}> 
            <span style={{
                color:"#f7a02e"
            }}>{firstWord}</span>
            <span>{rest_of_word}</span>

        </div>
    )
}