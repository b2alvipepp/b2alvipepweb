// Particle Effect
const particleCanvas = document.getElementById('particleCanvas');
const ctx = particleCanvas.getContext('2d');

particleCanvas.width = window.innerWidth;
particleCanvas.height = window.innerHeight;

const particles = [];
const particleCount = 100;

for (let i = 0; i < particleCount; i++) {
    particles.push({
        x: Math.random() * particleCanvas.width,
        y: Math.random() * particleCanvas.height,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        color: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, ${Math.random() * 0.5 + 0.2})`
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    
    particles.forEach(particle => {
        particle.x += particle.dx;
        particle.y += particle.dy;
        
        if (particle.x < 0 || particle.x > particleCanvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > particleCanvas.height) particle.dy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Draw connections
        particles.forEach(otherParticle => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(0, 255, 255, ${0.2 - distance/500})`;
                ctx.lineWidth = 1;
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.stroke();
            }
        });
    });
    
    requestAnimationFrame(animateParticles);
}

animateParticles();

// Matrix Rain Effect
const matrixCanvas = document.getElementById('matrixCanvas');
const mtx = matrixCanvas.getContext('2d');

matrixCanvas.width = window.innerWidth;
matrixCanvas.height = window.innerHeight;

const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
const matrixCharsArray = matrixChars.split("");
const fontSize = 14;
const columns = matrixCanvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrix() {
    mtx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    mtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    
    mtx.fillStyle = '#0F0';
    mtx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
        const text = matrixCharsArray[Math.floor(Math.random() * matrixCharsArray.length)];
        mtx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar active state
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Animate stats numbers
const statNumbers = document.querySelectorAll('.stat-number');

function animateStats() {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        let current = parseInt(stat.innerText);
        const increment = target / 50;
        
        if (current < target) {
            current = Math.min(current + increment, target);
            stat.innerText = Math.round(current);
            setTimeout(animateStats, 20);
        } else {
            stat.innerText = target + (stat.parentElement.querySelector('.stat-label').innerText === 'SUPPORT' ? '/7' : '+');
        }
    });
}

// Start animation when stats are in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelector('.stats-grid')?.forEach(stats => {
    observer.observe(stats);
});

// Card animation on scroll
const productCards = document.querySelectorAll('.product-card');

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

productCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    cardObserver.observe(card);
});

// Resize canvases on window resize
window.addEventListener('resize', () => {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
    
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
});
