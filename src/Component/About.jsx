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
        </div>
    );
};

export default About;
