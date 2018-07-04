#lass Employee :
#	empCount=0;
#	def __init__(self,age,salary):
#		self.age=age;
#		self.salary=salary;
#		Employee.empCount+=1;
#		
#	def displayCount(self):
#		print Employee.empCount;
#	
#	def dispalyEmp(self):
#		print self.age,self.salary;
#mp1=Employee(20,4000);
#mp2=Employee(30,19000);
#etattr(emp1, 'name', 'xiaoming') 
#mp1.dispalyEmp();
#mp2.dispalyEmp();
#rint Employee.empCount


class Parent:
	parentAttr=100
	def __init__(self):
		print 'p'
	def  parentFunc(self):
		print 'pf'
	def  Func(self):
		print 'message'	
	def setAttr(self,attr):
		Parent.parentAttr=attr
		
	def getAttr(self):
		 print Parent.parentAttr
class Child(Parent):
	def __init__(self):
		print 'c'
	def childFunc(self):
		print 'cf'
	def Func(self):
		print 'newMessage'	
c = Child();
c.childFunc();
c.setAttr(200)	
c.getAttr();
c.parentFunc()
c.Func()
	