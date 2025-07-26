// Product data
const productsData = {
  "products": [
    {
      "id": 1,
      "name": "Linen Co-Ord Set",
      "category": "man-jeans",
      "price": 700,
      "image": "https://images.unsplash.com/photo-1602810314743-cd4d049da4e6?auto=format&fit=crop&w=600&q=60",
      "description": "Breathable lilac linen set perfect for summer outings.",
      "availableSizes": ["28", "30", "32", "34"]
    },
    {
      "id": 2,
      "name": "Graphic Oversized Tee",
      "category": "man-shirt",
      "price": 699,
      "image": "https://images.unsplash.com/photo-1520975931733-6c96c1d0b7c6?auto=format&fit=crop&w=600&q=60",
      "description": "100% cotton tee with bold Gujarati typography print.",
      "availableSizes": ["M", "L", "XL"]
    },
    {
      "id": 3,
      "name": "Six-Pocket Cargo Pants",
      "category": "man-tshirt",
      "price": 999,
      "image": "https://images.unsplash.com/photo-1602810316139-42f74b5a1a10?auto=format&fit=crop&w=600&q=60",
      "description": "Utility cargos in olive green with adjustable hems.",
      "availableSizes": ["M", "L", "XL"]
    },
    {
      "id": 4,
      "name": "Linen Co-Ord Set",
      "category": "man-jeans",
      "price": 700,
      "image": "https://images.unsplash.com/photo-1602810314743-cd4d049da4e6?auto=format&fit=crop&w=600&q=60",
      "description": "Breathable lilac linen set perfect for summer outings.",
      "availableSizes": ["28", "30", "32", "34"]
    },
    {
      "id": 5,
      "name": "Graphic Oversized Tee",
      "category": "man-shirt",
      "price": 699,
      "image": "https://images.unsplash.com/photo-1520975931733-6c96c1d0b7c6?auto=format&fit=crop&w=600&q=60",
      "description": "100% cotton tee with bold Gujarati typography print.",
      "availableSizes": ["M", "L", "XL"]
    },
    {
      "id": 6,
      "name": "Six-Pocket Cargo Pants",
      "category": "man-tshirt",
      "price": 999,
      "image": "https://images.unsplash.com/photo-1602810316139-42f74b5a1a10?auto=format&fit=crop&w=600&q=60",
      "description": "Utility cargos in olive green with adjustable hems.",
      "availableSizes": ["M", "L", "XL"]
    },
	{
      "id": 7,
      "name": "Linen Co-Ord Set",
      "category": "man-jeans",
      "price": 700,
      "image": "https://images.unsplash.com/photo-1602810314743-cd4d049da4e6?auto=format&fit=crop&w=600&q=60",
      "description": "Breathable lilac linen set perfect for summer outings.",
      "availableSizes": ["28", "30", "32", "34"]
    },
    {
      "id": 8,
      "name": "Graphic Oversized Tee",
      "category": "man-shirt",
      "price": 699,
      "image": "https://images.unsplash.com/photo-1520975931733-6c96c1d0b7c6?auto=format&fit=crop&w=600&q=60",
      "description": "100% cotton tee with bold Gujarati typography print.",
      "availableSizes": ["M", "L", "XL"]
    },
    {
      "id": 9,
      "name": "Six-Pocket Cargo Pants",
      "category": "man-tshirt",
      "price": 999,
      "image": "https://images.unsplash.com/photo-1602810316139-42f74b5a1a10?auto=format&fit=crop&w=600&q=60",
      "description": "Utility cargos in olive green with adjustable hems.",
      "availableSizes": ["M", "L", "XL"]
    },
	{
      "id": 10,
      "name": "Linen Co-Ord Set",
      "category": "man-jeans",
      "price": 700,
      "image": "https://images.unsplash.com/photo-1602810314743-cd4d049da4e6?auto=format&fit=crop&w=600&q=60",
      "description": "Breathable lilac linen set perfect for summer outings.",
      "availableSizes": ["28", "30", "32", "34"]
    },
    {
      "id": 11,
      "name": "Graphic Oversized Tee",
      "category": "man-shirt",
      "price": 699,
      "image": "https://images.unsplash.com/photo-1520975931733-6c96c1d0b7c6?auto=format&fit=crop&w=600&q=60",
      "description": "100% cotton tee with bold Gujarati typography print.",
      "availableSizes": ["M", "L", "XL"]
    },
    {
      "id": 12,
      "name": "Six-Pocket Cargo Pants",
      "category": "man-tshirt",
      "price": 999,
      "image": "https://images.unsplash.com/photo-1602810316139-42f74b5a1a10?auto=format&fit=crop&w=600&q=60",
      "description": "Utility cargos in olive green with adjustable hems.",
      "availableSizes": ["M", "L", "XL"]
    },
	{
      "id": 13,
      "name": "Linen Co-Ord Set",
      "category": "man-jeans",
      "price": 700,
      "image": "https://images.unsplash.com/photo-1602810314743-cd4d049da4e6?auto=format&fit=crop&w=600&q=60",
      "description": "Breathable lilac linen set perfect for summer outings.",
      "availableSizes": ["28", "30", "32", "34"]
    },
    {
      "id": 14,
      "name": "Graphic Oversized Tee",
      "category": "man-shirt",
      "price": 699,
      "image": "https://images.unsplash.com/photo-1520975931733-6c96c1d0b7c6?auto=format&fit=crop&w=600&q=60",
      "description": "100% cotton tee with bold Gujarati typography print.",
      "availableSizes": ["M", "L", "XL"]
    },
    {
      "id": 15,
      "name": "Six-Pocket Cargo Pants",
      "category": "man-tshirt",
      "price": 999,
      "image": "https://images.unsplash.com/photo-1602810316139-42f74b5a1a10?auto=format&fit=crop&w=600&q=60",
      "description": "Utility cargos in olive green with adjustable hems.",
      "availableSizes": ["M", "L", "XL"]
    },
  ]
};

