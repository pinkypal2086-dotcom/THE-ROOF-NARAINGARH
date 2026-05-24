import { MenuCategory, Testimonial, FAQItem, GalleryItem } from "./types";

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "north-indian",
    name: "North Indian",
    slug: "north-indian",
    iconName: "Utensils",
    items: [
      {
        id: "ni1",
        name: "Kadhai Paneer",
        description: "Spicy cottage cheese cooked with fresh onions, bell peppers, tomatoes and freshly ground kadhai masala.",
        price: 240,
        isBestseller: true,
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=600",
        rating: 4.8
      },
      {
        id: "ni2",
        name: "Slow Cooked Dal Makhni",
        description: "Rich and creamy black lentils simmered overnight with butter, double cream, and fresh tomato puree.",
        price: 210,
        isBestseller: true,
        image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600",
        rating: 4.9
      },
      {
        id: "ni3",
        name: "Paneer Do Pyaza",
        description: "Succulent paneer cubes simmered in a luscious sweet-and-spicy gravy with double-diced red onions.",
        price: 230,
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=600",
        rating: 4.6
      },
      {
        id: "ni4",
        name: "Aromatic Veg Dum Biryani",
        description: "Long-grain basmati rice layered with garden vegetables, infused with saffron, mint, and pure ghee.",
        price: 220,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600",
        rating: 4.7
      },
      {
        id: "ni5",
        name: "Tandoori Butter Naan",
        description: "Traditional leavened flatbread baked in dry-clay tandoor, liberally brushed with premium butter.",
        price: 50,
        image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=600"
      },
      {
        id: "ni6",
        name: "Butter Garlic Naan",
        description: "Clay-oven flatbread topped with fine minced garlic, black sesame, and fresh coriander leaves.",
        price: 65,
        isBestseller: false
      }
    ]
  },
  {
    id: "south-indian",
    name: "South Indian",
    slug: "south-indian",
    iconName: "FlameKindling",
    items: [
      {
        id: "si1",
        name: "Special Masala Dosa",
        description: "Crispy golden-brown dynamic rice crepe rolled with tempered potato mash, served with aromatic split lentil sambar and pure coconut dip.",
        price: 130,
        isBestseller: true,
        image: "https://img02.restaurantguru.com/c39e-THE-ROOF-NARAINGARH-Naraingarh-meals.jpg",
        rating: 4.9
      },
      {
        id: "si2",
        name: "Mysore Masala Dosa",
        description: "Golden crispy crepe coated with dynamic fiery garlic-chili red paste, stuffed with spiced seasoned potatoes and local butter.",
        price: 150,
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=600",
        rating: 4.7
      },
      {
        id: "si3",
        name: "Onion Uttapam",
        description: "Thick savory rice pancake topped with fresh red onions, spicy green chilies, ghee, and green coriander.",
        price: 120,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600"
      },
      {
        id: "si4",
        name: "Steamed Idli Sambar (2 Pcs)",
        description: "Incredibly soft, fluffy steamed fermented rice cakes served with hot spicy lentil curry and mint chutney.",
        price: 80,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600"
      }
    ]
  },
  {
    id: "chinese",
    name: "Chinese",
    slug: "chinese",
    iconName: "ChefHat",
    items: [
      {
        id: "ch1",
        name: "Paneer Chilli Dry",
        description: "Crispy deep-fried paneer cubes tossed in light soy sauce, sweet chili paste, ginger, capsicum and green onions.",
        price: 180,
        isBestseller: true,
        image: "https://images.unsplash.com/photo-1617692855660-93dc458b0f96?auto=format&fit=crop&q=80&w=600",
        rating: 4.7
      },
      {
        id: "ch2",
        name: "Crispy Vegetable Spring Rolls",
        description: "Thin flaky golden-fried rolls packed with seasoned wok-tossed cabbage, carrots and capsicum. Served with sweet chili ketchup.",
        price: 140,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600"
      },
      {
        id: "ch3",
        name: "Chilli Garlic Noodles",
        description: "Wok-fired wheat noodles flavoured with dynamic house-made garlic chili oil, colorful peppers, cabbage and scallions.",
        price: 150,
        isBestseller: true,
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=600",
        rating: 4.5
      },
      {
        id: "ch4",
        name: "Vegetable Fried Rice",
        description: "Stir-fried long-grain fluffy rice infused with soy, ginger, finely chopped carrots, French beans, and white pepper.",
        price: 140,
        image: "https://images.unsplash.com/photo-1603133872878-68550a50c0cf?auto=format&fit=crop&q=80&w=600"
      }
    ]
  },
  {
    id: "fast-food",
    name: "Pizza & Fast Food",
    slug: "fast-food",
    iconName: "Pizza",
    items: [
      {
        id: "ff1",
        name: "The Roof Special Veg Pizza",
        description: "Hand-stretched crust, premium tomato sauce, melted mozzarella, bell peppers, golden sweetcorn, red onions, olives, and dynamic herbs.",
        price: 260,
        isBestseller: true,
        image: "https://img02.restaurantguru.com/c7b5-THE-ROOF-NARAINGARH-Naraingarh-food.jpg",
        rating: 4.9
      },
      {
        id: "ff2",
        name: "Paneer Tikka Pizza",
        description: "Indi-fusion pizza loaded with smokey charcoal tandoor-kissed paneer cubes, chopped peppers, dynamic green dip drizzle.",
        price: 280,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
        rating: 4.8
      },
      {
        id: "ff3",
        name: "Gourmet Pasta Arrabbiata",
        description: "Penne pasta rolled in sweet-and-spicy red tomato stew, dressed with roasted bell peppers, fresh garlic, olives, and basil oil.",
        price: 180,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600"
      },
      {
        id: "ff4",
        name: "Ultimate Club Sandwich",
        description: "Double layered toasted bread filled with garden cucumbers, fresh tomatoes, crunchy coleslaw, cheese slide, and golden potato patty.",
        price: 130,
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=600"
      }
    ]
  },
  {
    id: "sweets",
    name: "Sweets & Desserts",
    slug: "sweets",
    iconName: "Candy",
    items: [
      {
        id: "sw1",
        name: "Signature Gajar Ka Halwa",
        description: "Grated sweet red local carrots simmered for hours in thickened milk, condensed khoya, desi cow ghee, garnished with premium pistachios and almond splits.",
        price: 80,
        isBestseller: true,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600",
        rating: 5.0
      },
      {
        id: "sw2",
        name: "Rich Rasmalai (2 Pcs)",
        description: "Delicate, velvety cheese patties soaked in chilled, cardamon-infused creamy sweetened milk, heavily layered with saffron.",
        price: 60,
        isBestseller: true,
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=600",
        rating: 4.9
      },
      {
        id: "sw3",
        name: "Premium Kaju Katli (250g)",
        description: "The crown jewel of Indian desserts. Made from finest grade cashews, pure cardamom powder, decorated with high quality silver foil.",
        price: 180,
        image: "https://images.unsplash.com/photo-1585969643871-466187db1aa6?auto=format&fit=crop&q=80&w=600"
      },
      {
        id: "sw4",
        name: "Sweet Thick Lassi",
        description: "Traditional refreshing yoghurt milk whipped with pure rose extract, heavy clotted malai layer, served chilled in dynamic vessel.",
        price: 65,
        image: "https://images.unsplash.com/photo-1571006682858-a24e0dae9ffa?auto=format&fit=crop&q=80&w=600"
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Rajesh Sharma",
    location: "Naraingarh Local Guide",
    rating: 5,
    comment: "Undeniably the best rooftop vegetarian restaurant in Naraingarh! The view from the top is pleasant, absolutely lovely atmosphere and peaceful lighting. My family absolutely loved their Special Masala Dosa and North Indian platter.",
    date: "2 weeks ago"
  },
  {
    id: "t2",
    name: "Pooja Gupta",
    location: "Ambala Explorer",
    rating: 5,
    comment: "Superb food and sweet counter! The Gajar ka Halwa is freshly made in pure ghee and extremely tasty. The seating is highly spacious, perfect place for hosting tiny parties or get-togethers.",
    date: "1 month ago"
  },
  {
    id: "t3",
    name: "Amanpreet Singh",
    location: "Regular Visitor",
    rating: 4,
    comment: "Great quality ingredients. The Paneer Chilli and The Roof Veg Special Pizza was excellent. Very friendly staff and cozy family atmosphere. Highly recommended when you are traveling on Chandigarh-Nahan road.",
    date: "3 weeks ago"
  },
  {
    id: "t4",
    name: "Manish Kumar",
    location: "Sweets Connoisseur",
    rating: 5,
    comment: "An excellent pure vegetarian restaurant with a spectacular rooftop setting! The service might get a little slow during weekend peak hours, but the fantastic food quality and warm aesthetics completely make up for it.",
    date: "1 month ago"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "f1",
    question: "Do you offer pure vegetarian kitchen options and Jain food?",
    answer: "Yes, The Roof is a 100% pure vegetarian establishment. We also offer customized Jain food options prepared without onions and garlic upon request. Please inform our servers while ordering."
  },
  {
    id: "f2",
    question: "Where is the restaurant located and is parking available?",
    answer: "We are located 'Near Sharma Ice Factory, Chandigarh-Nahan Road, Naraingarh, Haryana 134203'. We have a very spacious, designated free parking lot right in front of the premises with security."
  },
  {
    id: "f3",
    question: "What are your exact daily operating hours?",
    answer: "We are open daily from 11:00 AM to 11:00 PM (Monday to Sunday), offering breakfast, lunch, and dinner. The sweets counter remains active during these hours too."
  },
  {
    id: "f4",
    question: "Do you accept advance table reservations and private function bookings?",
    answer: "Absolutely! You can book in advance directly from this website utilizing our simplified 'Reserve Table' portal. For birthday celebrations, gatherings, or larger parties on the premium rooftop, you can instantly message us on WhatsApp or call us."
  },
  {
    id: "f5",
    question: "Do you provide home delivery in Naraingarh?",
    answer: "Yes, we provide takeaway services and home delivery across Naraingarh. You can instantly order by clicking 'Order Online' or connecting directly via our official WhatsApp line: +91 92585 81616."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    url: "https://img02.restaurantguru.com/cc39-Restaurant-THE-ROOF-NARAINGARH-design.jpg",
    title: "Elegant Seating Collage",
    category: "Ambience",
    description: "Our rooftop dining space beautifully compiled with ambient lights and comfortable furniture."
  },
  {
    id: "g2",
    url: "https://img02.restaurantguru.com/c1bd-THE-ROOF-NARAINGARH-Naraingarh-interior.jpg",
    title: "Cozy Indoor & Lounge Space",
    category: "Ambience",
    description: "Warmly lit seating areas designed to make family dining highly comfortable and elegant."
  },
  {
    id: "g3",
    url: "https://img02.restaurantguru.com/c7b5-THE-ROOF-NARAINGARH-Naraingarh-food.jpg",
    title: "Our Famous Wood-fired Baked Pizza",
    category: "Dishes",
    description: "The Roof Special thin-crust pizza loaded with premium cheese and fresh vegetables."
  },
  {
    id: "g4",
    url: "https://img02.restaurantguru.com/c39e-THE-ROOF-NARAINGARH-Naraingarh-meals.jpg",
    title: "Authentic South Indian Crepe",
    category: "Dishes",
    description: "Crispy freshly rolled South Indian Masala Dosa served with dynamic dips."
  },
  {
    id: "g5",
    url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAG2XIvJ5Gi0u6qU59uusuKE_n1x9DudXZkT5f5ERs8MD267rHdUyOIga7VLSP9TEbO-2F7oV0-dX4Ns-UU7F-0B376035wYCb9arRfuMK8taMUVScnG53nWgz1a1x-4ivJkpn0Bhw=s1360-w1360-h1020-rw",
    title: "The Roof Sweets Counter Showcase",
    category: "Sweets",
    description: "Our gourmet counter displaying delicious fresh barfi, local premium sweets, and regional desserts."
  },
  {
    id: "g6",
    url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFB_bpK2cgykkyeXjkS4a3uu8egK1HMkwP1CvN8duascVazm0c9M7s7ibtP-n4f4rVhnkvjZ2QYHAyh6InM3bmiESZAUapENbdbVW0SguyZj4xM5O-NXE7rfXB3MglHPjND03EuCg=s1360-w1360-h1020-rw",
    title: "Fresh Crispy Samosas & Savories",
    category: "Dishes",
    description: "Perfectly seasoned, golden fried snacks plated and served alongside fresh local chutneys."
  },
  {
    id: "g7",
    url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHAHBmVY-2TvN0Aus89OlTdzBs0TUNvmP95j6sW_4V3guGYZ1VqVgaFF4Idvn5jmhIzKJdFVgrZj4hPp1oZHJr2WFTwgitqJuCZz2JZOWtTSgYj07iOwJgBazRvQSMJ4j1LA58=s1360-w1360-h1020-rw",
    title: "Breezy Open Air Sunshade Desks",
    category: "Ambience",
    description: "Unwind on our spacious rooftop overlooking beautiful scenic natural breezes and clear skies."
  },
  {
    id: "g8",
    url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEnmVXA0cfw9JnTklrkTuFc-dnrlUdt7oMG9Tve-tsEZycT1JUbMBPT4Dol64yeVqkq_2hHhCsb81wZzULRqON35IZc0kjHZCNnQE9RG2wpdyan8Gg4Ke7hBlhNrSLN-yjVLpLD=s1360-w1360-h1020-rw",
    title: "Creamy Thick Dessert Shakes",
    category: "Sweets",
    description: "Delicious velvety cold shakes crafted with rich dairy and sweet premium toppings."
  },
  {
    id: "g9",
    url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHYdmihNVRzXF7G4J6_BWL3fXPPI9efpSXgATUuo_Mxj6D0dU186Yc8yYlTCAqYVCZSJQBZPt-AYA908gYEwnrmzQI_1ZPEXRnoUlFPOkpjlILAYFBOxG53VV411yLz0AyP9ARP=s1360-w1360-h1020-rw",
    title: "VIP Lounge & Comfortable Sofa Cabanas",
    category: "Ambience",
    description: "Classy wooden framing matching premium leather look couches, designed for perfect family moments."
  }
];
