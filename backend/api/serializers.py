from rest_framework import serializers
from .models import * 

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model=Country
        fields=('id','name')
        
        
class LeagueSerializer(serializers.ModelSerializer):
    class Meta:
        model=League
        fields=('id','name')
        
class CharacteresticSerializer(serializers.ModelSerializer):
    class Meta:
        model=Characterestic
        fields=('id','name')
        
class CrickerBoardSerializer(serializers.ModelSerializer):
    class Meta:
        model=CricketBoard
        fields='__all__'
        