// Global variables
let currentProducts = productsData.products;
let selectedProduct = null;
let activeCategory = 'All';
let currentSearch = '';

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('productModal');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderProducts(productsData.products);
    setupEventListeners();
});

// Render products to the grid
function renderProducts(products) {
    if (!productsGrid) return;
    
    if (products.length === 0) {
        productsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--color-text-secondary);">No products found matching your criteria.</div>';
        return;
    }
    
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card" onclick="openModal(${product.id})">
            <div class="product-image" style="position: relative;">
                <img src="${product.image}" alt="${product.name}" />
                <div class="product-overlay">View Details</div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <span class="product-category">${product.category}</span>
                <p class="product-price">₹${product.price}</p>
            </div>
        </div>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    // Category filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.dataset.category;
            setActiveFilter(this);
            filterByCategory(category);
        });
    });

    // Search input
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            currentSearch = searchTerm;
            applyFilters();
        });
    }

    // Modal close events
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Prevent modal from closing when clicking inside modal content
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Set active filter button
function setActiveFilter(activeButton) {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    activeButton.classList.add('active');
}

// Filter products by category
function filterByCategory(category) {
    activeCategory = category;
    applyFilters();
}

// Apply both category and search filters
function applyFilters() {
    let filteredProducts = [...productsData.products];

    // Apply category filter
    if (activeCategory !== 'All') {
        filteredProducts = filteredProducts.filter(product => 
            product.category === activeCategory
        );
    }

    // Apply search filter
    if (currentSearch) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(currentSearch)
        );
    }

    currentProducts = filteredProducts;
    renderProducts(filteredProducts);
}

// Open product modal
function openModal(productId) {
    selectedProduct = productsData.products.find(product => product.id === productId);
    if (!selectedProduct) return;

    // Populate modal content
    document.getElementById('modalImage').src = selectedProduct.image;
    document.getElementById('modalImage').alt = selectedProduct.name;
    document.getElementById('modalName').textContent = selectedProduct.name;
    document.getElementById('modalCategory').textContent = selectedProduct.category;
    document.getElementById('modalDescription').textContent = selectedProduct.description;
    document.getElementById('modalPrice').textContent = `₹${selectedProduct.price}`;

    // Populate size selector
    const sizeSelect = document.getElementById('sizeSelect');
    sizeSelect.innerHTML = selectedProduct.availableSizes.map(size => 
        `<option value="${size}">${size}</option>`
    ).join('');

    // Setup order button
    const orderButton = document.getElementById('orderButton');
    orderButton.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        orderOnWhatsApp();
    };

    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    selectedProduct = null;
}

// Order on WhatsApp
function orderOnWhatsApp() {
    if (!selectedProduct) return;

    const sizeSelect = document.getElementById('sizeSelect');
    const selectedSize = sizeSelect.value;
    
    const message = `I want to order ${selectedProduct.name} size ${selectedSize}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917878887678?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// Scroll to products section
function scrollToProducts() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        const navbarHeight = 80;
        const elementPosition = productsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Handle modal overlay clicks (only close when clicking overlay, not content)
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        closeModal();
    }
});

// Handle dropdown clicks to prevent modal closing
document.addEventListener('click', function(e) {
    if (e.target.id === 'sizeSelect' || e.target.closest('.size-selector')) {
        e.stopPropagation();
    }
});

// Error handling for images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=60';
        e.target.alt = 'Product image not available';
    }
}, true);

// Handle responsive menu toggle (if needed for mobile)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Initialize smooth scrolling for any hash links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    if (currentProducts && currentProducts.length > 0) {
        renderProducts(currentProducts);
    }
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Enhanced product card animations
function observeProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// Override renderProducts to include animations
const originalRenderProducts = renderProducts;
renderProducts = function(products) {
    originalRenderProducts(products);
    setTimeout(observeProductCards, 100);
};