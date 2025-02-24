/**
 * Application routes
 */
export class ApplicationRoutes {
  /**
   * The route to the home page
   */
  static readonly Home = '/';

  /**
   * The route to the about page
   */
  static readonly About = '/about';

  /**
   * The route to the services page
   */
  static readonly Services = '/services';

  /**
   * The route to the blog page
   */
  static readonly Blog = 'https://blog.mcnifcuisine.co.uk/';

  /**
   * The route to the contact page
   */
  static readonly Contact = '/contact';

  /**
   * The route to the sign in page
   */
  static readonly SignIn = '/auth/signin';

  /**
   * The route to the sign up page
   */
  static readonly SignUp = '/auth/signup';

  /**
   * The route to the payment error page
   */
  static readonly PaymentError = '/payment-error';

  /**
   * The route to the terms and conditions page
   */
  static readonly TermsAndConditions = '/terms-and-conditions';

  /**
   * The route to the privacy policy page
   */
  static readonly PrivacyPolicy = '/privacy-policy';

  /**
   * The route to the payment success page
   */
  static readonly PaymentSuccess = '/confirmation';

  /**
   * The route to the buffet payment page
   */
  static readonly BuffetPayment: (id: string) => string = (id: string) =>
    `/buffet/payment?id=${id}`;

    /**
     * The route to the order page
     */
    static readonly Order = '/order';

    /**
     * The route to the view order details page
     */
    static readonly OrderDetails: (id: string) => string = (id: string) => `/order/${id}`;

    /**
     * The route to the cart page
     */
    static readonly Cart = '/order/cart';

    /**
     * The route to the checkout page
     */
    static readonly Checkout = '/order/checkout';

    /**
     * The route to the payment page
     */
    static readonly OrderPayment = '/order/payment';

    /**
     * The route to the manage order page
     */
    static readonly ManageOrder = '/order/manage';

    /**
     * The route to the account page
     */
    static readonly Account = '/account';
}
