
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
    address=serializers.SerializerMethodField()

        
    def get_address(self,obj):
      if len(obj.user_addresses.all())>0:
        queryset=obj.user_addresses.all()[0]
        serializers=addressSerializer(queryset).data
        return serializers  
      else:
         return None  

     
    class Meta:
        model = Profile
        fields = ['id', 'name','last_name', 'email','birthdate','age','active','role','department','address']
