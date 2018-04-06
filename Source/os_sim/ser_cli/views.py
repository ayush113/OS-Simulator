from django.shortcuts import render

# Create your views here.
def tcp(request):
    return render(request,'ser_cli/tcp.html')

def udp(request):
    return render(request,'ser_cli/udp.html')
