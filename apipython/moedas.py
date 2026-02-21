import requests


site  = requests.get("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL?token=ae56dce06642fa0e4275fbdfc222a724fdafad14da86efb9ee0693d01f3b5588")

resultado = site.status_code

mostrar = site.json()
if resultado == 200:
    print("CONEXÃO ACEITA ")
    print(mostrar)