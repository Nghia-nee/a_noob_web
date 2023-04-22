from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView    
from rest_framework.response import Response
 
from .serializers import firstnameSerializers, lastnameSerializers, postSerializers 
from naming.models import firstname, lastname, post



class firstnameViewSet(ModelViewSet):
    queryset = firstname.objects.all()
    serializer_class = firstnameSerializers


class lastnameViewSet(ModelViewSet):
    queryset = lastname.objects.all()
    serializer_class = lastnameSerializers


class postViewSet(ModelViewSet):
    queryset = post.objects.all()
    serializer_class = postSerializers



