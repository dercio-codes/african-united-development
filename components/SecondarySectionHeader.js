const SecondarySectionHeader = ({txt, hidden}) => {
    const rest_of_word = txt.toUpperCase().substr(1)
    const firstWord = txt[0]
    return(
        <div style={{
            fontSize:30,
            marginBottom:10,
            marginTop:10,
            fontWeight:900,
            color:"#fff",
            visibility: hidden ? "hidden" :'unset'
        }}> 
            <span style={{
                color:"#f7a02e"
            }}>{firstWord}</span>
            <span>{rest_of_word}</span>
            <div style={{
                width:22,
                height:2,
                background:'#f7a02e',
            }}>

            </div>
        </div>
    )
}
export default SecondarySectionHeader ;
