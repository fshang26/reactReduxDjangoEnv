from rest_framework.generics import ListAPIView

#from rest_framework.viewsets import ModelViewSet
#from rest_framework import permissions

from .serializers import ListSerializer, CardSerializer
from .models import List, Card

#class ListViewSet(ModelViewSet):
class ListApi(ListAPIView):
	queryset = List.objects.all()
	serializer_class = ListSerializer
	#permission_classes = (permissions.IsAuthenticated,)


#class CardViewSet(ModelViewSet):
class CardApi(ListAPIView):
	queryset = Card.objects.all()
	serializer_class = CardSerializer
	#permission_classes = (permissions.IsAuthenticated,)
	