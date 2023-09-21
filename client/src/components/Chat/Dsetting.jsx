import React from 'react'

const Dsetting = () => {
  return (
    <div>
        <div className="container mx-auto">
  <div className="inputs w-full max-w-2xl p-6 mx-auto">
    <h2 className="text-xl text-gray-900">GROUP SETTING</h2>
    <form className="mt-4 border-t border-gray-400 pt-4">
      <div className="flex flex-wrap -mx-3 mb-6">
        {/* <div className="w-full md:w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-text-1">Change Group Name</label>
          <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500" id="grid-text-1" type="text" placeholder="Enter new name"  />
        </div> */}
        <div className="w-full md:w-full px-3 mb-6 ">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Copy grp invite link</label>
          <button className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md ">click to copy</button>
        </div>
        
        {/* <div className="w-full md:w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Some dropdown if needed</label>
          <div className="flex-shrink w-full inline-block relative">
            <select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
              <option>choose ...</option>
              <option>English</option>
              <option>France</option>
              <option>Spanish</option>
            </select>
            <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div> */}
        <div className="personal w-full border-t border-gray-400 pt-4">
          <h2 className="text-2xl text-gray-900">Group info:</h2>
          <div className="flex items-center justify-between mt-4">
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Group name</label>
              <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500" type="text" required />
            </div>
            {/* <div className="w-full md:w-1/2 px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Bio</label>
              <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500" type="text" required />
            </div> */}
          </div>
          {/* <div className="w-full md:w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Invite User</label>
            <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500" type="text" required />
          </div> */}
          <div className="w-full md:w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Bio</label>
            <textarea className="bg-gray-100 rounded-md border leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" required defaultValue={""} />
          </div>
          <div className="flex justify-end">
            <button className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="submit">save changes</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>

    </div>
  )
}

export default Dsetting