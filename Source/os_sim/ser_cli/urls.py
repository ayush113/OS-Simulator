from django.urls import path

from . import views

urlpatterns = [

    path('tcp/',views.tcp,name = 'tcp'),
    path('udp/',views.udp,name='udp')
]
