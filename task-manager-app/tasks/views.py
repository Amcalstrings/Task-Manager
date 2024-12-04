from rest_framework.viewsets import ModelViewSet
from .models import Task
from .serializers import TaskSerializer
# Create your views here.

class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all().order_by('-created_at')
    serializer_class = TaskSerializer