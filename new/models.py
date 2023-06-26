from django.db import models
from datetime import date

# Create your models here.


ROLE_USER = 'user'
ROLE_EMPLOYEE = 'employee'
ROLE_SUPERADMIN = 'superadmin'


ROLE_CHOICES = [
        (ROLE_USER, 'user'),
        (ROLE_EMPLOYEE, 'employee'),
        (ROLE_SUPERADMIN, 'super-admin'),

    ]

class Department(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Profile(models.Model):
   name = models.CharField(max_length=20, blank=True, null=True)
   last_name=models.CharField(max_length=50,blank=True,null=True)
   email = models.EmailField(  unique=True)
   active=models.BooleanField(default=False)
   birthdate = models.DateField()
   role=models.CharField(max_length=10,choices=ROLE_CHOICES,default=ROLE_USER)
   department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True, blank=True)


   @property
   def full_name(self):
        return f'{self.first_name} {self.last_name}'

   @property
   def age(self):
        today = date.today()
        age = today.year - self.birthdate.year
        if today.month < self.birthdate.month or (today.month == self.birthdate.month and today.day < self.birthdate.day):
            age -= 1
        return age


class Address(models.Model):
    user=models.ForeignKey(Profile,on_delete=models.PROTECT,related_name='user_addresses')
    name = models.CharField(max_length=20)
    last_name=models.CharField(max_length=50)
    current=models.BooleanField(default=False)
    phone = models.CharField(max_length=15)
    address=models.TextField()
    state=models.CharField(max_length=50)
    city=models.CharField(max_length=50)
    building_number=models.IntegerField(default=0,null=True,blank=True)
    unit=models.IntegerField(null=True,blank=True)
    postal_code=models.BigIntegerField()





    