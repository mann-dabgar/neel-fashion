// Performance optimized Neel Fashion Store app
// Updated with robust image handling and fallback system

// ========================================================================================
// PERFORMANCE CONSTANTS & CONFIGURATION
// ========================================================================================
const PERFORMANCE_CONFIG = {
    DEBOUNCE_DELAY: 300,
    PRODUCTS_PER_LOAD: 20,
    MAX_PRODUCTS: 20,
    ADMIN_SECRET: 'neelfashion2025'
};

// Global placeholder image constant
const PLACEHOLDER_IMG = 'https://via.placeholder.com/300x400?text=No+Image';

// ========================================================================================
// INITIAL DATA (First product with bad URL for testing)
// ========================================================================================
const initialProducts = [
    {
        "id": 1, "name": "Stylish Men's Kurta", "price": 899, "category": "Men",
        "sizes": ["S", "M", "L", "XL"], "image": "https://invalid-url-for-testing.jpg",
        "description": "Traditional kurta with modern fit", "dateAdded": "2025-01-01"
    },
    {
        "id": 2, "name": "Women's Embroidered Kurti", "price": 1299, "category": "Women",
        "sizes": ["XS", "S", "M", "L"], "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
        "description": "Beautiful embroidered kurti for all occasions", "dateAdded": "2025-01-02"
    },
    {
        "id": 3, "name": "Kids Cotton T-Shirt", "price": 449, "category": "Kids",
        "sizes": ["2-3Y", "4-5Y", "6-7Y", "8-9Y"], "image": "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=600&fit=crop",
        "description": "Soft cotton t-shirt for kids", "dateAdded": "2025-01-03"
    },
    {
        "id": 4, "name": "Designer Handbag", "price": 1599, "category": "Accessories",
        "sizes": ["One Size"], "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=600&fit=crop",
        "description": "Stylish handbag for daily use", "dateAdded": "2025-01-04"
    },
    {
        "id": 5, "name": "Men's Casual Shirt", "price": 799, "category": "Men",
        "sizes": ["S", "M", "L", "XL", "XXL"], "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=600&fit=crop",
        "description": "Comfortable casual shirt", "dateAdded": "2025-01-05"
    },
    {
        "id": 6, "name": "Women's Salwar Suit", "price": 1899, "category": "Women",  
        "sizes": ["S", "M", "L", "XL"], "image": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=600&fit=crop",
        "description": "Elegant salwar suit set", "dateAdded": "2025-01-06"
    },
    {
        "id": 7, "name": "Kids Ethnic Wear", "price": 649, "category": "Kids",
        "sizes": ["2-3Y", "4-5Y", "6-7Y"], "image": "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=400&h=600&fit=crop",
        "description": "Traditional ethnic wear for kids", "dateAdded": "2025-01-07"
    },
    {
        "id": 8, "name": "Fashion Sunglasses", "price": 599, "category": "Accessories",
        "sizes": ["One Size"], "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=600&fit=crop",
        "description": "Trendy sunglasses", "dateAdded": "2025-01-08"
    },
    {
        "id": 9, "name": "Men's Formal Pants", "price": 1199, "category": "Men",
        "sizes": ["30", "32", "34", "36", "38"], "image": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=600&fit=crop",
        "description": "Premium formal pants", "dateAdded": "2025-01-09"
    },
    {
        "id": 10, "name": "Women's Lehenga", "price": 2999, "category": "Women",
        "sizes": ["S", "M", "L"], "image": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=600&fit=crop",
        "description": "Beautiful designer lehenga", "dateAdded": "2025-01-10"
    },
    {
        "id": 11, "name": "Kids Denim Jacket", "price": 849, "category": "Kids",
        "sizes": ["4-5Y", "6-7Y", "8-9Y", "10-11Y"], "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop",
        "description": "Stylish denim jacket for kids", "dateAdded": "2025-01-11"
    },
    {
        "id": 12, "name": "Leather Wallet", "price": 699, "category": "Accessories",
        "sizes": ["One Size"], "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=600&fit=crop",
        "description": "Premium leather wallet", "dateAdded": "2025-01-12"
    },
    {
        "id": 13, "name": "Men's Blazer", "price": 2499, "category": "Men",
        "sizes": ["S", "M", "L", "XL"], "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
        "description": "Formal blazer for special occasions", "dateAdded": "2025-01-13"
    },
    {
        "id": 14, "name": "Women's Saree", "price": 1799, "category": "Women",
        "sizes": ["One Size"], "image": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=600&fit=crop",
        "description": "Elegant traditional saree", "dateAdded": "2025-01-14"
    },
    {
        "id": 15, "name": "Kids School Uniform", "price": 549, "category": "Kids",
        "sizes": ["6-7Y", "8-9Y", "10-11Y", "12-13Y"], "image": "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=600&fit=crop",
        "description": "Quality school uniform set", "dateAdded": "2025-01-15"
    },
    {
        "id": 16, "name": "Designer Watch", "price": 2199, "category": "Accessories",
        "sizes": ["One Size"], "image": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=600&fit=crop",
        "description": "Stylish designer watch", "dateAdded": "2025-01-16"
    },
    {
        "id": 17, "name": "Men's Track Suit", "price": 1399, "category": "Men",
        "sizes": ["M", "L", "XL", "XXL"], "image": "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=600&fit=crop",
        "description": "Comfortable track suit", "dateAdded": "2025-01-17"
    },
    {
        "id": 18, "name": "Women's Western Dress", "price": 1099, "category": "Women",
        "sizes": ["XS", "S", "M", "L", "XL"], "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
        "description": "Trendy western dress", "dateAdded": "2025-01-18"
    },
    {
        "id": 19, "name": "Kids Party Wear", "price": 999, "category": "Kids",
        "sizes": ["2-3Y", "4-5Y", "6-7Y", "8-9Y"], "image": "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=400&h=600&fit=crop",
        "description": "Beautiful party wear for kids", "dateAdded": "2025-01-19"
    },
    {
        "id": 20, "name": "Fashion Belt", "price": 399, "category": "Accessories",
        "sizes": ["S", "M", "L"], "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=600&fit=crop",
        "description": "Stylish fashion belt", "dateAdded": "2025-01-20"
    }
];

