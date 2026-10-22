
// "use client";
// import React, { useEffect, useState } from "react";

// const videos = [
//   {
//     id: "Bhv5nYJu7T0",
//     title: "Essential Tools & Equipment Used in Leather Footwear Manufacturing",
//   },
//   {
//     id: "r2ulpJ4W_vs",
//     title: "Leather Bag Zipper Fitting, Stitching & Finishing: A Step-by-Step Process",
//   },
//   {
//     id: "7As-u6un45k",
//     title: "Leather Footwear Cutting Machines | Functions & Key Components",
//   },
// ];

// const thumb = (id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
// const watchUrl = (id) => `https://www.youtube.com/watch?v=${id}`;
// const embedUrl = (id) => `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;

// const C = {
//   navy: "#0B2E8A",
//   blue: "#0B4FA0",
//   lightBg: "#EAF4FD",
//   rowAlt: "#F4F9FE",
//   border: "#BFDDF5",
//   green: "#13834A",
//   greenBg: "#E6F4EC",
//   greenBorder: "#C3E4D0",
// };

// function PlayIcon({ size = 22, bg = C.green, fg = "#fff" }) {
//   return (
//     <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
//       <circle cx="12" cy="12" r="12" fill={bg} />
//       <path d="M9.5 7.5v9l7-4.5z" fill={fg} />
//     </svg>
//   );
// }

// function ScreenIcon() {
//   return (
//     <svg width="64" height="58" viewBox="0 0 64 58" aria-hidden="true">
//       <rect x="3" y="3" width="58" height="40" rx="4" fill="none" stroke={C.blue} strokeWidth="4" />
//       <path d="M26 14v18l14-9z" fill="none" stroke={C.blue} strokeWidth="4" strokeLinejoin="round" />
//       <rect x="18" y="51" width="28" height="4" rx="2" fill={C.green} />
//     </svg>
//   );
// }

// export default function SkillLearningVideos() {
//   const [active, setActive] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 768);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   useEffect(() => {
//     const onKey = (e) => e.key === "Escape" && setActive(null);
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   const gridCols = isMobile ? "1fr" : "60px 1.4fr 1.2fr 220px";

//   return (
//     <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "'Nunito', 'Segoe UI', sans-serif" }}>
//       {/* Header */}
//       <header
//         style={{
//           position: "relative",
//           overflow: "hidden",
//           background: C.lightBg,
//           padding: isMobile ? "24px 16px" : "32px 56px",
//           display: "flex",
//           alignItems: "center",
//           gap: isMobile ? 16 : 40,
//         }}
//       >
//         <ScreenIcon />
//         <h1 style={{ margin: 0, color: C.navy, fontWeight: 800, fontSize: isMobile ? 28 : 46 }}>
//           Skill Learning Videos
//         </h1>
//         {!isMobile && (
//           <div
//             aria-hidden="true"
//             style={{
//               position: "absolute",
//               top: 0,
//               right: 0,
//               height: "100%",
//               width: "32%",
//               clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)",
//               background:
//                 "linear-gradient(115deg, #BFDFFA 0 6%, transparent 6% 9%, #C86A2E 9% 30%, #2B201B 30% 48%, #8E2E1F 48% 68%, #D98A45 68% 100%)",
//             }}
//           />
//         )}
//       </header>

//       <main style={{ padding: isMobile ? "16px" : "16px 40px 40px" }}>
//         <h2 style={{ color: C.navy, fontWeight: 800, fontSize: isMobile ? 22 : 30, margin: "8px 0 14px" }}>
//           Video Resources
//         </h2>

//         <div style={{ border: `1.5px solid ${C.border}`, borderRadius: 10, overflow: "hidden" }}>
//           {!isMobile && (
//             <div
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: gridCols,
//                 background: C.blue,
//                 color: "#fff",
//                 fontWeight: 700,
//                 fontSize: 16,
//                 padding: "14px 24px",
//               }}
//             >
//               <span />
//               <span style={{ paddingLeft: 16 }}>Name</span>
//               <span>Videos</span>
//               <span style={{ textAlign: "center" }}>Action</span>
//             </div>
//           )}

