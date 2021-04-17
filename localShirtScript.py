from selenium import webdriver
import names
import random


# Configure web driver
options = webdriver.ChromeOptions()
# options.add_argument("--headless")
browser = webdriver.Chrome("./chromedriver",options=options)


for _ in range(0,100):
    # Open form and find elements
    browser.get("https://sarahpeiffer.github.io/computerSecurityTest/")
    textboxes = browser.find_elements_by_class_name("nameEntry")
    radioButtons = browser.find_elements_by_class_name("radio")
    submitButton = browser.find_element_by_xpath('//span[text()="Submit"]')

    # Input data
    textboxes[0].send_keys(names.get_full_name())
    radioButtons[random.randint(0,4)].click()
    submitButton.click()

browser.close()