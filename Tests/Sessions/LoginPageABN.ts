import Login from "../../PageObjects/Login";

const login = new Login()
const dataSet = require('../../Data/data.json');

fixture('Test login page ABN mock login page')

dataSet.forEach(data => {
    test(`Test login/logout with valid credentials, emial ${data.email}`, async() =>{
        await login.setUsername(data.email)
        await login.setPassword(data.password)
        await login.clickLogin()
        await login.verifyLogin(data.email)
        await login.clickSignOut()
        await login.verifyLogin(data.email)
    })
});

test('Login with invalid credentials', async() => {
    await login.setUsername("invalidAdmin@admin.com")
    await login.setPassword("invalidPassword123")
    await login.clickLogin()
    await login.verifyLogin("invalidAdmin@admin.com")
})

test('Empty username and password', async() =>{
    await login.clickLogin()
    await login.verifyLogin("")
})