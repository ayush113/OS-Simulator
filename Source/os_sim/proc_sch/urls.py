from django.urls import path

from . import views

urlpatterns = [
    path('scheduling/',views.fcfsi,name='scheduling'),
    path('processing/',views.processing,name='process'),
    path('processing/result',views.res,name='res')
]
