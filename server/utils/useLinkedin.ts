import axios from 'axios'


export function useLinkedin(url: string, title: string, desc: string) {
  const {
    linkedinAPIAccessToken,
    LinkedinAPIURN,
  } = useRuntimeConfig();

      axios.post('https://api.linkedin.com/v2/ugcPosts', {
        "author": LinkedinAPIURN,
        "lifecycleState": "PUBLISHED",
        "specificContent": {
            "com.linkedin.ugc.ShareContent": {
                "shareCommentary": {
                    "text": `${desc}

                    Check it out: ${url}
                    
                    #indiehacker #buildinpublic #learninpublic
                    `
                },
                "shareMediaCategory": "ARTICLE",
                "media": [
                  {
                      "status": "READY",
                      "description": {
                          "text": 'Buid in public notes'
                      },
                      "originalUrl": url,
                      "title": {
                          "text": title
                      }
                  }
              ]
            }
        },
        "visibility": {
            "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
        }
    }, {
      headers: {
        'X-Restli-Protocol-Version': '2.0.0',
        'Authorization': `Bearer ${linkedinAPIAccessToken}`
      }
    })
}
