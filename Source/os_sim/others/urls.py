from django.urls import path

from . import views

urlpatterns=[
    path('disksched/',views.disksched,name='disk'),
    path('pagereplace/',views.page,name='page')
]
