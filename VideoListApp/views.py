from django.shortcuts import render
from django.http import JsonResponse
import urllib.parse
import urllib.request 
import bs4 as bs

def index(request):
    return render(request,'videolistapp/index.html')

def LoadVideoList(request):
    #Thrasher HTML
    url = 'http://www.thrashermagazine.com/articles/videos/'
    user_agent = 'Mozilla/5.0 (Windows NT 6.1; Win64; x64)'
    values = {'name': 'Michael Foord',
            'location': 'Northampton',
            'language': 'Python' }
    headers = {'User-Agent': user_agent}

    data = urllib.parse.urlencode(values)
    data = data.encode('ascii')
    req = urllib.request.Request(url, data, headers)
    with urllib.request.urlopen(req) as response:
        the_page = response.read()

    soup = bs.BeautifulSoup(the_page, 'lxml')

    #Global variables
    data = []
    ThrasherTitles = []

    VideoCount = 0
    #Load Video titles
    for ulElement in soup.find_all('ul', class_='post-list'):
        for liElement in ulElement.find_all('li', class_='post-list-item'):
            dvDescription = liElement.find('div', class_='share-socials')
            aElementImage = liElement.find('a', class_='post-thumb-link')
            imgElementImage = aElementImage.find('img', class_='post-thumb')
            for h4Element in liElement.find_all('h4'):
                ThrasherTitles.append(h4Element.text)
                aElement = h4Element.find('a')
                data.append({
                    'id': VideoCount,
                    'title': h4Element.text,
                    'url': aElement['href'],
                    'description': dvDescription['data-text'],
                    'imageurl': imgElementImage['src']
                })
                VideoCount += 1

    return JsonResponse(data, safe=False)