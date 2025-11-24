// Use environment variable with fallback to Render backend URL
// This ensures production uses the correct backend automatically
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://cafeteria1-vodr.onrender.com';

// Export helper function for components to use
export const getApiUrl = () => API_BASE_URL;

export const API_ENDPOINTS = {
  // Auth endpoints
  SIGNIN: `${API_BASE_URL}/signin`,
  SIGNUP: `${API_BASE_URL}/signup`,
  PROFILE: `${API_BASE_URL}/profile`,
  
  // Product endpoints
  PRODUCTS: `${API_BASE_URL}/products`,
  
  // Cart endpoints
  CART: `${API_BASE_URL}/cart`,
  
  // Order endpoints
  ORDERS: `${API_BASE_URL}/orders`,
  
  // Wishlist endpoints
  WISHLIST: `${API_BASE_URL}/wishlist`,
  
  // Admin endpoints
  ADMIN: {
    LOGIN: `${API_BASE_URL}/admin/login`,
    STATS: `${API_BASE_URL}/admin/stats`,
    USERS: `${API_BASE_URL}/admin/users`,
    PRODUCTS: `${API_BASE_URL}/admin/products`,
    ORDERS: `${API_BASE_URL}/admin/orders`
  }
};

export default API_BASE_URL;
