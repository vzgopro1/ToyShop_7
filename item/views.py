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
from django.contrib.auth.models import User

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

class PostList(APIView):
    def get(self, request):
        romms = Post.objects.all()
        serializer = PostSerializers(romms, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = PostSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TradeList(APIView):
    def get(self, request):
        romms = Trade.objects.all()
        serializer = TradeSerializers(romms, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = TradeSerializers(data=request.data)
        if serializer.is_valid():
            # username = request.data.get['address']
            # print(username)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MaterialsCategoryList(APIView):
    def get(self, request):
        romms = MaterialsCategory.objects.all()
        serializer = MaterialsCategorySerializers(romms, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = MaterialsCategorySerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class Language1List(APIView):
    def get(self, request):
        romms = Language1.objects.all()
        serializer = Language1Serializers(romms, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = Language1Serializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginList(APIView):
    def get(self, request):
        romms = User.objects.all()
        serializer = LoginSerializers(romms, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = LoginSerializers(data=request.data)
        if serializer.is_valid():
            try:
                username = User.objects.get(username__exact=request.data['username'])
                password = User.objects.get(password__exact=request.data['password'])
            except:
                print("NO")
                return Response(status=status.HTTP_400_BAD_REQUEST)
            # serializer.save()]
            print("YES")
            return Response(serializer.data, status=status.HTTP_200_OK)
