export default function handler(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.json(
      {
        "photos": [
          {
            "id": "1110",
            "tagline": "You're looking at me punk?",
            "image": "927756_283684128492129_838664181_n",
            "likes": 4,
            "comments": [
              {
                "user": "rex2018",
                "body": "Hey this is dope! xxx"
              },
              {
                "user": "grasSHopper",
                "body": "This has given me few ideas"
              },
              {
                "user": "TheReal2pac",
                "body": "Thug 4 life, that's all I have to say"
              },
              {
                "user": "AUREL KURTULA",
                "body": "THIS IS ABOUT KURTULA"
              }
            ]
          },
          {
            "id": "002",
            "tagline": "They say big heads are cleaver #smartass",
            "image": "10547074_1533921633486350_110615324_n",
            "likes": 2,
            "comments": [
              {
                "user": "pantherXXX",
                "body": "#smartass indeed baby xxx"
              },
              {
                "user": "shiningRod",
                "body": "Talk about magical"
              },
              {
                "user": "TheReal2pac",
                "body": "I ain't feelin' this one homeboy"
              }
            ]
          },
          {
            "id": "003",
            "tagline": "tongue and hand! You'll get it!",
            "image": "10584559_835284339817092_1481087900_n",
            "likes": 0,
            "comments": [
              {
                "user": "johnDope",
                "body": "My brother did anyone tell you you've got talent"
              },
              {
                "user": "aurelkurtula",
                "body": "@johnDope dad! Is that you?"
              },
              {
                "user": "johnDope",
                "body": "no son. By the way, come down for dinner"
              },
              {
                "user": "bla bla bla",
                "body": "bli bli bli"
              }
            ]
          },
          {
            "id": "004",
            "tagline": "You f*ed my nose man, get that rubber and fix it #shitartist. add more content here",
            "image": "10593244_721194281250987_220088259_n",
            "likes": 0,
            "comments": [
              {
                "user": "rex2018",
                "body": "Why you gone and messed his nose man"
              },
              {
                "user": "grasSHopper",
                "body": "#shitartist my behind, you' good boy"
              },
              {
                "user": "aurelkurtula",
                "body": "Ma? is that you?"
              }
            ]
          },
          {
            "id": "005",
            "tagline": "What's so funny",
            "image": "10597456_1519924261553666_1863286978_n",
            "likes": 0,
            "comments": [
              {
                "user": "rex2018",
                "body": "Hey this is dope! xxx"
              },
              {
                "user": "grasSHopper",
                "body": "This has given me few ideas"
              },
              {
                "user": "TheReal2pac",
                "body": "Thug 4 life, that's all I have to say"
              },
              {
                "user": "Loop",
                "body": "This is the comment"
              }
            ]
          }
        ]
      }
    )
  }