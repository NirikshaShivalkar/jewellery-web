"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const heroSlides = [
    {
      img: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a",
      title: "Pearls and Gemstones",
    },
    {
      img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
      title: "Crafted Elegance",
    },
    {
      img: "https://images.unsplash.com/photo-1600721391689-2564bb8055de",
      title: "Silent Luxury",
    },
  ];

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const products = [
    {
      img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
      title: "Aurora Stone Bracelet",
      desc: "Handcrafted natural stone bracelet with gold accents.",
      price: "₹2,499",
    },
    {
      img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d",
      title: "Marella Pearl Earrings",
      desc: "Minimal freshwater pearl earrings.",
      price: "₹1,899",
    },
    {
      img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
      title: "Quartz Gold Ring",
      desc: "Raw quartz with polished gold finish.",
      price: "₹3,299",
    },
    {
      img: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed",
      title: "Amber Pearl Necklace",
      desc: "Layered pearl necklace with warm tones.",
      price: "₹4,199",
    },
  ];

  return (
    <main className="bg-[#f8f6f2] text-[#111] scroll-smooth">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-6 md:px-10 py-6 border-b bg-white sticky top-0 z-50">
        <h1 className="text-xl tracking-[0.3em] font-light cursor-pointer">
          Veloura Jewels
        </h1>

        <nav className="hidden md:flex gap-8 text-sm text-gray-600">
          <a href="#collections">Collections</a>
          <a href="#story">Story</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="flex flex-col md:flex-row min-h-[92vh] bg-white relative overflow-hidden">

        {/* glow */}
        <div className="absolute inset-0">
          <div className="absolute top-[-120px] left-[-100px] w-[400px] h-[400px] bg-yellow-200/20 blur-[120px]" />
          <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-amber-200/20 blur-[140px]" />
        </div>

        {/* IMAGE SIDE */}
        <div className="relative w-full md:w-1/2 h-[55vh] md:h-auto overflow-hidden">

          {heroSlides.map((item, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                i === slide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={item.img}
                className="w-full h-full object-cover object-center scale-[1.05]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>
          ))}

        </div>

        {/* CONTENT SIDE */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-10 md:py-20">

          <div className="w-16 h-[1px] bg-black/40 mb-6" />

          <p className="uppercase tracking-[0.3em] text-xs text-gray-500">
            The Sylvie Collection
          </p>

          <h2 className="text-3xl md:text-5xl font-light mt-5">
            {heroSlides[slide].title}
          </h2>

          <p className="mt-6 text-gray-600 max-w-md">
            Jewellery shaped by restraint, precision, and emotional clarity.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <a
              href="#collections"
              className="border border-black px-6 py-3 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition"
            >
              Explore
            </a>

            <span className="text-xs text-gray-500">
              {String(slide + 1).padStart(2, "0")} / {heroSlides.length}
            </span>
          </div>

        </div>
      </section>

      {/* COLLECTIONS */}
      <section id="collections" className="px-6 md:px-10 py-20">

        <h3 className="text-sm tracking-[0.3em] text-gray-500 mb-10">
          ELEGANCE IN DETAIL
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="md:row-span-2">
            <img
              src="https://images.unsplash.com/photo-1600721391689-2564bb8055de"
              className="w-full h-full object-cover"
            />
          </div>

          {products.map((item, i) => (
            <a
              key={i}
              href={`https://wa.me/919999999999?text=Hi, I'm interested in ${item.title}`}
              className="bg-white shadow-sm block overflow-hidden"
            >
              <img
                src={item.img}
                className="w-full h-60 object-cover"
              />

              <div className="p-4">
                <p className="font-light">{item.title}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
                <p className="text-sm mt-1">{item.price}</p>
              </div>
            </a>
          ))}

        </div>
      </section>

      {/* STORY */}
      <section id="story" className="bg-white px-6 md:px-10 py-24 grid md:grid-cols-2 gap-10 items-center">

        <img
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638"
          className="w-full h-[400px] md:h-[500px] object-cover"
        />

        <div>
          <h2 className="text-3xl font-light">Our Story</h2>

          <p className="mt-6 text-gray-600">
            Jewellery is identity, presence, and emotion shaped into form.
          </p>

          <div className="mt-8 flex gap-4">
            <a className="border border-black px-6 py-3 text-xs uppercase">
              View
            </a>
            <a className="bg-black text-white px-6 py-3 text-xs uppercase">
              Custom
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-black text-white text-center py-24 px-6">

        <h2 className="text-3xl font-light">
          Private Jewellery Consultation
        </h2>

        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          Custom jewellery crafted for your identity and occasion.
        </p>

        <a
          href="https://wa.me/919999999999"
          className="mt-10 inline-block bg-white text-black px-6 py-3 text-xs uppercase"
        >
          Start Consultation
        </a>

      </section>

    </main>
  );
}

