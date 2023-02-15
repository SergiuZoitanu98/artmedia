import Chat from "../chat";
import { destroyCookie } from 'nookies';
import { useRouter } from "next/router";
import PostForm from "../post-form";

const Dashboard = ({ surname, name }) => {
    const router = useRouter()
    const logout = () => {
        destroyCookie(null, 'jwt');
        router.push('/')
    }
    return (
        <>
            <aside
                id="default-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <svg className="svg-icon" viewBox="0 0 20 20">
                                    <path
                                        fill="none"
                                        d="M14.52,2.469H5.482c-1.664,0-3.013,1.349-3.013,3.013v9.038c0,1.662,1.349,3.012,3.013,3.012h9.038c1.662,0,3.012-1.35,3.012-3.012V5.482C17.531,3.818,16.182,2.469,14.52,2.469 M13.012,4.729h2.26v2.259h-2.26V4.729z M10,6.988c1.664,0,3.012,1.349,3.012,3.012c0,1.664-1.348,3.013-3.012,3.013c-1.664,0-3.012-1.349-3.012-3.013C6.988,8.336,8.336,6.988,10,6.988 M16.025,14.52c0,0.831-0.676,1.506-1.506,1.506H5.482c-0.831,0-1.507-0.675-1.507-1.506V9.247h1.583C5.516,9.494,5.482,9.743,5.482,10c0,2.497,2.023,4.52,4.518,4.52c2.494,0,4.52-2.022,4.52-4.52c0-0.257-0.035-0.506-0.076-0.753h1.582V14.52z"
                                    ></path>
                                </svg>
                                <span className="ml-3">ArtMedia</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <svg className="svg-icon" viewBox="0 0 20 20">
                                    <path
                                        fill="none"
                                        d="M12.443,9.672c0.203-0.496,0.329-1.052,0.329-1.652c0-1.969-1.241-3.565-2.772-3.565S7.228,6.051,7.228,8.02c0,0.599,0.126,1.156,0.33,1.652c-1.379,0.555-2.31,1.553-2.31,2.704c0,1.75,2.128,3.169,4.753,3.169c2.624,0,4.753-1.419,4.753-3.169C14.753,11.225,13.821,10.227,12.443,9.672z M10,5.247c1.094,0,1.98,1.242,1.98,2.773c0,1.531-0.887,2.772-1.98,2.772S8.02,9.551,8.02,8.02C8.02,6.489,8.906,5.247,10,5.247z M10,14.753c-2.187,0-3.96-1.063-3.96-2.377c0-0.854,0.757-1.596,1.885-2.015c0.508,0.745,1.245,1.224,2.076,1.224s1.567-0.479,2.076-1.224c1.127,0.418,1.885,1.162,1.885,2.015C13.961,13.689,12.188,14.753,10,14.753z M10,0.891c-5.031,0-9.109,4.079-9.109,9.109c0,5.031,4.079,9.109,9.109,9.109c5.031,0,9.109-4.078,9.109-9.109C19.109,4.969,15.031,0.891,10,0.891z M10,18.317c-4.593,0-8.317-3.725-8.317-8.317c0-4.593,3.724-8.317,8.317-8.317c4.593,0,8.317,3.724,8.317,8.317C18.317,14.593,14.593,18.317,10,18.317z"
                                    ></path>
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">
                                    {name} {surname}
                                </span>
                            </a>
                        </li>
                        <li>
                            <a

                                className=" cursor-pointer flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <svg className="svg-icon" viewBox="0 0 20 20">
                                    <path
                                        fill="none"
                                        d="M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0
	                    L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109
	                    c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483
	                    c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788
	                    S18.707,9.212,18.271,9.212z"
                                    ></path>
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap" onClick={logout}>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">
                        <PostForm/>
                </div>
            </div>
            <div className="flex items-center justify-center rounded h-6 mt-24">
                {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-50">
                Chat
              </button> */}
            </div>
        </>
    );
};
export default Dashboard;
