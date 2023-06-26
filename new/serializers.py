
from rest_framework import serializers
from .models import Profile,Address,Department



class departmentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Department
        fields=['name']

class addressSerializer(serializers.ModelSerializer):
    class Meta:
        model=Address
        fields=['name','last_name','state','city','address','phone','building_number','unit','postal_code']        
class ProfileListSerialiser(serializers.ModelSerializer):

    department=departmentSerializer()
    class Meta:
        model = Profile
        fields = ['id', 'name','last_name', 'email','birthdate','age','active','role','department']