// ========================================================================================
// GLOBAL STATE
// ========================================================================================
let products = [...initialProducts];
let filteredProducts = [...initialProducts];
let selectedProduct = null;
let activeCategory = 'All';
let currentSearch = '';
let isAdminMode = false;
let nextProductId = 21;

// Performance optimization: Debounced functions
let searchTimeout;
let filterTimeout;

// ========================================================================================
// DEBOUNCE UTILITY
// ========================================================================================
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// ========================================================================================
// IMAGE HANDLING FUNCTIONS
// ========================================================================================
function createImageElement(product) {
    const img = document.createElement('img');
    img.className = 'product-img';
    img.alt = product.name;
    img.loading = 'lazy';
    img.style.opacity = '0';
    
    // Create loading spinner
    const loadingSpinner = document.createElement('div');
    loadingSpinner.className = 'img-loading';
    
    // Set up event handlers
    img.onload = function() {
        // Remove loading spinner
        const spinner = this.parentElement.querySelector('.img-loading');
        if (spinner) {
            spinner.remove();
        }
        this.style.opacity = '1';
    };
    
    img.onerror = function() {
        // Remove loading spinner
        const spinner = this.parentElement.querySelector('.img-loading');
        if (spinner) {
            spinner.remove();
        }
        // Set placeholder and apply fallback styling
        this.src = PLACEHOLDER_IMG;
        this.classList.add('img-fallback');
        this.style.opacity = '1';
    };
    
    // Set initial src
    img.src = product.image || PLACEHOLDER_IMG;
    
    return { img, loadingSpinner };
}

function validateImageUrl(url) {
    if (!url || !url.trim()) {
        return false;
    }
    
    // Simple regex to check if URL starts with http/https
    const urlRegex = /^https?:\/\/.+/i;
    return urlRegex.test(url.trim());
}

