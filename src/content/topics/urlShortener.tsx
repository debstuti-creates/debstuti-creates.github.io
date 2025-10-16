import { TopicContent } from "@/data/topicContent";

export const urlShortenerContent: TopicContent = {
  introduction: `Url Shortener is a technique to store frequently accessed data in a fast-access location, 
  reducing the need to retrieve it from slower sources. Effective caching can reduce database load by 
  80-95% and improve response times from seconds to milliseconds.`,
  
  heroImage: "/placeholder.svg",
  
  sections: [
    {
      title: "Why Caching Matters",
      content: `Every database query, API call, or computation takes time and resources. Caching allows you to:
      • Serve requests faster by avoiding repeated expensive operations
      • Reduce load on databases and backend services
      • Lower infrastructure costs
      • Improve user experience with faster page loads
      
      The challenge is determining what to cache, where to cache it, and when to invalidate cached data.`,
      image: "/placeholder.svg"
    },
    {
      title: "Caching Layers",
      content: `Modern applications typically use multiple caching layers:
      
      1. Browser Cache: Stores static assets (images, CSS, JS) on user's device
      2. CDN Cache: Geographically distributed servers cache content closer to users
      3. Application Cache: In-memory cache within your application (Redis, Memcached)
      4. Database Cache: Query result caching at the database level
      
      Each layer serves a specific purpose and has different characteristics.`,
      image: "/placeholder.svg"
    },
    {
      title: "Cache Invalidation Strategies",
      content: `"There are only two hard things in Computer Science: cache invalidation and naming things." - Phil Karlton
      
      Common strategies:
      
      Time-To-Live (TTL): Cache expires after a fixed duration
      • Simple to implement
      • Risk of serving stale data
      
      Write-Through: Update cache immediately when data changes
      • Cache always fresh
      • Higher write latency
      
      Write-Behind: Update cache immediately, update database asynchronously
      • Low latency for writes
      • Risk of data loss if cache fails
      
      Cache-Aside: Application checks cache first, loads from DB if miss
      • Most common pattern
      • Application controls caching logic`,
      image: "/placeholder.svg"
    }
  ],
  
  keyConcepts: [
    "CDN Caching - Storing static assets closer to users globally",
    "Redis/Memcached - In-memory data stores for fast access",
    "Cache Invalidation - Strategies for keeping cached data fresh",
    "Cache-Aside Pattern - Load data into cache on demand",
    "Cache Hit Ratio - Measure of caching effectiveness"
  ],
  
  exampleTitle: "Multi-Level Caching in E-commerce",
  exampleDescription: `Amazon's product pages demonstrate sophisticated caching:
  
  • Product images and CSS are cached in CDN and browser (rarely change)
  • Product information cached in Redis (updated when inventory changes)
  • User cart data cached in application memory (short TTL)
  • Prices checked in real-time (not cached, changes frequently)
  
  This approach balances freshness with performance.`,
  exampleCode: `// Redis Cache Implementation with TTL
import Redis from 'ioredis';

class CacheService {
  constructor() {
    this.redis = new Redis({
      host: 'localhost',
      port: 6379
    });
  }

  // Cache-aside pattern
  async getUserData(userId) {
    const cacheKey = \`user:\${userId}\`;
    
    // Try cache first
    const cached = await this.redis.get(cacheKey);
    if (cached) {
      console.log('Cache hit');
      return JSON.parse(cached);
    }
    
    // Cache miss - fetch from database
    console.log('Cache miss');
    const user = await db.users.findById(userId);
    
    // Store in cache with 1-hour TTL
    await this.redis.setex(
      cacheKey, 
      3600, 
      JSON.stringify(user)
    );
    
    return user;
  }

  // Invalidate cache when data changes
  async updateUser(userId, updates) {
    await db.users.update(userId, updates);
    
    // Remove from cache to ensure fresh data
    await this.redis.del(\`user:\${userId}\`);
  }

  // Warm cache with frequently accessed data
  async warmCache(userIds) {
    for (const userId of userIds) {
      const user = await db.users.findById(userId);
      await this.redis.setex(
        \`user:\${userId}\`,
        3600,
        JSON.stringify(user)
      );
    }
  }
}`,
  
  practicalTips: [
    {
      title: "Cache frequently accessed, rarely changed data",
      description: "User profiles, product catalogs, configuration settings are ideal candidates."
    },
    {
      title: "Set appropriate TTLs",
      description: "Balance between data freshness and cache efficiency. Product prices might need 5-minute TTL, while user profiles can have 1-hour TTL."
    },
    {
      title: "Monitor cache hit rates",
      description: "Aim for 80%+ hit rate. Low hit rates indicate poor caching strategy or too short TTLs."
    },
    {
      title: "Use cache namespaces",
      description: "Organize cache keys with prefixes like 'user:', 'product:', 'session:' for easier management."
    }
  ],
  
  takeaways: [
    "Caching can reduce database load by 80-95%",
    "Choose TTL based on data freshness requirements",
    "Implement cache warming for frequently accessed data",
    "Monitor cache hit rates to optimize strategy",
    "Use multiple caching layers for optimal performance"
  ],
  
  furtherReading: [
    { title: "Redis Documentation", url: "https://redis.io/docs/" },
    { title: "CDN Best Practices", url: "#" },
    { title: "Cache Invalidation Patterns", url: "#" }
  ]
};
