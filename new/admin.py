from django.contrib import admin
from . import models

# Register your models here.


@admin.register(models.Profile)
class Profile(admin.ModelAdmin):
    list_display = ['id','name','email','age','role']
    search_fields = ['id','email']





@admin.register(models.Address)
class Address(admin.ModelAdmin):
    list_display = ['id','user','name','last_name','address']
    search_fields = ['id','address']



@admin.register(models.Department)
class Department(admin.ModelAdmin):
    list_display = ['id','name']
    search_fields = ['id','name']