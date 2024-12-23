function Home() {
  return (
    <div className="min-h-screen">
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">
            Welcome to Graha Interior
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            Transform your space with our expert interior design solutions
          </p>
          <div className="text-center">
            <a
              href="/portfolio"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;