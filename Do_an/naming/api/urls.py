from rest_framework.routers import DefaultRouter
from .views import firstnameViewSet, lastnameViewSet, postViewSet
from django.urls import path, include


router = DefaultRouter()
router.register('firstname', firstnameViewSet, basename='firstnameViewSet')
router.register('lastname', lastnameViewSet, basename='lastnameViewSet')
router.register('post', postViewSet, basename='postViewSet')


urlpatterns = [
    path('', include(router.urls)),
]