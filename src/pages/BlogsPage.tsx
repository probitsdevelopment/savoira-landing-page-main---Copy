// import { blogs } from "@/data/blogs"
// import { BlogCard } from "@/components/BlogCard"
// import { motion } from "framer-motion"

// export default function BlogsPage() {
//   return (
//     <div className="min-h-screen bg-[oklch(0.14_0.02_250)] pt-32 pb-16">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-16 text-center"
//         >
//           <h1 className="mb-4 text-5xl font-bold">
//             <span className="ai-gradient-text">Blogs & Insights</span>
//           </h1>
//           <p className="text-lg text-gray-400 max-w-2xl mx-auto">
//             Explore our latest thoughts on enterprise learning, AI technology, and
//             digital transformation
//           </p>
//         </motion.div>
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {blogs.map((blog, index) => (
//             <motion.div
//               key={blog.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <BlogCard blog={blog} />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
