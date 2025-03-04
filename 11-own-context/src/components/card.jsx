import React from "react";

export default function Card({ number, body }) {
  return (
    <>
      <>
        <div className="w-full flex">
          <div class="md:flex  bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img
              class="w-12 h-24 obje object-cover md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
              src="https://images.pexels.com/photos/30847375/pexels-photo-30847375/free-photo-of-stylish-man-walking-along-brick-wall-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            
            />
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <h1 className="text-white text-5xl font-bolds">{number}</h1>

                <p class="text-sm font-medium">{body}</p>
              </blockquote>
              <figcaption class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
                <div class="text-slate-700 dark:text-slate-500">
                  Staff Engineer, Algolia
                </div>
              </figcaption>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
