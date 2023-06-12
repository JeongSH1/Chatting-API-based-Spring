
<p style = "font-size: 100px; font-weight: bold">jwt token</p>

/join<br>
```agsl
{
  "nickname": "string",
  "email": "string",
  "password": "string"
}
```

```
{
  "responseStatus": "JOIN_SUCCESS",
  "data": {}
}
```

/login
```agsl
{
  "email": "string",
  "password": "string"
}

```

```agsl
{
  "responseStatus": "LOGIN_SUCCESS",
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmciLCJyb2xlcyI6IlVTRVIiLCJpYXQiOjE2ODY1NTYxNTksImV4cCI6MTY4NjU1Nzk1OX0.K2gvV9yEOHSrOdBpzzvJ_qBSKxY7YrMhY9aKbeEOhgk",
    "refreshToken": "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODY1NjMzNTl9.P8ZvGmeSawCwJuVQn09xu_sJQvyzsHpdeFmOAPBK25s"
  }
}
```

