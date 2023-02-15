import { useState } from "react";
import nookies from 'nookies'
import { BACKEND_URL } from "@/utils/utils";
import { Titillium_Web } from "@next/font/google";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createPost=()=>{
    const cookies = nookies.get('jwt')
    const headers = new Headers({
        'Content-Type':'application/json',
        Authorization:`Bearer ${cookies.jwt}`
    })
    const data ={
        title:title,
        description:description
    }
    fetch(`${BACKEND_URL}/posts/createPost`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("error")
        });
  }
  return (
    <>
      <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
          <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
            <div className="flex items-center space-x-1 sm:pr-4">
              <button
                type="button"
                className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Attach file</span>
              </button>
              <button
                type="button"
                className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Upload image</span>
              </button>
            </div>
          </div>
        </div>
        <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
          <label htmlFor="editor" className="sr-only">
            Publish post
          </label>
          <input
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            rows="8"
            className="block w-full px-0 text-sm mt-2 text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Write an article..."
            required
          ></textarea>
        </div>
      </div>
      <button onClick={createPost} className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
        Publish post
      </button>
    </>
  );
};
export default PostForm;
