# Java复习 - base


## 开发环境  

- JDK 开发工具包  
- JRE 运行环境  
- JVM 虚拟机 

xx.java（源程序）   
javac（编译器）  
xx.class（字节码文件）

## 环境变量
```shell
cat /etc/profile  
export JAVA_HOME=/opt/jdk  
export CLASSPATH=.  
export PATH=/opt/jdk/bin:$PATH
```

## 数据类型

基本数据类型（8种）：  
整数 byte short int long  
浮点 float double  
boolean  
char

整数直接量 int

16进制  0x开头  
8进制   0开头

```java
//long直接量，以L或l结尾  
long a = 100000L;
```

```java
//当前毫秒数  
long time = System.currentTimeMillis();
System.out.println(time);
```

浮点数直接量 double  
通常写法： 3.14  0.1  .5  
科学计数法：  1.25E2（1.25乘以10的2次方）

```java
//如果要表示float类型，后面加f或F
float f1 = 3.14f;
```

赋值表达式本身也有值，其本身的值，即为所赋之值  

```java
int a,b,c;
a = b = c = 100;
```

## 数组

初始化  
```java
int[] arr = {10, 20, -3, 21};
```

声明及赋值  
```java
int [] arr;  
arr = new int[]{10,20,1,-5};
```

数组长度  
```java
int len = arr.length;
```

## 数组复制·方法一

System.arraycopy(参数列表)  

参数列表：
- 源数组
- 源数组中的起始位置
- 目标数组
- 目标数组中的起始位置
- 要复制的数组元素的数量

```java
int[] a = {10,20,30,40,50};
int[] a1 = new int[6];
System.arraycopy(a, 1, a1, 0, 4);
```

a1 的结果：  
[20, 30, 40, 50, 0, 0]



## 数组复制·方法二
Arrays.copyOf( 源数组, 要复制的数组元素数量 )  
如果数量 < 源数组，截取  
如果数量 > 源数组，用0或null填充

```java
int[] arr = {10,23,42,3,11};
int[] a1 = Arrays.copyOf(arr, 3);
int[] a2 = Arrays.copyOf(arr, 8);

for (int i = 0; i < a1.length; i++) {
	System.out.print(a1[i]+" ");
}
		
System.out.println();
		
for (int i = 0; i < a2.length; i++) {
	System.out.print(a2[i]+" ");
}

//结果：  
10 23 42  
10 23 42 3 11 0 0 0

//数组排序  
Arrays.sort( a2 );

//结果：  
0 0 0 3 10 11 23 42
```

