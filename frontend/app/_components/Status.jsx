import React from "react";

export default function Status() {
  return (
    <section class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by Many Instagram Stores 
          </h2>

          <p class="mt-4 text-gray-500 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            dolores laborum labore provident impedit esse recusandae facere
            libero harum sequi.
          </p>
        </div>

        <div class="mt-8 sm:mt-12">
          <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div class="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">
                Total Stores
              </dt>

              <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                4.8k
              </dd>
            </div>

            <div class="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">
                Trending
              </dt>

              <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                24
              </dd>
            </div>

            <div class="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">
                Categories
              </dt>

              <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                50+
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}