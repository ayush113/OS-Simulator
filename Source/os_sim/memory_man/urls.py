from django.urls import path

from . import views

urlpatterns = [
    path('best/',views.best,name='best'),
    path('first/',views.first,name='first'),
    path('worst/',views.worst,name='worst'),
    path('mvt/',views.mvt,name='mvt'),
    path('mvt2/',views.mvt2,name='mvt2')
]
