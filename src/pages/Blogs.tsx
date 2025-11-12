// import { BlogCard } from "@/components/BlogCard";
// import { motion } from "framer-motion";
// import { BookOpen } from "lucide-react";
// import { useEffect, useState } from "react";
// import type { Blog } from "@/types/blog";

// // ✅ CORRECT: Base URL only (without /api/blogs)
// const STRAPI_BASE = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

// // Helper to construct absolute URLs
// function absUrl(path?: string | null, base = STRAPI_BASE) {
//   if (!path) return "";
//   return path.startsWith("http") ? path : `${base}${path}`;
// }

// type StrapiImage = {
//   data?: { attributes?: { url?: string } } | null;
// };

// type StrapiBlogAttrs = {
//   title?: string;
//   slug?: string;
//   excerpt?: string;
//   image?: StrapiImage;
//   content?: unknown[];
//   author?: string;
//   category?: string;
//   publishedAt?: string;
//   readingTime?: number;
//   points?: string[];
// };

// type StrapiListResponse = {
//   data: Array<{ id: number; attributes: StrapiBlogAttrs }>;
//   meta: unknown;
// };

// export function Blogs() {
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const ctrl = new AbortController();

//     async function loadBlogs() {
//       try {
//         setLoading(true);
//         setError(null);

//         // ✅ CORRECT: Add /api/blogs to the base URL
//         const res = await fetch(
//           `${STRAPI_BASE}/api/blogs?populate=*&sort=publishedAt:desc`,
//           { signal: ctrl.signal }
//         );

//         if (!res.ok) throw new Error(`Failed to fetch blogs (${res.status})`);

//         const json: StrapiListResponse = await res.json();

//         console.log("Raw Strapi Response:", JSON.stringify(json, null, 2));

//         const mapped: Blog[] = json.data.map((item) => {
//           const a = item.attributes || {};

//           console.log("Processing blog item:", {
//             id: item.id,
//             rawAttributes: a,
//             slugFromStrapi: a.slug,
//             slugType: typeof a.slug,
//           });

//           const imageUrl =
//             absUrl(a.image?.data?.attributes?.url) ||
//             "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=675&fit=crop";

//           // Generate slug from title if missing
//           const slug =
//             a.slug ||
//             (a.title
//               ? a.title
//                   .toLowerCase()
//                   .replace(/[^a-z0-9]+/g, "-")
//                   .replace(/^-|-$/g, "")
//               : "") ||
//             String(item.id);

//           const blog = {
//             id: String(item.id),
//             title: a.title || "",
//             slug: slug,
//             excerpt: a.excerpt || "",
//             image: imageUrl,
//             points: a.points || [],
//             publishedAt: a.publishedAt || new Date().toISOString(),
//             author: a.author || "Team",
//             category: a.category || "Blogs",
//             content: (a.content as any[]) || [],
//           };

//           console.log("Final blog object:", {
//             id: blog.id,
//             title: blog.title,
//             slug: blog.slug,
//             slugLength: blog.slug.length,
//             wasGenerated: !a.slug,
//           });

//           return blog;
//         });

//         console.log("Total blogs loaded:", mapped.length);
//         setBlogs(mapped);
//       } catch (e: any) {
//         if (e.name !== "AbortError") setError(e.message || "Unknown error");
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadBlogs();
//     return () => ctrl.abort();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[oklch(0.14_0.02_250)] pt-20 flex items-center justify-center">
//         <div className="text-center">
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//             className="size-12 border-4 border-primary/30 border-t-primary rounded-full mx-auto mb-4"
//           />
//           <p className="text-gray-400">Loading blogs…</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-[oklch(0.14_0.02_250)] pt-20 flex items-center justify-center">
//         <div className="text-center max-w-2xl mx-auto px-4">
//           <h1 className="text-4xl font-bold text-white mb-4">
//             Error Loading Blogs
//           </h1>
//           <p className="text-red-400 mb-6">{error}</p>
//           <div className="bg-[oklch(0.16_0.02_250)] border border-white/10 rounded-lg p-6 text-left">
//             <p className="text-gray-400 mb-2">
//               <strong>Strapi URL:</strong>{" "}
//               <code className="bg-black/30 px-2 py-1 rounded text-primary">
//                 {STRAPI_BASE}
//               </code>
//             </p>
//             <p className="text-gray-400 mb-2">
//               <strong>Endpoint:</strong>{" "}
//               <code className="bg-black/30 px-2 py-1 rounded">/api/blogs</code>
//             </p>
//             <p className="text-gray-400 text-sm mt-4">
//               ✅ Make sure Strapi is running
//               <br />✅ Check Public role has{" "}
//               <code className="bg-black/30 px-1 rounded">find</code> permission
//               <br />✅ Verify blog content type exists
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[oklch(0.14_0.02_250)] pt-20">
//       {/* Hero Section */}
//       <section className="relative border-b border-white/5 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.02_250)] via-[oklch(0.16_0.02_250)] to-[oklch(0.14_0.02_250)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.3_0.1_280),transparent_50%)] opacity-20" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,oklch(0.3_0.1_320),transparent_50%)] opacity-20" />

//         <div className="relative container mx-auto px-4 py-20 md:py-28">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="mx-auto max-w-4xl text-center"
//           >
//             <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
//               <BookOpen className="size-5 text-primary" />
//               <span className="text-sm font-medium text-primary">
//                 Knowledge Hub
//               </span>
//             </div>

//             <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
//               Blogs & <span className="ai-gradient-text">Insights</span>
//             </h1>

//             <p className="text-lg text-gray-400 md:text-xl max-w-2xl mx-auto leading-relaxed">
//               Explore our latest thoughts on enterprise learning, AI-powered
//               training, and transforming L&amp;D operations for the modern
//               workplace.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Blogs Grid */}
//       <section className="container mx-auto px-4 py-16 md:py-20">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
//         >
//           {blogs.map((blog, index) => (
//             <motion.div
//               key={blog.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <BlogCard blog={blog} />
//             </motion.div>
//           ))}
//         </motion.div>

//         {blogs.length === 0 && (
//           <div className="text-center py-20">
//             <BookOpen className="size-16 text-gray-600 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-gray-400 mb-2">
//               No blogs yet
//             </h3>
//             <p className="text-gray-500">
//               Check back soon for exciting content!
//             </p>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }
