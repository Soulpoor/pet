#### Root
- POST:  localhost:8000/sing-in
- POST:  localhost:8000/sing-out
- POST:  localhost:8000/sing-up
```
# sign-in payload:
{
	"username": "lucy",
	"password": "123"
}
# sign-up payload:
{
    "firstname" : "lucy",
    "lastname" : "John",
    "password" : "123",
    "email" : "lucy@outlook.com"
}
```

#### User
- GET:   localhost:8000/users
- GET:   localhost:8000/users/:id
- POST:  localhost:8000/users
- PATCH:  localhost:8000/users
- DELETE: localhost:8000/users/:id
```
[
    {
        "_id" : ObjectId("5ea1704503e7a24b57abc722"),
        "firstname" : "alix",
        "lastname" : "john",
        "password" : "111",
        "email" : "alix@outlook.com"
    }
    {
        "_id" : ObjectId("5ea1705203e7a24b57abc723"),
        "firstname" : "lucy",
        "lastname" : "john",
        "password" : "123",
        "email" : "lucy@outlook.com"
    }
]
```

#### Pet
- GET:   localhost:8000/pets
- GET:   localhost:8000/pets/:id
- GET:   localhost:8000/pets/user/:userid
- POST:  localhost:8000/pets
- PATCH:  localhost:8000/pets
- DELETE: localhost:8000/pets/:id
```
{
    "_id" : ObjectId("5ea170e803e7a24b57abc725"),
    "name" : "rock",
    "age" : 2,
    "gender" : "male",
    "species" : "dogs",
    "userId" : ObjectId("5ea1705203e7a24b57abc723")
}
```

#### Article
- GET:   localhost:8000/articles
- GET:   localhost:8000/articles/:id
- GET:   localhost:8000/articles/user/:userid
- POST:  localhost:8000/articles
- PATCH:  localhost:8000/articles
- DELETE: localhost:8000/articles/:id
```
{
    "_id" : ObjectId("5ea1719803e7a24b57abc727"),
    "title" : "Bulldog care",
    "lastestAt" : 1587635225265.0,
    "content" : "care bulldog",
    "userId" : ObjectId("5ea1705203e7a24b57abc723")
}
```

#### PetService
- GET:   localhost:8000/pet-services
- GET:   localhost:8000/pet-services/:id
- POST:  localhost:8000/pet-services
- PATCH:  localhost:8000/pet-services
- DELETE: localhost:8000/pet-services/:id
```
{
    "_id" : ObjectId("5ea1724103e7a24b57abc729"),
    "title" : "Pet custody service",
    "lastestAt" : 1587635225265.0,
    "content" : "custody"
}
```