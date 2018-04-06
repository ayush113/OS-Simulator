from django.shortcuts import render

# Create your views here.
def best(request):
    return render(request,'memory_man/best.html')

def first(request):
    return render(request,'memory_man/first.html')

def worst(request):
    return render(request,'memory_man/worst.html')
