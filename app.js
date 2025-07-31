// Initial product data from the provided JSON
const initialProductsData = [
  {
    "id": 1,
    "name": "Premium Cotton T-Shirt",
    "price": 599,
    "category": "Tops",
    "sizes": ["S", "M", "L", "XL"],
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    "description": "Comfortable cotton t-shirt perfect for daily wear",
    "dateAdded": "2025-01-15"
  },
  {
    "id": 2,
    "name": "Denim Cargo Pants",
    "price": 1299,
    "category": "Bottoms",
    "sizes": ["28", "30", "32", "34", "36"],
    "image": "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
    "description": "Stylish cargo pants with multiple pockets",
    "dateAdded": "2025-01-16"
  },
  {
    "id": 3,
    "name": "Casual Hoodie",
    "price": 899,
    "category": "Outerwear",
    "sizes": ["S", "M", "L", "XL"],
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    "description": "Warm and comfortable hoodie for cool weather",
    "dateAdded": "2025-01-17"
  },
  {
    "id": 4,
    "name": "Floral Summer Dress",
    "price": 799,
    "category": "Dresses",
    "sizes": ["XS", "S", "M", "L"],
    "image": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
    "description": "Beautiful floral dress perfect for summer",
    "dateAdded": "2025-01-18"
  },
  {
    "id": 5,
    "name": "Linen Co-ord Set",
    "price": 1199,
    "category": "Sets",
    "sizes": ["S", "M", "L", "XL"],
    "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
    "description": "Trendy linen co-ordinate set for casual wear",
    "dateAdded": "2025-01-19"
  },
  {
    "id": 6,
    "name": "Traditional Kurta",
    "price": 649,
    "category": "Ethnic",
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "image": "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=400&fit=crop",
    "description": "Classic kurta for traditional occasions",
    "dateAdded": "2025-01-20"
  },
  {
    "id": 7,
    "name": "Designer Handbag",
    "price": 899,
    "category": "Accessories",
    "sizes": ["One Size"],
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "description": "Stylish handbag to complete your look",
    "dateAdded": "2025-01-21"
  },
  {
    "id": 8,
    "name": "Sports Track Suit",
    "price": 1499,
    "category": "Sets",
    "sizes": ["S", "M", "L", "XL"],
    "image": "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=400&h=400&fit=crop",
    "description": "Comfortable track suit for sports and fitness",
    "dateAdded": "2025-01-22"
  },
  {
    "id": 9,
    "name": "Formal Blazer",
    "price": 1799,
    "category": "Outerwear",
    "sizes": ["S", "M", "L", "XL"],
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "description": "Professional blazer for formal occasions",
    "dateAdded": "2025-01-23"
  },
  {
    "id": 10,
    "name": "Casual Jeans",
    "price": 999,
    "category": "Bottoms",
    "sizes": ["28", "30", "32", "34", "36"],
    "image": "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
    "description": "Classic blue jeans for everyday wear",
    "dateAdded": "2025-01-24"
  },
  {
    "id": 11,
    "name": "Printed Scarf",
    "price": 299,
    "category": "Accessories",
    "sizes": ["One Size"],
    "image": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop",
    "description": "Elegant printed scarf for all seasons",
    "dateAdded": "2025-01-25"
  },
  {
    "id": 12,
    "name": "Cotton Polo Shirt",
    "price": 699,
    "category": "Tops",
    "sizes": ["S", "M", "L", "XL"],
    "image": "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=400&h=400&fit=crop",
    "description": "Classic polo shirt for casual and semi-formal wear",
    "dateAdded": "2025-01-26"
  },
  {
    "id": 13,
    "name": "Maxi Dress",
    "price": 1099,
    "category": "Dresses",
    "sizes": ["XS", "S", "M", "L"],
    "image": "https://images.unsplash.com/photo-1566479179817-c0ae29dfa3d7?w=400&h=400&fit=crop",
    "description": "Elegant maxi dress for special occasions",
    "dateAdded": "2025-01-27"
  },
  {
    "id": 14,
    "name": "Leather Jacket",
    "price": 2499,
    "category": "Outerwear",
    "sizes": ["S", "M", "L", "XL"],
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    "description": "Premium leather jacket for style and warmth",
    "dateAdded": "2025-01-28"
  },
  {
    "id": 15,
    "name": "Ethnic Palazzo Set",
    "price": 849,
    "category": "Ethnic",
    "sizes": ["S", "M", "L", "XL"],
    "image": "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=400&fit=crop",
    "description": "Comfortable palazzo set for traditional wear",
    "dateAdded": "2025-01-29"
  },
  {
    "id": 16,
    "name": "Denim Shorts",
    "price": 549,
    "category": "Bottoms",
    "sizes": ["28", "30", "32", "34"],
    "image": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop",
    "description": "Trendy denim shorts for summer",
    "dateAdded": "2025-01-30"
  },
  {
    "id": 17,
    "name": "Casual Sneakers",
    "price": 1299,
    "category": "Accessories",
    "sizes": ["6", "7", "8", "9", "10"],
    "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    "description": "Comfortable sneakers for everyday wear",
    "dateAdded": "2025-01-31"
  },
  {
    "id": 18,
    "name": "Tank Top",
    "price": 399,
    "category": "Tops",
    "sizes": ["S", "M", "L", "XL"],
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop",
    "description": "Light and comfortable tank top",
    "dateAdded": "2025-02-01"
  },
  {
    "id": 19,
    "name": "Party Dress",
    "price": 1599,
    "category": "Dresses",
    "sizes": ["XS", "S", "M", "L"],
    "image": "https://images.unsplash.com/photo-1566479179817-c0ae29dfa3d7?w=400&h=400&fit=crop",
    "description": "Stunning party dress for special events",
    "dateAdded": "2025-02-02"
  },
  {
    "id": 20,
    "name": "Traditional Dupatta",
    "price": 449,
    "category": "Ethnic",
    "sizes": ["One Size"],
    "image": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop",
    "description": "Beautiful dupatta to complement ethnic wear",
    "dateAdded": "2025-02-03"
  }
];

