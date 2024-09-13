/* eslint-disable no-unused-vars */
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Hero from "./component/hero";
import Navbar from "./component/navbar";
import HomeCard from "./component/home-card";
import JobListings from "./component/jobListings";
import ViewAllJobs from "./component/viewAllJobs";
import HomePage from "./Pages/HomePage";
import MainLayout from "./Layouts/MainLayout";
import JobsPage from "./Pages/JobsPage";
import PageNotFound from "./Pages/PageNotFound";
import JobPage, { jobLoader } from "./Pages/JobPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />

      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
};

export default App;

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Hero
//         title="Become a React Dev"
//         subtitle="Find the React job that fits your skills and needs"
//       />
//       <HomeCard />
//       <JobListings />
//       <ViewAllJobs />
//     </>
//   );
// };
// export default App;
