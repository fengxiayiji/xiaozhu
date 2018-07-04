
x="a"
y="c"
print x,y  


print '-----------------'
print x,; print y,; print x,y;


import sys
print sys.argv

a=21
b=10

list=[1,2,3,4,5]
print a/b
print a**b


#if(a>b):
#	print "en"
#else:
#	print  'no'

#if(a  not in list):
#	print "yes"
#else:
#	print 'no'	
	
#var =1
#while var==1 :
#	num=raw_input()	
#	print num
#print "Good bye!"	

import random 

m=int(random.uniform(1,10))
print (m)
a=int(raw_input())
while a!=m:
	if a>m:
		print('big')
		a=int(input())
	if a<m:
		print('shirt')
		a=int(input())
	
	if a==m:
		print('OK')
		break;
	