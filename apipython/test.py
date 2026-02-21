### TRADE MONEY USING API 
import time 
import requests 


print("hello Word")

lista = [ "https://rickandmortyapi.com/api/character", "https://rickandmortyapi.com/api/location","https://rickandmortyapi.com/api/episode" ]

print(lista[0])

escolha = int(input("Digite (0) == character, Digite (1) == location , Digite (2) == episode "))


print(lista[escolha])
    


response = requests.get(lista[escolha])

test = response.status_code

data = response.json()

print(test)

if test == 200 :
    time.sleep(2)
    print(f"requisição aceita pela API: {response}")
    time.sleep(3)
    print(data)