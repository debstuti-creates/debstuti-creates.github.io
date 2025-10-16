import { TopicContent } from "@/data/topicContent";

export const databasesContent: TopicContent = {
  introduction: `Database design is one of the most critical decisions in system architecture. 
  The choice between SQL and NoSQL, along with strategies like sharding and replication, 
  directly impacts your application's scalability, reliability, and performance.`,
  
  heroImage: "/placeholder.svg",
  
  sections: [
    {
      title: "SQL vs NoSQL: The Fundamental Choice",
      content: `This isn't about one being better than the other—it's about choosing the right tool for your use case.
      
      SQL (Relational Databases):
      • Structured data with relationships
      • ACID transactions guaranteed
      • Complex queries with JOINs
      • Examples: PostgreSQL, MySQL, Oracle
      
      NoSQL (Non-Relational Databases):
      • Flexible schema, horizontal scaling
      • High write throughput
      • Eventual consistency (usually)
      • Types: Document (MongoDB), Key-Value (Redis), Wide-Column (Cassandra), Graph (Neo4j)`,
      image: "/placeholder.svg"
    },
    {
      title: "Database Sharding",
      content: `Sharding is horizontal partitioning of data across multiple databases. Each shard contains a subset of the data.
      
      Why Shard?
      • Single database can't handle all traffic
      • Storage exceeds single server capacity
      • Improve query performance by reducing dataset size
      
      Sharding Strategies:
      
      Range-based: User IDs 1-1M on Shard 1, 1M-2M on Shard 2
      • Simple to implement
      • Risk of uneven distribution
      
      Hash-based: hash(userId) % num_shards
      • Even distribution
      • Difficult to add/remove shards
      
      Geographic: Users by region
      • Lower latency for regional users
      • Complies with data residency requirements`,
      image: "/placeholder.svg"
    },
    {
      title: "Replication for High Availability",
      content: `Replication creates copies of your database for redundancy and read scaling.
      
      Master-Slave Replication:
      • One master (writes), multiple slaves (reads)
      • Scales read operations horizontally
      • Master is single point of failure
      
      Master-Master Replication:
      • Multiple masters accepting writes
      • Higher availability
      • Conflict resolution complexity
      
      Synchronous vs Asynchronous:
      • Synchronous: Data written to all replicas before confirming (slower, consistent)
      • Asynchronous: Writes confirmed immediately, replicated later (faster, eventual consistency)`,
      image: "/placeholder.svg"
    }
  ],
  
  keyConcepts: [
    "SQL vs NoSQL - Choosing the right database paradigm",
    "Database Sharding - Horizontal partitioning of data",
    "Replication - Creating copies for availability and performance",
    "Consistency Models - Strong, eventual, and causal consistency",
    "ACID vs BASE - Transaction guarantees in different systems"
  ],
  
  exampleTitle: "Instagram's Hybrid Database Strategy",
  exampleDescription: `Instagram uses different databases for different purposes:
  
  PostgreSQL:
  • User profiles, relationships, authentication
  • Requires ACID transactions and complex queries
  • Sharded by user ID for horizontal scaling
  
  Cassandra:
  • Feed data (posts, stories, comments)
  • High write throughput needed
  • Eventual consistency acceptable
  
  Redis:
  • Session data, cache, real-time features
  • In-memory for ultra-fast access
  
  This demonstrates that you don't need to choose just one database—use the best tool for each job.`,
  exampleCode: `// Database selection decision tree
function chooseDatabase(requirements) {
  const {
    needsTransactions,
    schemaStability,
    writeVolume,
    queryComplexity,
    consistencyNeeds
  } = requirements;

  // High transaction + complex queries = SQL
  if (needsTransactions && queryComplexity === 'high') {
    return {
      type: 'SQL',
      recommendation: 'PostgreSQL',
      reason: 'ACID transactions + complex queries (JOINs)'
    };
  }

  // High write volume + flexible schema = NoSQL
  if (writeVolume === 'high' && schemaStability === 'low') {
    return {
      type: 'NoSQL-Document',
      recommendation: 'MongoDB',
      reason: 'High writes + flexible schema'
    };
  }

  // Time-series data = Specialized DB
  if (requirements.dataType === 'time-series') {
    return {
      type: 'Time-Series',
      recommendation: 'InfluxDB',
      reason: 'Optimized for time-series data'
    };
  }

  // Default: PostgreSQL (most versatile)
  return {
    type: 'SQL',
    recommendation: 'PostgreSQL',
    reason: 'Versatile, reliable, good default choice'
  };
}

// Example sharding implementation
class DatabaseRouter {
  constructor(shards) {
    this.shards = shards; // Array of database connections
  }

  getShardForUser(userId) {
    // Hash-based sharding
    const shardIndex = this.hashFunction(userId) % this.shards.length;
    return this.shards[shardIndex];
  }

  hashFunction(key) {
    // Simple hash (use better hash in production)
    return key.split('').reduce((acc, char) => 
      acc + char.charCodeAt(0), 0
    );
  }

  async query(userId, queryFn) {
    const shard = this.getShardForUser(userId);
    return await queryFn(shard);
  }
}`,
  
  practicalTips: [
    {
      title: "Start with SQL, add NoSQL when needed",
      description: "SQL databases are well-understood and versatile. Add NoSQL only when you have specific requirements it solves better."
    },
    {
      title: "Design schema for your queries",
      description: "In SQL, normalize for data integrity. In NoSQL, denormalize for query performance. Design around your access patterns."
    },
    {
      title: "Plan sharding strategy early",
      description: "Resharding is expensive. Choose a shard key that distributes data evenly and doesn't require frequent changes."
    },
    {
      title: "Use read replicas for scaling reads",
      description: "Most applications are read-heavy. Read replicas can handle 90%+ of your database load."
    }
  ],
  
  takeaways: [
    "Choose SQL for structured data with complex relationships",
    "Use NoSQL for high-volume, flexible schema requirements",
    "Implement read replicas to scale read-heavy workloads",
    "Shard when a single database can't handle the load",
    "Consider hybrid approaches—use multiple databases for different purposes"
  ],
  
  furtherReading: [
    { title: "PostgreSQL Documentation", url: "https://www.postgresql.org/docs/" },
    { title: "MongoDB Best Practices", url: "https://www.mongodb.com/docs/manual/" },
    { title: "Database Sharding Patterns", url: "#" }
  ]
};
