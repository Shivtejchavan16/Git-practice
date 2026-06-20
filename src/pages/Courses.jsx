import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../App.css'

const allCourses = [
  // Tech Courses - नवीन
  {
    id: 1,
    title: "Front-End Developer Pro",
    desc: "HTML, CSS, JavaScript, React - Complete Package",
    price: "₹3999",
    img: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=500",
    tag: "Bestseller",
    category: "Tech",
    students: "22.5k"
  },
  {
    id: 2,
    title: "CSS Mastery Course",
    desc: "Flexbox, Grid, Animations, Tailwind CSS",
    price: "₹1999",
    img: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=500",
    tag: "Popular",
    category: "Tech",
    students: "18.2k"
  },
  {
    id: 3,
    title: "Java Complete Course",
    desc: "Core Java, OOPs, DSA, Spring Boot",
    price: "₹4999",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500",
    tag: "Trending",
    category: "Tech",
    students: "16.7k"
  },
  {
    id: 4,
    title: "Backend Developer Pro",
    desc: "Node.js, Express, MongoDB, REST APIs",
    price: "₹4499",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500",
    tag: "Hot",
    category: "Tech",
    students: "14.3k"
  },
  {
    id: 5,
    title: "AI & Machine Learning",
    desc: "Python, ML, Deep Learning, ChatGPT",
    price: "₹5999",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500",
    tag: "Premium",
    category: "Tech",
    students: "19.8k"
  },
  {
    id: 6,
    title: "Cyber Security Expert",
    desc: "Ethical Hacking, Network Security, Pentesting",
    price: "₹6999",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500",
    tag: "New",
    category: "Tech",
    students: "11.2k"
  },
  {
    id: 7,
    title: "Full Stack MERN",
    desc: "MongoDB, Express, React, Node.js",
    price: "₹5499",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500",
    tag: "Bestseller",
    category: "Tech",
    students: "25.1k"
  },
  
  // Language Courses
  {
    id: 8,
    title: "Spoken English Mastery",
    desc: "Fluent English in 90 Days - Grammar + Speaking",
    price: "₹1499",
    img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500",
    tag: "Trending",
    category: "Language",
    students: "25.2k"
  },
  {
    id: 9,
    title: "Hindi Pro Course",
    desc: "Perfect Hindi - Reading, Writing, Speaking",
    price: "₹999",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500",
    tag: "New",
    category: "Language",
    students: "14.8k"
  },
  {
    id: 10,
    title: "Marathi Language Expert",
    desc: "मराठी भाषा - व्याकरण, लेखन, संभाषण",
    price: "₹999",
    img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500",
    tag: "Popular",
    category: "Language",
    students: "9.6k"
  },
  
  // Other Courses
  {
    id: 11,
    title: "Men's Fitness Beast",
    desc: "6-Pack Abs, Muscle Gain, Diet Plans",
    price: "₹1999",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500",
    tag: "Hot",
    category: "Fitness",
    students: "12.5k"
  },
  {
    id: 12,
    title: "Stock Market Alpha",
    desc: "Trading, Investment, Wealth Building",
    price: "₹3499",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500",
    tag: "Bestseller",
    category: "Finance",
    students: "15.3k"
  }
]

function Courses() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Tech', 'Language', 'Fitness', 'Finance']
  
  const filteredCourses = filter === 'All' 
    ? allCourses 
    : allCourses.filter(c => c.category === filter)

  return (
    <div className="page">
      <div className="hero-section">
        <h1 className="title">Tech & <span>Skill Courses</span></h1>
        <p className="subtitle">Master coding & languages with industry experts</p>
      </div>

      <div className="filters">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            className={`filter-chip ${filter === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid">
        {filteredCourses.map(course => (
          <Link to={`/courses/${course.id}`} key={course.id} className="card-mens">
            <div className="card-img">
              <img src={course.img} alt={course.title} />
              <span className="badge">{course.tag}</span>
              <div className="card-overlay">
                <span>👥 {course.students}</span>
              </div>
            </div>
            <div className="card-content">
              <span className="cat-tag">{course.category}</span>
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
              <div className="card-bottom">
                <span className="price-tag">{course.price}</span>
                <button className="btn-primary">Join Now</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Courses