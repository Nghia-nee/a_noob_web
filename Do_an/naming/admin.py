from django.contrib import admin
from .models import firstname, lastname, post


admin.site.register(firstname)
class firstnameAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'theme', 'gender', 'origin')
    search_fields = ('theme', 'gender', 'origin')
    list_filter = ('gender', 'origin')


admin.site.register(lastname)
class lastnameAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'origin')
    search_fields = ('last_name', 'origin')


admin.site.register(post)
