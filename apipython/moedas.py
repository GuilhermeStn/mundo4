import requests


site  = requests.get("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL?") ### put your key after the ? 

resultado = site.status_code

mostrar = site.json()
if resultado == 200:
    print("CONEXÃO ACEITA ")
    print(mostrar)