//           {videos.map((v, i) => (
//             <div
//               key={v.id}
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: gridCols,
//                 alignItems: "center",
//                 gap: isMobile ? 12 : 0,
//                 padding: isMobile ? 16 : "12px 24px",
//                 background: i % 2 === 0 ? C.lightBg : C.rowAlt,
//                 borderTop: i === 0 ? "none" : `1px solid ${C.border}`,
//               }}
//             >
//               <span style={{ color: C.navy, fontWeight: 800, fontSize: 18 }}>{i + 1}.</span>

//               <span
//                 style={{
//                   color: C.navy,
//                   fontWeight: 700,
//                   fontSize: isMobile ? 16 : 19,
//                   paddingLeft: isMobile ? 0 : 16,
//                   paddingRight: isMobile ? 0 : 24,
//                   lineHeight: 1.35,
//                 }}
//               >
//                 {v.title}
//               </span>

//               <button
//                 type="button"
//                 onClick={() => setActive(v)}
//                 aria-label={`Play ${v.title}`}
//                 style={{
//                   position: "relative",
//                   width: isMobile ? "100%" : 240,
//                   aspectRatio: "16 / 9",
//                   padding: 0,
//                   border: "none",
//                   borderRadius: 8,
//                   overflow: "hidden",
//                   cursor: "pointer",
//                   boxShadow: "0 2px 6px rgba(0,0,0,0.18)",
//                   background: "#000",
//                 }}
//               >
//                 <img
//                   src={thumb(v.id)}
//                   alt={v.title}
//                   loading="lazy"
//                   style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
//                 />
//                 <span
//                   style={{
//                     position: "absolute",
//                     top: "50%",
//                     left: "50%",
//                     transform: "translate(-50%, -50%)",
//                     width: 46,
//                     height: 46,
//                     borderRadius: "50%",
//                     background: "rgba(20,30,60,0.85)",
//                     border: "2px solid #fff",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M7 4v16l13-8z" fill="#fff" />
//                   </svg>
//                 </span>
//               </button>

