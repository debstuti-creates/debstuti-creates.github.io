export interface Topic {
  id: string;
  title: string;
  description: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  topics: Topic[];
}

export const courses: Course[] = [
  {
    id: "system-design",
    title: "System Design Topics",
    description: "Master the fundamentals of building scalable, distributed systems",
    icon: "🏗️",
    color: "from-blue-500 to-cyan-500",
    topics: [
      {
        id: "scalability",
        title: "Scalability Fundamentals",
        description: "Learn horizontal and vertical scaling, load distribution, and capacity planning"
      },
      {
        id: "caching",
        title: "Caching Strategies",
        description: "Explore CDN, Redis, Memcached, and cache invalidation patterns"
      },
      {
        id: "databases",
        title: "Database Design",
        description: "SQL vs NoSQL, sharding, replication, and consistency models"
      },
      {
        id: "cap-theorem",
        title: "CAP Theorem",
        description: "Understanding consistency, availability, and partition tolerance tradeoffs"
      },
      {
        id: "load-balancing",
        title: "Load Balancing",
        description: "Round-robin, least connections, consistent hashing, and health checks"
      },
      {
        id: "distributed-systems",
        title: "Distributed Systems",
        description: "Microservices, message queues, event-driven architecture"
      }
    ]
  },
  {
    id: "ai-ml",
    title: "AI/ML Fundamentals",
    description: "Build a strong foundation in machine learning concepts and algorithms",
    icon: "🤖",
    color: "from-purple-500 to-pink-500",
    topics: [
      {
        id: "ml-basics",
        title: "Machine Learning Basics",
        description: "Introduction to supervised, unsupervised, and reinforcement learning"
      },
      {
        id: "linear-regression",
        title: "Linear Regression",
        description: "Understanding simple and multiple linear regression models"
      },
      {
        id: "classification",
        title: "Classification Algorithms",
        description: "Logistic regression, decision trees, and random forests"
      },
      {
        id: "overfitting",
        title: "Overfitting & Regularization",
        description: "Bias-variance tradeoff, L1/L2 regularization, cross-validation"
      },
      {
        id: "model-evaluation",
        title: "Model Evaluation",
        description: "Accuracy, precision, recall, F1-score, and ROC curves"
      }
    ]
  },
  {
    id: "deep-learning",
    title: "Deep Learning Basics",
    description: "Dive into neural networks and modern deep learning architectures",
    icon: "🧠",
    color: "from-indigo-500 to-blue-500",
    topics: [
      {
        id: "neural-networks",
        title: "Neural Networks",
        description: "Perceptrons, multi-layer networks, and forward propagation"
      },
      {
        id: "activation-functions",
        title: "Activation Functions",
        description: "ReLU, Sigmoid, Tanh, and their use cases"
      },
      {
        id: "backpropagation",
        title: "Backpropagation",
        description: "Gradient descent, chain rule, and weight updates"
      },
      {
        id: "cnns",
        title: "Convolutional Neural Networks",
        description: "Convolution layers, pooling, and feature extraction"
      },
      {
        id: "rnns",
        title: "Recurrent Neural Networks",
        description: "LSTM, GRU, and sequence modeling"
      },
      {
        id: "optimization",
        title: "Optimization Techniques",
        description: "Adam, RMSprop, learning rate scheduling, batch normalization"
      }
    ]
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    description: "Learn to build systems that can see and understand visual data",
    icon: "👁️",
    color: "from-green-500 to-emerald-500",
    topics: [
      {
        id: "image-processing",
        title: "Image Processing",
        description: "Filters, transformations, edge detection, and feature extraction"
      },
      {
        id: "cnn-architectures",
        title: "CNN Architectures",
        description: "LeNet, AlexNet, VGG, ResNet, and their innovations"
      },
      {
        id: "transfer-learning",
        title: "Transfer Learning",
        description: "Fine-tuning pre-trained models for specific tasks"
      },
      {
        id: "object-detection",
        title: "Object Detection",
        description: "YOLO, R-CNN, Fast R-CNN, and real-time detection"
      }
    ]
  },
  {
    id: "nlp",
    title: "Natural Language Processing",
    description: "Process, understand, and generate human language with AI",
    icon: "💬",
    color: "from-orange-500 to-red-500",
    topics: [
      {
        id: "tokenization",
        title: "Tokenization & Preprocessing",
        description: "Word tokens, subword tokenization, stemming, and lemmatization"
      },
      {
        id: "embeddings",
        title: "Word Embeddings",
        description: "Word2Vec, GloVe, FastText, and contextual embeddings"
      },
      {
        id: "transformers",
        title: "Transformers",
        description: "Attention mechanism, BERT, GPT, and encoder-decoder models"
      },
      {
        id: "sentiment-analysis",
        title: "Sentiment Analysis",
        description: "Text classification, emotion detection, and opinion mining"
      },
      {
        id: "text-generation",
        title: "Text Generation",
        description: "Language models, sequence-to-sequence, and generation techniques"
      }
    ]
  }
];
