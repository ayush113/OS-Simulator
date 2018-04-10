from django.shortcuts import render

# Create your views here.
def disksched(request):
    return render(request,'others/disk_scheduling.html')

def page(request):
    return render(request,'others/pageReplacement.html')