// "use client";

// import { useEffect, useState } from "react";

// export default function Home() {
//   const heroSlides = [
//     {
//       img: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a",
//       title: "Pearls and Gemstones",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
//       title: "Crafted Elegance",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1600721391689-2564bb8055de",
//       title: "Silent Luxury",
//     },
//   ];

//   const [slide, setSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const products = [
//     {
//       img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
//       title: "Aurora Stone Bracelet",
//       desc: "Handcrafted natural stone bracelet with gold accents for daily luxury wear.",
//       price: "₹2,499",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d",
//       title: "Marella Pearl Earrings",
//       desc: "Minimal freshwater pearl earrings designed for subtle elegance.",
//       price: "₹1,899",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
//       title: "Quartz Gold Ring",
//       desc: "Raw quartz centerpiece with polished gold finish.",
//       price: "₹3,299",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed",
//       title: "Amber Pearl Necklace",
//       desc: "Layered pearl necklace inspired by warm natural tones.",
//       price: "₹4,199",
//     },
//   ];

//   return (
//     <main className="bg-[#f8f6f2] text-[#111] scroll-smooth">

//       {/* NAVBAR */}
//       <header className="flex justify-between items-center px-10 py-6 border-b bg-white sticky top-0 z-50">

//         <h1
//           className="text-xl tracking-[0.3em] font-light cursor-pointer"
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         >
//           Veloura-jewels
//         </h1>

//         <nav className="hidden md:flex gap-8 text-sm tracking-wide text-gray-600">

//           <a href="#collections" className="hover:text-black transition">
//             Collections
//           </a>

//           <a href="#story" className="hover:text-black transition">
//             Story
//           </a>

//           <a href="#contact" className="hover:text-black transition">
//             Contact
//           </a>

//         </nav>
//       </header>

//       {/* HERO SLIDESHOW */}
//       <section className="relative flex flex-col md:flex-row min-h-[92vh] bg-white overflow-hidden">

//   {/* BACKGROUND GLOW LAYER (adds luxury depth) */}
//   <div className="absolute inset-0">
//     <div className="absolute top-[-120px] left-[-100px] w-[400px] h-[400px] bg-yellow-200/30 blur-[120px]" />
//     <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-amber-200/20 blur-[140px]" />
//   </div>

//   {/* IMAGE STACK (adds cinematic depth instead of flat swap) */}
//   <div className="relative overflow-hidden h-[55vh] md:h-auto">

//     {heroSlides.map((item, i) => (
//       <div
//         key={i}
//         className={`absolute inset-0 transition-opacity duration-[1200ms] ${
//           i === slide ? "opacity-100" : "opacity-0"
//         }`}
//       >

//         {/* IMAGE WITH SLOW ZOOM (this is what makes it premium) */}
//         <img
//           src={item.img}
//           className={`className="w-full h-full object-cover object-center md:object-cover scale-[1.05]" ${
//             i === slide ? "animate-[zoom_8s_linear]" : ""
//           }`}
//         />

//         {/* LUXURY OVERLAY GRADIENT */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

//         {/* subtle vignette */}
//         <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.25)]" />
//       </div>
//     ))}

//   </div>

//   {/* CONTENT LAYER (better spacing + hierarchy) */}
//   <div className="flex flex-col justify-center px-6 md:px-16 py-10 md:py-20">

//     <div className="w-16 h-[1px] bg-black/40 mb-6" />

//     <p className="uppercase tracking-[0.35em] text-xs text-gray-500">
//       The Sylvie Collection
//     </p>

//     <h2 className="text-3xl md:text-5xl font-light mt-5 leading-[1.05] tracking-tight">
//       {heroSlides[slide].title}
//     </h2>

//     <p className="mt-6 text-gray-600 max-w-md leading-relaxed">
//       Jewellery shaped by restraint, precision, and emotional clarity.
//       Designed to feel present—not loud.
//     </p>

//     {/* CTA + SLIDE CONTROL (feels like luxury UI panel now) */}
//     <div className="mt-8 md:mt-10 flex items-center gap-6">

//       <a
//         href="#collections"
//         className="border border-black px-7 py-3 text-xs tracking-[0.25em] uppercase hover:bg-black hover:text-white transition"
//       >
//         Explore Collection
//       </a>

