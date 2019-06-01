from django.urls import path 
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('LoadVideoList/', views.LoadVideoList , name='LoadVideoList'),
]
