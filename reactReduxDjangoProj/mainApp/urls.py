#from .api import ListViewSet, CardViewSet
#from rest_framework.routers import DefaultRouter

#router = DefaultRouter()
#router.register(r'lists', ListViewSet)
#router.register(r'cards', CardViewSet)

#urlpatterns = router.urls

from django.conf.urls import url

from .api import ListApi, CardApi

urlpatterns =[
  url(r'^lists$', ListApi.as_view()),
  url(r'^cards$', CardApi.as_view())  
]