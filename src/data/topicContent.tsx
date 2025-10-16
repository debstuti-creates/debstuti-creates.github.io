import { ReactNode } from "react";

export interface TopicContent {
  introduction?: string;
  heroImage?: string;
  sections?: {
    title: string;
    content: string;
    image?: string;
  }[];
  keyConcepts: string[];
  exampleTitle: string;
  exampleDescription: string;
  exampleCode?: string;
  practicalTips?: {
    title: string;
    description: string;
  }[];
  takeaways: string[];
  furtherReading?: {
    title: string;
    url: string;
  }[];
  additionalSections?: {
    title: string;
    content: ReactNode;
  }[];
}

// Import topic content files
import { urlShortenerContent } from "@/content/topics/urlShortener";
import { scalabilityContent } from "@/content/topics/scalability";
import { cachingContent } from "@/content/topics/caching";
import { databasesContent } from "@/content/topics/databases";


export const topicContentMap: Record<string, TopicContent> = {
  // System Design Topics
  "url-shortener-system-design": urlShortenerContent,
  "scalability": scalabilityContent,
  "caching": cachingContent,
  "databases": databasesContent,
  

  // AI/ML Fundamentals
  "ml-basics": {
    keyConcepts: [
      "Supervised Learning - Learning from labeled training data",
      "Unsupervised Learning - Finding patterns in unlabeled data",
      "Reinforcement Learning - Learning through rewards and penalties",
      "Feature Engineering - Creating meaningful input variables"
    ],
    exampleTitle: "Machine Learning Workflow",
    exampleDescription: "A spam email classifier uses supervised learning: collect labeled emails (spam/not spam), extract features (word frequency, sender info), train a model, and evaluate accuracy. The model learns patterns to classify new emails.",
    takeaways: [
      "Quality of data matters more than quantity of data",
      "Start with simple models before complex ones",
      "Always split data into training, validation, and test sets",
      "Domain knowledge helps in feature selection"
    ]
  },

  "linear-regression": {
    keyConcepts: [
      "Simple Linear Regression - Predicting with one variable",
      "Multiple Linear Regression - Predicting with multiple variables",
      "Cost Function - Measuring prediction error (MSE)",
      "Gradient Descent - Optimizing model parameters"
    ],
    exampleTitle: "House Price Prediction",
    exampleDescription: "Predict house prices using features like square footage, bedrooms, location. The model learns the relationship: Price = β₀ + β₁(sqft) + β₂(bedrooms) + β₃(location_score)",
    exampleCode: `# Simple Linear Regression
import numpy as np

def linear_regression(X, y):
    # Add bias term
    X = np.c_[np.ones(X.shape[0]), X]
    
    # Normal equation: θ = (X^T X)^(-1) X^T y
    theta = np.linalg.inv(X.T @ X) @ X.T @ y
    
    return theta`,
    takeaways: [
      "Linear regression assumes linear relationship between variables",
      "Check for multicollinearity among features",
      "Outliers can significantly impact the model",
      "R-squared measures how well the model fits data"
    ]
  },

  // Deep Learning
  "neural-networks": {
    keyConcepts: [
      "Perceptrons - Basic building blocks of neural networks",
      "Multi-layer Networks - Stacking layers for complexity",
      "Forward Propagation - Computing predictions through layers",
      "Weights and Biases - Learnable parameters of the network"
    ],
    exampleTitle: "Neural Network Architecture",
    exampleDescription: "Image recognition networks stack multiple layers: input layer (pixel values) → hidden layers (feature detection) → output layer (class probabilities). Each layer transforms data to extract increasingly complex patterns.",
    takeaways: [
      "Deeper networks can learn more complex patterns",
      "Each layer learns hierarchical representations",
      "Network architecture depends on problem complexity",
      "More neurons isn't always better - risk of overfitting"
    ]
  },

  // Add more topic content as needed...
  "cap-theorem": {
    keyConcepts: [
      "Consistency - All nodes see the same data simultaneously",
      "Availability - System responds to all requests",
      "Partition Tolerance - System works despite network failures",
      "Trade-offs - You can only guarantee two of three properties"
    ],
    exampleTitle: "CAP in Practice",
    exampleDescription: "MongoDB prioritizes Consistency and Partition tolerance (CP). During network partition, some nodes may be unavailable. In contrast, Cassandra prioritizes Availability and Partition tolerance (AP), returning potentially stale data to maintain availability.",
    takeaways: [
      "CAP theorem guides distributed system design decisions",
      "Choose based on business requirements (is stale data acceptable?)",
      "Network partitions are inevitable in distributed systems",
      "Modern systems often tune consistency levels per operation"
    ]
  }
};

// Default content for topics without specific content
export const defaultTopicContent: TopicContent = {
  keyConcepts: [
    "Core principle 1 - Understanding the fundamentals",
    "Core principle 2 - Practical applications",
    "Core principle 3 - Best practices and patterns",
    "Core principle 4 - Common pitfalls to avoid"
  ],
  exampleTitle: "Practical Example",
  exampleDescription: "This topic contains important concepts that will be covered in detail. Content is being developed to provide you with comprehensive understanding and practical examples.",
  takeaways: [
    "Understanding of fundamental concepts",
    "Ability to apply these concepts in practice",
    "Recognition of common patterns and solutions",
    "Foundation for more advanced topics"
  ]
};
