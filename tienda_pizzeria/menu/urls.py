from django.contrib import admin
from django.urls import path
from menu import views  # Asegúrate de importar las vistas del archivo views.py en la app "menu"

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.inicio, name='inicio'),  # Redirige la URL raíz a la vista de inicio
    path('menu/', views.menu, name='menu'),
    path('iniciar_sesion/', views.iniciar_sesion, name='login'),
    path('ubicacion/', views.ubicacion, name='ubicacion'),
]