// Global variables
let products = [...initialProductsData];
let nextProductId = 21;
let filteredProducts = [...products];
let selectedProduct = null;
let activeCategory = 'All';
let currentSearch = '';
let isAdminMode = false;
const MAX_PRODUCTS = 20;
const ADMIN_SECRET = 'neelfashion2025';

// Store info
const storeInfo = {
    name: "Neel Fashion Store",
    location: "Soniwad, Parabazar, Lunawada, Gujarat",
    phone: "+917878887678",
    instagram: "https://www.instagram.com/neel.fashion.store/"
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing mobile app...');
    
    // Initialize all functionality
    setupMobileMenu();
    setupAdminAccess();
    setupEventListeners();
    setupNavigation();
    setupImagePreview();
    setupModalHandlers();
    renderProducts();
    updateProductCounter();
    
    console.log('Mobile app initialized successfully');
});

// Setup mobile hamburger menu
function setupMobileMenu() {
    console.log('Setting up mobile menu...');
    
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuCloseBtn = document.getElementById('menuCloseBtn');
    
    if (!hamburgerBtn || !mobileMenu) {
        console.error('Mobile menu elements not found');
        return;
    }
    
    // Open menu
    hamburgerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        openMobileMenu();
    });
    
    // Close menu via close button
    if (menuCloseBtn) {
        menuCloseBtn.addEventListener('click', function(e) {
            e.preventDefault();
            closeMobileMenu();
        });
    }
    
    // Close menu via overlay
    if (menuOverlay) {
        menuOverlay.addEventListener('click', function(e) {
            e.preventDefault();
            closeMobileMenu();
        });
    }
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    console.log('Mobile menu setup complete');
}

// Open mobile menu
function openMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.classList.add('active');
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
        console.log('Mobile menu opened');
    }
}

// Close mobile menu
function closeMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
        console.log('Mobile menu closed');
    }
}

// Setup compact footer admin access
function setupAdminAccess() {
    console.log('Setting up compact admin access...');
    
    const adminSecretInput = document.getElementById('adminSecretInput');
    const adminAccessBtn = document.getElementById('adminAccessBtn');
    const addProductBtn = document.getElementById('addProductBtn');
    const adminError = document.getElementById('adminError');
    
    if (!adminSecretInput || !adminAccessBtn) {
        console.error('Admin elements not found');
        return;
    }
    
    // Admin login
    adminAccessBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Admin login clicked');
        const enteredSecret = adminSecretInput.value.trim();
        
        if (enteredSecret === ADMIN_SECRET) {
            console.log('Correct admin password');
            enableAdminMode();
            adminSecretInput.value = '';
            hideAdminError();
        } else {
            console.log('Incorrect admin password');
            showAdminError();
            adminSecretInput.value = '';
        }
    });
    
    // Add product button
    if (addProductBtn) {
        addProductBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Add product button clicked');
            openAddProductForm();
        });
    }
    
    // Enter key support
    adminSecretInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            adminAccessBtn.click();
        }
    });
    
    // Hide error on input
    adminSecretInput.addEventListener('input', function() {
        hideAdminError();
    });
    
    console.log('Admin access setup complete');
}

