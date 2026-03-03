* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background: #0a0a0a;
    color: #fff;
    line-height: 1.6;
}

/* Dark Background */
.dark-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, #1a1a1a 0%, #000 100%);
    z-index: -1;
}

/* Navbar */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.9);
    border-bottom: 2px solid #333;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 24px;
    font-weight: 800;
    font-family: 'Orbitron', sans-serif;
    color: #fff;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 30px;
}

.nav-menu a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: 0.3s;
}

.nav-menu a:hover,
.nav-menu a.active {
    color: #00ffff;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 80px 20px;
}

.main-title {
    font-size: 80px;
    font-weight: 900;
    font-family: 'Orbitron', sans-serif;
    margin-bottom: 20px;
    text-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
}

.badge-container {
    display: flex;
    gap: 15px;
    justify-content: center;
    margin: 30px 0;
    flex-wrap: wrap;
}

.badge-simple {
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid #333;
    border-radius: 5px;
    font-weight: 500;
}

.hero-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 40px;
    flex-wrap: wrap;
}

.btn-simple {
    padding: 12px 30px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 600;
    transition: 0.3s;
    border: 2px solid;
}

.btn-simple.owner {
    background: #0088cc;
    color: white;
    border-color: #0088cc;
}

.btn-simple.owner:hover {
    background: transparent;
    color: #0088cc;
}

.btn-simple.channel {
    background: #ff00ff;
    color: white;
    border-color: #ff00ff;
}

.btn-simple.channel:hover {
    background: transparent;
    color: #ff00ff;
}

/* Products Section */
.products {
    padding: 80px 0;
    background: rgba(0, 0, 0, 0.8);
}

.section-title {
    text-align: center;
    font-size: 36px;
    font-family: 'Orbitron', sans-serif;
    margin-bottom: 10px;
    color: #fff;
}

.section-subtitle {
    text-align: center;
    color: #888;
    margin-bottom: 50px;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 25px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.product-card {
    background: rgba(20, 20, 20, 0.9);
    border: 1px solid #333;
    border-radius: 10px;
    padding: 25px;
    text-align: center;
    position: relative;
    transition: 0.3s;
}

.product-card:hover {
    transform: translateY(-5px);
    border-color: #00ffff;
    box-shadow: 0 5px 20px rgba(0, 255, 255, 0.2);
}

.card-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 10px;
    border-radius: 3px;
    font-size: 12px;
    font-weight: 600;
}

.card-badge.hot { background: #ff4444; color: white; }
.card-badge.new { background: #44ff44; color: black; }
.card-badge.popular { background: #ff88ff; color: black; }
.card-badge.limited { background: #ff8844; color: white; }
.card-badge.pubg { background: #ffaa00; color: black; }
.card-badge.death { background: black; color: red; border: 1px solid red; }

.card-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 15px;
    background: #333;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: #00ffff;
}

.product-card h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #fff;
}

.product-card p {
    color: #888;
    font-size: 14px;
    margin-bottom: 15px;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #333;
}

.price {
    color: #00ffff;
    font-weight: 600;
}

.order-btn {
    padding: 8px 20px;
    background: #00ffff;
    color: #000;
    text-decoration: none;
    border-radius: 5px;
    font-weight: 600;
    transition: 0.3s;
}

.order-btn:hover {
    background: #ff00ff;
    color: white;
}

/* Contact Section */
.contact {
    padding: 80px 0;
}

.contact-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    max-width: 1000px;
    margin: 40px auto;
    padding: 0 20px;
}

.contact-card {
    background: rgba(20, 20, 20, 0.9);
    border: 1px solid #333;
    border-radius: 10px;
    padding: 30px;
    text-align: center;
}

.contact-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 20px;
    background: #333;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    color: #00ffff;
}

.contact-card h3 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #fff;
}

.contact-info p {
    margin: 10px 0;
    color: #888;
}

.contact-info span {
    color: #fff;
}

.contact-info a {
    color: #00ffff;
    text-decoration: none;
}

.contact-info a:hover {
    text-decoration: underline;
}

.contact-btn {
    display: inline-block;
    padding: 12px 30px;
    margin-top: 20px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 600;
    transition: 0.3s;
}

.owner-btn {
    background: #0088cc;
    color: white;
}

.owner-btn:hover {
    background: #006699;
}

.channel-btn {
    background: #ff00ff;
    color: white;
}

.channel-btn:hover {
    background: #cc00cc;
}

/* Stats */
.stats-container {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: 50px;
    flex-wrap: wrap;
}

.stat-box {
    text-align: center;
    padding: 20px 30px;
    background: rgba(20, 20, 20, 0.9);
    border: 1px solid #333;
    border-radius: 10px;
    min-width: 150px;
}

.stat-number {
    display: block;
    font-size: 36px;
    font-weight: 800;
    color: #00ffff;
    margin-bottom: 5px;
}

.stat-label {
    color: #888;
    font-size: 14px;
}

/* Footer */
.footer {
    padding: 40px 0 20px;
    border-top: 1px solid #333;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
}

.footer-logo {
    font-size: 28px;
    font-family: 'Orbitron', sans-serif;
    margin-bottom: 15px;
    color: #00ffff;
}

.footer-text p {
    color: #888;
    margin: 5px 0;
}

.footer-text .small {
    font-size: 12px;
    color: #666;
}

.footer-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
}

.footer-links a {
    color: #fff;
    font-size: 24px;
    text-decoration: none;
    transition: 0.3s;
}

.footer-links a:hover {
    color: #00ffff;
}

/* Responsive */
@media (max-width: 768px) {
    .main-title {
        font-size: 40px;
    }
    
    .nav-menu {
        display: none;
    }
    
    .badge-container {
        flex-direction: column;
        align-items: center;
    }
    
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .btn-simple {
        width: 100%;
        max-width: 300px;
    }
}
