import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Blog } from "@/types/blog";

interface BlogCardProps {
  blog: Blog;
}

export function BlogCard({ blog }: BlogCardProps) {
  const navigate = useNavigate();

  const publishedDate = new Date(blog.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const readingTime = blog.points?.length
    ? Math.ceil(blog.points.length * 0.5)
    : 5;

  const handleReadMoreClick = () => {
    // Use ID instead of slug since slug is not available from Strapi
    const targetUrl = `/blogs/${blog.id}`;
    navigate(targetUrl);
  };

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group h-full flex flex-col bg-[oklch(0.16_0.02_250)] border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.02_250)] via-transparent to-transparent opacity-60" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-white backdrop-blur-sm">
            {blog.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
          <div className="flex items-center gap-1.5">
            <Calendar className="size-3.5" />
            <span>{publishedDate}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="size-3.5" />
            <span>{readingTime} min read</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
          {blog.excerpt}
        </p>

        {/* Debug Info */}
        <div className="text-xs text-gray-600 mb-2 font-mono">
          ID: {blog.id} | Slug: {blog.slug || "N/A"}
        </div>

        {/* Read More Button */}
        <button
          onClick={handleReadMoreClick}
          type="button"
          className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all cursor-pointer bg-transparent border-none p-0 text-left"
        >
          Read More
          <ArrowRight className="size-4 transition-transform" />
        </button>
      </div>
    </motion.article>
  );
}
