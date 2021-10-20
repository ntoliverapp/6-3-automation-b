const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await (await driver).get('http://127.0.0.1:5500/automation-b/movieList/index.html')
})

afterAll(async () => {
    await (await driver).quit()
})

test('Movie List', async () => {
    // await search(driver, 'Add Movie')

    const addMovie = driver.findElement(By.id('movie-input'))
    console.log(addMovie)

    await addMovie.sendKeys('Lion King')

    await driver.findElement(By.name('button')).click()

    await driver.sleep(3000)

})
// Write a test that adds a movie to the page
// You’ll need to select the input field and button

// You’ll need to type in the input field

// You’ll need to click the button

//css("[type='input']")
//xpath("//form/input[text()='Add Movie'][1])"
//name('input')
//name('form')
//By.css("[name='input']"
//xpath("//*[contains(text(), 'form')]"))