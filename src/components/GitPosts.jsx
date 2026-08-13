import React, { useEffect, useState } from "react";
import { useAPIStore } from "../store/useAPIStore";

const GitPosts = () => {
  const { posts, loading, error, fetchData } = useAPIStore();
  const [showPosts, setShowPosts] = useState(false)

  const handleShowPosts = () => {
    setShowPosts(!showPosts)
    
  }

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <h1>Loading the Data...</h1>;
  if (error) return <h1>Failed to load data</h1>;
  return (
    <div className="mt-10 border">
        <h1 className="text-2xl text-center">Posts</h1>
        <button 
        className="px-4 py-2 border bg-taupe-700"
        onClick={handleShowPosts}>{showPosts ? "hide posts" : "show posts"}</button>
        <div className={`flex-wrap gap-4 items-center p-4 ${showPosts ? "flex" : "hidden"}`}>
  {posts.map((post) => (
    <div
      key={post.id}
      className="mb-4 w-full max-w-md rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="w-full">
        <h1 className="mb-4 text-xl font-semibold capitalize leading-relaxed text-gray-800">
          title:{" "}
          <span className="font-normal text-gray-600">
            {post.title}
          </span>
        </h1>

        <p className="leading-7 text-gray-600">
          {post.body}
        </p>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default GitPosts;
