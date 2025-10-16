import { TopicContent } from "@/data/topicContent";

export const urlShortenerContent: TopicContent = {
  introduction: `Scalability is the capability of a system to handle growing amounts of work by adding resources. 
  It's one of the most critical aspects of modern system design, determining whether your application can serve 
  10 users or 10 million users without degradation in performance.`,
  
  heroImage: "/placeholder.svg", // Replace with actual image path
  
  sections: [
    {
      title: "Functional Requirements",
      content: `- Create unique short url for a long url
        - custom alias?
        - expiration time?
    - fetch/redirect long url for a short url`,
      image: "/placeholder.svg"
    },
    {
      title: "Non-Functional Requirements",
      content: `
      • CAP theorem - eventual consistency
      • High Availability
      • latency ( as low latency as possible)
      • low latency for redirects (~ 200ms)
      • scale (100 million DAU, 10 billion redirects daily)
      
      Challenges:
      • Requires load balancing infrastructure
      • Data consistency across multiple nodes
      • More complex application architecture`,
      image: "/placeholder.svg"
    },
    {
      title: "Vertical Scaling (Scale Up)",
      content: `Vertical scaling involves adding more power (CPU, RAM, Storage) to existing machines. 
      It's simpler to implement but has physical limitations.
      
      Benefits:
      • Simpler application architecture
      • No need to change code for most applications
      • Easier data consistency (single machine)
      
      Limitations:
      • Hardware limits - can't scale infinitely
      • Single point of failure
      • Downtime required for upgrades
      • Diminishing returns on investment`,
      image: "/placeholder.svg"
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
