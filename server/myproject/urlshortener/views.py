import pyshorteners
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def shorten_url(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            long_url = data.get('url')

            if not long_url:
                return JsonResponse({'error': 'URL not provided'}, status=400)

            # Initialize pyshorteners
            s = pyshorteners.Shortener()

            # Shorten the URL using TinyURL (or you can use other services like Bitly)
            short_url = s.tinyurl.short(long_url)

            return JsonResponse({'short_url': short_url})
        
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    
    return JsonResponse({'error': 'Invalid method'}, status=405)
