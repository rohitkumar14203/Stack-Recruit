/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useParams, useLoaderData, useRouteError } from "react-router-dom";

// Main JobPage component
const JobPage = () => {
  const { id } = useParams();
  const job = useLoaderData();

  // If no job data is found, show a fallback message
  if (!job || job.error) {
    return (
      <div>
        <h1>Job Not Found</h1>
        <p>
          The job you're looking for doesn't exist or might have been removed.
        </p>
      </div>
    );
  }

  // Render job details
  return (
    <div>
      <h1>Job Details</h1>
      <p>{job.description}</p>
      <p>{job.title}</p>
    </div>
  );
};

// ErrorBoundary Component to catch errors and display them
const JobPageErrorBoundary = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>{error.message || "An unexpected error occurred."}</p>
    </div>
  );
};

// The loader function to fetch the job data
const jobLoader = async ({ params }) => {
  try {
    const res = await fetch(`/api/jobs/${params.id}`);

    // If the job is not found (404), return an object with an error flag instead of throwing
    if (!res.ok) {
      if (res.status === 404) {
        return { error: true, message: "Job Not Found" }; // Return error data instead of throwing
      }
      const message = await res.text();
      throw new Error(message || "Failed to load job data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    // Catch any other errors and pass them to the ErrorBoundary
    throw new Error(
      error.message || "An error occurred while loading job data."
    );
  }
};

// Export components for route setup
export { JobPage as default, jobLoader, JobPageErrorBoundary };
