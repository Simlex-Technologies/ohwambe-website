/**
 * ApiRoutes class
 */
export default class ApiRoutes {
    static BASE_URL_DEV: string = "https://localhost:7244/";
    static BASE_URL_TEST: string = "https://test.api.mcnifcuisine.co.uk/";

    static BASE_URL_LIVE: string = "https://api.mcnifcuisine.co.uk";


    // Api route to login user
    static LoginUser: string = "api/auth/customer/login";

    // Api route to register user
    static RegisterUser: string = "api/auth/register";

    // Api route to update user profile
    static UpdateUserProfile: string = "api/auth/users/me";

    // Api route to fetch user profile
    static FetchUserProfile: string = "api/auth/users/me";

    // Api route for fetching buffets
    static FetchBuffets: string = "api/buffets";

    // Api route for fetching buffet
    static FetchBuffet: string = "api/buffets";

    // Api route for creating reservation
    static CreateBuffetReservation: string = "api/buffet/reservations";

    // Api route for fetching testimonials
    static FetchTestimonials: string = "api/testimonials";

    // Api route to fetch blog posts
    static FetchBlogPosts: string = "api/blogposts";

    // Api route to fetch foods
    static FetchFoods: string = "api/buffet/foods";

    // Api route to fetch featured foods
    static FetchFeaturedFoods: string = "api/buffet/featured-foods";

    // Api route to fetch reservation
    static FetchReservation: string = "api/buffet/reservations";

    // Api route to initialize payment
    static InitializePayment: string = "api/barclay/initialize";

    // Api route to initialize cash payment
    static InitializeCashPayment: string = "api/cash/initialize";

    // Api route to verify payment
    static VerifyPayment: string = "api/barclay/verify";

    /**
  * The route to NewsletterSubscriber endpoint
  */
    static NewsletterSubscriber: string = 'api/subscriptions';

    /**
   * The route to Enquiry endpoint
   */
    static Enquiry: string = 'api/enquiries';

    /**
   * The route to fetch ondemnd dishes endpoint
   */
    static FetchOnDemandDishes: string = 'api/dish/on-demand';

    /**
   * The route to fetch daily combo dishes endpoint
   */
    static FetchDailyComboDishes: string = 'api/dish/daily-combo';

    /**
   * The route to fetch a single dish endpoint
   */
    static FetchADish: string = 'api/dish';

    /**
   * The route to fetch all dish categories endpoint
   */
    static FetchAllDishCategories: string = 'api/category';

    /**
   * The route to fetch all dishes under a category endpoint
   */
    static FetchDishesInCategory = (categoryId: string): string => `api/dish/category/${categoryId}`;

    /**
   * The route to fetch similar dishes endpoint
   */
    static FetchSimilarDishes = (dishId: string): string => `api/dish/${dishId}/similar`;

    /**
   * The route to upsert cart endpoint
   */
    static UpsertCart: string = 'api/user/cart';

    /**
   * The route to fetch user cart endpoint
   */
    static FetchCartItems: string = 'api/user/cart';

    /**
   * The route to fetch user cart endpoint
   */
    static DeleteCartItem: string = 'api/user/cart';

    /**
     * The route to fetch delivery fees endpoint
    */
    static FetchDeliveryFees: string = 'api/delivery-fees';

    /**
     * The route to location validation endpoint
    */
    static LocationValidation: (longitude: string, latitude: string) => string = (longitude: string, latitude: string) => `api/location-search?longitude=${longitude}&latitude=${latitude}`;

    /**
     * The route to create order endpoint
    */
    static CreateOrder: string = 'api/order/create';

    /**
     * The route to place order endpoint
    */
    static PlaceOrder: (orderId: string) => string = (orderId: string) => `api/order/${orderId}/place-order`;

    /**
     * The route to fetch user orders endpoint
    */
    static FetchUserOrders: string = 'api/orders/customer';

    /**
     * The route to fetch user order endpoint
    */
    static FetchUserOrder: (orderId: string) => string = (orderId: string) => `api/order/${orderId}/customer`;

    /**
     * The route to create in sizzled party order endpoint
     */
    static CreateInSizzledPartyOrder: string = 'api/order/in-party-sizzled';

    /**
     * The route to create luxury private palate order endpoint
     */
    static CreateLuxuryPrivatePalateOrder: string = 'api/order/luxury-private-palate';

    /**
     * The route to the delivery address endpoint
     */
    static DeliveryAddress: string = 'api/user/delivery-address'

    /**
     * The route to the verify coupon endpoint
     */
    static VerifyCoupon: (couponCode: string) => string = (couponCode: string) => `api/coupons/verify/${couponCode}`;

    static AddOrUpdateCustomer: string = 'https://services.leadconnectorhq.com/hooks/M8NWdyptUaNCmBj6kd36/webhook-trigger/44826242-1c7a-4a8c-9336-0d444931f9b4';
} 