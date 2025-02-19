function Home(promps) {
    var styling = {
        textAlign : "center",
        backgroundColor : "blue",
        color : "white"
    }
    return (
        <>
        <h2 style={styling}>Home page</h2>
        <h4>This is a promp : {promps.promps}, {promps.sjit}</h4>
        </>
    )
}
export default Home;