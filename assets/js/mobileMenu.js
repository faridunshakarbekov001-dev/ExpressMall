
  // Mobile Menu
  function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
  }

  // Close menu when clicking outside
  document.getElementById('mobileMenu').addEventListener('click', function(e) {
    if (e.target === this) toggleMobileMenu();
  });

  // Active nav link highlighting
  function setActiveNav() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('text-green-600', 'font-semibold');
      }
    });
  }

  // Run on page load
  window.addEventListener('load', setActiveNav);

  const slides = document.querySelectorAll('.slide');
      let currentIndex = 0;
      const totalSlides = slides.length;

      function showSlide(index) {
        slides.forEach((slide, idx) => {
          slide.style.opacity = idx === index ? '1' : '0';
          slide.style.zIndex = idx === index ? '10' : '0';
        });
      }

      document.getElementById('prevSlide').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
      });

      document.getElementById('nextSlide').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
      });

      setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
      }, 5000);


      const products = [
        { id: 1, name: 'Wireless Headphones', category: 'electronics', price: 79.99, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=640&q=80'},
        { id: 2, name: 'Smart Watch Pro', category: 'electronics', price: 139.99, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=640&q=80'},
        { id: 3, name: 'Portable Speaker', category: 'electronics', price: 49.99, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=640&q=80'},
        { id: 4, name: 'Running Shoes', category: 'fashion', price: 89.99, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=640&q=80'},
        { id: 5, name: '4K Smart TV', category: 'electronics', price: 499.99, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=640&q=80'},
        { id: 6, name: 'Gaming Laptop', category: 'electronics', price: 1299.00, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=640&q=80'},
        { id: 7, name: 'Noise-Canceling Earbuds', category: 'electronics', price: 59.99, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=640&q=80'},
        { id: 8, name: 'Smartphone Max', category: 'electronics', price: 899.99, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=640&q=80'},
        { id: 9, name: 'Smart Home Hub', category: 'home', price: 79.99, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=640&q=80'},
        { id: 10, name: 'Gaming Controller', category: 'electronics', price: 32.49, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=640&q=80'},
        { id: 11, name: 'Outdoor Jacket', category: 'fashion', price: 119.99, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=640&q=80'},
        { id: 12, name: 'Yoga Mat', category: 'sports', price: 29.99, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=640&q=80'},
      ];

      function renderProducts(list) {
        const grid = document.getElementById('productGrid');
        grid.innerHTML = list
          .map(
            (product) => `
              <article class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <img src="${product.image}" alt="${product.name}" class="h-40 w-full rounded-lg object-cover" />
                <h4 class="mt-3 text-base font-semibold text-slate-900">${product.name}</h4>
                <p class="mt-1 text-sm text-slate-600">Category: ${product.category}</p>
                <p class="mt-2 text-lg font-bold text-brand-500">$${product.price.toFixed(2)}</p>
                <button class="mt-3 w-full rounded-lg bg-brand-500 px-3 py-2 text-sm font-semibold text-white hover:bg-brand-600">Add to cart</button>
              </article>
            `
          )
          .join('');

        document.getElementById('productsCount').textContent = `${list.length} items`;
      }

      function applyFilters() {
        const category = document.getElementById('categoryFilter').value;
        const price = document.getElementById('priceFilter').value;
        const sort = document.getElementById('sortFilter').value;

        let filtered = products.slice();

        if (category !== 'all') {
          filtered = filtered.filter((p) => p.category === category);
        }

        if (price !== 'all') {
          const [min, max] = price.split('-').map(Number);
          filtered = filtered.filter((p) => p.price >= min && p.price <= max);
        }

        if (sort === 'price-asc') {
          filtered.sort((a, b) => a.price - b.price);
        } else if (sort === 'price-desc') {
          filtered.sort((a, b) => b.price - a.price);
        }

        renderProducts(filtered);
      }

      document.getElementById('categoryFilter').addEventListener('change', applyFilters);
      document.getElementById('priceFilter').addEventListener('change', applyFilters);
      document.getElementById('sortFilter').addEventListener('change', applyFilters);

      renderProducts(products);

      // Shop slider
      const shopSlides = document.querySelectorAll('.shop-slide');
      let shopCurrentIndex = 0;
      const shopTotalSlides = shopSlides.length;

      function showShopSlide(index) {
        shopSlides.forEach((slide, idx) => {
          slide.style.opacity = idx === index ? '1' : '0';
          slide.style.zIndex = idx === index ? '10' : '0';
        });
      }

      document.getElementById('shopPrevSlide').addEventListener('click', () => {
        shopCurrentIndex = (shopCurrentIndex - 1 + shopTotalSlides) % shopTotalSlides;
        showShopSlide(shopCurrentIndex);
      });

      document.getElementById('shopNextSlide').addEventListener('click', () => {
        shopCurrentIndex = (shopCurrentIndex + 1) % shopTotalSlides;
        showShopSlide(shopCurrentIndex);
      });

      setInterval(() => {
        shopCurrentIndex = (shopCurrentIndex + 1) % shopTotalSlides;
        showShopSlide(shopCurrentIndex);
      }, 6000);


      
      function changeImage(imageSrc) {
        document.getElementById('mainImage').src = imageSrc;
      }

      function increaseQty() {
        const qty = document.getElementById('quantity');
        if (qty.value < 10) qty.value++;
      }

      function decreaseQty() {
        const qty = document.getElementById('quantity');
        if (qty.value > 1) qty.value--;
      }

      function addToCart() {
        const qty = document.getElementById('quantity').value;
        alert(`Added ${qty} item(s) to cart!`);
      }

      function buyNow() {
        alert('Proceeding to checkout...');
      }

      function addToWishlist() {
        alert('Added to wishlist!');
      }

      
      const cart = [
        { id: 0, name: 'Premium Wireless Headphones', price: 299.99, qty: 1 },
        { id: 1, name: 'Bluetooth Speaker', price: 79.99, qty: 1 },
      ];

      function formatMoney(value) {
        return '$' + value.toFixed(2);
      }

      function updateTotals() {
        let subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
        let tax = subtotal * 0.08;
        let shipping = subtotal > 50 ? 0 : 9.99;
        let total = subtotal + tax + shipping;

        document.getElementById('subtotal').textContent = formatMoney(subtotal);
        document.getElementById('tax').textContent = formatMoney(tax);
        document.getElementById('shipping').textContent = formatMoney(shipping);
        document.getElementById('total').textContent = formatMoney(total);
      }

      function quantityChanged(index) {
        const qtyInput = document.getElementById('qty-' + index);
        let newQty = parseInt(qtyInput.value, 10);
        if (newQty < 1) newQty = 1;
        cart[index].qty = newQty;
        document.getElementById('itemTotal-' + index).textContent = formatMoney(cart[index].price * newQty);
        updateTotals();
      }

      function updateQuantity(index, delta) {
        const qtyInput = document.getElementById('qty-' + index);
        let newQty = parseInt(qtyInput.value, 10) + delta;
        if (newQty < 1) newQty = 1;
        qtyInput.value = newQty;
        quantityChanged(index);
      }

      function removeItem(index) {
        const itemCard = event.target.closest('.rounded-xl');
        if (itemCard) itemCard.remove();
        cart[index].qty = 0;
        updateTotals();
      }

      function checkout() {
        alert('Proceeding to checkout...');
      }

      function continueShopping() {
        window.location.href = 'shop.html';
      }

      updateTotals();

      function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        console.log('Form submitted:', data);
        alert('Thank you for your message! We will get back to you soon.');
        event.target.reset();
      }
      
      const searchInput = document.getElementById('faqSearch');
      const faqItems = document.querySelectorAll('details');

      searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        faqItems.forEach(item => {
          const text = item.textContent.toLowerCase();
          item.parentElement.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
      });