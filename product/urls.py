from . views import *
from django.urls import path

urlpatterns = [
    path('<str:pnf>/', page_not_found),
    path('', HomePage)
]
