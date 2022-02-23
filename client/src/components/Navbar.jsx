import { React, Fragment } from "react";
// import {Container, Nav, Navbar} from "react-bootstrap"
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import "./Navbar.css"

const Navbars = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [babysitter, setBabysitter] = useState({})

  const handleLoggout = () => {
    if (user) {
      localStorage.removeItem("user")
    }

    if (babysitter) {
      localStorage.removeItem("babysitter")
    }
    window.location.href = "/login";
  }


  useEffect(() => {
    const loggedinuser = JSON.parse(localStorage.getItem('user'))
    console.log(loggedinuser)
    { loggedinuser ? setUser(loggedinuser) : setUser(null) }
    { loggedinuser ? setToken(loggedinuser.token) : setToken(null) }

    const loggedinbabysitter = JSON.parse(localStorage.getItem('babysitter'))
    { loggedinbabysitter ? setBabysitter(loggedinbabysitter) : setBabysitter(null) }
    { loggedinbabysitter ? setToken(loggedinbabysitter.token) : setToken(null) }

  }, []);

  const config = { headers: { Authorization: `Bearer ${token}`, }, }
  // const res = await axios.post(`https://loobv.com/api/traveller/add/favorite/car`, { car_id: carId }, config)




  return (
    <div>
      <nav className="maincontainer" >
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">*/}
        {/* <div className="flex-shrink-0">  */}
        {/* <img className="image"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                /> */}
        {/* </div> */}
        {/* <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4"> */}
       <div>
        <Link className="btn" to="/">Home</Link>

        {user ? <Fragment ><Link className="btn" to="/parentfeed"> Parent Feed</Link>
          <Link className="btn" to="/parenthouse"> Parent House</Link>
        </Fragment> :
          <Fragment>
          </Fragment>}

        <Link className="btn" to="/profile"> Profile</Link>

        <Link className="btn" to="/babysitterfinder"> Babysitter Finder</Link>

        {user?.email === "admin@gmail.com" ? <Link className="btn" to="/admindashboard"> Admin Dashboard</Link> : <Fragment></Fragment>}
        </div>
        {/* can see both user and babysitter login and log out if both are logged in need to fix it*/}
        <div className="logginginfo">
          {user || babysitter ?
          <div className="logout">
            <Fragment  >
                Signed In As: {user ? user.username : babysitter.first_name} 
              </Fragment>
                    <button className="btn"
                      onClick={() => handleLoggout()}
                    >   Logout
                    </button>
              </div>
            :
            // null
            <Fragment>
              <Link className="btn" to="/login"> Login as Parent/Guardian</Link>
              <Link className="btn" to="/babysitterfinderlogin"> Login as Babysitter</Link>
              <Link className="btn" to="/babysittersignup">Sign up as a Babysitter</Link>


            </Fragment>
          }
        </div>

        {/* </div>
              </div> */}
        {/* </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-pink-900 inline-flex items-center justify-center p-2 rounded-md text-pink-400 hover:text-white hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
                </div>*/}
        {/* </div>  */}
        {/* </div> */}
        {/* 
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#" //use link to (component) pass the pass to the commponent 
                  className="hover:bg-pink-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="text-pink-300 hover:bg-pink-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Parent Feed
                </a>

                <a
                  href="#"
                  className="text-pink-300 hover:bg-pink-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Parent House
                </a>

                <a
                  href="#"
                  className="text-pink-300 hover:bg-pink-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Profile
                </a>

                <a
                  href="#"
                  className="text-pink-300 hover:bg-pink-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Tracker
                </a>



                <a className="text-pink-300 hover:bg-pink-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => handleLoggout} > Logout </a>



              </div>
            </div>
          )}
        </Transition> */}
      </nav>




    </div>
  );
};

export default Navbars;