// Enable admin mode
function enableAdminMode() {
    console.log('Enabling admin mode...');
    isAdminMode = true;
    document.body.classList.add('admin-mode');
    
    const adminAccessBtn = document.getElementById('adminAccessBtn');
    const addProductBtn = document.getElementById('addProductBtn');
    
    if (adminAccessBtn) {
        adminAccessBtn.classList.add('hidden');
        console.log('Login button hidden');
    }
    if (addProductBtn) {
        addProductBtn.classList.remove('hidden');
        console.log('Add Product button shown');
    }
    
    showToast('Admin access granted!', 'success');
    renderProducts();
    console.log('Admin mode enabled successfully');
}

// Show/hide admin error
function showAdminError() {
    const adminError = document.getElementById('adminError');
    if (adminError) {
        adminError.classList.remove('hidden');
        setTimeout(() => hideAdminError(), 3000);
    }
}

function hideAdminError() {
    const adminError = document.getElementById('adminError');
    if (adminError) adminError.classList.add('hidden');
}

// Open add product form
function openAddProductForm() {
    const addProductSection = document.getElementById('add-product');
    if (addProductSection) {
        addProductSection.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        console.log('Add product form opened');
    }
}

// Close add product form
function closeAddProductForm() {
    const addProductSection = document.getElementById('add-product');
    if (addProductSection) {
        addProductSection.classList.add('hidden');
        document.body.style.overflow = 'auto';
        
        // Reset form
        const productForm = document.getElementById('productForm');
        const imagePreview = document.getElementById('imagePreview');
        if (productForm) productForm.reset();
        if (imagePreview) imagePreview.classList.add('hidden');
        
        console.log('Add product form closed');
    }
}

// Setup modal event handlers
function setupModalHandlers() {
    console.log('Setting up modal handlers...');
    
    // Product modal close button
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal();
        });
    }
    
    // Delete modal buttons
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
    const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
    
    if (confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            deleteProduct();
        });
    }
    
    if (cancelDeleteBtn) {
        cancelDeleteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            closeDeleteModal();
        });
    }
    
    // Delete button in product modal
    const deleteButton = document.getElementById('deleteButton');
    if (deleteButton) {
        deleteButton.addEventListener('click', function(e) {
            e.preventDefault();
            confirmDelete();
        });
    }
    
    console.log('Modal handlers setup complete');
}

// Setup event listeners
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Category filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.dataset.category;
            setActiveFilter(this);
            filterByCategory(category);
        });
    });

    // Search input with debounce
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', function(e) {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const searchTerm = e.target.value.toLowerCase().trim();
                currentSearch = searchTerm;
                applyFilters();
            }, 300);
        });
    }

    // Product form submission
    const productForm = document.getElementById('productForm');
    if (productForm) {
        productForm.addEventListener('submit', function(e) {
            e.preventDefault();
            addNewProduct();
        });
    }
    
    // Close add product form
    const closeAddProduct = document.getElementById('closeAddProduct');
    if (closeAddProduct) {
        closeAddProduct.addEventListener('click', function(e) {
            e.preventDefault();
            closeAddProductForm();
        });
    }

    // Global escape key handler
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
            closeDeleteModal();
            closeAddProductForm();
            closeMobileMenu();
        }
    });
    
    console.log('Event listeners setup complete');
}

