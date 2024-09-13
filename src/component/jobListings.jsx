/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import JobListing from "./jobListing";

import { useState, useEffect } from "react";
import Spinner from "./spinner";

const JobListings = ({ isHome = false }) => {
  const [Jobs, setJobs] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const featchJobs = async () => {
      const apiUrl = isHome ? "/api?_limit=3" : "/api";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Loading Error Try Again", error);
      } finally {
        setloading(false);
      }
    };
    featchJobs();
  }, []);

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>

          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Jobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default JobListings;
