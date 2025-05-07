'use client';

const features = [
  {
    title: 'Increase sales',
    description: 'Empowering your business with tech-driven strategies that turn leads into loyal customers',
  },
  {
    title: 'Enterprise-ready',
    description: 'Built for scale, designed for security — trusted solutions for enterprise success.',
  },
  {
    title: 'Unlimited growth',
    description: 'Grow without limits — our technology evolves with your ambitions.',
  },
  {
    title: 'Recommended by experts',
    description: 'Trusted by industry leaders, backed by real-world results.',
  },
  {
    title: 'Modern platform',
    description: 'Future-proof architecture that keeps you ahead of the curve.',
  },
  {
    title: 'Integrations',
    description: 'Seamless integration, endless possibilities — we connect everything that matters.',
  },
];

const FeatureSection = () => (
  <section className="bg-[#0b0d35] pb-6">
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto px-6 p-6 bg-[#0b0d35]">
        <div className="mb-16 text-center">
          <h4 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h4>
          <p className="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-white">How we change the game</p>
        </div>
        <div className="flex flex-wrap my-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`w-full border-b md:w-1/2 lg:w-1/3 p-8 ${
                index === 0 ? 'md:border-r' : ''
              } ${
                index === 1 ? 'lg:border-r' : ''
              } ${
                index === 2 ? 'md:border-r lg:border-r-0' : ''
              } ${
                index === 3 ? 'lg:border-r lg:border-b-0' : ''
              } ${
                index === 4 ? 'md:border-r md:border-b-0 lg:border-b-0' : ''
              }`}
            >
              <div className="flex items-center mb-6">
                <svg
                  className="h-6 w-6 text-indigo-500"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 5L7.5 14.1667L3.33333 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="ml-4 text-xl text-white">{feature.title}</div>
              </div>
              <p className="leading-loose text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection; 