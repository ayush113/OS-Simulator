from django.shortcuts import render
from .models import sendproc
# Create your views here.
def fcfs(request):
    #if(request.method == 'POST'):
        #data = sendproc()
# Take a form input i.e. switch html syntax with django forms ?
# Use Json and httprequests like Kaushik to send data
#Define view functions to handle the data
#Define another JS file/script for handling the output data
    return render(request,'proc_sch/fcfs.html')
