from django.shortcuts import render

# Create your views here.
def dining(request):
    return render(request,'proc_sync/dining.html')

def producer(request):
    return render(request,'proc_sync/producer_consumer.html')

def reader(request):
    return render(request,'proc_sync/ReaderWriter.html')
