import styles from "../checkout/checkout.module.scss";

export default function Checkout() {
  return (
    <main className={styles.container}>
      <h1>Billing details</h1>
      <div className={styles.checkout}>
        <div className={styles.checkout_left}>
          <form className={styles.checkout_left_form}>
            <div className={styles.checkout_left_form_name}>
              <div className={styles.checkout_left_form_name_first}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" />
              </div>
              <div className={styles.checkout_left_form_name_last}>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" />
              </div>
            </div>
            <label htmlFor="companyName">Company Name(Optional)</label>
            <input type="text" id="companyName" name="companyName" />
            <label htmlFor="country">Country/Region</label>
            <input type="text" id="country" name="country" />
            <label htmlFor="streetAddress">Street Address</label>
            <input type="text" id="streetAddress" name="streetAddress" />
            <label htmlFor="townCity">Town/City</label>
            <input type="text" id="townCity" name="townCity" />
            <label htmlFor="province">Province</label>
            <input type="text" id="province" name="province" />
            <label htmlFor="zipCode">ZIP code</label>
            <input type="text" id="zipCode" name="zipCode" />
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" />
            <label htmlFor="email">Email Address</label>
            <input type="text" id="email" name="email" />
            <input type="text" id="additionalInfo" name="additionalInfo" />
          </form>
        </div>
        <div className={styles.checkout_right}>
          <table>
            <tr>
              <th>Product</th>
              <th>Subtotal</th>
            </tr>
            <tr>
              <td className={styles.checkout_right_product_name}>
                Asgaard sofa
              </td>
              <td>Rs. 250,000.00</td>
            </tr>
            <tr>
              <td>Subtotal</td>
              <td>Rs. 250,000.00</td>
            </tr>
            <tr>
              <td>Total</td>
              <td className={styles.checkout_right_product_total_price}>
                Rs. 250,000.00
              </td>
            </tr>
          </table>
          <div className={styles.checkout_right_payment}>
            <div className={styles.checkout_right_payment_method}>
              <input type="radio" id="bankTransfer" name="paymentMethod" />
              <label htmlFor="bankTransfer">Bank Transfer</label>
            </div>

            <div className={styles.checkout_right_payment_method}>
              <input type="radio" id="cashOnDelivery" name="paymentMethod" />
              <label htmlFor="cashOnDelivery">Cash on delivery</label>
            </div>
            <p className={styles.checkout_right_payment_text}>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
            <button className={styles.checkout_right_payment_button}>
              Place order
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
