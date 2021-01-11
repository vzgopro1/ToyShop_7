from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('serializers/', include('item.urls')),
    path('', include('product.urls'))
]
