from . views import *
from django.urls import path

urlpatterns = [
    path('Product/', ProductList.as_view()),
    # path('Store/', ProductList.as_view()),
    path('Post/', ProductList.as_view()),
    path('Trade/', TradeList.as_view()),
    path('MaterialsCategory/', MaterialsCategoryList.as_view()),
    path('post_test/', post_test)
]