//       <div className="flex items-center gap-2 text-xs text-gray-400 tracking-[0.2em]">
//         <span className="text-black">
//           {String(slide + 1).padStart(2, "0")}
//         </span>
//         /
//         <span>{heroSlides.length}</span>
//       </div>

//     </div>
//   </div>

//   {/* CSS KEYFRAME (important for slow zoom feel) */}
//   <style jsx>{`
//     @keyframes zoom {
//       from { transform: scale(1.08); }
//       to { transform: scale(1.15); }
//     }

//     .animate-\[zoom_8s_linear\] {
//       animation: zoom 8s linear forwards;
//     }
//   `}</style>

// </section>
//       {/* <section className="grid md:grid-cols-2 min-h-[90vh] bg-white">

//         <div className="relative overflow-hidden">

//           {heroSlides.map((item, i) => (
//             <div
//               key={i}
//               className={`absolute inset-0 transition-opacity duration-1000 ${
//                 i === slide ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               <img
//                 src={item.img}
//                 className="w-full h-full object-cover scale-[1.05]"
//               />
//               <div className="absolute inset-0 bg-black/20" />
//             </div>
//           ))}

//         </div>

//         <div className="flex flex-col justify-center px-16 py-20">

//           <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
//             The Sylvie Collection
//           </p>

//           <h2 className="text-4xl md:text-5xl font-light mt-4 leading-tight">
//             {heroSlides[slide].title}
//           </h2>

//           <p className="mt-6 text-gray-600 max-w-md">
//             A curated expression of refined craftsmanship and modern elegance.
//           </p>

//           <a
//             href="#collections"
//             className="mt-8 inline-block border border-black px-6 py-3 w-fit hover:bg-black hover:text-white transition"
//           >
//             DISCOVER NOW
//           </a>

//         </div>
//       </section> */}

//       {/* COLLECTIONS */}
//       <section id="collections" className="px-10 py-20">

//         <h3 className="text-sm tracking-[0.3em] text-gray-500 mb-10">
//           ELEGANCE IN DETAIL
//         </h3>

//         <div className="grid md:grid-cols-3 gap-6">

//           <div className="md:row-span-2">
//             <img
//               src="https://images.unsplash.com/photo-1600721391689-2564bb8055de"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {products.map((item, i) => (
//             <a
//               key={i}
//               href={`https://wa.me/919999999999?text=Hi, I'm interested in ${item.title}`}
//               className="bg-white shadow-sm overflow-hidden group block"
//             >

//               <img
//                 src={item.img}
//                 className="w-full md:w-auto h-60 object-cover group-hover:scale-105 transition duration-700"
//               />

//               <div className="p-4 space-y-1">

//                 <p className="text-sm font-light">{item.title}</p>

//                 <p className="text-xs text-gray-500">{item.desc}</p>

//                 <p className="text-sm">{item.price}</p>

//               </div>
//             </a>
//           ))}

//         </div>
//       </section>

//       {/* STORY */}
//       <section id="story" className="bg-white px-10 py-24 grid md:grid-cols-2 gap-10 items-center">

//         <img
//           src="https://images.unsplash.com/photo-1617038220319-276d3cfab638"
//           className="w-full h-[500px] object-cover"
//         />

//         <div>

//           <h2 className="text-3xl font-light">Our Story</h2>

//           <p className="mt-6 text-gray-600 leading-relaxed">
//             Jewellery is not decoration — it is identity, presence, and emotion
//             crafted into form.
//           </p>

//           <div className="mt-8 space-y-4">

//             <p className="text-sm text-gray-500">
//               Explore curated collections or request custom designs tailored to you.
//             </p>

//             <div className="flex gap-4">

//               <a
//                 href="#collections"
//                 className="border border-black px-6 py-3 text-xs uppercase tracking-[0.25em] hover:bg-black hover:text-white transition"
//               >
//                 View Collection
//               </a>

//               <a
//                 href="https://wa.me/919999999999"
//                 className="bg-black text-white px-6 py-3 text-xs uppercase tracking-[0.25em]"
//               >
//                 Custom Order
//               </a>

//             </div>
//           </div>

//         </div>
//       </section>

//       {/* CONTACT */}
//       <section id="contact" className="bg-black text-white text-center py-24 px-6">

//         <h2 className="text-3xl font-light">
//           Private Jewellery Consultation
//         </h2>

