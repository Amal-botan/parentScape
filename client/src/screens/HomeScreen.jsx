import { init } from "../utils/initToyLayer.js"
import { useEffect } from "react"

function HomeScreen() {
  useEffect(() => {
    init()
  }, [])

  return (
    <div className="home">
      
 <div className="toys">
        <h1 className="title">Welcome to</h1>
        <p className="text">Parentscape</p>

        </div>
        </div>
  );
}
export default HomeScreen;