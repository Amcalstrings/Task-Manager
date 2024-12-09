from django.db import models

# Create your models here.
class Task(models.Model):
    
    PRIORITY_CHOICES = [
        ('Low', 'Low'),
        ('Medium', 'Medium'),
        ('High', 'High'),
    ]
    
    CATEGORY_CHOICES = [
        ('Work', 'Work'),
        ('Personal', 'Personal'),
        ('Other', 'Other'),
    ]
    
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True,null=True)
    priority = models.CharField(max_length=10, choices=PRIORITY_CHOICES, default='Low')
    due_date = models.DateField(blank=True, null=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='Work')
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title