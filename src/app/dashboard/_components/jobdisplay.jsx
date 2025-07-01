"use client";
import { useEffect, useState } from "react";

export default function MainDisplay() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    async function fetchJobs() {
      try {
        await fetch(`${backendURL}/api/jobs/scrape`);
        const res = await fetch(`${backendURL}/api/jobs/`);
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  if (loading)
    return (
      <div className="text-center mt-10">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"></div>
        <p className="mt-2 text-blue-600">Loading jobs...</p>
      </div>
    );

  const cardVariants = [
    "from-blue-500 to-blue-600",
    "from-purple-500 to-purple-600",
    "from-emerald-500 to-emerald-600",
    "from-amber-500 to-amber-600",
    "from-rose-500 to-rose-600",
    "from-indigo-500 to-indigo-600",
  ];

  return (
    <div className="h-[calc(100vh-4rem)] overflow-y-auto p-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {jobs.map((job, index) => {
          const colorVariant = cardVariants[index % cardVariants.length];
          const fullLink = job.link.startsWith("http")
            ? job.link
            : `https://internshala.com${job.link}`;

          return (
            <div
              key={job._id}
              className={`group relative bg-gradient-to-br ${colorVariant} rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden text-white transform hover:-translate-y-1`}
            >
              {/* Shine hover effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>

              {/* Job Details */}
              <div className="relative z-10">
                <h2 className="text-xl font-bold mb-1">{job.title}</h2>
                <p className="text-sm mb-1 font-medium">{job.company}</p>
                <p className="text-xs mb-3 opacity-90">{job.location}</p>

                <div className="text-sm space-y-1 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <p>
                    <span className="font-semibold">Stipend:</span> {job.stipend}
                  </p>
                  <p>
                    <span className="font-semibold">Duration:</span> {job.duration}
                  </p>
                  <p>
                    <span className="font-semibold">Platform:</span> {job.platform}
                  </p>
                  <p className="text-xs opacity-80 mt-2">
                    Posted on {new Date(job.postedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Apply Button */}
              <a
                href={fullLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 relative z-10 inline-block text-center bg-white text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-gray-100 transition-all transform hover:scale-105 shadow hover:shadow-md"
              >
                Apply Now
              </a>

              {/* Decorative Shapes */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-500"></div>
              <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-700"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
