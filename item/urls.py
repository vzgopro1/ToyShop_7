from . views import *
from django.urls import path

urlpatterns = [
    path('Product/', ProductList.as_view()),
    path('Store/', ProductList.as_view()),
    path('Post/', ProductList.as_view())
]
