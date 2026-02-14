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
    league_details=LeagueSerializer(source='league',read_only=True)
    country_details=CountrySerializer(source='country',read_only=True)
    characterestics_names=serializers.SerializerMethodField()

    class Meta:
        model=CricketBoard
        fields='__all__'
        
    def get_characterestics_names(self,obj):
        return [char.name for char in obj.characterestics.all()]