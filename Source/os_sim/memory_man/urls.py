from django.urls import path

from . import views

urlpatterns = [
    path('best/',views.best,name='best'),
    path('first/',views.first,name='first'),
    path('worst/',views.worst,name='worst')
]
