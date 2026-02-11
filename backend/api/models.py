from django.db import models

# Create your models here.
class Country(models.Model):
    name=models.CharField(unique=True,max_length=100)
    created=models.DateField(auto_now_add=True)
    modified=models.DateField(auto_now=True)

    def __str__(self):
        return self.name
    

    
class League(models.Model):
    name=models.CharField(unique=True,max_length=100)
    created=models.DateField(auto_now_add=True)
    modified=models.DateField(auto_now=True)

    def __str__(self):
        return self.name
    

    
class Characterestic(models.Model):
    name=models.CharField(unique=True,max_length=100)
    created=models.DateField(auto_now_add=True)
    modified=models.DateField(auto_now=True)

    def __str__(self):
        return self.name
    
    
class CricketBoard(models.Model):
    name=models.CharField(unique=True,max_length=100)
    description=models.CharField(max_length=100)
    attendance=models.IntegerField(null=True)
    city=models.CharField(max_length=100)
    country=models.ForeignKey(Country,on_delete=models.CASCADE)
    league=models.ForeignKey(League,on_delete=models.CASCADE)
    characterestics=models.ManyToManyField(Characterestic)
    created=models.DateField(auto_now_add=True)
    modified=models.DateField(auto_now=True)

    def __str__(self):
        return self.name
    
    