//               <div style={{ display: "flex", justifyContent: isMobile ? "flex-start" : "center" }}>
//                 <button
//                   type="button"
//                   onClick={() => setActive(v)}
//                   style={{
//                     display: "inline-flex",
//                     alignItems: "center",
//                     gap: 12,
//                     padding: "12px 24px",
//                     background: C.greenBg,
//                     border: `1.5px solid ${C.greenBorder}`,
//                     borderRadius: 8,
//                     color: C.green,
//                     fontWeight: 700,
//                     fontSize: 16,
//                     cursor: "pointer",
//                   }}
//                 >
//                   <PlayIcon size={28} />
//                   Watch Video
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* Video modal */}
//       {active && (
//         <div
//           role="dialog"
//           aria-modal="true"
//           aria-label={active.title}
//           onClick={() => setActive(null)}
//           style={{
//             position: "fixed",
//             inset: 0,
//             background: "rgba(5,15,40,0.8)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             padding: 16,
//             zIndex: 1000,
//           }}
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             style={{ width: "100%", maxWidth: 960, background: "#fff", borderRadius: 10, overflow: "hidden" }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 gap: 12,
//                 padding: "12px 16px",
//                 background: C.blue,
//                 color: "#fff",
//               }}
//             >
//               <span style={{ fontWeight: 700, fontSize: 15 }}>{active.title}</span>
//               <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
//                 <a
//                   href={watchUrl(active.id)}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={{ color: "#fff", fontSize: 14, textDecoration: "underline" }}
//                 >
//                   Open in YouTube
//                 </a>
//                 <button
//                   type="button"
//                   onClick={() => setActive(null)}
//                   aria-label="Close"
//                   style={{ background: "none", border: "none", color: "#fff", fontSize: 22, cursor: "pointer", lineHeight: 1 }}
//                 >
//                   ×
//                 </button>
//               </div>
//             </div>
//             <div style={{ position: "relative", aspectRatio: "16 / 9", background: "#000" }}>
//               <iframe
//                 src={embedUrl(active.id)}
//                 title={active.title}
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



// "use client";
// import React, { useEffect, useState } from "react";

// const videos = [
//   {
//     id: "Bhv5nYJu7T0",
//     title: "Essential Tools & Equipment Used in Leather Footwear Manufacturing",
//     tag: "Footwear",
//   },
//   {
//     id: "r2ulpJ4W_vs",
//     title: "Leather Bag Zipper Fitting, Stitching & Finishing: A Step-by-Step Process",
//     tag: "Leather Goods",
//   },
//   {
//     id: "7As-u6un45k",
//     title: "Leather Footwear Cutting Machines | Functions & Key Components",
//     tag: "Footwear",
//   },
// ];

// const thumb = (id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
// const watchUrl = (id) => `https://www.youtube.com/watch?v=${id}`;
// const embedUrl = (id) => `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;

// function PlayIcon({ className = "" }) {
//   return (
//     <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
//       <path d="M8 5v14l11-7z" fill="currentColor" />
//     </svg>
//   );
// }

// export default function SkillLearningVideos() {
//   const [active, setActive] = useState(null);

//   useEffect(() => {
//     const onKey = (e) => e.key === "Escape" && setActive(null);
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = active ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [active]);

//   return (
//     <div className="bg-[#F5F9FD] min-h-screen">
//       {/* Banner */}
//       <section className="relative overflow-hidden bg-gradient-to-r from-[#0B3D91] to-[#0070BA]">
//         <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" aria-hidden="true" />
//         <div className="absolute right-40 -bottom-24 h-56 w-56 rounded-full bg-white/5" aria-hidden="true" />
//         <div className="relative mx-auto max-w-7xl px-4 py-10 md:px-10 md:py-14">
//           <div className="flex items-center gap-4">
//             <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/30">
//               <PlayIcon className="h-7 w-7" />
//             </span>
//             <div>
//               <h1 className="text-2xl font-extrabold text-white md:text-4xl">Skill Learning Videos</h1>
//               <p className="mt-1 text-sm text-blue-100 md:text-base">
//                 Watch practical demonstrations of leather machines, tools and production processes.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="h-1.5 w-full bg-[#C3DB9A]" />
//       </section>

//       {/* Video cards */}
//       <main className="mx-auto max-w-7xl px-4 py-8 md:px-10 md:py-12">
//         <div className="mb-6 flex items-end justify-between gap-4">
//           <h2 className="text-xl font-bold text-[#0B3D91] md:text-2xl">Video Resources</h2>
//           <span className="rounded-full bg-[#0070BA]/10 px-3 py-1 text-sm font-semibold text-[#0070BA]">
//             {videos.length} Videos
//           </span>
//         </div>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {videos.map((v, i) => (
//             <article
//               key={v.id}
//               className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#D6E6F5] transition hover:-translate-y-1 hover:shadow-lg"
//             >
//               <button
//                 type="button"
//                 onClick={() => setActive(v)}
//                 aria-label={`Play ${v.title}`}
//                 className="relative block aspect-video w-full overflow-hidden bg-black"
//               >
//                 <img
//                   src={thumb(v.id)}
//                   alt={v.title}
//                   loading="lazy"
//                   className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
//                 />
//                 <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
//                 <span className="absolute left-3 top-3 rounded-md bg-[#0B3D91] px-2.5 py-1 text-xs font-bold text-white">
//                   {String(i + 1).padStart(2, "0")}
//                 </span>
//                 <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#0070BA] shadow-lg transition group-hover:scale-110 group-hover:bg-white">
//                   <PlayIcon className="ml-0.5 h-6 w-6" />
//                 </span>
//               </button>

