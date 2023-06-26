from rest_framework import generics
from .models import Profile,Address
from . import serializers
from django.db.models import Prefetch
from django.db.models import Q
from rest_framework import status
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination

class ProfilePagination(PageNumberPagination):
    page_size = 10
    def get_paginated_response(self, data):
        return Response({
            'page_size': self.page.paginator.num_pages,
            'page': int(self.request.GET.get('page', 1)), 
            'results': data
        }, status=status.HTTP_200_OK)
    

class ProfileList(generics.ListAPIView):
    pagination_class=ProfilePagination
    serializer_class = serializers.ProfileListSerialiser
    def get_queryset(self):
            params=self.request.query_params
            queryset=Profile.objects.select_related('department').prefetch_related( Prefetch('user_addresses', queryset=Address.objects.filter(current=True)))\

            if(params.get('sort') and str(params.get('sort'))=="name"):
                   queryset=queryset.order_by('name')
            elif(params.get('sort') and str(params.get('sort'))=="lastname"):
                   queryset=queryset.order_by('last_name')

            elif(params.get('sort') and str(params.get('sort'))=="email"):
                   queryset=queryset.order_by('email')

            elif(params.get('sort') and str(params.get('sort'))=="role"):
                   queryset=queryset.order_by('role')

            elif(params.get('sort') and str(params.get('sort'))=="department"):
                   queryset=queryset.order_by('department')
        
            if(params.get('text')):
               queryset=queryset.filter(Q(name__icontains=params.get('text'))|Q(last_name__icontains=params.get('text')) \
               |Q(email__icontains=params.get('text')))

            return queryset

         


