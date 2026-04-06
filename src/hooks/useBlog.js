// hooks/useBlog.js
import { useEffect, useState } from "react";
import axios from "axios";

const BACKEND_API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const useBlog = (filters = {}) => {
  const [blogList, setBlogList] = useState([]);
  const [documentCount, setDocumentCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogs = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${BACKEND_API_BASE_URL}/api/public/blog`,
        {
          params: filters,
        }
      );

      const { data, count } = response.data;
      setBlogList(data || []);
      setDocumentCount(count || 0);
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to fetch blogs.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [JSON.stringify(filters)]);

  return {
    blogList,
    documentCount,
    isLoading,
    error,
    refetch: fetchBlogs,
  };
};
