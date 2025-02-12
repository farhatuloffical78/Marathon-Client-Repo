import React from 'react';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 mb-10 bg-white shadow-lg rounded-2xl mt-16">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-gray-800">About <span className="text-blue-600">RaceFlow</span></h1>
            </header>

            <section className="mb-8 text-gray-700">
                <p className="text-lg leading-relaxed">
                    Welcome to <span className="font-semibold text-blue-600">RaceFlow</span>, your ultimate companion for marathons and running events! Whether you're a seasoned runner or just starting out, we provide everything you need to plan, track, and improve your marathon journey.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-600 pl-3">Our Mission</h2>
                <p className="text-lg mt-2 text-gray-700">
                    At <span className="font-semibold text-blue-600">RaceFlow</span>, our mission is to help runners of all levels achieve their personal bests. We aim to create a seamless experience for athletes, offering easy event registration, real-time tracking, and insightful data to help you perform at your best.
                </p>
            </section>
        </div>
    );
};

export default About;