//         <p className="mt-4 text-gray-300 max-w-xl mx-auto">
//           Share your inspiration, budget, or occasion. We design pieces tailored
//           specifically to your identity and purpose.
//         </p>

//         <div className="mt-10 text-sm text-gray-400 space-y-2">

//           <p>Custom jewellery available</p>
//           <p>Bridal • Minimal • Luxury collections</p>
//           <p>Pan India delivery</p>

//         </div>

//         <a
//           href="https://wa.me/919999999999?text=Hi, I want a jewellery consultation"
//           className="mt-10 inline-block bg-white text-black px-6 py-3 text-xs uppercase tracking-[0.25em]"
//         >
//           Start Consultation
//         </a>

//       </section>

//     </main>
//   );
// }
// // "use client";

// // import { useEffect, useState } from "react";

// // export default function Home() {

// //   // EDITORIAL HERO SLIDES
// //   const heroSlides = [
// //     {
// //       img: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a",
// //       title: "Pearls and Gemstones",
// //     },
// //     {
// //       img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
// //       title: "Crafted Elegance",
// //     },
// //     {
// //       img: "https://images.unsplash.com/photo-1600721391689-2564bb8055de",
// //       title: "Silent Luxury",
// //     },
// //   ];

// //   const [slide, setSlide] = useState(0);

// //   // AUTO SLIDE (controlled editorial pacing)
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setSlide((prev) => (prev + 1) % heroSlides.length);
// //     }, 2000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <main className="bg-[#f8f6f2] text-[#111] scroll-smooth">

// //       {/* NAVBAR (now functional anchors) */}
// //       <header className="flex justify-between items-center px-10 py-6 border-b bg-white sticky top-0 z-50">

// //         <h1 className="text-xl tracking-[0.3em] font-light cursor-pointer"
// //           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
// //         >
// //           RIYA ATELIER
// //         </h1>

// //         <nav className="hidden md:flex gap-8 text-sm tracking-wide text-gray-600">

// //           <a href="#collections" className="hover:text-black transition">
// //             Collections
// //           </a>

// //           <a href="#pearls" className="hover:text-black transition">
// //             Pearls
// //           </a>

// //           <a href="#gemstones" className="hover:text-black transition">
// //             Gemstones
// //           </a>

// //           <a href="#story" className="hover:text-black transition">
// //             Story
// //           </a>

// //           <a
// //             href="https://wa.me/919999999999"
// //             className="text-black border border-black px-4 py-1 hover:bg-black hover:text-white transition"
// //           >
// //             Contact
// //           </a>

// //         </nav>
// //       </header>

// //       {/* HERO SECTION (EDITORIAL SLIDESHOW - upgraded) */}
// //       <section className="grid md:grid-cols-2 min-h-[90vh] bg-white">

// //         {/* IMAGE SLIDES */}
// //         <div className="relative overflow-hidden">

// //           {heroSlides.map((item, i) => (
// //             <div
// //               key={i}
// //               className={`absolute inset-0 transition-opacity duration-1000 ${
// //                 i === slide ? "opacity-100" : "opacity-0"
// //               }`}
// //             >
// //               <img
// //                 src={item.img}
// //                 className="w-full h-full object-cover scale-[1.05]"
// //               />

// //               <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
// //             </div>
// //           ))}

// //         </div>

// //         {/* CONTENT SIDE (now dynamic) */}
// //         <div className="flex flex-col justify-center px-16 py-20">

// //           <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
// //             The Sylvie Collection
// //           </p>

// //           <h2 className="text-4xl md:text-5xl font-light mt-4 leading-tight">
// //             {heroSlides[slide].title}
// //           </h2>

// //           <p className="mt-6 text-gray-600 leading-relaxed max-w-md">
// //             A curation of organic beauty, refined elegance, and artisanal craftsmanship.
// //           </p>

// //           <div className="mt-8 flex gap-4">

// //             <a
// //               href="#collections"
// //               className="inline-block border border-black px-6 py-3 w-fit hover:bg-black hover:text-white transition"
// //             >
// //               DISCOVER NOW
// //             </a>

// //             <span className="text-sm text-gray-400 self-center">
// //               {String(slide + 1).padStart(2, "0")} / {heroSlides.length}
// //             </span>

// //           </div>
// //         </div>
// //       </section>

// //       {/* FEATURE GRID */}
// //       <section id="collections" className="px-10 py-20">

// //         <h3 className="text-sm tracking-[0.3em] text-gray-500 mb-10">
// //           ELEGANCE IN DETAIL
// //         </h3>

// //         <div className="grid md:grid-cols-3 gap-6">

