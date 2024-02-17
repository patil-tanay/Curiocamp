import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import CourseCard from "../component/CourseCard";
import results from "./data";
import Footer from "../component/footer";
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const fetchCourses = () => {
    const url = import.meta.env.VITE_BASE_URL;
    fetch(`${url}api/courses/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCourses(data.results.results);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }
  const handleSearchOnclick = () => {
    const url = import.meta.env.VITE_BASE_URL;
    fetch(`${url}api/courses/?course=${searchQuery}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCourses(data.results.results);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <div className="courses">
      <Navbar />
      <div className="w-full h-[3000px] md:h-[800px] mb-96">
        <div className="mt-3">
          <p className="pl-8 pt-4">Home/ Courses</p>
          <h1 className="pl-8 font-bold text-2xl mb-2">All Courses</h1>
          <div className="Searchbar ">
          <form onSubmit={(e) => { e.preventDefault(); handleSearchOnclick(); }} className="flex items-center max-w-xs sm:max-w-sm md:max-w-md  mx-auto">
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                </svg>
              </div>
              <input type="text" id="simple-search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Search courses name..." required />
            </div>
            <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-indigo-600 hover:text-white bg-[#f4f4fe] rounded-full border border-indigo-600 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="m-1 px-10 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10  h-screen">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
      <Footer className="mt-96"/>
    </div>
    
  );
};
export default Courses;