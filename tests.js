const {Builder,By,until} = require('selenium-webdriver');
const chrome    = require('selenium-webdriver/chrome');
async function login(username,password)
{
    let driver = await new Builder().forBrowser('chrome').
    setChromeOptions(new chrome.Options().headless()).build();
    
     try {
     driver.get('http://localhost:3000/login');
    await driver.findElement(By.xpath('//*[@id="email"]')).sendKeys(username);
    await driver.findElement(By.xpath('//*[@id="password"]')).sendKeys(password);
  await driver.findElement(By.xpath('//*[@id="root"]/div/div/form/button')).click();
    await driver.wait(until.urlIs('http://localhost:3000/dashboard'), 1000);
   
    console.log('Login successful');
  } catch (error) {
    console.log(error);
  } finally {
    await driver.quit();
  }
}
login("manal@hotmail.com","1234")
async function signup(email,password)
{
    let driver = await new Builder().forBrowser('chrome').
    setChromeOptions(new chrome.Options().headless()).build();
    
     try {
     driver.get('http://localhost:3000/signup');
    await driver.findElement(By.xpath('//*[@id="email"]')).sendKeys(email);
    await driver.findElement(By.xpath('//*[@id="password"]')).sendKeys(password);
  await driver.findElement(By.xpath('//*[@id="root"]/div/div/form/button')).click();
    await driver.wait(until.urlIs('http://localhost:3000/dashboard'), 1000);
   
    console.log('SignUp successful');
  } catch (error) {
    console.log(error);
  } finally {
    await driver.quit();
  }
}


signup("manal@hotmail.com","1234")

async function addTodo(task,assignee,status)
{
    let driver = await new Builder().forBrowser('chrome').
    setChromeOptions(new chrome.Options().headless()).build();
   
     try {
    await driver.get('http://localhost:3000/dashboard');
    await driver.findElement(By.xpath('//*[@id="task"]')).sendKeys(task);
    await driver.findElement(By.xpath('//*[@id="assignee"]')).sendKeys(assignee);
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div[2]/div/div/div/div/div/form/div[2]/div/select')).sendKeys(status);
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div[2]/div/div/div/div/div/form/input')).click();
    await driver.wait(until.elementLocated(By.css('.todo-item')), 1000);
    let todoElements = await driver.findElements(By.css('.todo-item'));
    let todoTexts = [];
    for (let todoElement of todoElements) {
      todoTexts.push(await todoElement.getText());
    }
    if (todoTexts.includes(task)) {
      console.log('New todo added successfully');
    } else {
      console.log('Error: new todo not found')}
    }
    catch (error) {
    console.log(error);
    } finally {
   await driver.quit();
    }
}

addTodo("Complete DevOps ","1734",'Completed')

async function deleteTodo(todoText) {
 let driver = await new Builder().forBrowser('chrome').
    setChromeOptions(new chrome.Options().headless()).build();

  try {
     await driver.get('http://localhost:3000/dashboard');
    let todoElement = await driver.wait(until.elementIsNotVisible(
    driver.findElement(By.xpath('//*[@id="root"]/div/div/div[3]/div/table/tbody/tr[1]/td[1]'))),1000);
    await todoElement.findElement(By.xpath('//*[@id="delete-btn"]')).click();
    await driver.wait(until.elementIsNotVisible(todoElement), 1000);
    let todoElements = await driver.findElements(By.css('.todo-item'));
    let todoTexts = [];
    for (let todoElement of todoElements) {
      todoTexts.push(await todoElement.getText());
    }
    if (!todoTexts.includes(todoText)) {
      console.log('Todo deleted successfully');
    } else {
      console.log('Error: todo not deleted');
    }
  }
    catch (error) {
    console.log(error);
    } finally {
   await driver.quit();
    }
}
//deleteTodo("1")



