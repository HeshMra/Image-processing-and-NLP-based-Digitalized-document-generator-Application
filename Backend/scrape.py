import pandas as pd
from pydoc import describe
from googleapiclient.discovery import build

def google_search(
                search_term, 
                google_cse_id = "aebe2e8be954ada8a",
                google_api_key = "AIzaSyCahDjLDF1S0YOF6m18nbcPFGIB6G7GlLo",
                num=10
                ):
    service = build("customsearch", "v1", developerKey=google_api_key)
    api_json = service.cse().list(q=search_term, cx=google_cse_id, num=num).execute()
    return api_json

def get_entire_web_google_results(search_term):
    api_json = google_search(search_term)
    results = api_json['items']
    result_dict = {}
    result_dict['title'] = []
    result_dict['description'] = []
    result_dict['DOI'] = []
    result_dict['image_url'] = []

    for result in results:
        title = result['title'] if 'title' in result else ''
        description = result['snippet'] if 'snippet' in result else ''
        DOI = result['link'] if 'link' in result else ''

        pagemap = result['pagemap'] if 'pagemap' in result else {}
        try:
            if 'cse_image' in pagemap:
                image_url_src = pagemap['cse_image'][0]
                if 'src' in image_url_src:
                    image_url = image_url_src['src']

            elif "cse_thumbnail" in pagemap:
                image_url_src = pagemap['cse_thumbnail'][0]
                if 'src' in image_url_src:
                    image_url = image_url_src['src']
            else:
                image_url = ''
        except:
            image_url = ''

        result_dict['title'].append(title)
        result_dict['description'].append(description)
        result_dict['DOI'].append(DOI)
        result_dict['image_url'].append(image_url)

    result_df = pd.DataFrame(result_dict)
    return result_df