// Setup navigation with mobile menu integration
function setupNavigation() {
    console.log('Setting up navigation...');
    
    const navLinks = document.querySelectorAll('.mobile-nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't prevent default for external links
            if (this.getAttribute('target') === '_blank') return;
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Close mobile menu first
            closeMobileMenu();
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Scroll to section
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const navbarHeight = 60;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                    window.scrollTo({
                        top: Math.max(0, offsetPosition),
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    console.log('Navigation setup complete');
}

// Setup image preview
function setupImagePreview() {
    const productImageInput = document.getElementById('productImage');
    const imagePreview = document.getElementById('imagePreview');
    
    if (!productImageInput || !imagePreview) return;
    
    productImageInput.addEventListener('input', function() {
        const imageUrl = this.value.trim();
        
        if (imageUrl) {
            imagePreview.src = imageUrl;
            imagePreview.classList.remove('hidden');
            
            imagePreview.onerror = function() {
                this.classList.add('hidden');
            };
        } else {
            imagePreview.classList.add('hidden');
        }
    });
}

// Render products
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--color-text-secondary);">No products found matching your criteria.</div>';
        return;
    }
    
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card slide-in-up" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400'" loading="lazy" />
                <div class="product-overlay">View Details</div>
                ${isAdminMode ? `<button class="product-delete-btn" data-product-id="${product.id}" title="Delete Product">×</button>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <span class="product-category">${product.category}</span>
                <p class="product-price">₹${product.price.toLocaleString()}</p>
                <div class="product-sizes">Sizes: ${product.sizes.join(', ')}</div>
            </div>
        </div>
    `).join('');

    // Add click event listeners to product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Check if click is on delete button
            if (e.target.classList.contains('product-delete-btn')) {
                e.stopPropagation();
                const productId = parseInt(e.target.dataset.productId);
                quickDeleteProduct(productId);
                return;
            }
            
            // Open modal for product
            const productId = parseInt(this.dataset.productId);
            console.log('Product card clicked, opening modal for product:', productId);
            openModal(productId);
        });
    });
    
    console.log('Products rendered:', filteredProducts.length);
}

// Quick delete product
function quickDeleteProduct(productId) {
    console.log('Quick delete product:', productId);
    selectedProduct = products.find(p => p.id === productId);
    if (selectedProduct) {
        confirmDelete();
    }
}

// Update product counter
function updateProductCounter() {
    const productCountElement = document.getElementById('productCount');
    if (productCountElement) {
        productCountElement.textContent = products.length;
    }
}

// Filter functions
function setActiveFilter(activeButton) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    activeButton.classList.add('active');
}

function filterByCategory(category) {
    activeCategory = category;
    applyFilters();
}

function applyFilters() {
    filteredProducts = [...products];

    if (activeCategory !== 'All') {
        filteredProducts = filteredProducts.filter(product => 
            product.category === activeCategory
        );
    }

    if (currentSearch) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(currentSearch) ||
            product.description.toLowerCase().includes(currentSearch)
        );
    }

    renderProducts();
}

// Get selected sizes
function getSelectedSizes() {
    const sizeCheckboxes = document.querySelectorAll('.size-checkboxes input[type="checkbox"]:checked');
    return Array.from(sizeCheckboxes).map(checkbox => checkbox.value);
}

// Add new product with FIFO
function addNewProduct() {
    console.log('Adding new product...');
    
    const name = document.getElementById('productName').value.trim();
    const price = parseInt(document.getElementById('productPrice').value);
    const category = document.getElementById('productCategory').value;
    const sizes = getSelectedSizes();
    const imageUrl = document.getElementById('productImage').value.trim();
    const description = document.getElementById('productDescription').value.trim();

    // Validation
    const errors = validateProductForm();
    if (errors.length > 0) {
        showToast(errors[0], 'error');
        return;
    }

    // Create new product
    const newProduct = {
        id: nextProductId++,
        name: name,
        price: price,
        category: category,
        sizes: sizes,
        image: imageUrl,
        description: description,
        dateAdded: new Date().toISOString().split('T')[0]
    };

    // FIFO: Remove oldest if at capacity
    let removedProduct = null;
    if (products.length >= MAX_PRODUCTS) {
        const oldestProduct = products.reduce((oldest, product) => {
            return new Date(product.dateAdded) < new Date(oldest.dateAdded) ? product : oldest;
        });
        
        products = products.filter(p => p.id !== oldestProduct.id);
        removedProduct = oldestProduct;
    }

    // Add new product
    products.unshift(newProduct);
    
    // Close form and update display
    closeAddProductForm();
    applyFilters();
    updateProductCounter();
    
    // Show notification
    if (removedProduct) {
        showToast(`Product added! Removed oldest: ${removedProduct.name}`, 'warning');
    } else {
        showToast('Product added successfully!', 'success');
    }
    
    // Scroll to products
    setTimeout(() => scrollToProducts(), 500);
}

// Validate product form
function validateProductForm() {
    const name = document.getElementById('productName').value.trim();
    const price = document.getElementById('productPrice').value;
    const category = document.getElementById('productCategory').value;
    const sizes = getSelectedSizes();
    const imageUrl = document.getElementById('productImage').value.trim();
    const description = document.getElementById('productDescription').value.trim();

    const errors = [];

    if (!name) errors.push('Product name is required');
    if (!price || price <= 0) errors.push('Valid price is required');
    if (!category) errors.push('Category is required');
    if (sizes.length === 0) errors.push('At least one size must be selected');
    if (!imageUrl) errors.push('Image URL is required');
    if (!description) errors.push('Description is required');

    if (imageUrl) {
        try {
            new URL(imageUrl);
        } catch {
            errors.push('Valid image URL is required');
        }
    }

    return errors;
}

