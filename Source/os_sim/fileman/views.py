from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'fileman/fcfs.html')

def process(request):
    if (request.method == "POST"):
        data = request.POST
        print (data)
