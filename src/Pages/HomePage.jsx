import Hero from "../component/hero";
import HomeCard from "../component/home-card";
import JobListings from "../component/jobListings";
import ViewAllJobs from "../component/viewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCard />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