// ========================================================================================
// CORE RENDERING FUNCTIONS
// ========================================================================================
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) {
        console.error('Products grid not found');
        return;
    }

    console.log('Rendering products:', filteredProducts.length);

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--color-text-secondary);">
                No products found matching your criteria.
            </div>
        `;
        return;
    }

    // Clear the grid
    productsGrid.innerHTML = '';

    // Create product cards
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card slide-in-up';
        productCard.setAttribute('data-product-id', product.id);
        productCard.onclick = () => openModal(product.id);

        // Create image container
        const imageContainer = document.createElement('div');
        imageContainer.className = 'product-image';

        // Create image with proper error handling
        const { img, loadingSpinner } = createImageElement(product);
        imageContainer.appendChild(img);
        imageContainer.appendChild(loadingSpinner);

        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'product-overlay';
        overlay.textContent = 'View Details';
        imageContainer.appendChild(overlay);

        // Create delete button if admin mode
        if (isAdminMode) {
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'product-delete-btn';
            deleteBtn.innerHTML = '×';
            deleteBtn.title = 'Delete Product';
            deleteBtn.onclick = (e) => {
                e.stopPropagation();
                quickDeleteProduct(product.id);
            };
            imageContainer.appendChild(deleteBtn);
        }

        // Create product info
        const productInfo = document.createElement('div');
        productInfo.className = 'product-info';
        productInfo.innerHTML = `
            <h3 class="product-name">${product.name}</h3>
            <span class="product-category">${product.category}</span>
            <p class="product-price">₹${product.price.toLocaleString('en-IN')}</p>
            <div class="product-sizes">Sizes: ${product.sizes.join(', ')}</div>
        `;

        // Assemble card
        productCard.appendChild(imageContainer);
        productCard.appendChild(productInfo);
        productsGrid.appendChild(productCard);
    });

    console.log('Products rendered successfully');
}

function updateProductCounter() {
    const productCountElement = document.getElementById('productCount');
    if (productCountElement) {
        productCountElement.textContent = products.length;
    }
}

// ========================================================================================
// SEARCH & FILTERING WITH DEBOUNCING
// ========================================================================================
const debouncedSearch = debounce(function(query) {
    console.log('Performing search:', query);
    currentSearch = query;
    applyFilters();
    
    // Hide search loading
    const searchLoading = document.querySelector('.search-loading');
    if (searchLoading) {
        searchLoading.classList.add('hidden');
    }
}, PERFORMANCE_CONFIG.DEBOUNCE_DELAY);

const debouncedFilter = debounce(function(category) {
    console.log('Performing filter:', category);
    activeCategory = category;
    applyFilters();
}, PERFORMANCE_CONFIG.DEBOUNCE_DELAY);

function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    
    // Show search loading
    const searchLoading = document.querySelector('.search-loading');
    if (searchLoading) {
        searchLoading.classList.remove('hidden');
    }
    
    debouncedSearch(query);
}

function handleCategoryFilter(button) {
    // Update active button
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    const category = button.dataset.category;
    debouncedFilter(category);
}

function applyFilters() {
    console.log('Applying filters - Category:', activeCategory, 'Search:', currentSearch);
    
    let filtered = [...products];

    // Apply category filter
    if (activeCategory !== 'All') {
        filtered = filtered.filter(product => product.category === activeCategory);
    }

    // Apply search filter
    if (currentSearch) {
        filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(currentSearch) ||
            product.description.toLowerCase().includes(currentSearch) ||
            product.category.toLowerCase().includes(currentSearch)
        );
    }

    filteredProducts = filtered;
    renderProducts();
    
    console.log('Filters applied, showing', filteredProducts.length, 'products');
}

// ========================================================================================
// ADMIN FUNCTIONALITY
// ========================================================================================
function setupAdminAccess() {
    const adminInput = document.getElementById('adminSecretInput');
    const adminBtn = document.getElementById('adminAccessBtn');
    const hideAdminBtn = document.getElementById('hideAdminBtn');
    
    if (adminBtn) {
        adminBtn.addEventListener('click', function(e) {
            e.preventDefault();
            handleAdminAccess();
        });
    }
    
    if (hideAdminBtn) {
        hideAdminBtn.addEventListener('click', function(e) {
            e.preventDefault();
            disableAdminMode();
        });
    }
    
    if (adminInput) {
        adminInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleAdminAccess();
            }
        });
        
        adminInput.addEventListener('input', function() {
            hideAdminError();
        });
    }
}

function handleAdminAccess() {
    const adminInput = document.getElementById('adminSecretInput');
    if (!adminInput) {
        console.error('Admin input not found');
        return;
    }
    
    const enteredSecret = adminInput.value.trim();
    console.log('Admin access attempt with:', enteredSecret);
    
    if (enteredSecret === PERFORMANCE_CONFIG.ADMIN_SECRET) {
        console.log('Admin access granted');
        enableAdminMode();
        adminInput.value = '';
        hideAdminError();
    } else {
        console.log('Admin access denied');
        showAdminError();
        adminInput.value = '';
    }
}

function enableAdminMode() {
    console.log('Enabling admin mode');
    
    isAdminMode = true;
    document.body.classList.add('admin-mode');
    
    const addProductSection = document.getElementById('add-product');
    const adminBtn = document.getElementById('adminAccessBtn');
    const hideAdminBtn = document.getElementById('hideAdminBtn');
    
    if (addProductSection) {
        addProductSection.classList.remove('hidden');
        console.log('Add product section shown');
    } else {
        console.error('Add product section not found');
    }
    
    if (adminBtn) adminBtn.classList.add('hidden');
    if (hideAdminBtn) hideAdminBtn.classList.remove('hidden');
    
    showToast('Admin access granted!', 'success');
    renderProducts(); // Re-render to show delete buttons
}

function disableAdminMode() {
    console.log('Disabling admin mode');
    
    isAdminMode = false;
    document.body.classList.remove('admin-mode');
    
    const addProductSection = document.getElementById('add-product');
    const adminBtn = document.getElementById('adminAccessBtn');
    const hideAdminBtn = document.getElementById('hideAdminBtn');
    
    if (addProductSection) addProductSection.classList.add('hidden');
    if (adminBtn) adminBtn.classList.remove('hidden');
    if (hideAdminBtn) hideAdminBtn.classList.add('hidden');
    
    showToast('Admin mode disabled', 'info');
    renderProducts(); // Re-render to hide delete buttons
}

function showAdminError() {
    const adminError = document.getElementById('adminError');
    if (adminError) {
        adminError.classList.remove('hidden');
        setTimeout(() => hideAdminError(), 3000);
    }
}

function hideAdminError() {
    const adminError = document.getElementById('adminError');
    if (adminError) {
        adminError.classList.add('hidden');
    }
}

// ========================================================================================
// PRODUCT MANAGEMENT
// ========================================================================================
function addNewProduct() {
    console.log('Adding new product');
    
    const productName = document.getElementById('productName');
    const productPrice = document.getElementById('productPrice');
    const productCategory = document.getElementById('productCategory');
    const productSizes = document.getElementById('productSizes');
    const productImage = document.getElementById('productImage');
    const productDescription = document.getElementById('productDescription');
    
    if (!productName || !productPrice || !productCategory || !productSizes || !productImage || !productDescription) {
        console.error('Form elements not found');
        return;
    }
    
    let imageUrl = productImage.value.trim();
    
    // Validate and set placeholder if needed
    if (!validateImageUrl(imageUrl)) {
        imageUrl = PLACEHOLDER_IMG;
    }
    
    const productData = {
        name: productName.value.trim(),
        price: parseInt(productPrice.value),
        category: productCategory.value,
        sizes: productSizes.value.split(',').map(s => s.trim()).filter(s => s),
        image: imageUrl,
        description: productDescription.value.trim()
    };
    
    // Validation
    const validation = validateProductData(productData);
    if (!validation.isValid) {
        showToast(validation.error, 'error');
        return;
    }
    
    // Create new product
    const newProduct = {
        ...productData,
        id: nextProductId++,
        dateAdded: new Date().toISOString().split('T')[0]
    };
    
    // Handle max products with FIFO removal and ID reassignment
    let removedProduct = null;
    if (products.length >= PERFORMANCE_CONFIG.MAX_PRODUCTS) {
        // Find oldest product
        const oldestProduct = products.reduce((oldest, product) => {
            return new Date(product.dateAdded) < new Date(oldest.dateAdded) ? product : oldest;
        });
        
        // Remove oldest
        products = products.filter(p => p.id !== oldestProduct.id);
        removedProduct = oldestProduct;
    }
    
    // Add new product with ID 1, shift others up
    newProduct.id = 1;
    products = reassignProductIds([newProduct, ...products]);
    
    // Reset form
    const productForm = document.getElementById('productForm');
    const imagePreview = document.getElementById('imagePreview');
    
    if (productForm) productForm.reset();
    if (imagePreview) imagePreview.classList.add('hidden');
    
    // Update display
    applyFilters();
    updateProductCounter();
    
    // Show message
    const message = removedProduct 
        ? `Product added! Removed oldest: ${removedProduct.name}`
        : 'Product added successfully!';
    const type = removedProduct ? 'warning' : 'success';
    
    showToast(message, type);
    
    // Scroll to products
    setTimeout(() => scrollToProducts(), 500);
}

function reassignProductIds(productList) {
    return productList.map((product, index) => ({
        ...product,
        id: index + 1
    }));
}

function validateProductData(data) {
    if (!data.name) return { isValid: false, error: 'Product name is required' };
    if (!data.price || data.price <= 0) return { isValid: false, error: 'Valid price is required' };
    if (!data.category) return { isValid: false, error: 'Category is required' };
    if (data.sizes.length === 0) return { isValid: false, error: 'At least one size is required' };
    if (!data.description) return { isValid: false, error: 'Description is required' };
    
    return { isValid: true };
}

function quickDeleteProduct(productId) {
    console.log('Quick delete product:', productId);
    selectedProduct = products.find(p => p.id === productId);
    if (selectedProduct) {
        confirmDelete();
    }
}

function deleteProduct() {
    if (!selectedProduct) return;
    
    const productName = selectedProduct.name;
    products = products.filter(p => p.id !== selectedProduct.id);
    
    // Reassign IDs after deletion
    products = reassignProductIds(products);
    
    applyFilters();
    updateProductCounter();
    closeModal();
    closeDeleteModal();
    
    showToast(`Deleted: ${productName}`, 'success');
}

// ========================================================================================
// MODAL FUNCTIONALITY
// ========================================================================================
function openModal(productId) {
    console.log('Opening modal for product:', productId);
    const product = products.find(p => p.id === productId);
    if (!product) return;

    selectedProduct = product;

    // Populate modal content
    const modalImage = document.getElementById('modalImage');
    const modalName = document.getElementById('modalName');
    const modalCategory = document.getElementById('modalCategory');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');
    const sizeSelect = document.getElementById('sizeSelect');
    const deleteButton = document.getElementById('deleteButton');

    if (modalImage) {
        modalImage.src = product.image;
        modalImage.alt = product.name;
        
        // Add error handling for modal image
        modalImage.onerror = function() {
            this.src = PLACEHOLDER_IMG;
            this.classList.add('img-fallback');
        };
    }
    if (modalName) modalName.textContent = product.name;
    if (modalCategory) modalCategory.textContent = product.category;
    if (modalDescription) modalDescription.textContent = product.description;
    if (modalPrice) modalPrice.textContent = `₹${product.price.toLocaleString('en-IN')}`;

    if (sizeSelect) {
        sizeSelect.innerHTML = product.sizes.map(size => 
            `<option value="${size}">${size}</option>`
        ).join('');
    }

    if (deleteButton) {
        deleteButton.classList.toggle('hidden', !isAdminMode);
    }

    // Setup order button
    const orderButton = document.getElementById('orderButton');
    if (orderButton) {
        orderButton.onclick = function(e) {
            e.preventDefault();
            orderOnWhatsApp();
        };
    }

    // Show modal
    const productModal = document.getElementById('productModal');
    if (productModal) {
        productModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const productModal = document.getElementById('productModal');
    if (productModal) {
        productModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        selectedProduct = null;
    }
}

function confirmDelete() {
    if (!selectedProduct) return;
    const deleteModal = document.getElementById('deleteModal');
    if (deleteModal) {
        deleteModal.classList.remove('hidden');
    }
}

function closeDeleteModal() {
    const deleteModal = document.getElementById('deleteModal');
    if (deleteModal) {
        deleteModal.classList.add('hidden');
    }
}

function orderOnWhatsApp() {
    if (!selectedProduct) return;

    const sizeSelect = document.getElementById('sizeSelect');
    const selectedSize = sizeSelect ? sizeSelect.value : selectedProduct.sizes[0];
    
    const message = `Hi! I want to order:\n\nProduct: ${selectedProduct.name}\nSize: ${selectedSize}\nPrice: ₹${selectedProduct.price}\n\nPlease confirm availability.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917878887678?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// ========================================================================================