// Modal functions
function openModal(productId) {
    console.log('Opening modal for product:', productId);
    selectedProduct = products.find(product => product.id === productId);
    if (!selectedProduct) {
        console.error('Product not found:', productId);
        return;
    }

    // Populate modal
    document.getElementById('modalImage').src = selectedProduct.image;
    document.getElementById('modalImage').alt = selectedProduct.name;
    document.getElementById('modalName').textContent = selectedProduct.name;
    document.getElementById('modalCategory').textContent = selectedProduct.category;
    document.getElementById('modalDescription').textContent = selectedProduct.description;
    document.getElementById('modalPrice').textContent = `₹${selectedProduct.price.toLocaleString()}`;

    // Populate sizes
    const sizeSelect = document.getElementById('sizeSelect');
    sizeSelect.innerHTML = selectedProduct.sizes.map(size => 
        `<option value="${size}">${size}</option>`
    ).join('');

    // Setup order button
    const orderButton = document.getElementById('orderButton');
    if (orderButton) {
        orderButton.onclick = function(e) {
            e.preventDefault();
            orderOnWhatsApp();
        };
    }

    // Show/hide delete button
    const deleteButton = document.getElementById('deleteButton');
    if (deleteButton) {
        if (isAdminMode) {
            deleteButton.classList.remove('hidden');
        } else {
            deleteButton.classList.add('hidden');
        }
    }

    // Show modal
    const productModal = document.getElementById('productModal');
    if (productModal) {
        productModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        console.log('Modal opened for:', selectedProduct.name);
    }
}

function closeModal() {
    console.log('Closing modal');
    const productModal = document.getElementById('productModal');
    if (productModal) {
        productModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        selectedProduct = null;
    }
}

function confirmDelete() {
    if (!selectedProduct) return;
    console.log('Confirming delete for:', selectedProduct.name);
    const deleteModal = document.getElementById('deleteModal');
    if (deleteModal) {
        deleteModal.classList.remove('hidden');
    }
}

function closeDeleteModal() {
    console.log('Closing delete modal');
    const deleteModal = document.getElementById('deleteModal');
    if (deleteModal) {
        deleteModal.classList.add('hidden');
    }
}

function deleteProduct() {
    if (!selectedProduct) return;
    
    console.log('Deleting product:', selectedProduct.name);
    const productName = selectedProduct.name;
    products = products.filter(p => p.id !== selectedProduct.id);
    
    applyFilters();
    updateProductCounter();
    closeModal();
    closeDeleteModal();
    
    showToast(`Deleted: ${productName}`, 'success');
}

// WhatsApp ordering
function orderOnWhatsApp() {
    if (!selectedProduct) return;

    const sizeSelect = document.getElementById('sizeSelect');
    const selectedSize = sizeSelect.value;
    
    const message = `Hi! I want to order:\n\nProduct: ${selectedProduct.name}\nSize: ${selectedSize}\nPrice: ₹${selectedProduct.price}\n\nPlease confirm availability.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${storeInfo.phone.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// Toast notifications
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    if (toast && toastMessage) {
        toastMessage.textContent = message;
        toast.className = `toast ${type}`;
        toast.classList.remove('hidden');
        
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3000);
    }
}

// Scroll to products
function scrollToProducts() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        const navbarHeight = 60;
        const elementPosition = productsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
        });
    }
}

// Handle modal overlay clicks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        if (e.target.closest('#productModal')) {
            closeModal();
        } else if (e.target.closest('#deleteModal')) {
            closeDeleteModal();
        }
    }
    
    // Close add product form on overlay click
    if (e.target.closest('.add-product-section') && e.target === document.querySelector('.add-product-section')) {
        closeAddProductForm();
    }
});

// Handle image loading errors
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400';
        e.target.alt = 'Product image not available';
    }
}, true);

// Export functions for global access
window.openModal = openModal;
window.closeModal = closeModal;
window.confirmDelete = confirmDelete;
window.closeDeleteModal = closeDeleteModal;
window.deleteProduct = deleteProduct;
window.scrollToProducts = scrollToProducts;
window.quickDeleteProduct = quickDeleteProduct;