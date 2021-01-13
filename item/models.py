from django.db import models
from django.contrib.auth.models import User

TRADE_STATUS_CHOICES = (
    ('processing', 'Processing'),
    ('order', 'Order'),
)


class ProductCategory(models.Model):
    title = models.CharField(max_length=15)


# class Store(models.Model):
#     title = models.CharField(max_length=50)
#     phone = models.CharField(max_length=15)
#     emile = models.EmailField()
#     flat = models.CharField(max_length=12)
#     street = models.CharField(max_length=25)
#     city = models.CharField(max_length=25)
#
#     def __str__(self):
#         return self.title

class MaterialsCategory(models.Model):
    title = models.CharField(max_length=30)

    def __str__(self):
        return self.title

class Product(models.Model):
    title = models.CharField(max_length=45)
    price = models.IntegerField()
    history = models.TextField()
    category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE)
    fromAge = models.SmallIntegerField()
    mainMaterial = models.ForeignKey(MaterialsCategory, on_delete=models.CASCADE)
    addedDate = models.DateTimeField()
    image = models.ImageField(upload_to='Products/')

    def __str__(self):
        return str(self.id)

class Post(models.Model):
    title = models.CharField(max_length=50)
    descriptions = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    views = models.IntegerField()
    likes = models.IntegerField()
    # language
    postDate = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to='Posts/')

    def __str__(self):
        return str(self.id)

class Trade(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    status = models.CharField(max_length=35, choices=TRADE_STATUS_CHOICES)
    address = models.CharField(max_length=65)

class Language1(models.Model):
    menu_text1 = models.CharField(max_length=25)
    menu_text2 = models.CharField(max_length=25)
    menu_text3 = models.CharField(max_length=25)
    category_text = models.CharField(max_length=35)
    category_name = models.CharField(max_length=25)
    category_name2 = models.CharField(max_length=25)
    category_name3 = models.CharField(max_length=25)
    signup_text = models.CharField(max_length=35)
    login_text = models.CharField(max_length=35)

    def __str__(self):
        return str(self.id)