// NAVIGATION & UTILITIES
// ========================================================================================
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            if (targetElement) {
                const navbarHeight = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: Math.max(0, offsetPosition),
                    behavior: 'smooth'
                });
            }
        });
    });
}

function scrollToProducts() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        const navbarHeight = 100;
        const elementPosition = productsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
        });
    }
}

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

function setupImagePreview() {
    const productImageInput = document.getElementById('productImage');
    const imagePreview = document.getElementById('imagePreview');
    
    if (!productImageInput || !imagePreview) return;
    
    productImageInput.addEventListener('input', function() {
        const imageUrl = this.value.trim();
        
        if (imageUrl && validateImageUrl(imageUrl)) {
            imagePreview.src = imageUrl;
            imagePreview.classList.remove('hidden');
            imagePreview.classList.remove('img-fallback');
            
            imagePreview.onerror = function() {
                this.src = PLACEHOLDER_IMG;
                this.classList.add('img-fallback');
            };
        } else {
            imagePreview.src = PLACEHOLDER_IMG;
            imagePreview.classList.remove('hidden');
            imagePreview.classList.add('img-fallback');
        }
    });
}

// ========================================================================================
// EVENT LISTENERS SETUP
// ========================================================================================
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Category filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            handleCategoryFilter(this);
        });
    });

    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Product form submission
    const productForm = document.getElementById('productForm');
    if (productForm) {
        productForm.addEventListener('submit', function(e) {
            e.preventDefault();
            addNewProduct();
        });
    }

    // Modal close events
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
            closeDeleteModal();
        }
    });

    // Prevent modal from closing when clicking inside modal content
    const modalContents = document.querySelectorAll('.modal-content');
    modalContents.forEach(content => {
        content.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });

    console.log('Event listeners setup complete');
}

// ========================================================================================
// INITIALIZATION
// ========================================================================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing optimized Neel Fashion Store...');
    
    try {
        // Setup all functionality
        setupEventListeners();
        setupNavigation();
        setupAdminAccess();
        setupImagePreview();
        
        // Initial render
        applyFilters();
        updateProductCounter();
        
        console.log('Neel Fashion Store initialized successfully');
        console.log('Admin secret:', PERFORMANCE_CONFIG.ADMIN_SECRET);
    } catch (error) {
        console.error('Failed to initialize app:', error);
        
        // Fallback rendering
        const productsGrid = document.getElementById('productsGrid');
        if (productsGrid) {
            productsGrid.innerHTML = '<div>Error loading products. Please refresh the page.</div>';
        }
    }
});

// Clean up on page unload
window.addEventListener('beforeunload', function() {
    // Clear any timeouts
    if (searchTimeout) clearTimeout(searchTimeout);
    if (filterTimeout) clearTimeout(filterTimeout);
});

console.log('Neel Fashion Store app loaded with robust image handling');