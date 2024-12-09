from django.contrib import admin
from .models import Task
# Register your models here.

@admin.register
class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'priority', 'due_date', 'category', 'completed', 'created_at')
    list_filter = ('priority', 'category', 'completed',)