import { TopicContent } from "@/data/topicContent";

export const urlShortenerContent: TopicContent = {
  introduction: `A URL shortener is a system that takes a long URL and converts it into a short, unique link that redirects to the original address.
Example:

Input:  https://www.youtube.com/watch?v=dQw4w9WgXcQ  
Output: https://short.ly/abc123

When a user visits https://short.ly/abc123, the system redirects them to the original YouTube link.

Famous examples:
• Bit.ly
• TinyURL
• t.co (Twitter)
• goo.gl (deprecated, Google)`,
  
  heroImage: "/images/urlShortener/hero.png", // Replace with actual image path
  
  sections: [
    {
      title: "Functional Requirements",
      content: `
      • Create unique short url for a long url
         - custom alias?
         - expiration time?
      • fetch/redirect long url for a short url`,
    },
    {
      title: "Non-Functional Requirements",
      content: `
      • CAP theorem - eventual consistency
      • High Availability
      • latency ( as low latency as possible)
      • low latency for redirects (~ 200ms)
      • scale (100 million DAU, 10 billion redirects daily)
      `,
    },
    {
      title: "Entities",
      content: `
      • User
      • LongUrl
      • ShortUrl`,
    },
    {
      title: "APIs",
      content: `
      POST /urls -> 201 created
      {
        longUrl,
        alias?
        expirationTime?
      }

      GET {shortUrl} -> redirecting to long url

        301 redirect -> permanent
        302 redirect -> temporary
      `,
    },
    {
      title: "High Level Architecture",
      content: `High Level Architecture of URL Shortener`,
      image: "/images/urlShortener/hla.png"
    }
  ],
  
  keyConcepts: [
    "Horizontal Scaling - Adding more machines to distribute load",
    "Vertical Scaling - Increasing resources of existing machines",
    "Load Distribution - Efficiently spreading traffic across servers",
    "Capacity Planning - Predicting and preparing for growth",
    "Auto-scaling - Dynamically adjusting resources based on demand"
  ],
  
  exampleTitle: "Real-World Scalability: Netflix",
  exampleDescription: `Netflix is one of the best examples of horizontal scaling in action. They stream to over 
  200 million subscribers globally, handling massive traffic spikes during popular show releases.
  
  Their approach:
  • Microservices architecture with over 700 microservices
  • Auto-scaling on AWS - thousands of instances spin up/down based on demand
  • CDN (Content Delivery Network) for distributing content globally
  • Regional failover for high availability
  • Chaos engineering to test system resilience`,
  exampleCode: `// Simple Load Balancer Implementation
class LoadBalancer {
  constructor() {
    this.servers = [
      { id: 'server-1', capacity: 1000, currentLoad: 0 },
      { id: 'server-2', capacity: 1000, currentLoad: 0 },
      { id: 'server-3', capacity: 1000, currentLoad: 0 }
    ];
    this.currentIndex = 0;
  }

  // Round-robin distribution
  getNextServer() {
    const server = this.servers[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.servers.length;
    return server;
  }

  // Least connections algorithm
  getLeastLoadedServer() {
    return this.servers.reduce((min, server) => 
      server.currentLoad < min.currentLoad ? server : min
    );
  }

  // Health check
  async checkServerHealth(server) {
    try {
      const response = await fetch(\`\${server.url}/health\`);
      return response.ok;
    } catch (error) {
      return false;
    }
  }
}`,
  
  practicalTips: [
    {
      title: "Start with vertical, plan for horizontal",
      description: "Begin with vertical scaling for simplicity, but architect your application for horizontal scaling from day one."
    },
    {
      title: "Monitor everything",
      description: "Use tools like Prometheus, Grafana to track CPU, memory, network I/O, and application metrics."
    },
    {
      title: "Design stateless services",
      description: "Stateless services are easier to scale horizontally. Store state in external databases or caches."
    },
    {
      title: "Implement caching layers",
      description: "Cache frequently accessed data to reduce database load and improve response times."
    }
  ],
  
  takeaways: [
    "Horizontal scaling provides better fault tolerance than vertical scaling",
    "Plan for scalability from day one to avoid costly refactoring",
    "Monitor system metrics to identify bottlenecks early",
    "Use auto-scaling to handle variable traffic patterns",
    "Stateless architecture is key to effective horizontal scaling"
  ],
  
  furtherReading: [
    { title: "AWS Auto Scaling Documentation", url: "https://aws.amazon.com/autoscaling/" },
    { title: "The Art of Scalability", url: "#" },
    { title: "Designing Data-Intensive Applications", url: "#" }
  ]
};
