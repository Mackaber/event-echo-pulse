
import { Calendar, MapPin, Clock, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const Events = () => {
  const concerts = [
    {
      id: 1,
      title: "Arctic Monkeys Live",
      band: "Arctic Monkeys",
      date: "2024-07-15",
      time: "20:00",
      venue: "Madison Square Garden",
      location: "New York, NY",
      price: 89,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      genre: "Indie Rock",
      description: "Experience the electrifying energy of Arctic Monkeys in their most anticipated tour of the year.",
      ticketsLeft: 156
    },
    {
      id: 2,
      title: "Billie Eilish: Happier Than Ever Tour",
      band: "Billie Eilish",
      date: "2024-08-22",
      time: "19:30",
      venue: "The Forum",
      location: "Los Angeles, CA",
      price: 125,
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
      genre: "Pop",
      description: "Join Billie Eilish for an unforgettable night of haunting melodies and powerful vocals.",
      ticketsLeft: 89
    },
    {
      id: 3,
      title: "The Weeknd After Hours",
      band: "The Weeknd",
      date: "2024-09-10",
      time: "21:00",
      venue: "United Center",
      location: "Chicago, IL",
      price: 95,
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&h=600&fit=crop",
      genre: "R&B",
      description: "Experience the dark pop aesthetic and smooth vocals of The Weeknd in this spectacular show.",
      ticketsLeft: 234
    },
    {
      id: 4,
      title: "Dua Lipa Future Nostalgia",
      band: "Dua Lipa",
      date: "2024-09-28",
      time: "20:30",
      venue: "American Airlines Arena",
      location: "Miami, FL",
      price: 78,
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
      genre: "Pop",
      description: "Dance the night away with Dua Lipa's infectious pop anthems and dazzling stage production.",
      ticketsLeft: 412
    },
    {
      id: 5,
      title: "Coldplay Music of the Spheres",
      band: "Coldplay",
      date: "2024-10-15",
      time: "19:00",
      venue: "Wembley Stadium",
      location: "London, UK",
      price: 110,
      image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&h=600&fit=crop",
      genre: "Alternative Rock",
      description: "Witness Coldplay's most ambitious tour yet with stunning visuals and timeless hits.",
      ticketsLeft: 1205
    },
    {
      id: 6,
      title: "Travis Scott Utopia World Tour",
      band: "Travis Scott",
      date: "2024-11-03",
      time: "21:30",
      venue: "Toyota Center",
      location: "Houston, TX",
      price: 85,
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop",
      genre: "Hip Hop",
      description: "Enter Travis Scott's dystopian musical universe with mind-bending production and high-energy performance.",
      ticketsLeft: 67
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getTicketStatus = (ticketsLeft: number) => {
    if (ticketsLeft < 100) return { text: "Few tickets left", color: "destructive" };
    if (ticketsLeft < 300) return { text: "Limited availability", color: "secondary" };
    return { text: "Available", color: "default" };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in">
            Live <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Concerts</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in">
            Discover amazing live music experiences from your favorite artists. Book your tickets now for unforgettable nights.
          </p>
        </div>
      </div>

      {/* Concerts Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concerts.map((concert, index) => {
            const ticketStatus = getTicketStatus(concert.ticketsLeft);
            return (
              <Card 
                key={concert.id} 
                className="group overflow-hidden bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={concert.image} 
                    alt={concert.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-black/50 text-white border-0">
                      {concert.genre}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={ticketStatus.color as any}
                      className="bg-black/50 text-white border-0"
                    >
                      {ticketStatus.text}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {concert.title}
                  </h3>
                  <p className="text-purple-200 font-medium">{concert.band}</p>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="flex items-center text-gray-300 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(concert.date)}
                  </div>
                  
                  <div className="flex items-center text-gray-300 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {concert.time}
                  </div>
                  
                  <div className="flex items-center text-gray-300 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    {concert.venue}, {concert.location}
                  </div>

                  <p className="text-gray-400 text-sm line-clamp-2">
                    {concert.description}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center text-green-400 font-bold text-lg">
                      <Ticket className="w-5 h-5 mr-2" />
                      ${concert.price}
                    </div>
                    <span className="text-sm text-gray-400">
                      {concert.ticketsLeft} tickets left
                    </span>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 transition-all duration-300 hover:shadow-lg"
                  >
                    Buy Tickets
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Events;
