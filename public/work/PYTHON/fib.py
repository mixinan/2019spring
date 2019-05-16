fib=[0,1]
n=int(input("length:"))
for i in range(n-2):
    fib.append(fib[-1]+fib[-2])
print(fib)