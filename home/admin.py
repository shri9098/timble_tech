from django.contrib import admin
from home.models import UserData, UserIdList


class UserDataAdmin(admin.ModelAdmin):
    readonly_fields = ['image', 'salary_slip']
    list_display = ["id", "user_id", "location", "first_name", "father_name", "mobile", "pin_number", "email", "dob",
                    "salary_slip", "image",
                    "created_at", "updated_at"]


admin.site.register(UserData, UserDataAdmin)


class UserIdListAdmin(admin.ModelAdmin):
    list_display = ["id", "user_id"]


admin.site.register(UserIdList, UserIdListAdmin)