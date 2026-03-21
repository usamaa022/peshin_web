// app/page.js - Complete one-page application with secure admin login
'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Settings, Save, Edit2, Plus, Trash2, ChevronDown, ChevronUp, 
  Eye, EyeOff, LogIn, LogOut, ShoppingBag, Star, Heart, ShoppingCart,
  Camera, User, Lock, Gift, Sparkles, TrendingUp, Award, Clock, Phone, Mail,
  MapPin, Instagram, Facebook, Twitter, Youtube, ChevronRight, Calendar
} from 'lucide-react';

// ==================== INITIAL CONTENT ====================
const initialContent = {
  hero: {
    title: "Transform Your Look",
    subtitle: "With Expert Cosmetics",
    description: "Discover the art of beauty transformation with our premium cosmetic products and expert guidance. Experience the difference that quality makes.",
    bgImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    ctaText: "Shop Now",
    ctaLink: "#shop"
  },
  featured: {
    title: "B E A U T Y",
    subtitle: "Effortless Beauty Gifting For Holiday Moments",
    description: "Celebrate your holiday moments with curated beauty gifts that inspire confidence, care, and effortless elegance.",
    products: [
      { 
        id: 1, 
        name: "Skin Lightening Cream", 
        price: "$14.85", 
        oldPrice: "$15.40", 
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Brightens skin tone naturally",
        badge: "Bestseller",
        rating: 4.8
      },
      { 
        id: 2, 
        name: "Moisturize Night Cream", 
        price: "$17.65", 
        oldPrice: "$19.60", 
        image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Deep hydration while you sleep",
        badge: "New",
        rating: 4.9
      },
      { 
        id: 3, 
        name: "Skin Whitening Lotion", 
        price: "$16.80", 
        oldPrice: "$21.65", 
        image: "https://images.unsplash.com/photo-1570194065650-d99fb4d8bdc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Even skin tone formula",
        badge: "Sale",
        rating: 4.7
      },
      { 
        id: 4, 
        name: "Organic Rose Powder", 
        price: "$22.60", 
        oldPrice: "$23.80", 
        image: "https://images.unsplash.com/photo-1591348122449-aa67b2a28937?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Natural rose extract powder",
        badge: "Organic",
        rating: 4.9
      }
    ]
  },
  specialOffer: {
    title: "S P E C I A L   O F F E R",
    subtitle: "Discover Exclusive Beauty Discounts",
    discount: "TAKE 15% OFF",
    code: "SALFORD10",
    products: [
      { id: 1, name: "Vitamin C Serum", price: "$29", oldPrice: "$49", image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
      { id: 2, name: "Hyaluronic Acid", price: "$39", oldPrice: "$69", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
      { id: 3, name: "Retinol Cream", price: "$49", oldPrice: "$89", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
    ]
  },
  trending: {
    title: "T R E N D I N G",
    subtitle: "Most Popular Products This Week",
    products: [
      { id: 1, name: "Gold Face Serum", description: "24K gold infusion", price: "$89", sold: "2.5k+", image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
      { id: 2, name: "Collagen Booster", description: "Anti-aging formula", price: "$79", sold: "1.8k+", image: "https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
      { id: 3, name: "Peptide Complex", description: "Skin repair", price: "$99", sold: "1.2k+", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
    ]
  },
  achievements: {
    title: "P R O V E N   S U C C E S S",
    subtitle: "Our Achievements In Numbers",
    stats: [
      { id: 1, number: "48+", label: "Top Doctor Awards", icon: "🏆" },
      { id: 2, number: "96%", label: "Satisfied Clients", icon: "😊" },
      { id: 3, number: "26+", label: "Years of Practice", icon: "📅" },
      { id: 4, number: "15k+", label: "Plastic Surgery", icon: "🔬" },
      { id: 5, number: "61K", label: "Successful Treatments", icon: "✨" },
      { id: 6, number: "99+", label: "Expert Surgeons", icon: "👩‍⚕️" }
    ]
  },
  testimonials: {
    title: "C L I E N T   L O V E",
    subtitle: "What Our Customers Say",
    reviews: [
      { id: 1, name: "Sarah Johnson", rating: 5, text: "Absolutely love these products! My skin has never looked better.", image: "https://randomuser.me/api/portraits/women/1.jpg" },
      { id: 2, name: "Emily Davis", rating: 5, text: "The night cream is a game-changer. Highly recommend!", image: "https://randomuser.me/api/portraits/women/2.jpg" },
      { id: 3, name: "Jessica Brown", rating: 5, text: "Fast shipping and amazing quality products.", image: "https://randomuser.me/api/portraits/women/3.jpg" }
    ]
  },
  footer: {
    company: "Peshin Beauty",
    tagline: "Transform your beauty with expert cosmetics",
    email: "hello@peshinbeauty.com",
    phone: "+964 (770) 123-4567",
    address: "Iraq - Slemany near Goran St.",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      youtube: "https://youtube.com"
    }
  }
};

// ==================== LOGIN COMPONENT ====================
function LoginModal({ isOpen, onClose, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Demo credentials
    if (email === 'admin@peshin.com' && password === 'admin123') {
      onLogin(true);
      onClose();
      setError('');
    } else {
      setError('Invalid credentials. Use admin@peshin.com / admin123');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl transform transition-all animate-slide-up">
        <div className="bg-gradient-to-r from-[#c6a43b] to-[#e6c87a] p-6 text-white">
          <h2 className="text-2xl font-serif">Admin Login</h2>
          <p className="text-sm opacity-90">Enter your credentials to access admin panel</p>
        </div>
        
        <form onSubmit={handleLogin} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c6a43b]"
                placeholder="admin@peshin.com"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c6a43b]"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          
          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            className="w-full py-3 bg-[#c6a43b] text-white rounded-lg hover:bg-[#e6c87a] transition-all duration-300 font-semibold"
          >
            Login
          </button>
        </form>
        
        <div className="border-t p-4 text-center text-sm text-gray-500">
          Demo: admin@peshin.com / admin123
        </div>
      </div>
    </div>
  );
}

// ==================== EDIT BUTTON COMPONENT ====================
function EditButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-[#c6a43b] hover:text-white transition-all duration-300 group z-10"
    >
      <Edit2 size={18} className="group-hover:scale-110 transition-transform" />
    </button>
  );
}

// ==================== EDIT MODAL ====================
function EditModal({ isOpen, onClose, title, fields, data, onSave }) {
  const [formData, setFormData] = useState(data);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
          <h2 className="text-2xl font-serif">Edit {title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          {fields.map((field) => (
            <div key={field.key}>
              <label className="block text-sm font-medium mb-2">{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  value={formData[field.key] || ''}
                  onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#c6a43b]"
                  rows={field.rows || 3}
                />
              ) : field.type === 'image' ? (
                <div className="space-y-2">
                  <img src={formData[field.key]} alt="Preview" className="w-full h-48 object-cover rounded-lg" />
                  <input
                    type="text"
                    value={formData[field.key] || ''}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#c6a43b]"
                    placeholder="Image URL"
                  />
                </div>
              ) : (
                <input
                  type={field.type || 'text'}
                  value={formData[field.key] || ''}
                  onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#c6a43b]"
                />
              )}
            </div>
          ))}
        </div>
        
        <div className="sticky bottom-0 bg-white border-t p-4 flex justify-end gap-3">
          <button onClick={onClose} className="px-6 py-2 border rounded-lg hover:bg-gray-50">Cancel</button>
          <button onClick={() => { onSave(formData); onClose(); }} className="px-6 py-2 bg-[#c6a43b] text-white rounded-lg hover:bg-[#e6c87a] flex items-center gap-2">
            <Save size={18} /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

// ==================== MAIN COMPONENT ====================
export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [content, setContent] = useState(initialContent);
  const [editingSection, setEditingSection] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [counters, setCounters] = useState({});

  const sections = {
    hero: useRef(null),
    featured: useRef(null),
    specialOffer: useRef(null),
    trending: useRef(null),
    achievements: useRef(null),
    testimonials: useRef(null),
    newsletter: useRef(null)
  };

  // Load saved content from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('peshinContent');
    if (saved) {
      setContent(JSON.parse(saved));
    }
    const savedLogin = localStorage.getItem('peshinAdmin');
    if (savedLogin === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  // Save content to localStorage
  useEffect(() => {
    localStorage.setItem('peshinContent', JSON.stringify(content));
  }, [content]);

  // Save login state
  useEffect(() => {
    localStorage.setItem('peshinAdmin', isLoggedIn);
  }, [isLoggedIn]);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + 100;
      Object.entries(sections).forEach(([key, ref]) => {
        if (ref.current) {
          const offsetTop = ref.current.offsetTop;
          const offsetBottom = offsetTop + ref.current.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(key);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Counter animation for stats
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statElement = entry.target;
          const targetNumber = parseInt(statElement.getAttribute('data-target'));
          const id = statElement.getAttribute('data-id');
          if (!counters[id]) {
            let start = 0;
            const duration = 2000;
            const increment = targetNumber / (duration / 16);
            const timer = setInterval(() => {
              start += increment;
              if (start >= targetNumber) {
                start = targetNumber;
                clearInterval(timer);
              }
              setCounters(prev => ({ ...prev, [id]: Math.floor(start) }));
            }, 16);
          }
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('.stat-number').forEach(el => observer.observe(el));
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMobileMenuOpen(false);
  };

  const updateContent = (section, data) => {
    setContent(prev => ({ ...prev, [section]: { ...prev[section], ...data } }));
  };

  const updateProduct = (section, productId, updates) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        products: prev[section].products.map(p => p.id === productId ? { ...p, ...updates } : p)
      }
    }));
  };

  const addProduct = (section) => {
    const newId = Date.now();
    const newProduct = {
      id: newId,
      name: "New Product",
      price: "$0",
      oldPrice: "$0",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Product description",
      rating: 5
    };
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        products: [...prev[section].products, newProduct]
      }
    }));
  };

  const deleteProduct = (section, productId) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        products: prev[section].products.filter(p => p.id !== productId)
      }
    }));
  };

  const updateStat = (statId, updates) => {
    setContent(prev => ({
      ...prev,
      achievements: {
        ...prev.achievements,
        stats: prev.achievements.stats.map(s => s.id === statId ? { ...s, ...updates } : s)
      }
    }));
  };

  const updateReview = (reviewId, updates) => {
    setContent(prev => ({
      ...prev,
      testimonials: {
        ...prev.testimonials,
        reviews: prev.testimonials.reviews.map(r => r.id === reviewId ? { ...r, ...updates } : r)
      }
    }));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('peshinAdmin');
  };

  // Render star ratings
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star key={i} size={16} fill={i < rating ? "#c6a43b" : "none"} stroke={i < rating ? "#c6a43b" : "#ccc"} />
    ));
  };

  return (
    <div className="min-h-screen bg-[#faf7f2]">
      {/* Admin Login Button */}
      {!isLoggedIn && (
        <button
          onClick={() => setShowLogin(true)}
          className="fixed bottom-6 right-6 z-50 bg-[#c6a43b] text-white p-4 rounded-full shadow-lg hover:bg-[#e6c87a] transition-all duration-300 hover:scale-110 group"
        >
          <LogIn size={24} className="group-hover:rotate-12 transition-transform" />
        </button>
      )}
      
      {isLoggedIn && (
        <button
          onClick={handleLogout}
          className="fixed bottom-6 right-6 z-50 bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 hover:scale-110 group"
        >
          <LogOut size={24} />
        </button>
      )}

      {/* Login Modal */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} onLogin={setIsLoggedIn} />

      {/* Navbar */}
      <nav className={`fixed w-full z-40 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold cursor-pointer group" onClick={() => scrollToSection(sections.hero)}>
            <span className="text-[#c6a43b] group-hover:animate-pulse">Peshin</span>
            <span className={isScrolled ? 'text-[#2c2c2c]' : 'text-white'}> Beauty</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {Object.entries(sections).map(([key, ref]) => (
              <button
                key={key}
                onClick={() => scrollToSection(ref)}
                className={`hover:text-[#c6a43b] transition-all duration-300 capitalize relative ${
                  activeSection === key ? 'text-[#c6a43b]' : isScrolled ? 'text-[#2c2c2c]' : 'text-white'
                }`}
              >
                {key === 'specialOffer' ? 'Offers' : key === 'newsletter' ? 'Contact' : key}
                {activeSection === key && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#c6a43b] animate-slide-in" />
                )}
              </button>
            ))}
          </div>
          
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4 animate-slide-down">
            {Object.entries(sections).map(([key, ref]) => (
              <button
                key={key}
                onClick={() => scrollToSection(ref)}
                className="block w-full text-left px-6 py-3 text-[#2c2c2c] hover:bg-[#f9e6e6] transition-colors capitalize"
              >
                {key === 'specialOffer' ? 'Offers' : key === 'newsletter' ? 'Contact' : key}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={sections.hero} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {isLoggedIn && <EditButton onClick={() => setEditingSection({ section: 'hero', data: content.hero, fields: [
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'subtitle', label: 'Subtitle', type: 'text' },
          { key: 'description', label: 'Description', type: 'textarea', rows: 3 },
          { key: 'ctaText', label: 'Button Text', type: 'text' },
          { key: 'bgImage', label: 'Background Image', type: 'image' }
        ] })} />}
        <div className="absolute inset-0">
          <img src={content.hero.bgImage} alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>
        <div className="relative container mx-auto px-6 text-center text-white">
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight animate-float">
              {content.hero.title.split(' ').map((word, i) => (
                <span key={i} className="inline-block opacity-0 animate-fade-up" 
                  style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards' }}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <h2 className="text-3xl md:text-5xl font-serif text-[#c6a43b] mt-4 opacity-0 animate-fade-up" 
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              {content.hero.subtitle}
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto opacity-0 animate-fade-up"
              style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
              {content.hero.description}
            </p>
            <div className="flex gap-4 justify-center opacity-0 animate-fade-up"
              style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
              <button className="px-8 py-3 bg-[#c6a43b] text-white rounded-full hover:bg-[#e6c87a] transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
                {content.hero.ctaText}
                <ChevronRight size={18} className="inline ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-3 border-2 border-white rounded-full hover:bg-white hover:text-[#2c2c2c] transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-ping" />
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section ref={sections.featured} className="py-24 bg-white relative">
        {isLoggedIn && <EditButton onClick={() => setEditingSection({ section: 'featured', data: { title: content.featured.title, subtitle: content.featured.subtitle, description: content.featured.description }, fields: [
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'subtitle', label: 'Subtitle', type: 'text' },
          { key: 'description', label: 'Description', type: 'textarea', rows: 2 }
        ] })} />}
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="text-[#c6a43b] uppercase tracking-wider text-sm font-semibold">
              {content.featured.title}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mt-4 mb-6">
              {content.featured.subtitle}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {content.featured.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.featured.products.map((product) => (
              <div 
                key={product.id} 
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll opacity-0"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {isLoggedIn && (
                  <div className="absolute top-4 right-4 z-20 flex gap-2">
                    <button onClick={() => setEditingItem({ section: 'featured', item: product, type: 'product' })} 
                      className="bg-white p-2 rounded-full shadow-lg hover:bg-[#c6a43b] hover:text-white transition-all">
                      <Edit2 size={14} />
                    </button>
                    <button onClick={() => deleteProduct('featured', product.id)} 
                      className="bg-white p-2 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition-all">
                      <Trash2 size={14} />
                    </button>
                  </div>
                )}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.badge === 'Bestseller' ? 'bg-gold text-white' :
                      product.badge === 'New' ? 'bg-green-500 text-white' :
                      product.badge === 'Sale' ? 'bg-red-500 text-white' : 'bg-purple-500 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                )}
                <img src={product.image} alt={product.name} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'}`}>
                  <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500 ${hoveredProduct === product.id ? 'translate-y-0' : 'translate-y-full'}`}>
                    <h3 className="text-xl font-serif mb-1">{product.name}</h3>
                    <p className="text-sm mb-2">{product.description}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">{renderStars(product.rating)}</div>
                      <span className="text-sm">{product.rating}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#c6a43b] font-bold">{product.price}</span>
                      <span className="line-through text-gray-400">{product.oldPrice}</span>
                    </div>
                    <button className="mt-3 w-full py-2 bg-[#c6a43b] text-white rounded-full hover:bg-[#e6c87a] transition-all flex items-center justify-center gap-2">
                      <ShoppingCart size={16} /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {isLoggedIn && (
            <div className="text-center mt-8">
              <button onClick={() => addProduct('featured')} className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all">
                <Plus size={18} /> Add New Product
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Special Offer Section */}
      <section ref={sections.specialOffer} className="py-24 bg-gradient-to-br from-[#f9e6e6] to-white relative">
        {isLoggedIn && <EditButton onClick={() => setEditingSection({ section: 'specialOffer', data: { title: content.specialOffer.title, subtitle: content.specialOffer.subtitle, discount: content.specialOffer.discount, code: content.specialOffer.code }, fields: [
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'subtitle', label: 'Subtitle', type: 'text' },
          { key: 'discount', label: 'Discount Text', type: 'text' },
          { key: 'code', label: 'Promo Code', type: 'text' }
        ] })} />}
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="text-[#c6a43b] uppercase tracking-wider text-sm font-semibold">
              {content.specialOffer.title}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mt-4 mb-6">
              {content.specialOffer.subtitle}
            </h2>
            <div className="inline-block bg-[#c6a43b] text-white px-8 py-4 rounded-full mb-4 animate-pulse">
              <p className="text-2xl font-bold">{content.specialOffer.discount}</p>
              <p className="text-sm">USE CODE: <span className="font-mono tracking-wider">{content.specialOffer.code}</span></p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.specialOffer.products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll opacity-0 group">
                {isLoggedIn && (
                  <div className="absolute relative z-10 flex gap-2 p-2">
                    <button onClick={() => setEditingItem({ section: 'specialOffer', item: product, type: 'product' })} 
                      className="bg-white p-2 rounded-full shadow-lg hover:bg-[#c6a43b] hover:text-white transition-all">
                      <Edit2 size={14} />
                    </button>
                    <button onClick={() => deleteProduct('specialOffer', product.id)} 
                      className="bg-white p-2 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition-all">
                      <Trash2 size={14} />
                    </button>
                  </div>
                )}
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2">{product.name}</h3>
                  <div className="flex gap-2 mb-4">
                    <span className="text-2xl font-bold text-[#c6a43b]">{product.price}</span>
                    <span className="line-through text-gray-400">{product.oldPrice}</span>
                  </div>
                  <button className="w-full py-2 border-2 border-[#c6a43b] text-[#c6a43b] rounded-full hover:bg-[#c6a43b] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group">
                    <Gift size={16} /> Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {isLoggedIn && (
            <div className="text-center mt-8">
              <button onClick={() => addProduct('specialOffer')} className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all">
                <Plus size={18} /> Add New Offer
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Trending Section */}
      <section ref={sections.trending} className="py-24 bg-white relative">
        {isLoggedIn && <EditButton onClick={() => setEditingSection({ section: 'trending', data: { title: content.trending.title, subtitle: content.trending.subtitle }, fields: [
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'subtitle', label: 'Subtitle', type: 'text' }
        ] })} />}
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="text-[#c6a43b] uppercase tracking-wider text-sm font-semibold flex items-center justify-center gap-2">
              <TrendingUp size={16} /> {content.trending.title}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mt-4 mb-6">
              {content.trending.subtitle}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.trending.products.map((product) => (
              <div key={product.id} className="relative rounded-2xl overflow-hidden shadow-lg group animate-on-scroll opacity-0">
                {isLoggedIn && (
                  <div className="absolute top-4 right-4 z-20 flex gap-2">
                    <button onClick={() => setEditingItem({ section: 'trending', item: product, type: 'product' })} 
                      className="bg-white p-2 rounded-full shadow-lg hover:bg-[#c6a43b] hover:text-white transition-all">
                      <Edit2 size={14} />
                    </button>
                    <button onClick={() => deleteProduct('trending', product.id)} 
                      className="bg-white p-2 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition-all">
                      <Trash2 size={14} />
                    </button>
                  </div>
                )}
                <img src={product.image} alt={product.name} className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles size={16} className="text-[#c6a43b]" />
                      <span className="text-sm">{product.sold} sold</span>
                    </div>
                    <h3 className="text-2xl font-serif mb-1">{product.name}</h3>
                    <p className="text-sm mb-2">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-[#c6a43b] font-bold text-xl">{product.price}</span>
                      <button className="px-4 py-2 bg-[#c6a43b] text-white rounded-full hover:bg-[#e6c87a] transition-all flex items-center gap-1">
                        <ShoppingBag size={14} /> Buy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {isLoggedIn && (
            <div className="text-center mt-8">
              <button onClick={() => addProduct('trending')} className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all">
                <Plus size={18} /> Add Trending Product
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Achievements Section */}
      <section ref={sections.achievements} className="py-24 bg-gradient-to-br from-[#2c2c2c] to-[#1a1a1a] text-white relative">
        {isLoggedIn && <EditButton onClick={() => setEditingSection({ section: 'achievements', data: { title: content.achievements.title, subtitle: content.achievements.subtitle }, fields: [
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'subtitle', label: 'Subtitle', type: 'text' }
        ] })} />}
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="text-[#c6a43b] uppercase tracking-wider text-sm font-semibold">
              {content.achievements.title}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mt-4 mb-6">
              {content.achievements.subtitle}
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {content.achievements.stats.map((stat) => (
              <div key={stat.id} className="text-center animate-on-scroll opacity-0 group">
                {isLoggedIn && (
                  <button onClick={() => setEditingItem({ section: 'achievements', item: stat, type: 'stat' })} 
                    className="absolute mt-[-30px] ml-2 bg-white p-1 rounded-full shadow-lg hover:bg-[#c6a43b] hover:text-white transition-all">
                    <Edit2 size={12} />
                  </button>
                )}
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-[#c6a43b] mb-2">
                  <span className="stat-number" data-id={stat.id} data-target={parseInt(stat.number)}>
                    {counters[stat.id] || 0}
                  </span>
                  {stat.number.includes('+') && '+'}
                  {stat.number.includes('%') && '%'}
                  {stat.number.includes('k') && 'k'}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={sections.testimonials} className="py-24 bg-white relative">
        {isLoggedIn && <EditButton onClick={() => setEditingSection({ section: 'testimonials', data: { title: content.testimonials.title, subtitle: content.testimonials.subtitle }, fields: [
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'subtitle', label: 'Subtitle', type: 'text' }
        ] })} />}
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="text-[#c6a43b] uppercase tracking-wider text-sm font-semibold">
              {content.testimonials.title}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mt-4 mb-6">
              {content.testimonials.subtitle}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.testimonials.reviews.map((review) => (
              <div key={review.id} className="bg-gradient-to-br from-[#f9e6e6] to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-on-scroll opacity-0 relative">
                {isLoggedIn && (
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button onClick={() => setEditingItem({ section: 'testimonials', item: review, type: 'review' })} 
                      className="bg-white p-2 rounded-full shadow-lg hover:bg-[#c6a43b] hover:text-white transition-all">
                      <Edit2 size={12} />
                    </button>
                    <button onClick={() => {
                      setContent(prev => ({
                        ...prev,
                        testimonials: {
                          ...prev.testimonials,
                          reviews: prev.testimonials.reviews.filter(r => r.id !== review.id)
                        }
                      }));
                    }} className="bg-white p-2 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition-all">
                      <Trash2 size={12} />
                    </button>
                  </div>
                )}
                <div className="flex items-center gap-4 mb-4">
                  <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <div className="flex">{renderStars(review.rating)}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{review.text}"</p>
                <div className="mt-4 text-[#c6a43b]">
                  <Star size={20} fill="#c6a43b" stroke="none" />
                </div>
              </div>
            ))}
          </div>
          
          {isLoggedIn && (
            <div className="text-center mt-8">
              <button onClick={() => {
                const newReview = {
                  id: Date.now(),
                  name: "New Customer",
                  rating: 5,
                  text: "Amazing products!",
                  image: "https://randomuser.me/api/portraits/women/99.jpg"
                };
                setContent(prev => ({
                  ...prev,
                  testimonials: {
                    ...prev.testimonials,
                    reviews: [...prev.testimonials.reviews, newReview]
                  }
                }));
              }} className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all">
                <Plus size={18} /> Add Testimonial
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section ref={sections.newsletter} className="py-24 bg-gradient-to-r from-[#c6a43b] to-[#e6c87a] relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 animate-on-scroll opacity-0">Subscribe to Our Newsletter</h2>
            <p className="text-white/90 mb-8 animate-on-scroll opacity-0">Get the latest beauty tips and exclusive offers straight to your inbox.</p>
            <div className="flex flex-col md:flex-row gap-4 animate-on-scroll opacity-0">
              <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-3 border-2 border-white bg-transparent text-white placeholder-white/70 rounded-full focus:outline-none focus:border-white" />
              <button className="px-8 py-3 bg-white text-[#c6a43b] rounded-full hover:bg-[#2c2c2c] hover:text-white transition-all duration-300 font-semibold flex items-center justify-center gap-2 group">
                <Mail size={18} /> Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-serif mb-4">{content.footer.company}</h3>
              <p className="text-gray-400">{content.footer.tagline}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 flex items-center gap-2"><Mail size={14} /> {content.footer.email}</p>
              <p className="text-gray-400 flex items-center gap-2 mt-2"><Phone size={14} /> {content.footer.phone}</p>
              <p className="text-gray-400 flex items-center gap-2 mt-2"><MapPin size={14} /> {content.footer.address}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href={content.footer.social.instagram} className="text-gray-400 hover:text-[#c6a43b] transition-colors"><Instagram size={20} /></a>
                <a href={content.footer.social.facebook} className="text-gray-400 hover:text-[#c6a43b] transition-colors"><Facebook size={20} /></a>
                <a href={content.footer.social.twitter} className="text-gray-400 hover:text-[#c6a43b] transition-colors"><Twitter size={20} /></a>
                <a href={content.footer.social.youtube} className="text-gray-400 hover:text-[#c6a43b] transition-colors"><Youtube size={20} /></a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <p className="text-gray-400">Mon-Fri: 9am - 8pm</p>
              <p className="text-gray-400">Sat: 10am - 6pm</p>
              <p className="text-gray-400">Sun: Closed</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 {content.footer.company}. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Edit Modals */}
      {editingSection && (
        <EditModal
          isOpen={true}
          onClose={() => setEditingSection(null)}
          title={editingSection.section}
          fields={editingSection.fields}
          data={editingSection.data}
          onSave={(newData) => {
            updateContent(editingSection.section, newData);
            setEditingSection(null);
          }}
        />
      )}
      
      {editingItem && (
        <EditModal
          isOpen={true}
          onClose={() => setEditingItem(null)}
          title={`Edit ${editingItem.type === 'product' ? 'Product' : editingItem.type === 'stat' ? 'Stat' : 'Review'}`}
          fields={
            editingItem.type === 'product' ? [
              { key: 'name', label: 'Name', type: 'text' },
              { key: 'price', label: 'Price', type: 'text' },
              { key: 'oldPrice', label: 'Old Price', type: 'text' },
              { key: 'description', label: 'Description', type: 'textarea' },
              { key: 'image', label: 'Image URL', type: 'image' }
            ] : editingItem.type === 'stat' ? [
              { key: 'number', label: 'Number', type: 'text' },
              { key: 'label', label: 'Label', type: 'text' },
              { key: 'icon', label: 'Icon', type: 'text' }
            ] : [
              { key: 'name', label: 'Name', type: 'text' },
              { key: 'text', label: 'Review Text', type: 'textarea' },
              { key: 'image', label: 'Image URL', type: 'image' }
            ]
          }
          data={editingItem.item}
          onSave={(newData) => {
            if (editingItem.type === 'product') {
              updateProduct(editingItem.section, editingItem.item.id, newData);
            } else if (editingItem.type === 'stat') {
              updateStat(editingItem.item.id, newData);
            } else if (editingItem.type === 'review') {
              updateReview(editingItem.item.id, newData);
            }
            setEditingItem(null);
          }}
        />
      )}
      
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-up {
          animation: fadeUp 0.8s ease-out forwards;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }
        
        @keyframes slideIn {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        
        .animate-slide-in {
          animation: slideIn 0.3s ease-out forwards;
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .animate-on-scroll.animate-fade-up {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}