// //           <div className="md:row-span-2">
// //             <img
// //               src="https://images.unsplash.com/photo-1600721391689-2564bb8055de"
// //               className="w-full h-full object-cover"
// //               alt="Feature"
// //             />
// //           </div>

// //           <div id="pearls">
// //             <img
// //               src="https://images.unsplash.com/photo-1617038220319-276d3cfab638"
// //               className="w-full h-60 object-cover"
// //             />
// //             <p className="mt-2 text-sm font-light">Aurora Stone Bracelet</p>
// //           </div>

// //           <div>
// //             <img
// //               src="https://images.unsplash.com/photo-1611652022419-a9419f74343d"
// //               className="w-full h-60 object-cover"
// //             />
// //             <p className="mt-2 text-sm font-light">Marella Pearl Earrings</p>
// //           </div>

// //           <div id="gemstones">
// //             <img
// //               src="https://images.unsplash.com/photo-1605100804763-247f67b3557e"
// //               className="w-full h-60 object-cover"
// //             />
// //             <p className="mt-2 text-sm font-light">Quartz Gold Ring</p>
// //           </div>

// //           <div>
// //             <img
// //               src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed"
// //               className="w-full h-60 object-cover"
// //             />
// //             <p className="mt-2 text-sm font-light">Amber Pearl Necklace</p>
// //           </div>

// //         </div>
// //       </section>

// //       {/* STORY */}
// //       <section id="story" className="bg-white px-10 py-24 grid md:grid-cols-2 gap-10 items-center">

// //         <img
// //           src="https://images.unsplash.com/photo-1617038220319-276d3cfab638"
// //           className="w-full h-[500px] object-cover"
// //         />

// //         <div>
// //           <h2 className="text-3xl font-light">Our Story</h2>

// //           <p className="mt-6 text-gray-600 leading-relaxed">
// //             Each piece is designed with precision and inspired by natural forms.
// //             Jewellery is not decoration — it is identity and emotion.
// //           </p>

// //           <a
// //             href="https://wa.me/919999999999"
// //             className="mt-8 inline-block border border-black px-6 py-3 hover:bg-black hover:text-white transition"
// //           >
// //             Book Consultation
// //           </a>
// //         </div>
// //       </section>

// //       {/* CTA */}
// //       <section className="bg-black text-white text-center py-24 px-6">

// //         <h2 className="text-3xl font-light">
// //           Private Jewellery Consultation
// //         </h2>

// //         <p className="mt-4 text-gray-300">
// //           Custom pieces crafted exclusively for you
// //         </p>

// //         <a
// //           href="https://wa.me/919999999999"
// //           className="mt-8 inline-block bg-white text-black px-6 py-3"
// //         >
// //           Contact Now
// //         </a>

// //       </section>

// //     </main>
// //   );
// // }
// // // export default function Home() {
// // //   return (
// // //     <main className="bg-[#f8f6f2] text-[#111]">

// // //       {/* NAVBAR */}
// // //       <header className="flex justify-between items-center px-10 py-6 border-b bg-white">
// // //         <h1 className="text-xl tracking-[0.3em] font-light">
// // //           RIYA ATELIER
// // //         </h1>

// // //         <nav className="hidden md:flex gap-8 text-sm tracking-wide text-gray-600">
// // //           <a href="#">Collections</a>
// // //           <a href="#">Pearls</a>
// // //           <a href="#">Gemstones</a>
// // //           <a href="#">Story</a>
// // //           <a href="#">Contact</a>
// // //         </nav>
// // //       </header>

// // //       {/* HERO SECTION (EDITORIAL STYLE) */}
// // //       <section className="grid md:grid-cols-2 min-h-[90vh] bg-white">

// // //         {/* IMAGE SIDE */}
// // //         <div className="h-full">
// // //           <img
// // //             src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a"
// // //             className="w-full h-full object-cover"
// // //             alt="Jewellery Hero"
// // //           />
// // //         </div>

// // //         {/* CONTENT SIDE */}
// // //         <div className="flex flex-col justify-center px-16 py-20">
// // //           <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
// // //             The Sylvie Collection
// // //           </p>

// // //           <h2 className="text-4xl md:text-5xl font-light mt-4 leading-tight">
// // //             Pearls and Gemstones
// // //           </h2>

// // //           <p className="mt-6 text-gray-600 leading-relaxed max-w-md">
// // //             A curation of organic beauty, refined elegance, and artisanal craftsmanship.
// // //           </p>

