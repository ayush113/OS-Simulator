from django.shortcuts import render,redirect,render_to_response
from django.urls import reverse_lazy
from .models import sendproc
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse,HttpResponseRedirect
from .utils import rr,fcfs,sjf,prepri
# Create your views here.
global context
def fcfsi(request):
        #data = sendproc()
# Take a form input i.e. switch html syntax with django forms ?
# Use Json and httprequests like Kaushik to send data
#Define view functions to handle the data
#Define another JS file/script for handling the output data
    return render(request,'proc_sch/fcfs.html')

def res(request):
    return render(request,'proc_sch/result.html')

@csrf_exempt
def processing(request):
    context =dict()
    if(request.method == "POST"):
        data = request.POST
        algo = data.get('algo')
        algo = json.loads(algo)
        data = dict(data)
        at = data['at[]']
        bt = data['bt[]']
        if(algo == 'rr'):
            print("RR")
            tq = data['timeq']
            tq = int(tq[0][1])
            comp = []
            j=0
            for i in at:
                di = dict()
                di['at'] = int(at[j][1])
                di['bt'] = int(bt[j][1])
                di['no'] = j+1
                j = j + 1
                comp.append(di)
            result = rr(comp,tq)
            print(result)
        elif(algo == "fcfs"):
            print("FCFS")
            comp = []
            j=0
            for i in at:
                di = dict()
                di['at'] = int(at[j][1])
                di['bt'] = int(bt[j][1])
                di['no'] = j+1
                j= j + 1
                comp.append(di)
            result = fcfs(comp)
            print(result)
        elif(algo== "sjf"):
            print("SJF")
            comp = []
            j=0
            for i in at:
                di = dict()
                di['at'] = int(at[j][1])
                di['bt'] = int(bt[j][1])
                di['no'] = j+1
                j= j + 1
                comp.append(di)
            result = sjf(comp)
            print(result)
        elif(algo == "priority"):
            print("Priority")
            comp = []
            j=0
            priority = data['priorities[]']
            for i in at:
                di = dict()
                di['at'] = int(at[j][1])
                di['bt'] = int(bt[j][1])
                di['pri'] = int(priority[j][1])
                di['no'] = j+1
                j=j+1
                comp.append(di)
            result = prepri(comp)
            print(result)
            context= {
            'res': result
            }
    return JsonResponse(result,safe=False)
    #return render(request,'proc_sch/result.html')
    #return HttpResponseRedirect('/')
    #return redirect(reverse_lazy('res'))
    #return render_to_response(request,'proc_sch/result.html',context)
