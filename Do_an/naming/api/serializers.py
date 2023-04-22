from rest_framework.serializers import ModelSerializer
from naming.models import firstname, lastname, post



class firstnameSerializers(ModelSerializer):
    class Meta: 
        model = firstname
        fields = "__all__"


class lastnameSerializers(ModelSerializer):
    class Meta:
        model = lastname
        fields = "__all__"


class postSerializers(ModelSerializer):
    class Meta:
        model = post
        fields = "__all__"