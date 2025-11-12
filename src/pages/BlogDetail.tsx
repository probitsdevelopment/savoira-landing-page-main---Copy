// import { motion } from "framer-motion";
// import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import type { Blog } from "@/types/blog";

// const STRAPI_BASE = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

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
//   content?: any[];
//   author?: string;
//   category?: string;
//   publishedAt?: string;
//   readingTime?: number;
//   points?: string[];
// };

// type StrapiDetailResponse = {
//   data: { id: number; attributes: StrapiBlogAttrs };
// };

// export function BlogDetail() {
//   const { slug } = useParams<{ slug: string }>();
//   const [blog, setBlog] = useState<Blog | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const ctrl = new AbortController();

//     async function loadBlog() {
//       if (!slug) {
//         setError("No blog identifier provided in URL");
//         setLoading(false);
//         return;
//       }

//       try {
//         setLoading(true);
//         setError(null);

//         console.log("=== FETCHING BLOG DETAIL ===");
//         console.log("Blog ID from URL:", slug);

//         const url = `${STRAPI_BASE}/api/blogs/${slug}?populate=*`;
//         console.log("Fetching URL:", url);

//         const res = await fetch(url, { signal: ctrl.signal });

//         console.log("Response status:", res.status);
//         console.log("Response ok:", res.ok);

//         if (!res.ok) {
//           const errorText = await res.text();
//           console.error("Error response:", errorText);

//           if (res.status === 404) {
//             throw new Error(
//               `Blog with ID "${slug}" not found. The blog may have been deleted or the ID is incorrect.`
//             );
//           } else if (res.status === 403) {
//             throw new Error(
//               `Permission denied. Please enable "findOne" permission for Public role in Strapi Settings > Roles > Public > Blog.`
//             );
//           } else {
//             throw new Error(
//               `Failed to fetch blog (${res.status}). ${errorText}`
//             );
//           }
//         }

//         const json: StrapiDetailResponse = await res.json();
//         console.log("Blog data received:", JSON.stringify(json, null, 2));

//         if (!json.data) {
//           throw new Error(`No blog data returned from Strapi`);
//         }

//         const item = json.data;
//         const a = item.attributes || {};

//         const imageUrl =
//           absUrl(a.image?.data?.attributes?.url) ||
//           "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=675&fit=crop";

//         const blogData = {
//           id: String(item.id),
//           title: a.title || "",
//           slug: a.slug || String(item.id),
//           excerpt: a.excerpt || "",
//           image: imageUrl,
//           points: a.points || [],
//           publishedAt: a.publishedAt || new Date().toISOString(),
//           author: a.author || Team",
//           category: a.category || "Blogs",
//           content: a.content || [],
//         };

//         console.log("Blog loaded successfully:", blogData);
//         setBlog(blogData);
//       } catch (e: any) {
//         if (e.name !== "AbortError") {
//           console.error("Error loading blog:", e);
//           setError(e.message || "Unknown error");
//         }
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadBlog();
//     return () => ctrl.abort();
//   }, [slug]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[oklch(0.14_0.02_250)] pt-20 flex items-center justify-center">
//         <div className="text-center">
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//             className="size-12 border-4 border-primary/30 border-t-primary rounded-full mx-auto mb-4"
//           />
//           <p className="text-gray-400">Loading blog…</p>
//         </div>
//       </div>
//     );
//   }

//   if (error || !blog) {
//     return (
//       <div className="min-h-screen bg-[oklch(0.14_0.02_250)] pt-20 flex items-center justify-center">
//         <div className="text-center max-w-2xl mx-auto px-4">
//           <h1 className="text-4xl font-bold text-white mb-4">Blog Not Found</h1>
//           <p className="text-red-400 mb-6">{error || "Blog does not exist"}</p>

//           <div className="bg-[oklch(0.16_0.02_250)] border border-white/10 rounded-lg p-6 text-left mb-6">
//             <p className="text-gray-400 mb-4">
//               <strong>Troubleshooting Steps:</strong>
//             </p>
//             <ol className="text-gray-400 text-sm space-y-2 list-decimal list-inside">
//               <li>
//                 Go to Strapi Admin:{" "}
//                 <code className="bg-black/30 px-2 py-1 rounded">
//                   http://localhost:1337/admin
//                 </code>
//               </li>
//               <li>
//                 Click <strong>Settings</strong> → <strong>Roles</strong> →{" "}
//                 <strong>Public</strong>
//               </li>
//               <li>
//                 Find <strong>Blog</strong> section and check:
//                 <ul className="ml-6 mt-1 space-y-1">
//                   <li>
//                     ☑️ <code className="bg-black/30 px-1 rounded">find</code>
//                   </li>
//                   <li>
//                     ☑️ <code className="bg-black/30 px-1 rounded">findOne</code>{" "}
//                     ← Important!
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 Click <strong>Save</strong>
//               </li>
//               <li>
//                 Verify blog exists: <strong>Content Manager</strong> →{" "}
//                 <strong>Blog</strong>
//               </li>
//             </ol>
//           </div>

