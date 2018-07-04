# -*- coding: UTF-8 -*- 
a='''当前字母：'''
for letter in 'python':
	if letter=='h':
		pass
		print '这是pass块'
	print a.decode('utf-8').encode('gbk'), letter
print "GOD WEI" 	

s='''石乐志'''
print s.decode('utf-8').encode('gbk')

#定义函数
def functionName(str):
	print str;
	return;
	
#盗用函数	
functionName("abc");	
functionName("bgk");	