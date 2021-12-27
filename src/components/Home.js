import react from 'react'
import reactDom from 'react-dom'


function Home() {
    return (

        <div>
            <container id="main-container" className="d-grid h-100">
                <form className="text-center">
                    <img
                        className="bg-primary"
                        src={require("./")}
                        alt="logo" />

                    <h3>Please sign in</h3>
                </form>

            </container>
        </div>
    )
}







export default Home;

