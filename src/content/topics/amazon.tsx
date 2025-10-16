import { TopicContent } from "@/data/topicContent";

export const amazonContent: TopicContent = {
  introduction: `Amazon (or any large-scale e-commerce system like Flipkart, eBay, or Alibaba) is an online marketplace that allows:

  - Customers to browse, search, and buy products.
  - Sellers to list and manage their products.
  - Admins to monitor and ensure reliability, payments, and logistics.

It’s a massive, distributed, high-availability system supporting:

  - Millions of users 👥
  - Billions of products 🛍️
  - Global operations 🌍
  - Real-time inventory and order updates ⚙️`,
  
 // heroImage: "/images/urlShortener/hero.png", // Replace with actual image path
  
  sections: [
    {
      title: "Functional Requirements",
      content: `
      • seller can add items
      • buyer can search items
      • view item details
      • add item to cart
      • checkout/place order (inventory management, payment etc)
      • view orders
      • fetch/redirect long url for a short url
      
      low priority requirements for this discussion:
        • add item to wishlist
        • recommend items to user home page
        • notify users about order status`,
    },
    {
      title: "Non-Functional Requirements",
      content: `
      • low latency (for search)
      • high availability (for search)
      • high consistency (for order placement)
      • eventual consistency for item onboarding, search etc.
      `,
    },
    {
      title: "Entities",
      content: `
      • item
      • buyer
      • seller
      • cart
      • order`,
    },
    {
      title: "APIs",
      content: `
      POST /items
        {
            name,
            description,
            price,
            quantity,
            ..
        }

   

 # search items

    GET /items?term={}&cursor={}&size={}

 # add item to cart

    PATCH /cart
        {
        itemId,
        quantity
        }

# checkout
    
    POST /checkout
        {
            cartId,
            amount,
            paymentInfo{
                   paymentType,
                   cardNo,
                    ... 
                }
        }
      `,
    },
    {
      title: "High Level Architecture",
      content: `High Level Architecture of URL Shortener`,
      image: "/images/urlShortener/hla.png"
    },
    {
      title: "Scale Calculation",
      content: `
      100 Millions DAU (daily active users)

      100 million * 365 * 10 = 365 billion


      - 100 million /10^5 creation per sec = 1000 TPS
      - 10 billion/10^5 = 10^5 = 100k QPS

      - 500 bytes * 365 billion ~ 500 * 400 billion bytes = 200 TB`,
    },
    {
      title: "Deep-Dive",
      content: `
      Let's seggregate short url creation and access.
      `,
      image: "/images/urlShortener/deepdive.png"
    },
    {
      title: "What type of database we need?",
      content: `
      •  No complex schema relations
      •  no complex join required
      •  eventual consistency is fine

      Can Use SQL DB, will work fine here
      But will prefer NoSQL DB like DynamoDB maybe`,
    },
    {
      title: "How to decide short url size?",
      content: `
      • Consider base 10 url of 7 characters
        - we can create 10^7 urls

      • Consider base 62 short url (0-9, A-Z, a-z)
    
        with 7 character short urls we can create 62^7 = 3.52 trillion short urls
        with 6 character short urls we can create 62^6 = 56 billion short urls.
        
        We need approx 365 billion short urls in a year, hence 7 character short urls should be enough`,
    
      },
      {
        title: "How to create short url?",
        content: `
        • Random 7 char base 62 key (chars - 0-9, A-Z, a-z)

        • Hash (long url), 
          take part of this hash
          base 62 encode that part

        • Using a counter 
          base 62 encode the counter value`,    
       },
       {
        title: "What type of DB needed for Counter?",
        content: `
        • SQL DB 

          Pros:
           - AUTO INCREMENT or SEQUENCE
           - safe simple, easy to setup
           - ACID property, strong consistency

          Cons:
          - Harder to scale
          - write contention

        • NoSQL DB (cassandra, DynamoDB)
    
          - more complex to setup
          - needs custom logic to increment
          - eventual consistency

        • Redis
          - USE INCR 
          - in-memory, fast
          - atomic increment
          - sharded for scalability`,    
        },
        {
        title: "Deep-Dive",
        content: `
        Updated design..
        `,
        image: "/images/urlShortener/deepdive2.png"
        },
        {
        title: "What id Redis is a Single point of failure?",
        content: `
         Redis can Single Point of failure

          Server 1 : 0 - 1L
          Server 2: 1L - 2L
          Server 3: 2L - 3L`,    
       },
  ],
  
  keyConcepts: [
  ],
  
  exampleTitle: "",
  exampleDescription: ``,
  
  
  
  takeaways: [

  ],
  
  furtherReading: [
  
  ]
};
