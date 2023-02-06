export default function Loader(){
    return(
        <div className="loader_container">

            <div className="loader_bottom">
            <div className="planet">
                <div className="ring"></div>
                    <div className="cover-ring"></div>
                    <div className="spots">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <p>loading</p>
            </div>
        </div>
    )
}