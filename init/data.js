const sampleListings = [
    {
        title: "Beachside Villa",
        description: "Luxury villa near the beach",
        price: 15000,
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
        location: "Calangute, Goa",
        country: "India"
    },
    {
        title: "Mountain View Cottage",
        description: "Peaceful stay with mountain views",
        price: 8000,
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
        location: "Manali, Himachal Pradesh",
        country: "India"
    },
    {
        title: "City Center Apartment",
        description: "Modern apartment in city center",
        price: 6000,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
        location: "Bangalore, Karnataka",
        country: "India"
    },
    {
        title: "Desert Camp",
        description: "Experience desert life with comfort",
        price: 5000,
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
        location: "Jaisalmer, Rajasthan",
        country: "India"
    },
    {
        title: "Lake View House",
        description: "Beautiful house facing the lake",
        price: 9000,
        image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=800&q=60",
        location: "Udaipur, Rajasthan",
        country: "India"
    },
    {
        title: "Hilltop Resort",
        description: "Resort on top of the hill",
        price: 11000,
        image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210f7?auto=format&fit=crop&w=800&q=60",
        location: "Ooty, Tamil Nadu",
        country: "India"
    },
    {
        title: "Farm Stay",
        description: "Stay close to nature",
        price: 4000,
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=60",
        location: "Nashik, Maharashtra",
        country: "India"
    },
    {
        title: "Heritage Haveli",
        description: "Traditional royal experience",
        price: 13000,
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=60",
        location: "Jaipur, Rajasthan",
        country: "India"
    },
    {
        title: "Forest Retreat",
        description: "Relax in the heart of the forest",
        price: 7000,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60",
        location: "Wayanad, Kerala",
        country: "India"
    },
    {
        title: "Luxury Penthouse",
        description: "High-end penthouse with skyline view",
        price: 20000,
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60",
        location: "Mumbai, Maharashtra",
        country: "India"
    },
    {
        title: "Luxury Beach Villa",
        description: "Sea-facing villa with private pool",
        price: 25000,
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
        location: "Baga, Goa",
        country: "India"
    },
    {
        title: "Mountain View Cottage",
        description: "Peaceful stay with mountain views",
        price: 8000,
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
        location: "Manali, Himachal Pradesh",
        country: "India"
    },
    {
        title: "City Center Apartment",
        description: "Modern apartment near metro station",
        price: 15000,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
        location: "Connaught Place, Delhi",
        country: "India"
    },
    {
        title: "Desert Camp Stay",
        description: "Traditional Rajasthani desert experience",
        price: 6000,
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=60",
        location: "Jaisalmer, Rajasthan",
        country: "India"
    },
    {
        title: "Lake Side Villa",
        description: "Beautiful villa beside the lake",
        price: 18000,
        image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=60",
        location: "Udaipur, Rajasthan",
        country: "India"
    },
    {
        title: "Hilltop Resort",
        description: "Luxury resort on hilltop",
        price: 22000,
        image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=800&q=60",
        location: "Ooty, Tamil Nadu",
        country: "India"
    },
    {
        title: "Budget Homestay",
        description: "Affordable and comfortable stay",
        price: 3000,
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60",
        location: "Varanasi, Uttar Pradesh",
        country: "India"
    },
    {
        title: "Forest Retreat",
        description: "Stay surrounded by nature and wildlife",
        price: 12000,
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60",
        location: "Jim Corbett, Uttarakhand",
        country: "India"
    },
    {
        title: "Heritage Haveli",
        description: "Royal stay in a historic haveli",
        price: 20000,
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60",
        location: "Jaipur, Rajasthan",
        country: "India"
    },
    {
        title: "Island Beach Hut",
        description: "Beach hut with ocean breeze",
        price: 10000,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
        location: "Havelock Island, Andaman",
        country: "India"
    }
];

module.exports = { data: sampleListings };
