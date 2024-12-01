import React from 'react'
import Select from 'react-select';
import useCreatePartisipent from '../../hooks/useCreatePartisipent';

export default function Participant({ hidePopUpPartisipent }) {

  const { email, setEmail, name, setName, selectedOptions, setSelectedOptions, setImage, errors, handleSubmit } = useCreatePartisipent();

  const events = [
    { _id: 'event1', name: 'Event 1' },
    { _id: 'event2', name: 'Event 2' },
    { _id: 'event3', name: 'Event 3' }
  ];

  const options = events.map(event => ({
    value: event._id, 
    label: event.name 
  }));
  

  return (
    <div className=" absolute top-0 w-full h-screen flex justify-center items-center bg-gray-800 bg-opacity-25 z-50">
      
    <div className=" bg-white p-5 lg:p-10 rounded-lg">
              <div className=" flex justify-between items-center mb-3 lg:mb-6">
                <h1 className=" text-center font-semibold text-gray-900 text-lg lg:text-xl">Create Participant</h1>
                <button onClick={ hidePopUpPartisipent }><i class="fa-solid fa-xmark fa-lg text-purple-600 w-7 h-7 rounded-md flex justify-center items-center hover:bg-gray-700 hover:bg-opacity-25"></i></button>
              </div>
              <form 
                onSubmit={handleSubmit}
              >
                  <div className=" flex flex-col justify-center items-start mb-3">
                        <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="name">Username <span className=" text-red-600">*</span></label>
                        <input 
                            onChange={ (e) => { setName(e.target.value) }}
                            value={name}
                            type="text"
                            id="name" 
                            placeholder=" Enter Username" 
                            className=" w-60 lg:w-72 h-8 lg:h-9 px-1 rounded-md border-[0.5px] border-gray-500 focus:border-blue-600 text-xs lg:text-sm" 
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div className=" flex flex-col justify-center items-start mb-3">
                      <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="email">Email<span className=" text-red-600">*</span></label>
                      <input 
                          onChange={(e) => { setEmail(e.target.value) } }
                          value={email}
                          id="email" 
                          type="email"
                          name="email"
                          placeholder=" Enter Email Address" 
                          className=" w-60 lg:w-72 h-8 lg:h-9 px-1 rounded-md border-[0.5px] border-gray-500 focus:border-blue-600 text-xs lg:text-sm" 
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div class="w-64 mb-3">
                      <label for="multiple-select" class="text-xs lg:text-sm font-medium text-gray-900 mb-1 block">Select Options</label>
                      <Select
                        className=" w-72 lg:w-72 h-8 lg:h-9 border-gray-800 rounded-md focus:border-blue-600 text-xs lg:text-sm mb-4"
                        isMulti
                        name="selectedOptions"
                        options={options}
                        value={options.filter(option => selectedOptions.includes(option.value))}
                        onChange={(selectedOptions) => {
                          setSelectedOptions(selectedOptions.map(option => option.value)); 
                        }}
                        classNamePrefix="select"
                      />
                  
                  </div>

                  <div className=" mb-3">
                    
                    <label class="text-xs lg:text-sm font-medium text-gray-900 mb-1 block" for="file_input">Upload image <span className=" text-red-600">*</span></label>
                    <input 
                      class=" w-full h-10 text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50" 
                      id="file_input" 
                      type="file"
                      onChange={ (e) => { setImage(e.target.files[0]) } }
                    />
                    {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
                  </div>

                  <div className="">
                      <button className=" w-full h-9 bg-purple-700 hover:bg-purple-600 rounded-md text-white font-semibold text-sm lg:text-sm">Create</button>
                  </div>
                  
              </form>
          </div>
    </div>
  )
}
