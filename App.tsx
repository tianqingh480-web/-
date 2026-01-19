
import React, { useState, useEffect, useMemo } from 'react';
import { Routes, Route, useNavigate, useParams, Link, useLocation } from 'react-router-dom';
import { PRODUCTS, FARMERS, FEEDBACKS } from './constants';
import { Product, Farmer, Feedback } from './types';

// --- Sub-components ---

const SectionHeader: React.FC<{ title: string; subtitle?: string; center?: boolean }> = ({ title, subtitle, center }) => (
  <div className={`mb-16 ${center ? 'text-center' : 'text-left'}`}>
    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 tracking-tight">{title}</h2>
    {subtitle && <p className="text-gray-500 text-lg max-w-2xl leading-relaxed mx-auto md:mx-0">{subtitle}</p>}
  </div>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => navigate('/')}>
          <span className="text-2xl font-serif font-black text-green-900 tracking-tighter uppercase group-hover:text-green-700 transition-colors">Agri Bloom</span>
        </div>
        <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-widest uppercase text-gray-600">
          <Link to="/" className={`transition-colors ${location.pathname === '/' ? 'text-green-800' : 'hover:text-green-800'}`}>首页</Link>
          <Link to="/products" className={`transition-colors ${location.pathname === '/products' ? 'text-green-800' : 'hover:text-green-800'}`}>甄选列表</Link>
          <a href="/#farmers" className="hover:text-green-800 transition-colors">助农故事</a>
          <a href="/#policy" className="hover:text-green-800 transition-colors">政策</a>
          <div className="flex items-center space-x-4 pl-6 border-l border-gray-200">
            <button className="hover:text-green-800"><i className="fas fa-search"></i></button>
            <button className="hover:text-green-800"><i className="fas fa-user-circle"></i></button>
            <button className="relative hover:text-green-800">
              <i className="fas fa-shopping-cart"></i>
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero: React.FC = () => (
  <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#FCFAF7] overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 z-10 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-[1.1] mb-8 animate-fadeIn">
          新鲜采摘 <br /> <span className="text-green-800">点亮您的每一天</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-lg leading-loose">
          探索我们来自偏远山区的有机农特产，每一份都满载着土地的热忱与大自然的馈赠，为您带来健康纯粹的味觉享受。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/products" className="bg-gray-900 text-white px-10 py-4 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-green-900 transition-all transform hover:scale-105 shadow-xl">立即下单</Link>
          <Link to="/products" className="bg-white text-gray-900 border border-gray-200 px-10 py-4 rounded-full text-center text-sm font-bold tracking-widest uppercase hover:border-gray-900 transition-all">浏览列表</Link>
        </div>
      </div>
      <div className="md:w-1/2 mt-16 md:mt-0 relative animate-fadeInRight">
        <div className="relative w-full aspect-square md:scale-110">
          <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" alt="Fresh Produce" className="w-full h-full object-cover rounded-3xl shadow-2xl rotate-3" />
          <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl hidden lg:block animate-bounce">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                <i className="fas fa-certificate text-xl"></i>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase">100% 有机认证</p>
                <p className="text-sm font-bold">源自核心产区</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MissionSection: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
      <div className="md:w-1/2 grid grid-cols-2 gap-4">
        <img src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg mt-8" alt="Farm" />
        <img src="https://images.unsplash.com/photo-1592394933243-951d3995d007?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg mb-8" alt="Produce" />
      </div>
      <div className="md:w-1/2">
        <h3 className="text-sm font-bold text-orange-500 uppercase tracking-[0.3em] mb-4">源于初心 · 终于匠心</h3>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight">倾注热忱，<br />分享土地的馈赠</h2>
        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
          <p>在[耕耘之美]，我们相信每一次品尝都是一次与大地的深刻交流。我们致力于发掘那些偏远山区中被遗忘的高品质食材。</p>
          <p>我们的初衷很简单：将最新鲜、最纯粹的农产品送到每一张餐桌。从传统农耕智慧到现代化的品质把控，我们从未停止探索与坚持。</p>
        </div>
        <button className="mt-10 bg-orange-100 text-orange-700 px-10 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all">了解我们更多</button>
      </div>
    </div>
  </section>
);

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/product/${product.id}`)} className="group flex flex-col items-center text-center cursor-pointer">
      <div className="relative w-full aspect-square overflow-hidden rounded-3xl mb-8 shadow-md group-hover:shadow-2xl transition-all duration-500">
        <img src={product.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={product.name} />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
        <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-gray-900 rounded-full shadow-sm">
                {product.category}
            </span>
        </div>
      </div>
      <h4 className="text-2xl font-serif font-bold text-gray-900 mb-2">{product.name}</h4>
      <p className="text-gray-500 text-sm mb-4 line-clamp-1">{product.desc}</p>
      <p className="text-xl font-bold text-green-900 mb-6">{product.price}</p>
      <div className="flex space-x-2">
        <button className="bg-gray-900 text-white text-[10px] px-6 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-green-800 transition-all">查看详情</button>
        <button className="border border-gray-200 text-gray-600 text-[10px] px-6 py-3 rounded-full font-bold uppercase tracking-widest hover:border-gray-900 transition-all" onClick={(e) => { e.stopPropagation(); /* Add to cart */ }}>加入购物车</button>
      </div>
    </div>
  );
};

const HomeProductGrid: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section id="products" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="甄选农味" 
          subtitle="从深山到餐桌，我们为您挑选最具代表性的时令特产。" 
          center 
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, 3).map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-20 text-center">
            <button 
                onClick={() => navigate('/products')}
                className="bg-orange-500 text-white px-12 py-5 rounded-full font-bold uppercase text-xs tracking-[0.2em] shadow-lg hover:bg-orange-600 transition-all transform hover:scale-105"
            >
                查看全部产品
            </button>
        </div>
      </div>
    </section>
  );
};

const FarmerStories: React.FC = () => (
  <section id="farmers" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader 
        title="助农故事" 
        subtitle="每一份丰收的喜悦背后，都有一段关于坚守、土地与希望的故事。" 
        center 
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {FARMERS.map(farmer => (
          <div key={farmer.id} className="group flex flex-col items-center text-center">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-green-100 rounded-full scale-105 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
              <img 
                src={farmer.avatar} 
                alt={farmer.name} 
                className="relative w-44 h-44 rounded-full object-cover border-4 border-white shadow-xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" 
              />
            </div>
            <h4 className="text-2xl font-serif font-bold text-gray-900 mb-2">{farmer.name}</h4>
            <div className="flex items-center text-green-700 text-[10px] font-bold uppercase tracking-widest mb-4">
              <i className="fas fa-map-marker-alt mr-2"></i>
              {farmer.location}
            </div>
            <p className="text-gray-500 leading-relaxed italic text-sm px-4">
              "{farmer.story}"
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FeedbackSection: React.FC = () => (
  <section className="py-24 bg-gray-50/30">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader title="口碑之选" subtitle="来自全国各地的支持，是我们坚持助农的最大动力。" center />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { ...FEEDBACKS[0], color: 'bg-orange-50 text-orange-900 border-orange-100' },
          { ...FEEDBACKS[1], color: 'bg-green-50 text-green-900 border-green-100' },
          { ...FEEDBACKS[2], color: 'bg-blue-50 text-blue-900 border-blue-100' },
        ].map((fb, idx) => (
          <div key={idx} className={`${fb.color} p-10 rounded-[2rem] border transition-all hover:-translate-y-2 relative overflow-hidden group shadow-sm hover:shadow-xl`}>
             <i className="fas fa-quote-right absolute top-6 right-6 opacity-10 text-4xl group-hover:scale-125 transition-transform"></i>
             <p className="text-lg font-medium leading-relaxed mb-8 italic">"{fb.comment}"</p>
             <div className="flex items-center">
                <img src={fb.avatar} className="w-12 h-12 rounded-full border-2 border-white mr-4" alt={fb.user} />
                <div>
                  <h5 className="font-bold text-sm uppercase tracking-widest">{fb.user}</h5>
                  <p className="text-xs opacity-60">资深品鉴家</p>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Newsletter: React.FC = () => (
  <section id="policy" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-[#1A1A1A] rounded-[3rem] p-12 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 z-10 text-center md:text-left">
          <h2 className="text-white text-4xl md:text-6xl font-serif font-bold mb-8">订阅农场周报 <br /><span className="text-green-500">获取首单九折优惠</span></h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl">加入我们的社区，优先获取时令新品动态及助农政策解读，共同见证乡村振兴。</p>
          <form className="relative max-w-md mx-auto md:mx-0" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="您的电子邮箱" 
              className="w-full bg-white/10 border border-white/20 rounded-full py-5 px-8 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all placeholder:text-gray-500"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-green-500 text-white px-8 rounded-full font-bold text-xs uppercase hover:bg-green-600 transition-colors">订阅</button>
          </form>
        </div>
        <div className="md:w-1/3 mt-12 md:mt-0 flex justify-center">
          <img src="https://images.unsplash.com/photo-1488459739019-19e53f178227?auto=format&fit=crop&q=80&w=400" className="w-64 rounded-2xl shadow-2xl rotate-12" alt="Healthy Fruit" />
        </div>
      </div>
    </div>
  </section>
);

// --- Page Views ---

const HomeView: React.FC = () => (
  <>
    <Hero />
    <MissionSection />
    <HomeProductGrid />
    <FarmerStories />
    <FeedbackSection />
    <Newsletter />
  </>
);

const ProductsListView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = useMemo(() => {
    const cats = ['全部', ...new Set(PRODUCTS.map(p => p.category))];
    return cats;
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchCategory = selectedCategory === '全部' || p.category === selectedCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="pt-40 pb-24 bg-white animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="甄选列表" 
          subtitle="探索大地的馈赠。我们与各地小农紧密合作，为您呈现最纯粹、最新鲜的天然滋味。" 
        />
        
        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div className="flex flex-wrap items-center gap-4">
                {categories.map(cat => (
                    <button 
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                            selectedCategory === cat 
                            ? 'bg-gray-900 text-white shadow-xl scale-105' 
                            : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            
            <div className="relative w-full md:w-80">
                <i className="fas fa-search absolute left-6 top-1/2 -translate-y-1/2 text-gray-300"></i>
                <input 
                    type="text" 
                    placeholder="搜寻心仪好货..." 
                    className="w-full pl-14 pr-6 py-4 rounded-full bg-gray-50 border-none focus:ring-2 focus:ring-green-500 transition-all text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
                {filteredProducts.map(p => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        ) : (
            <div className="text-center py-20 bg-gray-50 rounded-[3rem]">
                <i className="fas fa-seedling text-4xl text-gray-200 mb-6 block"></i>
                <p className="text-gray-400 font-medium">暂时没有找到符合条件的产品，请尝试搜索其他关键字。</p>
            </div>
        )}
      </div>
    </section>
  );
};

const ProductDetailView: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === Number(id));

  // Specs and Quantity State
  const [selectedSpec, setSelectedSpec] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">产品未找到</h2>
          <button onClick={() => navigate('/')} className="text-green-800 font-bold underline">返回首页</button>
        </div>
      </div>
    );
  }

  const currentUnitPrice = (product.specs?.[selectedSpec]?.price ?? parseFloat(product.price.replace(/[^0-9.]/g, ''))) || 50;
  const totalPrice = (currentUnitPrice * quantity).toFixed(2);

  const handleSpecSelect = (index: number) => {
    setSelectedSpec(index);
  };

  const updateQuantity = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleCheckout = () => {
    const specLabel = product.specs?.[selectedSpec]?.label || '标准装';
    alert(`感谢支持助农！您已选择：\n产品：${product.name}\n规格：${specLabel}\n数量：${quantity}\n总额：¥${totalPrice}`);
  };

  return (
    <section className="pt-40 pb-24 bg-white animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">
        <button 
          onClick={() => navigate(-1)} 
          className="group mb-12 flex items-center text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-green-800 transition-colors"
        >
          <i className="fas fa-arrow-left mr-3 transition-transform group-hover:-translate-x-2"></i> 返回列表
        </button>
        
        <div className="flex flex-col md:flex-row gap-16">
          {/* Image Gallery */}
          <div className="md:w-1/2">
            <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl mb-6">
              <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
            </div>
            <div className="grid grid-cols-4 gap-4">
               {[...Array(4)].map((_, i) => (
                 <div key={i} className="aspect-square rounded-2xl overflow-hidden cursor-pointer opacity-60 hover:opacity-100 transition-opacity border border-gray-100">
                    <img src={product.image} className="w-full h-full object-cover" alt="Detail" />
                 </div>
               ))}
            </div>
          </div>

          {/* Info Side */}
          <div className="md:w-1/2">
            <div className="inline-block px-4 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-widest mb-6">
              {product.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">{product.name}</h1>
            
            {/* Price Display */}
            <div className="flex items-baseline mb-8">
               <span className="text-3xl md:text-5xl font-bold text-orange-500 mr-2">¥{totalPrice}</span>
               <span className="text-sm text-gray-400"> (含运费)</span>
            </div>
            
            <div className="space-y-8 mb-12">
               {/* Product Description */}
               <div>
                 <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">产品描述</h4>
                 <p className="text-lg text-gray-600 leading-loose">{product.desc}</p>
               </div>

               {/* Specification Selector */}
               {product.specs && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">规格选项</h4>
                    <div className="flex flex-wrap gap-3">
                      {product.specs.map((spec, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSpecSelect(idx)}
                          className={`px-6 py-3 rounded-xl text-sm font-bold transition-all border ${
                            selectedSpec === idx 
                              ? 'bg-green-600 text-white border-green-600 shadow-md' 
                              : 'bg-white text-gray-600 border-gray-100 hover:border-green-600 hover:text-green-600'
                          }`}
                        >
                          {spec.label}
                        </button>
                      ))}
                    </div>
                  </div>
               )}

               {/* Quantity Selector */}
               <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">购买数量</h4>
                  <div className="inline-flex items-center border border-gray-100 rounded-xl overflow-hidden">
                    <button 
                      onClick={() => updateQuantity(-1)}
                      className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 text-gray-400 transition-colors"
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    <span className="w-16 h-12 flex items-center justify-center text-lg font-bold text-gray-900 border-x border-gray-100">
                      {quantity}
                    </span>
                    <button 
                      onClick={() => updateQuantity(1)}
                      className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 text-gray-400 transition-colors"
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
               </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
               <button 
                 onClick={handleCheckout}
                 className="flex-1 bg-gray-900 text-white py-5 rounded-full font-bold uppercase text-xs tracking-[0.2em] hover:bg-green-900 transition-all shadow-xl flex items-center justify-center"
               >
                 立即购买 ¥{totalPrice}
               </button>
               <button className="flex-1 border border-gray-200 text-gray-900 py-5 rounded-full font-bold uppercase text-xs tracking-[0.2em] hover:border-gray-900 transition-all flex items-center justify-center">
                 加入购物车
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen selection:bg-orange-200">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/products" element={<ProductsListView />} />
        <Route path="/product/:id" element={<ProductDetailView />} />
      </Routes>

      <footer className="bg-white border-t border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-12">
          <div className="col-span-2">
             <h3 className="text-2xl font-serif font-black text-gray-900 mb-6">Agri Bloom</h3>
             <p className="text-gray-500 leading-loose max-w-sm mb-8">
               让每一次消费都成为助农的微光，跨越山海，让爱与美味常在。
             </p>
             <div className="flex space-x-6 text-gray-400">
                <a href="#" className="hover:text-green-800 transition-colors"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="hover:text-green-800 transition-colors"><i className="fab fa-instagram"></i></a>
                <a href="#" className="hover:text-green-800 transition-colors"><i className="fab fa-twitter"></i></a>
             </div>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-gray-900">快速链接</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-green-800">关于我们</Link></li>
              <li><a href="#" className="hover:text-green-800">联系我们</a></li>
              <li><a href="#" className="hover:text-green-800">农户加盟</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-gray-900">产品类别</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-green-800">有机水果</a></li>
              <li><a href="#" className="hover:text-green-800">时令蔬菜</a></li>
              <li><a href="#" className="hover:text-green-800">深山干货</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-gray-900">服务支持</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-green-800">配送说明</a></li>
              <li><a href="#" className="hover:text-green-800">售后政策</a></li>
              <li><a href="#" className="hover:text-green-800">常见问题</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-16 mt-16 border-t border-gray-50 text-center text-xs text-gray-400 tracking-widest uppercase">
          © 2024 Agri Bloom Premium Farm Collective. All Rights Reserved.
        </div>
      </footer>

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-10 right-10 w-14 h-14 bg-white border border-gray-100 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 z-50 hover:bg-gray-900 hover:text-white ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default App;
