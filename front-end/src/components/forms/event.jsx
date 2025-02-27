import React from 'react'
import Select from 'react-select';
import useCreateEvent from '../../hooks/useCreateEvents';

export default function Event({ hidePopUpEvent }) {
  
  
  const { users, title, setTitle, startDate, setStartDate, endDate, setEndDate, location, setLocation, description, setDescription, selectedOptions, setSelectedOptions, setImage, errors, handleSubmit} = useCreateEvent();


  return (
    <>
      <div className=" absolute top-0 w-full h-screen flex justify-center items-center bg-gray-800 bg-opacity-25 z-50">
          
          <div className=" bg-white p-5 lg:p-10 rounded-lg">
          <div className=" flex justify-between items-center mb-3 lg:mb-6">
                <h1 className=" text-center font-semibold text-gray-900 text-lg lg:text-xl">Create Event</h1>
                <button onClick={ hidePopUpEvent }><i class="fa-solid fa-xmark fa-lg text-purple-600 w-7 h-7 rounded-md flex justify-center items-center hover:bg-gray-700 hover:bg-opacity-25"></i></button>
              </div>
              <form 
                  onSubmit={handleSubmit}
                >
                    <div className=" flex flex-col justify-center items-start mb-2">
                          <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="name">Title <span className=" text-red-600">*</span></label>
                          <input 
                              onChange={ (e) => { setTitle(e.target.value) }}
                              value={title}
                              type="text"
                              id="title" 
                              placeholder=" Enter title" 
                              className=" w-60 lg:w-72 h-8 lg:h-9 px-1 rounded-md border-[0.5px] border-gray-500 focus:border-blue-600 text-xs lg:text-sm" 
                          />
                          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                    </div>
  
                    <div className=" flex flex-col justify-center items-start mb-2">
                        <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="Date">Start Date<span className=" text-red-600">*</span></label>
                        <input 
                            onChange={(e) => { setStartDate(e.target.value) } }
                            value={startDate}
                            id="date" 
                            type="datetime-local"
                            name="date"
                            className=" w-60 lg:w-72 h-8 lg:h-9 px-1 rounded-md border-[0.5px] border-gray-500 focus:border-blue-600 text-xs lg:text-sm" 
                        />
                        {errors.startDate && <p className="text-red-500 text-xs mt-1">{errors.startDate}</p>}
                    </div>

                    <div className=" flex flex-col justify-center items-start mb-2">
                        <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="Date">End Date<span className=" text-red-600">*</span></label>
                        <input 
                            onChange={(e) => { setEndDate(e.target.value) } }
                            value={endDate}
                            id="date" 
                            type="datetime-local"
                            name="date"
                            className=" w-60 lg:w-72 h-8 lg:h-9 px-1 rounded-md border-[0.5px] border-gray-500 focus:border-blue-600 text-xs lg:text-sm" 
                        />
                        {errors.endDate && <p className="text-red-500 text-xs mt-1">{errors.endDate}</p>}
                    </div>
  
                    <div className=" flex flex-col justify-center items-start mb-2">
                        <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="Location">Location<span className=" text-red-600">*</span></label>
                        <input 
                            onChange={(e) => { setLocation(e.target.value) } }
                            value={location}
                            id="Location" 
                            type="Location"
                            name="Location"
                            placeholder='Enter Location'
                            className=" w-60 lg:w-72 h-8 lg:h-9 px-1 rounded-md border-[0.5px] border-gray-500 focus:border-blue-600 text-xs lg:text-sm" 
                        />
                        {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
                    </div>
  
                    <div className=" flex flex-col justify-center items-start mb-2">
                        <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="desc">Description<span className=" text-red-600">*</span></label>
                        <textarea cols="30" rows="10"
                            onChange={(e) => { setDescription(e.target.value) } }
                            value={description}
                            id="description" 
                            type="description"
                            name="description"
                            className=" w-60 lg:w-72 h-8 lg:h-9 px-1 rounded-md border-[0.5px] border-gray-500 focus:border-blue-600 text-xs lg:text-sm" 
                        > Enter Description </textarea> 
                        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                    </div>
  
                    <div class="w-64 mb-2">
                        <label for="multiple-select" class="text-xs lg:text-sm font-medium text-gray-900 mb-1 block">Select Partisipents</label>
                        <Select
                          className=" w-72 lg:w-72 h-8 lg:h-9 border-gray-800 rounded-md focus:border-blue-600 text-xs lg:text-sm mb-4"
                          isMulti
                          name="selectedOptions"
                          options={users}
                          value={users.filter(option => selectedOptions.includes(option.value))}
                          onChange={(selectedOptions) => {
                            setSelectedOptions(selectedOptions.map(option => option.value)); 
                          }}
                          classNamePrefix="select"
                        />
                    </div>
  
                    <div className=" mb-2">
                      
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
    </>
  )
}
