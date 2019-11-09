from django.db import models
from datetime import date


# Create your models here.
class UserIdList(models.Model):
    user_id = models.CharField(max_length=120, blank=False, null=False)
    mock_data = models.BooleanField(default=False)

    def __unicode__(self):
        return str(self.user_id)


class UserData(models.Model):
    user_id = models.ForeignKey(UserIdList, on_delete=models.CASCADE, db_column='UserIdList'
                                                                                '.user_id')
    location = models.CharField(max_length=120, blank=True, null=True)
    first_name = models.CharField(max_length=120, blank=True, null=True)
    father_name = models.CharField(max_length=120, blank=True, null=True)
    mobile = models.BigIntegerField(blank=True, null=True)
    pin_number = models.BigIntegerField(blank=True, null=True)
    email = models.EmailField(max_length=120, blank=True, null=True)
    dob = models.CharField(max_length=10, default=date.today, blank=False, null=False)
    image = models.ImageField(upload_to='media/user_images/', default="media/user_images/icon.png")
    salary_slip = models.FileField(upload_to='media/user_file/', default="media/user_images/icon.png")
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)

    def __unicode__(self):
        return str(self.user_id)

    def image_(self):  # ,obj):
        return '<img src="%s" width="68" height="80" />' % self.image.url

    image_.allow_tags = True
    image_.short_description = 'image'