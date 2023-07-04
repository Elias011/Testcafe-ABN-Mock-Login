import { Selector, t , ClientFunction} from "testcafe"

// The Login class provides the functionality to login and verify succesful login and logout.
// Defining element by using Testcafe selector with element html type and element id 
// Element name format: element type + what the element present in the Dom:
// Example: inputLoginButton (Element type is input + the element present in the Dom The login button)
export default class Login
{
    inputUsername = Selector('input').withAttribute("id", "email")
    inputPassword = Selector('input').withAttribute("id", "password")
    inputLoginbutton = Selector('input').withAttribute("id", "login")
    sectionContent  = Selector('section').withAttribute("id", "content")
    navNavigationBar = Selector('nav').withAttribute("id", "navigation")
    sectionLogin = Selector('section').withAttribute("id", "login")
    sectionUser = Selector('section').withAttribute("id", "user")
    divSignOut = Selector('div').withAttribute("id", "logout")

    public async setUsername(username: string){
        await t.typeText(this.inputUsername, username)

    }

    public async setPassword(password: string){
        await t.typeText(this.inputPassword, password)
    }

    public async clickLogin(){
        await t.click(this.inputLoginbutton)
    }

    public async clickSignOut(){
        await t.click(this.sectionUser)
        await t.click(this.divSignOut)
    }

    public async verifyLogin(username: string){
        // Get the localstorage item 'logged'
        let getLocalStorageItem =  ClientFunction(() => {
            return localStorage.getItem('logged');
        })
        
        const localStorageitemValue = await getLocalStorageItem();

        // Verify whether a login was successful or not, by checking the local storage item "logged"
        if(localStorageitemValue == username) {
            await t.expect(this.sectionContent.getStyleProperty("display")).eql("flex", "Expected: the content section is expected to appear after the user logs in")
            await t.expect(this.navNavigationBar.getStyleProperty("display")).eql("flex", "Expected: the navigation bar is expected to appear after the user logs in")
            await t.expect(this.sectionLogin.getStyleProperty("display")).eql("none", "Expected: the login section should not be displayed after the user has logged in")
        }
        else{
            await t.expect(this.sectionContent.getStyleProperty('display')).eql("none", "Expected: the content section should not be displayed after the user is logged out")
            await t.expect(this.navNavigationBar.getStyleProperty("display")).eql("none", "Expected: the navigation bar should not be displayed after the user is logged out")
            await t.expect(this.sectionLogin.getStyleProperty("display")).eql("flex", "Expected: the login section should be displayed after the user is logged out")
        }
    }
}