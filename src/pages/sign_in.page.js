import BasePage from './base.page'

export default class SignInPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page)
    this.emailField = '#user_email_login'
    this.passwordField = '#user_password'
    this.signMeInButton = '#user_submit'
    this.errorMessage = '//input[@id="user_password"]/../div[@class="error-msg"]'
  }
}
