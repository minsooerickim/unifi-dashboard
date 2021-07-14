import requests, json
from django.contrib.auth.models import User, Group

def set_intern_groups(request):
    if (request.user.is_authenticated):
        # Defining each of the groups within Django configuration
        intern_group = Group.objects.get(name='Intern')
        creative_group = Group.objects.get(name='Creative Intern')
        casting_group = Group.objects.get(name='Casting Intern')
        marketing_group = Group.objects.get(name='Marketing Intern')
        tech_group = Group.objects.get(name='Tech Intern')

        # Getting user authentication and calling the Workspace Admin SDK API
        # Loading the .json information into a python dictionary
        current_user = request.user
        user = User.objects.get()
        social = user.social_auth.get(provider='google-oauth2')
        user_email = "https://www.googleapis.com/admin/directory/v1/groups?userKey=" + current_user.email
        response = requests.get(
        user_email,
        params={'access_token': social.extra_data['access_token']}
        )
        data = json.loads(response.text)
        groupArray = data['groups']

        # Checking what Google Workspace groups the user is in by iteration..
        # .. and placing them into their equivalent Django groups
        counter = 0
        for i in range(len(groupArray)):
            if (groupArray[i]['email'] == "intern.casting@unifi.org"):
                intern_group.user_set.add(current_user.id)
                casting_group.user_set.add(current_user.id)
            if (groupArray[i]['email'] == "intern.creative@unifi.org"):
                intern_group.user_set.add(current_user.id)
                creative_group.user_set.add(current_user.id)
            if (groupArray[i]['email'] == "intern.marketing@unifi.org"):
                intern_group.user_set.add(current_user.id)
                marketing_group.user_set.add(current_user.id)
            if (groupArray[i]['email'] == "intern.tech@unifi.org"):
                intern_group.user_set.add(current_user.id)
                tech_group.user_set.add(current_user.id)
            counter+= 1