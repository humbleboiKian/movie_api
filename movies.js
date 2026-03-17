export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json([
      {
        id: 1,
        title: "Avengers",
        image_url: "https://via.placeholder.com/150",
        description: "Superhero movie",
        rating: 5
      }
    ]);
  }
}