// // //           <a
// // //             href="https://wa.me/919999999999"
// // //             className="mt-8 inline-block border border-black px-6 py-3 w-fit hover:bg-black hover:text-white transition"
// // //           >
// // //             DISCOVER NOW
// // //           </a>
// // //         </div>
// // //       </section>

// // //       {/* FEATURE GRID */}
// // //       <section className="px-10 py-20">

// // //         <h3 className="text-sm tracking-[0.3em] text-gray-500 mb-10">
// // //           ELEGANCE IN DETAIL
// // //         </h3>

// // //         <div className="grid md:grid-cols-3 gap-6">

// // //           {/* LEFT BIG IMAGE */}
// // //           <div className="md:row-span-2">
// // //             <img
// // //               src="https://images.unsplash.com/photo-1600721391689-2564bb8055de"
// // //               className="w-full h-full object-cover"
// // //               alt="Feature 1"
// // //             />
// // //           </div>

// // //           {/* SMALL ITEMS */}
// // //           <div>
// // //             <img
// // //               src="https://images.unsplash.com/photo-1617038220319-276d3cfab638"
// // //               className="w-full h-60 object-cover"
// // //               alt="Bracelet"
// // //             />
// // //             <p className="mt-2 text-sm font-light">
// // //               Aurora Stone Bracelet
// // //             </p>
// // //           </div>

// // //           <div>
// // //             <img
// // //               src="https://images.unsplash.com/photo-1611652022419-a9419f74343d"
// // //               className="w-full h-60 object-cover"
// // //               alt="Earrings"
// // //             />
// // //             <p className="mt-2 text-sm font-light">
// // //               Marella Pearl Earrings
// // //             </p>
// // //           </div>

// // //           <div>
// // //             <img
// // //               src="https://images.unsplash.com/photo-1605100804763-247f67b3557e"
// // //               className="w-full h-60 object-cover"
// // //               alt="Ring"
// // //             />
// // //             <p className="mt-2 text-sm font-light">
// // //               Quartz Gold Ring
// // //             </p>
// // //           </div>

// // //           <div>
// // //             <img
// // //               src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed"
// // //               className="w-full h-60 object-cover"
// // //               alt="Necklace"
// // //             />
// // //             <p className="mt-2 text-sm font-light">
// // //               Amber Pearl Necklace
// // //             </p>
// // //           </div>

// // //         </div>
// // //       </section>

// // //       {/* STORY SECTION */}
// // //       <section className="bg-white px-10 py-24 grid md:grid-cols-2 gap-10 items-center">

// // //         <img
// // //           src="https://images.unsplash.com/photo-1617038220319-276d3cfab638"
// // //           className="w-full h-[500px] object-cover"
// // //         />

// // //         <div>
// // //           <h2 className="text-3xl font-light">Our Story</h2>

// // //           <p className="mt-6 text-gray-600 leading-relaxed">
// // //             Each piece is designed with precision and inspired by natural forms.
// // //             We believe jewellery is not just decoration — it is identity, emotion,
// // //             and timeless expression.
// // //           </p>

// // //           <a
// // //             href="https://wa.me/919999999999"
// // //             className="mt-8 inline-block border border-black px-6 py-3 hover:bg-black hover:text-white transition"
// // //           >
// // //             Book Consultation
// // //           </a>
// // //         </div>
// // //       </section>

// // //       {/* CTA SECTION */}
// // //       <section className="bg-black text-white text-center py-24 px-6">
// // //         <h2 className="text-3xl font-light">
// // //           Private Jewellery Consultation
// // //         </h2>

// // //         <p className="mt-4 text-gray-300">
// // //           Custom pieces crafted exclusively for you
// // //         </p>

// // //         <a
// // //           href="https://wa.me/919999999999"
// // //           className="mt-8 inline-block bg-white text-black px-6 py-3"
// // //         >
// // //           Contact Now
// // //         </a>
// // //       </section>

// // //     </main>
// // //   );
// // // }
// // // export default function Home() {
// // //   return (
// // //     <main className="bg-[#faf7f2] text-[#111] font-serif">

// // //       {/* HERO */}
// // //       <section className="h-screen flex items-center justify-center text-center bg-[url('https://images.unsplash.com/photo-1605100804763-247f67b3557e')] bg-cover bg-center">
// // //         <div className="bg-black/50 p-10 rounded-2xl text-white max-w-2xl">
// // //           <h1 className="text-5xl font-bold tracking-wide">
// // //             Riya Atelier
// // //           </h1>
// // //           <p className="mt-4 text-lg text-gray-200">
// // //             Handcrafted luxury jewellery designed for timeless elegance
// // //           </p>

