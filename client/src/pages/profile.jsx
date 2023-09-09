import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { getProfile } from "../redux/auth/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";



const Profile = () => {
  const dispatch = useDispatch();
  const ProfileUser = useSelector((state) => state?.user?.profileUser);
  const user=useSelector((state)=>state.user?.user)
  const { id } = useParams();
  // console.log(ProfileUser)

  useEffect(()=>{
    dispatch(getProfile(id))
   
  },[dispatch])

  return (
   
    <div>
         <Navbar/>
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")',
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            />
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x={0}
              y={0}
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={ProfileUser?.avatar?.url}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
  {user?._id !== ProfileUser?._id ? (
    user?.followers?.includes(ProfileUser?._id) ? (
      <div className="py-6 px-3 mt-32 sm:mt-0">
        <button
          className="bg-red-500 active:bg-red-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Unfollow
        </button>
      </div>
    ) : (
      <div className="py-6 px-3 mt-32 sm:mt-0">
        <button
          className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          follow
        </button>
      </div>
    )
  ) : null}
</div>

                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          {ProfileUser?.followers ?
                          ProfileUser?.followers.length : 0
                        } 
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Followers
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        {ProfileUser?.following ?
                          ProfileUser?.following.length : 0
                        }
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Following
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        {ProfileUser?.productsShowcased ?
                          ProfileUser?.productsShowcased?.length : 0
                        }

                        </span>
                        <span className="text-sm text-blueGray-400">
                          Products  
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 ">
                    {ProfileUser?.username}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
        <i className="fas fa-star text-yellow-400"></i> {ProfileUser?.level}
      </div>
                  <div className="mb-2 text-blueGray-600">
                  <i className="fas fa-coins text-yellow-400"></i>
                    {ProfileUser?.points || 0}
                  </div>

                  <div>
                  <p><i className="fa-solid fa-medal" style={{color: "#D4Af37",}} />8 
                  &nbsp; <i className="fa-solid fa-medal" style={{color: "#BBC2CC",}} />6  
                  &nbsp; <i className="fa-solid fa-medal" style={{color: "#B08D57",}} />5</p>
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      {ProfileUser?.bio}
                      </p>
                  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://avatars.githubusercontent.com/u/98531038?v=4"
                alt
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
            </div>
          </div>

          


        </section>
      </main>

      
 </div>
  );
};

export default Profile;