//               <div className="flex flex-1 flex-col p-5">
//                 <span className="mb-2 w-fit rounded-full bg-[#C3DB9A]/40 px-2.5 py-0.5 text-xs font-semibold text-[#3D6B12]">
//                   {v.tag}
//                 </span>
//                 <h3 className="flex-1 text-base font-bold leading-snug text-[#0B2E6B]">{v.title}</h3>
//                 <button
//                   type="button"
//                   onClick={() => setActive(v)}
//                   className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0070BA] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0B3D91]"
//                 >
//                   <PlayIcon className="h-4 w-4" />
//                   Watch Video
//                 </button>
//               </div>
//             </article>
//           ))}
//         </div>
//       </main>

//       {/* Video player modal */}
//       {active && (
//         <div
//           role="dialog"
//           aria-modal="true"
//           aria-label={active.title}
//           onClick={() => setActive(null)}
//           className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#050F28]/85 p-4"
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             className="w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-2xl"
//           >
//             <div className="flex items-center justify-between gap-3 bg-[#0B3D91] px-4 py-3 text-white">
//               <span className="text-sm font-semibold md:text-base">{active.title}</span>
//               <div className="flex shrink-0 items-center gap-3">
//                 <a
//                   href={watchUrl(active.id)}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-xs underline md:text-sm"
//                 >
//                   Open in YouTube
//                 </a>
//                 <button
//                   type="button"
//                   onClick={() => setActive(null)}
//                   aria-label="Close"
//                   className="text-2xl leading-none"
//                 >
//                   ×
//                 </button>
//               </div>
//             </div>
//             <div className="relative aspect-video bg-black">
//               <iframe
//                 src={embedUrl(active.id)}
//                 title={active.title}
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 className="absolute inset-0 h-full w-full border-0"
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// "use client";
// import React, { useState } from "react";

// const videos = [
//   {
//     id: "Bhv5nYJu7T0",
//     title: "Essential Tools & Equipment Used in Leather Footwear Manufacturing",
//     tag: "Footwear",
//   },
//   {
//     id: "r2ulpJ4W_vs",
//     title: "Leather Bag Zipper Fitting, Stitching & Finishing: A Step-by-Step Process",
//     tag: "Leather Goods",
//   },
//   {
//     id: "7As-u6un45k",
//     title: "Leather Footwear Cutting Machines | Functions & Key Components",
//     tag: "Footwear",
//   },
// ];

// const thumb = (id) => `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
// const watchUrl = (id) => `https://www.youtube.com/watch?v=${id}`;
// const embedUrl = (id, autoplay) =>
//   `https://www.youtube.com/embed/${id}?rel=0${autoplay ? "&autoplay=1" : ""}`;

// function PlayIcon({ className = "" }) {
//   return (
//     <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
//       <path d="M8 5v14l11-7z" fill="currentColor" />
//     </svg>
//   );
// }

// function EqualizerIcon({ className = "" }) {
//   return (
//     <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
//       <rect x="4" y="10" width="3" height="10" rx="1" fill="currentColor" />
//       <rect x="10.5" y="5" width="3" height="15" rx="1" fill="currentColor" />
//       <rect x="17" y="13" width="3" height="7" rx="1" fill="currentColor" />
//     </svg>
//   );
// }

// export default function SkillLearningVideos() {
//   const [current, setCurrent] = useState(0);
//   const [autoplay, setAutoplay] = useState(false);
//   const video = videos[current];