// // //           <a
// // //             href="https://wa.me/919999999999"
// // //             className="mt-6 inline-block bg-[#b08d57] text-black px-6 py-3 rounded-full font-semibold"
// // //           >
// // //             Enquire on WhatsApp
// // //           </a>
// // //         </div>
// // //       </section>

// // //       {/* COLLECTIONS */}
// // //       <section className="py-28 px-6 text-center">
// // //         <h2 className="text-4xl font-semibold mb-14">
// // //           Our Collections
// // //         </h2>

// // //         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

// // //           {/* Rings */}
// // //           <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition">
// // //             <img
// // //               src="https://images.unsplash.com/photo-1605100804763-247f67b3557e"
// // //               className="h-72 w-full object-cover"
// // //               alt="Rings"
// // //             />
// // //             <div className="p-6">
// // //               <h3 className="text-xl font-semibold">Rings</h3>
// // //               <p className="text-gray-500 mt-2">
// // //                 Elegant diamond & gold rings crafted for special moments
// // //               </p>
// // //             </div>
// // //           </div>

// // //           {/* Necklaces */}
// // //           <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition">
// // //             <img
// // //               src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed"
// // //               className="h-72 w-full object-cover"
// // //               alt="Necklaces"
// // //             />
// // //             <div className="p-6">
// // //               <h3 className="text-xl font-semibold">Necklaces</h3>
// // //               <p className="text-gray-500 mt-2">
// // //                 Statement necklaces blending tradition with modern luxury
// // //               </p>
// // //             </div>
// // //           </div>

// // //           {/* Bracelets */}
// // //           <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition">
// // //             <img
// // //               src="https://images.unsplash.com/photo-1617038220319-276d3cfab638"
// // //               className="h-72 w-full object-cover"
// // //               alt="Bracelets"
// // //             />
// // //             <div className="p-6">
// // //               <h3 className="text-xl font-semibold">Bracelets</h3>
// // //               <p className="text-gray-500 mt-2">
// // //                 Minimal and bold bracelets for everyday elegance
// // //               </p>
// // //             </div>
// // //           </div>

// // //         </div>
// // //       </section>

// // //       {/* FEATURED */}
// // //       <section className="py-28 px-6 bg-white text-center">
// // //         <h2 className="text-4xl font-semibold mb-14">
// // //           Featured Pieces
// // //         </h2>

// // //         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

// // //           {/* Product 1 */}
// // //           <div className="rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition">
// // //             <img
// // //               src="https://images.unsplash.com/photo-1617038220319-276d3cfab638"
// // //               className="h-72 w-full object-cover"
// // //             />
// // //             <div className="p-5">
// // //               <h3 className="font-semibold text-lg">Diamond Grace Bracelet</h3>
// // //               <p className="text-sm text-gray-500 mt-1">
// // //                 Custom handcrafted premium design
// // //               </p>
// // //               <p className="mt-3 text-[#b08d57] font-medium">
// // //                 Enquire for price
// // //               </p>
// // //             </div>
// // //           </div>

// // //           {/* Product 2 */}
// // //           <div className="rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition">
// // //             <img
// // //               src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed"
// // //               className="h-72 w-full object-cover"
// // //             />
// // //             <div className="p-5">
// // //               <h3 className="font-semibold text-lg">Royal Necklace Set</h3>
// // //               <p className="text-sm text-gray-500 mt-1">
// // //                 Bridal luxury statement piece
// // //               </p>
// // //               <p className="mt-3 text-[#b08d57] font-medium">
// // //                 Enquire for price
// // //               </p>
// // //             </div>
// // //           </div>

// // //           {/* Product 3 */}
// // //           <div className="rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition">
// // //             <img
// // //               src="https://images.unsplash.com/photo-1605100804763-247f67b3557e"
// // //               className="h-72 w-full object-cover"
// // //             />
// // //             <div className="p-5">
// // //               <h3 className="font-semibold text-lg">Elegant Gold Ring</h3>
// // //               <p className="text-sm text-gray-500 mt-1">
// // //                 Minimal handcrafted ring design
// // //               </p>
// // //               <p className="mt-3 text-[#b08d57] font-medium">
// // //                 Enquire for price
// // //               </p>
// // //             </div>
// // //           </div>

// // //         </div>
// // //       </section>

