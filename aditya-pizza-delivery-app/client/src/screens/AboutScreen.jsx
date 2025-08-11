import React from 'react';
import Logo from '/images/generated-image.png';

function AboutScreen() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-20 pb-10 px-10 sm:px-16 bg-gradient-to-b from-orange-200 to-orange-100">
      <div className="flex flex-row justify-center items-center">
        <img
          src={Logo}
          alt="Aditya's Pizza Hub Logo"
          className="hidden sm:block h-32 w-32"
        />
        <h1 className="text-4xl lg:text-5xl text-orange-500 font-semibold mt-4">
          <span className="text-orange-700">About</span>
          <br /> Aditya's Pizza Hub
        </h1>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <article className="mb-4">
          <h2 className="text-2xl text-black font-semibold mb-2">
            Introduction
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Aditya's Pizza Hub is your go-to place for creating personalized pizzas online! Choose from a wide range of fresh toppings and sauces to build your dream pizza, or explore our curated menu of classic and signature pizzas.
          </p>
        </article>

        <article className="mb-4">
          <h2 className="text-2xl text-black font-semibold mb-2">
            Our Mission
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Our mission is to serve you the freshest, tastiest pizzas with a seamless and delightful ordering experience. We believe pizza is personal, and we make it easy for you to craft exactly what you crave!
          </p>
        </article>

        <article className="mb-4">
          <h2 className="text-2xl text-black font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            If you have any questions or suggestions, feel free to reach out at{' '}
            <a
              href="mailto:contact@adityapizzahub.com"
              className="text-orange-500 hover:text-orange-700"
            >
              contact@adityapizzahub.com
            </a>
          </p>
        </article>
      </div>
    </section>
  );
}

export default AboutScreen;
