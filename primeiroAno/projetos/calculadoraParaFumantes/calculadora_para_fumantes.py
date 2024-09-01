# Ler o tempo como fumante em anos
ano = float(input("Tempo como fumante (em anos).....: "))
# Ler o valor do maco em reais
reais = float(input("Valor do maço....................: "))
# Ler a quantidade de macos por dia
quant = float(input("Quantidade de maços por dia......: "))
# Calcular o montante
valor = (quant * (ano * 360) ) * reais
# Se o valor for abaixo de 20000
if valor <= 20000:
    print(f"Com o valor R$ {valor:.2f}, voce poderia ter dado entrada em um carro.")
# Se o valor for entre 20000 e 50000
elif valor > 20000 and valor < 50000:
    print(f"Com o valor R$ {valor:.2f}, voce poderia ter comprado um carro popular usado.")

# Se o valor for acima de 50000
else: 
    print(f"Com o valor R$ {valor:.2f}, voce poderia ter comprado um carro zero.")