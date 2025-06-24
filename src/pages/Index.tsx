
import { Button } from "@/components/ui/button";
import { Calendar, Music, Ticket } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-4">
        <div className="mb-8 animate-fade-in">
          <Music className="w-16 h-16 mx-auto mb-4 text-purple-300" />
          <h1 className="text-6xl font-bold text-white mb-6">
            Concert <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Hub</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Your gateway to the best live music experiences. Discover amazing concerts and book your tickets for unforgettable nights.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Link to="/events">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              View All Events
            </Button>
          </Link>
          
          <Button 
            size="lg"
            variant="outline"
            className="border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-8 py-3 transition-all duration-300 hover:scale-105"
          >
            <Ticket className="w-5 h-5 mr-2" />
            My Tickets
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <Music className="w-8 h-8 text-purple-300 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Live Music</h3>
            <p className="text-gray-300 text-sm">Experience the best artists performing live in iconic venues worldwide.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <Ticket className="w-8 h-8 text-purple-300 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Easy Booking</h3>
            <p className="text-gray-300 text-sm">Simple and secure ticket booking process with instant confirmation.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <Calendar className="w-8 h-8 text-purple-300 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Upcoming Shows</h3>
            <p className="text-gray-300 text-sm">Stay updated with the latest concert announcements and tour dates.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
