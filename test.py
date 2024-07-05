from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver= webdriver.Chrome()
url="http://localhost:5000/"
driver.get(url)

def login():
    username=driver.find_element(By.XPATH,'/html/body/div/div/div/div/div[2]/div/form/div[1]/input')
    username.send_keys('administrador')
    time.sleep(8)
    password=driver.find_element(By.XPATH,'/html/body/div/div/div/div/div[2]/div/form/div[2]/input')
    password.send_keys('12345')
    time.sleep(4)
    btn_login = driver.find_element(By.XPATH,'/html/body/div/div/div/div/div[2]/div/form/button')
    time.sleep(4)
    btn_login.click()
    time.sleep(4)

login()

def  create():
    name=driver.find_element(By.XPATH,'/html/body/div/div/div/div[2]/div[2]/form/div[1]/input')
    name.send_keys('programación del servicio')
    time.sleep(4)
    descripcion=driver.find_element(By.XPATH,'/html/body/div/div/div/div[2]/div[2]/form/div[2]/textarea')
    descripcion.send_keys('desarrollo de la automatización del navegdor prueba 1.0')
    time.sleep(4)
    fecha=driver.find_element(By.XPATH,'/html/body/div/div/div/div[2]/div[2]/form/div[3]/input')
    fecha.send_keys('01/01/2021')
    time.sleep(4)
    Hora=driver.find_element(By.XPATH,'/html/body/div/div/div/div[2]/div[2]/form/div[4]/input')
    Hora.send_keys('08:00 pm')
    time.sleep(4)
    btn_save=driver.find_element(By.XPATH,'/html/body/div/div/div/div[2]/div[2]/form/button')
    btn_save.click()
    time.sleep(4)
create()

def consultar():
    nav_consultar=driver.find_element(By.XPATH,'/html/body/div/div/div/div[1]/li[2]/button')
    nav_consultar.click()
    time.sleep(4)
    btn_detalles=driver.find_element(By.XPATH,'/html/body/div/div/div/div[3]/table/tbody/tr[1]/td[8]/button[1]')
    btn_detalles.click()
    time.sleep(4)
consultar()

def tiempos():
    nav_tiempos=driver.find_element(By.XPATH,'/html/body/div/div/div/div[1]/li[5]/button')
    nav_tiempos.click()
    time.sleep(4)
tiempos()

def cerrar_sesion():
    nav_salir=driver.find_element(By.XPATH,'/html/body/div/div/div/div[1]/li[6]/button')
    nav_salir.click()
    time.sleep(4)
cerrar_sesion()


