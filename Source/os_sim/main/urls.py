from django.urls import path

from . import views

urlpatterns=[
    path('',views.index),
    path('ind/',views.back,name="index2")
]
