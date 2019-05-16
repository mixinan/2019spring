import random

num = random.randint(1,10)
count = 0


while count < 3:
    count += 1
    ans = int(input('guess:'))
    if ans > num:
        print("big")
    elif ans < num:
        print("small")
    else:
        print("good")
        break
else:
    print("正确结果:%s" % num)