//           <Link
//             to="/blogs"
//             className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
//           >
//             <ArrowLeft className="size-4" />
//             Back to Blogs
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const publishedDate = new Date(blog.publishedAt).toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });

//   return (
//     <div className="min-h-screen bg-[oklch(0.14_0.02_250)] pt-20">
//       {/* Back Button */}
//       <div className="container mx-auto px-4 py-8">
//         <Link
//           to="/blogs"
//           className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors group"
//         >
//           <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
//           Back to Blogs
//         </Link>
//       </div>

//       {/* Hero Image */}
//       <div className="container mx-auto px-4 mb-12">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-white/10"
//         >
//           <img
//             src={blog.image}
//             alt={blog.title}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.02_250)] via-transparent to-transparent" />
//         </motion.div>
//       </div>

//       {/* Content */}
//       <article className="container mx-auto px-4 pb-20">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="max-w-4xl mx-auto"
//         >
//           {/* Category Badge */}
//           <div className="mb-6">
//             <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
//               {blog.category}
//             </span>
//           </div>

//           {/* Title */}
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
//             {blog.title}
//           </h1>

//           {/* Meta Info */}
//           <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8 pb-8 border-b border-white/10">
//             <div className="flex items-center gap-2">
//               <User className="size-4" />
//               <span className="text-sm">{blog.author}</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Calendar className="size-4" />
//               <span className="text-sm">{publishedDate}</span>
//             </div>
//             {blog.points && blog.points.length > 0 && (
//               <div className="flex items-center gap-2">
//                 <Clock className="size-4" />
//                 <span className="text-sm">
//                   {Math.ceil(blog.points.length * 0.5)} min read
//                 </span>
//               </div>
//             )}
//           </div>

//           {/* Excerpt */}
//           {blog.excerpt && (
//             <div className="mb-12 text-xl text-gray-300 leading-relaxed italic border-l-4 border-primary/50 pl-6">
//               {blog.excerpt}
//             </div>
//           )}

//           {/* Key Points */}
//           {blog.points && blog.points.length > 0 && (
//             <div className="mb-12 bg-[oklch(0.16_0.02_250)] border border-white/10 rounded-xl p-8">
//               <h2 className="text-2xl font-bold text-white mb-6">
//                 Key Takeaways
//               </h2>
//               <ul className="space-y-4">
//                 {blog.points.map((point, index) => (
//                   <li key={index} className="flex gap-3 text-gray-300">
//                     <span className="text-primary font-bold mt-1">•</span>
//                     <span className="leading-relaxed">{point}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Rich Content */}
//           {blog.content && blog.content.length > 0 && (
//             <div className="prose prose-invert prose-lg max-w-none">
//               {blog.content.map((block: any, index: number) => {
//                 if (block.type === "paragraph") {
//                   return (
//                     <p
//                       key={index}
//                       className="text-gray-300 leading-relaxed mb-6"
//                     >
//                       {block.children?.map((child: any, i: number) => (
//                         <span key={i}>{child.text}</span>
//                       ))}
//                     </p>
//                   );
//                 }
//                 if (block.type === "heading") {
//                   const level = block.level || 2;
//                   const headingContent = block.children?.map((child: any, i: number) => (
//                     <span key={i}>{child.text}</span>
//                   ));

//                   const className = "text-white font-bold mb-4 mt-8";

//                   switch (level) {
//                     case 1:
//                       return <h1 key={index} className={className}>{headingContent}</h1>;
//                     case 2:
//                       return <h2 key={index} className={className}>{headingContent}</h2>;
//                     case 3:
//                       return <h3 key={index} className={className}>{headingContent}</h3>;
//                     case 4:
//                       return <h4 key={index} className={className}>{headingContent}</h4>;
//                     case 5:
//                       return <h5 key={index} className={className}>{headingContent}</h5>;
//                     case 6:
//                       return <h6 key={index} className={className}>{headingContent}</h6>;
//                     default:
//                       return <h2 key={index} className={className}>{headingContent}</h2>;
//                   }
//                 }
//                 return null;
//               })}
//             </div>
//           )}
//         </motion.div>
//       </article>
//     </div>
//   );
// }