// // //       {/* ABOUT */}
// // //       <section className="py-28 px-6 text-center max-w-3xl mx-auto">
// // //         <h2 className="text-4xl font-semibold mb-6">
// // //           About Riya Atelier
// // //         </h2>
// // //         <p className="text-gray-600 leading-relaxed">
// // //           Riya Atelier creates handcrafted jewellery inspired by elegance,
// // //           tradition, and modern aesthetics. Each piece is designed with precision
// // //           to reflect individuality and luxury craftsmanship.
// // //         </p>
// // //       </section>

// // //       {/* CTA */}
// // //       <section className="py-28 bg-black text-white text-center">
// // //         <h2 className="text-4xl font-semibold">
// // //           Book a Private Consultation
// // //         </h2>
// // //         <p className="mt-3 text-gray-300">
// // //           Custom jewellery designed exclusively for you
// // //         </p>

// // //         <a
// // //           href="https://wa.me/919999999999"
// // //           className="mt-6 inline-block bg-[#b08d57] text-black px-6 py-3 rounded-full font-semibold"
// // //         >
// // //           Chat on WhatsApp
// // //         </a>
// // //       </section>

// // //     </main>
// // //   );
// // // }
// // // // export default function Home() {
// // // //   return (
// // // //     <main className="bg-white text-black">

// // // //       {/* HERO SECTION */}
// // // //       <section className="h-screen flex flex-col justify-center items-center text-center bg-[url('https://images.unsplash.com/photo-1601121141461-9d6647bca1ed')] bg-cover bg-center text-white">
// // // //         <div className="bg-black/50 p-10 rounded-xl">
// // // //           <h1 className="text-5xl font-bold">Riya Atelier</h1>
// // // //           <p className="mt-4 text-lg">Luxury handcrafted jewellery for timeless elegance</p>

// // // //           <a
// // // //             href="https://wa.me/919999999999"
// // // //             className="mt-6 inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold"
// // // //           >
// // // //             Enquire on WhatsApp
// // // //           </a>
// // // //         </div>
// // // //       </section>

// // // //       {/* COLLECTIONS */}
// // // //       <section className="py-20 px-6 text-center">
// // // //         <h2 className="text-3xl font-bold mb-10">Our Collections</h2>

// // // //         <div className="grid md:grid-cols-3 gap-6">

// // // //           {["Rings", "Necklaces", "Bridal Sets"].map((item, i) => (
// // // //             <div key={i} className="border p-6 rounded-xl shadow">
// // // //               <div className="h-48 bg-gray-100 mb-4"></div>
// // // //               <h3 className="text-xl font-semibold">{item}</h3>
// // // //               <p className="text-sm text-gray-500 mt-2">
// // // //                 Premium handcrafted {item.toLowerCase()} designed for elegance.
// // // //               </p>
// // // //             </div>
// // // //           ))}

// // // //         </div>
// // // //       </section>

// // // //       {/* FEATURED PRODUCTS */}
// // // //       <section className="py-20 px-6 bg-gray-50 text-center">
// // // //         <h2 className="text-3xl font-bold mb-10">Featured Pieces</h2>

// // // //         <div className="grid md:grid-cols-3 gap-6">

// // // //           {[1, 2, 3].map((item) => (
// // // //             <div key={item} className="bg-white p-4 rounded-xl shadow">
// // // //               <div className="h-60 bg-gray-200 mb-4"></div>
// // // //               <h3 className="font-semibold">Diamond Elegance Set</h3>
// // // //               <p className="text-sm text-gray-500">Custom made luxury piece</p>
// // // //             </div>
// // // //           ))}

// // // //         </div>
// // // //       </section>

// // // //       {/* ABOUT */}
// // // //       <section className="py-20 px-6 text-center">
// // // //         <h2 className="text-3xl font-bold mb-4">About Riya Atelier</h2>
// // // //         <p className="max-w-2xl mx-auto text-gray-600">
// // // //           We design handcrafted jewellery that blends tradition with modern elegance.
// // // //           Every piece is made with precision, passion, and premium craftsmanship.
// // // //         </p>
// // // //       </section>

// // // //       {/* CTA */}
// // // //       <section className="py-20 bg-black text-white text-center">
// // // //         <h2 className="text-3xl font-bold">Book a Consultation</h2>
// // // //         <p className="mt-2">Get custom jewellery designed for you</p>

// // // //         <a
// // // //           href="https://wa.me/919999999999"
// // // //           className="mt-6 inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold"
// // // //         >
// // // //           Chat on WhatsApp
// // // //         </a>
// // // //       </section>

// // // //     </main>
// // // //   );
// // // // }
