// Dummy implementation! Replace with your backend API for full functionality.
export async function shortenUrl(url, validity) {
  // Simulate API request/response
  return new Promise((resolve) => setTimeout(resolve, 500));
}

export async function getStatistics() {
  // Example stats data
  return [
    {
      shortUrl: "http://sho.rt/abcd",
      originalUrl: "https://www.example.com",
      createdAt: "2025-09-06T13:00:00Z",
      expiry: "2025-09-06T14:00:00Z",
      clicks: 2,
      clickDetails: [
        { timestamp: "2025-09-06T13:40:00Z", source: "Browser", location: "Hyderabad" },
        { timestamp: "2025-09-06T13:55:00Z", source: "Mobile", location: "Delhi" }
      ]
    }
  ];
}