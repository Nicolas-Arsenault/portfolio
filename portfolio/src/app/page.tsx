import React from 'react'
function page() {
  return (
<div>
  <div className="max-w-2xl mx-auto px-4 py-12 md:py-20">
    <header className="flex flex-col items-center mb-16" style={{"opacity":"1","transform":"none"}}>
      <div className="mb-4" style={{"opacity":"1","transform":"none"}}>
        <img alt="Nick" width={512} height={512} decoding="async" data-nimg={1} className="rounded-full object-cover w-[100px] h-[100px]" style={{"color":"transparent"}} src="/images/pfp.jpeg" />
      </div>
      <h1 className="font-mono text-5xl mb-8 text-center" style={{"opacity":"1","transform":"none"}}>Hi, I'm Nicolas.</h1>
      <div className="relative w-full max-w-xl" style={{"opacity":"1","transform":"none"}}>
        <div className="bg-card shadow-md rounded-lg p-6">
          <p className="text-xl sm:text-2xl mb-4 leading-relaxed flex flex-wrap items-center gap-x-1">I'm a Software Developer at <span className="inline-flex items-center gap-x-0.5 min-w-0">
              <img alt="RAIL" loading="lazy" width={50} height={50} decoding="async" data-nimg={1} className="mx-1" style={{"color":"transparent"}} src="/images/rail.png" />RAIL, </span>studying CS at the <span className="inline-flex items-center gap-x-0.5 min-w-0">
              <img alt="Sept-Iles" loading="lazy" width={40} height={40} decoding="async" data-nimg={1} className="mx-1 rounded-full" style={{"color":"transparent"}} src="/images/cegeo.png" />College of Sept-Iles </span>
          </p>
          <div className="flex flex-col flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#94C040] mr-2" style={{"transform":"scale(1.08831)"}} />
              <span className="text-sm">
                <span className="hidden sm:inline">currently </span>building Sparkpad </span>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <a aria-label="LinkedIn" href="https://linkedin.com/in/nicolas-arsenault">
                <img aria-hidden="true" loading="lazy" width={64} height={64} decoding="async" data-nimg={1} className="w-5 h-5 sm:w-6 sm:h-6" style={{"color":"transparent"}} src="/images/linkedin.png" />
              </a>
              <a aria-label="Twitter" href="https://x.com/larrisx">
                <img aria-hidden="true" loading="lazy" width={64} height={64} decoding="async" data-nimg={1} className="w-5 h-5 sm:w-6 sm:h-6" style={{"color":"transparent"}} src="./Larris's Portfolio_files/x.svg" />
              </a>
              <a aria-label="GitHub" href="https://github.com/Profilist">
                <img aria-hidden="true" loading="lazy" width={64} height={64} decoding="async" data-nimg={1} className="w-5 h-5 sm:w-6 sm:h-6" style={{"color":"transparent"}} src="./Larris's Portfolio_files/github.svg" />
              </a>
              <a aria-label="Email" href="mailto:larris.xie@gmail.com">
                <img aria-hidden="true" loading="lazy" width={64} height={64} decoding="async" data-nimg={1} className="w-5 h-5 sm:w-6 sm:h-6" style={{"color":"transparent"}} src="./Larris's Portfolio_files/email.svg" />
              </a>
            </div>
          </div>
        </div>
        <div className="hidden sm:block absolute -right-4 -top-12 md:-right-8 md:-top-16" style={{"opacity":"1","transform":"none"}}>
          <img aria-hidden="true" loading="lazy" width={140} height={140} decoding="async" data-nimg={1} style={{"color":"transparent"}} src="./Larris's Portfolio_files/pompompurin.svg" />
        </div>
      </div>
    </header>
    <div className="px-4 sm:px-8" style={{"opacity":"1","transform":"none"}}>
      <div style={{"width":"100%"}}>
        <section className="mt-20 flex flex-col">
          <p className="text-xl md:text-2xl mb-10">Checkout what I've built recently!</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 relative">
            <div className="fixed inset-0 bg-white/40 backdrop-blur-sm z-[15]" style={{"opacity":"0"}} />
            <div className="group relative">
              <div className="flex flex-col items-center" style={{"opacity":"1"}}>
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white flex items-center justify-center relative" style={{"transform":"none"}}>
                  <img alt="pmo" loading="lazy" width={320} height={320} decoding="async" data-nimg={1} className="object-contain w-24 h-24 md:w-28 md:h-28" style={{"color":"transparent"}} srcSet="/_next/image?url=%2Fprojects%2Fpmo.png&w=384&q=75 1x, /_next/image?url=%2Fprojects%2Fpmo.png&w=640&q=75 2x" src="./Larris's Portfolio_files/pmo.png" />
                </div>
                <span className="mt-3 px-4 py-1 bg-[#E5E5E5] text-base rounded-full font-medium">pmo</span>
              </div>
            </div>
            <div className="group relative">
              <div className="flex flex-col items-center" style={{"opacity":"1"}}>
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white flex items-center justify-center relative" style={{"transform":"none"}}>
                  <img alt="on the dot" loading="lazy" width={320} height={320} decoding="async" data-nimg={1} className="object-contain w-24 h-24 md:w-28 md:h-28" style={{"color":"transparent"}} src="./Larris's Portfolio_files/onthedot.svg" />
                </div>
                <span className="mt-3 px-4 py-1 bg-[#E5E5E5] text-base rounded-full font-medium">on the dot</span>
              </div>
            </div>
            <div className="group relative">
              <div className="flex flex-col items-center" style={{"opacity":"1"}}>
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white flex items-center justify-center relative" style={{"transform":"none"}}>
                  <img alt="off the hook" loading="lazy" width={320} height={320} decoding="async" data-nimg={1} className="object-contain w-24 h-24 md:w-28 md:h-28" style={{"color":"transparent"}} src="./Larris's Portfolio_files/offthehook.svg" />
                </div>
                <span className="mt-3 px-4 py-1 bg-[#E5E5E5] text-base rounded-full font-medium">off the hook</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <a aria-label="See more projects" href="https://www.larris.me/projects">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <path d="M15 3h6v6" />
                    <path d="m10 14 11-11" />
                  </svg>
                </div>
              </a>
              <span className="mt-3 px-4 py-1 bg-[#E5E5E5] text-base rounded-full tracking-tight font-medium">see more</span>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div className="px-4 sm:px-8 mt-16 sm:mt-24" style={{"opacity":"1","transform":"none"}}>
      <div className="w-full">
        <div style={{"height":"3364px"}} className="relative w-full hidden md:block">
          <div className="sticky top-16 flex flex-col w-full" style={{"height":"600px"}}>
            <div className="flex items-center justify-between w-full mb-10">
              <h2 className="text-2xl md:text-3xl font-medium">Where I’ve been</h2>
              <span className="text-lg md:text-xl">view my <a className="text-lg md:text-xl hover:opacity-70 transition" aria-label="View my resume" href="https://www.larris.me/resume">
                  <span className="font-medium underline underline-offset-4">resume</span>
                </a>
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-start w-full h-full">
              <div className="flex-1 min-w-[260px] max-w-[350px] h-full px-4">
                <div className="relative h-auto">
                  <div className="flex flex-col justify-center h-full">
                    <div className="flex items-start relative z-10">
                      <div className="w-20 flex flex-col items-center relative z-10 -mb-6">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center border-4" style={{"border":"#FFF8B8","background":"#FFF8B8"}}>
                          <img alt="Shopify logo" aria-hidden="true" loading="lazy" width={40} height={40} decoding="async" data-nimg={1} style={{"color":"transparent"}} src="./Larris's Portfolio_files/shopify.svg" />
                        </div>
                        <div className="relative flex flex-col items-center h-20">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-[#EEEEEE] rounded-full" aria-hidden="true" />
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-[#FFF8B8] rounded-full origin-top transition-transform duration-200 ease-out" style={{"transform":"scaleY(0)"}} aria-hidden="true" />
                        </div>
                      </div>
                      <div className="flex-1 pl-4">
                        <div className="font-bold text-2xl leading-tight">Shopify</div>
                        <div className="text-base font-normal">Software Engineer</div>
                        <div className="text-sm text-black/60 mt-1">May 2025 - Aug 2025</div>
                      </div>
                    </div>
                    <div className="flex items-start relative z-10">
                      <div className="w-20 flex flex-col items-center relative z-10 -mb-6">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center border-4" style={{"border":"#EEEEEE","background":"#EEEEEE"}}>
                          <img alt="UWaterloo logo" aria-hidden="true" loading="lazy" width={40} height={40} decoding="async" data-nimg={1} style={{"color":"transparent"}} src="./Larris's Portfolio_files/uwaterloo.svg" />
                        </div>
                        <div className="relative flex flex-col items-center h-20">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-[#EEEEEE] rounded-full" aria-hidden="true" />
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-[#FFF8B8] rounded-full origin-top transition-transform duration-200 ease-out" style={{}} aria-hidden="true" />
                        </div>
                      </div>
                      <div className="flex-1 pl-4">
                        <div className="font-bold text-2xl leading-tight">UWaterloo</div>
                        <div className="text-base font-normal">Research Assistant</div>
                        <div className="text-sm text-black/60 mt-1">Jan 2025 - Apr 2025</div>
                      </div>
                    </div>
                    <div className="flex items-start relative z-10">
                      <div className="w-20 flex flex-col items-center relative z-10 -mb-6">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center border-4" style={{"border":"#EEEEEE","background":"#EEEEEE"}}>
                          <img alt="Jobeyze logo" aria-hidden="true" loading="lazy" width={40} height={40} decoding="async" data-nimg={1} style={{"color":"transparent"}} src="./Larris's Portfolio_files/jobeyze.svg" />
                        </div>
                        <div className="relative flex flex-col items-center h-20">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-[#EEEEEE] rounded-full" aria-hidden="true" />
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-[#FFF8B8] rounded-full origin-top transition-transform duration-200 ease-out" style={{}} aria-hidden="true" />
                        </div>
                      </div>
                      <div className="flex-1 pl-4">
                        <div className="font-bold text-2xl leading-tight">Jobeyze</div>
                        <div className="text-base font-normal">Software Engineer</div>
                        <div className="text-sm text-black/60 mt-1">Dec 2024 - Mar 2025</div>
                      </div>
                    </div>
                    <div className="flex items-start relative z-10">
                      <div className="w-20 flex flex-col items-center relative z-10 ">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center border-4" style={{"border":"#EEEEEE","background":"#EEEEEE"}}>
                          <img alt="Lumiere logo" aria-hidden="true" loading="lazy" width={40} height={40} decoding="async" data-nimg={1} style={{"color":"transparent"}} src="./Larris's Portfolio_files/lumiere.svg" />
                        </div>
                      </div>
                      <div className="flex-1 pl-4">
                        <div className="font-bold text-2xl leading-tight">Lumiere</div>
                        <div className="text-base font-normal">ML Researcher</div>
                        <div className="text-sm text-black/60 mt-1">Aug 2022 - Feb 2023</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex-1 flex justify-center md:justify-start">
                <div className="relative rotate-2 rounded-lg shadow-[5px_5px_10px_-2px_rgba(33,33,33,.3)] min-h-[320px] max-w-[480px] w-full px-8 py-8" style={{"background":"#FFF8B8"}}>
                  <div className="absolute inset-0 rounded-sm" style={{"background":"#FFF8B8","transform":"none"}}>
                    <ul className="list-disc pl-12 pr-8 mt-12 text-lg md:text-xl leading-relaxed space-y-2">
                      <li>currently working at Shopify this Summer!</li>
                      <li>backend engineer on the Retail Checkout team <span role="img" aria-label="shopping bags">🛍️</span>
                      </li>
                    </ul>
                  </div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pin" aria-hidden="true" style={{"transform":"none"}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden flex items-center justify-between w-full px-4">
          <h2 className="text-2xl font-medium">Where I’ve been</h2>
          <span className="text-lg">my <a className="text-lg hover:opacity-70 transition" aria-label="View my resume" href="https://www.larris.me/resume">
              <span className="font-medium underline underline-offset-4">resume</span>
            </a>
          </span>
        </div>
        <div className="md:hidden space-y-6 px-4 py-8">
          <div className="mb-8">
            <div className="flex items-center space-x-4">
              <img alt="Shopify logo" aria-hidden="true" loading="lazy" width={40} height={40} decoding="async" data-nimg={1} style={{"color":"transparent"}} src="./Larris's Portfolio_files/shopify.svg" />
              <div className="flex-1">
                <div className="font-bold text-xl leading-tight">Shopify</div>
                <div className="text-base font-normal">Software Engineer</div>
                <div className="text-sm text-black/60">May 2025 - Aug 2025</div>
              </div>
            </div>
            <div className="mt-6 rounded-lg shadow-[5px_5px_10px_-2px_rgba(33,33,33,.3)] px-6 py-6 pb-12 relative" style={{"background":"#FFF8B8"}}>
              <div className="absolute top-3 left-1/2 -translate-x-1/2">
                <div className="pin" aria-hidden="true" />
              </div>
              <ul className="list-disc px-6 text-lg leading-relaxed space-y-2 mt-5">
                <li>currently working at Shopify this Summer!</li>
                <li>backend engineer on the Retail Checkout team <span role="img" aria-label="shopping bags">🛍️</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex items-center space-x-4">
              <img alt="UWaterloo logo" aria-hidden="true" loading="lazy" width={40} height={40} decoding="async" data-nimg={1} style={{"color":"transparent"}} src="./Larris's Portfolio_files/uwaterloo.svg" />
              <div className="flex-1">
                <div className="font-bold text-xl leading-tight">UWaterloo</div>
                <div className="text-base font-normal">Research Assistant</div>
                <div className="text-sm text-black/60">Jan 2025 - Apr 2025</div>
              </div>
            </div>
            <div className="mt-6 rounded-lg shadow-[5px_5px_10px_-2px_rgba(33,33,33,.3)] px-6 py-6 pb-12 relative" style={{"background":"#FFF8B8"}}>
              <div className="absolute top-3 left-1/2 -translate-x-1/2">
                <div className="pin" aria-hidden="true" />
              </div>
              <ul className="list-disc px-6 text-lg leading-relaxed space-y-2 mt-5">
                <li>researched <span className="font-medium">federated learning</span> for distributed time-series data </li>
                <li>implemented transformers from <a href="https://arxiv.org/pdf/2410.24210" className="underline underline-offset-4">recent papers</a> in PyTorch </li>
              </ul>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex items-center space-x-4">
              <img alt="Jobeyze logo" aria-hidden="true" loading="lazy" width={40} height={40} decoding="async" data-nimg={1} style={{"color":"transparent"}} src="./Larris's Portfolio_files/jobeyze.svg" />
              <div className="flex-1">
                <div className="font-bold text-xl leading-tight">Jobeyze</div>
                <div className="text-base font-normal">Software Engineer</div>
                <div className="text-sm text-black/60">Dec 2024 - Mar 2025</div>
              </div>
            </div>
            <div className="mt-6 rounded-lg shadow-[5px_5px_10px_-2px_rgba(33,33,33,.3)] px-6 py-6 pb-12 relative" style={{"background":"#FFF8B8"}}>
              <div className="absolute top-3 left-1/2 -translate-x-1/2">
                <div className="pin" aria-hidden="true" />
              </div>
              <ul className="list-disc px-6 text-lg leading-relaxed space-y-2 mt-5">
                <li>developed the landing pages from scratch for <a href="https://www.jobeyze.ca/" className="underline underline-offset-4">Jobeyze</a>
                </li>
                <li>streamlined automated web scrapers to extract <span className="font-medium">1200+ jobs daily</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex items-center space-x-4">
              <img alt="Lumiere logo" aria-hidden="true" loading="lazy" width={40} height={40} decoding="async" data-nimg={1} style={{"color":"transparent"}} src="./Larris's Portfolio_files/lumiere.svg" />
              <div className="flex-1">
                <div className="font-bold text-xl leading-tight">Lumiere</div>
                <div className="text-base font-normal">ML Researcher</div>
                <div className="text-sm text-black/60">Aug 2022 - Feb 2023</div>
              </div>
            </div>
            <div className="mt-6 rounded-lg shadow-[5px_5px_10px_-2px_rgba(33,33,33,.3)] px-6 py-6 pb-12 relative" style={{"background":"#FFF8B8"}}>
              <div className="absolute top-3 left-1/2 -translate-x-1/2">
                <div className="pin" aria-hidden="true" />
              </div>
              <ul className="list-disc px-6 text-lg leading-relaxed space-y-2 mt-5">
                <li>trained a machine learning model using XGBoost for financial fraud detection</li>
                <li>published a <a href="https://jhss.scholasticahq.com/article/85172-a-machine-learning-approach-to-detect-fraudulent-customers-based-on-their-financial-transaction-history" className="underline underline-offset-4">research paper</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="px-8" style={{"opacity":"1","transform":"none"}}>
      <div className="relative w-full">
        <h2 className="text-3xl md:text-4xl text-center font-medium">More about me!</h2>
        <div className="mx-auto relative">
          <div className="container ">
            <div className="carousel-container">
              <ul className="carousel">
                <li className="carousel-item cursor-pointer">
                  <img alt="osu!mania" width={200} height={200} decoding="async" data-nimg={1} style={{"color":"transparent"}} srcSet="/_next/image?url=%2Fabout%2Fosu.jpg&w=256&q=75 1x, /_next/image?url=%2Fabout%2Fosu.jpg&w=640&q=75 2x" src="./Larris's Portfolio_files/osu.jpg" />
                </li>
                <li className="carousel-item cursor-pointer">
                  <img alt="devpost" width={200} height={200} decoding="async" data-nimg={1} style={{"color":"transparent"}} src="./Larris's Portfolio_files/devpost.svg" />
                </li>
                <li className="carousel-item cursor-pointer">
                  <img alt="rabbit" width={200} height={200} decoding="async" data-nimg={1} style={{"color":"transparent"}} srcSet="/_next/image?url=%2Fabout%2Frabbit.png&w=256&q=75 1x, /_next/image?url=%2Fabout%2Frabbit.png&w=640&q=75 2x" src="./Larris's Portfolio_files/rabbit.png" />
                </li>
                <li className="carousel-item cursor-pointer">
                  <img alt="wordhunt" width={200} height={200} decoding="async" data-nimg={1} style={{"color":"transparent"}} srcSet="/_next/image?url=%2Fabout%2Fwordhunt.jpg&w=256&q=75 1x, /_next/image?url=%2Fabout%2Fwordhunt.jpg&w=640&q=75 2x" src="./Larris's Portfolio_files/wordhunt.jpg" />
                </li>
                <li className="carousel-item cursor-pointer">
                  <img alt="piano" width={200} height={200} decoding="async" data-nimg={1} style={{"color":"transparent"}} srcSet="/_next/image?url=%2Fabout%2Fpiano.jpg&w=256&q=75 1x, /_next/image?url=%2Fabout%2Fpiano.jpg&w=640&q=75 2x" src="./Larris's Portfolio_files/piano.jpg" />
                </li>
                <li className="carousel-item cursor-pointer">
                  <img alt="huangshan" width={200} height={200} decoding="async" data-nimg={1} style={{"color":"transparent"}} srcSet="/_next/image?url=%2Fabout%2Fhuangshan.jpg&w=256&q=75 1x, /_next/image?url=%2Fabout%2Fhuangshan.jpg&w=640&q=75 2x" src="./Larris's Portfolio_files/huangshan.jpg" />
                </li>
                <li className="carousel-item cursor-pointer">
                  <img alt="frisbee" width={200} height={200} decoding="async" data-nimg={1} style={{"color":"transparent"}} srcSet="/_next/image?url=%2Fabout%2Ffrisbee.png&w=256&q=75 1x, /_next/image?url=%2Fabout%2Ffrisbee.png&w=640&q=75 2x" src="./Larris's Portfolio_files/frisbee.png" />
                </li>
                <li className="carousel-item cursor-pointer">
                  <img alt="teddy" width={200} height={200} decoding="async" data-nimg={1} style={{"color":"transparent"}} srcSet="/_next/image?url=%2Fabout%2Fteddy.jpg&w=256&q=75 1x, /_next/image?url=%2Fabout%2Fteddy.jpg&w=640&q=75 2x" src="./Larris's Portfolio_files/teddy.jpg" />
                </li>
                <li className="carousel-item cursor-pointer">
                  <img alt="osu!mania" loading="lazy" width={200} height={200} decoding="async" data-nimg={1} style={{"color":"transparent"}} srcSet="/_next/image?url=%2Fabout%2Fosu.jpg&w=256&q=75 1x, /_next/image?url=%2Fabout%2Fosu.jpg&w=640&q=75 2x" src="./Larris's Portfolio_files/osu.jpg" />
                </li>
                <li className="carousel-item cursor-pointer">
                  <img alt="devpost" loading="lazy" width={200} height={200} decoding="async" data-nimg={1} style={{"color":"transparent"}} src="./Larris's Portfolio_files/devpost.svg" />
                </li>
                <li className="carousel-item cursor-pointer">
                  <img alt="rabbit" loading="lazy" width={200} height={200} decoding="async" data-nimg={1} style={{"color":"transparent"}} srcSet="/_next/image?url=%2Fabout%2Frabbit.png&w=256&q=75 1x, /_next/image?url=%2Fabout%2Frabbit.png&w=640&q=75 2x" src="./Larris's Portfolio_files/rabbit.png" />
                </li>
                <li className="carousel-item cursor-pointer">
                  <img alt="wordhunt" loading="lazy" width={200} height={200} decoding="async" data-nimg={1} style={{"color":"transparent"}} srcSet="/_next/image?url=%2Fabout%2Fwordhunt.jpg&w=256&q=75 1x, /_next/image?url=%2Fabout%2Fwordhunt.jpg&w=640&q=75 2x" src="./Larris's Portfolio_files/wordhunt.jpg" />
                </li>
                <li className="carousel-item cursor-pointer">
                  <img alt="piano" loading="lazy" width={200} height={200} decoding="async" data-nimg={1} style={{"color":"transparent"}} srcSet="/_next/image?url=%2Fabout%2Fpiano.jpg&w=256&q=75 1x, /_next/image?url=%2Fabout%2Fpiano.jpg&w=640&q=75 2x" src="./Larris's Portfolio_files/piano.jpg" />
                </li>
                <li className="carousel-item cursor-pointer">
                  <img alt="huangshan" loading="lazy" width={200} height={200} decoding="async" data-nimg={1} style={{"color":"transparent"}} srcSet="/_next/image?url=%2Fabout%2Fhuangshan.jpg&w=256&q=75 1x, /_next/image?url=%2Fabout%2Fhuangshan.jpg&w=640&q=75 2x" src="./Larris's Portfolio_files/huangshan.jpg" />
                </li>
                <li className="carousel-item cursor-pointer">
                  <img alt="frisbee" loading="lazy" width={200} height={200} decoding="async" data-nimg={1} style={{"color":"transparent"}} srcSet="/_next/image?url=%2Fabout%2Ffrisbee.png&w=256&q=75 1x, /_next/image?url=%2Fabout%2Ffrisbee.png&w=640&q=75 2x" src="./Larris's Portfolio_files/frisbee.png" />
                </li>
                <li className="carousel-item cursor-pointer">
                  <img alt="teddy" loading="lazy" width={200} height={200} decoding="async" data-nimg={1} style={{"color":"transparent"}} srcSet="/_next/image?url=%2Fabout%2Fteddy.jpg&w=256&q=75 1x, /_next/image?url=%2Fabout%2Fteddy.jpg&w=640&q=75 2x" src="./Larris's Portfolio_files/teddy.jpg" />
                </li>
              </ul>
            </div>
            <ul className="controller">
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*$*/}
  {/*/$*/}
  {/*$*/}
  {/*/$*/}
  <nav className="fixed left-1/2 bottom-8 -translate-x-1/2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 flex gap-8 border border-[#C4C4C4]" style={{"opacity":"1","transform":"none"}}>
    <a className="flex flex-col gap-1 hover:scale-110 transition-transform" href="https://www.larris.me/">
      <div className="w-6 h-6 relative">
        <img alt="About icon" loading="lazy" decoding="async" data-nimg="fill" className="object-contain" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} src="./Larris's Portfolio_files/about.svg" />
      </div>
      <span className="text-lg">About</span>
    </a>
    <a className="flex flex-col gap-1 hover:scale-110 transition-transform" href="https://www.larris.me/projects">
      <div className="w-6 h-6 relative">
        <img alt="Work icon" loading="lazy" decoding="async" data-nimg="fill" className="object-contain" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} src="./Larris's Portfolio_files/work.svg" />
      </div>
      <span className="text-lg">Work</span>
    </a>
    <a className="flex flex-col gap-1 hover:scale-110 transition-transform" href="https://www.larris.me/studio">
      <div className="w-6 h-6 relative">
        <img alt="Studio icon" loading="lazy" decoding="async" data-nimg="fill" className="object-contain" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} src="./Larris's Portfolio_files/studio.svg" />
      </div>
      <span className="text-lg">Studio</span>
    </a>
  </nav>
</div>
  );
}

export default page
