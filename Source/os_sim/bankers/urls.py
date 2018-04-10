from django.urls import path

from . import views

urlpatterns=[
path('bankers/',views.bank,name='banker')
]