//   const select = (i) => {
//     setCurrent(i);
//     setAutoplay(true);
//     if (window.innerWidth < 1024) {
//       document.getElementById("slv-player")?.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Title strip */}
//       <section className="border-b border-[#D6E6F5] bg-[#F2F8FD]">
//         <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-6 md:flex-row md:items-end md:justify-between md:px-10 md:py-8">
//           <div>
//             <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0070BA]">Media Library</p>
//             <h1 className="mt-1 text-2xl font-extrabold text-[#0B2E6B] md:text-4xl">Skill Learning Videos</h1>
//           </div>
//           <p className="text-sm text-slate-600 md:max-w-sm md:text-right">
//             Practical demonstrations of leather machines, tools and production processes.
//           </p>
//         </div>
//       </section>

//       <main className="mx-auto grid max-w-7xl gap-6 px-4 py-6 md:px-10 md:py-10 lg:grid-cols-[1fr_380px]">
//         {/* Player */}
//         <section id="slv-player" className="scroll-mt-4">
//           <div className="overflow-hidden rounded-xl bg-black shadow-lg ring-1 ring-black/5">
//             <div className="relative aspect-video">
//               <iframe
//                 key={video.id}
//                 src={embedUrl(video.id, autoplay)}
//                 title={video.title}
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 className="absolute inset-0 h-full w-full border-0"
//               />
//             </div>
//           </div>

//           <div className="mt-5 flex flex-wrap items-center gap-2">
//             <span className="rounded bg-[#0070BA] px-2 py-0.5 text-xs font-bold text-white">
//               Video {current + 1} of {videos.length}
//             </span>
//             <span className="rounded bg-[#C3DB9A]/50 px-2 py-0.5 text-xs font-semibold text-[#3D6B12]">
//               {video.tag}
//             </span>
//           </div>
//           <h2 className="mt-3 text-xl font-bold leading-snug text-[#0B2E6B] md:text-2xl">{video.title}</h2>

//           <div className="mt-5 flex flex-wrap gap-3">
//             <button
//               type="button"
//               onClick={() => select(current - 1)}
//               disabled={current === 0}
//               className="rounded-lg border border-[#0070BA] px-4 py-2 text-sm font-semibold text-[#0070BA] transition hover:bg-[#0070BA]/5 disabled:cursor-not-allowed disabled:opacity-40"
//             >
//               ← Previous
//             </button>
//             <button
//               type="button"
//               onClick={() => select(current + 1)}
//               disabled={current === videos.length - 1}
//               className="rounded-lg bg-[#0070BA] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0B3D91] disabled:cursor-not-allowed disabled:opacity-40"
//             >
//               Next →
//             </button>
//             <a
//               href={watchUrl(video.id)}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="ml-auto self-center text-sm font-semibold text-[#0070BA] underline-offset-4 hover:underline"
//             >
//               Open in YouTube
//             </a>
//           </div>
//         </section>

//         {/* Playlist */}
//         <aside className="h-fit overflow-hidden rounded-xl border border-[#D6E6F5] bg-white">
//           <div className="flex items-center justify-between bg-[#0B3D91] px-4 py-3 text-white">
//             <h3 className="font-bold">Playlist</h3>
//             <span className="text-xs text-blue-100">{videos.length} videos</span>
//           </div>

