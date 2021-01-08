from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from . models import *
from .serializers import *
from django.shortcuts import render

from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import status

class ProductList(APIView):
    def get(self, request):
        romms = Product.objects.all()
        serializer = ProductSerializers(romms, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ProductSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class PostList(APIView):
#     def get(self, request):
#         romms = Post.objects.all()
#         serializer = PostSerializers(romms, many=True)
#         return Response(serializer.data)
#
#     def post(self, request, format=None):
#         serializer = PostSerializers(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

