from django.shortcuts import render

def inicio(request):
    return render(request, 'index.html')  # Asegúrate de tener esta plantilla

def menu(request):
    return render(request, 'menu.html')  # Asegúrate de tener esta plantilla

def iniciar_sesion(request):
    return render(request, 'iniciar_sesion.html')  # Asegúrate de tener esta plantilla

def ubicacion(request):
    return render(request, 'ubicacion.html')
