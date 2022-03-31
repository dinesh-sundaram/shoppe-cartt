from django.urls import path,include
from rest_framework import routers
from . import views


cartrouter = routers.DefaultRouter()

# cartrouter.register('', views.index)
cartrouter.register('carts', views.CartViewSet)
cartrouter.register('products', views.ProductViewSet)

urlpatterns =  cartrouter.urls
    

