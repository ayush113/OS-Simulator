from django.urls import path

from . import views

urlpatterns = [
    path('dining/',views.dining,name='dining'),
    path('producer/',views.producer,name='producer'),
    path('reader/',views.reader,name='reader'),
    path('sleeping/',views.sleep,name='sleep'),
    path('cigarette/',views.cigarette,name='cigg')
]
