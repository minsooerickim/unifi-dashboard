import requests, json
from django.shortcuts import render
from django.shortcuts import redirect
from django.contrib.auth.models import User, Group
from django.contrib.auth import logout as auth_logout
from django.contrib.auth.decorators import login_required
from rest_framework import viewsets
from rest_framework import permissions
from my_unifi_api.serializers import UserSerializer, GroupSerializer
from .functions import set_intern_groups

def login(request):
    return render(request, 'login.html')

def logout_user(request):
    auth_logout(request)
    return redirect('/')

def home(request):
    set_intern_groups(request)
    if (request.user.is_authenticated):
       return render(request, 'build/index.html')
    return redirect('/')

def casting(request):
    if request.user.groups.filter(name = 'Casting Intern').exists():
        return render(request, '/home/#/casting')
    return redirect('/')

def marketing(request):
    if request.user.groups.filter(name = 'Marketing Intern').exists():
        return render(request, '/home/#/marketing')
    return redirect('/')

def creative(request):
    if request.user.groups.filter(name = 'Creative Intern').exists():
        return render(request, '/home/#/creative')
    return redirect('/')

def tech(request):
    if request.user.groups.filter(name = 'Tech Intern').exists():
        return redirect('/home/#/tech')
    return redirect('/')

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]
