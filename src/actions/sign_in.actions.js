import SignInPage from '../pages/sign_in.page'
import BaseActions from './base.actions'

export default class SignInPageActions extends BaseActions {
  /**
   * Initializes a new instance {@link SignInPageActions}
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page)
    this.signInPage = new SignInPage(page)
  }

  async signInAs(email, password) {
    await this.page.waitForSelector(this.signInPage.emailField, { state: 'visible' })
    await this.page.fill(this.signInPage.emailField, email)
    await this.page.fill(this.signInPage.passwordField, password)
    await this.page.click(this.signInPage.signMeInButton)
  }

  async getErrorMessage() {
    const errorElement = await this.page.textContent(this.signInPage.errorMessage)
    const errorMessage = await errorElement.trim()
    console.info('Browserstack Login Error Message: ' + errorMessage)
    return errorMessage
  }
}
