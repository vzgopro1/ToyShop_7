from django.shortcuts import render

def page_not_found(request, pnf):
    return render(request, 'page_not_found.html', {})

def HomePage(request):
    return render(request, 'index.html', {})
#xwxw