//           <ul className="divide-y divide-[#E6EFF8]">
//             {videos.map((v, i) => {
//               const isActive = i === current;
//               return (
//                 <li key={v.id}>
//                   <button
//                     type="button"
//                     onClick={() => select(i)}
//                     aria-current={isActive ? "true" : undefined}
//                     className={`flex w-full items-start gap-3 p-3 text-left transition ${
//                       isActive ? "bg-[#EAF4FD]" : "hover:bg-[#F7FAFD]"
//                     }`}
//                   >
//                     <span
//                       className={`mt-1 w-5 shrink-0 text-center text-sm font-bold ${
//                         isActive ? "text-[#0070BA]" : "text-slate-400"
//                       }`}
//                     >
//                       {isActive ? <EqualizerIcon className="h-4 w-4" /> : i + 1}
//                     </span>
//                     <span className="relative aspect-video w-32 shrink-0 overflow-hidden rounded-md bg-black">
//                       <img src={thumb(v.id)} alt="" loading="lazy" className="h-full w-full object-cover" />
//                       {!isActive && (
//                         <span className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 transition hover:opacity-100">
//                           <PlayIcon className="h-6 w-6 text-white" />
//                         </span>
//                       )}
//                       {isActive && (
//                         <span className="absolute inset-x-0 bottom-0 bg-[#0070BA] py-0.5 text-center text-[10px] font-bold uppercase tracking-wide text-white">
//                           Now Playing
//                         </span>
//                       )}
//                     </span>
//                     <span className="min-w-0">
//                       <span
//                         className={`line-clamp-3 text-sm font-semibold leading-snug ${
//                           isActive ? "text-[#0B2E6B]" : "text-slate-700"
//                         }`}
//                       >
//                         {v.title}
//                       </span>
//                       <span className="mt-1 block text-xs text-slate-500">{v.tag}</span>
//                     </span>
//                   </button>
//                 </li>
//               );
//             })}
//           </ul>
//         </aside>
//       </main>
//     </div>
//   );
// }3

"use client";
import { useState } from "react";

const videos = [
  {
    id: "Bhv5nYJu7T0",
    title: "Essential Tools & Equipment Used in Leather Footwear Manufacturing",
  },
  {
    id: "r2ulpJ4W_vs",
    title: "Leather Bag Zipper Fitting, Stitching & Finishing: A Step-by-Step Process",
  },
  {
    id: "7As-u6un45k",
    title: "Leather Footwear Cutting Machines | Functions & Key Components",
  },
];

const SkillLearningVideos = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8 md:px-8 md:py-12">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0070BA]">Skill Learning Videos</h1>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#C3DB9A]" />
          <p className="mt-3 text-sm md:text-base text-gray-600">
            Practical demonstrations of leather machines, tools and production processes.
          </p>
        </div>

        {/* Video list */}
        <div className="space-y-4">
          {videos.map((v, i) => {
            const isOpen = openId === v.id;
            return (
              <div
                key={v.id}
                className={`rounded-xl border transition ${
                  isOpen ? "border-[#0070BA] shadow-md" : "border-gray-200 hover:border-[#0070BA]/50"
                }`}
              >
                {/* Row */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4">
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0070BA] text-white font-bold">
                      {i + 1}
                    </span>

                    <button
                      type="button"
                      onClick={() => toggle(v.id)}
                      aria-label={`Play ${v.title}`}
                      className="relative shrink-0 w-28 md:w-40 aspect-video rounded-md bg-gray-200 bg-cover bg-center overflow-hidden"
                      style={{ backgroundImage: `url(https://img.youtube.com/vi/${v.id}/mqdefault.jpg)` }}
                    >
                      <span className="absolute inset-0 flex items-center justify-center bg-black/25">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#0070BA] text-xs">
                          ▶
                        </span>
                      </span>
                    </button>

                    <h2 className="text-sm md:text-lg font-semibold text-gray-800 leading-snug">{v.title}</h2>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggle(v.id)}
                    className={`shrink-0 rounded-md px-5 py-2 text-sm font-semibold transition ${
                      isOpen
                        ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        : "bg-[#C3DB9A] text-gray-900 hover:bg-[#b3cf84]"
                    }`}
                  >
                    {isOpen ? "Close Video ▲" : "Watch Video ▼"}
                  </button>
                </div>

                {/* Player opens below the row */}
                {isOpen && (
                  <div className="border-t border-gray-200 p-4">
                    <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-black">
                      <iframe
                        src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`}
                        title={v.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full border-0"
                      />
                    </div>
                    <div className="mt-3 text-right">
                      <a
                        href={`https://www.youtube.com/watch?v=${v.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-[#0070BA] hover:underline"
                      >
                        Open in YouTube ↗
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillLearningVideos;