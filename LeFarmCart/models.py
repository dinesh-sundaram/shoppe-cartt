from django.db import models
from uuid import uuid4
from django.core.validators import MinValueValidator

# Create your models here.

class Product(models.Model):
    PACK_SMALL = 'S'
    PACK_MEDIUM = 'M'
    PACK_LARGE = 'L'
    PACK_FAMILY = 'F'
    
    PACK_CHOICES = [(PACK_SMALL , 'SMALL'),
                    (PACK_MEDIUM , 'MEDIUM'),
                    (PACK_LARGE , 'LARGE'),
                    (PACK_FAMILY , 'FAMILY')
                ]

    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    price = models.DecimalField(
        max_digits=6,
        decimal_places=2,
        validators=[MinValueValidator(1)])
    image = models.CharField(max_length=100)
    availablePacks = models.CharField( max_length=1, choices=PACK_CHOICES, default=PACK_SMALL)
    # inventory = models.IntegerField(validators=[MinValueValidator(0)])
    # last_update = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.title

    class Meta:
        ordering = ['title']


class Cart(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4)
    created_at = models.DateTimeField(auto_now_add=True)

class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveSmallIntegerField()

    class Meta:
        unique_together = ['cart','product']