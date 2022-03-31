from zoneinfo import available_timezones
from rest_framework import serializers
from .models import Cart , Product



class CartSerializer(serializers.ModelSerializer):
    id = serializers.UUIDField(read_only = True)
    class Meta:
        model = Cart
        fields = ['id']


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields = ['id','title','description','price','image','availablePacks']