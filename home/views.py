import os
from json import loads

from django.http import HttpResponseRedirect, HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from home.models import UserIdList, UserData


def start(request):
    if request.method == "GET":
        print('************************ inside get method *******************')
        return render(request, 'user_regis.html')


@csrf_exempt
def registration(request):
    if request.method == "POST":
        print('**************** inside post method ***********')
        print('1')
        if request.is_ajax():
            # =========Increment of Reference ID ========================
            try:
                this_user_id = int(UserIdList.objects.all().last().user_id) + 1
                print("---0----")
                UserIdList.objects.create(user_id=this_user_id)
                print(this_user_id)
            except Exception as e:
                print("Start reference Id from 1", e)
                this_user_id = 7001
                print("---0----")
            this_user_id_instance = UserIdList.objects.get(user_id=this_user_id)
            print(" id...will used as Foreign Key", this_user_id_instance)

            # ====================Load image into server===============================
            try:
                file_name = request.POST.get('img_path')
                while True:
                    try:
                        folder = 'static/media/user_images/' + str(this_user_id) + '/'
                        os.mkdir(os.path.join(folder))
                        break
                    except Exception as e:
                        print("Error creating folder ", e)
                        this_user_id = this_user_id + 1
                print("image=", file_name)
                fout = open(folder + file_name, 'w')
                file_content = request.FILES.get('img').read()
                # for chunk in file_content.chunks():
                fout.write(file_content)
                fout.close()
            except Exception as e:
                image = 'image'
                print("Image upload error :", e)
            # ===========set the path of uploaded user image======================
            image_path = "user_images/" + str(this_user_id) + "/" + str(file_name)
            print(image_path)
            print("---0.image---")
            # ===========load payment slip into server======================
            try:
                file_name = request.POST.get('fl_path')
                while True:
                    try:
                        folder = 'static/media/user_pslip/' + str(this_user_id) + '/'
                        os.mkdir(os.path.join(folder))
                        break
                    except Exception as e:
                        print("Error creating folder ", e)
                        this_user_id = str(int(this_user_id) + 1)
                print("fl=", file_name)
                fout = open(folder + file_name, 'w')
                file_content = request.FILES.get('fl').read()
                # for chunk in file_content.chunks():
                fout.write(file_content)
                fout.close()
            except Exception as e:
                file = 'file'
                print("file upload error :", e)
            # ===========set the path of uploaded user payment slip======================
            file_path = "user_pslip/" + str(this_user_id) + "/" + str(file_name)
            print(file_path)
            print("---0.1234---")
            # ----------------------Receiveing data from jS-----------------------------

            try:
                register_data = request.POST.get('user-data')
                print("---DATA got----")
                print(register_data, 'register data')
            except Exception as e:
                print("Error on getting data :", e)
            try:
                register_data = loads(register_data)
                print("---JSON loads done----")
            except Exception as e:
                print("Error on JSON loads ", e)

            try:
                UserData.objects.create(user_id=this_user_id_instance,
                                        first_name=register_data['first_name'],
                                        father_name=register_data['father_name'],
                                        mobile=int(register_data['number']), email=register_data['email'],
                                        location=register_data['father_name'],
                                        pin_number=register_data['pin_number'], dob=register_data['dob'],
                                        image=image_path, salary_slip=file_path)
                print("success")
                json_data = {'response': 'success'}
                return JsonResponse(json_data)
            except Exception as e:
                print("not save data into db", e)

    return render(request, 'index.html')


    # data = {}
    # try:
    #     if request.is_ajax():
    #         this_user_id = 700
    #         print(this_user_id, 'one')
    #         UserIdList.objects.create(user_id=this_user_id)
    #         this_user_id_instance = UserIdList.objects.get(user_id=this_user_id)
    #         print(" id...will used as Foreign Key", this_user_id_instance)
    # except Exception as e:
    #     print(e)
    # try:
    #     file_name = request.POST.get('img_path')
    #     while True:
    #         try:
    #             folder = 'static/media/user_images/' + str(this_user_id) + '/'
    #             os.mkdir(os.path.join(folder))
    #             break
    #         except Exception as e:
    #             print("Error creating folder ", e)
    #             this_user_id = this_user_id + 1
    #     print("image=", file_name)
    #     fout = open(folder + file_name, 'w')
    #     file_content = request.FILES.get('img').read()
    #     # for chunk in file_content.chunks():
    #     fout.write(file_content)
    #     fout.close()
    # except Exception as e:
    #     image = 'image'
    #     print("Image upload error :", e)
    #     # ===========set the path of uploaded user image======================
    #     image_path = "user_images/" + str(this_user_id) + "/" + str(file_name)
    #     print(image_path)
    #     print("---0.5---")
    #     try:
    #         file_name = request.POST.get('fl_path')
    #         while True:
    #             try:
    #                 folder = 'static/media/user_images/' + str(this_user_id) + '/'
    #                 os.mkdir(os.path.join(folder))
    #                 break
    #             except Exception as e:
    #                 print("Error creating folder ", e)
    #                 this_user_id = str(int(this_user_id) + 1)
    #         print("fl=", file_name)
    #         fout = open(folder + file_name, 'w')
    #         file_content = request.FILES.get('fl').read()
    #         # for chunk in file_content.chunks():
    #         fout.write(file_content)
    #         fout.close()
    #     except Exception as e:
    #         file = 'file'
    #         print("file upload error :", e)
    #         # ===========set the path of uploaded user payment slip======================
    #         file_path = "user_images/" + str(this_user_id) + "/" + str(file_name)
    #         print(file_path)
    #         print("---0.5---")
    #     # ----------------------Receiveing data from jS-----------------------------
    #
    #     try:
    #         register_data = request.POST.get('user-data')
    #         print("---DATA got----")
    #     except Exception as e:
    #         print("Error on DATA gettings :", e)
    #     try:
    #         register_data = loads(register_data)
    #         print("---JSON loads done----")
    #     except Exception as e:
    #         print("Error on JSON loads ", e)
    #     UserData.objects.create(user_id=this_user_id_instance,
    #                             first_name=register_data['first_name'],
    #                             father_name=register_data['father_name'],
    #                             number=int(register_data['number']), email=register_data['email'],
    #                             location=register_data['father_name'],
    #                             pin_number=register_data['pin_number'], dob=register_data['dob'],
    #                             image=image_path, salary_slip=file_path)
    #     print("success")
    #     json_data = {'response': 'success'}
