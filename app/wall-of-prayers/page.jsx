export default function WallOfPrayers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
            Wall of Prayers
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample prayer cards */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-gray-200 mb-4 italic">
                "May peace find its way to every corner of our world, and may love guide us through these challenging times."
              </p>
              <p className="text-orange-300 text-sm">- Anonymous</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-gray-200 mb-4 italic">
                "Praying for healing and strength for all those who are suffering. May they find comfort and hope."
              </p>
              <p className="text-orange-300 text-sm">- A Friend</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-gray-200 mb-4 italic">
                "Let us unite in prayer for our planet, that we may be better stewards of the Earth we share."
              </p>
              <p className="text-orange-300 text-sm">- Global Citizen</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-300 text-lg">
              Join our community and share your prayers with the world.
            </p>
            <p className="text-orange-300 text-sm mt-2">
              Sign in to contribute to our Wall of Prayers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
