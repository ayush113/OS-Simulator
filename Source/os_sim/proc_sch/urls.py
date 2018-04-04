from django.urls import path

from . import views

urlpatterns = [
    path('scheduling/',views.fcfs,name='scheduling'),
]
