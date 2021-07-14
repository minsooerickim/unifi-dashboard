"""my_unifi_django URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.contrib.auth import login, logout
from django.urls import path
from django.urls import include, path
from rest_framework import routers
from my_unifi_api import views
from django.views.generic import TemplateView

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include(router.urls)),
    path('home/', views.home, name='home'),
    path('home/casting', views.casting, name='casting'),
    path('home/marketing', views.marketing, name='marketing'),
    path('home/creative', views.creative, name='creative'),
    path('home/tech', views.tech, name='tech'),
    path('', views.login),
    path('logout', views.logout_user, name='logout'),
    path('', include('social_django.urls', namespace='social'))
]
